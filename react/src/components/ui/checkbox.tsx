import {
  Checkbox as FluentCheckbox,
  type CheckboxProps as FluentCheckboxProps,
} from "@fluentui/react-components";
import { forwardRef } from "react";

export type CheckboxProps = Omit<FluentCheckboxProps, "className"> & {
  className?: string;
};

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className: _className, ...props }, ref) => {
    return <FluentCheckbox ref={ref} {...props} />;
  },
);

Checkbox.displayName = "Checkbox";
