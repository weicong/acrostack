import type { ComponentProps } from "react";
import { Field, FieldError, FieldLabel } from "#components/field";
import { Input } from "#components/input";
import { useFieldContext } from "../form-context";
import { getErrorMessage } from "./field-error";

export interface TextFieldProps {
  /** Label displayed above the input */
  label?: string;
  /** Whether the field is required (renders a marker next to the label) */
  required?: boolean;
  /** Additional props forwarded to the input element */
  inputProps?: ComponentProps<typeof Input>;
}

/**
 * A text input field bound to a TanStack Form field of type `string`.
 */
export function TextField({ label, required, inputProps }: TextFieldProps) {
  const field = useFieldContext<string>();
  const errorMsg = getErrorMessage(field.state.meta);

  return (
    <Field data-invalid={errorMsg ? true : undefined}>
      {label !== undefined && (
        <FieldLabel htmlFor={field.name}>
          {label}
          {required && <span className="text-destructive">*</span>}
        </FieldLabel>
      )}
      <Input
        id={field.name}
        name={field.name}
        value={field.state.value ?? ""}
        onChange={(event) => field.handleChange(event.target.value)}
        onBlur={field.handleBlur}
        aria-invalid={errorMsg ? true : undefined}
        {...inputProps}
      />
      <FieldError errors={errorMsg ? [{ message: errorMsg }] : undefined} />
    </Field>
  );
}
