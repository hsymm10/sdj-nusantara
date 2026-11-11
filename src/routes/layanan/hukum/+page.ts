import { redirect } from '@sveltejs/kit';
import { serviceConfig } from '#lib/config/services';

export function load() {
	if (!serviceConfig.legal) {
		throw redirect(307, '/layanan');
	}
}
