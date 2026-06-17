import { describe, it, expect, vi, beforeEach } from "vite-plus/test";
import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BooksPage } from "./BooksPage";
import * as booksApi from "@/lib/api/books";

vi.mock("@/lib/api/books", () => ({
  getBooks: vi.fn(),
  createBook: vi.fn(),
  updateBook: vi.fn(),
  deleteBook: vi.fn(),
  bookTypeOptions: [
    { value: 0, key: "Enum:BookType.0" },
    { value: 1, key: "Enum:BookType.1" },
    { value: 2, key: "Enum:BookType.2" },
    { value: 3, key: "Enum:BookType.3" },
    { value: 4, key: "Enum:BookType.4" },
    { value: 5, key: "Enum:BookType.5" },
    { value: 6, key: "Enum:BookType.6" },
    { value: 7, key: "Enum:BookType.7" },
    { value: 8, key: "Enum:BookType.8" },
  ],
}));

vi.mock("@fluentui/react-components", async (importOriginal) => {
  const actual = await importOriginal<typeof import("@fluentui/react-components")>();
  return {
    ...actual,
    useToastController: () => ({ dispatchToast: vi.fn() }),
    useId: () => "test-toaster",
    Toaster: () => null,
  };
});

vi.mock("react-i18next", () => ({
  useTranslation: () => ({
    t: (key: string) => key,
    i18n: { language: "en" },
  }),
}));

vi.mock("@/lib/auth/permissions", () => ({
  usePermissions: () => ({ isGranted: () => true }),
}));

function createQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: { retry: false },
      mutations: { retry: false },
    },
  });
}

const MOCK_BOOKS = {
  items: [
    {
      id: "1",
      name: "Test Book",
      type: 1,
      publishDate: "2024-01-15",
      price: 29.99,
      creationTime: "2024-01-15T10:00:00Z",
    },
    {
      id: "2",
      name: "Another Book",
      type: 3,
      publishDate: "2024-06-01",
      price: 19.99,
      creationTime: "2024-06-01T10:00:00Z",
    },
  ],
  totalCount: 2,
};

function renderPage() {
  const qc = createQueryClient();
  return render(
    <QueryClientProvider client={qc}>
      <BooksPage />
    </QueryClientProvider>,
  );
}

describe("BooksPage", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    vi.spyOn(window, "confirm").mockReturnValue(true);
  });

  it("shows loading state while fetching", () => {
    vi.mocked(booksApi.getBooks).mockReturnValue(new Promise(() => {}));
    renderPage();
    expect(screen.getByText("AbpAccount::PleaseWait")).toBeInTheDocument();
  });

  it("renders book table with data", async () => {
    vi.mocked(booksApi.getBooks).mockResolvedValue(MOCK_BOOKS as any);
    renderPage();

    await waitFor(() => {
      expect(screen.getByText("Test Book")).toBeInTheDocument();
    });
    expect(screen.getByText("Another Book")).toBeInTheDocument();
  });

  it("renders new book button", async () => {
    vi.mocked(booksApi.getBooks).mockResolvedValue(MOCK_BOOKS as any);
    renderPage();

    await waitFor(() => {
      expect(screen.getByText("New Book")).toBeInTheDocument();
    });
  });

  it("opens create dialog on new book button click", async () => {
    vi.mocked(booksApi.getBooks).mockResolvedValue(MOCK_BOOKS as any);
    renderPage();

    await waitFor(() => {
      expect(screen.getByText("New Book")).toBeInTheDocument();
    });

    fireEvent.click(screen.getByText("New Book"));

    await waitFor(() => {
      expect(screen.getByPlaceholderText("Book name")).toBeInTheDocument();
    });
  });

  it("renders action buttons for each book", async () => {
    vi.mocked(booksApi.getBooks).mockResolvedValue(MOCK_BOOKS as any);
    renderPage();

    await waitFor(() => {
      expect(screen.getByText("Test Book")).toBeInTheDocument();
    });

    const actionButtons = screen.getAllByText("AbpUi::Actions");
    expect(actionButtons.length).toBeGreaterThanOrEqual(1);
  });

  it("calls deleteBook when delete is confirmed", async () => {
    vi.mocked(booksApi.getBooks).mockResolvedValue(MOCK_BOOKS as any);
    vi.mocked(booksApi.deleteBook).mockResolvedValue(undefined as any);
    renderPage();

    await waitFor(() => {
      expect(screen.getByText("Test Book")).toBeInTheDocument();
    });

    const actionButtons = screen.getAllByText("AbpUi::Actions");
    fireEvent.click(actionButtons[0]);

    await waitFor(() => {
      expect(screen.getByText("AbpUi::Delete")).toBeInTheDocument();
    });

    const deleteItems = screen.getAllByText("AbpUi::Delete");
    fireEvent.click(deleteItems[0]);

    await waitFor(() => {
      expect(screen.getByText("::AreYouSureToDelete")).toBeInTheDocument();
    });

    const confirmButtons = screen
      .getAllByRole("button")
      .filter((btn) => btn.textContent?.includes("AbpUi::Delete"));
    if (confirmButtons.length > 0) {
      fireEvent.click(confirmButtons[confirmButtons.length - 1]);
    }

    await waitFor(() => {
      expect(booksApi.deleteBook).toHaveBeenCalledWith("1", expect.anything());
    });
  });

  it("renders pagination controls when there are many books", async () => {
    vi.mocked(booksApi.getBooks).mockResolvedValue({
      items: MOCK_BOOKS.items,
      totalCount: 50,
    } as any);
    renderPage();

    await waitFor(() => {
      expect(screen.getByText("Test Book")).toBeInTheDocument();
    });

    expect(screen.getByText("Previous")).toBeInTheDocument();
    expect(screen.getByText("Next")).toBeInTheDocument();
  });

  it("renders price column", async () => {
    vi.mocked(booksApi.getBooks).mockResolvedValue(MOCK_BOOKS as any);
    renderPage();

    await waitFor(() => {
      expect(screen.getByText("29.99")).toBeInTheDocument();
    });
  });
});
