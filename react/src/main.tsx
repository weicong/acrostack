import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/globals.css";
import App from "./App.tsx";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { loadRuntimeConfig } from "@/lib/runtimeConfig";
import { initUserManager } from "@/lib/auth/userManager";
import { setupHttpClientInterceptors } from "@/lib/http/client";
import { syncDocumentTitle } from "@/lib/appName";
import { queryClient } from "@/lib/queryClient";

async function bootstrap() {
  await loadRuntimeConfig();
  initUserManager();
  setupHttpClientInterceptors();
  // 标签页标题随后端 AppName 动态更新（fire-and-forget，与 UI 共享查询缓存）
  syncDocumentTitle(queryClient);
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
