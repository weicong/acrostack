import { useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import {
  Button,
  Card,
  CardHeader,
  makeStyles,
  Spinner,
  tokens,
  Text,
} from "@fluentui/react-components";
import { useAuth } from "@/lib/auth/AuthContext";

const useStyles = makeStyles({
  body: {
    padding: `0 ${tokens.spacingHorizontalL} ${tokens.spacingVerticalL}`,
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: tokens.spacingVerticalM,
  },
  fullWidthButton: {
    width: "100%",
  },
  link: {
    fontWeight: 500,
    color: tokens.colorBrandForegroundLink,
  },
});

export function LoginPage() {
  const { t } = useTranslation();
  const { isAuthenticated, isLoading, login } = useAuth();
  const styles = useStyles();

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      void login();
    }
  }, [isLoading, isAuthenticated, login]);

  if (isLoading) {
    return (
      <Card>
        <CardHeader
          header={<Text weight="semibold">{t("AbpAccount::Login")}</Text>}
          description={
            <Text size={200}>{t("AbpAccount::LoginSubtitle", "Redirecting to sign in...")}</Text>
          }
        />
        <div className={styles.body}>
          <Spinner />
        </div>
      </Card>
    );
  }

  if (isAuthenticated) {
    return (
      <Card>
        <CardHeader
          header={<Text weight="semibold">{t("AbpAccount::Login")}</Text>}
          description={
            <Text size={200}>{t("AbpAccount::AlreadyLoggedIn", "You are already logged in.")}</Text>
          }
        />
        <div className={styles.body}>
          <Link to="/">
            <Button>{t("AbpUi::BackToTheApplication")}</Button>
          </Link>
        </div>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader
        header={<Text weight="semibold">{t("AbpAccount::Login")}</Text>}
        description={
          <Text size={200}>{t("AbpAccount::LoginSubtitle", "Sign in to your account")}</Text>
        }
      />
      <div className={styles.body}>
        <div className={styles.form}>
          <Button className={styles.fullWidthButton} onClick={() => void login()}>
            {t("AbpAccount::Login")}
          </Button>
          <Text as="p" size={200} align="center" block>
            <Link to="/account/forgot-password" className={styles.link}>
              {t("AbpAccount::ForgotPassword")}
            </Link>
          </Text>
          <Text as="p" size={200} align="center" block>
            {t("AbpAccount::DontHaveAnAccount", "Don't have an account?")}{" "}
            <Link to="/account/register" className={styles.link}>
              {t("AbpAccount::Register")}
            </Link>
          </Text>
        </div>
      </div>
    </Card>
  );
}
