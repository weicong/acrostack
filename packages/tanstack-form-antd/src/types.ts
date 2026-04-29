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

export type AnyFormValues = object;

export type FormMode = "edit" | "view" | "disabled";

export type ErrorDisplayMode = "always" | "touched" | "dirty" | "submitted";

export interface AntdFormContextValue {
  mode: FormMode;
  errorDisplayMode: ErrorDisplayMode;
  disabled?: boolean;
  readonly?: boolean;
}

export type SafeFormItemProps = Omit<
  FormItemProps,
  "name" | "rules" | "validateStatus" | "help" | "initialValue" | "dependencies" | "shouldUpdate"
>;

export interface BaseFieldProps {
  label?: ReactNode;
  extra?: ReactNode;
  tooltip?: ReactNode;
  required?: boolean;
  formItemProps?: SafeFormItemProps;
  mode?: FormMode;
  errorDisplayMode?: ErrorDisplayMode;
}

export type FieldName<TFormValues extends AnyFormValues> = DeepKeys<TFormValues>;

export type FieldValue<
  TFormValues extends AnyFormValues,
  TName extends FieldName<TFormValues>,
> = DeepValue<TFormValues, TName>;

export type FieldNameByValue<TFormValues extends AnyFormValues, TValue> = {
  [TName in FieldName<TFormValues>]: FieldValue<TFormValues, TName> extends TValue ? TName : never;
}[FieldName<TFormValues>];

export type TextFieldName<TFormValues extends AnyFormValues> = FieldNameByValue<
  TFormValues,
  string | null | undefined
>;

export type CheckboxFieldName<TFormValues extends AnyFormValues> = FieldNameByValue<
  TFormValues,
  boolean | null | undefined
>;

export type AntdFieldValidators<
  TFormValues extends AnyFormValues,
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

export interface AntdFormProps extends Omit<AntdBaseFormProps, "form" | "onFinish" | "onSubmit"> {
  children?: ReactNode;
  mode?: FormMode;
  errorDisplayMode?: ErrorDisplayMode;
  onSubmit?: FormEventHandler<HTMLFormElement>;
}

export interface TextFieldProps<
  TFormValues extends AnyFormValues,
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

export interface CheckboxFieldProps<
  TFormValues extends AnyFormValues,
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

export interface SubmitButtonProps extends ButtonProps {
  loadingWhenSubmitting?: boolean;
}

export interface ResetButtonProps extends ButtonProps {}

export type AnyReactFormApi<TFormValues extends AnyFormValues = AnyFormValues> =
  ReactFormExtendedApi<
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

export type AntdFormOptions<TFormValues extends AnyFormValues = AnyFormValues> = FormOptions<
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

export type TextFieldComponent<TFormValues extends AnyFormValues> = <
  TName extends TextFieldName<TFormValues>,
>(
  props: TextFieldProps<TFormValues, TName>,
) => ReactNode;

export type TextFieldComponentProps<TFormValues extends AnyFormValues> = {
  [TName in TextFieldName<TFormValues>]: TextFieldProps<TFormValues, TName>;
}[TextFieldName<TFormValues>];

export type CheckboxFieldComponentProps<TFormValues extends AnyFormValues> = {
  [TName in CheckboxFieldName<TFormValues>]: CheckboxFieldProps<TFormValues, TName>;
}[CheckboxFieldName<TFormValues>];

export type CheckboxFieldComponent<TFormValues extends AnyFormValues> = <
  TName extends CheckboxFieldName<TFormValues>,
>(
  props: CheckboxFieldProps<TFormValues, TName>,
) => ReactNode;

export type TypedTextFieldComponent<TFormValues extends AnyFormValues> = (
  props: TextFieldComponentProps<TFormValues>,
) => ReactNode;

export type AntdFormApi<TFormValues extends AnyFormValues = AnyFormValues> =
  AnyReactFormApi<TFormValues> & {
    form: AnyReactFormApi<TFormValues>;
    Field: AnyReactFormApi<TFormValues>["Field"];
    Form: ComponentType<AntdFormProps>;
    TextField: TypedTextFieldComponent<TFormValues>;
    CheckboxField: CheckboxFieldComponent<TFormValues>;
    SubmitButton: ComponentType<SubmitButtonProps>;
    ResetButton: ComponentType<ResetButtonProps>;
  };
