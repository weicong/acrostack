import type { MutableRefObject } from "react";
import { Button } from "antd";
import { getContextOrThrow, type InternalFormContextValue } from "../context/InternalFormContext";
import type { BoundResetButtonComponent, ResetButtonProps } from "../types";

export function createResetButton<TValues>(
  contextRef: MutableRefObject<InternalFormContextValue<TValues> | null>,
): BoundResetButtonComponent {
  return function ResetButton(props: ResetButtonProps) {
    const context = getContextOrThrow(contextRef);
    const { form, config } = context;
    const { autoDisabled = true, disabled, beforeReset, onClick, ...restProps } = props;

    const finalDisabled = autoDisabled ? Boolean(disabled) || config.mode === "preview" : disabled;

    return (
      <Button
        {...restProps}
        disabled={finalDisabled}
        onClick={async (event) => {
          onClick?.(event);
          if (event.defaultPrevented) {
            return;
          }
          if (beforeReset) {
            const shouldReset = await beforeReset();
            if (!shouldReset) {
              return;
            }
          }
          form.reset();
        }}
      />
    );
  };
}
