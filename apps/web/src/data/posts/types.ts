/** A single blog post. `id` is a stable string so routes can carry it in the URL. */
export type Post = {
  id: string;
  title: string;
  /** Free-form tag shown next to the title in lists. */
  tag: string;
  /** Markdown-ish body. Rendered as plain text with preserved line breaks. */
  body: string;
  createdAt: number;
  updatedAt: number;
};

/** Fields the user supplies; the store owns `id` and the timestamps. */
export type PostDraft = Pick<Post, "title" | "tag" | "body">;

export const EMPTY_DRAFT: PostDraft = { title: "", tag: "", body: "" };

/**
 * Seed data. Only used the first time the app runs — after that the store
 * reads whatever the user created from localStorage.
 */
export const seedPosts: Post[] = [
  {
    id: "p1",
    title: "用 Vite+ 统一前端工具链",
    tag: "工具链",
    body: "Vite+ 把 dev / build / check 与依赖安装收敛到一个 `vp` 入口。\n本仓库没有 eslint、prettier、biome —— 校验与格式化全部由它内置的 oxlint + oxfmt 承担。",
    createdAt: Date.parse("2026-09-20T09:00:00+08:00"),
    updatedAt: Date.parse("2026-09-20T09:00:00+08:00"),
  },
  {
    id: "p2",
    title: "TanStack Router 的文件式路由",
    tag: "路由",
    body: "src/routes 下的文件名即路由路径，routeTree.gen.ts 由插件自动生成。\n本仓库使用 router-only 模式，是纯 SPA，不包含 TanStack Start 的服务端能力。",
    createdAt: Date.parse("2026-09-21T10:30:00+08:00"),
    updatedAt: Date.parse("2026-09-21T10:30:00+08:00"),
  },
  {
    id: "p3",
    title: "shadcn/ui 的 Nova 风格与 Base UI",
    tag: "UI",
    body: "Nova 风格在 registry 里的完整标识是 `base-nova`，底层是 Base UI 而不是 Radix。\nAPI 差异集中在 render={<Comp />} 与扁平数据属性 data-open 上。",
    createdAt: Date.parse("2026-09-22T14:15:00+08:00"),
    updatedAt: Date.parse("2026-09-22T14:15:00+08:00"),
  },
];
