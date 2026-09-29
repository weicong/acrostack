import fs from "node:fs";
import path from "node:path";
import { defineConfig, loadEnv } from "vite-plus";
import tailwindcss from "@tailwindcss/vite";
import viteReact from "@vitejs/plugin-react";
import { tanstackRouter } from "@tanstack/router-plugin/vite";

function copyDynamicEnv() {
  return {
    name: "copy-dynamic-env",
    buildStart() {
      const src = path.resolve(process.cwd(), "dynamic-env.json");
      const dest = path.resolve(process.cwd(), "public/dynamic-env.json");
      if (fs.existsSync(src)) {
        fs.copyFileSync(src, dest);
      }
    },
  };
}

export default defineConfig((({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const apiUrl = env.VITE_API_URL ?? "https://localhost:44320";
  const authUrl = env.VITE_AUTH_URL ?? env.VITE_API_URL ?? "https://localhost:44320";

  return {
    plugins: [
      tanstackRouter({
        target: "react",
        autoCodeSplitting: true,
        // 绝对路径：防止以仓库根为 cwd 加载本配置的工具（IDE/vite-plus LSP 等）
        // 把 ./src 解析到根目录 —— @tanstack/router-generator 构造时会无条件 mkdir
        // generatedRouteTree 的父目录，从而在根目录留下空的 src/
        routesDirectory: path.resolve(__dirname, "./src/routes"),
        generatedRouteTree: path.resolve(__dirname, "./src/routeTree.gen.ts"),
      }),
      copyDynamicEnv(),
      viteReact(),
      tailwindcss(),
    ],
    resolve: {
      dedupe: ["react", "react-dom"],
      // Vite 8 原生解析 tsconfig.json 的 `paths`（@/* 与 #/*），无需手写 resolve.alias
      tsconfigPaths: true,
    },
    server: {
      port: 5173,
      // 注意：/signalr-hubs 不走代理，chatHub 通过 getBackendOrigin() 直连后端 origin，
      // 因此开发环境下需要后端 CORS 允许来自前端的 WebSocket 跨域连接
      proxy: {
        "/api": {
          target: apiUrl,
          changeOrigin: true,
          secure: false,
        },
        "/connect": {
          target: authUrl,
          changeOrigin: true,
          secure: false,
        },
        "/getEnvConfig": {
          target: apiUrl,
          changeOrigin: true,
          secure: false,
        },
        "/swagger": {
          target: apiUrl,
          changeOrigin: true,
          secure: false,
        },
      },
    },
  };
}) as Parameters<typeof defineConfig>[0]);
