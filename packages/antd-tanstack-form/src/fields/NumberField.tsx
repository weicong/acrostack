import React from "react";
import { InputNumber } from "antd";
import type { InputNumberProps } from "antd";
import { useFieldContext } from "../form-context";
import { AntFormItem } from "../AntFormItem";

export interface NumberFieldProps {
  label?: string;
  required?: boolean;
  placeholder?: string;
  disabled?: boolean;
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
 * 绑定 antd InputNumber。
 */
export function NumberField({
  label,
  required,
  placeholder,
  disabled,
  min,
  max,
  step,
  inputNumberProps,
}: NumberFieldProps) {
  const field = useFieldContext<number>();

  const errors =
    field.state.meta.isTouched && field.state.meta.errors.length > 0
      ? field.state.meta.errors.map((e) => (typeof e === "string" ? e : String(e)))
      : undefined;

  return (
    <AntFormItem label={label} required={required} errors={errors}>
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
    </AntFormItem>
  );
}
