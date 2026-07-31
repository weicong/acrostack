import { useMemo } from "react";
import { useTranslation } from "react-i18next";
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
import { useBlogPostCreate } from "@/api/hooks/blogPost/useBlogPostCreate";
import { useBlogPostUpdate } from "@/api/hooks/blogPost/useBlogPostUpdate";
import { useBlogGetList } from "@/api/hooks/blog/useBlogGetList";
import type { AcroStackServicesDtosCmsBlogPostDto as BlogPostDto } from "@/api/models/acroStack/services/dtos/cms/BlogPostDto";

// ── Schema ──────────────────────────────────────────────────────────

const blogPostSchema = z.object({
  blogId: z.string().min(1),
  title: z.string().min(1).max(256),
  slug: z.string().min(1).max(256),
  excerpt: z.string().max(512),
  coverImage: z.string().max(512),
  content: z.string().min(1),
  tags: z.string(),
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

// ── Helpers ─────────────────────────────────────────────────────────

function parseTags(raw: string): string[] {
  return raw
    .split(",")
    .map((t) => t.trim())
    .filter(Boolean);
}

// ── Component ───────────────────────────────────────────────────────

export function BlogPostFormDialog({
  open,
  onOpenChange,
  blogPost,
  onSuccess,
}: BlogPostFormDialogProps) {
  const { t } = useTranslation();
  const styles = useStyles();
  const dialogId = useId("blogpost-form-");
  const { dispatchToast } = useToastController();
  const isEdit = !!blogPost?.id;

  const createMutation = useBlogPostCreate();
  const updateMutation = useBlogPostUpdate();

  const blogsQuery = useBlogGetList({ MaxResultCount: 1000 });
  const blogs = useMemo(() => blogsQuery.data?.items ?? [], [blogsQuery.data]);

  const form = useAppForm({
    defaultValues: {
      blogId: blogPost?.blogId ?? "",
      title: blogPost?.title ?? "",
      slug: blogPost?.slug ?? "",
      excerpt: blogPost?.excerpt ?? "",
      coverImage: blogPost?.coverImage ?? "",
      content: blogPost?.content ?? "",
      tags: (blogPost?.tags ?? []).join(", "),
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
      const tags = parseTags(value.tags);
      if (isEdit && blogPost?.id) {
        const payload = {
          title: value.title,
          slug: value.slug,
          content: value.content,
          excerpt: value.excerpt || undefined,
          coverImage: value.coverImage || undefined,
          tags,
        };
        updateMutation.mutate(
          { id: blogPost.id, data: payload },
          {
            onSuccess: () => {
              dispatchToast(t("AbpUi::SavedSuccessfully"), { intent: "success" });
              onSuccess();
            },
            onError: (err) => {
              dispatchToast(String(err), { intent: "error" });
            },
          },
        );
      } else {
        const payload = {
          blogId: value.blogId,
          title: value.title,
          slug: value.slug,
          content: value.content,
          excerpt: value.excerpt || undefined,
          coverImage: value.coverImage || undefined,
          tags,
        };
        createMutation.mutate(
          { data: payload },
          {
            onSuccess: () => {
              dispatchToast(t("AbpUi::SavedSuccessfully"), { intent: "success" });
              onSuccess();
            },
            onError: (err) => {
              dispatchToast(String(err), { intent: "error" });
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
            {isEdit ? t("Cms:EditBlogPost") : t("Cms:NewBlogPost")}
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
                      <field.SelectField
                        label={t("Cms:Blog")}
                        required
                        selectProps={{ disabled: isEdit }}
                      >
                        {blogsLoading ? (
                          <option value="">{t("AbpUi::Loading")}</option>
                        ) : (
                          <>
                            <option value="">{t("Cms:SelectBlog")}</option>
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
                    children={(field) => <field.TextField label={t("Cms:Title")} required />}
                  />
                  <form.AppField
                    name="slug"
                    children={(field) => <field.TextField label={t("Cms:Slug")} required />}
                  />
                  <form.AppField
                    name="excerpt"
                    children={(field) => <field.TextareaField label={t("Cms:Excerpt")} />}
                  />
                  <form.AppField
                    name="coverImage"
                    children={(field) => <field.TextField label={t("Cms:CoverImage")} />}
                  />
                  <form.AppField
                    name="content"
                    children={(field) => (
                      <field.TextareaField
                        label={t("Cms:Content")}
                        required
                        textareaProps={{ rows: 8 }}
                      />
                    )}
                  />
                  <form.AppField
                    name="tags"
                    children={(field) => <field.TextField label={t("Cms:Tags")} />}
                  />
                  <div className={styles.actions}>
                    <form.SubmitButton label={isEdit ? t("AbpUi::Save") : t("AbpUi::Create")} />
                    <DialogTrigger disableButtonEnhancement>
                      <Button appearance="secondary" disabled={isPending}>
                        {t("AbpUi::Cancel")}
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
