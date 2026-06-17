import { useTranslation } from "react-i18next";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { ShieldError20Regular } from "@fluentui/react-icons";

export function ForbiddenPage() {
  const { t } = useTranslation();

  return (
    <div
      style={{
        display: "flex",
        minHeight: "50vh",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "1.5rem",
        padding: "2rem",
      }}
    >
      <ShieldError20Regular
        style={{ fontSize: "4rem", color: "var(--colorPaletteRedForeground3)" }}
      />
      <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", textAlign: "center" }}>
        <h1 style={{ fontSize: "1.5rem", fontWeight: 700 }}>403</h1>
        <p style={{ color: "var(--colorNeutralForeground3)" }}>{t("AbpUi::YouAreNotAuthorized")}</p>
      </div>
      <Link to="/">
        <Button>{t("AbpUi::BackToTheApplication")}</Button>
      </Link>
    </div>
  );
}
