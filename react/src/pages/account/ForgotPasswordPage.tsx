import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { z } from "zod";
import { Button, Card, CardHeader, makeStyles, tokens, Text } from "@fluentui/react-components";
import { accountSendPasswordResetCode } from "@/api/clients/account/accountSendPasswordResetCode";
import { useAppForm } from "@/components/form";

const forgotPasswordSchema = z.object({
  email: z.string().email("AbpAccount::InvalidEmailAddress"),
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

export function ForgotPasswordPage() {
  const { t } = useTranslation();
  const [sent, setSent] = useState(false);
  const [rootError, setRootError] = useState<string | null>(null);
  const styles = useStyles();

  const form = useAppForm({
    defaultValues: { email: "" },
    validators: {
      onChange: forgotPasswordSchema,
    },
    onSubmit: async ({ value }) => {
      try {
        await accountSendPasswordResetCode({ appName: "React", email: value.email });
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
        <CardHeader
          header={<Text weight="semibold">{t("AbpAccount::ForgotPassword")}</Text>}
          description={
            <Text size={200}>
              {t(
                "AbpAccount::PasswordResetMailSentMessage",
                "If the email address exists, we have sent a password reset link.",
              )}
            </Text>
          }
        />
        <div className={styles.body}>
          <Link to="/account/login">
            <Button>{t("AbpAccount::Login")}</Button>
          </Link>
        </div>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader
        header={<Text weight="semibold">{t("AbpAccount::ForgotPassword")}</Text>}
        description={
          <Text size={200}>
            {t(
              "AbpAccount::SendPasswordResetCode_Information",
              "Enter your email address and we will send you a link to reset your password.",
            )}
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
            name="email"
            children={(field) => (
              <field.TextField
                label={t("AbpAccount::EmailAddress")}
                inputProps={{ type: "email", autoComplete: "email" }}
              />
            )}
          />
          <form.AppForm>
            <form.SubmitButton label={t("AbpAccount::Submit")} className={styles.fullWidthButton} />
          </form.AppForm>
          <Text as="p" size={200} align="center" block>
            <Link to="/account/login" className={styles.link}>
              {t("AbpUi::BackToTheApplication")}
            </Link>
          </Text>
        </form>
      </div>
    </Card>
  );
}
