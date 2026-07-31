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
import { useMenuItemCreate } from "@/api/hooks/menuItem/useMenuItemCreate";
import { useMenuItemUpdate } from "@/api/hooks/menuItem/useMenuItemUpdate";
import type { AcroStackServicesDtosCmsMenuItemDto as MenuItemDto } from "@/api/models/acroStack/services/dtos/cms/MenuItemDto";

// ── Schema ──────────────────────────────────────────────────────────

const menuItemSchema = z.object({
  displayName: z.string().min(1).max(256),
  url: z.string().max(512),
  parentId: z.string(),
  order: z.number().int().min(0),
  icon: z.string().max(64),
  target: z.string(),
});

type MenuItemFormValues = z.infer<typeof menuItemSchema>;

// ── Props ───────────────────────────────────────────────────────────

export interface MenuItemParentOption {
  id: string;
  label: string;
}

type MenuItemFormDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  menuId: string;
  menuItem?: MenuItemDto;
  parentOptions: MenuItemParentOption[];
  onSuccess: () => void;
};

// ── Styles ──────────────────────────────────────────────────────────

const useStyles = makeStyles({
  form: {
    display: "flex",
    flexDirection: "column",
    gap: tokens.spacingVerticalM,
    minWidth: "460px",
  },
  actions: {
    display: "flex",
    justifyContent: "flex-end",
    gap: tokens.spacingHorizontalS,
  },
});

// ── Component ───────────────────────────────────────────────────────

export function MenuItemFormDialog({
  open,
  onOpenChange,
  menuId,
  menuItem,
  parentOptions,
  onSuccess,
}: MenuItemFormDialogProps) {
  const { t } = useTranslation();
  const styles = useStyles();
  const dialogId = useId("menuitem-form-");
  const { dispatchToast } = useToastController();
  const isEdit = !!menuItem?.id;

  const createMutation = useMenuItemCreate();
  const updateMutation = useMenuItemUpdate();

  const form = useAppForm({
    defaultValues: {
      displayName: menuItem?.displayName ?? "",
      url: menuItem?.url ?? "",
      parentId: menuItem?.parentId ?? "",
      order: menuItem?.order ?? 0,
      icon: menuItem?.icon ?? "",
      target: menuItem?.target ?? "",
    } satisfies MenuItemFormValues,
    validators: {
      onChange: ({ value }) => {
        const result = menuItemSchema.safeParse(value);
        if (result.error) {
          return result.error.flatten().fieldErrors as Record<string, string[]>;
        }
      },
    },
    onSubmit: ({ value }) => {
      const parentId = value.parentId || undefined;
      if (isEdit && menuItem?.id) {
        const payload = {
          parentId: parentId ?? null,
          displayName: value.displayName,
          url: value.url || undefined,
          order: value.order,
          icon: value.icon || undefined,
          target: value.target || undefined,
        };
        updateMutation.mutate(
          { id: menuItem.id, data: payload },
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
          menuId,
          parentId: parentId ?? null,
          displayName: value.displayName,
          url: value.url || undefined,
          order: value.order,
          icon: value.icon || undefined,
          target: value.target || undefined,
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

  return (
    <Dialog open={open} onOpenChange={(_, data) => onOpenChange(data.open)}>
      <DialogSurface aria-labelledby={`${dialogId}-title`}>
        <DialogBody>
          <DialogTitle id={`${dialogId}-title`}>
            {isEdit ? t("Cms:EditMenuItem") : t("Cms:NewMenuItem")}
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
                    children={(field) => <field.TextField label={t("Cms:DisplayName")} required />}
                  />
                  <form.AppField
                    name="url"
                    children={(field) => <field.TextField label={t("Cms:Url")} />}
                  />
                  <form.AppField
                    name="parentId"
                    children={(field) => (
                      <field.SelectField label={t("Cms:Parent")}>
                        <option value="">{t("Cms:None")}</option>
                        {parentOptions.map((opt) => (
                          <option key={opt.id} value={opt.id}>
                            {opt.label}
                          </option>
                        ))}
                      </field.SelectField>
                    )}
                  />
                  <form.AppField
                    name="order"
                    children={(field) => (
                      <field.NumberField label={t("Cms:Order")} min={0} step={1} />
                    )}
                  />
                  <form.AppField
                    name="icon"
                    children={(field) => <field.TextField label={t("Cms:Icon")} />}
                  />
                  <form.AppField
                    name="target"
                    children={(field) => (
                      <field.SelectField label={t("Cms:Target")}>
                        <option value="">{t("Cms:TargetDefault")}</option>
                        <option value="_self">{t("Cms:TargetSelf")}</option>
                        <option value="_blank">{t("Cms:TargetBlank")}</option>
                      </field.SelectField>
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
