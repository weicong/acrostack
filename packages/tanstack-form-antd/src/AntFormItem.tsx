import React from "react";
import { Form } from "antd";
import type { FormItemProps } from "antd";

export interface AntFormItemProps extends Omit<FormItemProps, "validateStatus" | "help"> {
  /** 字段校验错误信息，由外层自动传入 */
  errors?: string[];
  children: React.ReactNode;
}

/**
 * 统一的 Ant Design Form.Item 壳组件。
 * 负责展示 label 和校验错误信息。
 *
 * 注意：此组件不使用 antd Form 的内部状态管理，
 * 校验状态完全由 TanStack Form 驱动。
 */
export function AntFormItem({ errors, children, ...formItemProps }: AntFormItemProps) {
  const hasError = errors && errors.length > 0;

  return (
    <Form.Item
      {...formItemProps}
      validateStatus={hasError ? "error" : undefined}
      help={hasError ? errors.join(", ") : undefined}
    >
      {children}
    </Form.Item>
  );
}
