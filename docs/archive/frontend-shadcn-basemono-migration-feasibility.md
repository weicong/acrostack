# 前端迁移可行性评估：`acrostack/react` → `tsr-mono` 技术栈与架构

> 评估日期：2026-09-28
> 评估对象：`E:\icms\acrostack\react`（现状） / `E:\test5\tsr-mono`（目标参照）
> 性质：**可行性评估，不含代码改动**

---

## 0. 结论摘要

**技术上可行，无死结。** 但"换成 tsr-mono 的技术栈"这个说法会严重低估工作量，因为**两个项目已经是同一套框架与工具链**：都是 Vite+ / pnpm workspace / TanStack Router 文件式路由 / React 19 / TypeScript 7 / oxlint+oxfmt。

真实差异只有三处，且只有一处是"换库"：

| # | 差异 | 性质 | 工作量 |
| - | ---- | ---- | ------ |
| 1 | **UI 库**：Fluent UI v9 + Griffel → shadcn/ui `base-nova`（Base UI）+ Tailwind v4 | **换库 + 换样式范式** | **大（主要工作量）** |
| 2 | **包分层**：`core`/`ui`/`api-client`（域封装） → `ui`（原语）/`layout`（外壳） | 重构 | 中 |
| 3 | **工具链版本**：Vite+ `0.3.3` → `1.0.0` | 升版本 | 小 |

**必须正视的一件事：`tsr-mono` 是一个 7 条路由的脚手架 Demo，不是一套"可直接搬的架构"。**
它只有 `apps/web`（20 文件 / 1,584 行）+ `packages/ui`（23 文件 / 2,391 行）+ `packages/layout`（15 文件 / 948 行）。
acrostack 有 20 条路由、44 个页面文件、158 个手写文件。**tsr-mono 里没有** DataTable、表单库、Toast、日期选择器、图表、权限菜单 ——
而这些恰恰是 acrostack 用得最重的部分。所以"架构照搬"在数据层与业务机制层是**空的**：那部分没有可搬的东西，只能自建。

**推荐路径：拆两阶段。** 阶段 1 只换 UI 层实现（保持 `@acrostack/ui` 的对外导出不变），阶段 2 再谈包分层与工具链升级。
理由见 §5 与 §7。

---

## 1. 现状评估

### 1.1 规模

统计口径：排除 `node_modules`、`packages/api-client/src/generated`（Kubb 生成物 287 文件）、`routeTree.gen.ts`。

| 位置 | 手写文件 | 行数 |
| ---- | -------- | ---- |
| `apps/web/src` | 90 | 5,009 |
| `packages/core/src` | 22 | 1,112 |
| `packages/ui/src` | 45 | 3,287 |
| `packages/api-client/src` | 1 | 24 |
| **合计** | **158** | **9,432** |

其他规模指标：

- 路由文件 **20** 个（`apps/web/src/routes/`），页面文件 **44** 个（`apps/web/src/pages/`）
- 菜单条目：`routeConfig` 导出 4 处 / 路由模块 20 个 / `menu.name` 8 条
- 测试文件 **3** 个，且**全部在 `packages/ui`**：`app-shell/AppShell.test.tsx`、`data-table/useDataTable.test.ts`、`form/field-components/field-error.test.ts`
  → **这是最重要的风险论据**：换掉 UI 实现会让这 3 个测试全部失效，等于回归验证只能靠人工

### 1.2 依赖实际版本（读锁文件，非 semver）

| 包 | acrostack/react | tsr-mono |
| -- | --------------- | -------- |
| `vite-plus` | **0.3.3** | **1.0.0-rc.0** |
| `vite` | `npm:@voidzero-dev/vite-plus-core@0.3.3` | `npm:@voidzero-dev/vite-plus-core@1.0.0-rc.0` |
| `react` / `react-dom` | 19.3.0 | 19.3.0 |
| `typescript` | 7.0.2 | 7.0.2（catalog `^7.0.2`） |
| `@tanstack/react-router` | 1.170.38 | 1.170.39 |
| `@tanstack/react-table` | **9.2.4（v9！）** | 未使用 |
| `@tanstack/react-form` | 1.33.5 | 未使用 |
| UI 库 | `@fluentui/react-components` 9.74.7 + `@fluentui/react-icons` 2.0.339 + `@fluentui/react-datepicker-compat` / `react-calendar-compat` | `@base-ui/react` **1.8.0** + `tailwindcss` **4.3.3** + `lucide-react` 1.48.0 + CVA 0.7.1 + clsx 2.1.1 + tailwind-merge 3.7.0 + tw-animate-css 1.4.0 |
| ABP 接入 | `@volo/abp-react-app-config` 10.6.0、`@volo/abp-react-oidc-auth` 10.6.0、`axios` 1.20、`oidc-client-ts` 3.5 | 无 |
| 包管理器 | pnpm 12.5.1（`devEngines`） | pnpm 12.6.0（`devEngines`） |
| lint / fmt | oxlint + oxfmt（Vite+ 自带，含 `vite-plus/prefer-vite-plus-imports` 规则） | oxlint + oxfmt（Vite+ 自带，plugins 含 `unicorn`/`oxc`/`import`） |

### 1.3 耦合度普查（实测）

```
手写文件                158
import @fluentui         74   (47%)
import @acrostack/ui     43   (27%)
两者都有                 33
只走封装层、不碰 Fluent   10
只碰 Fluent、绕过封装层   41
   ├─ packages/ui 内（封装层自身的实现文件） 21
   └─ apps/web 内（应用侧需直接改）         20
```

`@fluentui` 在 `apps/web` 内的引用次数：**63 次**。

`@acrostack/ui` 子路径消费分布：

| 子路径 | 消费文件数 |
| ------ | ---------- |
| `@acrostack/ui/data-table` | 15 |
| `@acrostack/ui/layout` | 10 |
| `@acrostack/ui/form` | 7 |
| `@acrostack/ui/dialog` | 6 |
| `@acrostack/ui/theme` | 4 |
| `@acrostack/ui/app-shell` | 2 |

`@acrostack/core`（ABP 框架接入层）被 **41** 个文件消费；`@acrostack/api-client` 被几乎所有页面消费。

### 1.4 封装层边界 —— 本次评估最有价值的结构性结论

**158 个文件里，只有 20 个应用文件绕过 `@acrostack/ui` 直接依赖 Fluent UI。** 这 20 个是：

```
apps/web/src/components/layout/ImpersonationBanner.tsx
apps/web/src/pages/account/LoginPage.tsx
apps/web/src/pages/features/components/FeatureGroupCard.tsx
apps/web/src/pages/features/hooks/useFeatureActions.ts
apps/web/src/pages/identity/impersonation-sessions/hooks/useImpersonationSessionActions.ts
apps/web/src/pages/identity/permissions/hooks/usePermissionActions.ts
apps/web/src/pages/identity/permissions/PermissionsPage.tsx
apps/web/src/pages/identity/roles/hooks/useRoleActions.ts
apps/web/src/pages/identity/users/hooks/useUserActions.ts
apps/web/src/pages/settings/components/EmailSettingsCard.tsx
apps/web/src/pages/settings/components/TestEmailCard.tsx
apps/web/src/pages/settings/components/TimeZoneSettingsCard.tsx
apps/web/src/routes/admin/features.tsx
apps/web/src/routes/admin/identity/impersonation-sessions.tsx
apps/web/src/routes/admin/identity/permissions.tsx
apps/web/src/routes/admin/identity/roles.tsx
apps/web/src/routes/admin/identity/route-config.ts
apps/web/src/routes/admin/identity/users.tsx
apps/web/src/routes/admin/index.tsx
apps/web/src/routes/admin/settings.tsx
```

其中 8 个是 `routes/` 薄壳（`routeConfig` 里放图标组件，属于可一次性替换的机械改动），
剩下 12 个是页面/hooks。**结论：只要保持 `@acrostack/ui` 的对外导出签名不变，换 UI 库的主体改动被关在 `packages/ui` 的 21 个实现文件里，应用侧只需处理这 12 个 + 8 个薄壳。**

### 1.5 样式体系 —— 收敛度极高（有利证据）

- Griffel（`makeStyles` / `mergeClasses` / `tokens`）**只出现在 7 个文件**，且**全部在 `packages/ui/src/layout/`**：
  `Center.tsx`、`FormLayout.tsx`、`Grid.tsx`、`Layout.tsx`、`Section.tsx`、`spacing.ts`、`Stack.tsx`
- `packages/ui/AGENTS.md` 的 R1–R5「样式所有权」规则**明文禁止**在 `packages/ui` 之外定义样式
- 全应用唯一的全局样式表 `packages/ui/src/styles/globals.css` **只有 19 行**（`box-sizing` + `body { margin: 0 }`），不含任何颜色/字体声明

**意义：acrostack 的样式是高度收敛的，不是散布全库的。** 换 Tailwind 的"清扫面"只有 7 个文件 + 19 行 CSS。
这与"老项目样式遍地开花"的常见情形完全不同 —— 这是迁移成本的重大利好。

### 1.6 Fluent 符号使用频次（降序）与目标库对应

| 次数 | Fluent 符号 | shadcn `base-nova` 对应 | 判定 |
| ---- | ----------- | ---------------------- | ---- |
| 26 | `Button` | `button.tsx` | 直接对应 |
| 24 | `Text` | 无（Tailwind 类 / 自建 Typography） | **需自建** |
| 19 | `Card` | `card.tsx` | 直接对应 |
| 16 | `CardHeader` | `card.tsx` 的 `CardHeader` | 直接对应 |
| 13 | `Field` | `field.tsx`（`Field`/`FieldLabel`/`FieldError`…） | 直接对应 |
| 11 | `useToastController` | 无 → `sonner` + 宿主组件 | **需自建（命令式→声明式）** |
| 9 | `Spinner` | `spinner.tsx` | 直接对应 |
| 8 | `FieldProps`（类型） | 类型映射 | 需适配 |
| 7 | `makeStyles` | — | **删除**（换 Tailwind） |
| 7 | `mergeClasses` | `cn()` | 直接替换 |
| 5 | `MessageBar` | `alert.tsx` | 直接对应 |
| 5 | `MessageBarBody` | `AlertDescription` | 直接对应 |
| 4 | `Input` | `input.tsx` | 直接对应 |
| 4 | `tokens` | CSS 变量令牌 | 需映射 |
| 3 | `Title1/2/3` | 无 | **需自建** |
| 3 | `Switch` | 无 `switch.tsx` | **需补组件** |
| 3 | `Select` / `Option` | 无 `select.tsx` | **需补组件** |
| 12 | `Dialog` / `DialogTitle` / `DialogBody` / `DialogContent` / `DialogTrigger` / `DialogSurface` / `DialogActions` | `alert-dialog.tsx` / `dialog` | 直接对应（`dialog` 需补） |
| 3 | `useId` | React `useId` | 直接对应 |
| 3 | `Badge` | `badge.tsx` | 直接对应 |
| 2 | `FluentProvider` | 删除 → `.dark` 类 + `ThemeProvider` | **需重写** |
| 2 | `ToolbarButton` | `button.tsx` | 直接对应 |
| 2 | `Textarea` | `textarea.tsx` | 直接对应 |
| 2 | `Dropdown` | 无 | **需补组件** |
| 2 | `Checkbox` | 无 `checkbox.tsx` | **需补组件** |
| 2 | `SearchBox` | `input.tsx` + 图标 | **需自建** |
| 2 | `Avatar` | `avatar.tsx` | 直接对应 |
| 10 | `Menu` / `MenuItem` / `MenuList` / `MenuPopover` / `MenuTrigger` / `MenuDivider` | `dropdown-menu.tsx` | 直接对应 |
| 11 | `NavDrawer` / `NavDrawerBody` / `NavItem` / `NavSectionHeader` / `NavDrawerProps` | `sidebar.tsx` | 结构不同，**需重写** |
| 3 | `Breadcrumb` / `BreadcrumbItem` / `BreadcrumbDivider` | `breadcrumb.tsx` | 直接对应 |
| 6 | `Table` / `TableHeader` / `TableBody` / `TableRow` / `TableCell` / `TableHeaderCell` | 无 `table.tsx` | **需补组件** |
| 2 | `OverlayDrawer` / `DrawerBody` | `sheet.tsx` | 直接对应 |
| 1 | `SpinButton`（+ 3 个类型） | 无 | **需自建** |
| 1 | `Combobox`（+ 1 类型） | 无 | **需补组件** |
| 3 | `DatePicker` / `DatePickerProps` / `DayOfWeek` / `CalendarStrings` | `calendar` + `react-day-picker` | **需补组件（含中文 locale）** |
| 1 | `Toolbar` | 无 | **需自建** |
| 2 | `shorthands` / `GriffelStyle` | — | **删除** |
| 约 25 种 | `@fluentui/react-icons`（`Edit20Regular`、`Delete20Regular`、`PeopleTeam20Regular`…） | `lucide-react` | 直接对应（逐个替换） |

### 1.7 `tsr-mono` 侧的**功能缺口清单**（成本所在）

`packages/ui/src/components/` 只有 21 个原语：
`alert-dialog`、`alert`、`avatar`、`badge`、`breadcrumb`、`button`、`card`、`collapsible`、`dropdown-menu`、
`empty`、`field`、`input`、`item`、`label`、`separator`、`sheet`、`sidebar`、`skeleton`、`spinner`、`textarea`、`tooltip`

**acrostack 需要但 tsr-mono 没有的**：

| 缺什么 | acrostack 里的用量 | 处置 |
| ------ | ----------------- | ---- |
| `table` | `@acrostack/ui/data-table` 被 15 个文件消费 | 自建（TanStack Table v9 + shadcn 原语） |
| `select` / `combobox` / `command` | `Select` 3 + `Combobox` 1 + `Dropdown` 2 | 补 shadcn 组件（CLI 可加） |
| `checkbox` / `switch` / `radio-group` | `Checkbox` 2 + `Switch` 3 | 补 shadcn 组件 |
| `dialog`（非 alert） | 表单弹窗 `RoleFormDialog` / `UserFormDialog` 等 | 补 shadcn 组件 |
| `sonner`（toast） | `useToastController` 11 处 | 补 + 写命令式适配层 |
| `calendar` / `date-picker` / `popover` | `DatePickerField` + 中文 `CalendarStrings` | 补 + 中文 locale |
| `tabs` / `progress` / `scroll-area` / `pagination` | 目前未用，但后台常见 | 按需 |
| 布局原语 `Stack`/`HStack`/`VStack`/`Grid`/`Section`/`Layout`/`Center`/`FormLayout` | `@acrostack/ui/layout` 被 10 个文件消费 | **Tailwind 原子类直接替代，不必做成组件** |
| 域封装 `DataTable` / `useDataTable` / `useDataTableState` / `RowActions` / `ListToolbar` / `ConfirmDialog` / `AccessibleDialogSurface` / `useAppForm` + 8 个 Field + 4 个 Form 组件 | 见 §1.3 | **自建（本次最大工作量）** |

### 1.8 HTML 模板 / 产物命名 / 部署链路（硬耦合排查）

逐项实测，**结论：全部无硬耦合**。

| 排查项 | 结果 |
| ------ | ---- |
| 产物命名 / manifest 依赖（`asset-manifest`、`umi.js`、"有新版本请刷新"类逻辑） | **0 命中** |
| 自定义 HTML 模板（`.ejs` 等） | 无。`apps/web/index.html` 是 14 行纯模板，无全局脚本注入 |
| 全局脚本与加载顺序 | `main/AcroStack/wwwroot/` 下的 `global-scripts.js`（内容为一行注释）、`global-styles.css`（给 **ABP MVC Basic 主题的 Bootstrap 变量**换肤，与 React SPA 无关）、`dev-login-helper.js`（给 ABP 的 `/Account/Login` 页用）—— **三者都不被 React SPA 消费** |
| 路径别名 | `@` → `./src`（`apps/web/vite.config.ts` 的 `resolve.alias`）；tsr-mono 用 Vite 8 原生 `resolve.tsconfigPaths: true`。两边都可，无冲突 |
| 部署链路 | `react/apps/web/Dockerfile`（build: `node:22-alpine` + pnpm 12.5.1 → `pnpm run build`；run: `nginx:alpine`，`nginx.conf` 做 SPA fallback）+ 合并部署（`etc/build/build-artifacts.ps1` 把 `dist/*` 拷进 `main/AcroStack/wwwroot`，后端 `MapFallbackToFile("index.html")`）。**产物目录结构不变 → 部署链路零改动** |
| 运行时配置 | `apps/web/dynamic-env.json` → 构建期拷到 `public/`，运行时经 `/getEnvConfig` 读取覆盖 `VITE_API_URL` / `VITE_AUTH_URL` / `VITE_APP_URL`。与 UI 层无关 |
| 死代码 | `apps/web/src/lib/useMediaQuery.ts` 与 `packages/ui/src/app-shell/AppShell.tsx` 内的 `useMediaQuery` **重复实现**（后者未导出）。迁移时顺手收敛 |

### 1.9 性能基线

- **acrostack：未取得。** `react/node_modules` 为空（依赖未安装），本次评估不做安装（耗时且会改动工作区）。基线需在实施前补测。
- **tsr-mono（参照，来自其项目记忆）**：`vp build` 基线 19.52s（冷）→ 2.55s（热）；最近一次全量 `vp build` 8.0s；产物 CSS 80.38 kB（Tailwind v4 全量扫描后）。

---

## 2. 方案本质澄清：分层对照

先分清「框架」与「工具链」与「UI 库」——三者的迁移代价完全不同。

| 层 | acrostack/react 现状 | tsr-mono | 迁移性质 | 说明 |
| -- | -------------------- | -------- | -------- | ---- |
| **构建工具链** | Vite+ `0.3.3`（Vite + Rolldown + tsdown + oxlint + oxfmt + Vite Task，统一 `vp` CLI） | Vite+ `1.0.0-rc.0` | **升版本** | 同一产品跨大版本；配置形状（`defineConfig`、`defaultPackage`、`lint`/`fmt` 块）一致 |
| **包管理器** | pnpm 12.5.1（`catalog` + `overrides`） | pnpm 12.6.0（多 `catalogMode: prefer`） | 升版本 | 都是 `vp install` 托管 |
| **路由框架** | TanStack Router 1.170.38，**文件式路由**，`routeTree.gen.ts` 自动生成 | TanStack Router 1.170.39，同左 | **同框架同用法** | 路由文件写法几乎不用动 |
| **路由元数据约定** | 自建 `routeConfig` 聚合（`import.meta.glob` 自动发现）+ `lib/routing/shell-menu.ts`（151 行）做分组/选中/权限过滤 | `staticData.nav` / `staticData.breadcrumb`（TanStack 官方 `static-route-data`），`shell/route-meta.ts`（227 行）从路由树推导 | **换约定** | ⚠️ acrostack 的菜单带 **ABP 权限过滤**（`requiredPolicy` + `isGranted`）与**分组**，tsr-mono 的 `staticData` **没有权限概念** → 需扩展类型，不是纯替换 |
| **服务端状态** | TanStack Query 5 + Kubb 生成的 hooks + `useDataTableQuery`（对接 ABP `GridQueryParams`） | 无（Demo 用内存 store） | **保留** | tsr-mono 无对应物 |
| **表格** | TanStack Table **v9**（`tableFeatures` 显式注册 + `useTable`）+ `useDataTable`/`useDataTableState` 封装 | 无 | **保留机制、换外观** | 机制层（feature 注册、服务端分页/排序）必须原样保住 |
| **表单** | TanStack Form 1.33.5 + `useAppForm` + `withForm`/`withFieldGroup` + 8 个 Field 组件 | 无（`post-form` 手写） | **保留机制、换外观** | |
| **校验** | Zod 4 | 无 | 保留 | |
| **UI 库** | Fluent UI React v9.74.7（`@fluentui/react-components`） | shadcn/ui **`base-nova`**（底层 **Base UI 1.8.0**，非 Radix） | **换库** | 真实工作量所在 |
| **样式范式** | CSS-in-JS（Griffel：`makeStyles` / `tokens` / `mergeClasses`） | 原子类（Tailwind v4 + `@theme inline` CSS 变量令牌 + CVA） | **换范式** | 样式收敛在 7 个文件，成本可控 |
| **图标** | `@fluentui/react-icons`（约 25 种） | `lucide-react` 1.48 | 换库 | 逐个对应，机械改动 |
| **包分层** | `core`（ABP 接入）/ `ui`（6 个域：app-shell·data-table·dialog·form·layout·theme）/ `api-client`（Kubb 生成物） | `ui`（21 个 shadcn 原语，子路径 `./components/*`）/ `layout`（`AppShell`，**router 无关**，靠 `renderLink` 注入链接渲染） | **换分层** | ⚠️ 两者**不是同一层**：acrostack 的 `ui` 是"域封装"，tsr-mono 的 `ui` 是"裸原语"。tsr-mono 的 `layout` 才对应 acrostack 的 `app-shell` 域 |
| **应用层目录** | `components/layout`（8 文件）+ `lib/`（横切）+ `pages/`（44）+ `routes/`（20 薄壳） | `shell/`（4 文件）+ `lib/` + `features/` + `routes/`（7） | **换约定** | 语义差异：acrostack 是 `routes → pages`；tsr-mono 是 `routes → features`。两者都能用，切换成本主要在文档与 import 路径 |
| **ABP 框架接入** | `@acrostack/core`：运行时配置 / OIDC 授权码流程 / 权限判定 / 多租户 / HTTP 拦截器（Bearer、401 刷新重放、403 分流、`__tenant`） | **无** | **必须保留** | 41 个文件依赖。tsr-mono 完全没有这一层，且它不依赖任何 UI 库，**可以零改动保留** |
| **API 客户端** | `@acrostack/api-client`：Kubb 从 Swagger 生成（287 文件） | 无 | **必须保留** | 与 UI 层无耦合 |
| **i18n** | 无（硬编码中文） | 无 | — | 无差异 |

**一句话**：这不是"换技术栈"，而是"**在同一套 Vite+ / TanStack Router 底座上，把 UI 层从 Fluent UI 换成 shadcn/ui + Tailwind，顺带对齐包分层与工具链版本**"。

---

## 3. 改动点清单

规模标注：**大** = 需设计 + 多轮验证；**中** = 机械但有量；**小** = 一次到位。

| # | 改动点 | 规模 | 具体说明 |
| - | ------ | ---- | -------- |
| 1 | **`packages/ui/src/layout/` 全量重写**（7 文件，`Stack`/`HStack`/`VStack`/`StackItem`/`Grid`/`GridSpan`/`Center`/`Section`/`Layout` 家族/`FormLayout`/`spacing`） | 中 | Griffel → Tailwind 原子类。**保持 props 签名不变**（`gap`/`padding`/`width`/`variant`/`dividers` 等语义 props 全保留），则消费方 10 个文件零改动 |
| 2 | **`packages/ui/src/theme/` 重写**（`brand.ts` 的 16 阶 Fluent 色阶 + `createLightTheme`/`createDarkTheme` → Tailwind CSS 变量令牌 + `.dark` 类） | 中 | 需把品牌色（`#0078d4` 一系）映射到 shadcn 的 `--primary`/`--ring`/`--sidebar-primary` 等令牌。**tsr-mono 曾做过 Fluent 2 配色的令牌映射实验**（其项目记忆有完整映射表与对比度审计脚本），可直接复用 |
| 3 | **`packages/ui/src/app-shell/` 重写**（`AppShell` 303 行：`variant` 四变体 / `banner` / `topNav` / `sideNav` / 移动抽屉 / `useAppShellMobile`） | 中 | 目标形态是 tsr-mono 的 `@workspace/layout` `AppShell`（`SidebarProvider` + `SidebarInset` + `renderLink` IoC）。⚠️ acrostack 的 `AppShell` 是**槽位式**，tsr-mono 是**数据式**（`nav`/`user`/`teams` 传进来自渲染）。API 形状不同 → 消费方（2 个文件 + 各 Layout）要改 |
| 4 | **`packages/ui/src/data-table/` 重写**（`DataTable` 217 行 + `useDataTable` 194 行 + `useDataTableState` + `RowActions` + `ListToolbar`） | **大** | 机制层（TanStack Table v9 `tableFeatures` 注册、`manualPagination`/`manualSorting`、`pageCount`）**原样保留**；外观层（Fluent `Table`/`TableHeader`/`TableBody`/`TableRow`/`TableCell`/`TableHeaderCell`、`Toolbar`、`Select` 分页器、`Spinner`、空态/错误态整行合并）全部换成 shadcn 原语。⚠️ tsr-mono **连 `table.tsx` 都没有**，需先补。⚠️ HTML `<table>` 的虚拟化/列宽拖拽有结构性限制（若将来要上，需自建 `div + role="table"` 外壳） |
| 5 | **`packages/ui/src/form/` 重写**（`create-form.ts` 的 `useAppForm`/`withForm`/`withFieldGroup` + 8 个 Field：Text/Textarea/Number/Checkbox/Switch/Select/Combobox/DatePicker + 4 个 Form 组件 + `field-error.ts`） | **大** | 逻辑装配（TanStack Form 的 `fieldContext`/`formContext`）可原样保留，**只换表现层**：`Field` → shadcn `field.tsx`；`Input`/`Textarea` → 对应原语；`Select`/`Combobox`/`Checkbox`/`Switch` → **需补 shadcn 组件**；`SpinButton` → `Input type=number` 自建；`DatePicker` → `Calendar` + `react-day-picker` + **中文 locale**（现在是 `DayOfWeek` + `CalendarStrings`） |
| 6 | **`packages/ui/src/dialog/` 重写**（`ConfirmDialog` + `AccessibleDialogSurface`） | 中 | 6 个文件消费。⚠️ 若 `ConfirmDialog` 有 **Promise 语义**（`await confirm(...)`），需用「宿主组件 + 模块级 handler」实现，保留 `await` 写法；纯声明式则直接换 `AlertDialog` |
| 7 | **Toast 命令式 API 适配**（`useToastController` 11 处 + `Toaster` 1 处） | 中 | Fluent 是 hook 式（`useToastController(ToasterId)` + `dispatchToast`）。目标需选 `sonner` 并写一层适配（`toast.success(...)` 是模块级函数，反而更简单）。⚠️ `Toaster` 现在挂在 `App.tsx`，换库时同步 |
| 8 | **应用侧 20 个绕过封装层的文件** | 中 | 12 个页面/hooks（`Text`/`Card`/`Badge`/`Button`/`MessageBar`/`Avatar`/`Field`/`Select` 等直接用法）+ 8 个 `routes/` 薄壳（`routeConfig` 里的图标组件换成 lucide） |
| 9 | **`apps/web/src/components/layout/` 8 个文件**（`RootLayout`/`AppLayout`/`AccountLayout`/`PageLayout`/`Sidebar`/`Header`/`UserMenu`/`ThemeSwitcher`/`BrandMark`/`ImpersonationBanner`） | 中 | 对齐 tsr-mono 的 `shell/` 形状：`Sidebar`（`NavDrawer`+`NavItem`+`NavSectionHeader`）→ `sidebar.tsx` + `nav-main.tsx`；`Header`/`UserMenu` → `nav-user.tsx`；`ThemeSwitcher` → `theme-toggle.tsx` |
| 10 | **路由元数据约定切换**（`routeConfig` + `import.meta.glob` → `staticData.nav`/`staticData.breadcrumb`） | 中 | ⚠️ **必须扩展 `staticData` 类型以携带 `requiredPolicy` / `requiresAuth` / `externalHref` / `group`**，并保留 `shell-menu.ts` 的权限过滤与最长路径匹配逻辑（那 151 行是纯逻辑，可整段留下）。tsr-mono 的 `route-meta.ts` 可直接借用 `collectNavGroups` / `createRouteLabelIndex` / `matchRouteLabel` 三个函数，但**权限过滤要自己加回去** |
| 11 | **包分层重构** | 中 | 三选一，见 §6-Q3。最小改动是**不重命名、只换实现**；若要完全对齐，需把 `ui` 的域拆分到 `ui`（原语）+ `layout`（外壳），`core`/`api-client` 原地不动 |
| 12 | **工具链升到 Vite+ 1.0.0** | 小 | 改 `pnpm-workspace.yaml` 的 `catalog` 两行 + `vp install` + 全量 `vp check` / `vp build` / `vp test` 复验。⚠️ Vite+ **1.0.0 正式版已于 2026-09-28 发布**（`dist-tags.latest = 1.0.0`），tsr-mono 用的还是 `1.0.0-rc.0` |
| 13 | **测试重写**（3 个） | 小-中 | `AppShell.test.tsx`、`useDataTable.test.ts`、`field-error.test.ts` 全部绑定 Fluent 实现。`useDataTable.test.ts` 与 `field-error.test.ts` 测的是纯逻辑，**大概率可保留**；`AppShell.test.tsx` 必然重写 |
| 14 | **Tailwind v4 monorepo 配置** | 小 | `packages/ui/src/styles/globals.css` 需加 `@import "tailwindcss"` + `@source` 指向各 workspace 的 `src`。⚠️ tsr-mono 踩过两个坑并已有定论：`@source` **只接受字面路径、不支持 glob**；且**不要**指向仓库根（会把 `.md` 文档当源码扫，多编译进 ~9 kB 死类） |
| 15 | **文档更新** | 中 | `AGENTS.md`（仓库根 + `react/` + `apps/web/` + `packages/ui/`）、`README.md`（根 + `react/` + `apps/web/`）多处描述 Fluent UI / 样式所有权 R1–R5 / 包分层，全部需要改写 |

---

## 4. 风险分级

### 高

| # | 风险 | 依据 |
| - | ---- | ---- |
| H1 | **域封装层（DataTable / Form / Dialog）在 tsr-mono 侧没有对应物，必须自建** | `@acrostack/ui/data-table` 被 15 文件消费、`form` 7 个、`dialog` 6 个。tsr-mono 的 `packages/ui` 只有 21 个裸原语，**无 table / 无 form / 无 sonner / 无 date-picker / 无 select / 无 checkbox / 无 switch / 无 dialog**。这是本次迁移的**主体工作量**，不是"照搬"能解决的 |
| H2 | **服务端表格机制必须逐项保真** | `useDataTableQuery` 对接 ABP 的 `GridQueryParams`（排序/分页/全局过滤 → 后端），`DataTable` 有服务端分页（`manualPagination` + `pageCount`）、排序键盘可达、加载态/错误态/空态整行合并、行选中高亮。这些是**业务机制**，换外观时必须逐项对照验证 |
| H3 | **视觉/品牌回归** | Fluent 的 16 阶 `BrandVariants` + `createLightTheme`/`createDarkTheme` 派生出的语义令牌，与 shadcn 的 `oklch` 令牌体系**不是一一对应**。品牌色 `#0078d4` 一系需要重建映射，且**必须做对比度审计**（tsr-mono 有现成的运行时全量对比度审计脚本可复用）。另外 shadcn `base-nova` 的**默认观感与 Fluent 差别明显**（圆角、间距节奏、控件高度、字体），"看起来没变"不成立 |
| H4 | **ABP 权限驱动菜单在 `staticData` 约定下会丢失** | 现在 `shell-menu.ts` 用 `usePermissions().isGranted(requiredPolicy)` 过滤菜单项，`route-config-types.ts` 定义了 `requiredPolicy`/`requiresAuth`/`externalHref`/`group`。tsr-mono 的 `RouteNavMeta` 只有 `label`/`icon`/`group`/`order`。**直接照搬会静默丢掉权限过滤**（菜单会对无权用户可见）→ 必须扩展类型并保留过滤逻辑 |
| H5 | **回归验证基本靠人工** | 全仓只有 3 个测试，且全部绑定将被重写的封装层。acrostack 有 20 条路由 / 44 个页面文件，**没有 E2E、没有页面测试**。换 UI 库后"哪些页面坏了"只能靠逐页点 |

### 中

| # | 风险 | 依据 |
| - | ---- | ---- |
| M1 | 命令式 API 改造（`useToastController` 11 处 + `ConfirmDialog` 6 处） | hook 式 / 声明式 → 模块级函数 / 宿主组件，属"调用方式变化"而非替换；若 `ConfirmDialog` 有 Promise 语义需专门保真 |
| M2 | 日期选择器 + 中文本地化 | 现在用 `@fluentui/react-datepicker-compat` + `DayOfWeek` + `CalendarStrings` 做中文；目标 `react-day-picker` 的 locale 机制不同，且需补 `calendar`/`popover` 组件 |
| M3 | `AppShell` API 形状不兼容 | 槽位式（`banner`/`topNav`/`sideNav`/`children`）→ 数据式（`nav`/`user`/`teams`/`renderLink`）。消费方（`AppLayout`、`AccountLayout`、`PageLayout`、`App.tsx`）都要改，`AppShell.test.tsx` 重写 |
| M4 | Vite+ 0.3.3 → 1.0.0 跨大版本 | 配置形状一致（`defineConfig`/`defaultPackage`/`lint`/`fmt`），但跨大版本仍可能触发 lint 规则收紧、`vp check` 报错面变化。⚠️ 需注意 tsr-mono 记忆里记录的 `vp dev` 在锁文件变化时会命中 `[safe-delete][SAFE_DELETE_BULK_CONFIRM_REQUIRED]` |
| M5 | Tailwind v4 monorepo 扫描配置 | 两个已知坑（`@source` 不支持 glob、指向仓库根会多扫文档）已有定论，但**必须在配置时一次做对**，否则症状是"样式静默丢失"（类名编译不出来）而非报错 |
| M6 | 路由元数据约定切换 + `routeFileIgnorePattern` | 现在靠 `routeFileIgnorePattern: "route-config\\.ts$"` 把菜单配置文件排除在路由生成之外。切到 `staticData` 后这些 `route-config.ts` 应删除，但**要确认 `routeTree.gen.ts` 正确重生成** |
| M7 | Base UI 与 Radix 的 API 差异 | `base-nova` 基于 **Base UI**（不是 Radix）：`asChild` → `render`、`data-[state=open]:` → `data-popup-open:`、`DropdownMenuLabel` 必须在 `DropdownMenuGroup` 内、`Button` 的 `render` 指向 `<a>` 时要加 `nativeButton={false}`。这些是 tsr-mono 已记录的坑，写新代码时必须遵守 |
| M8 | 图标替换约 25 种 | `Edit20Regular` / `Delete20Regular` / `PeopleTeam20Regular` / `PersonArrowLeft20Regular` / `WeatherMoon20Regular` 等 → lucide 对应名。机械但需要逐个人工核对语义（避免"看着像但不是同一个意思"） |

### 低

| # | 风险 | 依据 |
| - | ---- | ---- |
| L1 | 路由文件本身 | 同框架同版本同用法（文件式路由），`routes/*.tsx` 的路由定义几乎不动 |
| L2 | 部署链路 | 实测无产物命名/manifest 硬耦合；`dist/` 目录结构不变；Dockerfile / nginx.conf / `MapFallbackToFile` / `build-artifacts.ps1` 全部零改动 |
| L3 | `@acrostack/core` 与 `@acrostack/api-client` | 41 文件 + 全部页面依赖，但**与 UI 库零耦合**（`core` 的依赖只有 axios / oidc-client-ts / ABP 包）→ 零改动保留 |
| L4 | i18n | 无 i18n 层，硬编码中文，无差异 |
| L5 | 样式清扫面 | Griffel 只在 7 个文件、全局 CSS 只有 19 行 → 清扫面极小 |
| L6 | `@source` 之外的 Tailwind 配置 | tsr-mono 的 `globals.css`（217 行）可直接作为模板 |

---

## 5. 是否存在阻碍

### 技术死结：**无**

逐项核对了可能成为死结的点，全部有解：

- **路由框架**：两边都是 TanStack Router 文件式路由 → 无框架级重建
- **工具链**：两边都是 Vite+ / pnpm → 无工具链级重建
- **表格机制**：acrostack 用的是 TanStack Table v9（`tableFeatures` 显式注册），tsr-mono 侧虽然没表格，但**机制层与 UI 库无关**，可整体保留，只换渲染层
- **表单机制**：TanStack Form 同理，逻辑装配与表现层已经分离（`create-form.ts` / `form-context.ts` vs `field-components/`），这是 acrostack 做得好的地方，直接受益
- **样式**：收敛在 7 个文件，且项目已有明确的「样式所有权」规则（R1–R5），迁移面可控
- **部署**：零改动

### 必须先决的前置条件（不是技术问题，是决策问题）

1. **`@acrostack/ui` 的域封装层是保留还是丢弃** —— 这决定工作量的量级（见 §6-Q3）。
   - **保留**（推荐）：换实现、保签名 → 应用侧只有 12 个页面/hooks + 8 个薄壳要动
   - **丢弃**：把 TanStack Table / Form 直接下放到页面 → 43 个消费文件全部重写，且丢掉现有的分层约束
2. **视觉验收标准** —— 是"保持 Fluent 观感"（需做完整令牌映射 + 对比度审计）还是"接受 shadcn 原生观感"（省掉 H3 的一半工作量）
3. **是否接受分阶段** —— 若要求"一次性全量换完"，H1 + H5 叠加会形成很长的不可验证期

---

## 6. 需要你拍板的事

**Q1｜视觉标准**：acrostack 现在的 Fluent 观感（圆角 4px、Segoe UI、Fluent 中性色、32px 控件高度）需要**1:1 保持**，还是可以接受 shadcn `base-nova` 的原生观感（圆角 10px、更大的控件、更"现代"的留白）？
→ 影响：H3 的工作量差一倍以上。若要保持，tsr-mono 曾做过 Fluent 2 配色的令牌映射与对比度审计，可直接复用其映射表与脚本。

**Q2｜工具链版本**：是否要一并升到 **Vite+ 1.0.0**（正式版已于今天 2026-09-28 发布）？还是先停在 0.3.3 只换 UI 层？
→ 影响：M4。建议**后置**，避免与 UI 层改动互相掩盖问题。

**Q3｜包分层对齐到什么程度**？
- (a) **最小**：包名与目录不变，只把 `@acrostack/ui` 内部实现换成 shadcn + Tailwind（`core`/`api-client` 完全不动）
- (b) **中**：新增 `packages/layout`（把 `app-shell` 域独立成 router 无关的外壳包），`ui` 保留域封装，`core`/`api-client` 不动
- (c) **完全对齐**：`packages/ui` 变成裸原语（子路径 `./components/*`），`packages/layout` 是外壳，与 tsr-mono 逐项对应
→ 影响：§3 的改动点 11，以及所有文档（§3-15）。**建议 (b)**。

**Q4｜路由元数据约定是否要换成 `staticData`**？
acrostack 现在用 `routeConfig` + `import.meta.glob` 自动发现，tsr-mono 用 TanStack 官方的 `staticData`。
→ 两者都能用。**换成 `staticData` 需要额外扩展类型以承载 ABP 权限字段**（H4）。
若目标是"与 tsr-mono 架构一致"，应该换；若目标是"降低风险"，可以不动（这不影响 UI 库替换）。
**建议：放到阶段 2，与 UI 层解耦。**

**Q5｜浏览器兼容要求**？
Fluent UI v9 的矩阵是 Chrome/Edge ≥ 84（受 `flex gap` 限制）。Tailwind v4 + Base UI 用现代 CSS（`@layer`、`oklch`、`color-mix` 等），实际下限更高（大致 Chrome/Edge ≥ 111）。
→ 若有"兼容 Chrome 78/84"这类既有需求，**会被直接否掉**，必须现在确认。

**Q6｜时间窗与分支策略**？能否接受"开分支并行、阶段 1 完成后再合"？

**Q7｜性能基线是否需要先测**？本次未取得 acrostack 的构建/dev 冷启动基线（依赖未安装）。若需要做迁移前后对比，建议实施前先补测。

---

## 7. 推进路径

### 阶段 0 —— PoC 验证最大不确定项（必做，且必须用真实页面）

**挑一个"最重"的真实页面复刻，逐项对照。** 建议 `identity/users`（`UsersPage` + `useUsersTable` + `UsersToolbar` + `UserFormDialog` + `useUserActions`）—— 它是全仓唯一同时用到
**DataTable（服务端分页 + 排序 + 行操作）+ Form（TanStack Form + Zod）+ Dialog + Toast + Badge + Avatar + Toolbar** 的页面，
正好覆盖 H1 / H2 / M1 三个最大风险。

PoC 验收清单（逐项打勾，不能"看着差不多"）：

- [ ] 表格：服务端分页（页码/每页条数切换）、排序（含键盘可达）、加载态、错误态、空态、行选中高亮、行内操作按钮不触发 `onRowClick`
- [ ] 表单：TanStack Form 逻辑装配不变、Zod 校验消息经 shadcn `FieldError` 渲染、8 种字段（文本/数字/选择/复选/开关/日期/组合框/多行）外观与行为
- [ ] Dialog：打开/关闭、焦点返回、`AlertDialog` 的破坏性确认
- [ ] Toast：命令式调用点改造后语义不变
- [ ] 主题：light/dark/system 三态 + 品牌色 + 对比度审计脚本跑通
- [ ] 响应式：<768px 时侧栏进抽屉
- [ ] `tsc --noEmit` 0 错误 + `vp build` 通过 + `vp check` 通过
- [ ] 浏览器实测（dev server 真实点击，不只是编译通过）

**若 PoC 通过 → 进入阶段 1；若 PoC 在 DataTable 或 Form 上翻车 → 重新评估 Q3（可能需要改为"只换外观层、机制层保留 Fluent 的某些部分"或另选表格方案）。**

### 阶段 1 —— 主体迁移（只换 UI 层，不动分层与路由约定）

1. `packages/ui` 引入 Tailwind v4 + `globals.css`（含 `@source` 正确配置）+ shadcn 组件（按 §1.7 缺口清单补齐）
2. 按 **§1.4 的 7 个文件**顺序重写 `layout` 域（先做，因为其他域都依赖它），**保持 props 签名不变**
3. 重写 `theme` 域（令牌映射 + 对比度审计）
4. 重写 `app-shell` / `data-table` / `dialog` / `form` 四个域，**保持对外导出不变**
5. 处理应用侧 20 个绕过封装层的文件
6. 重写 3 个测试
7. 更新文档（`AGENTS.md` × 4、`README.md` × 3）

**阶段 1 的验收标准 = 应用侧改动文件数 ≤ 30**（12 个页面/hooks + 8 个薄壳 + 布局 + App.tsx + 测试）。若远超这个数，说明封装层没保住，需回头检查。

### 阶段 2 —— 可选后置项

8. 路由元数据切 `staticData`（含 ABP 权限字段扩展）
9. 包分层对齐（Q3 的 (b) 或 (c)）
10. 工具链升 Vite+ 1.0.0
11. 顺手清理 §1.8 发现的 `useMediaQuery` 重复实现

### 阶段 3 —— 部署与回归

12. `build-artifacts.ps1` 全链路跑通（Docker 镜像 + wwwroot 合并部署）
13. 逐页人工回归（20 条路由）

---

## 附：本次评估的关键实测数据（可复核）

```bash
# 规模
cd E:/icms/acrostack/react
find apps/web/src packages/*/src -type f \( -name "*.ts" -o -name "*.tsx" \) \
  -not -path "*/generated/*" -not -name "routeTree.gen.ts" | wc -l     # → 158

# Fluent 耦合
grep -rl "@fluentui" apps packages --include=*.ts --include=*.tsx \
  | grep -v node_modules | grep -v generated | wc -l                    # → 74

# 封装层边界（只碰 Fluent、绕过 @acrostack/ui 的文件）
# → 41（packages/ui 内 21 + apps/web 内 20）

# Griffel 使用面
grep -rl "makeStyles" apps packages --include=*.ts --include=*.tsx \
  | grep -v node_modules | grep -v generated                            # → 7，全在 packages/ui/src/layout/

# 产物命名硬耦合
grep -rn "asset-manifest\|manifest.json\|umi.js\|umi.css" apps packages \
  --include=*.ts --include=*.tsx | grep -v node_modules | wc -l         # → 0

# 目标技术栈版本状态（2026-09-28）
curl -s https://registry.npmjs.org/vite-plus | jq .dist-tags.latest     # → 1.0.0（今天正式发布）
curl -s https://registry.npmjs.org/@base-ui/react | jq .dist-tags.latest # → 1.8.0
curl -s https://registry.npmjs.org/tailwindcss | jq .dist-tags.latest   # → 4.3.3
```

---

## 附：参照项目 `tsr-mono` 的已知坑（迁移时必须遵守）

来自其项目记忆（2026-09-25 ~ 09-28 四天实操）：

1. **Tailwind v4 在 monorepo 里扫不到别的 workspace** —— `@source` 必须显式指向每个 workspace 的 `src`；`@source` **只接受字面路径、不支持 glob**；**不要**指向仓库根（会把 `.md` 当源码扫，多编译 ~9 kB 死类）
2. **Base UI ≠ Radix** —— `asChild` → `render`；`data-[state=open]:` → `data-popup-open:`（菜单触发器）；`DropdownMenuLabel` 必须在 `DropdownMenuGroup` 内；`Button` 的 `render` 指向 `<a>` 时加 `nativeButton={false}`
3. **缺 `shadcn` 包会导致 `data-horizontal:` / `data-vertical:` 变体失效** → `Separator` 渲染成 `0×0`。`base-nova` 的这两个变体映射到 `[data-orientation="…"]`，而 Base UI 只输出 `data-orientation`
4. **`Collapsible` 展开后高度为 0** —— 大概率不需要手写补丁（Base UI 1.8.0 靠自然高度）
5. **侧边栏折叠状态在纯 SPA 里刷新即丢** —— 需自行持久化（cookie/localStorage）
6. **`staticData` 能替代导航配置，但面包屑才是它的最佳场景**；`useMatchRoute({ fuzzy: true })` 做高亮**不可靠**，应比对匹配链
7. **加了新组件后报 `useContext` 为 null** → 先清 Vite 依赖预打包缓存（`node_modules/.vite/deps`）
8. **`vp dev` 在锁文件变化时会命中 `[safe-delete][SAFE_DELETE_BULK_CONFIRM_REQUIRED]`** → 把 `apps/web/node_modules/.vite/deps` 改名后重启
9. **`vp check` 报"所有文件格式错误"** → 先看行尾（CRLF/LF），不是代码问题
10. **`integrations/` 是 TanStack 的复数约定，专指"第三方库适配层"** —— 应用自身装配层不要用这个名字；`shell` 才是 TanStack 官方术语（`createRootRoute({ shellComponent })`）
