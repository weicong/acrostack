import { createFormHookContexts } from "@tanstack/react-form";

/**
 * Shared form hook contexts for TanStack Form + Fluent UI integration.
 *
 * - `fieldContext` / `formContext` — pass to `createFormHook()`
 * - `useFieldContext` — use inside field components to access the field API
 * - `useFormContext` — use inside form components to access the form API
 */
export const { fieldContext, formContext, useFieldContext, useFormContext } =
  createFormHookContexts();
