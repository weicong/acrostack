import { describe, it, expect, vi, beforeEach } from "vite-plus/test";
import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { UsersPage } from "./UsersPage";
import { useAppUserGetList } from "@/api/hooks/appUser/useAppUserGetList";

vi.mock("@/lib/i18n/i18n", () => ({ default: {} }));

vi.mock("@/api/hooks/appUser/useAppUserGetList", () => ({
  useAppUserGetList: vi.fn(),
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
      name: "Alice",
      surname: "Smith",
      phoneNumber: "123",
      isActive: true,
    },
    {
      id: "2",
      userName: "bob",
      email: "bob@example.com",
      name: "Bob",
      surname: "Jones",
      phoneNumber: null,
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
    vi.mocked(useAppUserGetList).mockReturnValue({
      data: MOCK_USERS as any,
      isLoading: false,
      error: null,
    } as any);
  });

  it("renders data grid even while loading", () => {
    vi.mocked(useAppUserGetList).mockReturnValue({
      data: undefined,
      isLoading: true,
      error: null,
    } as any);
    renderPage();
    expect(screen.getByRole("grid")).toBeInTheDocument();
  });

  it("renders user data grid with data", async () => {
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
  });

  it("does NOT render a create user dialog", async () => {
    renderPage();
    await waitFor(() => {
      expect(screen.getByText("alice")).toBeInTheDocument();
    });
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });

  it("initial fetch has default sorting by userName asc", async () => {
    renderPage();
    await waitFor(() => {
      expect(screen.getByText("alice")).toBeInTheDocument();
    });
    expect(useAppUserGetList).toHaveBeenCalledWith(
      expect.objectContaining({ Sorting: "UserName asc" }),
    );
  });

  it("clicking a sortable column header triggers re-fetch with sorting asc", async () => {
    renderPage();
    await waitFor(() => {
      expect(screen.getByText("alice")).toBeInTheDocument();
    });

    const userNameHeader = screen.getByText("AbpIdentity::UserName");
    fireEvent.click(userNameHeader);

    await waitFor(() => {
      expect(useAppUserGetList).toHaveBeenCalledWith(
        expect.objectContaining({ Sorting: "UserName asc" }),
      );
    });
  });

  it("clicking the same header twice toggles direction to desc", async () => {
    renderPage();
    await waitFor(() => {
      expect(screen.getByText("alice")).toBeInTheDocument();
    });

    const userNameHeader = screen.getByText("AbpIdentity::UserName");
    fireEvent.click(userNameHeader);

    await waitFor(() => {
      expect(useAppUserGetList).toHaveBeenCalledWith(
        expect.objectContaining({ Sorting: "UserName asc" }),
      );
    });

    fireEvent.click(userNameHeader);

    await waitFor(
      () => {
        expect(useAppUserGetList).toHaveBeenCalledWith(
          expect.objectContaining({ Sorting: "UserName desc" }),
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

    const userNameHeader = screen.getByText("AbpIdentity::UserName");
    fireEvent.click(userNameHeader);
    await waitFor(() => {
      expect(useAppUserGetList).toHaveBeenCalledWith(
        expect.objectContaining({ Sorting: "UserName asc" }),
      );
    });

    const emailHeader = screen.getByText("AbpIdentity::Email");
    fireEvent.click(emailHeader);
    await waitFor(
      () => {
        expect(useAppUserGetList).toHaveBeenCalledWith(
          expect.objectContaining({ Sorting: "Email asc" }),
        );
      },
      { timeout: 5000 },
    );
  });

  it("renders status badges for active and inactive users", async () => {
    renderPage();
    await waitFor(() => {
      expect(screen.getByText("alice")).toBeInTheDocument();
    });
    expect(screen.getByText("AbpIdentity::Active")).toBeInTheDocument();
    expect(screen.getByText("AbpIdentity::NotActive")).toBeInTheDocument();
  });
});
