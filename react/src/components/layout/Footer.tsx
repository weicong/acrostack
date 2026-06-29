import { makeStyles, Text, tokens } from "@fluentui/react-components";

const useStyles = makeStyles({
  footer: {
    borderTop: `1px solid ${tokens.colorNeutralStroke1}`,
    background: tokens.colorNeutralBackground3,
    padding: `${tokens.spacingVerticalXS} ${tokens.spacingHorizontalL}`,
  },
  content: {
    display: "flex",
    justifyContent: "center",
    color: tokens.colorNeutralForeground3,
  },
});

export function Footer() {
  const currentYear = new Date().getFullYear();
  const styles = useStyles();

  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <Text size={200}>
          {currentYear}&copy; by{" "}
          <a href="https://volosoft.com/" target="_blank" rel="noreferrer">
            Volosoft
          </a>
        </Text>
      </div>
    </footer>
  );
}
