import fs from "node:fs";
import path from "node:path";
import { defineConfig, loadEnv } from "vite-plus";
import react from "@vitejs/plugin-react";

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

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const apiUrl = env.VITE_API_URL ?? "http://localhost:44320";
  const authUrl = env.VITE_AUTH_URL ?? env.VITE_API_URL ?? "http://localhost:44320";

  return {
    plugins: [copyDynamicEnv(), react()],
    resolve: {
      dedupe: ["react", "react-dom"],
      preserveSymlinks: true,
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    server: {
      port: 5173,
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
      },
    },
    test: {
      environment: "jsdom",
      setupFiles: ["./src/test/setup.ts"],
      include: ["src/**/*.{test,spec}.{ts,tsx}"],
      coverage: {
        provider: "v8",
        reporter: ["text", "json", "html"],
        exclude: ["node_modules/", "src/test/"],
      },
      globals: true,
    },
    lint: {
      options: {
        typeAware: true,
        typeCheck: true,
      },
    },
  };
});
