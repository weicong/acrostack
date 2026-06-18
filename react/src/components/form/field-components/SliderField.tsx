import { Field, Slider, type SliderProps, type FieldProps } from "@fluentui/react-components";
import { useFieldContext } from "../form-context";
import { getErrorMessage } from "./field-error";

export interface SliderFieldProps {
  label?: string;
  required?: boolean;
  min?: number;
  max?: number;
  step?: number;
  sliderProps?: Partial<SliderProps>;
  fieldProps?: Partial<FieldProps>;
}

/**
 * A slider field bound to a TanStack Form field of type `number`.
 */
export function SliderField({
  label,
  required,
  min = 0,
  max = 100,
  step = 1,
  sliderProps,
  fieldProps,
}: SliderFieldProps) {
  const field = useFieldContext<number>();
  const errorMsg = getErrorMessage(field.state.meta);

  return (
    <Field
      label={label}
      required={required}
      validationState={errorMsg ? "error" : undefined}
      validationMessage={errorMsg}
      {...fieldProps}
    >
      <Slider
        value={field.state.value}
        onChange={(_e, data) => field.handleChange(data.value)}
        onBlur={field.handleBlur}
        min={min}
        max={max}
        step={step}
        {...sliderProps}
      />
    </Field>
  );
}
