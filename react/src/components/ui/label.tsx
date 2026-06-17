import {
  Label as FluentLabel,
  type LabelProps as FluentLabelProps,
} from "@fluentui/react-components";
import { forwardRef } from "react";

export type LabelProps = Omit<FluentLabelProps, "className"> & {
  className?: string;
};

export const Label = forwardRef<HTMLLabelElement, LabelProps>(
  ({ className: _className, ...props }, ref) => {
    return <FluentLabel ref={ref} {...props} />;
  },
);

Label.displayName = "Label";
