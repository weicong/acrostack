/**
 * `@acrostack/ui` 的公开入口。
 *
 * 各域（app-shell / data-table / dialog / form）相互独立、互不依赖，
 * 优先通过子路径导入（`@acrostack/ui/form` 等）；此入口仅作便捷聚合。
 */
export * from "./app-shell";
export * from "./data-table";
export * from "./dialog";
export * from "./form";
