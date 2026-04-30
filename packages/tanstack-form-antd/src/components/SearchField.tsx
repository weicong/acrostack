import { Form as AntdForm, Input } from "antd";
import type { ComponentProps } from "react";
import { useAntdFormContext } from "../context";
import type {
  AntdFormApi,
  FieldValue,
  ObjectFormValues,
  SearchFieldName,
  SearchFieldProps,
  TypedSearchFieldComponent,
} from "../types";
import { normalizeFieldErrors, shouldShowFieldError } from "../utils/errors";
import { resolveFieldMode } from "../utils/mode";
import { buildValidationProps, getTextViewValue } from "../utils/props";

export function createSearchFieldComponent<TFormValues extends ObjectFormValues>(
  form: AntdFormApi<TFormValues>,
): TypedSearchFieldComponent<TFormValues> {
  type SearchValue = ComponentProps<typeof Input.Search>["value"];

  return function SearchField<TName extends SearchFieldName<TFormValues>>(
    props: SearchFieldProps<TFormValues, TName>,
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
                  <Input.Search
                    {...inputProps}
                    value={(field.state.value ?? "") as SearchValue}
                    disabled={resolved.disabled}
                    readOnly={resolved.readOnly}
                    onChange={(event) => {
                      field.handleChange(event.target.value as FieldValue<TFormValues, TName>);
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
