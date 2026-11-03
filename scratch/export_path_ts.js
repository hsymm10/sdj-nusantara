import fs from 'node:fs';

const svgContent = fs.readFileSync('src/lib/assets/maps/indonesia.svg', 'utf-8');
const match = svgContent.match(/d="([^"]+)"/);

if (!match) {
  console.error('Could not find path d in svg');
  process.exit(1);
}

const pathD = match[1];
const tsContent = `// Path geometri kepulauan Indonesia dari Natural Earth 1:50m (Public Domain)
// Proyeksi Equirectangular: Bounding Box Lon 94.5°–141.5°, Lat -11.5°–6.5°
// ViewBox SVG: 0 0 940 360 (Rasio 2.61:1)

export const INDONESIA_MAP_PATH = '${pathD}';
`;

fs.writeFileSync('src/lib/assets/maps/indonesiaPath.ts', tsContent);
console.log('Saved src/lib/assets/maps/indonesiaPath.ts (length:', pathD.length, 'chars)');
