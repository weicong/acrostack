import { DatePicker, Form as AntdForm } from "antd";
import type { ComponentProps } from "react";
import { useAntdFormContext } from "../context";
import type {
  AntdFormApi,
  DateRangePickerFieldName,
  DateRangePickerFieldProps,
  FieldValue,
  ObjectFormValues,
  TypedDateRangePickerFieldComponent,
} from "../types";
import { normalizeFieldErrors, shouldShowFieldError } from "../utils/errors";
import { resolveFieldMode } from "../utils/mode";
import { buildValidationProps, getDateViewValue, getRangeViewValue } from "../utils/props";

export function createDateRangePickerFieldComponent<TFormValues extends ObjectFormValues>(
  form: AntdFormApi<TFormValues>,
): TypedDateRangePickerFieldComponent<TFormValues> {
  type DateRangeValue = ComponentProps<typeof DatePicker.RangePicker>["value"];

  return function DateRangePickerField<TName extends DateRangePickerFieldName<TFormValues>>(
    props: DateRangePickerFieldProps<TFormValues, TName>,
  ) {
    const {
      name,
      label,
      validators,
      formItemProps,
      mode,
      errorDisplayMode,
      disabled,
      required,
      extra,
      tooltip,
      ...rangePickerProps
    } = props;

    const context = useAntdFormContext();
    const resolved = resolveFieldMode({ context, mode, errorDisplayMode, disabled });

    return (
      <form.Field name={name} validators={validators}>
        {(field) => (
          <form.Subscribe selector={(state) => state.isSubmitted}>
            {(isSubmitted) => {
              const errors = normalizeFieldErrors(field.state.meta.errors);
              const showError = shouldShowFieldError({
                errorDisplayMode: resolved.errorDisplayMode,
                hasError: errors.length > 0,
                isTouched: field.state.meta.isTouched,
                isDirty: field.state.meta.isDirty,
                isSubmitted,
              });
              const errorMessage = showError ? errors[0] : undefined;
              const validationProps = buildValidationProps(showError, errorMessage);

              if (resolved.mode === "view") {
                return (
                  <AntdForm.Item
                    {...formItemProps}
                    {...validationProps}
                    label={label}
                    required={required}
                    extra={extra}
                    tooltip={tooltip}
                  >
                    <span>{getRangeViewValue(field.state.value, getDateViewValue)}</span>
                  </AntdForm.Item>
                );
              }

              return (
                <AntdForm.Item
                  {...formItemProps}
                  {...validationProps}
                  label={label}
                  required={required}
                  extra={extra}
                  tooltip={tooltip}
                >
                  <DatePicker.RangePicker
                    {...rangePickerProps}
                    value={(field.state.value ?? null) as DateRangeValue}
                    disabled={resolved.disabled}
                    onChange={(value) => {
                      field.handleChange((value ?? null) as FieldValue<TFormValues, TName>);
                    }}
                    onBlur={() => {
                      field.handleBlur();
                    }}
                  />
                </AntdForm.Item>
              );
            }}
          </form.Subscribe>
        )}
      </form.Field>
    );
  };
}
