import type { ComponentProps } from "react";
import { Loader2Icon } from "lucide-react";
import { Button } from "#components/button";
import { useFormContext } from "../form-context";

export interface SubmitButtonProps extends Omit<
  ComponentProps<typeof Button>,
  "type" | "disabled"
> {
  /** Button label text */
  label?: string;
}

/**
 * A submit button that reactively disables during form submission.
 *
 * - Disables when the form is invalid (`canSubmit === false`) or submitting.
 * - Shows a spinner while submitting.
 *
 * Must be used inside `<form.AppForm>` to access the form context.
 */
export function SubmitButton({ label = "Submit", children, ...rest }: SubmitButtonProps) {
  const form = useFormContext();

  return (
    <form.Subscribe<{ canSubmit: boolean; isSubmitting: boolean }>
      selector={(state) => ({
        canSubmit: state.canSubmit,
        isSubmitting: state.isSubmitting,
      })}
    >
      {({ canSubmit, isSubmitting }) => (
        <Button {...rest} type="submit" disabled={!canSubmit || isSubmitting}>
          {isSubmitting && <Loader2Icon className="size-4 animate-spin" />}
          {children ?? label}
        </Button>
      )}
    </form.Subscribe>
  );
}
