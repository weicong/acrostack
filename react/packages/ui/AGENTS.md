# @acrostack/ui — 可复用 UI 组件包

工作区内部 UI 基础组件的统一包，按域划分子路径导出。**以源码形式被应用消费**（`exports` 指向 `src`，由应用的构建器编译），不产构建物、不发布。

## 域与公开 API

| 子路径                     | 内容                                                          | 第三方依赖                                                                  |
| -------------------------- | ------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `@acrostack/ui/app-shell`  | `AppShell` 应用骨架、`useAppShellMobile`、断点常量            | `@fluentui/react-components`、`react-icons`                                 |
| `@acrostack/ui/data-table` | `DataTable`、`RowActions`、`useDataTable`/`useDataTableState` | Fluent、`@tanstack/react-table`（**不含数据获取库**）                       |
| `@acrostack/ui/dialog`     | `ConfirmDialog`、`AccessibleDialogSurface`                    | Fluent                                                                      |
| `@acrostack/ui/form`       | `useAppForm` 及全部 Field/Form 组件                           | Fluent（含 datepicker/calendar-compat）、`@tanstack/react-form`、`date-fns` |

约定：

- **宿主提供的库走 `peerDependencies`**：`react` / `react-dom`（必须与宿主共享同一实例）；其余第三方库为 `dependencies`，版本与 `apps/web` 对齐。
- **`data-table` 域只做表格机制与展示**：基于 `@tanstack/react-table` + Fluent，**禁止引入任何数据获取库**（`@tanstack/react-query`、axios 等）。取数编排（查询参数编码、缓存、变更后失效）属应用数据层，见 `apps/web/src/lib/data-table/useDataTableQuery.ts`。
- **`form` 域逻辑与表现分离**：`create-form.ts` / `form-context.ts` 负责 TanStack Form 的逻辑装配（校验器由调用方注入），`field-components/`、`form-components/` 只做 Fluent 表现封装。
- **每个域只有 `index.ts` 是公共 API**；域内文件是对外实现的私有细节，可以自由重构。
- **域之间零依赖**：A 域需要 B 域的能力时，优先在应用层组合；确需下沉时先在评审中论证。
- **禁止导入应用层**：`@/lib`、`@/api`、`@tanstack/react-router`、`@volo/*`、OIDC/认证等一律不得出现。出现即说明该组件属于应用而非 ui 包。
- 样式只用 Griffel `makeStyles` + Fluent 令牌；颜色、间距不写死（与 `apps/web/AGENTS.md` 的样式规则一致）。
- 测试与被测代码同目录（`*.test.ts(x)`），用 `vite-plus/test`；优先测纯逻辑（hooks 的纯函数部分、工具函数）。

## 何时把组件移入本包

同时满足：① 只依赖 Fluent / TanStack 生态与 React；② 不含应用业务语义（路由、权限、后端契约）；③ 已有或可预见第二个使用方。仅满足①②时先留在应用内。
