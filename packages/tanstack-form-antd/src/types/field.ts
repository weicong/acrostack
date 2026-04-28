import type { CSSProperties, ComponentProps, ReactElement, ReactNode } from "react";
import { DatePicker, Input, Radio } from "antd";
import type {
  CheckboxProps,
  FormItemProps,
  InputNumberProps,
  InputProps,
  SelectProps,
  SwitchProps,
} from "antd";
import type { TextAreaProps } from "antd/es/input";
import type { FieldValidatorsLike } from "./form";
import type { FormMode, ShowErrorWhen } from "./form";
import type { FieldPath, FieldPathByValue, FieldPathValue } from "./path";

export type RenderPreview<TValue> = (
  value: TValue,
  context: {
    emptyText: ReactNode;
    formattedValue: ReactNode;
  },
) => ReactNode;

export type BaseFieldProps<TValues, TName extends FieldPath<TValues> = FieldPath<TValues>> = {
  name: TName;
  label?: ReactNode;
  required?: boolean;
  mode?: FormMode;
  emptyText?: ReactNode;
  showErrorWhen?: ShowErrorWhen;
  renderPreview?: RenderPreview<FieldPathValue<TValues, TName>>;
  formItemProps?: Omit<
    FormItemProps,
    "children" | "help" | "label" | "name" | "required" | "rules" | "validateStatus"
  >;
  previewClassName?: string;
  previewStyle?: CSSProperties;
  validators?: FieldValidatorsLike<TValues, TName>;
};

type TextFieldName<TValues> = FieldPathByValue<TValues, string | null | undefined>;
type NumberFieldName<TValues> = FieldPathByValue<TValues, number | null | undefined>;
type BooleanFieldName<TValues> = FieldPathByValue<TValues, boolean | undefined>;
type RadioFieldName<TValues> = FieldPathByValue<
  TValues,
  string | number | boolean | null | undefined
>;
type DateFieldName<TValues> = FieldPathByValue<TValues, string | null | undefined>;
type RangeFieldName<TValues> = FieldPathByValue<TValues, [string, string] | null | undefined>;

type PasswordInputProps = ComponentProps<typeof Input.Password>;
type RadioGroupProps = ComponentProps<typeof Radio.Group>;
type SingleDatePickerProps = ComponentProps<typeof DatePicker>;
type RangePickerProps = ComponentProps<typeof DatePicker.RangePicker>;

export type TextFieldProps<
  TValues,
  TName extends TextFieldName<TValues> = TextFieldName<TValues>,
> = BaseFieldProps<TValues, TName> & Omit<InputProps, "name" | "value" | "defaultValue">;

export type TextAreaFieldProps<
  TValues,
  TName extends TextFieldName<TValues> = TextFieldName<TValues>,
> = BaseFieldProps<TValues, TName> & Omit<TextAreaProps, "name" | "value" | "defaultValue">;

export type PasswordFieldProps<
  TValues,
  TName extends TextFieldName<TValues> = TextFieldName<TValues>,
> = BaseFieldProps<TValues, TName> &
  Omit<PasswordInputProps, "name" | "value" | "defaultValue"> & {
    maskPreview?: boolean;
  };

export type NumberFieldProps<
  TValues,
  TName extends NumberFieldName<TValues> = NumberFieldName<TValues>,
> = BaseFieldProps<TValues, TName> & Omit<InputNumberProps, "name" | "value" | "defaultValue">;

export type SelectFieldProps<
  TValues,
  TName extends FieldPath<TValues> = FieldPath<TValues>,
> = BaseFieldProps<TValues, TName> &
  Omit<SelectProps, "name" | "value" | "defaultValue"> & {
    previewSeparator?: string;
  };

export type CheckboxFieldProps<
  TValues,
  TName extends BooleanFieldName<TValues> = BooleanFieldName<TValues>,
> = BaseFieldProps<TValues, TName> &
  Omit<CheckboxProps, "name" | "checked" | "defaultChecked" | "value"> & {
    checkedText?: ReactNode;
    uncheckedText?: ReactNode;
  };

export type SwitchFieldProps<
  TValues,
  TName extends BooleanFieldName<TValues> = BooleanFieldName<TValues>,
> = BaseFieldProps<TValues, TName> &
  Omit<SwitchProps, "name" | "checked" | "defaultChecked" | "value"> & {
    checkedText?: ReactNode;
    uncheckedText?: ReactNode;
  };

export type RadioGroupFieldProps<
  TValues,
  TName extends RadioFieldName<TValues> = RadioFieldName<TValues>,
> = BaseFieldProps<TValues, TName> & Omit<RadioGroupProps, "name" | "value" | "defaultValue">;

export type DatePickerFieldProps<
  TValues,
  TName extends DateFieldName<TValues> = DateFieldName<TValues>,
> = BaseFieldProps<TValues, TName> &
  Omit<SingleDatePickerProps, "name" | "value" | "defaultValue"> & {
    valueFormat?: string;
    emptyValue?: null | undefined | "";
    displayFormat?: string;
  };

export type RangePickerFieldProps<
  TValues,
  TName extends RangeFieldName<TValues> = RangeFieldName<TValues>,
> = BaseFieldProps<TValues, TName> &
  Omit<RangePickerProps, "name" | "value" | "defaultValue"> & {
    valueFormat?: string;
    displayFormat?: string;
    emptyValue?: null | undefined;
    separator?: ReactNode;
  };

export type BoundTextFieldComponent<TValues> = (props: TextFieldProps<TValues>) => ReactElement;
export type BoundTextAreaFieldComponent<TValues> = (
  props: TextAreaFieldProps<TValues>,
) => ReactElement;
export type BoundPasswordFieldComponent<TValues> = (
  props: PasswordFieldProps<TValues>,
) => ReactElement;
export type BoundNumberFieldComponent<TValues> = (props: NumberFieldProps<TValues>) => ReactElement;
export type BoundSelectFieldComponent<TValues> = (props: SelectFieldProps<TValues>) => ReactElement;
export type BoundCheckboxFieldComponent<TValues> = (
  props: CheckboxFieldProps<TValues>,
) => ReactElement;
export type BoundSwitchFieldComponent<TValues> = (props: SwitchFieldProps<TValues>) => ReactElement;
export type BoundRadioGroupFieldComponent<TValues> = (
  props: RadioGroupFieldProps<TValues>,
) => ReactElement;
export type BoundDatePickerFieldComponent<TValues> = (
  props: DatePickerFieldProps<TValues>,
) => ReactElement;
export type BoundRangePickerFieldComponent<TValues> = (
  props: RangePickerFieldProps<TValues>,
) => ReactElement;
