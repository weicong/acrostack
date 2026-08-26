import { Divider, makeStyles, Text, tokens } from "@fluentui/react-components";
import { useAppName } from "@/lib/appName";

const useStyles = makeStyles({
  footer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    height: "32px",
    padding: `0 ${tokens.spacingHorizontalL}`,
    // Word status bar style: thin, darker background, subtle top border
    background: tokens.colorNeutralBackground2,
    borderTop: `1px solid ${tokens.colorNeutralStroke2}`,
    color: tokens.colorNeutralForeground3,
    fontSize: tokens.fontSizeBase200,
  },
  left: {
    display: "flex",
    alignItems: "center",
    gap: tokens.spacingHorizontalM,
  },
  right: {
    display: "flex",
    alignItems: "center",
    gap: tokens.spacingHorizontalM,
  },
});

export function Footer() {
  const currentYear = new Date().getFullYear();
  const appName = useAppName();
  const styles = useStyles();

  return (
    <footer className={styles.footer}>
      <div className={styles.left}>
        <Text size={200}>
          {currentYear}&copy; {appName}
        </Text>
      </div>
      <div className={styles.right}>
        <Text size={200}>ABP React UI</Text>
        <Divider vertical />
        <Text size={200}>v1.0</Text>
      </div>
    </footer>
  );
}
