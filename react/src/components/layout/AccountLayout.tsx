import { Link } from "@tanstack/react-router";
import { makeStyles, tokens, Text } from "@fluentui/react-components";
import type { ReactNode } from "react";

const useStyles = makeStyles({
  root: {
    display: "flex",
    minHeight: "100vh",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    background: tokens.colorNeutralBackground3,
    padding: tokens.spacingHorizontalM,
  },
  container: {
    width: "100%",
    maxWidth: "28rem",
  },
  backLink: {
    marginTop: tokens.spacingVerticalL,
    color: tokens.colorNeutralForeground3,
  },
});

export function AccountLayout({ children }: { children: ReactNode }) {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <div className={styles.container}>{children}</div>
      <Text as="p" size={200} align="center" className={styles.backLink} block>
        <Link to="/">{"返回应用"}</Link>
      </Text>
    </div>
  );
}
