import type { MutableRefObject } from "react";
import { Button } from "antd";
import { getContextOrThrow, type InternalFormContextValue } from "../context/InternalFormContext";
import type { BoundSubmitButtonComponent, FormStateLike, SubmitButtonProps } from "../types";

export function createSubmitButton<TValues>(
  contextRef: MutableRefObject<InternalFormContextValue<TValues> | null>,
): BoundSubmitButtonComponent {
  return function SubmitButton(props: SubmitButtonProps) {
    const context = getContextOrThrow(contextRef);
    const { form, config } = context;
    const {
      autoLoading = true,
      autoDisabled = true,
      type = "primary",
      htmlType = "submit",
      loading: userLoading,
      disabled: userDisabled,
      ...restProps
    } = props;

    return (
      <form.Subscribe
        selector={(state: FormStateLike<TValues>) => ({
          canSubmit: state.canSubmit,
          isSubmitting: state.isSubmitting,
        })}
      >
        {(state: { canSubmit: boolean; isSubmitting: boolean }) => {
          const finalLoading = autoLoading ? (userLoading ?? state.isSubmitting) : userLoading;
          const finalDisabled = autoDisabled
            ? Boolean(userDisabled) || !state.canSubmit || config.mode === "preview"
            : userDisabled;

          return (
            <Button
              {...restProps}
              type={type}
              htmlType={htmlType}
              loading={finalLoading}
              disabled={finalDisabled}
            />
          );
        }}
      </form.Subscribe>
    );
  };
}
