import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@acrostack/ui/styles/globals.css";
import App from "./App.tsx";
import { getApplicationName } from "@acrostack/core";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { bootstrapApp } from "@/lib/core";

async function bootstrap() {
  // 配置 + 认证 + HTTP 拦截器（详见 lib/core.ts）
  await bootstrapApp();
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
