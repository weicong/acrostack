import { Field, type FieldProps } from "@fluentui/react-components";
import { DatePicker, type DatePickerProps } from "@fluentui/react-datepicker-compat";
import { zhCNDatePickerDefaults } from "@/components/form/datePickerLocalization";
import { useFieldContext } from "../form-context";
import { getErrorMessage } from "./field-error";

export interface DatePickerFieldProps {
  label?: string;
  required?: boolean;
  placeholder?: string;
  datePickerProps?: Partial<DatePickerProps>;
  fieldProps?: Partial<FieldProps>;
}

/**
 * A date picker field bound to a TanStack Form field of type `Date | null`.
 *
 * Uses `@fluentui/react-datepicker-compat` for the underlying component.
 */
export function DatePickerField({
  label,
  required,
  placeholder,
  datePickerProps,
  fieldProps,
}: DatePickerFieldProps) {
  const field = useFieldContext<Date | null>();
  const errorMsg = getErrorMessage(field.state.meta);

  return (
    <Field
      label={label}
      required={required}
      validationState={errorMsg ? "error" : undefined}
      validationMessage={errorMsg}
      {...fieldProps}
    >
      <DatePicker
        value={field.state.value}
        onSelectDate={(date) => field.handleChange(date ?? null)}
        onBlur={field.handleBlur}
        placeholder={placeholder}
        {...zhCNDatePickerDefaults}
        {...datePickerProps}
      />
    </Field>
  );
}
