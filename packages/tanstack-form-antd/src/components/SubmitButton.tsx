import React from "react";
import { Button } from "antd";
import type { ButtonProps } from "antd";
import { useFormContext, useFormConfig } from "../form-context";

export interface SubmitButtonProps {
  /** 按钮文本，默认 '提交' */
  label?: string;
  /** 透传给 antd Button 的额外属性 */
  buttonProps?: Omit<ButtonProps, "type" | "htmlType" | "disabled" | "loading">;
}

/**
 * 提交按钮组件。
 * 通过 FormContext 监听 isSubmitting 状态，
 * 提交中自动禁用并显示 loading。
 */
export function SubmitButton({ label = "提交", buttonProps }: SubmitButtonProps) {
  const form = useFormContext();
  const config = useFormConfig();

  if (config.readonly) return null;

  return (
    <form.Subscribe selector={(state) => state.isSubmitting}>
      {(isSubmitting) => (
        <Button
          {...buttonProps}
          type="primary"
          htmlType="submit"
          disabled={isSubmitting}
          loading={isSubmitting}
        >
          {label}
        </Button>
      )}
    </form.Subscribe>
  );
}
