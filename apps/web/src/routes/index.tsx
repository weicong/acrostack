import { createFileRoute } from "@tanstack/react-router";
import { Home } from "lucide-react";

export const Route = createFileRoute("/")({
  staticData: {
    nav: { label: "首页", icon: Home, group: "Platform", order: 10 },
  },
  component: HomePage,
});

const stats = [
  { label: "路由数", value: "4" },
  { label: "UI 组件", value: "11" },
  { label: "样式风格", value: "new-york-v4" },
];

function HomePage() {
  return (
    <>
      <div className="grid auto-rows-min gap-4 md:grid-cols-3">
        {stats.map((stat) => (
          <div key={stat.label} className="flex flex-col gap-1 rounded-xl bg-muted/50 p-4">
            <span className="text-xs text-muted-foreground">{stat.label}</span>
            <span className="text-lg font-medium">{stat.value}</span>
          </div>
        ))}
      </div>

      <div className="min-h-[60vh] flex-1 rounded-xl bg-muted/50 p-6">
        <h2 className="font-heading text-base font-medium">TanStack Router 脚手架</h2>
        <p className="mt-2 max-w-prose text-sm text-muted-foreground">
          纯 SPA（router-only）模式，由 Vite+ 统一负责 dev / build / check 与依赖安装， 组件来自{" "}
          <code className="font-mono">@workspace/ui</code> 共享包， 样式为 shadcn/ui 的{" "}
          <code className="font-mono">new-york-v4</code> 风格（基于 Radix UI）。
        </p>
        <ul className="mt-4 space-y-1 text-sm text-muted-foreground">
          <li>· 侧边栏导航映射真实路由，可折叠到图标态并跨刷新保持</li>
          <li>· 面包屑跟随当前路由自动生成</li>
          <li>· 主题支持 light / dark / system 三态</li>
        </ul>
      </div>
    </>
  );
}
