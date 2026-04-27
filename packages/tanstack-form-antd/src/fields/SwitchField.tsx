import type { MutableRefObject } from "react";
import { Switch } from "antd";
import { formatBooleanPreview } from "../adapters/valueAdapters";
import { createFieldComponent } from "../adapters/createFieldComponent";
import type { InternalFormContextValue } from "../context/InternalFormContext";
import type { BoundSwitchFieldComponent, SwitchFieldProps } from "../types";

export function createSwitchField<TValues>(
  contextRef: MutableRefObject<InternalFormContextValue<TValues> | null>,
): BoundSwitchFieldComponent<TValues> {
  return createFieldComponent<TValues, SwitchFieldProps<TValues>>(contextRef, {
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
        checkedText: _checkedText,
        uncheckedText: _uncheckedText,
        ...switchProps
      } = props;

      return (
        <Switch
          {...switchProps}
          checked={Boolean(field.state.value)}
          disabled={config.disabled || switchProps.disabled}
          onChange={(checked, event) => {
            field.handleChange(checked as never);
            field.handleBlur();
            switchProps.onChange?.(checked, event);
          }}
        />
      );
    },
    formatter: (value, props) =>
      formatBooleanPreview(value, props.checkedText, props.uncheckedText),
  });
}
