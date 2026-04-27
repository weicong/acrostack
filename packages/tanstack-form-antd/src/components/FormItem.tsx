import { Form as AntdForm } from "antd";
import type { FormItemProps } from "antd";
import type { ReactNode } from "react";
import { getValidateStatus } from "../utils/getValidateStatus";

type InternalFormItemProps = {
  label?: ReactNode;
  required?: boolean;
  error?: ReactNode;
  isValidating?: boolean;
  formItemProps?: Omit<FormItemProps, "name" | "rules" | "children">;
  children: ReactNode;
};

export function FormItem(props: InternalFormItemProps) {
  return (
    <AntdForm.Item
      label={props.label}
      required={props.required}
      validateStatus={getValidateStatus({
        error: props.error,
        isValidating: props.isValidating,
      })}
      help={props.error}
      {...props.formItemProps}
    >
      {props.children}
    </AntdForm.Item>
  );
}
