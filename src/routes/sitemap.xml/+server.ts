import { programsData } from '#lib/data/programs';
import { scholarshipsData } from '#lib/data/scholarships';
import { articlesData } from '#lib/data/articles';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async () => {
	const siteUrl = 'https://sdjnusantara.com';

	const staticPages = [
		{ url: '', priority: '1.0', changefreq: 'weekly' },
		{ url: '/tentang-kami', priority: '0.8', changefreq: 'monthly' },
		{ url: '/layanan', priority: '0.9', changefreq: 'weekly' },
		{ url: '/layanan/pendidikan', priority: '0.9', changefreq: 'weekly' },
		{ url: '/kemitraan', priority: '0.8', changefreq: 'monthly' },
		{ url: '/artikel', priority: '0.8', changefreq: 'daily' },
		{ url: '/kontak', priority: '0.7', changefreq: 'monthly' },
		{ url: '/konsultasi', priority: '0.7', changefreq: 'monthly' },
		{ url: '/kebijakan-privasi', priority: '0.3', changefreq: 'yearly' },
		{ url: '/syarat-ketentuan', priority: '0.3', changefreq: 'yearly' }
	];

	const programPages = programsData.map((p) => ({
		url: `/layanan/pendidikan/program/${p.slug}`,
		priority: '0.8',
		changefreq: 'monthly'
	}));

	const scholarshipPages = scholarshipsData.map((s) => ({
		url: `/layanan/pendidikan/beasiswa/${s.id}`,
		priority: '0.8',
		changefreq: 'weekly'
	}));

	const articlePages = articlesData.map((a) => ({
		url: `/artikel/${a.slug}`,
		priority: '0.7',
		changefreq: 'monthly'
	}));

	const allPages = [...staticPages, ...programPages, ...scholarshipPages, ...articlePages];

	const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages
	.map(
		(page) => `  <url>
    <loc>${siteUrl}${page.url}</loc>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
	)
	.join('\n')}
</urlset>`;

	return new Response(sitemap.trim(), {
		headers: {
			'Content-Type': 'application/xml',
			'Cache-Control': 'max-age=0, s-maxage=3600'
		}
	});
};
