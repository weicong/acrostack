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
 * A combobox (searchable dropdown) field bound to a TanStack Form field.
 *
 * Supports both single-select (`string`) and multiselect (`string[] | null`)
 * via the `comboboxProps.multiselect` flag.
 */
export function ComboboxField({
  label,
  required,
  options,
  placeholder,
  comboboxProps,
  fieldProps,
}: ComboboxFieldProps) {
  const field = useFieldContext<string | string[] | null>();
  const errorMsg = getErrorMessage(field.state.meta);
  const isMultiselect = !!comboboxProps?.multiselect;

  const selectedOptions = isMultiselect
    ? Array.isArray(field.state.value)
      ? field.state.value
      : []
    : field.state.value
      ? [field.state.value as string]
      : [];

  const displayValue = isMultiselect
    ? options
        .filter((o) => selectedOptions.includes(o.value))
        .map((o) => o.label)
        .join(", ")
    : (options.find((o) => o.value === field.state.value)?.label ?? "");

  const handleSelect = (
    _e: React.SyntheticEvent,
    data: { optionValue?: string; selectedOptions: string[] },
  ) => {
    if (isMultiselect) {
      field.handleChange(data.selectedOptions);
    } else {
      field.handleChange(data.optionValue ?? "");
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
      <Combobox
        value={displayValue}
        selectedOptions={selectedOptions}
        onOptionSelect={handleSelect}
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
