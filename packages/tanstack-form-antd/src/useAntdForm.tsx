import { useMemo } from "react";
import { useForm } from "@tanstack/react-form";
import { createAutoCompleteFieldComponent } from "./components/AutoCompleteField";
import { createCascaderFieldComponent } from "./components/CascaderField";
import { createCheckboxFieldComponent } from "./components/CheckboxField";
import { createCheckboxGroupFieldComponent } from "./components/CheckboxGroupField";
import { createColorPickerFieldComponent } from "./components/ColorPickerField";
import { createDatePickerFieldComponent } from "./components/DatePickerField";
import { createDateTimePickerFieldComponent } from "./components/DateTimePickerField";
import { createDateRangePickerFieldComponent } from "./components/DateRangePickerField";
import { createFormComponent } from "./components/Form";
import { createMentionsFieldComponent } from "./components/MentionsField";
import { createMonthPickerFieldComponent } from "./components/MonthPickerField";
import { createNumberFieldComponent } from "./components/NumberField";
import { createOtpFieldComponent } from "./components/OtpField";
import { createPasswordFieldComponent } from "./components/PasswordField";
import { createQuarterPickerFieldComponent } from "./components/QuarterPickerField";
import { createRadioGroupFieldComponent } from "./components/RadioGroupField";
import { createRateFieldComponent } from "./components/RateField";
import { createResetButtonComponent } from "./components/ResetButton";
import { createSearchFieldComponent } from "./components/SearchField";
import { createSelectFieldComponent } from "./components/SelectField";
import { createSegmentedFieldComponent } from "./components/SegmentedField";
import { createSliderFieldComponent } from "./components/SliderField";
import { createSubmitButtonComponent } from "./components/SubmitButton";
import { createSwitchFieldComponent } from "./components/SwitchField";
import { createTextAreaFieldComponent } from "./components/TextAreaField";
import { createTextFieldComponent } from "./components/TextField";
import { createTimePickerFieldComponent } from "./components/TimePickerField";
import { createTimeRangeFieldComponent } from "./components/TimeRangeField";
import { createTransferFieldComponent } from "./components/TransferField";
import { createTreeSelectFieldComponent } from "./components/TreeSelectField";
import { createUploadFieldComponent } from "./components/UploadField";
import { createWeekPickerFieldComponent } from "./components/WeekPickerField";
import { createYearPickerFieldComponent } from "./components/YearPickerField";
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
      AutoCompleteField: createAutoCompleteFieldComponent(form as AntdFormApi<TFormValues>),
      MentionsField: createMentionsFieldComponent(form as AntdFormApi<TFormValues>),
      SearchField: createSearchFieldComponent(form as AntdFormApi<TFormValues>),
      OtpField: createOtpFieldComponent(form as AntdFormApi<TFormValues>),
      TextAreaField: createTextAreaFieldComponent(form as AntdFormApi<TFormValues>),
      PasswordField: createPasswordFieldComponent(form as AntdFormApi<TFormValues>),
      CheckboxField: createCheckboxFieldComponent(form as AntdFormApi<TFormValues>),
      CheckboxGroupField: createCheckboxGroupFieldComponent(form as AntdFormApi<TFormValues>),
      NumberField: createNumberFieldComponent(form as AntdFormApi<TFormValues>),
      SliderField: createSliderFieldComponent(form as AntdFormApi<TFormValues>),
      RateField: createRateFieldComponent(form as AntdFormApi<TFormValues>),
      SelectField: createSelectFieldComponent(form as AntdFormApi<TFormValues>),
      SegmentedField: createSegmentedFieldComponent(form as AntdFormApi<TFormValues>),
      SwitchField: createSwitchFieldComponent(form as AntdFormApi<TFormValues>),
      RadioGroupField: createRadioGroupFieldComponent(form as AntdFormApi<TFormValues>),
      DatePickerField: createDatePickerFieldComponent(form as AntdFormApi<TFormValues>),
      DateTimePickerField: createDateTimePickerFieldComponent(form as AntdFormApi<TFormValues>),
      MonthPickerField: createMonthPickerFieldComponent(form as AntdFormApi<TFormValues>),
      WeekPickerField: createWeekPickerFieldComponent(form as AntdFormApi<TFormValues>),
      QuarterPickerField: createQuarterPickerFieldComponent(form as AntdFormApi<TFormValues>),
      YearPickerField: createYearPickerFieldComponent(form as AntdFormApi<TFormValues>),
      DateRangePickerField: createDateRangePickerFieldComponent(form as AntdFormApi<TFormValues>),
      TimePickerField: createTimePickerFieldComponent(form as AntdFormApi<TFormValues>),
      TimeRangeField: createTimeRangeFieldComponent(form as AntdFormApi<TFormValues>),
      TreeSelectField: createTreeSelectFieldComponent(form as AntdFormApi<TFormValues>),
      CascaderField: createCascaderFieldComponent(form as AntdFormApi<TFormValues>),
      TransferField: createTransferFieldComponent(form as AntdFormApi<TFormValues>),
      ColorPickerField: createColorPickerFieldComponent(form as AntdFormApi<TFormValues>),
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
