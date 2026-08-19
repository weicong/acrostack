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
import { useTagAdminCreate } from "@/api/hooks/tagAdmin/useTagAdminCreate";
import { useTagAdminUpdate } from "@/api/hooks/tagAdmin/useTagAdminUpdate";
import type { VoloCmsKitTagsTagDto as TagDto } from "@/api/models/volo/cmsKit/tags/TagDto";

// ── Schema ──────────────────────────────────────────────────────────

const tagSchema = z.object({
  entityType: z.string().min(1).max(64),
  name: z.string().min(1).max(32),
});

type TagFormValues = z.infer<typeof tagSchema>;

// ── Props ───────────────────────────────────────────────────────────

type TagFormDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  tag?: TagDto;
  onSuccess: () => void;
};

// ── Styles ──────────────────────────────────────────────────────────

const useStyles = makeStyles({
  form: {
    display: "flex",
    flexDirection: "column",
    gap: tokens.spacingVerticalM,
    minWidth: "420px",
  },
  actions: {
    display: "flex",
    justifyContent: "flex-end",
    gap: tokens.spacingHorizontalS,
  },
});

// ── Component ───────────────────────────────────────────────────────

export function TagFormDialog({ open, onOpenChange, tag, onSuccess }: TagFormDialogProps) {
  const { t } = useTranslation();
  const styles = useStyles();
  const dialogId = useId("tag-form-");
  const { dispatchToast } = useToastController();
  const isEdit = !!tag?.id;

  const createMutation = useTagAdminCreate();
  const updateMutation = useTagAdminUpdate();

  const form = useAppForm({
    defaultValues: {
      entityType: tag?.entityType ?? "",
      name: tag?.name ?? "",
    } satisfies TagFormValues,
    validators: {
      onChange: ({ value }) => {
        const result = tagSchema.safeParse(value);
        if (result.error) {
          return result.error.flatten().fieldErrors as Record<string, string[]>;
        }
      },
    },
    onSubmit: ({ value }) => {
      if (isEdit && tag?.id) {
        updateMutation.mutate(
          {
            path: { id: tag.id },
            body: {
              name: value.name,
              concurrencyStamp: tag.concurrencyStamp ?? undefined,
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
              entityType: value.entityType,
              name: value.name,
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
            {isEdit ? t("Cms:EditTag") : t("Cms:NewTag")}
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
                    name="entityType"
                    children={(field) => (
                      <field.TextField
                        label={t("Cms:EntityType")}
                        required
                        inputProps={{ disabled: isEdit }}
                      />
                    )}
                  />
                  <form.AppField
                    name="name"
                    children={(field) => <field.TextField label={t("Cms:Name")} required />}
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
