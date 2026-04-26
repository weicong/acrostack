import React from "react";
import { Select } from "antd";
import type { SelectProps as AntSelectProps } from "antd";
import { useFieldContext, useFormConfig } from "../form-context";
import { AntFormItem } from "../AntFormItem";
import { ReadonlyDisplay } from "../ReadonlyDisplay";

export interface SelectFieldProps {
  label?: string;
  required?: boolean;
  placeholder?: string;
  disabled?: boolean;
  /** 是否只读模式 */
  readonly?: boolean;
  /** 选项列表 */
  options?: AntSelectProps["options"];
  /** 是否支持多选 */
  mode?: "multiple" | "tags";
  /** 是否允许清空 */
  allowClear?: boolean;
  /** 是否支持搜索 */
  showSearch?: boolean;
  /** 透传给 antd Select 的额外属性 */
  selectProps?: Omit<
    AntSelectProps,
    | "value"
    | "onChange"
    | "onBlur"
    | "placeholder"
    | "disabled"
    | "options"
    | "mode"
    | "allowClear"
    | "showSearch"
  >;
}

/**
 * 选择器字段。
 * 绑定 antd Select，支持单选和多选模式。
 */
export function SelectField({
  label,
  required,
  placeholder,
  disabled,
  readonly,
  options,
  mode,
  allowClear = true,
  showSearch = false,
  selectProps,
}: SelectFieldProps) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const field = useFieldContext<any>();
  const config = useFormConfig();
  const isReadonly = readonly ?? config.readonly;

  const errors =
    field.state.meta.isTouched && field.state.meta.errors.length > 0
      ? field.state.meta.errors.map((e: unknown) => (typeof e === "string" ? e : String(e)))
      : undefined;

  return (
    <AntFormItem label={label} required={!isReadonly && required} errors={errors}>
      {isReadonly ? (
        <ReadonlyDisplay
          type="select"
          value={field.state.value}
          options={options}
          placeholder={placeholder}
        />
      ) : (
        <Select
          {...selectProps}
          style={{ width: "100%", ...selectProps?.style }}
          value={field.state.value}
          onChange={(value) => field.handleChange(value)}
          onBlur={() => field.handleBlur()}
          placeholder={placeholder}
          disabled={disabled}
          options={options}
          mode={mode}
          allowClear={allowClear}
          showSearch={showSearch}
        />
      )}
    </AntFormItem>
  );
}
