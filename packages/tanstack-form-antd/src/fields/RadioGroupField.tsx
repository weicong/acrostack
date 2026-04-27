import type { MutableRefObject } from "react";
import { Radio } from "antd";
import { formatSelectPreview } from "../adapters/valueAdapters";
import { createFieldComponent } from "../adapters/createFieldComponent";
import type { InternalFormContextValue } from "../context/InternalFormContext";
import type { BoundRadioGroupFieldComponent, RadioGroupFieldProps } from "../types";

export function createRadioGroupField<TValues>(
  contextRef: MutableRefObject<InternalFormContextValue<TValues> | null>,
): BoundRadioGroupFieldComponent<TValues> {
  return createFieldComponent<TValues, RadioGroupFieldProps<TValues>>(contextRef, {
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
        ...radioProps
      } = props;

      return (
        <Radio.Group
          {...radioProps}
          value={field.state.value}
          disabled={config.disabled || radioProps.disabled}
          onChange={(event) => field.handleChange(event.target.value as never)}
          onBlur={() => field.handleBlur()}
        />
      );
    },
    formatter: (value, props) => formatSelectPreview(value, (props.options as never[]) ?? []),
  });
}
