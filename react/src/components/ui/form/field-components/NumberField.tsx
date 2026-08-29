import {
  Field,
  SpinButton,
  type SpinButtonProps,
  type SpinButtonChangeEvent,
  type SpinButtonOnChangeData,
  type FieldProps,
} from "@fluentui/react-components";
import { useFieldContext } from "../form-context";
import { getErrorMessage } from "./field-error";

export interface NumberFieldProps {
  label?: string;
  required?: boolean;
  min?: number;
  max?: number;
  step?: number;
  spinButtonProps?: Partial<SpinButtonProps>;
  fieldProps?: Partial<FieldProps>;
}

/**
 * A numeric input field bound to a TanStack Form field of type `number`.
 *
 * Wraps Fluent UI `<SpinButton>` inside `<Field>`.
 */
export function NumberField({
  label,
  required,
  min,
  max,
  step,
  spinButtonProps,
  fieldProps,
}: NumberFieldProps) {
  const field = useFieldContext<number>();
  const errorMsg = getErrorMessage(field.state.meta);

  const handleChange = (_e: SpinButtonChangeEvent, data: SpinButtonOnChangeData) => {
    if (data.value !== undefined && data.value !== null) {
      field.handleChange(data.value);
    } else if (data.displayValue !== undefined) {
      const n = Number(data.displayValue);
      if (!Number.isNaN(n)) field.handleChange(n);
    }
  };

  return (
    <Field
      label={label}
      required={required}
      validationState={errorMsg ? "error" : undefined}
      validationMessage={errorMsg}
      {...fieldProps}
    >
      <SpinButton
        value={field.state.value ?? null}
        onChange={handleChange}
        onBlur={field.handleBlur}
        min={min}
        max={max}
        step={step}
        {...spinButtonProps}
      />
    </Field>
  );
}
