import {
  AutoComplete,
  Cascader,
  Checkbox,
  ColorPicker,
  DatePicker,
  Input,
  InputNumber,
  Mentions,
  Radio,
  Rate,
  Select,
  Segmented,
  Slider,
  Switch as AntdSwitch,
  TimePicker,
  Transfer,
  TreeSelect,
  Upload,
} from "antd";
import type {
  ButtonProps,
  CheckboxProps,
  FormItemProps,
  FormProps as AntdBaseFormProps,
  InputProps,
} from "antd";
import type {
  DeepKeys,
  DeepValue,
  FieldAsyncValidateOrFn,
  FieldValidateOrFn,
  FormOptions,
  ReactFormExtendedApi,
} from "@tanstack/react-form";
import type { Dayjs } from "dayjs";
import type { ComponentProps, ComponentType, FormEventHandler, Key, ReactNode } from "react";

/**
 * 表单值的基础约束。当前适配层只处理对象形态的表单值。
 */
export type ObjectFormValues = object;

/**
 * 表单整体模式，决定字段和按钮的交互方式。
 */
export type FormMode = "edit" | "view" | "disabled";

/**
 * 错误展示策略，与字段元状态一起决定何时显示错误。
 */
export type ErrorDisplayMode = "always" | "touched" | "dirty" | "submitted";

/**
 * 通过上下文向字段和按钮传递的运行时 UI 配置。
 */
export interface AntdFormContextValue {
  mode: FormMode;
  errorDisplayMode: ErrorDisplayMode;
  disabled?: boolean;
  readonly?: boolean;
}

/**
 * 字段内部会自行控制这些属性，避免外部传入后与适配层行为冲突。
 */
export type SafeFormItemProps = Omit<
  FormItemProps,
  "name" | "rules" | "validateStatus" | "help" | "initialValue" | "dependencies" | "shouldUpdate"
>;

/**
 * 所有字段组件共享的基础展示与模式配置。
 */
export interface BaseFieldProps {
  label?: ReactNode;
  extra?: ReactNode;
  tooltip?: ReactNode;
  required?: boolean;
  formItemProps?: SafeFormItemProps;
  mode?: FormMode;
  errorDisplayMode?: ErrorDisplayMode;
}

type FieldControlProps<TProps, TRemovedKeys extends keyof any = never> = Omit<
  TProps,
  keyof BaseFieldProps | TRemovedKeys
>;

/**
 * 基于 TanStack 的 DeepKeys / DeepValue 建立字段路径和值类型的映射关系。
 */
export type FieldName<TFormValues extends ObjectFormValues> = DeepKeys<TFormValues>;

export type FieldValue<
  TFormValues extends ObjectFormValues,
  TName extends FieldName<TFormValues>,
> = DeepValue<TFormValues, TName>;

/**
 * 按字段值类型反向筛选可用的字段名，供内建字段组件约束 name。
 */
export type FieldNameByValue<TFormValues extends ObjectFormValues, TValue> = {
  [TName in FieldName<TFormValues>]: FieldValue<TFormValues, TName> extends TValue ? TName : never;
}[FieldName<TFormValues>];

export type TextFieldName<TFormValues extends ObjectFormValues> = FieldNameByValue<
  TFormValues,
  string | null | undefined
>;

export type CheckboxFieldName<TFormValues extends ObjectFormValues> = FieldNameByValue<
  TFormValues,
  boolean | null | undefined
>;

export type NumberFieldName<TFormValues extends ObjectFormValues> = FieldNameByValue<
  TFormValues,
  number | null | undefined
>;

export type SelectFieldName<TFormValues extends ObjectFormValues> = FieldNameByValue<
  TFormValues,
  string | number | Array<string | number> | null | undefined
>;

export type RadioGroupFieldName<TFormValues extends ObjectFormValues> = FieldNameByValue<
  TFormValues,
  string | number | boolean | null | undefined
>;

export type DatePickerFieldName<TFormValues extends ObjectFormValues> = FieldNameByValue<
  TFormValues,
  Dayjs | null | undefined
>;

export type CheckboxGroupFieldName<TFormValues extends ObjectFormValues> = FieldNameByValue<
  TFormValues,
  Array<string | number | boolean> | null | undefined
>;

export type TimePickerFieldName<TFormValues extends ObjectFormValues> = FieldNameByValue<
  TFormValues,
  Dayjs | null | undefined
>;

export type RangePickerFieldValue = [Dayjs | null, Dayjs | null];

export type DateRangePickerFieldName<TFormValues extends ObjectFormValues> = FieldNameByValue<
  TFormValues,
  RangePickerFieldValue | null | undefined
>;

export type TimeRangeFieldName<TFormValues extends ObjectFormValues> = FieldNameByValue<
  TFormValues,
  RangePickerFieldValue | null | undefined
>;

export type TreeSelectFieldName<TFormValues extends ObjectFormValues> = FieldNameByValue<
  TFormValues,
  string | number | Array<string | number> | null | undefined
>;

export type CascaderFieldValue =
  | Array<string | number>
  | Array<Array<string | number>>
  | null
  | undefined;

export type CascaderFieldName<TFormValues extends ObjectFormValues> = FieldNameByValue<
  TFormValues,
  CascaderFieldValue
>;

export type TransferFieldValue = Key[];

export type TransferFieldName<TFormValues extends ObjectFormValues> = FieldNameByValue<
  TFormValues,
  TransferFieldValue | null | undefined
>;

type UploadBaseProps = ComponentProps<typeof Upload>;

export type UploadFieldValue = NonNullable<UploadBaseProps["fileList"]>;

export type UploadFieldName<TFormValues extends ObjectFormValues> = FieldNameByValue<
  TFormValues,
  UploadFieldValue | null | undefined
>;

export type AutoCompleteFieldName<TFormValues extends ObjectFormValues> =
  TextFieldName<TFormValues>;

export type MentionsFieldName<TFormValues extends ObjectFormValues> = TextFieldName<TFormValues>;

export type SliderFieldValue = number | [number, number];

export type SliderFieldName<TFormValues extends ObjectFormValues> = FieldNameByValue<
  TFormValues,
  SliderFieldValue | null | undefined
>;

export type RateFieldName<TFormValues extends ObjectFormValues> = NumberFieldName<TFormValues>;

export type ColorPickerFieldName<TFormValues extends ObjectFormValues> = FieldNameByValue<
  TFormValues,
  string | null | undefined
>;

export type OtpFieldName<TFormValues extends ObjectFormValues> = TextFieldName<TFormValues>;

export type SearchFieldName<TFormValues extends ObjectFormValues> = TextFieldName<TFormValues>;

export type DateTimePickerFieldName<TFormValues extends ObjectFormValues> =
  DatePickerFieldName<TFormValues>;

export type MonthPickerFieldName<TFormValues extends ObjectFormValues> =
  DatePickerFieldName<TFormValues>;

export type WeekPickerFieldName<TFormValues extends ObjectFormValues> =
  DatePickerFieldName<TFormValues>;

export type QuarterPickerFieldName<TFormValues extends ObjectFormValues> =
  DatePickerFieldName<TFormValues>;

export type YearPickerFieldName<TFormValues extends ObjectFormValues> =
  DatePickerFieldName<TFormValues>;

export type SegmentedFieldName<TFormValues extends ObjectFormValues> = FieldNameByValue<
  TFormValues,
  string | number | null | undefined
>;

/**
 * 字段级 validators 保持与 TanStack Field 事件签名一致，并根据 name 推导 value。
 */
export type AntdFieldValidators<
  TFormValues extends ObjectFormValues,
  TName extends FieldName<TFormValues>,
> = {
  onMount?: FieldValidateOrFn<TFormValues, TName, FieldValue<TFormValues, TName>>;
  onChange?: FieldValidateOrFn<TFormValues, TName, FieldValue<TFormValues, TName>>;
  onChangeAsync?: FieldAsyncValidateOrFn<TFormValues, TName, FieldValue<TFormValues, TName>>;
  onBlur?: FieldValidateOrFn<TFormValues, TName, FieldValue<TFormValues, TName>>;
  onBlurAsync?: FieldAsyncValidateOrFn<TFormValues, TName, FieldValue<TFormValues, TName>>;
  onSubmit?: FieldValidateOrFn<TFormValues, TName, FieldValue<TFormValues, TName>>;
  onSubmitAsync?: FieldAsyncValidateOrFn<TFormValues, TName, FieldValue<TFormValues, TName>>;
  onDynamic?: FieldValidateOrFn<TFormValues, TName, FieldValue<TFormValues, TName>>;
  onDynamicAsync?: FieldAsyncValidateOrFn<TFormValues, TName, FieldValue<TFormValues, TName>>;
  onChangeListenTo?: FieldName<TFormValues>[];
  onBlurListenTo?: FieldName<TFormValues>[];
};

/**
 * Form 组件是对 Ant Design Form 的包装，因此需要屏蔽由适配层接管的提交流程。
 */
export interface AntdFormProps extends Omit<AntdBaseFormProps, "form" | "onFinish" | "onSubmit"> {
  children?: ReactNode;
  mode?: FormMode;
  errorDisplayMode?: ErrorDisplayMode;
  onSubmit?: FormEventHandler<HTMLFormElement>;
}

/**
 * TextField 只允许绑定字符串类字段。
 */
export interface TextFieldProps<
  TFormValues extends ObjectFormValues,
  TName extends TextFieldName<TFormValues> = TextFieldName<TFormValues>,
>
  extends
    BaseFieldProps,
    FieldControlProps<InputProps, "name" | "value" | "defaultValue" | "onChange" | "onBlur"> {
  name: TName;
  validators?: AntdFieldValidators<TFormValues, TName>;
  disabled?: boolean;
  readOnly?: boolean;
}

/**
 * CheckboxField 只允许绑定布尔类字段。
 */
export interface CheckboxFieldProps<
  TFormValues extends ObjectFormValues,
  TName extends CheckboxFieldName<TFormValues> = CheckboxFieldName<TFormValues>,
>
  extends
    BaseFieldProps,
    FieldControlProps<
      CheckboxProps,
      "name" | "checked" | "defaultChecked" | "onChange" | "onBlur"
    > {
  name: TName;
  validators?: AntdFieldValidators<TFormValues, TName>;
  children?: ReactNode;
  disabled?: boolean;
}

export interface TextAreaFieldProps<
  TFormValues extends ObjectFormValues,
  TName extends TextFieldName<TFormValues> = TextFieldName<TFormValues>,
>
  extends
    BaseFieldProps,
    FieldControlProps<
      ComponentProps<typeof Input.TextArea>,
      "name" | "value" | "defaultValue" | "onChange" | "onBlur"
    > {
  name: TName;
  validators?: AntdFieldValidators<TFormValues, TName>;
  disabled?: boolean;
  readOnly?: boolean;
}

export interface PasswordFieldProps<
  TFormValues extends ObjectFormValues,
  TName extends TextFieldName<TFormValues> = TextFieldName<TFormValues>,
>
  extends
    BaseFieldProps,
    FieldControlProps<
      ComponentProps<typeof Input.Password>,
      "name" | "value" | "defaultValue" | "onChange" | "onBlur"
    > {
  name: TName;
  validators?: AntdFieldValidators<TFormValues, TName>;
  disabled?: boolean;
  readOnly?: boolean;
}

export interface NumberFieldProps<
  TFormValues extends ObjectFormValues,
  TName extends NumberFieldName<TFormValues> = NumberFieldName<TFormValues>,
>
  extends
    BaseFieldProps,
    FieldControlProps<
      ComponentProps<typeof InputNumber>,
      "name" | "value" | "defaultValue" | "onChange" | "onBlur"
    > {
  name: TName;
  validators?: AntdFieldValidators<TFormValues, TName>;
  disabled?: boolean;
  readOnly?: boolean;
}

export interface SelectFieldProps<
  TFormValues extends ObjectFormValues,
  TName extends SelectFieldName<TFormValues> = SelectFieldName<TFormValues>,
>
  extends
    BaseFieldProps,
    FieldControlProps<
      ComponentProps<typeof Select>,
      "value" | "defaultValue" | "onChange" | "onBlur"
    > {
  name: TName;
  validators?: AntdFieldValidators<TFormValues, TName>;
  disabled?: boolean;
}

export interface SwitchFieldProps<
  TFormValues extends ObjectFormValues,
  TName extends CheckboxFieldName<TFormValues> = CheckboxFieldName<TFormValues>,
>
  extends
    BaseFieldProps,
    FieldControlProps<
      ComponentProps<typeof AntdSwitch>,
      "checked" | "defaultChecked" | "onChange" | "onBlur"
    > {
  name: TName;
  validators?: AntdFieldValidators<TFormValues, TName>;
  disabled?: boolean;
}

export interface RadioGroupFieldProps<
  TFormValues extends ObjectFormValues,
  TName extends RadioGroupFieldName<TFormValues> = RadioGroupFieldName<TFormValues>,
>
  extends
    BaseFieldProps,
    FieldControlProps<
      ComponentProps<typeof Radio.Group>,
      "name" | "value" | "defaultValue" | "onChange" | "onBlur"
    > {
  name: TName;
  validators?: AntdFieldValidators<TFormValues, TName>;
  disabled?: boolean;
}

export interface DatePickerFieldProps<
  TFormValues extends ObjectFormValues,
  TName extends DatePickerFieldName<TFormValues> = DatePickerFieldName<TFormValues>,
>
  extends
    BaseFieldProps,
    FieldControlProps<
      ComponentProps<typeof DatePicker>,
      "value" | "defaultValue" | "onChange" | "onBlur"
    > {
  name: TName;
  validators?: AntdFieldValidators<TFormValues, TName>;
  disabled?: boolean;
}

export interface UploadFieldProps<
  TFormValues extends ObjectFormValues,
  TName extends UploadFieldName<TFormValues> = UploadFieldName<TFormValues>,
>
  extends
    BaseFieldProps,
    FieldControlProps<UploadBaseProps, "fileList" | "defaultFileList" | "onChange"> {
  name: TName;
  validators?: AntdFieldValidators<TFormValues, TName>;
  disabled?: boolean;
}

export interface CheckboxGroupFieldProps<
  TFormValues extends ObjectFormValues,
  TName extends CheckboxGroupFieldName<TFormValues> = CheckboxGroupFieldName<TFormValues>,
>
  extends
    BaseFieldProps,
    FieldControlProps<
      ComponentProps<typeof Checkbox.Group>,
      "name" | "value" | "defaultValue" | "onChange" | "onBlur"
    > {
  name: TName;
  validators?: AntdFieldValidators<TFormValues, TName>;
  disabled?: boolean;
}

export interface TimePickerFieldProps<
  TFormValues extends ObjectFormValues,
  TName extends TimePickerFieldName<TFormValues> = TimePickerFieldName<TFormValues>,
>
  extends
    BaseFieldProps,
    FieldControlProps<
      ComponentProps<typeof TimePicker>,
      "value" | "defaultValue" | "onChange" | "onBlur"
    > {
  name: TName;
  validators?: AntdFieldValidators<TFormValues, TName>;
  disabled?: boolean;
}

export interface DateRangePickerFieldProps<
  TFormValues extends ObjectFormValues,
  TName extends DateRangePickerFieldName<TFormValues> = DateRangePickerFieldName<TFormValues>,
>
  extends
    BaseFieldProps,
    FieldControlProps<
      ComponentProps<typeof DatePicker.RangePicker>,
      "value" | "defaultValue" | "onChange" | "onBlur"
    > {
  name: TName;
  validators?: AntdFieldValidators<TFormValues, TName>;
  disabled?: boolean;
}

export interface TimeRangeFieldProps<
  TFormValues extends ObjectFormValues,
  TName extends TimeRangeFieldName<TFormValues> = TimeRangeFieldName<TFormValues>,
>
  extends
    BaseFieldProps,
    FieldControlProps<
      ComponentProps<typeof TimePicker.RangePicker>,
      "value" | "defaultValue" | "onChange" | "onBlur"
    > {
  name: TName;
  validators?: AntdFieldValidators<TFormValues, TName>;
  disabled?: boolean;
}

export interface TreeSelectFieldProps<
  TFormValues extends ObjectFormValues,
  TName extends TreeSelectFieldName<TFormValues> = TreeSelectFieldName<TFormValues>,
>
  extends
    BaseFieldProps,
    FieldControlProps<
      ComponentProps<typeof TreeSelect>,
      "value" | "defaultValue" | "onChange" | "onBlur"
    > {
  name: TName;
  validators?: AntdFieldValidators<TFormValues, TName>;
  disabled?: boolean;
}

export interface CascaderFieldProps<
  TFormValues extends ObjectFormValues,
  TName extends CascaderFieldName<TFormValues> = CascaderFieldName<TFormValues>,
>
  extends
    BaseFieldProps,
    FieldControlProps<
      ComponentProps<typeof Cascader>,
      "value" | "defaultValue" | "onChange" | "onBlur"
    > {
  name: TName;
  validators?: AntdFieldValidators<TFormValues, TName>;
  disabled?: boolean;
}

export interface TransferFieldProps<
  TFormValues extends ObjectFormValues,
  TName extends TransferFieldName<TFormValues> = TransferFieldName<TFormValues>,
>
  extends
    BaseFieldProps,
    FieldControlProps<ComponentProps<typeof Transfer>, "targetKeys" | "onChange"> {
  name: TName;
  validators?: AntdFieldValidators<TFormValues, TName>;
  disabled?: boolean;
}

export interface AutoCompleteFieldProps<
  TFormValues extends ObjectFormValues,
  TName extends AutoCompleteFieldName<TFormValues> = AutoCompleteFieldName<TFormValues>,
>
  extends
    BaseFieldProps,
    FieldControlProps<
      ComponentProps<typeof AutoComplete>,
      "value" | "defaultValue" | "onChange" | "onBlur"
    > {
  name: TName;
  validators?: AntdFieldValidators<TFormValues, TName>;
  disabled?: boolean;
}

export interface MentionsFieldProps<
  TFormValues extends ObjectFormValues,
  TName extends MentionsFieldName<TFormValues> = MentionsFieldName<TFormValues>,
>
  extends
    BaseFieldProps,
    FieldControlProps<
      ComponentProps<typeof Mentions>,
      "value" | "defaultValue" | "onChange" | "onBlur"
    > {
  name: TName;
  validators?: AntdFieldValidators<TFormValues, TName>;
  disabled?: boolean;
  readOnly?: boolean;
}

export interface SliderFieldProps<
  TFormValues extends ObjectFormValues,
  TName extends SliderFieldName<TFormValues> = SliderFieldName<TFormValues>,
>
  extends
    BaseFieldProps,
    FieldControlProps<ComponentProps<typeof Slider>, "value" | "defaultValue" | "onChange"> {
  name: TName;
  validators?: AntdFieldValidators<TFormValues, TName>;
  disabled?: boolean;
}

export interface RateFieldProps<
  TFormValues extends ObjectFormValues,
  TName extends RateFieldName<TFormValues> = RateFieldName<TFormValues>,
>
  extends
    BaseFieldProps,
    FieldControlProps<ComponentProps<typeof Rate>, "value" | "defaultValue" | "onChange"> {
  name: TName;
  validators?: AntdFieldValidators<TFormValues, TName>;
  disabled?: boolean;
}

export interface ColorPickerFieldProps<
  TFormValues extends ObjectFormValues,
  TName extends ColorPickerFieldName<TFormValues> = ColorPickerFieldName<TFormValues>,
>
  extends
    BaseFieldProps,
    FieldControlProps<
      ComponentProps<typeof ColorPicker>,
      "value" | "defaultValue" | "onChange" | "onChangeComplete"
    > {
  name: TName;
  validators?: AntdFieldValidators<TFormValues, TName>;
  disabled?: boolean;
}

export interface OtpFieldProps<
  TFormValues extends ObjectFormValues,
  TName extends OtpFieldName<TFormValues> = OtpFieldName<TFormValues>,
>
  extends
    BaseFieldProps,
    FieldControlProps<
      ComponentProps<typeof Input.OTP>,
      "value" | "defaultValue" | "onChange" | "onBlur"
    > {
  name: TName;
  validators?: AntdFieldValidators<TFormValues, TName>;
  disabled?: boolean;
}

export interface SearchFieldProps<
  TFormValues extends ObjectFormValues,
  TName extends SearchFieldName<TFormValues> = SearchFieldName<TFormValues>,
>
  extends
    BaseFieldProps,
    FieldControlProps<
      ComponentProps<typeof Input.Search>,
      "value" | "defaultValue" | "onChange" | "onBlur"
    > {
  name: TName;
  validators?: AntdFieldValidators<TFormValues, TName>;
  disabled?: boolean;
  readOnly?: boolean;
}

export interface DateTimePickerFieldProps<
  TFormValues extends ObjectFormValues,
  TName extends DateTimePickerFieldName<TFormValues> = DateTimePickerFieldName<TFormValues>,
>
  extends
    BaseFieldProps,
    FieldControlProps<
      ComponentProps<typeof DatePicker>,
      "value" | "defaultValue" | "onChange" | "onBlur" | "picker" | "showTime"
    > {
  name: TName;
  validators?: AntdFieldValidators<TFormValues, TName>;
  disabled?: boolean;
}

export interface MonthPickerFieldProps<
  TFormValues extends ObjectFormValues,
  TName extends MonthPickerFieldName<TFormValues> = MonthPickerFieldName<TFormValues>,
>
  extends
    BaseFieldProps,
    FieldControlProps<
      ComponentProps<typeof DatePicker>,
      "value" | "defaultValue" | "onChange" | "onBlur" | "picker"
    > {
  name: TName;
  validators?: AntdFieldValidators<TFormValues, TName>;
  disabled?: boolean;
}

export interface WeekPickerFieldProps<
  TFormValues extends ObjectFormValues,
  TName extends WeekPickerFieldName<TFormValues> = WeekPickerFieldName<TFormValues>,
>
  extends
    BaseFieldProps,
    FieldControlProps<
      ComponentProps<typeof DatePicker>,
      "value" | "defaultValue" | "onChange" | "onBlur" | "picker"
    > {
  name: TName;
  validators?: AntdFieldValidators<TFormValues, TName>;
  disabled?: boolean;
}

export interface QuarterPickerFieldProps<
  TFormValues extends ObjectFormValues,
  TName extends QuarterPickerFieldName<TFormValues> = QuarterPickerFieldName<TFormValues>,
>
  extends
    BaseFieldProps,
    FieldControlProps<
      ComponentProps<typeof DatePicker>,
      "value" | "defaultValue" | "onChange" | "onBlur" | "picker"
    > {
  name: TName;
  validators?: AntdFieldValidators<TFormValues, TName>;
  disabled?: boolean;
}

export interface YearPickerFieldProps<
  TFormValues extends ObjectFormValues,
  TName extends YearPickerFieldName<TFormValues> = YearPickerFieldName<TFormValues>,
>
  extends
    BaseFieldProps,
    FieldControlProps<
      ComponentProps<typeof DatePicker>,
      "value" | "defaultValue" | "onChange" | "onBlur" | "picker"
    > {
  name: TName;
  validators?: AntdFieldValidators<TFormValues, TName>;
  disabled?: boolean;
}

export interface SegmentedFieldProps<
  TFormValues extends ObjectFormValues,
  TName extends SegmentedFieldName<TFormValues> = SegmentedFieldName<TFormValues>,
>
  extends
    BaseFieldProps,
    FieldControlProps<ComponentProps<typeof Segmented>, "value" | "defaultValue" | "onChange"> {
  name: TName;
  validators?: AntdFieldValidators<TFormValues, TName>;
  disabled?: boolean;
}

/**
 * 提交按钮额外支持“提交时自动 loading”。
 */
export interface SubmitButtonProps extends ButtonProps {
  loadingWhenSubmitting?: boolean;
}

export interface ResetButtonProps extends ButtonProps {}

/**
 * 为了避免在多处重复书写 12 个泛型参数，这里把当前适配层使用的 TanStack Form API 预绑定一次。
 * 该类型表示已经挂载了 AntD UI 组件能力的表单 API 基础形态。
 */
type BaseFormApi<TFormValues extends ObjectFormValues = ObjectFormValues> = ReactFormExtendedApi<
  TFormValues,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined
>;

/**
 * 与上面的 API 类型保持一致，统一约束 useAntdForm 当前接收的 TanStack options 形态。
 */
export type AntdFormOptions<TFormValues extends ObjectFormValues = ObjectFormValues> = FormOptions<
  TFormValues,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined
>;

/**
 * 可调用的字段组件签名。保留这一层是为了让 JSX 使用时保持 name 与 validators 的类型关联。
 */
export type TextFieldComponent<TFormValues extends ObjectFormValues> = <
  TName extends TextFieldName<TFormValues>,
>(
  props: TextFieldProps<TFormValues, TName>,
) => ReactNode;

/**
 * 组件 props 联合分发，确保具体 name 会把对应 value 类型一路带进 validators。
 */
export type TextFieldComponentProps<TFormValues extends ObjectFormValues> = {
  [TName in TextFieldName<TFormValues>]: TextFieldProps<TFormValues, TName>;
}[TextFieldName<TFormValues>];

export type CheckboxFieldComponentProps<TFormValues extends ObjectFormValues> = {
  [TName in CheckboxFieldName<TFormValues>]: CheckboxFieldProps<TFormValues, TName>;
}[CheckboxFieldName<TFormValues>];

export type TextAreaFieldComponentProps<TFormValues extends ObjectFormValues> = {
  [TName in TextFieldName<TFormValues>]: TextAreaFieldProps<TFormValues, TName>;
}[TextFieldName<TFormValues>];

export type PasswordFieldComponentProps<TFormValues extends ObjectFormValues> = {
  [TName in TextFieldName<TFormValues>]: PasswordFieldProps<TFormValues, TName>;
}[TextFieldName<TFormValues>];

export type NumberFieldComponentProps<TFormValues extends ObjectFormValues> = {
  [TName in NumberFieldName<TFormValues>]: NumberFieldProps<TFormValues, TName>;
}[NumberFieldName<TFormValues>];

export type SelectFieldComponentProps<TFormValues extends ObjectFormValues> = {
  [TName in SelectFieldName<TFormValues>]: SelectFieldProps<TFormValues, TName>;
}[SelectFieldName<TFormValues>];

export type SwitchFieldComponentProps<TFormValues extends ObjectFormValues> = {
  [TName in CheckboxFieldName<TFormValues>]: SwitchFieldProps<TFormValues, TName>;
}[CheckboxFieldName<TFormValues>];

export type RadioGroupFieldComponentProps<TFormValues extends ObjectFormValues> = {
  [TName in RadioGroupFieldName<TFormValues>]: RadioGroupFieldProps<TFormValues, TName>;
}[RadioGroupFieldName<TFormValues>];

export type DatePickerFieldComponentProps<TFormValues extends ObjectFormValues> = {
  [TName in DatePickerFieldName<TFormValues>]: DatePickerFieldProps<TFormValues, TName>;
}[DatePickerFieldName<TFormValues>];

export type UploadFieldComponentProps<TFormValues extends ObjectFormValues> = {
  [TName in UploadFieldName<TFormValues>]: UploadFieldProps<TFormValues, TName>;
}[UploadFieldName<TFormValues>];

export type CheckboxGroupFieldComponentProps<TFormValues extends ObjectFormValues> = {
  [TName in CheckboxGroupFieldName<TFormValues>]: CheckboxGroupFieldProps<TFormValues, TName>;
}[CheckboxGroupFieldName<TFormValues>];

export type TimePickerFieldComponentProps<TFormValues extends ObjectFormValues> = {
  [TName in TimePickerFieldName<TFormValues>]: TimePickerFieldProps<TFormValues, TName>;
}[TimePickerFieldName<TFormValues>];

export type DateRangePickerFieldComponentProps<TFormValues extends ObjectFormValues> = {
  [TName in DateRangePickerFieldName<TFormValues>]: DateRangePickerFieldProps<TFormValues, TName>;
}[DateRangePickerFieldName<TFormValues>];

export type TimeRangeFieldComponentProps<TFormValues extends ObjectFormValues> = {
  [TName in TimeRangeFieldName<TFormValues>]: TimeRangeFieldProps<TFormValues, TName>;
}[TimeRangeFieldName<TFormValues>];

export type TreeSelectFieldComponentProps<TFormValues extends ObjectFormValues> = {
  [TName in TreeSelectFieldName<TFormValues>]: TreeSelectFieldProps<TFormValues, TName>;
}[TreeSelectFieldName<TFormValues>];

export type CascaderFieldComponentProps<TFormValues extends ObjectFormValues> = {
  [TName in CascaderFieldName<TFormValues>]: CascaderFieldProps<TFormValues, TName>;
}[CascaderFieldName<TFormValues>];

export type TransferFieldComponentProps<TFormValues extends ObjectFormValues> = {
  [TName in TransferFieldName<TFormValues>]: TransferFieldProps<TFormValues, TName>;
}[TransferFieldName<TFormValues>];

export type AutoCompleteFieldComponentProps<TFormValues extends ObjectFormValues> = {
  [TName in AutoCompleteFieldName<TFormValues>]: AutoCompleteFieldProps<TFormValues, TName>;
}[AutoCompleteFieldName<TFormValues>];

export type MentionsFieldComponentProps<TFormValues extends ObjectFormValues> = {
  [TName in MentionsFieldName<TFormValues>]: MentionsFieldProps<TFormValues, TName>;
}[MentionsFieldName<TFormValues>];

export type SliderFieldComponentProps<TFormValues extends ObjectFormValues> = {
  [TName in SliderFieldName<TFormValues>]: SliderFieldProps<TFormValues, TName>;
}[SliderFieldName<TFormValues>];

export type RateFieldComponentProps<TFormValues extends ObjectFormValues> = {
  [TName in RateFieldName<TFormValues>]: RateFieldProps<TFormValues, TName>;
}[RateFieldName<TFormValues>];

export type ColorPickerFieldComponentProps<TFormValues extends ObjectFormValues> = {
  [TName in ColorPickerFieldName<TFormValues>]: ColorPickerFieldProps<TFormValues, TName>;
}[ColorPickerFieldName<TFormValues>];

export type OtpFieldComponentProps<TFormValues extends ObjectFormValues> = {
  [TName in OtpFieldName<TFormValues>]: OtpFieldProps<TFormValues, TName>;
}[OtpFieldName<TFormValues>];

export type SearchFieldComponentProps<TFormValues extends ObjectFormValues> = {
  [TName in SearchFieldName<TFormValues>]: SearchFieldProps<TFormValues, TName>;
}[SearchFieldName<TFormValues>];

export type DateTimePickerFieldComponentProps<TFormValues extends ObjectFormValues> = {
  [TName in DateTimePickerFieldName<TFormValues>]: DateTimePickerFieldProps<TFormValues, TName>;
}[DateTimePickerFieldName<TFormValues>];

export type MonthPickerFieldComponentProps<TFormValues extends ObjectFormValues> = {
  [TName in MonthPickerFieldName<TFormValues>]: MonthPickerFieldProps<TFormValues, TName>;
}[MonthPickerFieldName<TFormValues>];

export type WeekPickerFieldComponentProps<TFormValues extends ObjectFormValues> = {
  [TName in WeekPickerFieldName<TFormValues>]: WeekPickerFieldProps<TFormValues, TName>;
}[WeekPickerFieldName<TFormValues>];

export type QuarterPickerFieldComponentProps<TFormValues extends ObjectFormValues> = {
  [TName in QuarterPickerFieldName<TFormValues>]: QuarterPickerFieldProps<TFormValues, TName>;
}[QuarterPickerFieldName<TFormValues>];

export type YearPickerFieldComponentProps<TFormValues extends ObjectFormValues> = {
  [TName in YearPickerFieldName<TFormValues>]: YearPickerFieldProps<TFormValues, TName>;
}[YearPickerFieldName<TFormValues>];

export type SegmentedFieldComponentProps<TFormValues extends ObjectFormValues> = {
  [TName in SegmentedFieldName<TFormValues>]: SegmentedFieldProps<TFormValues, TName>;
}[SegmentedFieldName<TFormValues>];

export type CheckboxFieldComponent<TFormValues extends ObjectFormValues> = <
  TName extends CheckboxFieldName<TFormValues>,
>(
  props: CheckboxFieldProps<TFormValues, TName>,
) => ReactNode;

export type TypedTextFieldComponent<TFormValues extends ObjectFormValues> = (
  props: TextFieldComponentProps<TFormValues>,
) => ReactNode;

export type TypedTextAreaFieldComponent<TFormValues extends ObjectFormValues> = (
  props: TextAreaFieldComponentProps<TFormValues>,
) => ReactNode;

export type TypedPasswordFieldComponent<TFormValues extends ObjectFormValues> = (
  props: PasswordFieldComponentProps<TFormValues>,
) => ReactNode;

export type NumberFieldComponent<TFormValues extends ObjectFormValues> = <
  TName extends NumberFieldName<TFormValues>,
>(
  props: NumberFieldProps<TFormValues, TName>,
) => ReactNode;

export type TypedNumberFieldComponent<TFormValues extends ObjectFormValues> = (
  props: NumberFieldComponentProps<TFormValues>,
) => ReactNode;

export type SelectFieldComponent<TFormValues extends ObjectFormValues> = <
  TName extends SelectFieldName<TFormValues>,
>(
  props: SelectFieldProps<TFormValues, TName>,
) => ReactNode;

export type TypedSelectFieldComponent<TFormValues extends ObjectFormValues> = (
  props: SelectFieldComponentProps<TFormValues>,
) => ReactNode;

export type SwitchFieldComponent<TFormValues extends ObjectFormValues> = <
  TName extends CheckboxFieldName<TFormValues>,
>(
  props: SwitchFieldProps<TFormValues, TName>,
) => ReactNode;

export type TypedSwitchFieldComponent<TFormValues extends ObjectFormValues> = (
  props: SwitchFieldComponentProps<TFormValues>,
) => ReactNode;

export type RadioGroupFieldComponent<TFormValues extends ObjectFormValues> = <
  TName extends RadioGroupFieldName<TFormValues>,
>(
  props: RadioGroupFieldProps<TFormValues, TName>,
) => ReactNode;

export type TypedRadioGroupFieldComponent<TFormValues extends ObjectFormValues> = (
  props: RadioGroupFieldComponentProps<TFormValues>,
) => ReactNode;

export type DatePickerFieldComponent<TFormValues extends ObjectFormValues> = <
  TName extends DatePickerFieldName<TFormValues>,
>(
  props: DatePickerFieldProps<TFormValues, TName>,
) => ReactNode;

export type TypedDatePickerFieldComponent<TFormValues extends ObjectFormValues> = (
  props: DatePickerFieldComponentProps<TFormValues>,
) => ReactNode;

export type UploadFieldComponent<TFormValues extends ObjectFormValues> = <
  TName extends UploadFieldName<TFormValues>,
>(
  props: UploadFieldProps<TFormValues, TName>,
) => ReactNode;

export type TypedUploadFieldComponent<TFormValues extends ObjectFormValues> = (
  props: UploadFieldComponentProps<TFormValues>,
) => ReactNode;

export type CheckboxGroupFieldComponent<TFormValues extends ObjectFormValues> = <
  TName extends CheckboxGroupFieldName<TFormValues>,
>(
  props: CheckboxGroupFieldProps<TFormValues, TName>,
) => ReactNode;

export type TypedCheckboxGroupFieldComponent<TFormValues extends ObjectFormValues> = (
  props: CheckboxGroupFieldComponentProps<TFormValues>,
) => ReactNode;

export type TimePickerFieldComponent<TFormValues extends ObjectFormValues> = <
  TName extends TimePickerFieldName<TFormValues>,
>(
  props: TimePickerFieldProps<TFormValues, TName>,
) => ReactNode;

export type TypedTimePickerFieldComponent<TFormValues extends ObjectFormValues> = (
  props: TimePickerFieldComponentProps<TFormValues>,
) => ReactNode;

export type DateRangePickerFieldComponent<TFormValues extends ObjectFormValues> = <
  TName extends DateRangePickerFieldName<TFormValues>,
>(
  props: DateRangePickerFieldProps<TFormValues, TName>,
) => ReactNode;

export type TypedDateRangePickerFieldComponent<TFormValues extends ObjectFormValues> = (
  props: DateRangePickerFieldComponentProps<TFormValues>,
) => ReactNode;

export type TimeRangeFieldComponent<TFormValues extends ObjectFormValues> = <
  TName extends TimeRangeFieldName<TFormValues>,
>(
  props: TimeRangeFieldProps<TFormValues, TName>,
) => ReactNode;

export type TypedTimeRangeFieldComponent<TFormValues extends ObjectFormValues> = (
  props: TimeRangeFieldComponentProps<TFormValues>,
) => ReactNode;

export type TreeSelectFieldComponent<TFormValues extends ObjectFormValues> = <
  TName extends TreeSelectFieldName<TFormValues>,
>(
  props: TreeSelectFieldProps<TFormValues, TName>,
) => ReactNode;

export type TypedTreeSelectFieldComponent<TFormValues extends ObjectFormValues> = (
  props: TreeSelectFieldComponentProps<TFormValues>,
) => ReactNode;

export type CascaderFieldComponent<TFormValues extends ObjectFormValues> = <
  TName extends CascaderFieldName<TFormValues>,
>(
  props: CascaderFieldProps<TFormValues, TName>,
) => ReactNode;

export type TypedCascaderFieldComponent<TFormValues extends ObjectFormValues> = (
  props: CascaderFieldComponentProps<TFormValues>,
) => ReactNode;

export type TransferFieldComponent<TFormValues extends ObjectFormValues> = <
  TName extends TransferFieldName<TFormValues>,
>(
  props: TransferFieldProps<TFormValues, TName>,
) => ReactNode;

export type TypedTransferFieldComponent<TFormValues extends ObjectFormValues> = (
  props: TransferFieldComponentProps<TFormValues>,
) => ReactNode;

export type AutoCompleteFieldComponent<TFormValues extends ObjectFormValues> = <
  TName extends AutoCompleteFieldName<TFormValues>,
>(
  props: AutoCompleteFieldProps<TFormValues, TName>,
) => ReactNode;

export type TypedAutoCompleteFieldComponent<TFormValues extends ObjectFormValues> = (
  props: AutoCompleteFieldComponentProps<TFormValues>,
) => ReactNode;

export type MentionsFieldComponent<TFormValues extends ObjectFormValues> = <
  TName extends MentionsFieldName<TFormValues>,
>(
  props: MentionsFieldProps<TFormValues, TName>,
) => ReactNode;

export type TypedMentionsFieldComponent<TFormValues extends ObjectFormValues> = (
  props: MentionsFieldComponentProps<TFormValues>,
) => ReactNode;

export type SliderFieldComponent<TFormValues extends ObjectFormValues> = <
  TName extends SliderFieldName<TFormValues>,
>(
  props: SliderFieldProps<TFormValues, TName>,
) => ReactNode;

export type TypedSliderFieldComponent<TFormValues extends ObjectFormValues> = (
  props: SliderFieldComponentProps<TFormValues>,
) => ReactNode;

export type RateFieldComponent<TFormValues extends ObjectFormValues> = <
  TName extends RateFieldName<TFormValues>,
>(
  props: RateFieldProps<TFormValues, TName>,
) => ReactNode;

export type TypedRateFieldComponent<TFormValues extends ObjectFormValues> = (
  props: RateFieldComponentProps<TFormValues>,
) => ReactNode;

export type ColorPickerFieldComponent<TFormValues extends ObjectFormValues> = <
  TName extends ColorPickerFieldName<TFormValues>,
>(
  props: ColorPickerFieldProps<TFormValues, TName>,
) => ReactNode;

export type TypedColorPickerFieldComponent<TFormValues extends ObjectFormValues> = (
  props: ColorPickerFieldComponentProps<TFormValues>,
) => ReactNode;

export type OtpFieldComponent<TFormValues extends ObjectFormValues> = <
  TName extends OtpFieldName<TFormValues>,
>(
  props: OtpFieldProps<TFormValues, TName>,
) => ReactNode;

export type TypedOtpFieldComponent<TFormValues extends ObjectFormValues> = (
  props: OtpFieldComponentProps<TFormValues>,
) => ReactNode;

export type SearchFieldComponent<TFormValues extends ObjectFormValues> = <
  TName extends SearchFieldName<TFormValues>,
>(
  props: SearchFieldProps<TFormValues, TName>,
) => ReactNode;

export type TypedSearchFieldComponent<TFormValues extends ObjectFormValues> = (
  props: SearchFieldComponentProps<TFormValues>,
) => ReactNode;

export type DateTimePickerFieldComponent<TFormValues extends ObjectFormValues> = <
  TName extends DateTimePickerFieldName<TFormValues>,
>(
  props: DateTimePickerFieldProps<TFormValues, TName>,
) => ReactNode;

export type TypedDateTimePickerFieldComponent<TFormValues extends ObjectFormValues> = (
  props: DateTimePickerFieldComponentProps<TFormValues>,
) => ReactNode;

export type MonthPickerFieldComponent<TFormValues extends ObjectFormValues> = <
  TName extends MonthPickerFieldName<TFormValues>,
>(
  props: MonthPickerFieldProps<TFormValues, TName>,
) => ReactNode;

export type TypedMonthPickerFieldComponent<TFormValues extends ObjectFormValues> = (
  props: MonthPickerFieldComponentProps<TFormValues>,
) => ReactNode;

export type WeekPickerFieldComponent<TFormValues extends ObjectFormValues> = <
  TName extends WeekPickerFieldName<TFormValues>,
>(
  props: WeekPickerFieldProps<TFormValues, TName>,
) => ReactNode;

export type TypedWeekPickerFieldComponent<TFormValues extends ObjectFormValues> = (
  props: WeekPickerFieldComponentProps<TFormValues>,
) => ReactNode;

export type QuarterPickerFieldComponent<TFormValues extends ObjectFormValues> = <
  TName extends QuarterPickerFieldName<TFormValues>,
>(
  props: QuarterPickerFieldProps<TFormValues, TName>,
) => ReactNode;

export type TypedQuarterPickerFieldComponent<TFormValues extends ObjectFormValues> = (
  props: QuarterPickerFieldComponentProps<TFormValues>,
) => ReactNode;

export type YearPickerFieldComponent<TFormValues extends ObjectFormValues> = <
  TName extends YearPickerFieldName<TFormValues>,
>(
  props: YearPickerFieldProps<TFormValues, TName>,
) => ReactNode;

export type TypedYearPickerFieldComponent<TFormValues extends ObjectFormValues> = (
  props: YearPickerFieldComponentProps<TFormValues>,
) => ReactNode;

export type SegmentedFieldComponent<TFormValues extends ObjectFormValues> = <
  TName extends SegmentedFieldName<TFormValues>,
>(
  props: SegmentedFieldProps<TFormValues, TName>,
) => ReactNode;

export type TypedSegmentedFieldComponent<TFormValues extends ObjectFormValues> = (
  props: SegmentedFieldComponentProps<TFormValues>,
) => ReactNode;

/**
 * 最终对外暴露的组合 API：TanStack 原始能力 + 绑定好的 AntD 适配组件。
 */
export type AntdFormApi<TFormValues extends ObjectFormValues = ObjectFormValues> =
  BaseFormApi<TFormValues> & {
    form: BaseFormApi<TFormValues>;
    Field: BaseFormApi<TFormValues>["Field"];
    Form: ComponentType<AntdFormProps>;
    TextField: TypedTextFieldComponent<TFormValues>;
    TextAreaField: TypedTextAreaFieldComponent<TFormValues>;
    PasswordField: TypedPasswordFieldComponent<TFormValues>;
    CheckboxField: CheckboxFieldComponent<TFormValues>;
    NumberField: TypedNumberFieldComponent<TFormValues>;
    SelectField: TypedSelectFieldComponent<TFormValues>;
    SwitchField: TypedSwitchFieldComponent<TFormValues>;
    RadioGroupField: TypedRadioGroupFieldComponent<TFormValues>;
    DatePickerField: TypedDatePickerFieldComponent<TFormValues>;
    UploadField: TypedUploadFieldComponent<TFormValues>;
    CheckboxGroupField: TypedCheckboxGroupFieldComponent<TFormValues>;
    TimePickerField: TypedTimePickerFieldComponent<TFormValues>;
    DateRangePickerField: TypedDateRangePickerFieldComponent<TFormValues>;
    TimeRangeField: TypedTimeRangeFieldComponent<TFormValues>;
    TreeSelectField: TypedTreeSelectFieldComponent<TFormValues>;
    CascaderField: TypedCascaderFieldComponent<TFormValues>;
    TransferField: TypedTransferFieldComponent<TFormValues>;
    AutoCompleteField: TypedAutoCompleteFieldComponent<TFormValues>;
    MentionsField: TypedMentionsFieldComponent<TFormValues>;
    SearchField: TypedSearchFieldComponent<TFormValues>;
    SliderField: TypedSliderFieldComponent<TFormValues>;
    RateField: TypedRateFieldComponent<TFormValues>;
    ColorPickerField: TypedColorPickerFieldComponent<TFormValues>;
    OtpField: TypedOtpFieldComponent<TFormValues>;
    DateTimePickerField: TypedDateTimePickerFieldComponent<TFormValues>;
    MonthPickerField: TypedMonthPickerFieldComponent<TFormValues>;
    WeekPickerField: TypedWeekPickerFieldComponent<TFormValues>;
    QuarterPickerField: TypedQuarterPickerFieldComponent<TFormValues>;
    YearPickerField: TypedYearPickerFieldComponent<TFormValues>;
    SegmentedField: TypedSegmentedFieldComponent<TFormValues>;
    SubmitButton: ComponentType<SubmitButtonProps>;
    ResetButton: ComponentType<ResetButtonProps>;
  };
