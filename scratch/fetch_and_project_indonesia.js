import fs from 'node:fs';
import https from 'node:https';

const URL_50M = 'https://raw.githubusercontent.com/nvkelso/natural-earth-vector/master/geojson/ne_50m_admin_0_countries.geojson';

function download(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return resolve(download(res.headers.location));
      }
      if (res.statusCode !== 200) {
        return reject(new Error(`Failed to download: status ${res.statusCode}`));
      }
      const chunks = [];
      res.on('data', chunk => chunks.push(chunk));
      res.on('end', () => resolve(Buffer.concat(chunks).toString('utf-8')));
    }).on('error', reject);
  });
}

async function main() {
  console.log('Downloading Natural Earth 50m data...');
  const raw = await download(URL_50M);
  console.log('Parsing GeoJSON (length: ' + raw.length + ' bytes)...');
  const geojson = JSON.parse(raw);

  const idFeature = geojson.features.find(f => 
    (f.properties && (f.properties.ISO_A2 === 'ID' || f.properties.ADMIN === 'Indonesia'))
  );

  if (!idFeature) {
    throw new Error('Indonesia feature not found in Natural Earth dataset');
  }

  console.log('Found Indonesia feature with geometry type:', idFeature.geometry.type);
  
  // Save standalone indonesia.json
  const indonesiaData = {
    type: 'FeatureCollection',
    source: 'Natural Earth 1:50m Admin-0 Countries (Public Domain)',
    features: [idFeature]
  };
  fs.writeFileSync('src/lib/assets/maps/indonesia.json', JSON.stringify(indonesiaData, null, 2));
  console.log('Saved src/lib/assets/maps/indonesia.json');

  // Bounding box
  // Lon 94.5 -> 141.5 (range = 47.0)
  // Lat -11.5 -> 6.5 (range = 18.0)
  const W = 940;
  const H = 360;
  const lonMin = 94.5;
  const lonMax = 141.5;
  const latMin = -11.5;
  const latMax = 6.5;

  function project(lon, lat) {
    const x = ((lon - lonMin) / (lonMax - lonMin)) * W;
    const y = ((latMax - lat) / (latMax - latMin)) * H;
    return [Math.round(x * 10) / 10, Math.round(y * 10) / 10];
  }

  // Convert polygons to SVG paths
  const coordinatesList = idFeature.geometry.type === 'MultiPolygon' 
    ? idFeature.geometry.coordinates 
    : [idFeature.geometry.coordinates];

  let pathStrings = [];
  let totalPoints = 0;

  for (const polygon of coordinatesList) {
    for (const ring of polygon) {
      if (ring.length < 3) continue;
      // Filter out small rings with bounding box < 0.05 deg if needed, or keep all
      let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;
      let d = '';
      for (let i = 0; i < ring.length; i++) {
        const [lon, lat] = ring[i];
        const [x, y] = project(lon, lat);
        minX = Math.min(minX, x);
        maxX = Math.max(maxX, x);
        minY = Math.min(minY, y);
        maxY = Math.max(maxY, y);
        if (i === 0) {
          d += `M${x} ${y}`;
        } else {
          d += `L${x} ${y}`;
        }
      }
      d += 'Z';
      totalPoints += ring.length;
      pathStrings.push(d);
    }
  }

  console.log(`Generated ${pathStrings.length} polygon paths with ${totalPoints} points.`);
  
  const combinedPath = pathStrings.join(' ');
  const fullSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}">
  <title>Peta Indonesia</title>
  <desc>Peta Kepulauan Nusantara Sumber Data Natural Earth Skala 1:50m Proyeksi Equirectangular</desc>
  <path d="${combinedPath}" fill="#079EAD" stroke="#FFFFFF" stroke-width="0.6" stroke-linejoin="round"/>
</svg>`;

  fs.writeFileSync('src/lib/assets/maps/indonesia.svg', fullSvg);
  console.log('Saved src/lib/assets/maps/indonesia.svg (' + fullSvg.length + ' bytes)');

  // Let's also output the size of indonesia.json
  const jsonStat = fs.statSync('src/lib/assets/maps/indonesia.json');
  console.log('indonesia.json size:', (jsonStat.size / 1024).toFixed(1), 'KB');
  const svgStat = fs.statSync('src/lib/assets/maps/indonesia.svg');
  console.log('indonesia.svg size:', (svgStat.size / 1024).toFixed(1), 'KB');
}

main().catch(err => {
  console.error('Error:', err);
  process.exit(1);
});
