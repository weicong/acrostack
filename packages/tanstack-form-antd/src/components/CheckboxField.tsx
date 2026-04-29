import { Checkbox, Form as AntdForm } from "antd";
import { useAntdFormContext } from "../context";
import type {
  AntdFormApi,
  AnyFormValues,
  CheckboxFieldName,
  CheckboxFieldComponent,
  CheckboxFieldProps,
  FieldValue,
} from "../types";
import { normalizeFieldErrors, shouldShowFieldError } from "../utils/errors";
import { resolveFieldMode } from "../utils/mode";
import { buildValidationProps, getCheckboxViewValue } from "../utils/props";

export function createCheckboxFieldComponent<TFormValues extends AnyFormValues>(
  form: AntdFormApi<TFormValues>,
): CheckboxFieldComponent<TFormValues> {
  return function CheckboxField<TName extends CheckboxFieldName<TFormValues>>(
    props: CheckboxFieldProps<TFormValues, TName>,
  ) {
    const {
      name,
      label,
      children,
      validators,
      formItemProps,
      mode,
      errorDisplayMode,
      disabled,
      required,
      extra,
      tooltip,
      ...checkboxProps
    } = props;

    const context = useAntdFormContext();
    const resolved = resolveFieldMode({
      context,
      mode,
      errorDisplayMode,
      disabled,
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
                    <span>{getCheckboxViewValue(field.state.value)}</span>
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
                  <Checkbox
                    {...checkboxProps}
                    checked={Boolean(field.state.value)}
                    disabled={resolved.disabled}
                    onChange={(event) => {
                      field.handleChange(event.target.checked as FieldValue<TFormValues, TName>);
                    }}
                    onBlur={() => {
                      field.handleBlur();
                    }}
                  >
                    {children}
                  </Checkbox>
                </AntdForm.Item>
              );
            }}
          </form.Subscribe>
        )}
      </form.Field>
    );
  };
}
