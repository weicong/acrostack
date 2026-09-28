import { createFileRoute, useNavigate } from "@tanstack/react-router";

import { PageHeader } from "@workspace/layout";
import { Card, CardContent } from "@workspace/ui/components/card";

import { createPost, EMPTY_DRAFT, PostForm, type PostDraft } from "@/features/posts";

export const Route = createFileRoute("/posts/new")({
  // Reached from the list page's button rather than the sidebar, so it only
  // needs a breadcrumb name — see `staticData.breadcrumb`.
  staticData: {
    breadcrumb: { label: "新建" },
  },
  component: NewPostPage,
});

function NewPostPage() {
  const navigate = useNavigate();

  function handleSubmit(draft: PostDraft) {
    const post = createPost(draft);
    // Land on the detail page of the post we just created.
    void navigate({ to: "/posts/$postId", params: { postId: post.id } });
  }

  return (
    <>
      <PageHeader title="新建文章" description="标题必填，标签与正文可选；保存后直接进入详情页。" />

      <Card>
        <CardContent>
          <PostForm
            defaultValues={EMPTY_DRAFT}
            submitLabel="创建"
            onSubmit={handleSubmit}
            onCancel={() => void navigate({ to: "/posts" })}
          />
        </CardContent>
      </Card>
    </>
  );
}
