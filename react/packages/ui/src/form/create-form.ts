import { createFormHook } from "@tanstack/react-form";
import { fieldContext, formContext } from "./form-context";
import { TextField, SwitchField, ComboboxField } from "./field-components";
import { SubmitButton } from "./form-components";

/**
 * Pre-configured TanStack Form hook with the field and form components this app
 * actually uses.
 *
 * Usage:
 * ```tsx
 * const form = useAppForm({
 *   defaultValues: { name: '', isActive: true },
 *   onSubmit: ({ value }) => console.log(value),
 * })
 *
 * return (
 *   <form.AppForm>
 *     <form.AppField name="name" children={(field) => <field.TextField label="名称" />} />
 *     <form.AppField name="isActive" children={(field) => <field.SwitchField label="激活" />} />
 *     <form.SubmitButton label="保存" />
 *   </form.AppForm>
 * )
 * ```
 */
const formHook = createFormHook({
  fieldContext,
  formContext,
  fieldComponents: {
    TextField,
    SwitchField,
    ComboboxField,
  },
  formComponents: {
    SubmitButton,
  },
});

export const { useAppForm, withForm, withFieldGroup } = formHook;
export default formHook;
