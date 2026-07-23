import { useCallback, useEffect, useState } from "react";
import { Outlet } from "@tanstack/react-router";
import { makeStyles, tokens } from "@fluentui/react-components";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
import { Footer } from "./Footer";
import { ImpersonationBanner } from "./ImpersonationBanner";

const useStyles = makeStyles({
  root: {
    display: "grid",
    height: "100vh",
    overflow: "hidden",
    // Grid: 2 columns x 4 rows
    // Col 1 = sidebar, Col 2 = content
    // Row 1 = title bar (full width), Row 2 = impersonation banner (full width, conditional),
    // Row 3 = sidebar + content, Row 4 = status bar (full width)
    gridTemplateColumns: "auto 1fr",
    gridTemplateRows: "auto auto 1fr auto",
  },
  // Title bar — full width, top row
  header: {
    gridColumn: "1 / -1",
    gridRow: "1",
  },
  // Impersonation banner — full width, second row. Rendered only while impersonating.
  banner: {
    gridColumn: "1 / -1",
    gridRow: "2",
  },
  sidebar: {
    gridColumn: "1",
    gridRow: "3",
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
  sidebarCollapsed: {
    "@media (min-width: 769px)": {
      width: "52px",
      minWidth: "52px",
    },
  },
  overlay: {
    position: "fixed",
    inset: 0,
    zIndex: 40,
    background: "rgba(0,0,0,0.5)",
    "@media (min-width: 769px)": {
      display: "none",
    },
  },
  // Main content area — right column, third row
  content: {
    gridColumn: "2",
    gridRow: "3",
    minHeight: 0,
    overflow: "auto",
    padding: tokens.spacingHorizontalXL,
    background: tokens.colorNeutralBackground1,
  },
  // Status bar — full width, bottom row
  footer: {
    gridColumn: "1 / -1",
    gridRow: "4",
  },
});

const SIDEBAR_COLLAPSED_KEY = "acrostack:sidebar-collapsed";

export function AppLayout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(() => {
    try {
      return localStorage.getItem(SIDEBAR_COLLAPSED_KEY) === "true";
    } catch {
      return false;
    }
  });
  const styles = useStyles();

  useEffect(() => {
    try {
      localStorage.setItem(SIDEBAR_COLLAPSED_KEY, String(collapsed));
    } catch {
      // ignore
    }
  }, [collapsed]);

  const handleOverlayClick = useCallback(() => setMobileMenuOpen(false), []);

  const sidebarClass = [
    styles.sidebar,
    mobileMenuOpen ? styles.sidebarOpen : "",
    collapsed ? styles.sidebarCollapsed : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={styles.root}>
      <div
        className={styles.overlay}
        style={{ display: mobileMenuOpen ? undefined : "none" }}
        onClick={handleOverlayClick}
        aria-hidden="true"
      />
      <div className={styles.header}>
        <Header
          onMenuClick={() => setMobileMenuOpen(true)}
          collapsed={collapsed}
          onToggleCollapse={() => setCollapsed((c) => !c)}
        />
      </div>
      <div className={styles.banner}>
        <ImpersonationBanner />
      </div>
      <aside className={sidebarClass}>
        <Sidebar
          onNavigate={() => setMobileMenuOpen(false)}
          collapsed={collapsed}
          onExpand={() => setCollapsed(false)}
        />
      </aside>
      <main className={styles.content}>
        <Outlet />
      </main>
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  );
}
