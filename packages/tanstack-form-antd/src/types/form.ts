import type { MouseEventHandler, ReactElement, ReactNode } from "react";
import { useForm } from "@tanstack/react-form";
import type { ButtonProps, FormProps as AntdFormProps } from "antd";
import type {
  BoundCheckboxFieldComponent,
  BoundDatePickerFieldComponent,
  BoundNumberFieldComponent,
  BoundPasswordFieldComponent,
  BoundRadioGroupFieldComponent,
  BoundRangePickerFieldComponent,
  BoundSelectFieldComponent,
  BoundSwitchFieldComponent,
  BoundTextAreaFieldComponent,
  BoundTextFieldComponent,
} from "./field";
import type { FieldPath, FieldPathValue } from "./path";

export type FormMode = "edit" | "preview";
export type ShowErrorWhen = "touched" | "dirty" | "submitted" | "touchedOrSubmitted" | "always";
export type FormApi = ReturnType<typeof useForm>;
export type FormStateLike<_TValues> = {
  canSubmit: boolean;
  isSubmitted: boolean;
  isSubmitting: boolean;
};

export type FieldValidatorFn<TValue> = (params: { value: TValue }) => unknown;
export type AsyncFieldValidatorFn<TValue> = (params: { value: TValue }) => Promise<unknown>;

export type FieldApiFor<TValues, TName extends FieldPath<TValues>> = {
  state: {
    value: FieldPathValue<TValues, TName>;
    meta: {
      errors?: unknown[];
      isTouched?: boolean;
      isDirty?: boolean;
      isValidating?: boolean;
    };
  };
  handleChange: (value: FieldPathValue<TValues, TName>) => void;
  handleBlur: () => void;
};

export type FieldValidatorObject<TValue> = {
  onMount?: FieldValidatorFn<TValue>;
  onChange?: FieldValidatorFn<TValue>;
  onChangeAsync?: AsyncFieldValidatorFn<TValue>;
  onBlur?: FieldValidatorFn<TValue>;
  onBlurAsync?: AsyncFieldValidatorFn<TValue>;
  onSubmit?: FieldValidatorFn<TValue>;
  onSubmitAsync?: AsyncFieldValidatorFn<TValue>;
  onDynamic?: FieldValidatorFn<TValue>;
  onDynamicAsync?: AsyncFieldValidatorFn<TValue>;
  onChangeListenTo?: string[];
  onBlurListenTo?: string[];
};

export type FieldValidatorsLike<TValues, TName extends FieldPath<TValues>> =
  | FieldValidatorFn<FieldPathValue<TValues, TName>>
  | FieldValidatorObject<FieldPathValue<TValues, TName>>;

export type BoundFormProps = Omit<AntdFormProps, "form" | "onFinish"> & {
  onSubmitSuccess?: () => void | Promise<void>;
  onSubmitError?: (error: unknown) => void | Promise<void>;
};

export type FormFieldProps<TValues, TName extends FieldPath<TValues> = FieldPath<TValues>> = {
  name: TName;
  validators?: FieldValidatorsLike<TValues, TName>;
  children: (field: FieldApiFor<TValues, TName>) => ReactNode;
};

export type SubmitButtonProps = Omit<ButtonProps, "htmlType"> & {
  htmlType?: ButtonProps["htmlType"];
  autoLoading?: boolean;
  autoDisabled?: boolean;
};

export type ResetButtonProps = Omit<ButtonProps, "htmlType" | "onClick"> & {
  autoDisabled?: boolean;
  onClick?: MouseEventHandler<HTMLElement>;
  beforeReset?: () => boolean | Promise<boolean>;
};

export type UseAntdFormOptions<TValues> = {
  defaultValues?: TValues;
  onSubmit?: (props: { value: TValues; formApi: FormApi; meta: unknown }) => void | Promise<void>;
  [key: string]: unknown;
} & {
  mode?: FormMode;
  emptyText?: ReactNode;
  showErrorWhen?: ShowErrorWhen;
  dateValueFormat?: string;
  size?: "small" | "middle" | "large";
  disabled?: boolean;
};

export type BoundFormComponent = (props: BoundFormProps) => ReactElement;
export type BoundFormFieldComponent<TValues> = (props: FormFieldProps<TValues>) => ReactElement;
export type BoundSubmitButtonComponent = (props: SubmitButtonProps) => ReactElement;
export type BoundResetButtonComponent = (props: ResetButtonProps) => ReactElement;

export type UseAntdFormReturn<TValues> = {
  form: FormApi;
  Form: BoundFormComponent;
  FormField: BoundFormFieldComponent<TValues>;
  TextField: BoundTextFieldComponent<TValues>;
  TextAreaField: BoundTextAreaFieldComponent<TValues>;
  PasswordField: BoundPasswordFieldComponent<TValues>;
  NumberField: BoundNumberFieldComponent<TValues>;
  SelectField: BoundSelectFieldComponent<TValues>;
  CheckboxField: BoundCheckboxFieldComponent<TValues>;
  SwitchField: BoundSwitchFieldComponent<TValues>;
  RadioGroupField: BoundRadioGroupFieldComponent<TValues>;
  DatePickerField: BoundDatePickerFieldComponent<TValues>;
  RangePickerField: BoundRangePickerFieldComponent<TValues>;
  SubmitButton: BoundSubmitButtonComponent;
  ResetButton: BoundResetButtonComponent;
};
