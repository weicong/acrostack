import { Form as AntdForm } from "antd";
import type { FormItemProps } from "antd";
import type { ReactNode } from "react";
import { getValidateStatus } from "../utils/getValidateStatus";

type InternalFormItemProps = {
  label?: ReactNode;
  required?: boolean;
  error?: ReactNode;
  isValidating?: boolean;
  formItemProps?: Omit<
    FormItemProps,
    "children" | "help" | "label" | "name" | "required" | "rules" | "validateStatus"
  >;
  children: ReactNode;
};

export function FormItem(props: InternalFormItemProps) {
  return (
    <AntdForm.Item
      {...props.formItemProps}
      label={props.label}
      required={props.required}
      validateStatus={getValidateStatus({
        error: props.error,
        isValidating: props.isValidating,
      })}
      help={props.error}
    >
      {props.children}
    </AntdForm.Item>
  );
}
