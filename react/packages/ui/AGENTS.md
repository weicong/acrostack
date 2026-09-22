# @acrostack/ui — 可复用 UI 组件包

工作区内部 UI 基础组件的统一包，按域划分子路径导出。**以源码形式被应用消费**（`exports` 指向 `src`，由应用的构建器编译），不产构建物、不发布。

本包同时是**样式的唯一定义地**（见下方「样式所有权」）。

## 域与公开 API

| 子路径                             | 内容                                                                                                                                                                                                     | 第三方依赖                                                                  |
| ---------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `@acrostack/ui/app-shell`          | `AppShell` 应用骨架（顶栏/侧栏/内容槽位；画布与面板底色、分隔线、48px 顶栏节奏、`variant` 变体，全部由 `layout` 原语组合）、`useAppShellMobile`、断点常量                                                | `@fluentui/react-components`、`react-icons`                                 |
| `@acrostack/ui/data-table`         | `DataTable`、`RowActions`、`useDataTable`/`useDataTableState`                                                                                                                                            | Fluent、`@tanstack/react-table`（**不含数据获取库**）                       |
| `@acrostack/ui/dialog`             | `ConfirmDialog`、`AccessibleDialogSurface`                                                                                                                                                               | Fluent                                                                      |
| `@acrostack/ui/form`               | `useAppForm` 及全部 Field/Form 组件                                                                                                                                                                      | Fluent（含 datepicker/calendar-compat）、`@tanstack/react-form`、`date-fns` |
| `@acrostack/ui/layout`             | 布局原语（对标 Astryx Layout 家族）：`Stack`/`HStack`/`VStack`/`StackItem`、`Grid`/`GridSpan`、`Center`、`Section`、`Layout` + `LayoutHeader`/`LayoutContent`/`LayoutFooter`/`LayoutPanel`、`FormLayout` | Fluent                                                                      |
| `@acrostack/ui/theme`              | `AppThemeProvider`、`useThemeMode`、`getPreferredTheme`、`appLightTheme`/`appDarkTheme`、`brandRamp`（颜色令牌）                                                                                         | Fluent                                                                      |
| `@acrostack/ui/styles/globals.css` | 全应用唯一的全局样式表：文档级基线（盒模型、页面外边距），不放组件外观                                                                                                                                   | —                                                                           |

约定：

- **宿主提供的库走 `peerDependencies`**：`react` / `react-dom`（必须与宿主共享同一实例）；其余第三方库为 `dependencies`，版本与 `apps/web` 对齐。
- **`data-table` 域只做表格机制与展示**：基于 `@tanstack/react-table` + Fluent，**禁止引入任何数据获取库**（`@tanstack/react-query`、axios 等）。取数编排（查询参数编码、缓存、变更后失效）属应用数据层，见 `apps/web/src/lib/useDataTableQuery.ts`。
- **`form` 域逻辑与表现分离**：`create-form.ts` / `form-context.ts` 负责 TanStack Form 的逻辑装配（校验器由调用方注入），`field-components/`、`form-components/` 只做 Fluent 表现封装。
- **每个域只有 `index.ts` 是公共 API**；域内文件是对外实现的私有细节，可以自由重构。
- **域之间零依赖**（`layout` / `theme` 两个基础域例外，见下方样式所有权规则）：A 域需要 B 域的能力时，优先在应用层组合；确需下沉时先在评审中论证。
- **禁止导入应用层**：`@/lib`、`@/api`、`@tanstack/react-router`、`@volo/*`、OIDC/认证等一律不得出现。出现即说明该组件属于应用而非 ui 包。
- **样式所有权：样式定义只允许出现在本包**（其他位置一律不允许），规则如下：
  - **R1 定义位置**：CSS-in-JS（`makeStyles`/`tokens`/`shorthands`/`mergeClasses`）与 CSS 文件只允许在本包内出现，且集中在 `layout`（间距刻度 + 布局原语）与 `theme`（颜色令牌）；其他域只提供结构与行为。
  - **R2 全局入口只有一份**：`src/styles/globals.css`（由 `@acrostack/ui/styles/globals.css` 导出），只放文档级规则（reset、`html/body` 尺寸、字体基线、滚动条），不放组件外观；全应用只有应用入口 `main.tsx` 的一行 import 加载它。
  - **R3 动态值白名单**：运行时才知道的值（尺寸、位置、进度、`transform`、CSS 变量透传）允许内联 `style`；**静态外观**（颜色/间距/边框/字体/圆角）禁止内联，必须走原语或 Fluent 令牌。
  - **R4 语义 props 不算样式**：Fluent 的 `appearance`/`size`/`block`/`Card size`，以及本包原语的 `gap`/`padding`/`columns`/`variant` 等属于结构或语义 API，不受禁令约束。
  - **R5 包内分层**：只有 `layout` 与 `theme` 可以 import `makeStyles`/`tokens`/`shorthands` 并书写颜色值；`app-shell`/`data-table`/`dialog`/`form` 只消费布局原语与 Fluent 组件。
  - 缺少的排布能力补进 `layout` 做成**通用原语**（而不是页面专用组件），不要在别处就地写样式。
- **`layout` 是基础域**（对标 Astryx `@astryxdesign/core` 的 Layout 家族）：`app-shell` / `data-table` / `dialog` / `form` 可以依赖 `layout`，`layout` 与 `theme` 不得依赖任何其他域。
- 测试与被测代码同目录（`*.test.ts(x)`），用 `vite-plus/test`；优先测纯逻辑（hooks 的纯函数部分、工具函数）。

## 何时把组件移入本包

同时满足：① 只依赖 Fluent / TanStack 生态与 React；② 不含应用业务语义（路由、权限、后端契约）；③ 已有或可预见第二个使用方。仅满足①②时先留在应用内。

样式与令牌（`layout` / `theme` / `styles`）不受③约束：它们是设计系统自身，天然属于本包。
