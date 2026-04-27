import type { MutableRefObject } from "react";
import dayjs from "dayjs";
import { DatePicker } from "antd";
import { formatDatePreview, normalizeDateString } from "../adapters/valueAdapters";
import { createFieldComponent } from "../adapters/createFieldComponent";
import type { InternalFormContextValue } from "../context/InternalFormContext";
import type { BoundDatePickerFieldComponent, DatePickerFieldProps } from "../types";

export function createDatePickerField<TValues>(
  contextRef: MutableRefObject<InternalFormContextValue<TValues> | null>,
): BoundDatePickerFieldComponent<TValues> {
  return createFieldComponent<TValues, DatePickerFieldProps<TValues>>(contextRef, {
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
        valueFormat,
        displayFormat: _displayFormat,
        emptyValue = null,
        format,
        ...datePickerProps
      } = props;
      const resolvedValueFormat = valueFormat ?? config.dateValueFormat;
      const value = field.state.value
        ? dayjs(String(field.state.value), resolvedValueFormat)
        : null;

      return (
        <DatePicker
          {...datePickerProps}
          format={format ?? resolvedValueFormat}
          value={value}
          disabled={config.disabled || datePickerProps.disabled}
          onChange={(date, dateString) => {
            const nextValue = date ? normalizeDateString(dateString ?? "") : (emptyValue ?? null);
            field.handleChange(nextValue as never);
          }}
          onBlur={() => field.handleBlur()}
        />
      );
    },
    formatter: (value, props, config) =>
      formatDatePreview(value, props.valueFormat ?? config.dateValueFormat, props.displayFormat),
  });
}
