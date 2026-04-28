import type { ReactNode } from "react";
import type { FieldPath, FieldValidatorsLike, FormStateLike, ShowErrorWhen } from "../types";
import { toDisplayText } from "./toDisplayText";

function normalizeError(error: unknown): ReactNode | undefined {
  if (error == null) {
    return undefined;
  }
  if (typeof error === "string") {
    return error;
  }
  if (typeof error === "object" && "message" in error) {
    return toDisplayText((error as { message?: unknown }).message);
  }
  return toDisplayText(error);
}

export function normalizeFieldValidators<TValues, TName extends FieldPath<TValues>>(
  validators?: FieldValidatorsLike<TValues, TName>,
) {
  if (typeof validators === "function") {
    return { onChange: validators };
  }
  return validators;
}

export function getFieldError(params: {
  meta: {
    errors?: unknown[];
    isTouched?: boolean;
    isDirty?: boolean;
  };
  showErrorWhen: ShowErrorWhen;
  submitted: FormStateLike<unknown>["isSubmitted"];
}): ReactNode | undefined {
  const errors = Array.isArray(params.meta.errors) ? params.meta.errors : [];
  const hasError = errors.length > 0;

  const shouldShow =
    params.showErrorWhen === "always" ||
    (params.showErrorWhen === "touched" && Boolean(params.meta.isTouched)) ||
    (params.showErrorWhen === "dirty" && Boolean(params.meta.isDirty)) ||
    (params.showErrorWhen === "submitted" && params.submitted) ||
    (params.showErrorWhen === "touchedOrSubmitted" &&
      (Boolean(params.meta.isTouched) || params.submitted));

  if (!hasError || !shouldShow) {
    return undefined;
  }

  return normalizeError(errors[0]);
}
