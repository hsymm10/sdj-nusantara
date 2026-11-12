import { idDict, type TranslationDict } from '#lib/i18n/id';
import { enDict } from '#lib/i18n/en';

const browser = typeof window !== 'undefined';

export type Locale = 'id' | 'en';

const STORAGE_KEY = 'sdj_lang';
const VALID_LOCALES: ReadonlyArray<Locale> = ['id', 'en'];

function isValidLocale(val: unknown): val is Locale {
	return typeof val === 'string' && (VALID_LOCALES as readonly string[]).includes(val);
}

class I18nStore {
	lang = $state<Locale>('id');

	constructor() {
		if (browser) {
			try {
				const saved = localStorage.getItem(STORAGE_KEY);
				if (isValidLocale(saved)) {
					this.lang = saved;
				} else {
					this.lang = 'id';
					if (saved !== null) {
						localStorage.setItem(STORAGE_KEY, 'id');
					}
				}
				document.documentElement.lang = this.lang;
			} catch {
				this.lang = 'id';
			}
		}
	}

	get dict(): TranslationDict {
		return this.lang === 'en' ? enDict : idDict;
	}

	setLang(next: Locale | string) {
		const valid: Locale = isValidLocale(next) ? next : 'id';
		this.lang = valid;
		if (browser) {
			try {
				localStorage.setItem(STORAGE_KEY, valid);
			} catch {
				// Abaikan error storage
			}
			document.documentElement.lang = valid;
		}
	}

	toggleLang() {
		this.setLang(this.lang === 'id' ? 'en' : 'id');
	}

	pick<T>(idVal: T, enVal: T): T {
		return this.lang === 'en' ? enVal : idVal;
	}
}

export const i18n = new I18nStore();
