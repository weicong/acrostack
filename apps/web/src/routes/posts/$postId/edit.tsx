import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { ArrowLeft, Trash2 } from "lucide-react";

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

import { deletePost, updatePost, usePost, type PostDraft } from "@/data/posts";
import { useBreadcrumbLabel } from "@/lib/breadcrumb-label";
import { PostForm } from "@/components/post-form";

export const Route = createFileRoute("/posts/$postId/edit")({
  staticData: {
    breadcrumb: { label: "编辑" },
  },
  component: EditPostPage,
});

function EditPostPage() {
  const { postId } = Route.useParams();
  const { post } = usePost(postId);
  const navigate = useNavigate();

  useBreadcrumbLabel("/posts/$postId", post?.title);

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

  function handleSubmit(draft: PostDraft) {
    updatePost(postId, draft);
    void navigate({ to: "/posts/$postId", params: { postId } });
  }

  function handleDelete() {
    deletePost(postId);
    void navigate({ to: "/posts" });
  }

  return (
    <>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h2 className="font-heading text-base font-medium">编辑文章</h2>
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

      <PostForm
        // Re-mount the form if the user navigates to a different post's edit
        // page, so the uncontrolled inputs pick up the new defaults.
        key={post.id}
        defaultValues={{ title: post.title, tag: post.tag, body: post.body }}
        submitLabel="保存修改"
        onSubmit={handleSubmit}
        onCancel={() => void navigate({ to: "/posts/$postId", params: { postId } })}
      />
    </>
  );
}
