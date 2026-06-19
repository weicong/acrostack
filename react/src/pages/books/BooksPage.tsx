import { useTranslation } from "react-i18next";

export function BooksPage() {
  const { t } = useTranslation();

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
      <h1 style={{ fontSize: "1.875rem", fontWeight: 700 }}>{t("Menu:Books")}</h1>
      <div>data</div>
    </div>
  );
}
