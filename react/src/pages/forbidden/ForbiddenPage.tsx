import { useTranslation } from "react-i18next";
import { Link } from "@tanstack/react-router";
import { Button, makeStyles, Text } from "@fluentui/react-components";
import { ShieldError20Regular } from "@fluentui/react-icons";

const useStyles = makeStyles({
  root: {
    display: "flex",
    minHeight: "50vh",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "1.5rem",
    padding: "2rem",
  },
  icon: {
    fontSize: "4rem",
    color: "var(--colorPaletteRedForeground3)",
  },
  textBlock: {
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem",
    textAlign: "center",
  },
});

export function ForbiddenPage() {
  const { t } = useTranslation();
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <ShieldError20Regular className={styles.icon} />
      <div className={styles.textBlock}>
        <Text as="h1" size={700} weight="bold">
          403
        </Text>
        <Text as="p" block>
          {t("AbpUi::YouAreNotAuthorized")}
        </Text>
      </div>
      <Link to="/">
        <Button>{t("AbpUi::BackToTheApplication")}</Button>
      </Link>
    </div>
  );
}
