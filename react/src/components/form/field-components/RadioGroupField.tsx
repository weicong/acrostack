import {
  Field,
  RadioGroup,
  Radio,
  type RadioGroupProps,
  type FieldProps,
} from "@fluentui/react-components";
import { useFieldContext } from "../form-context";
import { getErrorMessage } from "./field-error";

export interface RadioOption {
  value: string;
  label: string;
}

export interface RadioGroupFieldProps {
  label?: string;
  required?: boolean;
  /** The list of radio options */
  options: RadioOption[];
  /** Layout direction */
  layout?: "horizontal" | "vertical" | "horizontal-stacked";
  radioGroupProps?: Partial<RadioGroupProps>;
  fieldProps?: Partial<FieldProps>;
}

/**
 * A radio group field bound to a TanStack Form field of type `string`.
 */
export function RadioGroupField({
  label,
  required,
  options,
  layout = "vertical",
  radioGroupProps,
  fieldProps,
}: RadioGroupFieldProps) {
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
      <RadioGroup
        value={field.state.value ?? ""}
        onChange={(_e, data) => field.handleChange(data.value)}
        onBlur={field.handleBlur}
        layout={layout}
        {...radioGroupProps}
      >
        {options.map((opt) => (
          <Radio key={opt.value} value={opt.value} label={opt.label} />
        ))}
      </RadioGroup>
    </Field>
  );
}
