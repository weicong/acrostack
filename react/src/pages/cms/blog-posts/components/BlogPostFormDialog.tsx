import { useMemo } from "react";
import {
  Button,
  Dialog,
  DialogBody,
  DialogContent,
  DialogSurface,
  DialogTitle,
  DialogTrigger,
  makeStyles,
  tokens,
  useId,
  useToastController,
} from "@fluentui/react-components";
import { z } from "zod";
import { useAppForm } from "@/components/form";
import { useBlogPostAdminCreate } from "@/api/hooks/blogPostAdmin/useBlogPostAdminCreate";
import { useBlogPostAdminUpdate } from "@/api/hooks/blogPostAdmin/useBlogPostAdminUpdate";
import { useBlogAdminGetAllList } from "@/api/hooks/blogAdmin/useBlogAdminGetAllList";
import type { VoloCmsKitAdminBlogsBlogPostListDto as BlogPostDto } from "@/api/models/volo/cmsKit/admin/blogs/BlogPostListDto";
import { extractAbpErrorMessage } from "@/lib/http/error";

// ── Schema ──────────────────────────────────────────────────────────

const blogPostSchema = z.object({
  blogId: z.string().min(1),
  title: z.string().min(1).max(64),
  slug: z.string().min(2).max(256),
  shortDescription: z.string().max(256),
  content: z.string(),
});

type BlogPostFormValues = z.infer<typeof blogPostSchema>;

// ── Props ───────────────────────────────────────────────────────────

type BlogPostFormDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  blogPost?: BlogPostDto;
  onSuccess: () => void;
};

// ── Styles ──────────────────────────────────────────────────────────

const useStyles = makeStyles({
  form: {
    display: "flex",
    flexDirection: "column",
    gap: tokens.spacingVerticalM,
    minWidth: "520px",
  },
  actions: {
    display: "flex",
    justifyContent: "flex-end",
    gap: tokens.spacingHorizontalS,
  },
});

// ── Component ───────────────────────────────────────────────────────

export function BlogPostFormDialog({
  open,
  onOpenChange,
  blogPost,
  onSuccess,
}: BlogPostFormDialogProps) {
  const styles = useStyles();
  const dialogId = useId("blogpost-form-");
  const { dispatchToast } = useToastController();
  const isEdit = !!blogPost?.id;

  const createMutation = useBlogPostAdminCreate();
  const updateMutation = useBlogPostAdminUpdate();

  const blogsQuery = useBlogAdminGetAllList();
  const blogs = useMemo(
    () =>
      (blogsQuery.data as { items?: Array<{ id?: string; name?: string | null }> } | undefined)
        ?.items ?? [],
    [blogsQuery.data],
  );

  const form = useAppForm({
    defaultValues: {
      blogId: blogPost?.blogId ?? "",
      title: blogPost?.title ?? "",
      slug: blogPost?.slug ?? "",
      shortDescription: blogPost?.shortDescription ?? "",
      content: blogPost?.content ?? "",
    } satisfies BlogPostFormValues,
    validators: {
      onChange: ({ value }) => {
        const result = blogPostSchema.safeParse(value);
        if (result.error) {
          return result.error.flatten().fieldErrors as Record<string, string[]>;
        }
      },
    },
    onSubmit: ({ value }) => {
      if (isEdit && blogPost?.id) {
        updateMutation.mutate(
          {
            path: { id: blogPost.id },
            body: {
              title: value.title,
              slug: value.slug,
              shortDescription: value.shortDescription || undefined,
              content: value.content || undefined,
            },
          },
          {
            onSuccess: () => {
              dispatchToast("保存成功", { intent: "success" });
              onSuccess();
            },
            onError: (err) => {
              dispatchToast(extractAbpErrorMessage(err), { intent: "error" });
            },
          },
        );
      } else {
        createMutation.mutate(
          {
            body: {
              blogId: value.blogId,
              title: value.title,
              slug: value.slug,
              shortDescription: value.shortDescription || undefined,
              content: value.content || undefined,
            },
          },
          {
            onSuccess: () => {
              dispatchToast("保存成功", { intent: "success" });
              onSuccess();
            },
            onError: (err) => {
              dispatchToast(extractAbpErrorMessage(err), { intent: "error" });
            },
          },
        );
      }
    },
  });

  const isPending = createMutation.isPending || updateMutation.isPending;
  const blogsLoading = blogsQuery.isLoading;

  return (
    <Dialog open={open} onOpenChange={(_, data) => onOpenChange(data.open)}>
      <DialogSurface aria-labelledby={`${dialogId}-title`}>
        <DialogBody>
          <DialogTitle id={`${dialogId}-title`}>
            {isEdit ? "编辑博客文章" : "新建博客文章"}
          </DialogTitle>
          <DialogContent>
            {open && (
              <form.AppForm>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    void form.handleSubmit();
                  }}
                  className={styles.form}
                >
                  <form.AppField
                    name="blogId"
                    children={(field) => (
                      <field.SelectField label={"博客"} required selectProps={{ disabled: isEdit }}>
                        {blogsLoading ? (
                          <option value="">{"加载中..."}</option>
                        ) : (
                          <>
                            <option value="">{"请选择博客"}</option>
                            {blogs.map((b) => (
                              <option key={b.id} value={b.id ?? ""}>
                                {b.name ?? ""}
                              </option>
                            ))}
                          </>
                        )}
                      </field.SelectField>
                    )}
                  />
                  <form.AppField
                    name="title"
                    children={(field) => <field.TextField label={"标题"} required />}
                  />
                  <form.AppField
                    name="slug"
                    children={(field) => <field.TextField label={"Slug"} required />}
                  />
                  <form.AppField
                    name="shortDescription"
                    children={(field) => <field.TextareaField label={"简短描述"} />}
                  />
                  <form.AppField
                    name="content"
                    children={(field) => (
                      <field.TextareaField label={"内容"} textareaProps={{ rows: 10 }} />
                    )}
                  />
                  <div className={styles.actions}>
                    <form.SubmitButton label={isEdit ? "保存" : "创建"} />
                    <DialogTrigger disableButtonEnhancement>
                      <Button appearance="secondary" disabled={isPending}>
                        {"取消"}
                      </Button>
                    </DialogTrigger>
                  </div>
                </form>
              </form.AppForm>
            )}
          </DialogContent>
        </DialogBody>
      </DialogSurface>
    </Dialog>
  );
}
