import type { MutableRefObject } from "react";
import { InputNumber, Space } from "antd";
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
        addonBefore,
        addonAfter,
        style,
        ...numberProps
      } = props;

      const control = (
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

      if (addonBefore == null && addonAfter == null) {
        return control;
      }

      return (
        <Space.Compact style={{ width: "100%" }}>
          {addonBefore == null ? null : (
            <span
              style={{
                display: "flex",
                alignItems: "center",
                padding: "0 11px",
                background: "#fafafa",
                border: "1px solid #d9d9d9",
                borderRight: 0,
                borderRadius: "6px 0 0 6px",
                color: "rgba(0, 0, 0, 0.88)",
                whiteSpace: "nowrap",
              }}
            >
              {addonBefore}
            </span>
          )}
          {control}
          {addonAfter == null ? null : (
            <span
              style={{
                display: "flex",
                alignItems: "center",
                padding: "0 11px",
                background: "#fafafa",
                border: "1px solid #d9d9d9",
                borderLeft: 0,
                borderRadius: "0 6px 6px 0",
                color: "rgba(0, 0, 0, 0.88)",
                whiteSpace: "nowrap",
              }}
            >
              {addonAfter}
            </span>
          )}
        </Space.Compact>
      );
    },
  });
}
