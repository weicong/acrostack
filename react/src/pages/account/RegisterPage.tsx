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
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {errors.root && (
            <div className="rounded-md bg-destructive/10 p-3 text-sm text-destructive" role="alert">
              {errors.root.message}
            </div>
          )}
          <div className="space-y-2">
            <Label htmlFor="userName">{t("AbpAccount::UserName")}</Label>
            <Input
              id="userName"
              type="text"
              autoComplete="username"
              {...registerField("userName")}
            />
            {errors.userName && (
              <p className="text-sm text-destructive">
                {t(errors.userName.message as "AbpAccount::ThisFieldIsRequired")}
              </p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="emailAddress">{t("AbpAccount::EmailAddress")}</Label>
            <Input
              id="emailAddress"
              type="email"
              autoComplete="email"
              {...registerField("emailAddress")}
            />
            {errors.emailAddress && (
              <p className="text-sm text-destructive">
                {t(errors.emailAddress.message as "AbpAccount::InvalidEmailAddress")}
              </p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">{t("AbpAccount::Password")}</Label>
            <Input
              id="password"
              type="password"
              autoComplete="new-password"
              {...registerField("password")}
            />
            {errors.password && (
              <p className="text-sm text-destructive">
                {t(errors.password.message as "AbpAccount::PasswordMustBeAtLeast6Characters")}
              </p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="confirmPassword">{t("AbpAccount::ConfirmPassword")}</Label>
            <Input
              id="confirmPassword"
              type="password"
              autoComplete="new-password"
              {...registerField("confirmPassword")}
            />
            {errors.confirmPassword && (
              <p className="text-sm text-destructive">
                {t(errors.confirmPassword.message as "AbpAccount::PasswordsDoNotMatch")}
              </p>
            )}
          </div>
          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? t("AbpAccount::PleaseWait") : t("AbpAccount::Register")}
          </Button>
          <p className="text-center text-sm text-muted-foreground">
            {t("AbpAccount::AlreadyHaveAnAccount", "Already have an account?")}{" "}
            <Link
              to="/account/login"
              className="font-medium text-primary underline-offset-4 hover:underline"
            >
              {t("AbpAccount::Login")}
            </Link>
          </p>
        </form>
      </CardContent>
    </Card>
  );
}
