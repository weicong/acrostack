import { createFileRoute } from "@tanstack/react-router";
import {
  Blocks,
  FileCode2,
  Home,
  Layers,
  Palette,
  Route as RouteIcon,
  ShieldCheck,
  Terminal,
} from "lucide-react";

import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card";

export const Route = createFileRoute("/")({
  staticData: {
    nav: { label: "首页", icon: Home, group: "Platform", order: 10 },
  },
  component: HomePage,
});

const stats = [
  { label: "路由", value: "6", hint: "文件式，URL 即目录", icon: RouteIcon },
  { label: "UI 组件", value: "21", hint: "来自 @workspace/ui", icon: Blocks },
  { label: "布局包", value: "1", hint: "@workspace/layout", icon: Layers },
];

const capabilities = [
  {
    icon: FileCode2,
    title: "路由即导航",
    text: "菜单与面包屑由路由的 staticData 推导，加页面即加菜单。",
  },
  { icon: Layers, title: "外壳已抽包", text: "布局在 @workspace/layout，应用层只留业务与胶水。" },
  {
    icon: Palette,
    title: "主题三态",
    text: "light / dark / system，写入 localStorage 并跨刷新保持。",
  },
  {
    icon: ShieldCheck,
    title: "类型与规范",
    text: "strict TS + oxlint/oxfmt，提交前 vp check 一次过。",
  },
];

const commands = [
  ["vp dev", "启动开发服务器"],
  ["vp build", "生产构建"],
  ["vp check", "格式 + 规则 + 类型"],
  ["vp run -r typecheck", "各包 tsc --noEmit"],
];

function HomePage() {
  return (
    <>
      <header className="flex flex-col gap-1">
        <h1 className="font-heading text-2xl font-semibold tracking-tight">脚手架概览</h1>
        <p className="text-sm text-muted-foreground">
          TanStack Router（router-only 纯 SPA）+ shadcn/ui，由 Vite+ 统一负责构建与校验。
        </p>
      </header>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {stats.map((stat) => (
          <Card key={stat.label} size="sm">
            <CardHeader>
              <CardDescription>{stat.label}</CardDescription>
              <CardTitle className="text-2xl tabular-nums">{stat.value}</CardTitle>
              <CardAction>
                <stat.icon className="size-4 text-muted-foreground" />
              </CardAction>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-muted-foreground">{stat.hint}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>脚手架能力</CardTitle>
            <CardDescription>开箱即用的几件事，都有对应的页面或脚本。</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            {capabilities.map((item) => (
              <div key={item.title} className="flex items-start gap-3">
                <span className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-lg bg-muted text-foreground">
                  <item.icon className="size-4" />
                </span>
                <div className="flex flex-col gap-0.5">
                  <span className="text-sm font-medium">{item.title}</span>
                  <span className="text-xs text-muted-foreground">{item.text}</span>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>常用命令</CardTitle>
            <CardDescription>全部通过 Vite+ 入口，无需额外工具链。</CardDescription>
          </CardHeader>
          <CardContent>
            <dl className="flex flex-col divide-y">
              {commands.map(([command, description]) => (
                <div
                  key={command}
                  className="flex flex-wrap items-center justify-between gap-2 py-2.5"
                >
                  <dt className="font-mono text-xs">{command}</dt>
                  <dd className="text-xs text-muted-foreground">{description}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
              <Terminal className="size-3.5" />
              路由文件写在 <code className="font-mono">apps/web/src/routes</code>，目录即 URL。
            </p>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
