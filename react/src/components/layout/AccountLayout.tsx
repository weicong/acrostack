import { Link } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import type { ReactNode } from "react";

export function AccountLayout({ children }: { children: ReactNode }) {
  const { t } = useTranslation();

  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "var(--colorNeutralBackground3)",
        padding: "1rem",
      }}
    >
      <div style={{ width: "100%", maxWidth: "28rem" }}>{children}</div>
      <p
        style={{
          marginTop: "1.5rem",
          textAlign: "center",
          fontSize: "0.875rem",
          color: "var(--colorNeutralForeground3)",
        }}
      >
        <Link to="/">{t("AbpUi::BackToTheApplication")}</Link>
      </p>
    </div>
  );
}
