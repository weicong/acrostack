import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/posts/new")({
  component: NewPostPage,
});

function NewPostPage() {
  return (
    <>
      <h2 className="font-heading text-base font-medium">新建文章</h2>

      <div className="h-9" />

      <p className="text-sm text-muted-foreground">
        这是一个嵌套路由页面，用于验证面包屑的多级生成：
        <code className="mx-1 font-mono">/posts/new</code>
        应显示为「首页 &gt; 文章 &gt; 新建」，同时侧边栏的「文章」分组应自动展开。
      </p>
    </>
  );
}
