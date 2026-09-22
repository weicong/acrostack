import { createContext, useContext, type HTMLAttributes, type ReactNode, type Ref } from "react";
import { makeStyles, mergeClasses, tokens } from "@fluentui/react-components";

/**
 * 字段排列方向：
 * - `vertical`（默认）：字段自上而下堆叠，最常用；
 * - `horizontal`：字段按等宽列横向排布；
 * - `horizontal-labels`：标签在左、控件在右的两列排布。
 *
 * 已知差异：Astryx 的 `horizontal-labels` 依赖其 `Field` 内部把标签与控件拆成两列；
 * 本包的字段组件不拆分 DOM，因此该值按 `horizontal` 处理（保留取值以便后续演进）。
 */
export type FormLayoutDirection = "vertical" | "horizontal" | "horizontal-labels";

/** 字段排列方向上下文：字段组件可据此调整自身表现。 */
export const FormLayoutContext = createContext<FormLayoutDirection | undefined>(undefined);

/** 读取当前的字段排列方向（不在 `FormLayout` 内时为 `undefined`）。 */
export function useFormLayoutDirection(): FormLayoutDirection | undefined {
  return useContext(FormLayoutContext);
}

const useStyles = makeStyles({
  vertical: { display: "flex", flexDirection: "column", rowGap: tokens.spacingVerticalM },
  horizontal: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    rowGap: tokens.spacingVerticalL,
    columnGap: tokens.spacingHorizontalL,
  },
});

export interface FormLayoutProps extends HTMLAttributes<HTMLDivElement> {
  ref?: Ref<HTMLDivElement>;
  /** 字段排列方向，默认 `vertical`。 */
  direction?: FormLayoutDirection;
  children?: ReactNode;
}

/**
 * 表单字段的排布容器：字段之间的间距与分列由它统一负责，
 * 单个表单不再各写一套。渲染 `<div>`——表单元素由 `FormStack`（`@acrostack/ui/form`）承担，
 * 提交与校验逻辑与本组件无关。
 */
export function FormLayout({
  ref,
  direction = "vertical",
  className,
  children,
  ...rest
}: FormLayoutProps) {
  const styles = useStyles();

  return (
    <FormLayoutContext.Provider value={direction}>
      <div
        {...rest}
        ref={ref}
        className={mergeClasses(
          direction === "vertical" ? styles.vertical : styles.horizontal,
          className,
        )}
      >
        {children}
      </div>
    </FormLayoutContext.Provider>
  );
}
