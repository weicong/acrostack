import { createFormHook } from "@tanstack/react-form";
import { fieldContext, formContext } from "./form-context";
import {
  TextField,
  TextareaField,
  NumberField,
  CheckboxField,
  SwitchField,
  SelectField,
  ComboboxField,
  RadioGroupField,
  SliderField,
  DatePickerField,
} from "./field-components";
import { SubmitButton, ResetButton } from "./form-components";

/**
 * Pre-configured TanStack Form hook with all Fluent UI field and form components.
 *
 * Usage:
 * ```tsx
 * const form = useAppForm({
 *   defaultValues: { name: '', age: 0 },
 *   onSubmit: ({ value }) => console.log(value),
 * })
 *
 * return (
 *   <form.AppForm>
 *     <form.AppField name="name" children={(field) => <field.TextField label="Name" />} />
 *     <form.AppField name="age" children={(field) => <field.NumberField label="Age" />} />
 *     <form.SubmitButton label="Save" />
 *   </form.AppForm>
 * )
 * ```
 */
const formHook = createFormHook({
  fieldContext,
  formContext,
  fieldComponents: {
    TextField,
    TextareaField,
    NumberField,
    CheckboxField,
    SwitchField,
    SelectField,
    ComboboxField,
    RadioGroupField,
    SliderField,
    DatePickerField,
  },
  formComponents: {
    SubmitButton,
    ResetButton,
  },
});

export const { useAppForm, withForm, withFieldGroup } = formHook;
export default formHook;
