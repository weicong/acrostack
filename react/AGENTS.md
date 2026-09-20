# AGENTS.md — 前端工作区（Monorepo）

本目录是 Vite+ 统一工具链下的 pnpm 工作区根。**所有前端命令在工作区根执行**，不要进入包目录再敲全局命令。

## 结构

- `apps/web/` — React 19 SPA（TanStack Router/Query/Form、Fluent UI v9、Kubb、OIDC）。源码布局、样式准则与评审清单见 `apps/web/AGENTS.md`。
- `packages/app-shell/` — `@acrostack/app-shell`：应用布局基座（`AppShell` + `useAppShellMobile`），位方式 API 对标 Astryx AppShell，用 Fluent 实现。
- `vite.config.ts` — 工作区根配置：`lint`/`fmt` 默认值与 `overrides`（Vite+ **不支持**包级嵌套 lint 配置）、`defaultPackage: './apps/web'`。
- `pnpm-workspace.yaml` — 工作区成员、`catalog`（工具链版本锁定）、`overrides`（`vite@*` → Vite+ core 别名，pnpm 必需）。

## 命令

```bash
vp install                    # 安装工作区依赖
vp dev                        # → apps/web（defaultPackage）
vp check                      # 格式化 + lint + 类型检查（全工作区）
vp test                       # Vitest（各包 *.test.ts(x)）
vp build                      # → apps/web 构建
vp -C apps/web <cmd>          # 针对单个包执行
vp run -r <script>            # 递归执行各包脚本
```

## 约定

- 新增包放到 `packages/<name>`（可复用的库）或 `apps/<name>`（可运行的应用），随后 `vp install` 让工作区识别。
- 共享包以源码形式被应用消费（`exports` 指向 `src/index.ts`），由应用的构建器编译；不要为它们单独配置构建产物路径。
- 依赖统一通过工作区根的 `catalog:` 引用工具链版本；运行时依赖按包声明，避免重复安装。
- 检查一律用 `vp check`（含类型感知 lint）；测试用 `vp test`，测试文件与被测代码同目录（`*.test.ts` / `*.test.tsx`）。
