import { Dropdown as FluentDropdown, Option as FluentOption } from "@fluentui/react-components";
import { forwardRef, type ReactNode } from "react";

export interface SelectProps {
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  children?: ReactNode;
  disabled?: boolean;
}

export function Select({ value, defaultValue, onValueChange, children, disabled }: SelectProps) {
  return (
    <FluentDropdown
      value={value}
      defaultValue={defaultValue}
      onOptionSelect={(_, data) => onValueChange?.(data.optionValue ?? "")}
      disabled={disabled}
    >
      {children}
    </FluentDropdown>
  );
}

export const SelectTrigger = forwardRef<
  HTMLDivElement,
  { children?: ReactNode; className?: string }
>(({ children, className: _className }, _ref) => <>{children}</>);
SelectTrigger.displayName = "SelectTrigger";

export const SelectValue = ({ children }: { children?: ReactNode }) => <>{children}</>;

export const SelectContent = forwardRef<
  HTMLDivElement,
  { children?: ReactNode; className?: string; position?: string }
>(({ children }, _ref) => <>{children}</>);
SelectContent.displayName = "SelectContent";

export const SelectItem = forwardRef<
  HTMLDivElement,
  { value: string; children?: ReactNode; className?: string; disabled?: boolean }
>(({ value, children, disabled }, _ref) => (
  <FluentOption
    value={value}
    disabled={disabled}
    text={typeof children === "string" ? children : value}
  >
    {children}
  </FluentOption>
));
SelectItem.displayName = "SelectItem";

export const SelectGroup = ({ children }: { children?: ReactNode }) => <>{children}</>;
export const SelectLabel = ({ children }: { children?: ReactNode }) => <>{children}</>;
export const SelectSeparator = () => null;
export const SelectScrollUpButton = () => null;
export const SelectScrollDownButton = () => null;
