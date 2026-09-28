import { Fragment } from "react";
import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { FileText, Files, Pencil, Plus, Trash2 } from "lucide-react";

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
import { Badge } from "@workspace/ui/components/badge";
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
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemSeparator,
  ItemTitle,
} from "@workspace/ui/components/item";

import { deletePost, excerpt, usePosts } from "@/features/posts";
import { formatDateTime } from "@/lib/format";

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
      <header className="flex flex-wrap items-start justify-between gap-4">
        <div className="flex flex-col gap-1">
          <h1 className="font-heading text-2xl font-semibold tracking-tight">文章</h1>
          <p className="text-sm text-muted-foreground">
            共 {posts.length} 篇 · 数据保存在浏览器 localStorage
          </p>
        </div>
        <Button size="sm" nativeButton={false} render={<Link to="/posts/new" />}>
          <Plus data-icon="inline-start" />
          新建文章
        </Button>
      </header>

      <Card>
        <CardContent>
          {posts.length === 0 ? (
            <Empty>
              <EmptyHeader>
                <EmptyMedia variant="icon">
                  <FileText />
                </EmptyMedia>
                <EmptyTitle>还没有文章</EmptyTitle>
                <EmptyDescription>
                  创建第一篇，列表、详情、编辑与删除都会立刻可用。
                </EmptyDescription>
              </EmptyHeader>
              <EmptyContent>
                <Button size="sm" nativeButton={false} render={<Link to="/posts/new" />}>
                  <Plus data-icon="inline-start" />
                  新建文章
                </Button>
              </EmptyContent>
            </Empty>
          ) : (
            <ItemGroup>
              {posts.map((post, index) => (
                <Fragment key={post.id}>
                  {index > 0 && <ItemSeparator />}
                  <Item>
                    <ItemMedia variant="icon">
                      <FileText />
                    </ItemMedia>
                    <ItemContent>
                      <ItemTitle>
                        <Link
                          to="/posts/$postId"
                          params={{ postId: post.id }}
                          className="hover:underline"
                        >
                          {post.title}
                        </Link>
                      </ItemTitle>
                      <ItemDescription>{excerpt(post)}</ItemDescription>
                      <div className="mt-1.5 flex flex-wrap items-center gap-2">
                        <Badge variant="secondary">{post.tag || "未分类"}</Badge>
                        <span className="text-xs text-muted-foreground">
                          更新于 {formatDateTime(post.updatedAt)}
                        </span>
                      </div>
                    </ItemContent>
                    <ItemActions>
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
                            <Button
                              variant="ghost"
                              size="sm"
                              aria-label={`删除「${post.title}」`}
                            />
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
                    </ItemActions>
                  </Item>
                </Fragment>
              ))}
            </ItemGroup>
          )}
        </CardContent>
      </Card>
    </>
  );
}
