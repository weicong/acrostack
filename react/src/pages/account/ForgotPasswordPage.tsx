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
          <Button asChild>
            <Link to="/account/login">{t("AbpAccount::Login")}</Link>
          </Button>
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
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {errors.root && (
            <div className="rounded-md bg-destructive/10 p-3 text-sm text-destructive" role="alert">
              {errors.root.message}
            </div>
          )}
          <div className="space-y-2">
            <Label htmlFor="email">{t("AbpAccount::EmailAddress")}</Label>
            <Input id="email" type="email" autoComplete="email" {...register("email")} />
            {errors.email && (
              <p className="text-sm text-destructive">
                {t(errors.email.message as "AbpAccount::InvalidEmailAddress")}
              </p>
            )}
          </div>
          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? t("AbpAccount::PleaseWait") : t("AbpAccount::Submit")}
          </Button>
          <p className="text-center text-sm text-muted-foreground">
            <Link
              to="/account/login"
              className="font-medium text-primary underline-offset-4 hover:underline"
            >
              {t("AbpUi::BackToTheApplication")}
            </Link>
          </p>
        </form>
      </CardContent>
    </Card>
  );
}
