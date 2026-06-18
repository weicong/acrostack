import { Field, Checkbox, type CheckboxProps, type FieldProps } from "@fluentui/react-components";
import { useFieldContext } from "../form-context";
import { getErrorMessage } from "./field-error";

export interface CheckboxFieldProps {
  /** Label displayed next to the checkbox */
  label?: string;
  required?: boolean;
  checkboxProps?: Partial<CheckboxProps>;
  fieldProps?: Partial<FieldProps>;
}

/**
 * A checkbox field bound to a TanStack Form field of type `boolean`.
 */
export function CheckboxField({ label, required, checkboxProps, fieldProps }: CheckboxFieldProps) {
  const field = useFieldContext<boolean>();
  const errorMsg = getErrorMessage(field.state.meta);

  return (
    <Field
      required={required}
      validationState={errorMsg ? "error" : undefined}
      validationMessage={errorMsg}
      {...fieldProps}
    >
      <Checkbox
        checked={field.state.value ?? false}
        onChange={(_e, data) => field.handleChange(!!data.checked)}
        onBlur={field.handleBlur}
        label={label}
        {...checkboxProps}
      />
    </Field>
  );
}
