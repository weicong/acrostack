import { Field, Select, type SelectProps, type FieldProps } from "@fluentui/react-components";
import { useFieldContext } from "../form-context";
import { getErrorMessage } from "./field-error";
import type { ReactNode } from "react";

export interface SelectFieldProps {
  label?: string;
  required?: boolean;
  /** Option elements to render inside the select */
  children?: ReactNode;
  selectProps?: Partial<SelectProps>;
  fieldProps?: Partial<FieldProps>;
}

/**
 * A select (dropdown) field bound to a TanStack Form field of type `string`.
 *
 * Pass `<option>` elements as children.
 */
export function SelectField({
  label,
  required,
  children,
  selectProps,
  fieldProps,
}: SelectFieldProps) {
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
      <Select
        value={field.state.value ?? ""}
        onChange={(_e, data) => field.handleChange(data.value)}
        onBlur={field.handleBlur}
        {...selectProps}
      >
        {children}
      </Select>
    </Field>
  );
}
