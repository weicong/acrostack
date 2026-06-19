import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { z } from "zod";
import { Button, Card, CardHeader } from "@fluentui/react-components";
import { accountApi } from "@/lib/api/account";
import { useAppForm } from "@/components/form";

const forgotPasswordSchema = z.object({
  email: z.string().email("AbpAccount::InvalidEmailAddress"),
});

export function ForgotPasswordPage() {
  const { t } = useTranslation();
  const [sent, setSent] = useState(false);
  const [rootError, setRootError] = useState<string | null>(null);

  const form = useAppForm({
    defaultValues: { email: "" },
    validators: {
      onChange: forgotPasswordSchema,
    },
    onSubmit: async ({ value }) => {
      try {
        await accountApi.sendPasswordResetCode({ email: value.email });
        setSent(true);
      } catch (err: unknown) {
        const msg =
          err && typeof err === "object" && "response" in err
            ? (err as { response?: { data?: { error?: { message?: string } } } })?.response?.data
                ?.error?.message
            : undefined;
        setRootError(
          msg ?? t("AbpAccount::SendPasswordResetCodeFailed", "Failed to send reset code"),
        );
      }
    },
  });

  if (sent) {
    return (
      <Card>
        <CardHeader
          header={
            <span style={{ fontWeight: 600, fontSize: "1.125rem" }}>
              {t("AbpAccount::ForgotPassword")}
            </span>
          }
          description={
            <span style={{ fontSize: "0.875rem", color: "var(--colorNeutralForeground3)" }}>
              {t(
                "AbpAccount::PasswordResetMailSentMessage",
                "If the email address exists, we have sent a password reset link.",
              )}
            </span>
          }
        />
        <div style={{ padding: "0 1.5rem 1.5rem" }}>
          <Link to="/account/login">
            <Button>{t("AbpAccount::Login")}</Button>
          </Link>
        </div>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader
        header={
          <span style={{ fontWeight: 600, fontSize: "1.125rem" }}>
            {t("AbpAccount::ForgotPassword")}
          </span>
        }
        description={
          <span style={{ fontSize: "0.875rem", color: "var(--colorNeutralForeground3)" }}>
            {t(
              "AbpAccount::SendPasswordResetCode_Information",
              "Enter your email address and we will send you a link to reset your password.",
            )}
          </span>
        }
      />
      <div style={{ padding: "0 1.5rem 1.5rem" }}>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            e.stopPropagation();
            void form.handleSubmit();
          }}
          style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
        >
          {rootError && (
            <div
              style={{
                borderRadius: "0.375rem",
                background: "var(--colorPaletteRedBackground1)",
                padding: "0.75rem",
                fontSize: "0.875rem",
                color: "var(--colorPaletteRedForeground3)",
              }}
              role="alert"
            >
              {rootError}
            </div>
          )}
          <form.AppField
            name="email"
            children={(field) => (
              <field.TextField
                label={t("AbpAccount::EmailAddress")}
                inputProps={{ type: "email", autoComplete: "email" }}
              />
            )}
          />
          <form.AppForm>
            <form.SubmitButton label={t("AbpAccount::Submit")} style={{ width: "100%" }} />
          </form.AppForm>
          <p
            style={{
              textAlign: "center",
              fontSize: "0.875rem",
              color: "var(--colorNeutralForeground3)",
            }}
          >
            <Link
              to="/account/login"
              style={{ fontWeight: 500, color: "var(--colorBrandForegroundLink)" }}
            >
              {t("AbpUi::BackToTheApplication")}
            </Link>
          </p>
        </form>
      </div>
    </Card>
  );
}
