import type { ReactNode } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "#components/dialog";
import { cn } from "#lib/utils";

export interface FormDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  description?: string;
  /** 表单主体；通常传 `@workspace/ui/form` 的 `FormStack` */
  children: ReactNode;
  /** 宽度档位：`md` 用于普通表单，`lg` 用于字段较多的表单 */
  size?: "md" | "lg";
}

const SIZES: Record<NonNullable<FormDialogProps["size"]>, string> = {
  md: "sm:max-w-md",
  lg: "sm:max-w-2xl",
};

/**
 * 表单弹窗外壳：标题、描述与内容区。
 *
 * 只管外壳——表单本身（含提交/取消按钮）由 `children` 提供，因此新建与编辑
 * 共用同一个表单组件，弹窗只负责打开/关闭与标题文案。
 */
export function FormDialog({
  open,
  onOpenChange,
  title,
  description,
  children,
  size = "md",
}: FormDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className={cn(SIZES[size], "max-h-[calc(100dvh-4rem)] overflow-y-auto")}>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          {description !== undefined && <DialogDescription>{description}</DialogDescription>}
        </DialogHeader>
        {children}
      </DialogContent>
    </Dialog>
  );
}
