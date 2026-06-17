import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { accountApi } from "@/lib/api/account";

const forgotPasswordSchema = z.object({
  email: z.string().email("AbpAccount::InvalidEmailAddress"),
});

type ForgotPasswordFormData = z.infer<typeof forgotPasswordSchema>;

export function ForgotPasswordPage() {
  const { t } = useTranslation();
  const [sent, setSent] = useState(false);

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<ForgotPasswordFormData>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: { email: "" },
  });

  const onSubmit = async (data: ForgotPasswordFormData) => {
    try {
      await accountApi.sendPasswordResetCode({ email: data.email });
      setSent(true);
    } catch (err: unknown) {
      const msg =
        err && typeof err === "object" && "response" in err
          ? (err as { response?: { data?: { error?: { message?: string } } } })?.response?.data
              ?.error?.message
          : undefined;
      setError("root", {
        type: "manual",
        message: msg ?? t("AbpAccount::SendPasswordResetCodeFailed", "Failed to send reset code"),
      });
    }
  };

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
          onSubmit={handleSubmit(onSubmit)}
          style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
        >
          {errors.root && (
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
              {errors.root.message}
            </div>
          )}
          <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            <Label htmlFor="email">{t("AbpAccount::EmailAddress")}</Label>
            <Input id="email" type="email" autoComplete="email" {...register("email")} />
            {errors.email && (
              <p style={{ fontSize: "0.875rem", color: "var(--colorPaletteRedForeground3)" }}>
                {t(errors.email.message as "AbpAccount::InvalidEmailAddress")}
              </p>
            )}
          </div>
          <Button type="submit" style={{ width: "100%" }} disabled={isSubmitting}>
            {isSubmitting ? t("AbpAccount::PleaseWait") : t("AbpAccount::Submit")}
          </Button>
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
