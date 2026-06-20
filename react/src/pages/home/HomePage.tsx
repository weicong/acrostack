import { useTranslation } from "react-i18next";
import { Button, Card, makeStyles, Text } from "@fluentui/react-components";
import { useAuth } from "@/lib/auth/AuthContext";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem",
  },
  loginActions: {
    marginTop: "1rem",
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem",
  },
  docLink: {
    marginTop: "1rem",
    display: "inline-block",
  },
});

export function HomePage() {
  const { t } = useTranslation();
  const { isAuthenticated, navigateToLogin } = useAuth();
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <div>
        <Text as="h1" size={900} weight="bold">
          {t("Welcome")}
        </Text>
        {!isAuthenticated && (
          <div className={styles.loginActions}>
            <Button onClick={navigateToLogin}>{t("AbpAccount::Login")}</Button>
          </div>
        )}
      </div>

      <Card>
        <Text as="h2" size={600} weight="semibold">
          ABP React UI
        </Text>
        <Text as="p" block>
          This application is built with the ABP Framework React UI. You can use the pre-built
          components, layouts, and services to develop your application. Explore the full React UI
          documentation to learn how to customize and extend every aspect of the UI.
        </Text>
        <a
          href="https://abp.io/docs/latest/framework/ui/react/index"
          target="_blank"
          rel="noreferrer"
          className={styles.docLink}
        >
          <Button appearance="outline">React UI Documentation</Button>
        </a>
      </Card>
    </div>
  );
}
