import { defineConfig } from "vite-plus";

/**
 * 工作区根配置（Vite+ Monorepo 约定）。
 *
 * 根配置只负责**跨包共享**的部分：
 *   - lint / fmt 默认值（Vite+ 不支持嵌套的 lint 配置，包级差异一律写在这里的 overrides）；
 *   - `defaultPackage` 固定默认目标，使在根目录直接跑 `vp dev`/`vp build` 时无需选择包。
 *
 * 各包仍保留自己的 `vite.config.ts`（dev / build / 插件 / 代理等），见 `apps/web`。
 */
export default defineConfig({
  lint: {
    plugins: ["typescript", "react"],
    options: {
      typeAware: true,
      typeCheck: true,
    },
    // TanStack Router 生成的路由树：不是手写代码，不参与 lint/fmt
    // （包级 ignorePatterns 在本工作区不生效，包级差异必须写在这份根配置里）
    ignorePatterns: ["**/routeTree.gen.ts"],
    overrides: [
      {
        files: ["apps/web/**", "packages/**"],
        plugins: ["typescript", "react"],
      },
      {
        files: ["**/*.{test,spec}.{ts,tsx}"],
        plugins: ["typescript", "vitest"],
      },
    ],
  },
  fmt: {
    ignorePatterns: ["**/routeTree.gen.ts"],
    overrides: [
      {
        files: ["**/*.md"],
        options: {
          proseWrap: "preserve",
        },
      },
    ],
  },
  defaultPackage: "./apps/web",
});
