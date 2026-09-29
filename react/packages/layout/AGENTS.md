# @acrostack/layout — 应用外壳

**刻意不认识路由库**：导航数据由宿主传入，链接渲染经 `renderLink` 注入，所以本包不 import
`@tanstack/react-router`，也不认识 ABP 权限。派生「本应用的路由树 → 导航分组」这类事留在宿主
（见 `apps/web/src/shell/`）。

工作区内部包，**以源码形式被应用消费**（`exports` 指向 `src`），不产构建物、不发布。

## 公开 API

| 子路径                                                 | 内容                                                                                                                                                                                        |
| ------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `@acrostack/layout`                                    | 便捷 barrel：`AppShell` / `AppSidebar` / `NavMain` / `NavUser` / `TeamSwitcher` / `PageHeader` / `RouteBreadcrumb` / `BreadcrumbLabelProvider` / `ThemeProvider` / `ThemeToggle` + 对应类型 |
| `@acrostack/layout/primitives`                         | 只想要零件（如一个主题切换按钮）而不想要整个 `AppShell` 时用                                                                                                                                |
| `@acrostack/layout/components/*`、`/hooks/*`、`/lib/*` | 与 `@acrostack/ui` 一致的目录式导出，shadcn CLI 认这个形状                                                                                                                                  |

关键组件：

- **`AppShell`** — 主题 + 面包屑标签 Provider、侧栏、内嵌区（顶栏 + 内容）。props：`nav` / `user` / `teams?` / `brand?` / `header?` / `banner?` / `actions?` / `defaultSidebarOpen?` / `themeStorageKey?` / `darkClassName?` / `renderLink?` / `onUserAction?` / `sidebarProps?` / `children`。
  - `teams` 为空时侧栏头部改用 `brand`（没有多团队概念的应用只展示品牌标识）。
- **`PageHeader`** — 页面头部：`title`(必填) / `description?` / `children?`(描述下方的 meta 行) / `actions?`(右对齐控件)。**自身不带外边距**——间距由外壳的内容列给出。
- **`ThemeProvider` / `useTheme`** — 主题状态：`theme: "light" | "dark" | "system"`。类名挂在 `<html>` 上，`storageKey` 由宿主给（避免同源两个应用抢同一个键）。
- **`RouteBreadcrumb`** — 只负责渲染传进来的 `Crumb[]`；由 URL 推导面包屑是宿主的事。

## 硬约束

- **`renderLink` 必须返回裸元素**（`({ to }) => <Link to={to} />`）。Base UI 的 `render` 会把按钮自己的
  `className` 与条目的 children 合并进来，这里再带 children 会渲染两遍。
- **`active` 由宿主计算**（如精确匹配 / 模糊匹配），本包不做路由匹配。
- **不 import `@tanstack/react-router`**，也不 import `@acrostack/core`（权限、认证都属于宿主）。
- 唯一允许的依赖是 `@acrostack/ui`（原语）与 `lucide-react`（图标）。
