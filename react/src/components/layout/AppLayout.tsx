import { useState } from "react";
import { Outlet } from "@tanstack/react-router";
import { makeStyles, tokens } from "@fluentui/react-components";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
import { Footer } from "./Footer";

const useStyles = makeStyles({
  root: {
    display: "grid",
    height: "100vh",
    overflow: "hidden",
    // Left column = sidebar (fixed width), right column = header/main/footer stack
    gridTemplateColumns: "auto 1fr",
    gridTemplateRows: "1fr",
  },
  sidebar: {
    gridColumn: "1",
    gridRow: "1 / span 1",
    display: "flex",
    flexDirection: "column",
    minHeight: 0,
    height: "100%",
    width: "16rem",
    flexShrink: 0,
    overflow: "hidden",
    borderRight: `1px solid ${tokens.colorNeutralStroke1}`,
    background: tokens.colorNeutralBackground1,
    // Mobile (≤768px): sidebar becomes an off-canvas drawer
    "@media (max-width: 768px)": {
      position: "fixed",
      left: 0,
      top: 0,
      bottom: 0,
      zIndex: 50,
      transform: "translateX(-100%)",
      transition: "transform 0.2s ease",
    },
  },
  sidebarOpen: {
    "@media (max-width: 768px)": {
      transform: "translateX(0)",
    },
  },
  overlay: {
    display: "none",
    "@media (max-width: 768px)": {
      display: "block",
      position: "fixed",
      inset: 0,
      zIndex: 40,
      background: "rgba(0,0,0,0.5)",
    },
  },
  // Right column: header / main / footer stacked vertically
  right: {
    gridColumn: "2",
    gridRow: "1 / span 1",
    display: "grid",
    gridTemplateRows: "auto 1fr auto",
    minHeight: 0,
    overflow: "hidden",
  },
  main: {
    minHeight: 0,
    overflow: "auto",
    padding: tokens.spacingHorizontalXL,
  },
});

export function AppLayout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <div
        className={styles.overlay}
        style={{ display: mobileMenuOpen ? undefined : "none" }}
        onClick={() => setMobileMenuOpen(false)}
        aria-hidden="true"
      />
      <aside className={`${styles.sidebar} ${mobileMenuOpen ? styles.sidebarOpen : ""}`}>
        <Sidebar onNavigate={() => setMobileMenuOpen(false)} />
      </aside>
      <div className={styles.right}>
        <Header onMenuClick={() => setMobileMenuOpen(true)} />
        <main className={styles.main}>
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
}
