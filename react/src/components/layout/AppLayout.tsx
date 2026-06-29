import { useState } from "react";
import { Outlet } from "@tanstack/react-router";
import { makeStyles } from "@fluentui/react-components";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";

const useStyles = makeStyles({
  root: {
    display: "flex",
    height: "100vh",
    flexDirection: "column",
    overflow: "hidden",
  },
  body: {
    display: "flex",
    minHeight: "0",
    flex: 1,
    overflow: "hidden",
  },
  overlay: {
    zIndex: 40,
    background: "rgba(0,0,0,0.5)",
  },
  sidebar: {
    zIndex: 50,
    display: "flex",
    height: "100%",
    minHeight: "0",
    width: "14rem",
    flexShrink: 0,
    flexDirection: "column",
    overflow: "hidden",
    borderRight: "1px solid var(--colorNeutralStroke1)",
    background: "var(--colorNeutralBackground1)",
    transition: "transform 0.2s",
    // Mobile (≤768px): sidebar is a slide-in drawer, hidden off-canvas by default
    "@media (max-width: 768px)": {
      position: "fixed",
      left: 0,
      top: 0,
      bottom: 0,
      transform: "translateX(-100%)",
    },
  },
  sidebarOpen: {
    "@media (max-width: 768px)": {
      transform: "translateX(0)",
    },
  },
  main: {
    flex: 1,
    overflow: "auto",
    padding: "1.5rem",
  },
});

export function AppLayout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <Header onMenuClick={() => setMobileMenuOpen(true)} />
      <div className={styles.body}>
        <div
          className={styles.overlay}
          style={{
            position: mobileMenuOpen ? "fixed" : undefined,
            inset: mobileMenuOpen ? 0 : undefined,
            display: mobileMenuOpen ? "block" : "none",
          }}
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />
        <aside className={`${styles.sidebar} ${mobileMenuOpen ? styles.sidebarOpen : ""}`}>
          <Sidebar onNavigate={() => setMobileMenuOpen(false)} />
        </aside>
        <main className={styles.main}>
          <Outlet />
        </main>
      </div>
    </div>
  );
}
