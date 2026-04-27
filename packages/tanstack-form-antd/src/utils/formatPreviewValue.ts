import type { ReactNode } from "react";
import { isEmptyValue } from "./isEmptyValue";
import { toDisplayText } from "./toDisplayText";

export function formatPreviewValue<TValue>(
  value: TValue,
  emptyText: ReactNode,
  formatter?: (value: TValue) => ReactNode,
): ReactNode {
  if (isEmptyValue(value)) {
    return emptyText;
  }

  if (formatter) {
    return formatter(value);
  }

  return toDisplayText(value);
}
