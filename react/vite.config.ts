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
    test: {
      environment: "jsdom",
      setupFiles: ["./src/test/setup.ts"],
      include: ["src/**/*.{test,spec}.{ts,tsx}"],
      // @fluentui/react-icons 的 ESM 构建（lib/）存在相对导入缺少扩展名的缺陷，
      // 外部化时 Node 原生 ESM 解析失败。而导入它的 @fluentui/react-* 组件包默认
      // 也是外部化的（原生导入绕过 Vite 解析），因此需将所有 @fluentui 包内联，
      // 由 Vite 解析器处理（其扩展名补全规则可正常解析这些目录导入）。
      // 注意：Vitest 用模块路径（而非包名）测试正则，故用子串匹配。
      server: {
        deps: {
          inline: [/@fluentui/],
        },
      },
      coverage: {
        provider: "v8",
        reporter: ["text", "json", "html"],
        exclude: ["node_modules/", "src/test/"],
      },
      globals: true,
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
