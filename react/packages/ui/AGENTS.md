# @acrostack/ui — shadcn 原语 + 机制封装

工作区内部 UI 包。**以源码形式被应用消费**（`exports` 指向 `src`，由应用的构建器编译），不产构建物、不发布。

技术栈：**shadcn/ui `base-nova`（底层 [Base UI](https://base-ui.com/)，不是 Radix）+ Tailwind CSS v4**。

本包同时是**全应用唯一的样式定义地**（见下方「样式所有权」）。

## 结构

| 子路径                       | 内容                                                                                                             | 第三方依赖                                                   |
| ---------------------------- | ---------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| `@acrostack/ui/components/*` | shadcn 原语，一个文件一个组件（`button`、`card`、`input`、`select`、`table`、`sidebar`、`combobox`、`sonner` …） | `@base-ui/react`、`lucide-react`、`class-variance-authority` |
| `@acrostack/ui/hooks/*`      | 原语共用的 hook（目前只有 `use-mobile`）                                                                         | —                                                            |
| `@acrostack/ui/lib/*`        | `cn()`（clsx + tailwind-merge）                                                                                  | `clsx`、`tailwind-merge`                                     |
| `@acrostack/ui/globals.css`  | **全应用唯一的全局样式表**：Tailwind 入口、`@source`、设计令牌、明暗主题                                         | `tailwindcss`、`tw-animate-css`                              |
| `@acrostack/ui/data-table`   | `DataTable`、`RowActions`、`ListToolbar`、`useDataTable` / `useDataTableState`                                   | `@tanstack/react-table`（**不含数据获取库**）                |
| `@acrostack/ui/dialog`       | `ConfirmDialog`（AlertDialog 语义）、`FormDialog`（表单弹窗外壳）                                                | Base UI alert-dialog / dialog                                |
| `@acrostack/ui/form`         | `useAppForm` 及 `TextField` / `SwitchField` / `ComboboxField` / `SubmitButton` / `FormActions` / `FormStack`     | `@tanstack/react-form`                                       |

约定：

- **宿主提供的库走 `peerDependencies`**：`react` / `react-dom`（必须与宿主共享同一实例）。
- **原语（`components/`）不加任何本地定制**：它们是 shadcn 上游的逐字副本，只做导入归一化（`cn` → `#lib/utils`、`IconPlaceholder` → lucide 图标）。**要改外观请改调用方的 class，或先改上游**——不要就地改原语，否则下次同步上游会冲突。
- **`data-table` 域只做表格机制与展示**：基于 `@tanstack/react-table` **v9**（`tableFeatures` 显式注册），**禁止引入任何数据获取库**（`@tanstack/react-query`、axios 等）。取数编排属应用数据层，见 `apps/web/src/lib/useDataTableQuery.ts`。
- **`form` 域逻辑与表现分离**：`create-form.ts` / `form-context.ts` 负责 TanStack Form 的逻辑装配（校验器由调用方注入），`field-components/`、`form-components/` 只做表现封装。
- **域之间零依赖**：`data-table` / `dialog` / `form` 互不依赖，各自只依赖 `components/` 原语。
- **禁止导入应用层**：`@/…`、`@tanstack/react-router`、`@acrostack/core`、`@acrostack/layout`、OIDC/认证等一律不得出现。出现即说明该组件属于应用而非 ui 包。
- **测试与被测代码同目录**（`*.test.ts(x)`），用 `vp test`；优先测纯逻辑（hooks 的纯函数部分、工具函数）。

## 样式所有权

**样式定义只允许出现在本包**（其他位置一律不允许）：

- **R1 定义位置**：全局样式表只有 `src/styles/globals.css` 一份，内含 Tailwind 入口、`@source` 扫描源、设计令牌与明暗主题；原语自带的外观写在各自的 `className` 里（Tailwind 原子类 + `cn()`）。**不新增 CSS 文件、不写 `@layer` 之外的裸规则。**
- **R2 全局入口只有一份**：由 `@acrostack/ui/globals.css` 导出，全应用只有应用入口 `main.tsx` 的一行 import 加载它。
- **R3 `@source` 必须逐 workspace 显式声明**：Tailwind v4 的默认扫描起点是 cwd（`vp build` 时是 `apps/web`），monorepo 里会漏掉别的 workspace。`@source` **只接受字面路径、不支持 glob**，且**不要**指向仓库根（会把 `.md` 文档当源码扫，多编译出没人用的类）。新增 workspace 包时必须加一行。
- **R4 颜色只走语义令牌**：应用与组件一律消费 `--background` / `--foreground` / `--primary` / `--muted-foreground` / `--border` / `--ring` / `--sidebar-*` 等令牌；**不写十六进制色值**。品牌色是唯一在 `globals.css` 里被本地覆盖的令牌（`--primary` / `--ring` / `--sidebar-primary`），其余保持 shadcn neutral 原生值。
- **R5 明暗主题靠 `<html>` 上的 `dark` 类**：没有 React 主题 Provider。首屏由 `apps/web/index.html` 的内联脚本按 `localStorage` 预先应用，避免闪白；运行时切换用 `@acrostack/layout` 的 `useTheme()`。
- **R6 动态值白名单**：运行时才知道的值（尺寸、位置、进度、`transform`、CSS 变量透传）允许内联 `style`；**静态外观**（颜色/间距/边框/字体/圆角）禁止内联，必须走 Tailwind 类。
- 缺少的能力优先用 Tailwind 表达；确实要复用的，用 `shadcn` CLI 加进 `components/`。

## 何时把组件移入本包

同时满足：① 只依赖 Base UI / TanStack 生态与 React；② 不含应用业务语义（路由、权限、后端契约）；③ 已有或可预见第二个使用方。仅满足①②时先留在应用内。

## 已知的上游怪癖（改样式前先看这里）

- **`base-nova` ≠ Radix 代**：`asChild` → `render`；菜单触发器打开态是 `data-popup-open:`（`data-open:` 永不匹配菜单触发器）；`DropdownMenuLabel` 必须在 `DropdownMenuGroup` 内（它读 `MenuGroupContext`）；`Button` 的 `render` 指向 `<a>` 时必须加 `nativeButton={false}`，否则 Base UI 会报控制台错误。
- **`data-horizontal:` / `data-vertical:` 必须映射到 `data-orientation`**（Base UI 只输出那个属性）。上游把它们放在 `shadcn/tailwind.css` 里；本项目没装 `shadcn` 包，所以在 `globals.css` 里手写这两条 `@custom-variant`。**少了它们 `<Separator>` 会塌成 0×0。**
- **`cn-font-heading` 同理**：`card` / `alert-dialog` / `empty` / `sheet` 都引用了它，`globals.css` 里用 `@utility` 补了一条。
- **`cn-menu-target` / `cn-menu-translucent`** 是 preset/主题 CSS 提供的，本项目没设 `menuColor`/`menuAccent`，因此是惰性无害的死类。
