import type { ReactNode } from "react";

export type OptionLike = {
  label?: ReactNode;
  value?: unknown;
  options?: OptionLike[];
};

export function flattenOptions(options: OptionLike[] = []): OptionLike[] {
  const result: OptionLike[] = [];

  for (const option of options) {
    if (Array.isArray(option.options)) {
      result.push(...flattenOptions(option.options));
    } else {
      result.push(option);
    }
  }

  return result;
}
