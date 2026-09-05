interface ImportMetaEnv {
	readonly BASE_URL: string;
	readonly MODE: string;
	readonly DEV: boolean;
	readonly PROD: boolean;
	readonly SSR: boolean;
	readonly [key: string]: unknown;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
