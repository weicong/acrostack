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
import { useAppForm } from "@/components/ui/form";
import { useIdentityClaimTypeCreate } from "@/api/hooks/identityClaimType/useIdentityClaimTypeCreate";
import { useIdentityClaimTypeUpdate } from "@/api/hooks/identityClaimType/useIdentityClaimTypeUpdate";
import type { ClaimTypeFormSeed } from "../types/claimType";
import { createClaimTypeSchema, updateClaimTypeSchema } from "../schemas/claimType";
import { extractAbpErrorMessage } from "@/lib/http/error";

// Mirrors Volo.Abp.Identity.IdentityClaimValueType enum (int32).
const CLAIM_VALUE_TYPE_OPTIONS = [
  { value: "0", label: "字符串" },
  { value: "1", label: "整数" },
  { value: "2", label: "布尔值" },
  { value: "3", label: "日期时间" },
] as const;

// ── Props ───────────────────────────────────────────────────────────

interface ClaimTypeFormDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  seed?: ClaimTypeFormSeed;
  onSuccess: () => void;
}

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

export function ClaimTypeFormDialog({
  open,
  onOpenChange,
  seed,
  onSuccess,
}: ClaimTypeFormDialogProps) {
  const styles = useStyles();
  const dialogId = useId("claim-type-form-");
  const { dispatchToast } = useToastController();
  const isEdit = !!seed?.id;
  const isStatic = seed?.isStatic === true;

  const createMutation = useIdentityClaimTypeCreate();
  const updateMutation = useIdentityClaimTypeUpdate();

  const form = useAppForm({
    defaultValues: {
      name: seed?.name ?? "",
      description: seed?.description ?? "",
      valueType: String(seed?.valueType ?? 0),
      isRequired: seed?.isRequired ?? false,
      regex: seed?.regex ?? "",
    } satisfies {
      name: string;
      description: string;
      valueType: string;
      isRequired: boolean;
      regex: string;
    },
    validators: {
      onChange: ({ value }) => {
        const parsed = {
          name: value.name,
          description: value.description || null,
          valueType: Number(value.valueType),
          isRequired: value.isRequired,
          regex: value.regex || null,
        };
        const result = isEdit
          ? updateClaimTypeSchema.safeParse(parsed)
          : createClaimTypeSchema.safeParse(parsed);
        if (result.error) {
          return result.error.flatten().fieldErrors as Record<string, string[]>;
        }
      },
    },
    onSubmit: ({ value }) => {
      const data = {
        name: value.name,
        description: value.description || null,
        valueType: Number(value.valueType),
        isRequired: value.isRequired,
        regex: value.regex || null,
      };

      const handleSuccess = () => {
        dispatchToast("保存成功", { intent: "success" });
        onSuccess();
      };
      const handleError = (err: unknown) => {
        dispatchToast(extractAbpErrorMessage(err), { intent: "error" });
      };

      if (isEdit && seed?.id) {
        updateMutation.mutate(
          { path: { id: seed.id }, body: data },
          { onSuccess: handleSuccess, onError: handleError },
        );
      } else {
        createMutation.mutate({ body: data }, { onSuccess: handleSuccess, onError: handleError });
      }
    },
  });

  const isPending = createMutation.isPending || updateMutation.isPending;

  return (
    <Dialog open={open} onOpenChange={(_, data) => onOpenChange(data.open)}>
      <DialogSurface aria-labelledby={`${dialogId}-title`}>
        <DialogBody>
          <DialogTitle id={`${dialogId}-title`}>{isEdit ? "编辑" : "新建声明类型"}</DialogTitle>
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
                    children={(field) => (
                      <field.TextField
                        label={"名称"}
                        required
                        inputProps={{ disabled: isStatic }}
                      />
                    )}
                  />
                  <form.AppField
                    name="description"
                    children={(field) => <field.TextareaField label={"描述"} />}
                  />
                  <form.AppField
                    name="valueType"
                    children={(field) => (
                      <field.SelectField label={"值类型"} required>
                        {CLAIM_VALUE_TYPE_OPTIONS.map((o) => (
                          <option key={o.value} value={o.value}>
                            {o.label}
                          </option>
                        ))}
                      </field.SelectField>
                    )}
                  />
                  <form.AppField
                    name="regex"
                    children={(field) => <field.TextField label={"正则表达式"} />}
                  />
                  <form.AppField
                    name="isRequired"
                    children={(field) => <field.SwitchField label={"必填"} />}
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
