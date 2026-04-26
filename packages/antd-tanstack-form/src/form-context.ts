import { createFormHookContexts } from "@tanstack/react-form";

/**
 * 创建 TanStack Form 的 React Context。
 * 所有自定义字段组件和表单组件通过这些 Context 获取 field / form 实例。
 *
 * - `fieldContext` / `formContext`: 传递给 `createFormHook`
 * - `useFieldContext`: 在自定义字段组件中获取 FieldApi
 * - `useFormContext`: 在自定义表单组件中获取 FormApi
 */
export const { fieldContext, formContext, useFieldContext, useFormContext } =
  createFormHookContexts();
