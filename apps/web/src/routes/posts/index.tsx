import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { Files, Pencil, Plus, Trash2 } from "lucide-react";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@workspace/ui/components/alert-dialog";
import { Button } from "@workspace/ui/components/button";

import { deletePost, usePosts } from "@/data/posts";
import { excerpt, formatDateTime } from "@/lib/format";

export const Route = createFileRoute("/posts/")({
  staticData: {
    nav: { label: "文章", icon: Files, group: "Platform", order: 20 },
  },
  component: PostsPage,
});

function PostsPage() {
  const posts = usePosts();
  const navigate = useNavigate();

  function handleDelete(id: string) {
    deletePost(id);
    // The row we are deleting may be the one currently open in a detail view;
    // navigating back to the list keeps the URL consistent with the store.
    void navigate({ to: "/posts" });
  }

  return (
    <>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-baseline gap-2">
          <h2 className="font-heading text-base font-medium">全部文章</h2>
          <span className="text-xs text-muted-foreground">共 {posts.length} 篇</span>
        </div>
        <Button size="sm" nativeButton={false} render={<Link to="/posts/new" />}>
          <Plus data-icon="inline-start" />
          新建文章
        </Button>
      </div>

      {posts.length === 0 ? (
        <div className="flex min-h-[40vh] flex-col items-center justify-center gap-3 rounded-xl bg-muted/50 p-6 text-center">
          <p className="text-sm text-muted-foreground">还没有文章，先创建一篇吧。</p>
          <Button size="sm" nativeButton={false} render={<Link to="/posts/new" />}>
            新建文章
          </Button>
        </div>
      ) : (
        <ul className="flex flex-col gap-3">
          {posts.map((post) => (
            <li
              key={post.id}
              className="flex flex-wrap items-start justify-between gap-3 rounded-xl bg-muted/50 p-4"
            >
              <div className="flex min-w-0 flex-1 flex-col gap-1">
                <Link
                  to="/posts/$postId"
                  params={{ postId: post.id }}
                  className="truncate text-sm font-medium transition-colors hover:underline"
                >
                  {post.title}
                </Link>
                <span className="truncate text-xs text-muted-foreground">{excerpt(post)}</span>
                <span className="text-xs text-muted-foreground">
                  {post.tag || "未分类"} · 更新于 {formatDateTime(post.updatedAt)}
                </span>
              </div>

              <div className="flex shrink-0 items-center gap-1">
                <Button
                  variant="ghost"
                  size="sm"
                  nativeButton={false}
                  render={<Link to="/posts/$postId/edit" params={{ postId: post.id }} />}
                >
                  <Pencil data-icon="inline-start" />
                  编辑
                </Button>

                <AlertDialog>
                  <AlertDialogTrigger
                    render={
                      <Button variant="ghost" size="sm" aria-label={`删除「${post.title}」`} />
                    }
                  >
                    <Trash2 data-icon="inline-start" />
                    删除
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>删除这篇草稿？</AlertDialogTitle>
                      <AlertDialogDescription>
                        「{post.title}」将从本地存储中永久移除，此操作不可撤销。
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>取消</AlertDialogCancel>
                      <AlertDialogAction
                        variant="destructive"
                        onClick={() => handleDelete(post.id)}
                      >
                        确认删除
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </div>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
