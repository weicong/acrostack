import { type ReactNode } from "react";
import {
  Button,
  Dialog,
  DialogBody,
  DialogContent,
  DialogSurface,
  DialogTitle,
  DialogTrigger,
  Spinner,
  makeStyles,
  tokens,
  useId,
  useToastController,
} from "@fluentui/react-components";
import { useQueryClient } from "@tanstack/react-query";
import { useAppForm } from "@/components/ui/form";
import { useTenantCreate } from "@/api/hooks/tenant/useTenantCreate";
import { useTenantUpdate } from "@/api/hooks/tenant/useTenantUpdate";
import {
  tenantGetDefaultConnectionStringQueryKey,
  useTenantGetDefaultConnectionString,
} from "@/api/hooks/tenant/useTenantGetDefaultConnectionString";
import { useTenantUpdateDefaultConnectionString } from "@/api/hooks/tenant/useTenantUpdateDefaultConnectionString";
import { useTenantDeleteDefaultConnectionString } from "@/api/hooks/tenant/useTenantDeleteDefaultConnectionString";
import { tenantGetListQueryKey } from "@/api/hooks/tenant/useTenantGetList";
import type { VoloAbpTenantManagementTenantDto } from "@/api/models/volo/abp/tenantManagement/TenantDto";
import { createSchema, updateSchema } from "../schemas/tenant";
import { extractAbpErrorMessage } from "@/lib/http/error";

// ── Types ───────────────────────────────────────────────────────────

type TenantFormTenant = Pick<VoloAbpTenantManagementTenantDto, "id" | "name" | "concurrencyStamp">;

interface TenantFormDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  /** 传入则为编辑模式 */
  tenant?: TenantFormTenant;
  onSuccess: () => void;
}

interface TenantFormProps {
  tenant?: TenantFormTenant;
  /** 当前已配置的默认连接字符串（空 = 使用宿主数据库） */
  initialConnectionString: string;
  onSuccess: () => void;
  /** Extra buttons rendered after the submit button (e.g. Cancel) */
  footer?: ReactNode;
}

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

// ── Form ────────────────────────────────────────────────────────────

function TenantForm({ tenant, initialConnectionString, onSuccess, footer }: TenantFormProps) {
  const styles = useStyles();
  const isEdit = !!tenant;
  const queryClient = useQueryClient();
  const { dispatchToast } = useToastController();

  const createMutation = useTenantCreate();
  const updateMutation = useTenantUpdate();
  const updateConnMutation = useTenantUpdateDefaultConnectionString();
  const deleteConnMutation = useTenantDeleteDefaultConnectionString();

  const form = useAppForm({
    defaultValues: {
      name: tenant?.name ?? "",
      adminEmailAddress: "",
      adminPassword: "",
      useSharedDatabase: !initialConnectionString,
      defaultConnectionString: initialConnectionString,
    },
    validators: {
      onChange: ({ value }) => {
        const result = isEdit ? updateSchema.safeParse(value) : createSchema.safeParse(value);
        if (result.error) return result.error.flatten().fieldErrors as Record<string, string[]>;
      },
    },
    onSubmit: async ({ value }) => {
      if (isEdit && tenant?.id) {
        try {
          await updateMutation.mutateAsync({
            path: { id: tenant.id },
            body: {
              name: value.name,
              concurrencyStamp: tenant.concurrencyStamp ?? undefined,
            },
          });

          // 连接字符串：使用宿主数据库 → 清除已有配置；独立数据库 → 有变更时更新
          if (value.useSharedDatabase) {
            if (initialConnectionString) {
              await deleteConnMutation.mutateAsync({ path: { id: tenant.id } });
            }
          } else if (value.defaultConnectionString !== initialConnectionString) {
            await updateConnMutation.mutateAsync({
              path: { id: tenant.id },
              query: { defaultConnectionString: value.defaultConnectionString },
            });
          }

          void queryClient.invalidateQueries({
            queryKey: tenantGetDefaultConnectionStringQueryKey({ path: { id: tenant.id } }),
          });
          void queryClient.invalidateQueries({ queryKey: tenantGetListQueryKey() });
          dispatchToast("保存成功", { intent: "success" });
          onSuccess();
        } catch (err) {
          dispatchToast(extractAbpErrorMessage(err), { intent: "error" });
        }
      } else {
        try {
          await createMutation.mutateAsync({
            body: {
              name: value.name,
              adminEmailAddress: value.adminEmailAddress,
              adminPassword: value.adminPassword,
            },
          });
          void queryClient.invalidateQueries({ queryKey: tenantGetListQueryKey() });
          dispatchToast("保存成功", { intent: "success" });
          onSuccess();
        } catch (err) {
          dispatchToast(extractAbpErrorMessage(err), { intent: "error" });
        }
      }
    },
  });

  return (
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
          children={(field) => <field.TextField label={"名称"} required />}
        />
        {!isEdit && (
          <>
            <form.AppField
              name="adminEmailAddress"
              children={(field) => <field.TextField label={"管理员邮箱"} required />}
            />
            <form.AppField
              name="adminPassword"
              children={(field) => (
                <field.TextField label={"管理员密码"} required inputProps={{ type: "password" }} />
              )}
            />
          </>
        )}
        {isEdit && (
          <>
            <form.AppField
              name="useSharedDatabase"
              children={(field) => <field.SwitchField label={"使用宿主数据库"} />}
            />
            <form.Subscribe<boolean> selector={(s) => s.values.useSharedDatabase}>
              {(useSharedDatabase) =>
                !useSharedDatabase ? (
                  <form.AppField
                    name="defaultConnectionString"
                    children={(field) => <field.TextField label={"默认连接字符串"} required />}
                  />
                ) : null
              }
            </form.Subscribe>
          </>
        )}
        <div className={styles.actions}>
          <form.SubmitButton label={isEdit ? "保存" : "创建"} />
          {footer}
        </div>
      </form>
    </form.AppForm>
  );
}

// ── Dialog ──────────────────────────────────────────────────────────

export function TenantFormDialog({ open, onOpenChange, tenant, onSuccess }: TenantFormDialogProps) {
  const dialogId = useId("tenant-form-");
  const isEdit = !!tenant;

  // 编辑时加载当前默认连接字符串（接口无配置时返回空 → 使用宿主数据库）
  const connQuery = useTenantGetDefaultConnectionString(
    { path: { id: tenant?.id ?? "" } },
    { query: { enabled: open && isEdit && !!tenant?.id } },
  );

  return (
    <Dialog open={open} onOpenChange={(_, data) => onOpenChange(data.open)}>
      <DialogSurface aria-labelledby={`${dialogId}-title`}>
        <DialogBody>
          <DialogTitle id={`${dialogId}-title`}>{isEdit ? "编辑租户" : "新建租户"}</DialogTitle>
          <DialogContent>
            {isEdit && connQuery.isLoading ? (
              <Spinner label={"加载中..."} />
            ) : (
              <TenantForm
                key={tenant?.id ?? "create"}
                tenant={tenant}
                initialConnectionString={typeof connQuery.data === "string" ? connQuery.data : ""}
                onSuccess={onSuccess}
                footer={
                  <DialogTrigger disableButtonEnhancement>
                    <Button appearance="secondary">{"取消"}</Button>
                  </DialogTrigger>
                }
              />
            )}
          </DialogContent>
        </DialogBody>
      </DialogSurface>
    </Dialog>
  );
}
