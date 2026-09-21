import type { FormHTMLAttributes, ReactNode } from "react";
import { makeStyles, mergeClasses, shorthands, tokens } from "@fluentui/react-components";

const useStyles = makeStyles({
  stack: {
    display: "flex",
    flexDirection: "column",
    /* 字段之间的统一节奏：M(12)；字段组与操作行的间距见 FormActions */
    ...shorthands.gap(tokens.spacingVerticalM),
  },
});

interface FormStackProps extends FormHTMLAttributes<HTMLFormElement> {
  children: ReactNode;
}

/**
 * 表单容器：所有字段纵向排列，间距统一取令牌 M(12)。
 *
 * 之前各表单的字段紧贴在一起（Fluent `Field` 自身没有外部间距），
 * 这里用一个容器把节奏收敛到一处，避免每个表单各写一套。
 */
export function FormStack({ children, className, ...rest }: FormStackProps) {
  const styles = useStyles();

  return (
    <form {...rest} className={mergeClasses(styles.stack, className)}>
      {children}
    </form>
  );
}
