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
import { extractAbpErrorMessage } from "@/lib/api/error";

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
              title: value.title,
              slug: value.slug,
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

  return (
    <Dialog open={open} onOpenChange={(_, data) => onOpenChange(data.open)}>
      <DialogSurface aria-labelledby={`${dialogId}-title`}>
        <DialogBody>
          <DialogTitle id={`${dialogId}-title`}>{isEdit ? "编辑页面" : "新建页面"}</DialogTitle>
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
                    children={(field) => <field.TextField label={"标题"} required />}
                  />
                  <form.AppField
                    name="slug"
                    children={(field) => <field.TextField label={"Slug"} required />}
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
