import {
  Popover as FluentPopover,
  PopoverTrigger as FluentPopoverTrigger,
  PopoverSurface as FluentPopoverSurface,
} from "@fluentui/react-components";
import { forwardRef, type ReactNode } from "react";

export const Popover = FluentPopover;
export const PopoverTrigger = FluentPopoverTrigger;

export const PopoverAnchor = ({ children }: { children?: ReactNode }) => <>{children}</>;

export const PopoverContent = forwardRef<
  HTMLDivElement,
  { children?: ReactNode; className?: string; align?: string; sideOffset?: number }
>(({ children, className: _className, align: _align, sideOffset: _sideOffset }, ref) => (
  <FluentPopoverSurface ref={ref}>{children}</FluentPopoverSurface>
));
PopoverContent.displayName = "PopoverContent";
