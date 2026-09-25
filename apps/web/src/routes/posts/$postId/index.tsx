import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { ArrowLeft, Pencil, Trash2 } from "lucide-react";

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
import { Separator } from "@workspace/ui/components/separator";

import { deletePost, usePost } from "@/data/posts";
import { useBreadcrumbLabel } from "@/lib/breadcrumb-label";
import { formatDateTime } from "@/lib/format";

export const Route = createFileRoute("/posts/$postId/")({
  staticData: {
    // Falls back to a generic name; the page overrides it with the real post
    // title via `useBreadcrumbLabel` so a deleted post still labels sanely.
    breadcrumb: { label: "文章详情" },
  },
  component: PostDetailPage,
});

function PostDetailPage() {
  const { postId } = Route.useParams();
  const { post } = usePost(postId);
  const navigate = useNavigate();

  // Show the real title in the breadcrumb instead of the generic "文章详情".
  useBreadcrumbLabel("/posts/$postId", post?.title);

  function handleDelete() {
    deletePost(postId);
    void navigate({ to: "/posts" });
  }

  if (!post) {
    return (
      <div className="flex min-h-[40vh] flex-col items-center justify-center gap-3 rounded-xl bg-muted/50 p-6 text-center">
        <p className="text-sm font-medium">文章不存在</p>
        <p className="text-xs text-muted-foreground">
          它可能已被删除，或链接里的 id（{postId}）有误。
        </p>
        <Button size="sm" variant="outline" render={<Link to="/posts" />}>
          <ArrowLeft data-icon="inline-start" />
          返回列表
        </Button>
      </div>
    );
  }

  return (
    <>
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div className="flex min-w-0 flex-col gap-2">
          <h2 className="font-heading text-xl font-medium break-words">{post.title}</h2>
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted-foreground">
            <span className="rounded-md bg-muted px-2 py-0.5">{post.tag || "未分类"}</span>
            <span>创建于 {formatDateTime(post.createdAt)}</span>
            {post.updatedAt !== post.createdAt && (
              <span>更新于 {formatDateTime(post.updatedAt)}</span>
            )}
          </div>
        </div>

        <div className="flex shrink-0 items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            render={<Link to="/posts/$postId/edit" params={{ postId: post.id }} />}
          >
            <Pencil data-icon="inline-start" />
            编辑
          </Button>

          <AlertDialog>
            <AlertDialogTrigger render={<Button variant="destructive" size="sm" />}>
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
                <AlertDialogAction variant="destructive" onClick={handleDelete}>
                  确认删除
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </div>

      <Separator />

      <article className="max-w-prose text-sm leading-relaxed whitespace-pre-wrap text-foreground/90">
        {post.body || "（暂无正文）"}
      </article>

      <Separator />

      <div className="flex items-center gap-2">
        <Button variant="ghost" size="sm" render={<Link to="/posts" />}>
          <ArrowLeft data-icon="inline-start" />
          返回列表
        </Button>
      </div>
    </>
  );
}
