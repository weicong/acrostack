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
import { useAuth } from "@/lib/auth/AuthContext";

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

type RegisterFormData = z.infer<typeof registerSchema>;

export function RegisterPage() {
  const { t } = useTranslation();
  const { login } = useAuth();

  const {
    register: registerField,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      userName: "",
      emailAddress: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (data: RegisterFormData) => {
    try {
      await accountApi.register({
        userName: data.userName,
        emailAddress: data.emailAddress,
        password: data.password,
      });
      void login();
    } catch (err: unknown) {
      const msg =
        err && typeof err === "object" && "response" in err
          ? (err as { response?: { data?: { error?: { message?: string } } } })?.response?.data
              ?.error?.message
          : undefined;
      setError("root", {
        type: "manual",
        message: msg ?? t("AbpAccount::RegisterFailed"),
      });
    }
  };

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
            <Label htmlFor="userName">{t("AbpAccount::UserName")}</Label>
            <Input
              id="userName"
              type="text"
              autoComplete="username"
              {...registerField("userName")}
            />
            {errors.userName && (
              <p style={{ fontSize: "0.875rem", color: "var(--colorPaletteRedForeground3)" }}>
                {t(errors.userName.message as "AbpAccount::ThisFieldIsRequired")}
              </p>
            )}
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            <Label htmlFor="emailAddress">{t("AbpAccount::EmailAddress")}</Label>
            <Input
              id="emailAddress"
              type="email"
              autoComplete="email"
              {...registerField("emailAddress")}
            />
            {errors.emailAddress && (
              <p style={{ fontSize: "0.875rem", color: "var(--colorPaletteRedForeground3)" }}>
                {t(errors.emailAddress.message as "AbpAccount::InvalidEmailAddress")}
              </p>
            )}
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            <Label htmlFor="password">{t("AbpAccount::Password")}</Label>
            <Input
              id="password"
              type="password"
              autoComplete="new-password"
              {...registerField("password")}
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
              {...registerField("confirmPassword")}
            />
            {errors.confirmPassword && (
              <p style={{ fontSize: "0.875rem", color: "var(--colorPaletteRedForeground3)" }}>
                {t(errors.confirmPassword.message as "AbpAccount::PasswordsDoNotMatch")}
              </p>
            )}
          </div>
          <Button type="submit" style={{ width: "100%" }} disabled={isSubmitting}>
            {isSubmitting ? t("AbpAccount::PleaseWait") : t("AbpAccount::Register")}
          </Button>
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
