import React from "react";
import { DatePicker } from "antd";
import type { DatePickerProps } from "antd";
import dayjs, { type Dayjs } from "dayjs";
import { useFieldContext } from "../form-context";
import { AntFormItem } from "../AntFormItem";

export interface DatePickerFieldProps {
  label?: string;
  required?: boolean;
  placeholder?: string;
  disabled?: boolean;
  /** 日期格式，默认 'YYYY-MM-DD' */
  format?: string;
  /** 是否显示时间选择 */
  showTime?: boolean;
  /** 透传给 antd DatePicker 的额外属性 */
  datePickerProps?: Omit<
    DatePickerProps,
    "value" | "onChange" | "onBlur" | "placeholder" | "disabled" | "format" | "showTime"
  >;
}

/**
 * 日期选择字段。
 * 绑定 antd DatePicker。
 * 内部使用 dayjs，表单值存储为 ISO 字符串（string）或 null。
 */
export function DatePickerField({
  label,
  required,
  placeholder,
  disabled,
  format = "YYYY-MM-DD",
  showTime,
  datePickerProps,
}: DatePickerFieldProps) {
  const field = useFieldContext<string>();

  const errors =
    field.state.meta.isTouched && field.state.meta.errors.length > 0
      ? field.state.meta.errors.map((e) => (typeof e === "string" ? e : String(e)))
      : undefined;

  const dayjsValue: Dayjs | null = field.state.value ? dayjs(field.state.value) : null;

  return (
    <AntFormItem label={label} required={required} errors={errors}>
      <DatePicker
        {...datePickerProps}
        style={{ width: "100%", ...datePickerProps?.style }}
        value={dayjsValue}
        onChange={(_date: Dayjs | Dayjs[] | null, dateString: string | string[] | null) => {
          const value = Array.isArray(dateString) ? dateString[0] : dateString || "";
          field.handleChange(value);
        }}
        onBlur={() => field.handleBlur()}
        placeholder={placeholder}
        disabled={disabled}
        format={format}
        showTime={showTime}
      />
    </AntFormItem>
  );
}
