# react/ — 前端 Monorepo 工作区

Vite+ 统一工具链下的 pnpm 工作区，工作区**根就在本目录**。

```text
react/
├── vite.config.ts          # 工作区根配置：lint / fmt 默认值与 overrides、defaultPackage
├── pnpm-workspace.yaml     # 工作区成员（apps/*、packages/*）+ catalog + overrides
├── package.json            # 工作区根脚本（dev / build / check / test / generate-api）
├── apps/
│   └── web/                # React 19 SPA
└── packages/
    ├── core/               # `@acrostack/core`：ABP 框架接入层（config / http / auth / permissions / tenant / query）
    ├── ui/                 # `@acrostack/ui`：shadcn 原语 + 全局样式表 + data-table / dialog / form
    ├── layout/             # `@acrostack/layout`：路由无关的应用外壳（AppShell / 侧栏 / 面包屑 / 主题）
    └── api-client/         # `@acrostack/api-client`：Kubb 生成的 API 客户端（models / clients / hooks）
```

命令与工作区约定见 [`AGENTS.md`](AGENTS.md)（唯一权威）；根命令与包级定向（`vp -C <包>`）也在其中。

## 文档

- [`apps/web/README.md`](apps/web/README.md) — 应用技术栈、环境变量、Docker 部署
- [`apps/web/AGENTS.md`](apps/web/AGENTS.md) — 应用源码布局、样式准则与评审清单
- [`packages/core/AGENTS.md`](packages/core/AGENTS.md) — `@acrostack/core` 子路径契约、依赖倒置约束
- [`packages/ui/AGENTS.md`](packages/ui/AGENTS.md) — `@acrostack/ui` 子路径、样式所有权与上游怪癖
- [`packages/layout/AGENTS.md`](packages/layout/AGENTS.md) — `@acrostack/layout` 的 router 无关契约
- [`packages/api-client/AGENTS.md`](packages/api-client/AGENTS.md) — Kubb 生成物边界与生成规程
