# AGENTS.md — 前端工作区（Monorepo）

本目录是 Vite+ 统一工具链下的 pnpm 工作区根。**所有前端命令在工作区根执行**，不要进入包目录再敲全局命令。通用命令（`vp install` / `dev` / `check` / `test` / `build` / `generate-api`）见仓库根 `AGENTS.md`。

## 结构

- `apps/web/` — React 19 SPA（TanStack Router/Query/Form、shadcn/ui + Tailwind v4、OIDC）。源码布局、样式准则与评审清单见 `apps/web/AGENTS.md`。
- `packages/core/` — `@acrostack/core`：ABP 框架接入层，子路径导出 `config` / `http` / `auth` / `permissions` / `tenant` / `query`。宿主差异（env、403 目标、共享 axios 实例）经 `configureCore` / `setupHttpClient` 注入；不依赖 `ui` 与 `api-client`。
- `packages/ui/` — `@acrostack/ui`：shadcn/ui（`base-nova` / Base UI）原语，子路径导出 `components/*` / `hooks/*` / `lib/*`，外加**全应用唯一的全局样式表** `globals.css`；另含三个业务无关的机制封装域 `data-table` / `dialog` / `form`。**样式定义只允许出现在本包**：颜色与明暗令牌在 `styles/globals.css`，原语自带外观，应用侧只组合不定义。
- `packages/layout/` — `@acrostack/layout`：应用外壳（`AppShell` / 侧栏 / 面包屑 / 主题 / `PageHeader`）。**刻意不认识路由库**——导航数据由宿主传入，链接渲染经 `renderLink` 注入。
- `packages/api-client/` — `@acrostack/api-client`：Kubb 从后端 Swagger 生成的 API 客户端（models / clients / hooks）+ 生成配置。**生成物禁止手改**。
- `vite.config.ts` — 工作区根配置：`lint`/`fmt` 默认值与 `overrides`（Vite+ **不支持**包级嵌套 lint 配置）、`defaultPackage: './apps/web'`。
- `pnpm-workspace.yaml` — 工作区成员、`catalog`（工具链版本锁定）、`overrides`（`vite@*` → Vite+ core 别名）。

## 工作区特有的命令

```bash
vp -C apps/web <cmd>          # 针对单个包执行（等价于先 cd apps/web）
vp run -r <script>            # 递归执行各包脚本
```

## 约定

- 新增包放到 `packages/<name>`（可复用的库）或 `apps/<name>`（可运行的应用），随后 `vp install` 让工作区识别。
- 共享包以源码形式被应用消费（`exports` 指向 `src/index.ts`），由应用的构建器编译；不要为它们单独配置构建产物路径。
- 依赖统一通过工作区根的 `catalog:` 引用工具链版本；运行时依赖按包声明，避免重复安装。
- 包级差异写进根 `vite.config.ts` 的 `overrides`（包目录下的 `lint`/`fmt` 块不生效）；每个包仍可保留自己的 `vite.config.ts`（dev/build/插件）。
- 测试文件与被测代码同目录（`*.test.ts(x)`），用 `vp test` 运行。
