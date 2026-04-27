import type { MutableRefObject } from "react";
import { getContextOrThrow, type InternalFormContextValue } from "../context/InternalFormContext";
import type { BoundFormFieldComponent, FormFieldProps } from "../types";
import { normalizeFieldValidators } from "../utils/getFieldError";

export function createBoundFormField<TValues>(
  contextRef: MutableRefObject<InternalFormContextValue<TValues> | null>,
): BoundFormFieldComponent<TValues> {
  return function BoundFormField(props: FormFieldProps<TValues>) {
    const context = getContextOrThrow(contextRef);
    const { form } = context;

    return (
      <form.Field
        name={props.name}
        validators={normalizeFieldValidators(props.validators) as never}
      >
        {(field: any) => props.children(field)}
      </form.Field>
    );
  };
}
