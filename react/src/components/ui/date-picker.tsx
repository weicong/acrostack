import {
  DatePicker as FluentDatePicker,
  type DatePickerProps as FluentDatePickerProps,
} from "@fluentui/react-datepicker-compat";
import { format, isValid, parse, parseISO } from "date-fns";

type DatePickerProps = {
  id?: string;
  value?: string;
  onChange: (value: string) => void;
  placeholder?: string;
  withTime?: boolean;
  className?: string;
  disabled?: boolean;
};

function parseDateValue(value?: string, withTime?: boolean): Date | undefined {
  if (!value) return undefined;
  const datePrefix = /^(\d{4}-\d{2}-\d{2})/.exec(value)?.[1];
  if (!withTime && datePrefix) {
    const parsedDatePrefix = parse(datePrefix, "yyyy-MM-dd", new Date());
    if (isValid(parsedDatePrefix)) return parsedDatePrefix;
  }
  if (withTime) {
    const dateTime = parse(value, "yyyy-MM-dd'T'HH:mm", new Date());
    if (isValid(dateTime)) return dateTime;
  }
  const dateOnly = parse(value, "yyyy-MM-dd", new Date());
  if (isValid(dateOnly)) return dateOnly;
  const parsedIso = parseISO(value);
  if (isValid(parsedIso)) return parsedIso;
  const parsedNative = new Date(value);
  return isValid(parsedNative) ? parsedNative : undefined;
}

export function DatePicker({
  id,
  value,
  onChange,
  placeholder,
  withTime = false,
  className: _className,
  disabled = false,
}: DatePickerProps) {
  const selectedDate = parseDateValue(value, withTime) ?? null;

  const handleSelectDate: FluentDatePickerProps["onSelectDate"] = (date) => {
    if (!date) {
      onChange("");
      return;
    }
    if (withTime) {
      const prev = selectedDate ?? new Date();
      const next = new Date(date);
      next.setHours(prev.getHours(), prev.getMinutes(), 0, 0);
      onChange(format(next, "yyyy-MM-dd'T'HH:mm"));
      return;
    }
    onChange(format(date, "yyyy-MM-dd"));
  };

  const formatDate: FluentDatePickerProps["formatDate"] = (date) => {
    if (!date) return "";
    return withTime ? format(date, "yyyy-MM-dd HH:mm") : format(date, "yyyy-MM-dd");
  };

  const parseDateFromString: FluentDatePickerProps["parseDateFromString"] = (dateStr) => {
    const parsed = parseDateValue(dateStr, withTime);
    return parsed ?? null;
  };

  return (
    <FluentDatePicker
      id={id}
      value={selectedDate}
      onSelectDate={handleSelectDate}
      placeholder={placeholder ?? "Pick a date"}
      disabled={disabled}
      allowTextInput
      formatDate={formatDate}
      parseDateFromString={parseDateFromString}
    />
  );
}
