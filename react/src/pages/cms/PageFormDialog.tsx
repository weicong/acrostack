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
import { usePageAdminCreate } from "@/api/hooks/pageAdmin/usePageAdminCreate";
import { usePageAdminUpdate } from "@/api/hooks/pageAdmin/usePageAdminUpdate";
import type { VoloCmsKitAdminPagesPageDto as PageDto } from "@/api/models/volo/cmsKit/admin/pages/PageDto";

// ── Schema ──────────────────────────────────────────────────────────

const pageSchema = z.object({
  title: z.string().min(1).max(256),
  slug: z.string().min(1).max(256),
  content: z.string(),
});

type PageFormValues = z.infer<typeof pageSchema>;

// ── Props ───────────────────────────────────────────────────────────

type PageFormDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  page?: PageDto;
  onSuccess: () => void;
};

// ── Styles ──────────────────────────────────────────────────────────

const useStyles = makeStyles({
  form: {
    display: "flex",
    flexDirection: "column",
    gap: tokens.spacingVerticalM,
    minWidth: "480px",
  },
  actions: {
    display: "flex",
    justifyContent: "flex-end",
    gap: tokens.spacingHorizontalS,
  },
});

// ── Component ───────────────────────────────────────────────────────

export function PageFormDialog({ open, onOpenChange, page, onSuccess }: PageFormDialogProps) {
  const { t } = useTranslation();
  const styles = useStyles();
  const dialogId = useId("page-form-");
  const { dispatchToast } = useToastController();
  const isEdit = !!page?.id;

  const createMutation = usePageAdminCreate();
  const updateMutation = usePageAdminUpdate();

  const form = useAppForm({
    defaultValues: {
      title: page?.title ?? "",
      slug: page?.slug ?? "",
      content: page?.content ?? "",
    } satisfies PageFormValues,
    validators: {
      onChange: ({ value }) => {
        const result = pageSchema.safeParse(value);
        if (result.error) {
          return result.error.flatten().fieldErrors as Record<string, string[]>;
        }
      },
    },
    onSubmit: ({ value }) => {
      if (isEdit && page?.id) {
        updateMutation.mutate(
          {
            path: { id: page.id },
            body: {
              title: value.title,
              slug: value.slug,
              content: value.content || undefined,
              concurrencyStamp: page.concurrencyStamp ?? undefined,
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
              title: value.title,
              slug: value.slug,
              content: value.content || undefined,
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
            {isEdit ? t("Cms:EditPage") : t("Cms:NewPage")}
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
                    name="title"
                    children={(field) => <field.TextField label={t("Cms:Title")} required />}
                  />
                  <form.AppField
                    name="slug"
                    children={(field) => <field.TextField label={t("Cms:Slug")} required />}
                  />
                  <form.AppField
                    name="content"
                    children={(field) => (
                      <field.TextareaField label={t("Cms:Content")} textareaProps={{ rows: 10 }} />
                    )}
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
