import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { accountApi } from "@/lib/api/account";
import { useAppForm } from "@/components/form/app-form";

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
        <CardHeader>
          <CardTitle>{t("AbpAccount::ForgotPassword")}</CardTitle>
          <CardDescription>
            {t(
              "AbpAccount::PasswordResetMailSentMessage",
              "If the email address exists, we have sent a password reset link.",
            )}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Link to="/account/login">
            <Button>{t("AbpAccount::Login")}</Button>
          </Link>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>{t("AbpAccount::ForgotPassword")}</CardTitle>
        <CardDescription>
          {t(
            "AbpAccount::SendPasswordResetCode_Information",
            "Enter your email address and we will send you a link to reset your password.",
          )}
        </CardDescription>
      </CardHeader>
      <CardContent>
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
              <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                <Label htmlFor="email">{t("AbpAccount::EmailAddress")}</Label>
                <Input
                  id="email"
                  type="email"
                  autoComplete="email"
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                />
                {field.state.meta.isTouched && field.state.meta.errors.length > 0 && (
                  <p style={{ fontSize: "0.875rem", color: "var(--colorPaletteRedForeground3)" }}>
                    {t(
                      String(
                        field.state.meta.errors
                          .map((e) => (typeof e === "string" ? e : JSON.stringify(e)))
                          .join(", "),
                      ) as "AbpAccount::InvalidEmailAddress",
                    )}
                  </p>
                )}
              </div>
            )}
          />
          <form.Subscribe
            selector={(state) => state.isSubmitting}
            children={(isSubmitting) => (
              <Button type="submit" style={{ width: "100%" }} disabled={isSubmitting}>
                {isSubmitting ? t("AbpAccount::PleaseWait") : t("AbpAccount::Submit")}
              </Button>
            )}
          />
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
      </CardContent>
    </Card>
  );
}
