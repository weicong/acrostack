import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { ArrowLeft, FileQuestion, Trash2 } from "lucide-react";

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
import { Card, CardContent } from "@workspace/ui/components/card";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@workspace/ui/components/empty";

import { PageHeader, useBreadcrumbLabel } from "@workspace/layout";
import { deletePost, PostForm, updatePost, usePost, type PostDraft } from "@/features/posts";

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
      <Card>
        <CardContent>
          <Empty>
            <EmptyHeader>
              <EmptyMedia variant="icon">
                <FileQuestion />
              </EmptyMedia>
              <EmptyTitle>文章不存在</EmptyTitle>
              <EmptyDescription>它可能已被删除，或链接里的 id（{postId}）有误。</EmptyDescription>
            </EmptyHeader>
            <EmptyContent>
              <Button
                size="sm"
                variant="outline"
                nativeButton={false}
                render={<Link to="/posts" />}
              >
                <ArrowLeft data-icon="inline-start" />
                返回列表
              </Button>
            </EmptyContent>
          </Empty>
        </CardContent>
      </Card>
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
      <PageHeader
        title="编辑文章"
        description="保存后会刷新「更新于」时间。"
        actions={
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
        }
      />

      <Card>
        <CardContent>
          <PostForm
            // Re-mount the form if the user navigates to a different post's edit
            // page, so the uncontrolled inputs pick up the new defaults.
            key={post.id}
            defaultValues={{ title: post.title, tag: post.tag, body: post.body }}
            submitLabel="保存修改"
            onSubmit={handleSubmit}
            onCancel={() => void navigate({ to: "/posts/$postId", params: { postId } })}
          />
        </CardContent>
      </Card>
    </>
  );
}
