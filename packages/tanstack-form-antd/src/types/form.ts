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
import type { FieldPath } from "./path";

export type FormMode = "edit" | "preview";
export type ShowErrorWhen = "touched" | "dirty" | "submitted" | "touchedOrSubmitted" | "always";
export type FormApi = ReturnType<typeof useForm>;

export type BoundFormProps = Omit<AntdFormProps, "form" | "onFinish"> & {
  onSubmitSuccess?: () => void | Promise<void>;
  onSubmitError?: (error: unknown) => void | Promise<void>;
};

export type FormFieldProps<TValues> = {
  name: FieldPath<TValues>;
  validators?: unknown;
  children: (field: any) => ReactNode;
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
