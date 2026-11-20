// src/lib/config/services.ts
// Konfigurasi terpusat visibilitas dan akses modul layanan SDJ Nusantara

export const serviceConfig = {
	education: true,
	scholarship: true,
	legal: false
} as const;

export type ServiceModuleKey = keyof typeof serviceConfig;

