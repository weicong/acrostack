import { useTranslation } from "react-i18next";
import { useBooks } from "./useBooks";
import { BookDataGrid } from "./components/BookDataGrid";

export function BooksPage() {
  const { t } = useTranslation();
  const { items, isLoading } = useBooks({
    params: { maxResultCount: 100, sorting: "creationTime desc" },
  });

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
      <h1 style={{ fontSize: "1.875rem", fontWeight: 700 }}>{t("Menu:Books")}</h1>
      <BookDataGrid items={items} isLoading={isLoading} />
    </div>
  );
}
