import { Field, Textarea, type TextareaProps, type FieldProps } from "@fluentui/react-components";
import { useFieldContext } from "../form-context";
import { getErrorMessage } from "./field-error";

export interface TextareaFieldProps {
  label?: string;
  required?: boolean;
  textareaProps?: Partial<TextareaProps>;
  fieldProps?: Partial<FieldProps>;
}

/**
 * A textarea field bound to a TanStack Form field of type `string`.
 */
export function TextareaField({ label, required, textareaProps, fieldProps }: TextareaFieldProps) {
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
      <Textarea
        value={field.state.value ?? ""}
        onChange={(_e, data) => field.handleChange(data.value)}
        onBlur={field.handleBlur}
        {...textareaProps}
      />
    </Field>
  );
}
