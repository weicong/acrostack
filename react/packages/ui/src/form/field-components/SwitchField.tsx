import { Field, Switch, type SwitchProps, type FieldProps } from "@fluentui/react-components";
import { useFieldContext } from "../form-context";
import { getErrorMessage } from "./field-error";

export interface SwitchFieldProps {
  label?: string;
  required?: boolean;
  switchProps?: Partial<SwitchProps>;
  fieldProps?: Partial<FieldProps>;
}

/**
 * A switch (toggle) field bound to a TanStack Form field of type `boolean`.
 */
export function SwitchField({ label, required, switchProps, fieldProps }: SwitchFieldProps) {
  const field = useFieldContext<boolean>();
  const errorMsg = getErrorMessage(field.state.meta);

  return (
    <Field
      label={label}
      required={required}
      validationState={errorMsg ? "error" : undefined}
      validationMessage={errorMsg}
      {...fieldProps}
    >
      <Switch
        checked={field.state.value ?? false}
        onChange={(_e, data) => field.handleChange(data.checked)}
        onBlur={field.handleBlur}
        {...switchProps}
      />
    </Field>
  );
}
