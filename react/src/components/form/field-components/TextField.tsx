import { Field, Input, type InputProps, type FieldProps } from "@fluentui/react-components";
import { useFieldContext } from "../form-context";
import { getErrorMessage } from "./field-error";

export interface TextFieldProps {
  /** Label displayed above the input */
  label?: string;
  /** Whether the field is required */
  required?: boolean;
  /** Additional props forwarded to the Fluent UI Input */
  inputProps?: Partial<InputProps>;
  /** Additional props forwarded to the Fluent UI Field wrapper */
  fieldProps?: Partial<FieldProps>;
}

/**
 * A text input field bound to a TanStack Form field of type `string`.
 *
 * Wraps Fluent UI `<Input>` inside `<Field>` for label + validation display.
 */
export function TextField({ label, required, inputProps, fieldProps }: TextFieldProps) {
  const field = useFieldContext<string>();
  const errorMsg = getErrorMessage(field.state.meta);

  return (
    <Field
      label={label}
      required={required}
      validationState={errorMsg ? "error" : undefined}
      validationMessage={errorMsg}
      {...fieldProps}
    >
      <Input
        name={field.name}
        value={field.state.value ?? ""}
        onChange={(_e, data) => field.handleChange(data.value)}
        onBlur={field.handleBlur}
        {...inputProps}
      />
    </Field>
  );
}
