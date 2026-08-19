import { Link } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { z } from "zod";
import { Button, Card, CardHeader, makeStyles, tokens, Text } from "@fluentui/react-components";
import { accountResetPassword } from "@/api/clients/account/accountResetPassword";
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

export function ResetPasswordPage() {
  const { t } = useTranslation();
  const params = new URLSearchParams(typeof window !== "undefined" ? window.location.search : "");
  const userId = params.get("userId") ?? params.get("cid") ?? "";
  const resetToken =
    params.get("resetToken") ?? params.get("token") ?? params.get("resetCode") ?? "";
  const [rootError, setRootError] = useState<string | null>(null);
  const styles = useStyles();

  const form = useAppForm({
    defaultValues: { password: "", confirmPassword: "" },
    validators: {
      onChange: resetPasswordSchema,
    },
    onSubmit: async ({ value }) => {
      try {
        await accountResetPassword({
          body: {
            userId,
            resetToken,
            password: value.password,
          },
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
          header={<Text weight="semibold">{t("AbpAccount::ResetPassword")}</Text>}
          description={
            <Text size={200}>
              {t(
                "AbpAccount::InvalidPasswordResetToken",
                "This password reset link is invalid or has expired.",
              )}
            </Text>
          }
        />
        <div className={styles.body}>
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
        header={<Text weight="semibold">{t("AbpAccount::ResetPassword")}</Text>}
        description={
          <Text size={200}>
            {t("AbpAccount::ResetPassword_Information", "Enter your new password")}
          </Text>
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
              label={t("AbpAccount::ResetPassword")}
              className={styles.fullWidthButton}
            />
          </form.AppForm>
          <Text as="p" size={200} align="center" block>
            <Link to="/account/login" className={styles.link}>
              {t("AbpAccount::Login")}
            </Link>
          </Text>
        </form>
      </div>
    </Card>
  );
}
