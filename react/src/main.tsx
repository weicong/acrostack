import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/globals.css";
import App from "./App.tsx";
import { loadRuntimeConfig } from "@/lib/runtimeConfig";
import { initUserManager } from "@/lib/auth/userManager";

async function bootstrap() {
  await loadRuntimeConfig();
  initUserManager();
  createRoot(document.getElementById("root")!).render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
}

bootstrap();
