import { redirect } from '@sveltejs/kit';

export async function handle({ event, resolve }: { event: any; resolve: any }) {
	const pathname = event.url.pathname;

	// Redirect permanen (301) untuk rute program lama
	if (pathname === '/program' || pathname === '/program/') {
		throw redirect(301, '/layanan/pendidikan#program');
	}
	if (pathname.startsWith('/program/')) {
		const slug = pathname.replace('/program/', '');
		throw redirect(301, `/layanan/pendidikan/program/${slug}`);
	}

	// Redirect permanen (301) untuk rute beasiswa lama
	if (pathname === '/beasiswa' || pathname === '/beasiswa/') {
		throw redirect(301, '/layanan/beasiswa');
	}
	if (pathname.startsWith('/beasiswa/')) {
		const slug = pathname.replace('/beasiswa/', '');
		throw redirect(301, `/layanan/pendidikan/beasiswa/${slug}`);
	}

	return resolve(event);
}
