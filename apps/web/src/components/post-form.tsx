import * as React from "react";

import { Button } from "@workspace/ui/components/button";
import { Input } from "@workspace/ui/components/input";
import { Label } from "@workspace/ui/components/label";
import { Textarea } from "@workspace/ui/components/textarea";

import type { PostDraft } from "@/data/posts";

export type PostFormErrors = Partial<Record<keyof PostDraft, string>>;

export function validateDraft(draft: PostDraft): PostFormErrors {
  const errors: PostFormErrors = {};
  if (!draft.title.trim()) errors.title = "标题不能为空";
  if (draft.title.trim().length > 80) errors.title = "标题不能超过 80 个字符";
  if (draft.tag.trim().length > 20) errors.tag = "标签不能超过 20 个字符";
  return errors;
}

type PostFormProps = {
  /** Initial values; the form is uncontrolled after mount. */
  defaultValues: PostDraft;
  submitLabel: string;
  onSubmit: (draft: PostDraft) => void;
  onCancel?: () => void;
  /** Extra content rendered next to the submit button (e.g. a delete action). */
  footerExtra?: React.ReactNode;
};

/**
 * Shared create/edit form. Validation runs on submit and then live while the
 * user types, so an error clears as soon as the field becomes valid.
 */
export function PostForm({
  defaultValues,
  submitLabel,
  onSubmit,
  onCancel,
  footerExtra,
}: PostFormProps) {
  const [draft, setDraft] = React.useState<PostDraft>(defaultValues);
  const [errors, setErrors] = React.useState<PostFormErrors>({});
  const [submitted, setSubmitted] = React.useState(false);

  function set<K extends keyof PostDraft>(key: K, value: PostDraft[K]) {
    setDraft((prev) => {
      const next = { ...prev, [key]: value };
      // Only re-validate on change once the user has attempted a submit,
      // otherwise errors would flash while first filling the form.
      if (submitted) setErrors(validateDraft(next));
      return next;
    });
  }

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    const nextErrors = validateDraft(draft);
    setErrors(nextErrors);
    setSubmitted(true);
    if (Object.keys(nextErrors).length > 0) return;
    onSubmit({ title: draft.title.trim(), tag: draft.tag.trim(), body: draft.body });
  }

  return (
    <form onSubmit={handleSubmit} className="flex max-w-2xl flex-col gap-5" noValidate>
      <div className="flex flex-col gap-2">
        <Label htmlFor="post-title">标题</Label>
        <Input
          id="post-title"
          value={draft.title}
          onChange={(e) => set("title", e.target.value)}
          placeholder="给这篇文章起个标题"
          aria-invalid={Boolean(errors.title)}
          aria-describedby={errors.title ? "post-title-error" : undefined}
        />
        {errors.title && (
          <p id="post-title-error" className="text-xs text-destructive">
            {errors.title}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="post-tag">标签</Label>
        <Input
          id="post-tag"
          value={draft.tag}
          onChange={(e) => set("tag", e.target.value)}
          placeholder="例如：路由 / UI / 工具链"
          aria-invalid={Boolean(errors.tag)}
          aria-describedby={errors.tag ? "post-tag-error" : undefined}
        />
        {errors.tag && (
          <p id="post-tag-error" className="text-xs text-destructive">
            {errors.tag}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="post-body">正文</Label>
        <Textarea
          id="post-body"
          value={draft.body}
          onChange={(e) => set("body", e.target.value)}
          placeholder="写点什么…"
          rows={10}
        />
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <Button type="submit">{submitLabel}</Button>
          {onCancel && (
            <Button type="button" variant="outline" onClick={onCancel}>
              取消
            </Button>
          )}
        </div>
        {footerExtra}
      </div>
    </form>
  );
}
