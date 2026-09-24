import { defineConfig } from "vite-plus";

export default defineConfig({
  // Point the bare `vp dev` / `vp build` / `vp preview` at the SPA app so nobody
  // has to remember `-C apps/web`.
  defaultPackage: "./apps/web",

  staged: {
    "*": "vp check --fix",
  },

  fmt: {
    ignorePatterns: ["**/routeTree.gen.ts", "**/dist/**", "docs/**", ".workbuddy-ai/**"],
  },

  lint: {
    ignorePatterns: ["**/routeTree.gen.ts", "**/dist/**", "docs/**", ".workbuddy-ai/**"],
    plugins: ["typescript", "react", "unicorn", "oxc", "import"],
    options: {
      typeAware: true,
      typeCheck: true,
    },
    overrides: [
      {
        files: ["apps/web/**", "packages/ui/**"],
        env: {
          browser: true,
        },
      },
    ],
  },

  run: {
    cache: true,
  },
});
