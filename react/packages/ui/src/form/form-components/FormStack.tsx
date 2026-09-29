import type { FormHTMLAttributes, ReactNode } from "react";
import { cn } from "#lib/utils";

interface FormStackProps extends FormHTMLAttributes<HTMLFormElement> {
  children: ReactNode;
}

/**
 * 表单容器：`<form>` 元素与字段间距都由它提供（纵向、字段间距一档），
 * 因此单个表单不必再声明字段间距。
 */
export function FormStack({ children, className, ...rest }: FormStackProps) {
  return (
    <form {...rest} className={cn("flex flex-col gap-4", className)}>
      {children}
    </form>
  );
}
