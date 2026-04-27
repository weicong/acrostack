import type { MutableRefObject } from "react";
import { Input } from "antd";
import { createFieldComponent } from "../adapters/createFieldComponent";
import type { InternalFormContextValue } from "../context/InternalFormContext";
import type { BoundTextFieldComponent, TextFieldProps } from "../types";

export function createTextField<TValues>(
  contextRef: MutableRefObject<InternalFormContextValue<TValues> | null>,
): BoundTextFieldComponent<TValues> {
  return createFieldComponent<TValues, TextFieldProps<TValues>>(contextRef, {
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
        ...inputProps
      } = props;

      return (
        <Input
          {...inputProps}
          value={field.state.value ?? ""}
          disabled={config.disabled || inputProps.disabled}
          onChange={(event) => {
            field.handleChange(event.target.value as never);
            inputProps.onChange?.(event);
          }}
          onBlur={(event) => {
            field.handleBlur();
            inputProps.onBlur?.(event);
          }}
        />
      );
    },
  });
}
