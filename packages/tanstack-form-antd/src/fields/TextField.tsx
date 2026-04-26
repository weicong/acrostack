import React from "react";
import { Input } from "antd";
import type { InputProps } from "antd";
import { useFieldContext, useFormConfig } from "../form-context";
import { AntFormItem } from "../AntFormItem";
import { ReadonlyDisplay } from "../ReadonlyDisplay";

export interface TextFieldProps {
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
  /** 透传给 antd Input 的额外属性 */
  inputProps?: Omit<InputProps, "value" | "onChange" | "onBlur" | "placeholder" | "disabled">;
}

/**
 * 文本输入字段。
 * 绑定 antd Input，通过 TanStack Form 的 FieldContext 管理状态。
 */
export function TextField({
  label,
  required,
  placeholder,
  disabled,
  readonly,
  inputProps,
}: TextFieldProps) {
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
        <Input
          {...inputProps}
          value={field.state.value}
          onChange={(e) => field.handleChange(e.target.value)}
          onBlur={() => field.handleBlur()}
          placeholder={placeholder}
          disabled={disabled}
        />
      )}
    </AntFormItem>
  );
}
