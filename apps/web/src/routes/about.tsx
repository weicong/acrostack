import { createFileRoute } from "@tanstack/react-router";
import { CircleHelp, ExternalLink } from "lucide-react";

import { PageHeader } from "@workspace/layout";
import { Badge } from "@workspace/ui/components/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card";

export const Route = createFileRoute("/about")({
  staticData: {
    nav: { label: "关于", icon: CircleHelp, group: "Platform", order: 30 },
  },
  component: AboutPage,
});

const stack = [
  ["构建工具", "Vite+ (vp) — 统一负责 dev / build / check / 依赖安装"],
  ["包管理器", "pnpm，由 Vite+ 托管"],
  ["路由", "TanStack Router，文件式路由 + router-only（纯 SPA）"],
  ["UI", "shadcn/ui base-nova 风格，基于 Base UI"],
  ["样式", "Tailwind CSS v4"],
  ["校验 / 格式化", "oxlint + oxfmt（无 eslint / prettier / biome）"],
];

const workspace = [
  ["apps/web", "应用：路由、业务 feature、外壳胶水"],
  ["packages/ui", "共享 UI：shadcn 组件 + 设计令牌"],
  ["packages/layout", "应用外壳包：侧边栏 / 顶栏 / 主题 / 面包屑"],
];

function AboutPage() {
  return (
    <>
      <PageHeader
        title="关于"
        description="一个用于快速起步的 Vite+ monorepo 脚手架，技术选型与目录约定如下。"
      />

      <div className="grid gap-4 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>技术选型</CardTitle>
            <CardDescription>刻意保持精简：一套工具链、一个 UI 风格。</CardDescription>
          </CardHeader>
          <CardContent>
            <dl className="grid gap-3 sm:grid-cols-[7rem_1fr]">
              {stack.map(([key, value]) => (
                <div key={key} className="contents">
                  <dt className="text-sm text-muted-foreground">{key}</dt>
                  <dd className="text-sm">{value}</dd>
                </div>
              ))}
            </dl>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>仓库结构</CardTitle>
            <CardDescription>pnpm workspace：两个共享包 + 一个应用。</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-3">
            {workspace.map(([name, description]) => (
              <div key={name} className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <code className="font-mono text-xs">{name}</code>
                  <Badge variant="secondary" className="text-[0.65rem]">
                    workspace
                  </Badge>
                </div>
                <span className="text-xs text-muted-foreground">{description}</span>
              </div>
            ))}
            <p className="mt-1 flex items-center gap-1.5 text-xs text-muted-foreground">
              <ExternalLink className="size-3.5" />
              UI 包与布局包都直接以源码形式被引用，无需构建步骤。
            </p>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
