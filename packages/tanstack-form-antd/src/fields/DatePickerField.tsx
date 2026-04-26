import React from "react";
import { DatePicker } from "antd";
import type { DatePickerProps } from "antd";
import dayjs, { type Dayjs } from "dayjs";
import { useFieldContext, useFormConfig } from "../form-context";
import { AntFormItem } from "../AntFormItem";
import { ReadonlyDisplay } from "../ReadonlyDisplay";

export interface DatePickerFieldProps {
  /** Form.Item 的 label */
  label?: string;
  /** 是否必填（仅影响 label 显示星号） */
  required?: boolean;
  /** 占位文本 */
  placeholder?: string;
  /** 是否禁用 */
  disabled?: boolean;
  /** 是否只读模式 */
  readonly?: boolean;
  /** 日期格式 */
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
 */
export function DatePickerField({
  label,
  required,
  placeholder,
  disabled,
  readonly,
  format = "YYYY-MM-DD",
  showTime,
  datePickerProps,
}: DatePickerFieldProps) {
  const field = useFieldContext<string>();
  const config = useFormConfig();
  const isReadonly = readonly ?? config.readonly;

  const errors =
    field.state.meta.isTouched && field.state.meta.errors.length > 0
      ? field.state.meta.errors.map((e) => (typeof e === "string" ? e : String(e)))
      : undefined;

  const dayjsValue: Dayjs | null = field.state.value ? dayjs(field.state.value) : null;

  return (
    <AntFormItem label={label} required={!isReadonly && required} errors={errors}>
      {isReadonly ? (
        <ReadonlyDisplay value={field.state.value} placeholder={placeholder} />
      ) : (
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
      )}
    </AntFormItem>
  );
}
