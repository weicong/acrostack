import { tanstackRouter } from "@tanstack/router-plugin/vite";
import tailwindcss from "@tailwindcss/vite";
import viteReact from "@vitejs/plugin-react";
import { defineConfig } from "vite-plus";

export default defineConfig({
  resolve: {
    // Vite 8 resolves `paths` from tsconfig.json natively — no `path.resolve` needed.
    tsconfigPaths: true,
  },
  plugins: [
    // oxlint-disable-next-line vite-plus/prefer-vite-plus-imports
    tanstackRouter({ target: "react", autoCodeSplitting: true }),
    viteReact(),
    tailwindcss(),
  ],
});
