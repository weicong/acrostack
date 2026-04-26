// ===== ProForm-style Factory (recommended) =====
export { createForm } from "./createForm";

// ===== Low-level Form Hook (advanced) =====
export { useAppForm, withForm } from "./useAppForm";

// ===== Form Context (for extension / custom components) =====
export { fieldContext, formContext, useFieldContext, useFormContext } from "./form-context";

// ===== AntFormItem Shell =====
export { AntFormItem } from "./AntFormItem";
export type { AntFormItemProps } from "./AntFormItem";

// ===== Field Components =====
export {
  TextField,
  TextAreaField,
  NumberField,
  SelectField,
  DatePickerField,
  SwitchField,
} from "./fields";

export type {
  TextFieldProps,
  TextAreaFieldProps,
  NumberFieldProps,
  SelectFieldProps,
  DatePickerFieldProps,
  SwitchFieldProps,
} from "./fields";

// ===== Form Components =====
export { SubmitButton } from "./components";
export type { SubmitButtonProps } from "./components";
