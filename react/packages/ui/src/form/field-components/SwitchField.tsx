import { Field, FieldError, FieldLabel } from "#components/field";
import { Switch } from "#components/switch";
import { useFieldContext } from "../form-context";
import { getErrorMessage } from "./field-error";

export interface SwitchFieldProps {
  label?: string;
  required?: boolean;
  disabled?: boolean;
}

/**
 * A switch (toggle) field bound to a TanStack Form field of type `boolean`.
 *
 * Label sits to the right of the control, so the row reads as one line.
 */
export function SwitchField({ label, required, disabled }: SwitchFieldProps) {
  const field = useFieldContext<boolean>();
  const errorMsg = getErrorMessage(field.state.meta);

  return (
    <Field orientation="horizontal" data-invalid={errorMsg ? true : undefined}>
      <Switch
        id={field.name}
        name={field.name}
        checked={field.state.value ?? false}
        onCheckedChange={(checked) => field.handleChange(checked)}
        onBlur={field.handleBlur}
        disabled={disabled}
        aria-invalid={errorMsg ? true : undefined}
      />
      {label !== undefined && (
        <FieldLabel htmlFor={field.name}>
          {label}
          {required && <span className="text-destructive">*</span>}
        </FieldLabel>
      )}
      <FieldError errors={errorMsg ? [{ message: errorMsg }] : undefined} />
    </Field>
  );
}
