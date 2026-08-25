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
import { useMenuItemAdminCreate } from "@/api/hooks/menuItemAdmin/useMenuItemAdminCreate";
import { useMenuItemAdminUpdate } from "@/api/hooks/menuItemAdmin/useMenuItemAdminUpdate";
import { useMenuItemAdminGetPageLookup } from "@/api/hooks/menuItemAdmin/useMenuItemAdminGetPageLookup";
import type { VoloCmsKitAdminMenusMenuItemWithDetailsDto as MenuItemDto } from "@/api/models/volo/cmsKit/admin/menus/MenuItemWithDetailsDto";

// ── Schema ──────────────────────────────────────────────────────────

const menuItemSchema = z.object({
  displayName: z.string().min(1).max(256),
  url: z.string().max(512),
  parentId: z.string(),
  order: z.number().int().min(0),
  icon: z.string().max(64),
  target: z.string(),
  isActive: z.boolean(),
  pageId: z.string(),
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
    minWidth: "480px",
  },
  row: {
    display: "flex",
    gap: tokens.spacingHorizontalM,
  },
  rowItem: {
    flex: 1,
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
  menuItem,
  parentOptions,
  onSuccess,
}: MenuItemFormDialogProps) {
  const styles = useStyles();
  const dialogId = useId("menuitem-form-");
  const { dispatchToast } = useToastController();
  const isEdit = !!menuItem?.id;

  const createMutation = useMenuItemAdminCreate();
  const updateMutation = useMenuItemAdminUpdate();

  const pagesQuery = useMenuItemAdminGetPageLookup({ query: { MaxResultCount: 1000 } });
  const pages = useMemo(() => pagesQuery.data?.items ?? [], [pagesQuery.data]);

  const form = useAppForm({
    defaultValues: {
      displayName: menuItem?.displayName ?? "",
      url: menuItem?.url ?? "",
      parentId: menuItem?.parentId ?? "",
      order: menuItem?.order ?? 0,
      icon: menuItem?.icon ?? "",
      target: menuItem?.target ?? "",
      isActive: menuItem?.isActive ?? true,
      pageId: menuItem?.pageId ?? "",
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
      const parentId = value.parentId || null;
      const pageId = value.pageId || null;
      if (isEdit && menuItem?.id) {
        const payload = {
          displayName: value.displayName,
          isActive: value.isActive,
          url: value.url || null,
          icon: value.icon || null,
          target: value.target || null,
          pageId: pageId,
        };
        updateMutation.mutate(
          { path: { id: menuItem.id }, body: payload },
          {
            onSuccess: () => {
              dispatchToast("保存成功", { intent: "success" });
              onSuccess();
            },
            onError: (err) => {
              dispatchToast(String(err), { intent: "error" });
            },
          },
        );
      } else {
        const payload = {
          parentId: parentId,
          displayName: value.displayName,
          isActive: value.isActive,
          url: value.url || null,
          icon: value.icon || null,
          order: value.order,
          target: value.target || null,
          pageId: pageId,
        };
        createMutation.mutate(
          { body: payload },
          {
            onSuccess: () => {
              dispatchToast("保存成功", { intent: "success" });
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
          <DialogTitle id={`${dialogId}-title`}>{isEdit ? "编辑菜单项" : "新建菜单项"}</DialogTitle>
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
                    children={(field) => <field.TextField label={"显示名称"} required />}
                  />
                  <div className={styles.row}>
                    <form.AppField
                      name="parentId"
                      children={(field) => (
                        <field.SelectField
                          label={"父级"}
                          fieldProps={{ className: styles.rowItem }}
                        >
                          <option value="">{"无"}</option>
                          {parentOptions.map((opt) => (
                            <option key={opt.id} value={opt.id}>
                              {opt.label}
                            </option>
                          ))}
                        </field.SelectField>
                      )}
                    />
                    <form.AppField
                      name="pageId"
                      children={(field) => (
                        <field.SelectField
                          label={"页面"}
                          fieldProps={{ className: styles.rowItem }}
                        >
                          <option value="">{"无"}</option>
                          {pages.map((p) => (
                            <option key={p.id} value={p.id ?? ""}>
                              {p.title ?? ""}
                            </option>
                          ))}
                        </field.SelectField>
                      )}
                    />
                  </div>
                  <form.AppField
                    name="url"
                    children={(field) => <field.TextField label={"URL"} />}
                  />
                  <div className={styles.row}>
                    <form.AppField
                      name="order"
                      children={(field) => (
                        <field.NumberField
                          label={"排序"}
                          min={0}
                          step={1}
                          fieldProps={{ className: styles.rowItem }}
                        />
                      )}
                    />
                    <form.AppField
                      name="target"
                      children={(field) => (
                        <field.SelectField
                          label={"打开方式"}
                          fieldProps={{ className: styles.rowItem }}
                        >
                          <option value="">{"默认"}</option>
                          <option value="_self">{"当前窗口"}</option>
                          <option value="_blank">{"新窗口"}</option>
                        </field.SelectField>
                      )}
                    />
                  </div>
                  <form.AppField
                    name="icon"
                    children={(field) => <field.TextField label={"图标"} />}
                  />
                  <form.AppField
                    name="isActive"
                    children={(field) => <field.SwitchField label={"激活"} />}
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
