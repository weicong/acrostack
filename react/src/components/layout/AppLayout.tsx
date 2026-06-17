import { useState } from "react";
import { Outlet } from "@tanstack/react-router";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";

export function AppLayout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div style={{ display: "flex", height: "100vh", flexDirection: "column", overflow: "hidden" }}>
      <Header onMenuClick={() => setMobileMenuOpen(true)} />
      <div style={{ display: "flex", minHeight: 0, flex: 1, overflow: "hidden" }}>
        <div
          style={{
            position: mobileMenuOpen ? "fixed" : undefined,
            inset: mobileMenuOpen ? 0 : undefined,
            zIndex: 40,
            background: "rgba(0,0,0,0.5)",
            display: mobileMenuOpen ? "block" : "none",
          }}
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />
        <aside
          style={{
            position: mobileMenuOpen ? "fixed" : "static",
            left: 0,
            top: 0,
            zIndex: 50,
            display: "flex",
            height: "100%",
            minHeight: 0,
            width: "14rem",
            flexShrink: 0,
            flexDirection: "column",
            overflow: "hidden",
            borderRight: "1px solid var(--colorNeutralStroke1)",
            background: "var(--colorNeutralBackground1)",
            transform: mobileMenuOpen ? "translateX(0)" : "translateX(0)",
            transition: "transform 0.2s",
          }}
        >
          <Sidebar onNavigate={() => setMobileMenuOpen(false)} />
        </aside>
        <main style={{ flex: 1, overflow: "auto", padding: "1.5rem" }}>
          <Outlet />
        </main>
      </div>
    </div>
  );
}
