import { Button, type ButtonProps } from "@fluentui/react-components";
import { useFormContext } from "../form-context";

export interface ResetButtonProps extends Omit<ButtonProps, "onClick"> {
  /** Button label text */
  children?: ButtonProps["children"];
}

/**
 * A reset button that restores the form to its default values.
 *
 * Must be used inside `<form.AppForm>` to access the form context.
 */
export function ResetButton({ children = "Reset", ...rest }: ResetButtonProps) {
  const form = useFormContext();

  return (
    <Button appearance="secondary" {...(rest as ButtonProps)} onClick={() => form.reset()}>
      {children}
    </Button>
  );
}
