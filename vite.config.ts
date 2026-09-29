import { defineConfig } from "vite-plus";

// Generated or third-party content that must never be reformatted.
// The AI-tool directories hold skills vendored from upstream (`skills-lock.json`
// records their content hashes), so touching them churns files we do not own and
// invalidates those hashes. The four mirror directories are gitignored — see
// `.gitignore` — and are listed here so the rule holds even if that changes.
const IGNORED = [
  "**/routeTree.gen.ts",
  "**/dist/**",
  "docs/**",
  ".workbuddy-ai/**",
  ".agents/**",
  ".codeartsdoer/**",
  ".codebuddy/**",
  ".trae/**",
  ".zcode/**",
];

export default defineConfig({
  // Point the bare `vp dev` / `vp build` / `vp preview` at the SPA app so nobody
  // has to remember `-C apps/web`.
  defaultPackage: "./apps/web",

  staged: {
    "*": "vp check --fix",
  },

  fmt: {
    ignorePatterns: IGNORED,
  },

  lint: {
    ignorePatterns: IGNORED,
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
