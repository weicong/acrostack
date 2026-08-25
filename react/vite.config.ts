import fs from "node:fs";
import path from "node:path";
import { defineConfig, loadEnv } from "vite-plus";
import react from "@vitejs/plugin-react";
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
        routesDirectory: "./src/routes",
        generatedRouteTree: "./src/routeTree.gen.ts",
        // route-config.ts files are module menu configs (not routes), so exclude
        // them from TanStack Router's file-based route generation.
        routeFileIgnorePattern: "route-config\\.ts$",
      }),
      copyDynamicEnv(),
      react(),
    ],
    resolve: {
      dedupe: ["react", "react-dom"],
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
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
    fmt: {
      ignorePatterns: ["**/routeTree.gen.ts"],
    },
    lint: {
      jsPlugins: [{ name: "vite-plus", specifier: "vite-plus/oxlint-plugin" }],
      rules: { "vite-plus/prefer-vite-plus-imports": "error" },
      options: { typeAware: true, typeCheck: true },
      ignorePatterns: ["**/routeTree.gen.ts"],
    },
  };
}) as Parameters<typeof defineConfig>[0]);
