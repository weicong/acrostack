import {
  Menu as FluentMenu,
  MenuTrigger as FluentMenuTrigger,
  MenuPopover as FluentMenuPopover,
  MenuItem as FluentMenuItem,
  MenuDivider as FluentMenuDivider,
  type MenuItemProps as FluentMenuItemProps,
} from "@fluentui/react-components";
import { forwardRef, type ReactNode } from "react";

export const DropdownMenu = FluentMenu;
export const DropdownMenuTrigger = FluentMenuTrigger;
export const DropdownMenuGroup = ({ children }: { children?: ReactNode }) => <>{children}</>;
export const DropdownMenuPortal = ({ children }: { children?: ReactNode }) => <>{children}</>;
export const DropdownMenuSub = ({ children }: { children?: ReactNode }) => <>{children}</>;
export const DropdownMenuRadioGroup = ({ children }: { children?: ReactNode }) => <>{children}</>;

export const DropdownMenuContent = forwardRef<
  HTMLDivElement,
  { children?: ReactNode; className?: string; sideOffset?: number; align?: string }
>(({ children, className: _className, sideOffset: _sideOffset, align: _align }, _ref) => (
  <FluentMenuPopover>{children}</FluentMenuPopover>
));
DropdownMenuContent.displayName = "DropdownMenuContent";

export const DropdownMenuItem = forwardRef<
  HTMLDivElement,
  FluentMenuItemProps & { inset?: boolean; className?: string; asChild?: boolean }
>(({ inset: _inset, className: _className, asChild: _asChild, ...props }, ref) => (
  <FluentMenuItem ref={ref} {...props} />
));
DropdownMenuItem.displayName = "DropdownMenuItem";

export const DropdownMenuLabel = forwardRef<
  HTMLDivElement,
  { children?: ReactNode; className?: string; inset?: boolean }
>(({ children, className: _className, inset: _inset }, ref) => (
  <div ref={ref} style={{ padding: "0.375rem 0.5rem", fontWeight: 600, fontSize: "0.875rem" }}>
    {children}
  </div>
));
DropdownMenuLabel.displayName = "DropdownMenuLabel";

export const DropdownMenuSeparator = forwardRef<HTMLDivElement, { className?: string }>(
  ({ className: _className }, _ref) => <FluentMenuDivider />,
);
DropdownMenuSeparator.displayName = "DropdownMenuSeparator";

export const DropdownMenuSubTrigger = forwardRef<
  HTMLDivElement,
  { children?: ReactNode; className?: string; inset?: boolean }
>(({ children }, _ref) => <FluentMenuItem ref={_ref}>{children}</FluentMenuItem>);
DropdownMenuSubTrigger.displayName = "DropdownMenuSubTrigger";

export const DropdownMenuSubContent = forwardRef<
  HTMLDivElement,
  { children?: ReactNode; className?: string }
>(({ children }, _ref) => <FluentMenuPopover>{children}</FluentMenuPopover>);
DropdownMenuSubContent.displayName = "DropdownMenuSubContent";
