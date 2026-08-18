import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/globals.css";
import App from "./App.tsx";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { loadRuntimeConfig } from "@/lib/runtimeConfig";
import { initUserManager } from "@/lib/auth/userManager";
import { setupHttpClientInterceptors } from "@/lib/httpClient";

async function bootstrap() {
  await loadRuntimeConfig();
  initUserManager();
  setupHttpClientInterceptors();
  createRoot(document.getElementById("root")!).render(
    <StrictMode>
      {/* 全局错误边界：捕获渲染期未处理错误，避免整页白屏 */}
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </StrictMode>,
  );
}

void bootstrap();
