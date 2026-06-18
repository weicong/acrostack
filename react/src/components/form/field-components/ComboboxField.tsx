import {
  Field,
  Combobox,
  Option,
  type ComboboxProps,
  type FieldProps,
} from "@fluentui/react-components";
import { useFieldContext } from "../form-context";
import { getErrorMessage } from "./field-error";

export interface ComboboxOption {
  value: string;
  label: string;
}

export interface ComboboxFieldProps {
  label?: string;
  required?: boolean;
  /** The list of options to display */
  options: ComboboxOption[];
  /** Placeholder text */
  placeholder?: string;
  comboboxProps?: Partial<ComboboxProps>;
  fieldProps?: Partial<FieldProps>;
}

/**
 * A combobox (searchable dropdown) field bound to a TanStack Form field of type `string`.
 */
export function ComboboxField({
  label,
  required,
  options,
  placeholder,
  comboboxProps,
  fieldProps,
}: ComboboxFieldProps) {
  const field = useFieldContext<string>();
  const errorMsg = getErrorMessage(field.state.meta);

  // Find the display text for the current value
  const selectedOption = options.find((o) => o.value === field.state.value);

  return (
    <Field
      label={label}
      required={required}
      validationState={errorMsg ? "error" : undefined}
      validationMessage={errorMsg}
      {...fieldProps}
    >
      <Combobox
        value={selectedOption?.label ?? ""}
        selectedOptions={field.state.value ? [field.state.value] : []}
        onOptionSelect={(_e, data) => field.handleChange(data.optionValue ?? "")}
        onBlur={field.handleBlur}
        placeholder={placeholder}
        {...comboboxProps}
      >
        {options.map((opt) => (
          <Option key={opt.value} value={opt.value}>
            {opt.label}
          </Option>
        ))}
      </Combobox>
    </Field>
  );
}
