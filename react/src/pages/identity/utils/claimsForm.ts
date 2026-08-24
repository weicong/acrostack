import { claimSchema } from "../claim-schemas";
import type { ClaimFormValues } from "../claim-schemas";

export function emptyValues(): ClaimFormValues {
  return { claimType: "", claimValue: "" };
}

/** 校验声明表单；通过返回 null，否则返回字段错误映射。 */
export function validate(values: ClaimFormValues): Record<string, string> | null {
  const result = claimSchema.safeParse(values);
  if (result.success) return null;
  const errors: Record<string, string> = {};
  const fieldErrors = result.error.flatten().fieldErrors;
  if (fieldErrors.claimType) errors.claimType = fieldErrors.claimType[0];
  if (fieldErrors.claimValue) errors.claimValue = fieldErrors.claimValue[0];
  return errors;
}
