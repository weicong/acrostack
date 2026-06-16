/**
 * Environment configuration.
 * Scriban placeholders are replaced during solution generation:
 * - 44320 for the API and Auth Server port
 * - AcroStack is replaced with the actual project name
 */
const apiUrl = import.meta.env.VITE_API_URL ?? "https://localhost:44320";
const authUrl = import.meta.env.VITE_AUTH_URL ?? "https://localhost:44320";

export const env = {
  apiUrl,
  authUrl,
  oauth: {
    issuer: `${authUrl.replace(/\/$/, "")}/`,
    clientId: "AcroStack_App",
    redirectUri:
      import.meta.env.VITE_APP_URL ||
      (typeof window !== "undefined" ? window.location.origin : "http://localhost:5173"),
    scope: "openid profile email offline_access AcroStack",
    responseType: "code" as const,
  },
} as const;
