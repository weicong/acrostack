import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/lib/auth/AuthContext";

export function HomePage() {
  const { t } = useTranslation();
  const { isAuthenticated, navigateToLogin } = useAuth();

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
      <div>
        <h1 style={{ fontSize: "1.875rem", fontWeight: 700 }}>{t("Welcome")}</h1>
        {!isAuthenticated && (
          <div
            style={{ marginTop: "1rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}
          >
            <Button onClick={navigateToLogin}>{t("AbpAccount::Login")}</Button>
          </div>
        )}
      </div>

      <div
        style={{
          borderRadius: "0.5rem",
          border: "1px solid var(--colorNeutralStroke1)",
          background: "var(--colorNeutralCardBackground)",
          padding: "1.5rem",
        }}
      >
        <h2 style={{ fontSize: "1.25rem", fontWeight: 600 }}>ABP React UI</h2>
        <p style={{ marginTop: "0.5rem", color: "var(--colorNeutralForeground3)" }}>
          This application is built with the ABP Framework React UI. You can use the pre-built
          components, layouts, and services to develop your application. Explore the full React UI
          documentation to learn how to customize and extend every aspect of the UI.
        </p>
        <a
          href="https://abp.io/docs/latest/framework/ui/react/index"
          target="_blank"
          rel="noreferrer"
          style={{ marginTop: "1rem", display: "inline-block" }}
        >
          <Button variant="outline">React UI Documentation</Button>
        </a>
      </div>
    </div>
  );
}
