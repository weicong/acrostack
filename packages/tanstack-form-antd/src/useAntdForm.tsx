import { useRef, type MutableRefObject } from "react";
import { useForm } from "@tanstack/react-form";
import { createBoundForm } from "./components/BoundForm";
import { createBoundFormField } from "./components/FormField";
import { createResetButton } from "./components/ResetButton";
import { createSubmitButton } from "./components/SubmitButton";
import type { InternalFormContextValue } from "./context/InternalFormContext";
import { createCheckboxField } from "./fields/CheckboxField";
import { createDatePickerField } from "./fields/DatePickerField";
import { createNumberField } from "./fields/NumberField";
import { createPasswordField } from "./fields/PasswordField";
import { createRadioGroupField } from "./fields/RadioGroupField";
import { createRangePickerField } from "./fields/RangePickerField";
import { createSelectField } from "./fields/SelectField";
import { createSwitchField } from "./fields/SwitchField";
import { createTextAreaField } from "./fields/TextAreaField";
import { createTextField } from "./fields/TextField";
import type { UseAntdFormOptions, UseAntdFormReturn } from "./types";

const defaultConfig = {
  mode: "edit",
  emptyText: "-",
  showErrorWhen: "touchedOrSubmitted",
  dateValueFormat: "YYYY-MM-DD",
  size: "middle",
  disabled: false,
} as const;

function createBoundComponents<TValues>(
  contextRef: MutableRefObject<InternalFormContextValue<TValues> | null>,
): Omit<UseAntdFormReturn<TValues>, "form"> {
  return {
    Form: createBoundForm(contextRef),
    FormField: createBoundFormField(contextRef),
    TextField: createTextField(contextRef),
    TextAreaField: createTextAreaField(contextRef),
    PasswordField: createPasswordField(contextRef),
    NumberField: createNumberField(contextRef),
    SelectField: createSelectField(contextRef),
    CheckboxField: createCheckboxField(contextRef),
    SwitchField: createSwitchField(contextRef),
    RadioGroupField: createRadioGroupField(contextRef),
    DatePickerField: createDatePickerField(contextRef),
    RangePickerField: createRangePickerField(contextRef),
    SubmitButton: createSubmitButton(contextRef),
    ResetButton: createResetButton(contextRef),
  };
}

export function useAntdForm<TValues>(
  options: UseAntdFormOptions<TValues>,
): UseAntdFormReturn<TValues> {
  const {
    mode = defaultConfig.mode,
    emptyText = defaultConfig.emptyText,
    showErrorWhen = defaultConfig.showErrorWhen,
    dateValueFormat = defaultConfig.dateValueFormat,
    size = defaultConfig.size,
    disabled = defaultConfig.disabled,
    ...formOptions
  } = options;

  const form = useForm(formOptions as never);

  const contextRef = useRef<InternalFormContextValue<TValues> | null>(null);
  contextRef.current = {
    form,
    config: {
      mode,
      emptyText,
      showErrorWhen,
      dateValueFormat,
      size,
      disabled,
    },
  };

  const componentsRef = useRef<Omit<UseAntdFormReturn<TValues>, "form"> | null>(null);
  if (!componentsRef.current) {
    componentsRef.current = createBoundComponents(contextRef);
  }

  return {
    ...componentsRef.current,
    form,
  };
}
