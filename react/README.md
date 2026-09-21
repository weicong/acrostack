# react/ — 前端 Monorepo 工作区

Vite+ 统一工具链下的 pnpm 工作区，工作区**根就在本目录**。

```text
react/
├── vite.config.ts          # 工作区根配置：lint / fmt 默认值与 overrides、defaultPackage
├── pnpm-workspace.yaml     # 工作区成员（apps/*、packages/*）+ catalog + overrides
├── package.json            # 工作区根脚本（dev / build / check / test）
├── apps/
│   └── web/                # React 19 SPA（原 `react/` 的全部内容）
└── packages/
    ├── ui/                 # `@acrostack/ui`：可复用 UI 包（app-shell / data-table / dialog / form）
    └── api-client/         # `@acrostack/api-client`：Kubb 生成的 API 客户端（models / clients / hooks）
```

## 命令（都在本目录执行）

```bash
vp install            # 安装工作区依赖
vp dev                # 开发服务器（defaultPackage → apps/web，http://localhost:5173）
vp check              # 格式化 + lint + 类型检查（根配置对全工作区生效）
vp test               # 运行各包测试（Vitest，经 vite-plus/test）
vp build              # 构建应用（defaultPackage → apps/web）
vp -C apps/web ...    # 直接对某个包执行命令（等价于先 cd apps/web）
vp run -r build       # 递归运行所有包的 build 脚本
```

约定（详见 Vite+ 官方 Monorepo 指南）：

- **包级差异写进根 `vite.config.ts` 的 `overrides`** —— Vite+ 不支持嵌套的 lint/format 配置，包目录下的 `lint`/`fmt` 块不会生效。
- 每个包仍可保留自己的 `vite.config.ts`（dev/build/插件），例如 `apps/web/vite.config.ts`。
- 根命令不会静默作用于整个工作区：`dev`/`build`/`preview` 由 `defaultPackage` 指定默认目标，其余情况用 `-C <包>` 或 `vp run -r <script>`。

## 文档

- [`apps/web/README.md`](apps/web/README.md) — 应用技术栈、环境变量、Docker 部署
- [`apps/web/AGENTS.md`](apps/web/AGENTS.md) — 应用源码布局与样式准则（含评审清单）
- [`packages/ui/`](packages/ui) — 可复用 UI 包 `@acrostack/ui`（app-shell / data-table / dialog / form，子路径导出）
- [`packages/api-client/`](packages/api-client) — `@acrostack/api-client`：Kubb 生成的 API 客户端与生成工具链（生成物禁止手改）
