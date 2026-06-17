import {
  Card as FluentCard,
  CardHeader as FluentCardHeader,
  type CardProps as FluentCardProps,
} from "@fluentui/react-components";
import { forwardRef, type ReactNode } from "react";

export const Card = forwardRef<HTMLDivElement, FluentCardProps & { className?: string }>(
  ({ className: _className, ...props }, ref) => {
    return <FluentCard ref={ref} {...props} />;
  },
);
Card.displayName = "Card";

export const CardHeader = forwardRef<HTMLDivElement, { children?: ReactNode; className?: string }>(
  ({ children, className: _className, ...props }, ref) => (
    <FluentCardHeader ref={ref as never} {...props}>
      {children}
    </FluentCardHeader>
  ),
);
CardHeader.displayName = "CardHeader";

export const CardTitle = forwardRef<HTMLDivElement, { children?: ReactNode; className?: string }>(
  ({ children, className: _className }, ref) => (
    <div ref={ref} style={{ fontWeight: 600, fontSize: "1.125rem", lineHeight: 1.2 }}>
      {children}
    </div>
  ),
);
CardTitle.displayName = "CardTitle";

export const CardDescription = forwardRef<
  HTMLDivElement,
  { children?: ReactNode; className?: string }
>(({ children, className: _className }, ref) => (
  <div ref={ref} style={{ fontSize: "0.875rem", color: "var(--colorNeutralForeground3)" }}>
    {children}
  </div>
));
CardDescription.displayName = "CardDescription";

export const CardContent = forwardRef<HTMLDivElement, { children?: ReactNode; className?: string }>(
  ({ children, className: _className }, ref) => (
    <div ref={ref} style={{ padding: "0 1.5rem 1.5rem" }}>
      {children}
    </div>
  ),
);
CardContent.displayName = "CardContent";

export const CardFooter = forwardRef<HTMLDivElement, { children?: ReactNode; className?: string }>(
  ({ children, className: _className }, ref) => (
    <div ref={ref} style={{ display: "flex", alignItems: "center", padding: "0 1.5rem 1.5rem" }}>
      {children}
    </div>
  ),
);
CardFooter.displayName = "CardFooter";
