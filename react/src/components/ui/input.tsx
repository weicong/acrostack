import {
  Input as FluentInput,
  type InputProps as FluentInputProps,
} from "@fluentui/react-components";
import { forwardRef } from "react";

export type InputProps = Omit<FluentInputProps, "className"> & {
  className?: string;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className: _className, ...props }, ref) => {
    return <FluentInput ref={ref} {...props} />;
  },
);

Input.displayName = "Input";
