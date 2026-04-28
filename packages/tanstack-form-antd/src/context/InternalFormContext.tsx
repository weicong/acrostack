import type { MutableRefObject, ReactNode } from "react";
import type { FormApi, FormMode, ShowErrorWhen } from "../types";

export type InternalFormConfig = {
  mode: FormMode;
  emptyText: ReactNode;
  showErrorWhen: ShowErrorWhen;
  dateValueFormat: string;
  size: "small" | "middle" | "large";
  disabled: boolean;
};

export type InternalFormContextValue<_TValues> = {
  form: FormApi;
  config: InternalFormConfig;
};

export function getContextOrThrow<TValues>(
  contextRef: MutableRefObject<InternalFormContextValue<TValues> | null>,
): InternalFormContextValue<TValues> {
  const context = contextRef.current;
  if (!context) {
    throw new Error("useAntdForm internal context is not ready.");
  }
  return context;
}
