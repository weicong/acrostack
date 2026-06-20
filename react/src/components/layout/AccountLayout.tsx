import { Link } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { makeStyles, Text } from "@fluentui/react-components";
import type { ReactNode } from "react";

const useStyles = makeStyles({
  root: {
    display: "flex",
    minHeight: "100vh",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    background: "var(--colorNeutralBackground3)",
    padding: "1rem",
  },
  container: {
    width: "100%",
    maxWidth: "28rem",
  },
  backLink: {
    marginTop: "1.5rem",
    color: "var(--colorNeutralForeground3)",
  },
});

export function AccountLayout({ children }: { children: ReactNode }) {
  const { t } = useTranslation();
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <div className={styles.container}>{children}</div>
      <Text as="p" size={200} align="center" className={styles.backLink} block>
        <Link to="/">{t("AbpUi::BackToTheApplication")}</Link>
      </Text>
    </div>
  );
}
