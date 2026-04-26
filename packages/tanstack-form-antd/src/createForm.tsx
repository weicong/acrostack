import React, { createContext, useContext } from "react";
import { useForm, type DeepKeys, type DeepValue } from "@tanstack/react-form";
import { Form as AntForm, Input, InputNumber, Select, DatePicker, Switch, Button } from "antd";
import type {
  InputProps,
  InputNumberProps,
  SelectProps as AntSelectProps,
  DatePickerProps,
  SwitchProps,
  ButtonProps,
} from "antd";
import type { TextAreaProps as AntTextAreaProps } from "antd/es/input";
import dayjs, { type Dayjs } from "dayjs";
import { AntFormItem } from "./AntFormItem";

// ==================== Type Utilities ====================

/**
 * 提取 TFormValues 中值类型匹配 TValue 的所有深层路径。
 * 例如 FieldKeysForType<{ name: string; age: number }, string> → "name"
 */
export type FieldKeysForType<TFormValues, TValue> = {
  [K in DeepKeys<TFormValues>]: DeepValue<TFormValues, K> extends TValue ? K : never;
}[DeepKeys<TFormValues>];

/**
 * 提取 TFormValues 中值类型为数组的所有深层路径。
 */
export type ArrayFieldKeys<TFormValues> = {
  [K in DeepKeys<TFormValues>]: DeepValue<TFormValues, K> extends Array<any> ? K : never;
}[DeepKeys<TFormValues>];

/** 简化的字段校验器 */
export interface SimpleValidators<TValue> {
  onChange?: (params: { value: TValue }) => string | undefined;
  onBlur?: (params: { value: TValue }) => string | undefined;
  onSubmit?: (params: { value: TValue }) => string | undefined;
}

// ==================== Exported Props Interfaces ====================

export interface CreateFormFormProps<TFormValues> {
  children: React.ReactNode;
  defaultValues: TFormValues;
  onSubmit?: (values: TFormValues) => void | Promise<void>;
  layout?: "horizontal" | "vertical" | "inline";
}

export interface CreateFormTextFieldProps<TFormValues> {
  name: FieldKeysForType<TFormValues, string>;
  label?: string;
  required?: boolean | string;
  placeholder?: string;
  disabled?: boolean;
  validators?: SimpleValidators<string>;
  inputProps?: Omit<InputProps, "value" | "onChange" | "onBlur" | "placeholder" | "disabled">;
}

export interface CreateFormTextAreaFieldProps<TFormValues> {
  name: FieldKeysForType<TFormValues, string>;
  label?: string;
  required?: boolean | string;
  placeholder?: string;
  disabled?: boolean;
  rows?: number;
  validators?: SimpleValidators<string>;
  textAreaProps?: Omit<
    AntTextAreaProps,
    "value" | "onChange" | "onBlur" | "placeholder" | "disabled" | "rows"
  >;
}

export interface CreateFormNumberFieldProps<TFormValues> {
  name: FieldKeysForType<TFormValues, number>;
  label?: string;
  required?: boolean | string;
  placeholder?: string;
  disabled?: boolean;
  min?: number;
  max?: number;
  step?: number;
  validators?: SimpleValidators<number>;
  inputNumberProps?: Omit<
    InputNumberProps,
    "value" | "onChange" | "onBlur" | "placeholder" | "disabled" | "min" | "max" | "step"
  >;
}

export interface CreateFormSelectFieldProps<TFormValues> {
  name: DeepKeys<TFormValues>;
  label?: string;
  required?: boolean | string;
  placeholder?: string;
  disabled?: boolean;
  options?: AntSelectProps["options"];
  mode?: "multiple" | "tags";
  allowClear?: boolean;
  showSearch?: boolean;
  validators?: SimpleValidators<any>;
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

export interface CreateFormDatePickerFieldProps<TFormValues> {
  name: FieldKeysForType<TFormValues, string>;
  label?: string;
  required?: boolean | string;
  placeholder?: string;
  disabled?: boolean;
  format?: string;
  showTime?: boolean;
  validators?: SimpleValidators<string>;
  datePickerProps?: Omit<
    DatePickerProps,
    "value" | "onChange" | "onBlur" | "placeholder" | "disabled" | "format" | "showTime"
  >;
}

export interface CreateFormSwitchFieldProps<TFormValues> {
  name: FieldKeysForType<TFormValues, boolean>;
  label?: string;
  required?: boolean | string;
  disabled?: boolean;
  checkedChildren?: React.ReactNode;
  unCheckedChildren?: React.ReactNode;
  switchProps?: Omit<SwitchProps, "checked" | "onChange" | "disabled">;
}

export interface CreateFormSubmitButtonProps {
  children?: React.ReactNode;
  buttonProps?: Omit<ButtonProps, "type" | "htmlType" | "disabled" | "loading">;
}

export interface CreateFormDependencyProps<TFormValues, TNames extends DeepKeys<TFormValues>[]> {
  name: TNames;
  children: (values: { [K in TNames[number]]: DeepValue<TFormValues, K> }) => React.ReactNode;
}

export interface CreateFormFieldArrayProps<TFormValues> {
  name: ArrayFieldKeys<TFormValues>;
  children: (fieldArray: {
    state: { value: any[] };
    pushValue: (value: any) => void;
    removeValue: (index: number) => void;
    swapValues: (a: number, b: number) => void;
    moveValue: (from: number, to: number) => void;
    insertValue: (index: number, value: any) => void;
    replaceValue: (index: number, value: any) => void;
  }) => React.ReactNode;
}

// ==================== Form Context ====================

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const FormInstanceContext = createContext<any>(null);

function useFormInstance() {
  const form = useContext(FormInstanceContext);
  if (!form) {
    throw new Error("Field components must be used inside <Form> created by createForm()");
  }
  return form;
}

// ==================== Helpers ====================

function getFieldErrors(field: { state: { meta: { isTouched: boolean; errors: unknown[] } } }) {
  return field.state.meta.isTouched && field.state.meta.errors.length > 0
    ? field.state.meta.errors.map((e: unknown) => (typeof e === "string" ? e : String(e)))
    : undefined;
}

function mergeValidators<TValue>(
  required: boolean | string | undefined,
  validators: SimpleValidators<TValue> | undefined,
) {
  const requiredMsg = typeof required === "string" ? required : "此字段为必填项";

  if (!required && !validators) return undefined;

  return {
    onChange: ({ value }: { value: TValue }) => {
      if (required && (value === "" || value === null || value === undefined)) {
        return requiredMsg;
      }
      if (validators?.onChange) return validators.onChange({ value });
      return undefined;
    },
    ...(validators?.onBlur ? { onBlur: validators.onBlur } : {}),
    ...(validators?.onSubmit ? { onSubmit: validators.onSubmit } : {}),
  };
}

// ==================== createForm Factory ====================

/**
 * 创建一套类型安全的 ProForm 风格表单组件。
 *
 * @example
 * ```tsx
 * const { Form, TextField, NumberField, SelectField, SubmitButton } = createForm<UserForm>()
 *
 * <Form defaultValues={{ name: '', age: 0 }} onSubmit={(v) => console.log(v)}>
 *   <TextField name="name" label="姓名" required />
 *   <NumberField name="age" label="年龄" />
 *   <SubmitButton>提交</SubmitButton>
 * </Form>
 * ```
 */
export function createForm<TFormValues>() {
  // -------------------- Form --------------------

  function Form({
    children,
    defaultValues,
    onSubmit,
    layout = "vertical",
  }: CreateFormFormProps<TFormValues>) {
    const form = useForm({
      defaultValues,
      ...(onSubmit
        ? {
            onSubmit: async ({ value }: { value: TFormValues }) => {
              await onSubmit(value);
            },
          }
        : {}),
    } as Parameters<typeof useForm>[0]);

    return (
      <FormInstanceContext.Provider value={form}>
        <AntForm layout={layout} component="form" onFinish={() => form.handleSubmit()}>
          {children}
        </AntForm>
      </FormInstanceContext.Provider>
    );
  }

  // -------------------- TextField --------------------

  function TextField({
    name,
    label,
    required,
    placeholder,
    disabled,
    validators,
    inputProps,
  }: CreateFormTextFieldProps<TFormValues>) {
    const form = useFormInstance();
    const merged = mergeValidators<string>(required, validators);
    return (
      <form.Field name={name} validators={merged}>
        {(field: any) => (
          <AntFormItem label={label} required={!!required} errors={getFieldErrors(field)}>
            <Input
              {...inputProps}
              value={field.state.value}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                field.handleChange(e.target.value)
              }
              onBlur={() => field.handleBlur()}
              placeholder={placeholder}
              disabled={disabled}
            />
          </AntFormItem>
        )}
      </form.Field>
    );
  }

  // -------------------- TextAreaField --------------------

  function TextAreaField({
    name,
    label,
    required,
    placeholder,
    disabled,
    rows = 4,
    validators,
    textAreaProps,
  }: CreateFormTextAreaFieldProps<TFormValues>) {
    const form = useFormInstance();
    const merged = mergeValidators<string>(required, validators);
    return (
      <form.Field name={name} validators={merged}>
        {(field: any) => (
          <AntFormItem label={label} required={!!required} errors={getFieldErrors(field)}>
            <Input.TextArea
              {...textAreaProps}
              value={field.state.value}
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                field.handleChange(e.target.value)
              }
              onBlur={() => field.handleBlur()}
              placeholder={placeholder}
              disabled={disabled}
              rows={rows}
            />
          </AntFormItem>
        )}
      </form.Field>
    );
  }

  // -------------------- NumberField --------------------

  function NumberField({
    name,
    label,
    required,
    placeholder,
    disabled,
    min,
    max,
    step,
    validators,
    inputNumberProps,
  }: CreateFormNumberFieldProps<TFormValues>) {
    const form = useFormInstance();
    const merged = mergeValidators<number>(required, validators);
    return (
      <form.Field name={name} validators={merged}>
        {(field: any) => (
          <AntFormItem label={label} required={!!required} errors={getFieldErrors(field)}>
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
        )}
      </form.Field>
    );
  }

  // -------------------- SelectField --------------------

  function SelectField({
    name,
    label,
    required,
    placeholder,
    disabled,
    options,
    mode,
    allowClear = true,
    showSearch = false,
    validators,
    selectProps,
  }: CreateFormSelectFieldProps<TFormValues>) {
    const form = useFormInstance();
    const merged = mergeValidators(required, validators);
    return (
      <form.Field name={name} validators={merged}>
        {(field: any) => (
          <AntFormItem label={label} required={!!required} errors={getFieldErrors(field)}>
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
          </AntFormItem>
        )}
      </form.Field>
    );
  }

  // -------------------- DatePickerField --------------------

  function DatePickerField({
    name,
    label,
    required,
    placeholder,
    disabled,
    format = "YYYY-MM-DD",
    showTime,
    validators,
    datePickerProps,
  }: CreateFormDatePickerFieldProps<TFormValues>) {
    const form = useFormInstance();
    const merged = mergeValidators<string>(required, validators);
    return (
      <form.Field name={name} validators={merged}>
        {(field: any) => {
          const dayjsValue: Dayjs | null = field.state.value ? dayjs(field.state.value) : null;
          return (
            <AntFormItem label={label} required={!!required} errors={getFieldErrors(field)}>
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
        }}
      </form.Field>
    );
  }

  // -------------------- SwitchField --------------------

  function SwitchField({
    name,
    label,
    required,
    disabled,
    checkedChildren,
    unCheckedChildren,
    switchProps,
  }: CreateFormSwitchFieldProps<TFormValues>) {
    const form = useFormInstance();
    return (
      <form.Field name={name}>
        {(field: any) => (
          <AntFormItem label={label} required={!!required} errors={getFieldErrors(field)}>
            <Switch
              {...switchProps}
              checked={field.state.value}
              onChange={(checked: boolean) => field.handleChange(checked)}
              disabled={disabled}
              checkedChildren={checkedChildren}
              unCheckedChildren={unCheckedChildren}
            />
          </AntFormItem>
        )}
      </form.Field>
    );
  }

  // -------------------- SubmitButton --------------------

  function SubmitButton({ children = "提交", buttonProps }: CreateFormSubmitButtonProps) {
    const form = useFormInstance();
    return (
      <form.Subscribe selector={(state: any) => state.isSubmitting}>
        {(isSubmitting: boolean) => (
          <AntForm.Item>
            <Button
              {...buttonProps}
              type="primary"
              htmlType="submit"
              disabled={isSubmitting}
              loading={isSubmitting}
            >
              {children}
            </Button>
          </AntForm.Item>
        )}
      </form.Subscribe>
    );
  }

  // -------------------- Dependency --------------------

  function Dependency<TNames extends DeepKeys<TFormValues>[]>({
    name: names,
    children,
  }: CreateFormDependencyProps<TFormValues, TNames>) {
    const form = useFormInstance();
    return (
      <form.Subscribe
        selector={(state: any) => {
          const result: Record<string, unknown> = {};
          for (const n of names) {
            const parts = String(n)
              .replace(/\[(\d+)\]/g, ".$1")
              .split(".");
            let val = state.values;
            for (const p of parts) {
              val = val?.[p];
            }
            result[n as string] = val;
          }
          return result;
        }}
      >
        {(values: any) => children(values)}
      </form.Subscribe>
    );
  }

  // -------------------- FieldArray --------------------

  function FieldArray({ name, children }: CreateFormFieldArrayProps<TFormValues>) {
    const form = useFormInstance();
    return (
      <form.Field name={name} mode="array">
        {(field: any) => children(field)}
      </form.Field>
    );
  }

  // ==================== Return ====================

  return {
    Form,
    TextField,
    TextAreaField,
    NumberField,
    SelectField,
    DatePickerField,
    SwitchField,
    SubmitButton,
    Dependency,
    FieldArray,
  };
}
