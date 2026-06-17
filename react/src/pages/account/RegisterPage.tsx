import { Link } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { accountApi } from "@/lib/api/account";
import { useAuth } from "@/lib/auth/AuthContext";
import { useAppForm } from "@/components/form/app-form";
import { useState } from "react";

const registerSchema = z
  .object({
    userName: z.string().min(1, "AbpAccount::ThisFieldIsRequired"),
    emailAddress: z.string().email("AbpAccount::InvalidEmailAddress"),
    password: z.string().min(6, "AbpAccount::PasswordMustBeAtLeast6Characters"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "AbpAccount::PasswordsDoNotMatch",
    path: ["confirmPassword"],
  });

export function RegisterPage() {
  const { t } = useTranslation();
  const { login } = useAuth();
  const [rootError, setRootError] = useState<string | null>(null);

  const form = useAppForm({
    defaultValues: {
      userName: "",
      emailAddress: "",
      password: "",
      confirmPassword: "",
    },
    validators: {
      onChange: registerSchema,
    },
    onSubmit: async ({ value }) => {
      try {
        await accountApi.register({
          userName: value.userName,
          emailAddress: value.emailAddress,
          password: value.password,
        });
        void login();
      } catch (err: unknown) {
        const msg =
          err && typeof err === "object" && "response" in err
            ? (err as { response?: { data?: { error?: { message?: string } } } })?.response?.data
                ?.error?.message
            : undefined;
        setRootError(msg ?? t("AbpAccount::RegisterFailed"));
      }
    },
  });

  return (
    <Card>
      <CardHeader>
        <CardTitle>{t("AbpAccount::Register")}</CardTitle>
        <CardDescription>
          {t("AbpAccount::RegisterSubtitle", "Create a new account")}
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
            name="userName"
            children={(field) => (
              <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                <Label htmlFor="userName">{t("AbpAccount::UserName")}</Label>
                <Input
                  id="userName"
                  type="text"
                  autoComplete="username"
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
                      ) as "AbpAccount::ThisFieldIsRequired",
                    )}
                  </p>
                )}
              </div>
            )}
          />
          <form.AppField
            name="emailAddress"
            children={(field) => (
              <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                <Label htmlFor="emailAddress">{t("AbpAccount::EmailAddress")}</Label>
                <Input
                  id="emailAddress"
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
          <form.AppField
            name="password"
            children={(field) => (
              <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                <Label htmlFor="password">{t("AbpAccount::Password")}</Label>
                <Input
                  id="password"
                  type="password"
                  autoComplete="new-password"
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
                      ) as "AbpAccount::PasswordMustBeAtLeast6Characters",
                    )}
                  </p>
                )}
              </div>
            )}
          />
          <form.AppField
            name="confirmPassword"
            validators={{
              onChangeListenTo: ["password"],
            }}
            children={(field) => (
              <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                <Label htmlFor="confirmPassword">{t("AbpAccount::ConfirmPassword")}</Label>
                <Input
                  id="confirmPassword"
                  type="password"
                  autoComplete="new-password"
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
                      ) as "AbpAccount::PasswordsDoNotMatch",
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
                {isSubmitting ? t("AbpAccount::PleaseWait") : t("AbpAccount::Register")}
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
            {t("AbpAccount::AlreadyHaveAnAccount", "Already have an account?")}{" "}
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
