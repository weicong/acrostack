import type { FormHTMLAttributes, ReactNode } from "react";
import { FormLayout } from "../../layout";

interface FormStackProps extends FormHTMLAttributes<HTMLFormElement> {
  children: ReactNode;
}

/**
 * 表单容器：`<form>` 元素由它提供，字段排布交给 `FormLayout`
 * （纵向、字段间距一档），因此单个表单不必再声明字段间距。
 */
export function FormStack({ children, className, ...rest }: FormStackProps) {
  return (
    <form {...rest} className={className}>
      <FormLayout>{children}</FormLayout>
    </form>
  );
}
