import { describe, it, expect, vi, beforeEach } from "vite-plus/test";
import { render, act, waitFor } from "@testing-library/react";
import React from "react";
import { AuthProvider, useAuth } from "./AuthContext";
import * as userManagerModule from "./userManager";

const mockHandleSigninCallback = vi.fn();
const mockSubscribe = vi.fn();
const mockLogin = vi.fn();
const mockUseAuth = vi.fn();

vi.mock("./userManager", () => {
  const AuthProviderMock = ({ children }: { children: React.ReactNode }) => <>{children}</>;

  const mockClient = {
    handleSigninCallback: (...args: unknown[]) => mockHandleSigninCallback(...args),
    subscribe: (...args: unknown[]) => mockSubscribe(...args),
    AuthProvider: AuthProviderMock,
    useAuth: () => mockUseAuth(),
    login: (...args: unknown[]) => mockLogin(...args),
  };

  return {
    userManager: {
      getUser: vi.fn().mockResolvedValue(null),
    },
    getAuthClient: vi.fn(() => mockClient),
  };
});

const mockFetchAppConfig = vi.fn();
const mockAppConfigClear = vi.fn();

vi.mock("./permissions", () => ({
  appConfig: {
    clear: (...args: unknown[]) => mockAppConfigClear(...args),
  },
  fetchAppConfig: (...args: unknown[]) => mockFetchAppConfig(...args),
}));

function TestConsumer() {
  const auth = useAuth();
  return (
    <div>
      <span data-testid="auth">{String(auth.isAuthenticated)}</span>
      <span data-testid="user">{(auth.user as { name?: string } | null)?.name ?? "none"}</span>
      <button onClick={() => auth.login()}>login</button>
      <button onClick={() => auth.navigateToLogin()}>navigate-login</button>
    </div>
  );
}

describe("AuthContext", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    window.history.replaceState({}, "", "/");
    mockHandleSigninCallback.mockResolvedValue(null);
    mockSubscribe.mockReturnValue(() => {});
    mockLogin.mockResolvedValue(undefined);
    mockUseAuth.mockReturnValue({
      isAuthenticated: false,
      isLoading: false,
      user: null,
      login: mockLogin,
      logout: vi.fn(),
      getAccessToken: vi.fn(),
    });

    vi.mocked(userManagerModule.getAuthClient).mockReturnValue({
      handleSigninCallback: mockHandleSigninCallback,
      subscribe: mockSubscribe,
      AuthProvider: ({ children }: { children: React.ReactNode }) => <>{children}</>,
      useAuth: mockUseAuth,
      login: mockLogin,
    } as unknown as ReturnType<typeof userManagerModule.getAuthClient>);
  });

  it("renders children via authClient.AuthProvider", () => {
    const { getByText } = render(
      <AuthProvider>
        <span>child content</span>
      </AuthProvider>,
    );
    expect(getByText("child content")).toBeTruthy();
  });

  it("subscribes to auth events on mount", async () => {
    render(
      <AuthProvider>
        <div />
      </AuthProvider>,
    );
    await waitFor(() => {
      expect(mockSubscribe).toHaveBeenCalled();
    });
  });

  it("calls handleSigninCallback when URL has code and state params", async () => {
    window.history.replaceState({}, "", "/account/login?code=abc&state=xyz");

    render(
      <AuthProvider>
        <div />
      </AuthProvider>,
    );

    await waitFor(() => {
      expect(mockHandleSigninCallback).toHaveBeenCalled();
    });
  });

  it("does not call handleSigninCallback when URL has no code/state", async () => {
    render(
      <AuthProvider>
        <div />
      </AuthProvider>,
    );

    await act(async () => {});
    expect(mockHandleSigninCallback).not.toHaveBeenCalled();
  });

  it("calls fetchAppConfig when userLoaded event with isAuthenticated=true is received", async () => {
    let capturedCallback: ((event: unknown) => Promise<void>) | null = null;
    mockSubscribe.mockImplementation((cb: (event: unknown) => Promise<void>) => {
      capturedCallback = cb;
      return () => {};
    });

    render(
      <AuthProvider>
        <div />
      </AuthProvider>,
    );

    await waitFor(() => expect(capturedCallback).not.toBeNull());

    await act(async () => {
      await capturedCallback!({
        eventName: "userLoaded",
        isAuthenticated: true,
        user: { access_token: "token-abc" },
      });
    });

    expect(mockFetchAppConfig).toHaveBeenCalledWith("token-abc");
  });

  it("calls appConfig.clear when userUnloaded event is received", async () => {
    let capturedCallback: ((event: unknown) => Promise<void>) | null = null;
    mockSubscribe.mockImplementation((cb: (event: unknown) => Promise<void>) => {
      capturedCallback = cb;
      return () => {};
    });

    render(
      <AuthProvider>
        <div />
      </AuthProvider>,
    );

    await waitFor(() => expect(capturedCallback).not.toBeNull());

    await act(async () => {
      await capturedCallback!({ eventName: "userUnloaded" });
    });

    expect(mockAppConfigClear).toHaveBeenCalled();
  });

  it("useAuth delegates to authClient.useAuth and adds navigateToLogin", () => {
    mockUseAuth.mockReturnValue({
      isAuthenticated: true,
      isLoading: false,
      user: { name: "Test User" },
      login: mockLogin,
      logout: vi.fn(),
      getAccessToken: vi.fn(),
    });

    const { getByTestId } = render(
      <AuthProvider>
        <TestConsumer />
      </AuthProvider>,
    );

    expect(getByTestId("auth").textContent).toBe("true");
    expect(getByTestId("user").textContent).toBe("Test User");
  });

  it("navigateToLogin calls ctx.login()", () => {
    const { getByText } = render(
      <AuthProvider>
        <TestConsumer />
      </AuthProvider>,
    );

    act(() => {
      getByText("navigate-login").click();
    });

    expect(mockLogin).toHaveBeenCalled();
  });
});
