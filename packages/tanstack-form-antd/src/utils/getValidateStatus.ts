import type { FormItemProps } from "antd";
import type { ReactNode } from "react";

export function getValidateStatus(params: {
  error?: ReactNode;
  isValidating?: boolean;
}): FormItemProps["validateStatus"] {
  if (params.isValidating) {
    return "validating";
  }
  if (params.error) {
    return "error";
  }
  return undefined;
}
