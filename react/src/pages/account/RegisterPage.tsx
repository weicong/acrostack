import { Link } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { z } from "zod";
import { Card, CardHeader, makeStyles, tokens, Text } from "@fluentui/react-components";
import { accountRegister } from "@/api/clients/account/accountRegister";
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

const useStyles = makeStyles({
  body: {
    padding: `0 ${tokens.spacingHorizontalL} ${tokens.spacingVerticalL}`,
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: tokens.spacingVerticalM,
  },
  errorAlert: {
    borderRadius: tokens.borderRadiusMedium,
    background: tokens.colorPaletteRedBackground1,
    padding: tokens.spacingVerticalS,
    fontSize: "0.875rem",
    color: tokens.colorPaletteRedForeground3,
  },
  fullWidthButton: {
    width: "100%",
  },
  link: {
    fontWeight: 500,
    color: tokens.colorBrandForegroundLink,
  },
});

export function RegisterPage() {
  const { t } = useTranslation();
  const { login } = useAuth();
  const [rootError, setRootError] = useState<string | null>(null);
  const styles = useStyles();

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
        await accountRegister({
          appName: "React",
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
        header={<Text weight="semibold">{t("AbpAccount::Register")}</Text>}
        description={
          <Text size={200}>{t("AbpAccount::RegisterSubtitle", "Create a new account")}</Text>
        }
      />
      <div className={styles.body}>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            e.stopPropagation();
            void form.handleSubmit();
          }}
          className={styles.form}
        >
          {rootError && (
            <div className={styles.errorAlert} role="alert">
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
            <form.SubmitButton
              label={t("AbpAccount::Register")}
              className={styles.fullWidthButton}
            />
          </form.AppForm>
          <Text as="p" size={200} align="center" block>
            {t("AbpAccount::AlreadyHaveAnAccount", "Already have an account?")}{" "}
            <Link to="/account/login" className={styles.link}>
              {t("AbpAccount::Login")}
            </Link>
          </Text>
        </form>
      </div>
    </Card>
  );
}
