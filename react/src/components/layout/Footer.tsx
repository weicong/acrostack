export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{
        borderTop: "1px solid var(--colorNeutralStroke1)",
        background: "var(--colorNeutralBackground3)",
        padding: "0.75rem 1rem",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          fontSize: "0.875rem",
          color: "var(--colorNeutralForeground3)",
        }}
      >
        <span>
          {currentYear}&copy; by{" "}
          <a href="https://volosoft.com/" target="_blank" rel="noreferrer">
            Volosoft
          </a>
        </span>
      </div>
    </footer>
  );
}
