import { Button, type ButtonProps, Spinner } from "@fluentui/react-components";
import { useFormContext } from "../form-context";

export interface SubmitButtonProps extends Omit<ButtonProps, "type" | "disabled"> {
  /** Button label text */
  label?: string;
}

/**
 * A submit button that reactively disables during form submission.
 *
 * - Disables when the form is invalid (`canSubmit === false`) or submitting.
 * - Shows a spinner icon while submitting.
 *
 * Must be used inside `<form.AppForm>` to access the form context.
 */
export function SubmitButton({ label = "Submit", ...rest }: SubmitButtonProps) {
  const form = useFormContext();

  return (
    <form.Subscribe<{ canSubmit: boolean; isSubmitting: boolean }>
      selector={(state) => ({
        canSubmit: state.canSubmit,
        isSubmitting: state.isSubmitting,
      })}
    >
      {({ canSubmit, isSubmitting }) => (
        <Button
          {...(rest as ButtonProps)}
          type="submit"
          appearance="primary"
          disabled={!canSubmit || isSubmitting}
          icon={isSubmitting ? <Spinner size="tiny" /> : undefined}
        >
          {label}
        </Button>
      )}
    </form.Subscribe>
  );
}
