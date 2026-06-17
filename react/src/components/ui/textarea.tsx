import {
  Textarea as FluentTextarea,
  type TextareaProps as FluentTextareaProps,
} from "@fluentui/react-components";
import { forwardRef } from "react";

export type TextareaProps = Omit<FluentTextareaProps, "className"> & {
  className?: string;
};

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className: _className, ...props }, ref) => {
    return <FluentTextarea ref={ref} {...props} />;
  },
);

Textarea.displayName = "Textarea";
