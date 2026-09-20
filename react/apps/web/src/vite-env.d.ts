/// <reference types="vite-plus/client" />
/// <reference types="vite-plus/test/globals" />
/// <reference types="@testing-library/jest-dom/vitest" />

interface ImportMetaEnv {
  readonly VITE_API_URL?: string;
  readonly VITE_AUTH_URL?: string;
  readonly VITE_APP_URL?: string;
  readonly VITE_DEFAULT_CULTURE?: string;
}
