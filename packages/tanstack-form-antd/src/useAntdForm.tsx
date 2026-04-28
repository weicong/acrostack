import { useMemo } from "react";
import { useForm } from "@tanstack/react-form";
import { createCheckboxFieldComponent } from "./components/CheckboxField";
import { createFormComponent } from "./components/Form";
import { createResetButtonComponent } from "./components/ResetButton";
import { createSubmitButtonComponent } from "./components/SubmitButton";
import { createTextFieldComponent } from "./components/TextField";
import type { AntdFormApi, AntdFormOptions, AnyFormValues } from "./types";

export function useAntdForm<TFormValues extends AnyFormValues>(
  options?: AntdFormOptions<TFormValues>,
): AntdFormApi<TFormValues> {
  const form = useForm<TFormValues, any, any, any, any, any, any, any, any, any, any, any>(options);

  const components = useMemo(
    () => ({
      Form: createFormComponent(form as AntdFormApi<TFormValues>),
      TextField: createTextFieldComponent(form as AntdFormApi<TFormValues>),
      CheckboxField: createCheckboxFieldComponent(form as AntdFormApi<TFormValues>),
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
