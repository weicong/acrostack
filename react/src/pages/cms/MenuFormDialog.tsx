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
import { useMenuCreate } from "@/api/hooks/menu/useMenuCreate";
import { useMenuUpdate } from "@/api/hooks/menu/useMenuUpdate";
import type { AcroStackServicesDtosCmsMenuDto as MenuDto } from "@/api/models/acroStack/services/dtos/cms/MenuDto";

// ── Schema ──────────────────────────────────────────────────────────

const menuSchema = z.object({
  name: z.string().min(1).max(64),
});

type MenuFormValues = z.infer<typeof menuSchema>;

// ── Props ───────────────────────────────────────────────────────────

type MenuFormDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  menu?: MenuDto;
  onSuccess: () => void;
};

// ── Styles ──────────────────────────────────────────────────────────

const useStyles = makeStyles({
  form: {
    display: "flex",
    flexDirection: "column",
    gap: tokens.spacingVerticalM,
    minWidth: "360px",
  },
  actions: {
    display: "flex",
    justifyContent: "flex-end",
    gap: tokens.spacingHorizontalS,
  },
});

// ── Component ───────────────────────────────────────────────────────

export function MenuFormDialog({ open, onOpenChange, menu, onSuccess }: MenuFormDialogProps) {
  const { t } = useTranslation();
  const styles = useStyles();
  const dialogId = useId("menu-form-");
  const { dispatchToast } = useToastController();
  const isEdit = !!menu?.id;

  const createMutation = useMenuCreate();
  const updateMutation = useMenuUpdate();

  const form = useAppForm({
    defaultValues: {
      name: menu?.name ?? "",
    } satisfies MenuFormValues,
    validators: {
      onChange: ({ value }) => {
        const result = menuSchema.safeParse(value);
        if (result.error) {
          return result.error.flatten().fieldErrors as Record<string, string[]>;
        }
      },
    },
    onSubmit: ({ value }) => {
      const payload = { name: value.name };
      if (isEdit && menu?.id) {
        updateMutation.mutate(
          { id: menu.id, data: payload },
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

  return (
    <Dialog open={open} onOpenChange={(_, data) => onOpenChange(data.open)}>
      <DialogSurface aria-labelledby={`${dialogId}-title`}>
        <DialogBody>
          <DialogTitle id={`${dialogId}-title`}>
            {isEdit ? t("Cms:EditMenu") : t("Cms:NewMenu")}
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
