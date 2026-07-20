import { describe, it, expect, vi, beforeEach } from "vite-plus/test";
import type { InternalAxiosRequestConfig } from "axios";
import { applyRequestConfig, handleResponseError } from "./httpClient";

const mockGetUser = vi.fn();
const mockSigninRedirect = vi.fn();

vi.mock("@/lib/auth/userManager", () => ({
  userManager: {
    getUser: (...args: unknown[]) => mockGetUser(...args),
    signinRedirect: (...args: unknown[]) => mockSigninRedirect(...args),
  },
}));

vi.mock("@/lib/runtimeConfig", () => ({
  getApiBaseUrl: vi.fn(() => "http://api.test"),
}));

const mockEmitRouteEvent = vi.fn();
vi.mock("@/lib/routing/routeEvents", () => ({
  emitRouteEvent: (...args: unknown[]) => mockEmitRouteEvent(...args),
}));

vi.mock("@/lib/i18n/i18n", () => ({
  default: { language: "en" },
}));

vi.mock("@kubb/plugin-client/clients/axios", () => ({
  axiosInstance: { interceptors: { request: { use: vi.fn() }, response: { use: vi.fn() } } },
}));

function makeConfig(
  overrides: Partial<InternalAxiosRequestConfig> = {},
): InternalAxiosRequestConfig {
  return {
    headers: {},
    ...overrides,
  } as InternalAxiosRequestConfig;
}

describe("applyRequestConfig", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    sessionStorage.clear();
    mockGetUser.mockResolvedValue(null);
  });

  it("sets baseURL from runtimeConfig", async () => {
    const config = await applyRequestConfig(makeConfig());
    expect(config.baseURL).toBe("http://api.test");
  });

  it("adds Bearer token when a user with access_token exists", async () => {
    mockGetUser.mockResolvedValue({ access_token: "tok-123" });
    const config = await applyRequestConfig(makeConfig());
    expect(config.headers.Authorization).toBe("Bearer tok-123");
  });

  it("does not set Authorization when no user", async () => {
    const config = await applyRequestConfig(makeConfig());
    expect(config.headers.Authorization).toBeUndefined();
  });

  it("adds __tenant header from sessionStorage", async () => {
    sessionStorage.setItem("abp_tenant_id", "tenant-42");
    const config = await applyRequestConfig(makeConfig());
    expect(config.headers.__tenant).toBe("tenant-42");
  });

  it("does not override an existing __tenant header", async () => {
    sessionStorage.setItem("abp_tenant_id", "tenant-42");
    const config = await applyRequestConfig(
      makeConfig({ headers: { __tenant: "explicit" } as never }),
    );
    expect(config.headers.__tenant).toBe("explicit");
  });

  it("omits __tenant header when no tenant id stored", async () => {
    const config = await applyRequestConfig(makeConfig());
    expect(config.headers.__tenant).toBeUndefined();
  });

  it("sets Accept-Language from i18n", async () => {
    const config = await applyRequestConfig(makeConfig());
    expect(config.headers["Accept-Language"]).toBe("en");
  });

  it("does not override an existing Accept-Language header", async () => {
    const config = await applyRequestConfig(
      makeConfig({ headers: { "Accept-Language": "fr" } as never }),
    );
    expect(config.headers["Accept-Language"]).toBe("fr");
  });
});

describe("handleResponseError", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    mockSigninRedirect.mockResolvedValue(undefined);
    window.history.replaceState({}, "", "/dashboard");
  });

  it("on 401 redirects to login with returnUrl and rejects", async () => {
    await expect(
      handleResponseError({ response: { status: 401 }, config: { url: "/api/books" } }),
    ).rejects.toThrow("Unauthorized");
    expect(mockSigninRedirect).toHaveBeenCalledWith({
      state: { returnUrl: window.location.href },
    });
  });

  it("on 401 for /connect/token does NOT redirect", async () => {
    await expect(
      handleResponseError({ response: { status: 401 }, config: { url: "/connect/token" } }),
    ).rejects.toThrow("Unauthorized");
    expect(mockSigninRedirect).not.toHaveBeenCalled();
  });

  it("on 403 emits a route event and rejects", async () => {
    await expect(handleResponseError({ response: { status: 403 } })).rejects.toThrow("Forbidden");
    expect(mockEmitRouteEvent).toHaveBeenCalledWith({ type: "403", to: "/403" });
  });

  it("passes through other errors unchanged", async () => {
    const err = { response: { status: 500 } };
    await expect(handleResponseError(err)).rejects.toBe(err);
    expect(mockSigninRedirect).not.toHaveBeenCalled();
    expect(mockEmitRouteEvent).not.toHaveBeenCalled();
  });
});
