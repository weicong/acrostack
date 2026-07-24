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
import { useAppForm } from "@/components/form";
import { useEditionCreate, useEditionUpdate, type EditionDto } from "@/lib/saas/editionsApi";
import { editionSchema, type EditionFormValues } from "./edition-schemas";

// ── Props ───────────────────────────────────────────────────────────

type EditionFormDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  edition?: EditionDto;
  onSuccess: () => void;
};

// ── Styles ──────────────────────────────────────────────────────────

const useStyles = makeStyles({
  form: {
    display: "flex",
    flexDirection: "column",
    gap: tokens.spacingVerticalM,
  },
  actions: {
    display: "flex",
    justifyContent: "flex-end",
    gap: tokens.spacingHorizontalS,
  },
});

// ── Component ───────────────────────────────────────────────────────

export function EditionFormDialog({
  open,
  onOpenChange,
  edition,
  onSuccess,
}: EditionFormDialogProps) {
  const { t } = useTranslation();
  const styles = useStyles();
  const dialogId = useId("edition-form-");
  const { dispatchToast } = useToastController();
  const isEdit = !!edition?.id;

  const createMutation = useEditionCreate();
  const updateMutation = useEditionUpdate();

  const form = useAppForm({
    defaultValues: {
      displayName: edition?.displayName ?? "",
    } satisfies EditionFormValues,
    validators: {
      onChange: ({ value }) => {
        const result = editionSchema.safeParse(value);
        if (result.error) {
          return result.error.flatten().fieldErrors as Record<string, string[]>;
        }
      },
    },
    onSubmit: ({ value }) => {
      const payload = { displayName: value.displayName };
      if (isEdit && edition?.id) {
        updateMutation.mutate(
          { id: edition.id, data: payload },
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
        createMutation.mutate(payload, {
          onSuccess: () => {
            dispatchToast(t("AbpUi::SavedSuccessfully"), { intent: "success" });
            onSuccess();
          },
          onError: (err) => {
            dispatchToast(String(err), { intent: "error" });
          },
        });
      }
    },
  });

  const isPending = createMutation.isPending || updateMutation.isPending;

  return (
    <Dialog open={open} onOpenChange={(_, data) => onOpenChange(data.open)}>
      <DialogSurface aria-labelledby={`${dialogId}-title`}>
        <DialogBody>
          <DialogTitle id={`${dialogId}-title`}>
            {isEdit ? t("SaaS:Editions") : t("SaaS:NewEdition")}
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
                    name="displayName"
                    children={(field) => (
                      <field.TextField label={t("SaaS:EditionDisplayName")} required />
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
