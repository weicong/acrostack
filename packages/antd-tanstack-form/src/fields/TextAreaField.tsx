import React from "react";
import { Input } from "antd";
import type { TextAreaProps as AntTextAreaProps } from "antd/es/input";
import { useFieldContext } from "../form-context";
import { AntFormItem } from "../AntFormItem";

export interface TextAreaFieldProps {
  label?: string;
  required?: boolean;
  placeholder?: string;
  disabled?: boolean;
  /** 文本域行数 */
  rows?: number;
  /** 透传给 antd TextArea 的额外属性 */
  textAreaProps?: Omit<
    AntTextAreaProps,
    "value" | "onChange" | "onBlur" | "placeholder" | "disabled" | "rows"
  >;
}

/**
 * 多行文本输入字段。
 * 绑定 antd Input.TextArea。
 */
export function TextAreaField({
  label,
  required,
  placeholder,
  disabled,
  rows = 4,
  textAreaProps,
}: TextAreaFieldProps) {
  const field = useFieldContext<string>();

  const errors =
    field.state.meta.isTouched && field.state.meta.errors.length > 0
      ? field.state.meta.errors.map((e) => (typeof e === "string" ? e : String(e)))
      : undefined;

  return (
    <AntFormItem label={label} required={required} errors={errors}>
      <Input.TextArea
        {...textAreaProps}
        value={field.state.value}
        onChange={(e) => field.handleChange(e.target.value)}
        onBlur={() => field.handleBlur()}
        placeholder={placeholder}
        disabled={disabled}
        rows={rows}
      />
    </AntFormItem>
  );
}
