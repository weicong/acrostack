import React from "react";
import { Switch } from "antd";
import type { SwitchProps } from "antd";
import { useFieldContext, useFormConfig } from "../form-context";
import { AntFormItem } from "../AntFormItem";
import { ReadonlyDisplay } from "../ReadonlyDisplay";

export interface SwitchFieldProps {
  /** Form.Item 的 label */
  label?: string;
  /** 是否必填（仅影响 label 显示星号） */
  required?: boolean;
  /** 是否禁用 */
  disabled?: boolean;
  /** 是否只读模式 */
  readonly?: boolean;
  /** 选中时的文本 */
  checkedChildren?: React.ReactNode;
  /** 未选中时的文本 */
  unCheckedChildren?: React.ReactNode;
  /** 透传给 antd Switch 的额外属性 */
  switchProps?: Omit<SwitchProps, "checked" | "onChange" | "disabled">;
}

/**
 * 开关字段。
 */
export function SwitchField({
  label,
  required,
  disabled,
  readonly,
  checkedChildren,
  unCheckedChildren,
  switchProps,
}: SwitchFieldProps) {
  const field = useFieldContext<boolean>();
  const config = useFormConfig();
  const isReadonly = readonly ?? config.readonly;

  const errors =
    field.state.meta.isTouched && field.state.meta.errors.length > 0
      ? field.state.meta.errors.map((e) => (typeof e === "string" ? e : String(e)))
      : undefined;

  return (
    <AntFormItem label={label} required={!isReadonly && required} errors={errors}>
      {isReadonly ? (
        <ReadonlyDisplay
          type="switch"
          value={field.state.value}
          checkedChildren={checkedChildren}
          unCheckedChildren={unCheckedChildren}
        />
      ) : (
        <Switch
          {...switchProps}
          checked={field.state.value}
          onChange={(checked: boolean) => field.handleChange(checked)}
          disabled={disabled}
          checkedChildren={checkedChildren}
          unCheckedChildren={unCheckedChildren}
        />
      )}
    </AntFormItem>
  );
}
