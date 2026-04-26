import React from "react";
import { Input } from "antd";
import type { TextAreaProps } from "antd/es/input";
import { useFieldContext, useFormConfig } from "../form-context";
import { AntFormItem } from "../AntFormItem";
import { ReadonlyDisplay } from "../ReadonlyDisplay";

export interface TextAreaFieldProps {
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
  /** 行数 */
  rows?: number;
  /** 透传给 antd TextArea 的额外属性 */
  textAreaProps?: Omit<
    TextAreaProps,
    "value" | "onChange" | "onBlur" | "placeholder" | "disabled" | "rows"
  >;
}

/**
 * 多行文本输入字段。
 */
export function TextAreaField({
  label,
  required,
  placeholder,
  disabled,
  readonly,
  rows = 4,
  textAreaProps,
}: TextAreaFieldProps) {
  const field = useFieldContext<string>();
  const config = useFormConfig();
  const isReadonly = readonly ?? config.readonly;

  const errors =
    field.state.meta.isTouched && field.state.meta.errors.length > 0
      ? field.state.meta.errors.map((e) => (typeof e === "string" ? e : String(e)))
      : undefined;

  return (
    <AntFormItem label={label} required={!isReadonly && required} errors={errors}>
      {isReadonly ? (
        <ReadonlyDisplay value={field.state.value} placeholder={placeholder} />
      ) : (
        <Input.TextArea
          {...textAreaProps}
          value={field.state.value}
          onChange={(e) => field.handleChange(e.target.value)}
          onBlur={() => field.handleBlur()}
          placeholder={placeholder}
          disabled={disabled}
          rows={rows}
        />
      )}
    </AntFormItem>
  );
}
