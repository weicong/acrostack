import { createFormHook } from "@tanstack/react-form";
import { fieldContext, formContext } from "./form-context";

// Field components
import { TextField } from "./fields/TextField";
import { TextAreaField } from "./fields/TextAreaField";
import { NumberField } from "./fields/NumberField";
import { SelectField } from "./fields/SelectField";
import { DatePickerField } from "./fields/DatePickerField";
import { SwitchField } from "./fields/SwitchField";

// Form components
import { SubmitButton } from "./components/SubmitButton";

/**
 * 预绑定了所有 Ant Design 字段组件和表单组件的 Form Hook。
 *
 * 使用方式：
 * ```tsx
 * const form = useAppForm({
 *   defaultValues: { name: '', age: 0 },
 *   onSubmit: ({ value }) => console.log(value),
 * })
 *
 * return (
 *   <form onSubmit={(e) => { e.preventDefault(); form.handleSubmit(); }}>
 *     <form.AppField name="name" children={(field) => <field.TextField label="姓名" />} />
 *     <form.AppField name="age" children={(field) => <field.NumberField label="年龄" />} />
 *     <form.AppForm>
 *       <form.SubmitButton label="提交" />
 *     </form.AppForm>
 *   </form>
 * )
 * ```
 */
export const { useAppForm, withForm } = createFormHook({
  fieldContext,
  formContext,
  fieldComponents: {
    TextField,
    TextAreaField,
    NumberField,
    SelectField,
    DatePickerField,
    SwitchField,
  },
  formComponents: {
    SubmitButton,
  },
});
