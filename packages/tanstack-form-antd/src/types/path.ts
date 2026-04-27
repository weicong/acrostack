import type { DeepKeys, DeepValue } from "@tanstack/react-form";

export type FieldPath<TValues> = DeepKeys<TValues>;

export type FieldPathValue<TValues, TName extends FieldPath<TValues>> = DeepValue<TValues, TName>;

export type FieldPathByValue<TValues, TValue> = {
  [TName in FieldPath<TValues>]: FieldPathValue<TValues, TName> extends TValue ? TName : never;
}[FieldPath<TValues>];
