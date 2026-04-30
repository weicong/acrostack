import { Form as AntdForm, Switch } from "antd";
import { useAntdFormContext } from "../context";
import type {
  AntdFormApi,
  CheckboxFieldName,
  FieldValue,
  ObjectFormValues,
  SwitchFieldProps,
  TypedSwitchFieldComponent,
} from "../types";
import { normalizeFieldErrors, shouldShowFieldError } from "../utils/errors";
import { resolveFieldMode } from "../utils/mode";
import { buildValidationProps, getCheckboxViewValue } from "../utils/props";

export function createSwitchFieldComponent<TFormValues extends ObjectFormValues>(
  form: AntdFormApi<TFormValues>,
): TypedSwitchFieldComponent<TFormValues> {
  return function SwitchField<TName extends CheckboxFieldName<TFormValues>>(
    props: SwitchFieldProps<TFormValues, TName>,
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
      ...switchProps
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
                  <Switch
                    {...switchProps}
                    checked={Boolean(field.state.value)}
                    disabled={resolved.disabled}
                    onChange={(checked) => {
                      field.handleChange(checked as FieldValue<TFormValues, TName>);
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
