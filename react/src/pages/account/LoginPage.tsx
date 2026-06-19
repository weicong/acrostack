import { useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { Button, Card, CardHeader } from "@fluentui/react-components";
import { useAuth } from "@/lib/auth/AuthContext";

export function LoginPage() {
  const { t } = useTranslation();
  const { isAuthenticated, isLoading, login } = useAuth();

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      void login();
    }
  }, [isLoading, isAuthenticated, login]);

  if (isLoading) {
    return (
      <Card>
        <CardHeader
          header={
            <span style={{ fontWeight: 600, fontSize: "1.125rem" }}>{t("AbpAccount::Login")}</span>
          }
          description={
            <span style={{ fontSize: "0.875rem", color: "var(--colorNeutralForeground3)" }}>
              {t("AbpAccount::LoginSubtitle", "Redirecting to sign in...")}
            </span>
          }
        />
        <div style={{ padding: "0 1.5rem 1.5rem" }}>
          <div style={{ display: "flex", justifyContent: "center", padding: "1rem 0" }}>
            <div
              style={{
                width: "2rem",
                height: "2rem",
                border: "2px solid var(--colorBrandStroke1)",
                borderTopColor: "transparent",
                borderRadius: "50%",
                animation: "spin 1s linear infinite",
              }}
              aria-hidden
            />
          </div>
        </div>
      </Card>
    );
  }

  if (isAuthenticated) {
    return (
      <Card>
        <CardHeader
          header={
            <span style={{ fontWeight: 600, fontSize: "1.125rem" }}>{t("AbpAccount::Login")}</span>
          }
          description={
            <span style={{ fontSize: "0.875rem", color: "var(--colorNeutralForeground3)" }}>
              {t("AbpAccount::AlreadyLoggedIn", "You are already logged in.")}
            </span>
          }
        />
        <div style={{ padding: "0 1.5rem 1.5rem" }}>
          <Link to="/">
            <Button>{t("AbpUi::BackToTheApplication")}</Button>
          </Link>
        </div>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader
        header={
          <span style={{ fontWeight: 600, fontSize: "1.125rem" }}>{t("AbpAccount::Login")}</span>
        }
        description={
          <span style={{ fontSize: "0.875rem", color: "var(--colorNeutralForeground3)" }}>
            {t("AbpAccount::LoginSubtitle", "Sign in to your account")}
          </span>
        }
      />
      <div style={{ padding: "0 1.5rem 1.5rem" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <Button style={{ width: "100%" }} onClick={() => void login()}>
            {t("AbpAccount::Login")}
          </Button>
          <div
            style={{
              textAlign: "center",
              fontSize: "0.875rem",
              color: "var(--colorNeutralForeground3)",
            }}
          >
            <p>
              <Link
                to="/account/forgot-password"
                style={{ fontWeight: 500, color: "var(--colorBrandForegroundLink)" }}
              >
                {t("AbpAccount::ForgotPassword")}
              </Link>
            </p>
            <p>
              {t("AbpAccount::DontHaveAnAccount", "Don't have an account?")}{" "}
              <Link
                to="/account/register"
                style={{ fontWeight: 500, color: "var(--colorBrandForegroundLink)" }}
              >
                {t("AbpAccount::Register")}
              </Link>
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
}
