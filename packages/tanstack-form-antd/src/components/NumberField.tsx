import { Form as AntdForm, InputNumber } from "antd";
import type { ComponentProps } from "react";
import { useAntdFormContext } from "../context";
import type {
  AntdFormApi,
  NumberFieldName,
  NumberFieldProps,
  ObjectFormValues,
  TypedNumberFieldComponent,
} from "../types";
import { normalizeFieldErrors, shouldShowFieldError } from "../utils/errors";
import { resolveFieldMode } from "../utils/mode";
import { buildValidationProps, getTextViewValue } from "../utils/props";

export function createNumberFieldComponent<TFormValues extends ObjectFormValues>(
  form: AntdFormApi<TFormValues>,
): TypedNumberFieldComponent<TFormValues> {
  type InputNumberValue = ComponentProps<typeof InputNumber>["value"];

  return function NumberField<TName extends NumberFieldName<TFormValues>>(
    props: NumberFieldProps<TFormValues, TName>,
  ) {
    const {
      name,
      label,
      validators,
      formItemProps,
      mode,
      errorDisplayMode,
      disabled,
      readOnly,
      required,
      extra,
      tooltip,
      ...inputProps
    } = props;

    const context = useAntdFormContext();
    const resolved = resolveFieldMode({
      context,
      mode,
      errorDisplayMode,
      disabled,
      readOnly,
    });

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
                    <span>{getTextViewValue(field.state.value)}</span>
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
                  <InputNumber
                    {...inputProps}
                    value={(field.state.value ?? null) as InputNumberValue}
                    disabled={resolved.disabled}
                    readOnly={resolved.readOnly}
                    onChange={(value) => {
                      field.handleChange((value ?? null) as never);
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
