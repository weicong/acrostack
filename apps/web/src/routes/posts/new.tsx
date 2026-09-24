import { createFileRoute, useNavigate } from "@tanstack/react-router";

import { createPost, EMPTY_DRAFT, type PostDraft } from "@/data/posts";
import { PostForm } from "@/components/post-form";

export const Route = createFileRoute("/posts/new")({
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
      <h2 className="font-heading text-base font-medium">新建文章</h2>
      <PostForm
        defaultValues={EMPTY_DRAFT}
        submitLabel="创建"
        onSubmit={handleSubmit}
        onCancel={() => void navigate({ to: "/posts" })}
      />
    </>
  );
}
