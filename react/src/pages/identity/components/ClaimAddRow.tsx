import { Button, Field, Input } from "@fluentui/react-components";
import { Add20Regular } from "@fluentui/react-icons";
import type { ClaimFormValues } from "../claim-types";
import { useClaimsStyles } from "../styles/claims";

type ClaimAddRowProps = {
  values: ClaimFormValues;
  errors: Record<string, string> | null;
  onChange: (field: keyof ClaimFormValues, value: string) => void;
  onAdd: () => void;
  disabled?: boolean;
};

/** 声明对话框顶部的新增行（受控展示组件）。 */
export function ClaimAddRow({ values, errors, onChange, onAdd, disabled }: ClaimAddRowProps) {
  const styles = useClaimsStyles();

  return (
    <div className={styles.addRow}>
      <Field
        label={"声明类型"}
        validationState={errors?.claimType ? "error" : undefined}
        validationMessage={errors?.claimType}
      >
        <Input
          value={values.claimType}
          onChange={(_, d) => onChange("claimType", d.value)}
          placeholder={"声明类型"}
        />
      </Field>
      <Field
        label={"声明值"}
        validationState={errors?.claimValue ? "error" : undefined}
        validationMessage={errors?.claimValue}
      >
        <Input
          value={values.claimValue}
          onChange={(_, d) => onChange("claimValue", d.value)}
          placeholder={"声明值"}
        />
      </Field>
      <Button appearance="primary" icon={<Add20Regular />} onClick={onAdd} disabled={disabled}>
        {"添加"}
      </Button>
    </div>
  );
}
