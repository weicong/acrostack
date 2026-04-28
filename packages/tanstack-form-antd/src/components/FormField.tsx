import type { MutableRefObject } from "react";
import { getContextOrThrow, type InternalFormContextValue } from "../context/InternalFormContext";
import type { BoundFormFieldComponent, FieldPath, FormFieldProps } from "../types";
import { normalizeFieldValidators } from "../utils/getFieldError";

export function createBoundFormField<TValues>(
  contextRef: MutableRefObject<InternalFormContextValue<TValues> | null>,
): BoundFormFieldComponent<TValues> {
  return function BoundFormField<TName extends FieldPath<TValues>>(
    props: FormFieldProps<TValues, TName>,
  ) {
    const context = getContextOrThrow(contextRef);
    const { form } = context;

    return (
      <form.Field
        name={props.name}
        validators={normalizeFieldValidators(props.validators) as never}
      >
        {(field) => props.children(field as never)}
      </form.Field>
    );
  };
}
