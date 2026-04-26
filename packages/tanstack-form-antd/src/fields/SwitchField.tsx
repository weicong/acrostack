import React from "react";
import { Switch } from "antd";
import type { SwitchProps } from "antd";
import { useFieldContext } from "../form-context";
import { AntFormItem } from "../AntFormItem";

export interface SwitchFieldProps {
  label?: string;
  required?: boolean;
  disabled?: boolean;
  /** 选中时的文本 */
  checkedChildren?: React.ReactNode;
  /** 未选中时的文本 */
  unCheckedChildren?: React.ReactNode;
  /** 透传给 antd Switch 的额外属性 */
  switchProps?: Omit<SwitchProps, "checked" | "onChange" | "disabled">;
}

/**
 * 开关字段。
 * 绑定 antd Switch。
 */
export function SwitchField({
  label,
  required,
  disabled,
  checkedChildren,
  unCheckedChildren,
  switchProps,
}: SwitchFieldProps) {
  const field = useFieldContext<boolean>();

  const errors =
    field.state.meta.isTouched && field.state.meta.errors.length > 0
      ? field.state.meta.errors.map((e) => (typeof e === "string" ? e : String(e)))
      : undefined;

  return (
    <AntFormItem label={label} required={required} errors={errors}>
      <Switch
        {...switchProps}
        checked={field.state.value}
        onChange={(checked) => field.handleChange(checked)}
        disabled={disabled}
        checkedChildren={checkedChildren}
        unCheckedChildren={unCheckedChildren}
      />
    </AntFormItem>
  );
}
