// ── Form Hook (primary API) ──────────────────────────────────────────
export { useAppForm, withForm, withFieldGroup, default as formHook } from "./create-form";

// ── Contexts (for extending / custom components) ─────────────────────
export { fieldContext, formContext, useFieldContext, useFormContext } from "./form-context";

// ── Field Components ─────────────────────────────────────────────────
export {
  TextField,
  type TextFieldProps,
  SwitchField,
  type SwitchFieldProps,
  ComboboxField,
  type ComboboxFieldProps,
  type ComboboxOption,
} from "./field-components";

// ── Form Components ──────────────────────────────────────────────────
export { SubmitButton, type SubmitButtonProps, FormActions, FormStack } from "./form-components";
