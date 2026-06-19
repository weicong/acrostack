import { Link } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { z } from "zod";
import { Card, CardHeader } from "@fluentui/react-components";
import { accountApi } from "@/lib/api/account";
import { useAuth } from "@/lib/auth/AuthContext";
import { useAppForm } from "@/components/form";
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
      <CardHeader
        header={
          <span style={{ fontWeight: 600, fontSize: "1.125rem" }}>{t("AbpAccount::Register")}</span>
        }
        description={
          <span style={{ fontSize: "0.875rem", color: "var(--colorNeutralForeground3)" }}>
            {t("AbpAccount::RegisterSubtitle", "Create a new account")}
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
            name="userName"
            children={(field) => (
              <field.TextField
                label={t("AbpAccount::UserName")}
                inputProps={{ autoComplete: "username" }}
              />
            )}
          />
          <form.AppField
            name="emailAddress"
            children={(field) => (
              <field.TextField
                label={t("AbpAccount::EmailAddress")}
                inputProps={{ type: "email", autoComplete: "email" }}
              />
            )}
          />
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
            <form.SubmitButton label={t("AbpAccount::Register")} style={{ width: "100%" }} />
          </form.AppForm>
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
      </div>
    </Card>
  );
}
