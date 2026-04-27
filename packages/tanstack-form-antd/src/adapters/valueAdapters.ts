import dayjs from "dayjs";
import type { ReactNode } from "react";
import { flattenOptions, type OptionLike } from "../utils/flattenOptions";
import { isEmptyValue } from "../utils/isEmptyValue";
import { toDisplayText } from "../utils/toDisplayText";

export function normalizeDateString(dateString: string | string[]): string {
  return Array.isArray(dateString) ? (dateString[0] ?? "") : dateString;
}

export function formatSelectPreview(
  value: unknown,
  options: OptionLike[] = [],
  separator = "、",
): ReactNode | undefined {
  if (isEmptyValue(value)) {
    return undefined;
  }

  const flatOptions = flattenOptions(options);
  const optionMap = new Map(
    flatOptions.map((option) => [option.value, option.label ?? option.value]),
  );

  if (Array.isArray(value)) {
    return value
      .map((item) => {
        const optionValue = optionMap.get(item);
        return typeof optionValue === "string" ? optionValue : toDisplayText(optionValue ?? item);
      })
      .join(separator);
  }

  const optionValue = optionMap.get(value);
  return optionValue == null ? toDisplayText(value) : (optionValue as ReactNode);
}

export function formatBooleanPreview(
  value: unknown,
  checkedText: ReactNode = "是",
  uncheckedText: ReactNode = "否",
): ReactNode {
  return value ? checkedText : uncheckedText;
}

export function formatDatePreview(
  value: unknown,
  valueFormat: string,
  displayFormat?: string,
): ReactNode | undefined {
  if (isEmptyValue(value)) {
    return undefined;
  }

  if (!displayFormat) {
    return toDisplayText(value);
  }

  const rawValue = toDisplayText(value);
  const date = dayjs(rawValue, valueFormat);
  if (!date.isValid()) {
    return rawValue;
  }

  return date.format(displayFormat);
}

export function formatRangePreview(params: {
  value: unknown;
  valueFormat: string;
  displayFormat?: string;
  separator?: ReactNode;
}): ReactNode | undefined {
  if (!Array.isArray(params.value) || !params.value[0] || !params.value[1]) {
    return undefined;
  }

  const [startValue, endValue] = params.value;
  const start =
    formatDatePreview(startValue, params.valueFormat, params.displayFormat) ??
    toDisplayText(startValue);
  const end =
    formatDatePreview(endValue, params.valueFormat, params.displayFormat) ??
    toDisplayText(endValue);

  return [start, params.separator ?? " 至 ", end];
}
