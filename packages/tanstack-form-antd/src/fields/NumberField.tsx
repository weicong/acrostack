import type { MutableRefObject } from "react";
import { InputNumber } from "antd";
import { createFieldComponent } from "../adapters/createFieldComponent";
import type { InternalFormContextValue } from "../context/InternalFormContext";
import type { BoundNumberFieldComponent, NumberFieldProps } from "../types";

export function createNumberField<TValues>(
  contextRef: MutableRefObject<InternalFormContextValue<TValues> | null>,
): BoundNumberFieldComponent<TValues> {
  return createFieldComponent<TValues, NumberFieldProps<TValues>>(contextRef, {
    renderEdit: ({ field, props, config }) => {
      const {
        label: _label,
        required: _required,
        mode: _mode,
        emptyText: _emptyText,
        showErrorWhen: _showErrorWhen,
        renderPreview: _renderPreview,
        formItemProps: _formItemProps,
        previewClassName: _previewClassName,
        previewStyle: _previewStyle,
        validators: _validators,
        style,
        ...numberProps
      } = props;

      return (
        <InputNumber
          {...numberProps}
          style={{ width: "100%", ...style }}
          value={(field.state.value ?? null) as number | null}
          disabled={config.disabled || numberProps.disabled}
          onChange={(value) => {
            field.handleChange((value ?? null) as never);
            numberProps.onChange?.(value);
          }}
          onBlur={(event) => {
            field.handleBlur();
            numberProps.onBlur?.(event);
          }}
        />
      );
    },
  });
}
