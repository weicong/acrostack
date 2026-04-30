import { Cascader, Form as AntdForm } from "antd";
import type { ComponentProps } from "react";
import { useAntdFormContext } from "../context";
import type {
  AntdFormApi,
  CascaderFieldName,
  CascaderFieldProps,
  FieldValue,
  ObjectFormValues,
  TypedCascaderFieldComponent,
} from "../types";
import { normalizeFieldErrors, shouldShowFieldError } from "../utils/errors";
import { resolveFieldMode } from "../utils/mode";
import { buildValidationProps, getTextViewValue } from "../utils/props";

export function createCascaderFieldComponent<TFormValues extends ObjectFormValues>(
  form: AntdFormApi<TFormValues>,
): TypedCascaderFieldComponent<TFormValues> {
  type CascaderValue = ComponentProps<typeof Cascader>["value"];
  const CascaderComponent = Cascader as any;

  return function CascaderField<TName extends CascaderFieldName<TFormValues>>(
    props: CascaderFieldProps<TFormValues, TName>,
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
      ...cascaderProps
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
                  <CascaderComponent
                    {...cascaderProps}
                    value={field.state.value as CascaderValue}
                    disabled={resolved.disabled}
                    onChange={(value: unknown) => {
                      field.handleChange(value as FieldValue<TFormValues, TName>);
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
