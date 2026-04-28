import type { MutableRefObject } from "react";
import { Input } from "antd";
import { createFieldComponent } from "../adapters/createFieldComponent";
import type { InternalFormContextValue } from "../context/InternalFormContext";
import type { BoundTextAreaFieldComponent, TextAreaFieldProps } from "../types";

export function createTextAreaField<TValues>(
  contextRef: MutableRefObject<InternalFormContextValue<TValues> | null>,
): BoundTextAreaFieldComponent<TValues> {
  return createFieldComponent<TValues, TextAreaFieldProps<TValues>>(contextRef, {
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
        ...textAreaProps
      } = props;

      return (
        <Input.TextArea
          {...textAreaProps}
          value={(field.state.value ?? "") as string}
          disabled={config.disabled || textAreaProps.disabled}
          onChange={(event) => {
            field.handleChange(event.target.value as never);
            textAreaProps.onChange?.(event);
          }}
          onBlur={(event) => {
            field.handleBlur();
            textAreaProps.onBlur?.(event);
          }}
        />
      );
    },
  });
}
