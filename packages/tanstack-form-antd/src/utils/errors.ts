import type { ErrorDisplayMode } from "../types";

export interface ShouldShowErrorInput {
  errorDisplayMode: ErrorDisplayMode;
  hasError: boolean;
  isTouched?: boolean;
  isDirty?: boolean;
  isSubmitted?: boolean;
}

function stringifyUnknownValue(value: unknown): string {
  if (typeof value === "string") {
    return value;
  }

  if (
    typeof value === "number" ||
    typeof value === "boolean" ||
    typeof value === "bigint" ||
    typeof value === "symbol"
  ) {
    return String(value);
  }

  try {
    return JSON.stringify(value);
  } catch {
    return Object.prototype.toString.call(value);
  }
}

export function normalizeFieldErrors(errors: unknown): string[] {
  if (!errors) {
    return [];
  }

  if (typeof errors === "string") {
    return [errors];
  }

  if (Array.isArray(errors)) {
    return errors.flatMap((item) => normalizeFieldErrors(item)).filter(Boolean);
  }

  if (typeof errors === "object") {
    return [stringifyUnknownValue(errors)];
  }

  return [stringifyUnknownValue(errors)];
}

export function shouldShowFieldError(input: ShouldShowErrorInput): boolean {
  const { errorDisplayMode, hasError, isTouched, isDirty, isSubmitted } = input;

  if (!hasError) {
    return false;
  }

  if (errorDisplayMode === "always") {
    return true;
  }

  if (errorDisplayMode === "touched") {
    return Boolean(isTouched);
  }

  if (errorDisplayMode === "dirty") {
    return Boolean(isDirty);
  }

  if (errorDisplayMode === "submitted") {
    return Boolean(isSubmitted);
  }

  return false;
}
