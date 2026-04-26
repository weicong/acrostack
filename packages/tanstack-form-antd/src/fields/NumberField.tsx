import React from "react";
import { InputNumber } from "antd";
import type { InputNumberProps } from "antd";
import { useFieldContext, useFormConfig } from "../form-context";
import { AntFormItem } from "../AntFormItem";
import { ReadonlyDisplay } from "../ReadonlyDisplay";

export interface NumberFieldProps {
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
  /** 最小值 */
  min?: number;
  /** 最大值 */
  max?: number;
  /** 步长 */
  step?: number;
  /** 透传给 antd InputNumber 的额外属性 */
  inputNumberProps?: Omit<
    InputNumberProps,
    "value" | "onChange" | "onBlur" | "placeholder" | "disabled" | "min" | "max" | "step"
  >;
}

/**
 * 数字输入字段。
 */
export function NumberField({
  label,
  required,
  placeholder,
  disabled,
  readonly,
  min,
  max,
  step,
  inputNumberProps,
}: NumberFieldProps) {
  const field = useFieldContext<number>();
  const config = useFormConfig();
  const isReadonly = readonly ?? config.readonly;

  const errors =
    field.state.meta.isTouched && field.state.meta.errors.length > 0
      ? field.state.meta.errors.map((e) => (typeof e === "string" ? e : String(e)))
      : undefined;

  return (
    <AntFormItem label={label} required={!isReadonly && required} errors={errors}>
      {isReadonly ? (
        <ReadonlyDisplay type="number" value={field.state.value} placeholder={placeholder} />
      ) : (
        <InputNumber
          {...inputNumberProps}
          style={{ width: "100%", ...inputNumberProps?.style }}
          value={field.state.value}
          onChange={(value) => field.handleChange(value as number)}
          onBlur={() => field.handleBlur()}
          placeholder={placeholder}
          disabled={disabled}
          min={min}
          max={max}
          step={step}
        />
      )}
    </AntFormItem>
  );
}
