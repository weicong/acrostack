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
import type { ComponentType, FormEventHandler, ReactNode } from "react";

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
    Omit<InputProps, "name" | "value" | "defaultValue" | "onChange" | "onBlur"> {
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
    Omit<CheckboxProps, "name" | "checked" | "defaultChecked" | "onChange" | "onBlur"> {
  name: TName;
  validators?: AntdFieldValidators<TFormValues, TName>;
  children?: ReactNode;
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

export type CheckboxFieldComponent<TFormValues extends ObjectFormValues> = <
  TName extends CheckboxFieldName<TFormValues>,
>(
  props: CheckboxFieldProps<TFormValues, TName>,
) => ReactNode;

export type TypedTextFieldComponent<TFormValues extends ObjectFormValues> = (
  props: TextFieldComponentProps<TFormValues>,
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
    CheckboxField: CheckboxFieldComponent<TFormValues>;
    SubmitButton: ComponentType<SubmitButtonProps>;
    ResetButton: ComponentType<ResetButtonProps>;
  };
