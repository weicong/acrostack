/**
 * `@acrostack/ui` 的公开入口。
 *
 * 本包是**样式的唯一定义地**：布局原语（layout）、主题与令牌（theme）、
 * 全局样式表（styles）都在这里，应用侧只组合不定义。
 *
 * 各域（app-shell / data-table / dialog / form / theme）相互独立、互不依赖
 * （`layout` 是共同的零依赖基础域），优先通过子路径导入
 * （`@acrostack/ui/form` 等）；此入口仅作便捷聚合，不含全局样式表
 * （它需要独立的副作用导入，见 `@acrostack/ui/styles/globals.css`）。
 */
export * from "./app-shell";
export * from "./data-table";
export * from "./dialog";
export * from "./form";
export * from "./theme";
