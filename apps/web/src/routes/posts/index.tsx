import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@workspace/ui/components/button";

export const Route = createFileRoute("/posts/")({
  component: PostsPage,
});

const posts = [
  { id: 1, title: "用 Vite+ 统一前端工具链", tag: "工具链" },
  { id: 2, title: "TanStack Router 的文件式路由", tag: "路由" },
  { id: 3, title: "shadcn/ui 的 Nova 风格与 Base UI", tag: "UI" },
];

function PostsPage() {
  return (
    <>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h2 className="font-heading text-base font-medium">全部文章</h2>
        <Button size="sm" render={<Link to="/posts/new" />}>
          新建文章
        </Button>
      </div>

      <ul className="flex flex-col gap-3">
        {posts.map((post) => (
          <li
            key={post.id}
            className="flex items-center justify-between rounded-xl bg-muted/50 p-4"
          >
            <span className="text-sm">{post.title}</span>
            <span className="text-xs text-muted-foreground">{post.tag}</span>
          </li>
        ))}
      </ul>
    </>
  );
}
