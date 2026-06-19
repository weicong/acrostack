import { Link } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { z } from "zod";
import { Button, Card, CardHeader } from "@fluentui/react-components";
import { accountApi } from "@/lib/api/account";
import { useAppForm } from "@/components/form";
import { useState } from "react";

const resetPasswordSchema = z
  .object({
    password: z.string().min(6, "AbpAccount::PasswordMustBeAtLeast6Characters"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "AbpAccount::PasswordsDoNotMatch",
    path: ["confirmPassword"],
  });

export function ResetPasswordPage() {
  const { t } = useTranslation();
  const params = new URLSearchParams(typeof window !== "undefined" ? window.location.search : "");
  const userId = params.get("userId") ?? params.get("cid") ?? "";
  const resetToken =
    params.get("resetToken") ?? params.get("token") ?? params.get("resetCode") ?? "";
  const [rootError, setRootError] = useState<string | null>(null);

  const form = useAppForm({
    defaultValues: { password: "", confirmPassword: "" },
    validators: {
      onChange: resetPasswordSchema,
    },
    onSubmit: async ({ value }) => {
      try {
        await accountApi.resetPassword({
          userId,
          resetToken,
          password: value.password,
        });
        window.location.href = "/account/login";
      } catch (err: unknown) {
        const msg =
          err && typeof err === "object" && "response" in err
            ? (err as { response?: { data?: { error?: { message?: string } } } })?.response?.data
                ?.error?.message
            : undefined;
        setRootError(msg ?? t("AbpAccount::ResetPasswordFailed", "Failed to reset password"));
      }
    },
  });

  const isInvalidLink = !userId || !resetToken;

  if (isInvalidLink) {
    return (
      <Card>
        <CardHeader
          header={
            <span style={{ fontWeight: 600, fontSize: "1.125rem" }}>
              {t("AbpAccount::ResetPassword")}
            </span>
          }
          description={
            <span style={{ fontSize: "0.875rem", color: "var(--colorNeutralForeground3)" }}>
              {t(
                "AbpAccount::InvalidPasswordResetToken",
                "This password reset link is invalid or has expired.",
              )}
            </span>
          }
        />
        <div style={{ padding: "0 1.5rem 1.5rem" }}>
          <Link to="/account/forgot-password">
            <Button>{t("AbpAccount::SendPasswordResetCode")}</Button>
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
            {t("AbpAccount::ResetPassword")}
          </span>
        }
        description={
          <span style={{ fontSize: "0.875rem", color: "var(--colorNeutralForeground3)" }}>
            {t("AbpAccount::ResetPassword_Information", "Enter your new password")}
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
            name="password"
            children={(field) => (
              <field.TextField
                label={t("AbpAccount::Password")}
                inputProps={{ type: "password", autoComplete: "new-password" }}
              />
            )}
          />
          <form.AppField
            name="confirmPassword"
            validators={{
              onChangeListenTo: ["password"],
            }}
            children={(field) => (
              <field.TextField
                label={t("AbpAccount::ConfirmPassword")}
                inputProps={{ type: "password", autoComplete: "new-password" }}
              />
            )}
          />
          <form.AppForm>
            <form.SubmitButton label={t("AbpAccount::ResetPassword")} style={{ width: "100%" }} />
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
              {t("AbpAccount::Login")}
            </Link>
          </p>
        </form>
      </div>
    </Card>
  );
}
