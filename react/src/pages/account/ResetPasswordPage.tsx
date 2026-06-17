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

const resetPasswordSchema = z
  .object({
    password: z.string().min(6, "AbpAccount::PasswordMustBeAtLeast6Characters"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "AbpAccount::PasswordsDoNotMatch",
    path: ["confirmPassword"],
  });

type ResetPasswordFormData = z.infer<typeof resetPasswordSchema>;

export function ResetPasswordPage() {
  const { t } = useTranslation();
  const params = new URLSearchParams(typeof window !== "undefined" ? window.location.search : "");
  const userId = params.get("userId") ?? params.get("cid") ?? "";
  const resetToken =
    params.get("resetToken") ?? params.get("token") ?? params.get("resetCode") ?? "";

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<ResetPasswordFormData>({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: { password: "", confirmPassword: "" },
  });

  const isInvalidLink = !userId || !resetToken;

  const onSubmit = async (data: ResetPasswordFormData) => {
    try {
      await accountApi.resetPassword({
        userId,
        resetToken,
        password: data.password,
      });
      window.location.href = "/account/login";
    } catch (err: unknown) {
      const msg =
        err && typeof err === "object" && "response" in err
          ? (err as { response?: { data?: { error?: { message?: string } } } })?.response?.data
              ?.error?.message
          : undefined;
      setError("root", {
        type: "manual",
        message: msg ?? t("AbpAccount::ResetPasswordFailed", "Failed to reset password"),
      });
    }
  };

  if (isInvalidLink) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>{t("AbpAccount::ResetPassword")}</CardTitle>
          <CardDescription>
            {t(
              "AbpAccount::InvalidPasswordResetToken",
              "This password reset link is invalid or has expired.",
            )}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Link to="/account/forgot-password">
            <Button>{t("AbpAccount::SendPasswordResetCode")}</Button>
          </Link>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>{t("AbpAccount::ResetPassword")}</CardTitle>
        <CardDescription>
          {t("AbpAccount::ResetPassword_Information", "Enter your new password")}
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
            <Label htmlFor="password">{t("AbpAccount::Password")}</Label>
            <Input
              id="password"
              type="password"
              autoComplete="new-password"
              {...register("password")}
            />
            {errors.password && (
              <p style={{ fontSize: "0.875rem", color: "var(--colorPaletteRedForeground3)" }}>
                {t(errors.password.message as "AbpAccount::PasswordMustBeAtLeast6Characters")}
              </p>
            )}
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            <Label htmlFor="confirmPassword">{t("AbpAccount::ConfirmPassword")}</Label>
            <Input
              id="confirmPassword"
              type="password"
              autoComplete="new-password"
              {...register("confirmPassword")}
            />
            {errors.confirmPassword && (
              <p style={{ fontSize: "0.875rem", color: "var(--colorPaletteRedForeground3)" }}>
                {t(errors.confirmPassword.message as "AbpAccount::PasswordsDoNotMatch")}
              </p>
            )}
          </div>
          <Button type="submit" style={{ width: "100%" }} disabled={isSubmitting}>
            {isSubmitting ? t("AbpAccount::PleaseWait") : t("AbpAccount::ResetPassword")}
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
              {t("AbpAccount::Login")}
            </Link>
          </p>
        </form>
      </CardContent>
    </Card>
  );
}
