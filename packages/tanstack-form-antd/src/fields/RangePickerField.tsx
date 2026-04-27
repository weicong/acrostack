import type { MutableRefObject } from "react";
import dayjs from "dayjs";
import { DatePicker } from "antd";
import { formatRangePreview } from "../adapters/valueAdapters";
import { createFieldComponent } from "../adapters/createFieldComponent";
import type { InternalFormContextValue } from "../context/InternalFormContext";
import type { BoundRangePickerFieldComponent, RangePickerFieldProps } from "../types";

export function createRangePickerField<TValues>(
  contextRef: MutableRefObject<InternalFormContextValue<TValues> | null>,
): BoundRangePickerFieldComponent<TValues> {
  return createFieldComponent<TValues, RangePickerFieldProps<TValues>>(contextRef, {
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
        ...rangePickerProps
      } = props;
      const resolvedValueFormat = valueFormat ?? config.dateValueFormat;
      const value = Array.isArray(field.state.value)
        ? [
            field.state.value[0] ? dayjs(field.state.value[0], resolvedValueFormat) : null,
            field.state.value[1] ? dayjs(field.state.value[1], resolvedValueFormat) : null,
          ]
        : null;

      return (
        <DatePicker.RangePicker
          {...rangePickerProps}
          format={format ?? resolvedValueFormat}
          value={value as never}
          disabled={config.disabled || rangePickerProps.disabled}
          onChange={(dates, dateStrings) => {
            const nextValue =
              dates && dateStrings[0] && dateStrings[1]
                ? [dateStrings[0], dateStrings[1]]
                : (emptyValue ?? null);
            field.handleChange(nextValue as never);
          }}
          onBlur={() => field.handleBlur()}
        />
      );
    },
    formatter: (value, props, config) =>
      formatRangePreview({
        value,
        valueFormat: props.valueFormat ?? config.dateValueFormat,
        displayFormat: props.displayFormat,
        separator: props.separator,
      }),
  });
}
