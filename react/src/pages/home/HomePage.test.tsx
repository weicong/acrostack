import { describe, it, expect, vi, beforeEach } from "vite-plus/test";
import { render, screen } from "@testing-library/react";
import { HomePage } from "./HomePage";
import * as auth from "@/lib/auth/AuthContext";

vi.mock("@/lib/auth/AuthContext", () => ({
  useAuth: vi.fn(),
}));

describe("HomePage", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renders welcome message when authenticated", () => {
    vi.mocked(auth.useAuth).mockReturnValue({
      isAuthenticated: true,
      isLoading: false,
      user: { name: "Test User" },
      login: vi.fn(),
      logout: vi.fn(),
      navigateToLogin: vi.fn(),
      getAccessToken: vi.fn(),
    } as unknown as ReturnType<typeof auth.useAuth>);

    render(<HomePage />);
    expect(screen.getByText("Welcome")).toBeInTheDocument();
    expect(screen.getByText("Dashboard")).toBeInTheDocument();
  });

  it("renders login prompt when not authenticated", () => {
    vi.mocked(auth.useAuth).mockReturnValue({
      isAuthenticated: false,
      isLoading: false,
      user: null,
      login: vi.fn(),
      logout: vi.fn(),
      navigateToLogin: vi.fn(),
      getAccessToken: vi.fn(),
    } as unknown as ReturnType<typeof auth.useAuth>);

    render(<HomePage />);
    expect(screen.getByText("Welcome")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /login/i })).toBeInTheDocument();
  });
});
