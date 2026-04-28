import type { AntdFormContextValue, ErrorDisplayMode, FormMode } from "../types";

export interface ResolveFieldModeInput {
  context: AntdFormContextValue;
  mode?: FormMode;
  errorDisplayMode?: ErrorDisplayMode;
  disabled?: boolean;
  readOnly?: boolean;
}

export interface ResolvedFieldMode {
  mode: FormMode;
  errorDisplayMode: ErrorDisplayMode;
  disabled: boolean;
  readOnly: boolean;
}

export function resolveFieldMode(input: ResolveFieldModeInput): ResolvedFieldMode {
  const { context, mode, errorDisplayMode, disabled, readOnly } = input;

  const finalMode = mode ?? context.mode;
  const finalErrorDisplayMode = errorDisplayMode ?? context.errorDisplayMode;
  const finalDisabled = disabled ?? context.disabled ?? finalMode === "disabled";
  const finalReadOnly = readOnly ?? context.readonly ?? finalMode === "view";

  return {
    mode: finalMode,
    errorDisplayMode: finalErrorDisplayMode,
    disabled: finalDisabled,
    readOnly: finalReadOnly,
  };
}

export function isActionDisabled(context: AntdFormContextValue, disabled?: boolean): boolean {
  const modeDisabled = context.mode === "view" || context.mode === "disabled";

  if (disabled !== undefined) {
    return disabled;
  }

  if (context.disabled) {
    return true;
  }

  return modeDisabled;
}
