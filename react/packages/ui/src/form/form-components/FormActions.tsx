import type { ReactNode } from "react";
import { HStack } from "../../layout";

interface FormActionsProps {
  children: ReactNode;
}

/**
 * 表单操作行：提交、取消等按钮右对齐、间距一档，窄屏自动换行；
 * 弹窗表单与卡片表单共用，保证按钮位置与间距一致。
 */
export function FormActions({ children }: FormActionsProps) {
  return (
    <HStack justify="end" gap={2} wrap="wrap">
      {children}
    </HStack>
  );
}
