import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/globals.css";
import App from "./App.tsx";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { getApplicationName, loadRuntimeConfig } from "@/lib/runtimeConfig";
import { initUserManager } from "@/lib/auth/userManager";
import { setupHttpClientInterceptors } from "@/lib/http/client";

async function bootstrap() {
  await loadRuntimeConfig();
  initUserManager();
  setupHttpClientInterceptors();
  // 标签页标题取部署配置的应用名（配置已在渲染前加载，可同步设置）
  document.title = getApplicationName();
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
