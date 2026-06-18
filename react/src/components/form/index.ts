// ── Form Hook (primary API) ──────────────────────────────────────────
export { useAppForm, withForm, withFieldGroup, default as formHook } from "./create-form";

// ── Contexts (for extending / custom components) ─────────────────────
export { fieldContext, formContext, useFieldContext, useFormContext } from "./form-context";

// ── Field Components ─────────────────────────────────────────────────
export {
  TextField,
  type TextFieldProps,
  TextareaField,
  type TextareaFieldProps,
  NumberField,
  type NumberFieldProps,
  CheckboxField,
  type CheckboxFieldProps,
  SwitchField,
  type SwitchFieldProps,
  SelectField,
  type SelectFieldProps,
  ComboboxField,
  type ComboboxFieldProps,
  type ComboboxOption,
  RadioGroupField,
  type RadioGroupFieldProps,
  type RadioOption,
  SliderField,
  type SliderFieldProps,
  DatePickerField,
  type DatePickerFieldProps,
} from "./field-components";

// ── Form Components ──────────────────────────────────────────────────
export {
  SubmitButton,
  type SubmitButtonProps,
  ResetButton,
  type ResetButtonProps,
} from "./form-components";
