# 需求说明

## 目标

搭建一个 TanStack Router + shadcn/ui 的脚手架项目。

## 依据

以下均**只作参考，不逐字照抄**：

1. **集成指南**：`https://raw.githubusercontent.com/tanstack/router/main/docs/router/how-to/integrate-shadcn-ui.md`
2. **布局参照**：`https://ui.shadcn.com/view/new-york-v4/sidebar-07`
3. **Monorepo**: `https://ui.shadcn.com/docs/monorepo`

## 技术选型

| 项            | 选择                                                                                                                        |
| ------------- | --------------------------------------------------------------------------------------------------------------------------- |
| 构建工具      | Vite+ 最新版 ——`vp` 统一负责 dev / build / check / 依赖安装                                       |
| 包管理器      | pnpm 最新版——由 Vite+ 托管  |
| 路由          | TanStack Router 最新版，**router-only 模式（纯 SPA，非 TanStack Start）**                                               |
| UI            | shadcn/ui `new-york-v4` 风格（基于 `Radix UI`）—— 2026-09-25 由 `base-nova`（Base UI）迁移而来                                                                        |
| 样式          | Tailwind v4 最新版                                                                                           |
| 校验 / 格式化 | Vite+ 自带 oxlint + oxfmt（项目内不引入 eslint / prettier / biome）                                                         |

## 产出

- **路由**：`/`、`/posts`、`/posts/new`、`/about`

## 已确认的布局决策

- 侧边栏导航**映射到真实路由**，不用原区块的 `#` 占位
- 面包屑**跟随当前路由自动生成**，不做硬编码

## 验收标准

**构建与静态检查**

- `tsc --noEmit` 0 错误
- `vp build` 通过
- `vp check` 格式检查通过

**浏览器实测**

- 主题在 light / dark / system 三态间切换生效
- 配色风格（默认 / Fluent）可切换，且与明暗模式正交，选择**跨刷新保持**
- 侧边栏可折叠到图标态，且**跨页面刷新保持**
- 面包屑多级正确（如 `/posts/new` 显示「首页 > 文章 > 新建」）
- 嵌套路由下对应分组自动展开，且子项高亮正确

 
