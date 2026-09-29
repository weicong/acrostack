# AGENTS.md — 前端工作区（Monorepo）

本目录是 Vite+ 统一工具链下的 pnpm 工作区根。**所有前端命令在工作区根执行**，不要进入包目录再敲全局命令。通用命令（`vp install` / `dev` / `check` / `test` / `build` / `generate-api`）见仓库根 `AGENTS.md`。

## 结构

- `apps/web/` — React 19 SPA（TanStack Router/Query/Form、shadcn/ui + Tailwind v4、OIDC）。源码布局、样式准则与评审清单见 `apps/web/AGENTS.md`。
- `packages/core/` — `@workspace/core`：ABP 框架接入层，子路径导出 `config` / `http` / `auth` / `permissions` / `tenant` / `query`。宿主差异（env、403 目标、共享 axios 实例）经 `configureCore` / `setupHttpClient` 注入；不依赖 `ui` 与 `api-client`。
- `packages/ui/` — `@workspace/ui`：shadcn/ui（`base-nova` / Base UI）原语，子路径导出 `components/*` / `hooks/*` / `lib/*`，外加**全应用唯一的全局样式表** `globals.css`；另含三个业务无关的机制封装域 `data-table` / `dialog` / `form`。**样式定义只允许出现在本包**：颜色与明暗令牌在 `styles/globals.css`，原语自带外观，应用侧只组合不定义。
- `packages/layout/` — `@workspace/layout`：应用外壳（`AppShell` / 侧栏 / 面包屑 / 主题 / `PageHeader`）。**刻意不认识路由库**——导航数据由宿主传入，链接渲染经 `renderLink` 注入。
- `packages/api-client/` — `@workspace/api-client`：Kubb 从后端 Swagger 生成的 API 客户端（models / clients / hooks）+ 生成配置。**生成物禁止手改**。
- `vite.config.ts` — 工作区根配置：`lint`/`fmt` 默认值与 `overrides`（Vite+ **不支持**包级嵌套 lint 配置）、`defaultPackage: './apps/web'`。
- `pnpm-workspace.yaml` — 工作区成员、`catalog`（工具链版本锁定）、`overrides`（`vite@*` → Vite+ core 别名）。

## 包命名

| 位置     | 名字                                                      |
| -------- | --------------------------------------------------------- |
| 工作区根 | `acrostack`（私有，不发布）                               |
| 共享包   | `@workspace/<dir>`，如 `@workspace/ui`、`@workspace/core` |
| 应用     | `web`（私有，无 scope）                                   |

`@workspace/*` 是 **shadcn/ui monorepo 模板的默认命名**，选它是为了**抄官方文档时不必改路径**——
官方示例一律写 `@workspace/ui/components`。规范本身不要求这个前缀（`ui.shadcn.com/docs/monorepo`
的 Requirements 只要求「每个 workspace 都有 `components.json`，且 aliases 与实际包名一致」），
换任何 scope 都合法；这里只是选了与文档一致的那个。

**目录名必须与包名后缀一致**（`packages/ui` ↔ `@workspace/ui`）。新增包时同时改三处：
目录名、`package.json` 的 `name`、以及引用方的 `dependencies`。

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
