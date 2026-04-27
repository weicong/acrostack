import type { MutableRefObject } from "react";
import { Checkbox } from "antd";
import { formatBooleanPreview } from "../adapters/valueAdapters";
import { createFieldComponent } from "../adapters/createFieldComponent";
import type { InternalFormContextValue } from "../context/InternalFormContext";
import type { BoundCheckboxFieldComponent, CheckboxFieldProps } from "../types";

export function createCheckboxField<TValues>(
  contextRef: MutableRefObject<InternalFormContextValue<TValues> | null>,
): BoundCheckboxFieldComponent<TValues> {
  return createFieldComponent<TValues, CheckboxFieldProps<TValues>>(contextRef, {
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
        children,
        ...checkboxProps
      } = props;

      return (
        <Checkbox
          {...checkboxProps}
          checked={Boolean(field.state.value)}
          disabled={config.disabled || checkboxProps.disabled}
          onChange={(event) => field.handleChange(event.target.checked as never)}
          onBlur={() => field.handleBlur()}
        >
          {children}
        </Checkbox>
      );
    },
    formatter: (value, props) =>
      formatBooleanPreview(value, props.checkedText, props.uncheckedText),
  });
}
