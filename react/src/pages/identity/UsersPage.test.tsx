import { describe, it, expect, vi, beforeEach } from "vite-plus/test";
import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { UsersPage } from "./UsersPage";
import * as appUsersApi from "@/lib/api/appUsers";

vi.mock("@/lib/i18n/i18n", () => ({ default: {} }));

vi.mock("@/lib/api/appUsers", () => ({
  getAppUsers: vi.fn(),
}));

vi.mock("react-i18next", () => ({
  useTranslation: () => ({
    t: (key: string) => key,
    i18n: { language: "en" },
  }),
}));

function createQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: { retry: false },
      mutations: { retry: false },
    },
  });
}

const MOCK_USERS = {
  items: [
    {
      id: "1",
      userName: "alice",
      email: "alice@example.com",
      isActive: true,
    },
    {
      id: "2",
      userName: "bob",
      email: "bob@example.com",
      isActive: false,
    },
  ],
  totalCount: 2,
};

function renderPage() {
  const qc = createQueryClient();
  return render(
    <QueryClientProvider client={qc}>
      <UsersPage />
    </QueryClientProvider>,
  );
}

describe("UsersPage", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    vi.mocked(appUsersApi.getAppUsers).mockResolvedValue(MOCK_USERS as any);
  });

  it("shows loading state while fetching", () => {
    vi.mocked(appUsersApi.getAppUsers).mockReturnValue(new Promise(() => {}));
    renderPage();
    expect(screen.getByText(/AbpAccount::PleaseWait/i)).toBeInTheDocument();
  });

  it("renders user table with data", async () => {
    renderPage();
    await waitFor(() => {
      expect(screen.getByText("alice")).toBeInTheDocument();
    });
    expect(screen.getByText("bob")).toBeInTheDocument();
  });

  it("does NOT render a new user button", async () => {
    renderPage();
    await waitFor(() => {
      expect(screen.getByText("alice")).toBeInTheDocument();
    });
    expect(screen.queryByText(/AbpIdentity::NewUser/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/New user/i)).not.toBeInTheDocument();
  });

  it("does NOT render a create user dialog", async () => {
    renderPage();
    await waitFor(() => {
      expect(screen.getByText("alice")).toBeInTheDocument();
    });
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });

  it("clicking a sortable column header triggers re-fetch with sorting asc", async () => {
    renderPage();
    await waitFor(() => {
      expect(screen.getByText("alice")).toBeInTheDocument();
    });

    const userNameButtons = screen
      .getAllByRole("button")
      .filter((btn) => btn.textContent?.includes("AbpIdentity::UserName"));
    fireEvent.click(userNameButtons[0]);

    await waitFor(() => {
      expect(appUsersApi.getAppUsers).toHaveBeenCalledWith(
        expect.objectContaining({ sorting: "UserName asc" }),
      );
    });
  });

  it("clicking the same header twice toggles direction to desc", async () => {
    renderPage();
    await waitFor(() => {
      expect(screen.getByText("alice")).toBeInTheDocument();
    });

    const getSortButton = () =>
      screen
        .getAllByRole("button")
        .filter((btn) => btn.textContent?.includes("AbpIdentity::UserName"))[0];

    fireEvent.click(getSortButton());

    await waitFor(() => {
      expect(appUsersApi.getAppUsers).toHaveBeenCalledWith(
        expect.objectContaining({ sorting: "UserName asc" }),
      );
    });

    await waitFor(() => {
      expect(screen.getByText("alice")).toBeInTheDocument();
    });

    fireEvent.click(getSortButton());

    await waitFor(
      () => {
        expect(appUsersApi.getAppUsers).toHaveBeenCalledWith(
          expect.objectContaining({ sorting: "UserName desc" }),
        );
      },
      { timeout: 5000 },
    );
  });

  it("clicking a different column resets direction to asc", async () => {
    renderPage();
    await waitFor(() => {
      expect(screen.getByText("alice")).toBeInTheDocument();
    });

    const getUserNameButton = () =>
      screen
        .getAllByRole("button")
        .filter((btn) => btn.textContent?.includes("AbpIdentity::UserName"))[0];

    fireEvent.click(getUserNameButton());
    await waitFor(() => {
      expect(appUsersApi.getAppUsers).toHaveBeenCalledWith(
        expect.objectContaining({ sorting: "UserName asc" }),
      );
    });

    await waitFor(() => {
      expect(screen.getByText("alice")).toBeInTheDocument();
    });

    const getEmailButton = () =>
      screen
        .getAllByRole("button")
        .filter((btn) => btn.textContent?.includes("AbpIdentity::Email"))[0];

    fireEvent.click(getEmailButton());
    await waitFor(
      () => {
        expect(appUsersApi.getAppUsers).toHaveBeenCalledWith(
          expect.objectContaining({ sorting: "Email asc" }),
        );
      },
      { timeout: 5000 },
    );
  });

  it("initial fetch has no sorting param", async () => {
    renderPage();
    await waitFor(() => {
      expect(screen.getByText("alice")).toBeInTheDocument();
    });
    expect(appUsersApi.getAppUsers).toHaveBeenCalledWith(
      expect.objectContaining({ sorting: undefined }),
    );
  });
});
