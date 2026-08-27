/**
 * Environment configuration.
 * Scriban placeholders are replaced during solution generation:
 * - 44320 for the API and Auth Server port
 * - AcroStack is replaced with the actual project name
 */

/** 后端 API / Auth Server 默认地址（本地开发），env.ts 与 runtimeConfig.ts 共用 */
export const DEFAULT_API_BASE_URL = "https://localhost:44320";

/** 前端应用默认地址（本地开发 Vite dev server） */
export const DEFAULT_APP_BASE_URL = "http://localhost:5173";

/** 默认文化（可经 VITE_DEFAULT_CULTURE 环境变量注入，默认简体中文） */
export const DEFAULT_CULTURE = import.meta.env.VITE_DEFAULT_CULTURE ?? "zh-Hans";

const apiUrl = import.meta.env.VITE_API_URL ?? DEFAULT_API_BASE_URL;
const authUrl = import.meta.env.VITE_AUTH_URL ?? DEFAULT_API_BASE_URL;

export const env = {
  apiUrl,
  authUrl,
  oauth: {
    issuer: `${authUrl.replace(/\/$/, "")}/`,
    clientId: "AcroStack_App",
    redirectUri:
      import.meta.env.VITE_APP_URL ||
      (typeof window !== "undefined" ? window.location.origin : DEFAULT_APP_BASE_URL),
    scope: "openid profile email offline_access AcroStack",
    responseType: "code" as const,
  },
} as const;
