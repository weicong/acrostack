import { type ReactNode } from "react";
import { makeStyles, tokens, Text } from "@fluentui/react-components";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    gap: tokens.spacingVerticalL,
  },
  header: {
    paddingBottom: tokens.spacingVerticalS,
    borderBottom: `1px solid ${tokens.colorNeutralStroke2}`,
  },
});

interface PageLayoutProps {
  title: string;
  children?: ReactNode;
}

/**
 * Unified page layout with a consistent title header and divider.
 * Use this in every page component for a uniform look.
 */
export function PageLayout({ title, children }: PageLayoutProps) {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <div className={styles.header}>
        <Text as="h1" size={700} weight="bold">
          {title}
        </Text>
      </div>
      {children}
    </div>
  );
}