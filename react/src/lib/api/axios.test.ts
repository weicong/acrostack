import { describe, it, expect, vi, beforeEach, afterEach } from "vite-plus/test";
import axios from "axios";
import type { InternalAxiosRequestConfig, AxiosResponse, AxiosError } from "axios";

const mockGetUser = vi.fn();
const mockSigninRedirect = vi.fn();

vi.mock("@/lib/auth/userManager", () => ({
  userManager: {
    getUser: (...args: any[]) => mockGetUser(...args),
    signinRedirect: (...args: any[]) => mockSigninRedirect(...args),
  },
}));

vi.mock("@/lib/runtimeConfig", () => ({
  getApiBaseUrl: () => "https://api.example.com/api",
}));

vi.mock("@/lib/i18n/i18n", () => ({
  default: { language: "en" },
}));

let api: typeof import("./axios").api;
let setTenantId: typeof import("./axios").setTenantId;

describe("axios interceptors", () => {
  beforeEach(async () => {
    vi.clearAllMocks();
    sessionStorage.clear();
    const module = await import("./axios");
    api = module.api;
    setTenantId = module.setTenantId;
  });

  describe("request interceptor", () => {
    it("sets baseURL from runtime config", async () => {
      mockGetUser.mockResolvedValue(null);

      const config = {
        headers: axios.defaults.headers.common,
        baseURL: "",
      } as any as InternalAxiosRequestConfig;

      const interceptors = api.interceptors.request as any;
      const handler = interceptors.handlers[0];
      const result = await handler.fulfilled(config);
      expect(result.baseURL).toBe("https://api.example.com/api");
    });

    it("adds Bearer token when user has access_token", async () => {
      mockGetUser.mockResolvedValue({ access_token: "my-token" });

      const config = {
        headers: axios.defaults.headers.common,
        baseURL: "",
      } as any as InternalAxiosRequestConfig;

      const interceptors = api.interceptors.request as any;
      const handler = interceptors.handlers[0];
      const result = await handler.fulfilled(config);
      expect(result.headers.Authorization).toBe("Bearer my-token");
    });

    it("does not add Authorization header when no user", async () => {
      mockGetUser.mockResolvedValue(null);

      const config = {
        headers: axios.defaults.headers.common,
        baseURL: "",
      } as any as InternalAxiosRequestConfig;

      const interceptors = api.interceptors.request as any;
      const handler = interceptors.handlers[0];
      const result = await handler.fulfilled(config);
      expect(result.headers.Authorization).toBeUndefined();
    });

    it("adds tenant header when tenant ID is set", async () => {
      mockGetUser.mockResolvedValue(null);
      setTenantId("tenant-123");

      const config = {
        headers: axios.defaults.headers.common,
        baseURL: "",
      } as any as InternalAxiosRequestConfig;

      const interceptors = api.interceptors.request as any;
      const handler = interceptors.handlers[0];
      const result = await handler.fulfilled(config);
      expect(result.headers.__tenant).toBe("tenant-123");
    });

    it("adds Accept-Language header from i18n", async () => {
      mockGetUser.mockResolvedValue(null);

      const config = {
        headers: axios.defaults.headers.common,
        baseURL: "",
      } as any as InternalAxiosRequestConfig;

      const interceptors = api.interceptors.request as any;
      const handler = interceptors.handlers[0];
      const result = await handler.fulfilled(config);
      expect(result.headers["Accept-Language"]).toBe("en");
    });
  });

  describe("response interceptor", () => {
    it("redirects to login on 401", async () => {
      mockSigninRedirect.mockResolvedValue(undefined);

      const error = {
        response: { status: 401 },
        config: { url: "/some-api", skipAuthRedirect: false },
      } as any;

      const interceptors = api.interceptors.response as any;
      const handler = interceptors.handlers[0];

      await expect(handler.rejected(error)).rejects.toThrow("Unauthorized - redirecting to login");
      expect(mockSigninRedirect).toHaveBeenCalled();
    });

    it("does not redirect on 401 when skipAuthRedirect is true", async () => {
      const error = {
        response: { status: 401 },
        config: { url: "/some-api", skipAuthRedirect: true },
      } as any;

      const interceptors = api.interceptors.response as any;
      const handler = interceptors.handlers[0];

      await expect(handler.rejected(error)).rejects.toEqual(error);
      expect(mockSigninRedirect).not.toHaveBeenCalled();
    });

    it("redirects to /403 on 403 response", async () => {
      const originalHref = window.location.href;
      const error = {
        response: { status: 403 },
        config: {},
      } as any;

      const interceptors = api.interceptors.response as any;
      const handler = interceptors.handlers[0];

      await expect(handler.rejected(error)).rejects.toThrow("Forbidden");
    });

    it("passes through other errors", async () => {
      const error = {
        response: { status: 500 },
        config: {},
      } as any;

      const interceptors = api.interceptors.response as any;
      const handler = interceptors.handlers[0];

      await expect(handler.rejected(error)).rejects.toEqual(error);
    });
  });

  describe("setTenantId", () => {
    it("stores tenant ID in sessionStorage", () => {
      setTenantId("abc");
      expect(sessionStorage.getItem("abp_tenant_id")).toBe("abc");
    });

    it("removes tenant ID when null", () => {
      setTenantId("abc");
      setTenantId(null);
      expect(sessionStorage.getItem("abp_tenant_id")).toBeNull();
    });
  });
});
