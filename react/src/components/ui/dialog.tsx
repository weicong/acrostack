import {
  Dialog as FluentDialog,
  DialogTrigger as FluentDialogTrigger,
  DialogSurface as FluentDialogSurface,
  DialogBody as FluentDialogBody,
  DialogTitle as FluentDialogTitle,
  DialogActions as FluentDialogActions,
  DialogContent as FluentDialogContent,
} from "@fluentui/react-components";
import { type ReactElement, type ReactNode } from "react";

export interface DialogProps {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  children: ReactElement | [ReactElement, ReactElement];
}

export function Dialog({ open, onOpenChange, children }: DialogProps) {
  return (
    <FluentDialog open={open} onOpenChange={(_, data) => onOpenChange?.(data.open)}>
      {children as ReactElement}
    </FluentDialog>
  );
}

export interface DialogTriggerProps {
  asChild?: boolean;
  children: ReactElement;
  onClick?: () => void;
}

export function DialogTrigger({ children }: DialogTriggerProps) {
  return <FluentDialogTrigger>{children}</FluentDialogTrigger>;
}

export interface DialogContentProps {
  children?: ReactNode;
  className?: string;
  onClose?: () => void;
}

export function DialogContent({
  children,
  className: _className,
  onClose: _onClose,
}: DialogContentProps) {
  return (
    <FluentDialogSurface>
      <FluentDialogBody>{children}</FluentDialogBody>
    </FluentDialogSurface>
  );
}

export interface DialogHeaderProps {
  children?: ReactNode;
  className?: string;
}

export function DialogHeader({ children, className: _className }: DialogHeaderProps) {
  return <div style={{ marginBottom: "0.75rem" }}>{children}</div>;
}

export interface DialogTitleProps {
  children?: ReactNode;
  className?: string;
}

export function DialogTitle({ children, className: _className }: DialogTitleProps) {
  return <FluentDialogTitle>{children}</FluentDialogTitle>;
}

export interface DialogFooterProps {
  children?: ReactNode;
  className?: string;
}

export function DialogFooter({ children, className: _className }: DialogFooterProps) {
  return <FluentDialogActions>{children}</FluentDialogActions>;
}

export { FluentDialogContent as DialogDescription };
