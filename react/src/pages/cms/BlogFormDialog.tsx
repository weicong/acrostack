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
import { useBlogAdminCreate } from "@/api/hooks/blogAdmin/useBlogAdminCreate";
import { useBlogAdminUpdate } from "@/api/hooks/blogAdmin/useBlogAdminUpdate";
import type { VoloCmsKitAdminBlogsBlogDto as BlogDto } from "@/api/models/volo/cmsKit/admin/blogs/BlogDto";

// ── Schema ──────────────────────────────────────────────────────────

const blogSchema = z.object({
  name: z.string().min(1).max(64),
  slug: z.string().min(1).max(64),
});

type BlogFormValues = z.infer<typeof blogSchema>;

// ── Props ───────────────────────────────────────────────────────────

type BlogFormDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  blog?: BlogDto;
  onSuccess: () => void;
};

// ── Styles ──────────────────────────────────────────────────────────

const useStyles = makeStyles({
  form: {
    display: "flex",
    flexDirection: "column",
    gap: tokens.spacingVerticalM,
    minWidth: "440px",
  },
  actions: {
    display: "flex",
    justifyContent: "flex-end",
    gap: tokens.spacingHorizontalS,
  },
});

// ── Component ───────────────────────────────────────────────────────

export function BlogFormDialog({ open, onOpenChange, blog, onSuccess }: BlogFormDialogProps) {
  const { t } = useTranslation();
  const styles = useStyles();
  const dialogId = useId("blog-form-");
  const { dispatchToast } = useToastController();
  const isEdit = !!blog?.id;

  const createMutation = useBlogAdminCreate();
  const updateMutation = useBlogAdminUpdate();

  const form = useAppForm({
    defaultValues: {
      name: blog?.name ?? "",
      slug: blog?.slug ?? "",
    } satisfies BlogFormValues,
    validators: {
      onChange: ({ value }) => {
        const result = blogSchema.safeParse(value);
        if (result.error) {
          return result.error.flatten().fieldErrors as Record<string, string[]>;
        }
      },
    },
    onSubmit: ({ value }) => {
      if (isEdit && blog?.id) {
        updateMutation.mutate(
          {
            path: { id: blog.id },
            body: {
              name: value.name,
              slug: value.slug,
              concurrencyStamp: blog.concurrencyStamp ?? undefined,
            },
          },
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
        createMutation.mutate(
          {
            body: {
              name: value.name,
              slug: value.slug,
            },
          },
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

  return (
    <Dialog open={open} onOpenChange={(_, data) => onOpenChange(data.open)}>
      <DialogSurface aria-labelledby={`${dialogId}-title`}>
        <DialogBody>
          <DialogTitle id={`${dialogId}-title`}>
            {isEdit ? t("Cms:EditBlog") : t("Cms:NewBlog")}
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
                    name="name"
                    children={(field) => <field.TextField label={t("Cms:Name")} required />}
                  />
                  <form.AppField
                    name="slug"
                    children={(field) => <field.TextField label={t("Cms:Slug")} required />}
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
