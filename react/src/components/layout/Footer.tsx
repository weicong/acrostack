import { makeStyles, Text } from "@fluentui/react-components";

const useStyles = makeStyles({
  footer: {
    borderTop: "1px solid var(--colorNeutralStroke1)",
    background: "var(--colorNeutralBackground3)",
    padding: "0.75rem 1rem",
  },
  content: {
    display: "flex",
    justifyContent: "center",
    color: "var(--colorNeutralForeground3)",
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
