import type { MutableRefObject } from "react";
import { Input } from "antd";
import { createFieldComponent } from "../adapters/createFieldComponent";
import type { InternalFormContextValue } from "../context/InternalFormContext";
import type { BoundPasswordFieldComponent, PasswordFieldProps } from "../types";

export function createPasswordField<TValues>(
  contextRef: MutableRefObject<InternalFormContextValue<TValues> | null>,
): BoundPasswordFieldComponent<TValues> {
  return createFieldComponent<TValues, PasswordFieldProps<TValues>>(contextRef, {
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
        maskPreview: _maskPreview,
        ...passwordProps
      } = props;

      return (
        <Input.Password
          {...passwordProps}
          value={field.state.value ?? ""}
          disabled={config.disabled || passwordProps.disabled}
          onChange={(event) => field.handleChange(event.target.value as never)}
          onBlur={() => field.handleBlur()}
        />
      );
    },
    formatter: (value, props) => {
      if (props.maskPreview === false) {
        return value;
      }
      return typeof value === "string" && value.length > 0 ? "******" : value;
    },
  });
}
