import { useMemo } from "react";
import { useForm } from "@tanstack/react-form";
import { createCascaderFieldComponent } from "./components/CascaderField";
import { createCheckboxFieldComponent } from "./components/CheckboxField";
import { createCheckboxGroupFieldComponent } from "./components/CheckboxGroupField";
import { createDatePickerFieldComponent } from "./components/DatePickerField";
import { createDateRangePickerFieldComponent } from "./components/DateRangePickerField";
import { createFormComponent } from "./components/Form";
import { createNumberFieldComponent } from "./components/NumberField";
import { createPasswordFieldComponent } from "./components/PasswordField";
import { createRadioGroupFieldComponent } from "./components/RadioGroupField";
import { createResetButtonComponent } from "./components/ResetButton";
import { createSelectFieldComponent } from "./components/SelectField";
import { createSubmitButtonComponent } from "./components/SubmitButton";
import { createSwitchFieldComponent } from "./components/SwitchField";
import { createTextAreaFieldComponent } from "./components/TextAreaField";
import { createTextFieldComponent } from "./components/TextField";
import { createTimePickerFieldComponent } from "./components/TimePickerField";
import { createTimeRangeFieldComponent } from "./components/TimeRangeField";
import { createTransferFieldComponent } from "./components/TransferField";
import { createTreeSelectFieldComponent } from "./components/TreeSelectField";
import { createUploadFieldComponent } from "./components/UploadField";
import type { AntdFormApi, AntdFormOptions, ObjectFormValues } from "./types";

export function useAntdForm<TFormValues extends ObjectFormValues>(
  options?: AntdFormOptions<TFormValues>,
): AntdFormApi<TFormValues> {
  const form = useForm<
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
  >(options);

  const components = useMemo(
    () => ({
      Form: createFormComponent(form as AntdFormApi<TFormValues>),
      TextField: createTextFieldComponent(form as AntdFormApi<TFormValues>),
      TextAreaField: createTextAreaFieldComponent(form as AntdFormApi<TFormValues>),
      PasswordField: createPasswordFieldComponent(form as AntdFormApi<TFormValues>),
      CheckboxField: createCheckboxFieldComponent(form as AntdFormApi<TFormValues>),
      CheckboxGroupField: createCheckboxGroupFieldComponent(form as AntdFormApi<TFormValues>),
      NumberField: createNumberFieldComponent(form as AntdFormApi<TFormValues>),
      SelectField: createSelectFieldComponent(form as AntdFormApi<TFormValues>),
      SwitchField: createSwitchFieldComponent(form as AntdFormApi<TFormValues>),
      RadioGroupField: createRadioGroupFieldComponent(form as AntdFormApi<TFormValues>),
      DatePickerField: createDatePickerFieldComponent(form as AntdFormApi<TFormValues>),
      DateRangePickerField: createDateRangePickerFieldComponent(form as AntdFormApi<TFormValues>),
      TimePickerField: createTimePickerFieldComponent(form as AntdFormApi<TFormValues>),
      TimeRangeField: createTimeRangeFieldComponent(form as AntdFormApi<TFormValues>),
      TreeSelectField: createTreeSelectFieldComponent(form as AntdFormApi<TFormValues>),
      CascaderField: createCascaderFieldComponent(form as AntdFormApi<TFormValues>),
      TransferField: createTransferFieldComponent(form as AntdFormApi<TFormValues>),
      UploadField: createUploadFieldComponent(form as AntdFormApi<TFormValues>),
      SubmitButton: createSubmitButtonComponent(form as AntdFormApi<TFormValues>),
      ResetButton: createResetButtonComponent(form as AntdFormApi<TFormValues>),
    }),
    [form],
  );

  return Object.assign(form, {
    form,
    Field: form.Field,
    ...components,
  }) as AntdFormApi<TFormValues>;
}
