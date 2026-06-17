import {
  Button as FluentButton,
  type ButtonProps as FluentButtonProps,
} from "@fluentui/react-components";
import { forwardRef, type ComponentPropsWithoutRef } from "react";

type ButtonVariant =
  | "default"
  | "destructive"
  | "outline"
  | "secondary"
  | "ghost"
  | "link"
  | "primary"
  | "subtle"
  | "transparent";

type ButtonSize = "default" | "sm" | "lg" | "icon" | "small" | "medium" | "large";

export interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  asChild?: boolean;
  icon?: React.ReactElement;
}

const variantToAppearance: Record<ButtonVariant, FluentButtonProps["appearance"]> = {
  default: "primary",
  destructive: "primary",
  outline: "outline",
  secondary: "secondary",
  ghost: "subtle",
  link: "transparent",
  primary: "primary",
  subtle: "subtle",
  transparent: "transparent",
};

const sizeToFluent: Record<ButtonSize, FluentButtonProps["size"]> = {
  default: "medium",
  sm: "small",
  lg: "large",
  icon: "small",
  small: "small",
  medium: "medium",
  large: "large",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "default", size = "default", asChild: _asChild, icon, ...props }, ref) => {
    return (
      <FluentButton
        ref={ref}
        appearance={variantToAppearance[variant]}
        size={sizeToFluent[size]}
        icon={icon}
        {...(props as FluentButtonProps)}
      />
    );
  },
);

Button.displayName = "Button";

export const buttonVariants = (_opts?: {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
}) => "";
