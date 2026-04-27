import type { MutableRefObject, ReactNode } from "react";
import { FormItem } from "../components/FormItem";
import { PreviewValue } from "../components/PreviewValue";
import { getContextOrThrow, type InternalFormContextValue } from "../context/InternalFormContext";
import type { BaseFieldProps } from "../types";
import { getFieldError, normalizeFieldValidators } from "../utils/getFieldError";

type CreateFieldComponentOptions<TValues, TProps extends BaseFieldProps<TValues, any>> = {
  renderEdit: (params: {
    field: any;
    props: TProps;
    config: InternalFormContextValue<TValues>["config"];
  }) => ReactNode;
  formatter?: (
    value: any,
    props: TProps,
    config: InternalFormContextValue<TValues>["config"],
  ) => ReactNode;
};

export function createFieldComponent<TValues, TProps extends BaseFieldProps<TValues, any>>(
  contextRef: MutableRefObject<InternalFormContextValue<TValues> | null>,
  options: CreateFieldComponentOptions<TValues, TProps>,
) {
  return function FieldComponent(props: TProps) {
    const context = getContextOrThrow(contextRef);
    const { form, config } = context;
    const mode = props.mode ?? config.mode;
    const emptyText = props.emptyText ?? config.emptyText;
    const showErrorWhen = props.showErrorWhen ?? config.showErrorWhen;

    return (
      <form.Field
        name={props.name}
        validators={normalizeFieldValidators(props.validators) as never}
      >
        {(field: any) => (
          <form.Subscribe selector={(state: any) => state.isSubmitted}>
            {(submitted: boolean) => {
              if (mode === "preview") {
                const formatter = options.formatter
                  ? (value: any) => options.formatter?.(value, props, config)
                  : undefined;

                return (
                  <FormItem
                    label={props.label}
                    required={props.required}
                    formItemProps={props.formItemProps}
                  >
                    <PreviewValue
                      value={field.state.value}
                      emptyText={emptyText}
                      renderPreview={props.renderPreview as never}
                      formatter={formatter as never}
                      className={props.previewClassName}
                      style={props.previewStyle}
                    />
                  </FormItem>
                );
              }

              const error = getFieldError({
                meta: field.state.meta,
                showErrorWhen,
                submitted,
              });

              return (
                <FormItem
                  label={props.label}
                  required={props.required}
                  error={error}
                  isValidating={field.state.meta.isValidating}
                  formItemProps={props.formItemProps}
                >
                  {options.renderEdit({ field, props, config })}
                </FormItem>
              );
            }}
          </form.Subscribe>
        )}
      </form.Field>
    );
  };
}
