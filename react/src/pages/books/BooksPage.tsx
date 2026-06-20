import { useTranslation } from "react-i18next";
import { makeStyles, Text } from "@fluentui/react-components";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem",
  },
});

export function BooksPage() {
  const { t } = useTranslation();
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <Text as="h1" size={900} weight="bold">
        {t("Menu:Books")}
      </Text>
      <div>data</div>
    </div>
  );
}
