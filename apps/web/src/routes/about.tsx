import { createFileRoute } from "@tanstack/react-router";
import { CircleHelp } from "lucide-react";

export const Route = createFileRoute("/about")({
  staticData: {
    nav: { label: "关于", icon: CircleHelp, group: "Platform", order: 30 },
  },
  component: AboutPage,
});

const stack = [
  ["构建工具", "Vite+ (vp) — 统一负责 dev / build / check"],
  ["包管理器", "pnpm，由 Vite+ 托管"],
  ["路由", "TanStack Router，router-only（纯 SPA）"],
  ["UI", "shadcn/ui new-york-v4 风格，基于 Radix UI"],
  ["样式", "Tailwind CSS v4"],
  ["校验 / 格式化", "oxlint + oxfmt（无 eslint / prettier / biome）"],
];

function AboutPage() {
  return (
    <>
      <h2 className="font-heading text-base font-medium">关于</h2>

      <div className="rounded-xl bg-muted/50 p-4">
        <dl className="grid gap-2 text-sm sm:grid-cols-[8rem_1fr]">
          {stack.map(([key, value]) => (
            <div key={key} className="contents">
              <dt className="text-muted-foreground">{key}</dt>
              <dd>{value}</dd>
            </div>
          ))}
        </dl>
      </div>

      <p className="text-sm text-muted-foreground">
        采用 Vite+ 原生 monorepo：<code className="font-mono">apps/web</code> 为应用，
        <code className="mx-1 font-mono">packages/ui</code>
        为共享 UI 包（组件 / 样式 / 工具），供后续新增应用复用。
      </p>
    </>
  );
}
