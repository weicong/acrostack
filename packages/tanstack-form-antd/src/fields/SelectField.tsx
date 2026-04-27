import type { MutableRefObject } from "react";
import { Select } from "antd";
import { formatSelectPreview } from "../adapters/valueAdapters";
import { createFieldComponent } from "../adapters/createFieldComponent";
import type { InternalFormContextValue } from "../context/InternalFormContext";
import type { BoundSelectFieldComponent, SelectFieldProps } from "../types";

export function createSelectField<TValues>(
  contextRef: MutableRefObject<InternalFormContextValue<TValues> | null>,
): BoundSelectFieldComponent<TValues> {
  return createFieldComponent<TValues, SelectFieldProps<TValues>>(contextRef, {
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
        previewSeparator: _previewSeparator,
        style,
        ...selectProps
      } = props;

      return (
        <Select
          {...selectProps}
          style={{ width: "100%", ...style }}
          value={field.state.value}
          disabled={config.disabled || selectProps.disabled}
          onChange={(value) => field.handleChange(value as never)}
          onBlur={() => field.handleBlur()}
        />
      );
    },
    formatter: (value, props) =>
      formatSelectPreview(value, (props.options as never[]) ?? [], props.previewSeparator),
  });
}
