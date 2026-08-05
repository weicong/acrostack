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
import { useIdentityClaimTypeCreate } from "@/api/hooks/identityClaimType/useIdentityClaimTypeCreate";
import { useIdentityClaimTypeUpdate } from "@/api/hooks/identityClaimType/useIdentityClaimTypeUpdate";
import type { ClaimTypeFormSeed } from "./claim-type-types";
import { createClaimTypeSchema, updateClaimTypeSchema } from "./claim-type-schemas";

// Mirrors Volo.Abp.Identity.IdentityClaimValueType enum (int32).
const CLAIM_VALUE_TYPE_OPTIONS = [
  { value: "0", nameKey: "AcroStack::ClaimValueType:String" },
  { value: "1", nameKey: "AcroStack::ClaimValueType:Int" },
  { value: "2", nameKey: "AcroStack::ClaimValueType:Boolean" },
  { value: "3", nameKey: "AcroStack::ClaimValueType:DateTime" },
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
  const { t } = useTranslation();
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
        dispatchToast(t("AbpUi::SavedSuccessfully"), { intent: "success" });
        onSuccess();
      };
      const handleError = (err: unknown) => {
        dispatchToast(String(err), { intent: "error" });
      };

      if (isEdit && seed?.id) {
        updateMutation.mutate(
          { id: seed.id, data },
          { onSuccess: handleSuccess, onError: handleError },
        );
      } else {
        createMutation.mutate({ data }, { onSuccess: handleSuccess, onError: handleError });
      }
    },
  });

  const isPending = createMutation.isPending || updateMutation.isPending;

  return (
    <Dialog open={open} onOpenChange={(_, data) => onOpenChange(data.open)}>
      <DialogSurface aria-labelledby={`${dialogId}-title`}>
        <DialogBody>
          <DialogTitle id={`${dialogId}-title`}>
            {isEdit ? t("AbpIdentity::Edit") : t("AcroStack::NewClaimType")}
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
                    children={(field) => (
                      <field.TextField
                        label={t("AbpIdentity::Name")}
                        required
                        inputProps={{ disabled: isStatic }}
                      />
                    )}
                  />
                  <form.AppField
                    name="description"
                    children={(field) => (
                      <field.TextareaField label={t("AbpIdentity::Description")} />
                    )}
                  />
                  <form.AppField
                    name="valueType"
                    children={(field) => (
                      <field.SelectField label={t("AcroStack::ClaimValueType")} required>
                        {CLAIM_VALUE_TYPE_OPTIONS.map((o) => (
                          <option key={o.value} value={o.value}>
                            {t(o.nameKey)}
                          </option>
                        ))}
                      </field.SelectField>
                    )}
                  />
                  <form.AppField
                    name="regex"
                    children={(field) => <field.TextField label={t("AcroStack::ClaimTypeRegex")} />}
                  />
                  <form.AppField
                    name="isRequired"
                    children={(field) => <field.SwitchField label={t("AbpIdentity::IsRequired")} />}
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
