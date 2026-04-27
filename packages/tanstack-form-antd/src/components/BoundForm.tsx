import type { ComponentProps, MutableRefObject } from "react";
import { Form as AntdForm } from "antd";
import { getContextOrThrow, type InternalFormContextValue } from "../context/InternalFormContext";
import type { BoundFormComponent, BoundFormProps } from "../types";

export function createBoundForm<TValues>(
  contextRef: MutableRefObject<InternalFormContextValue<TValues> | null>,
): BoundFormComponent {
  return function BoundForm(props: BoundFormProps) {
    const context = getContextOrThrow(contextRef);
    const { form, config } = context;
    const { onSubmitSuccess, onSubmitError, disabled, size, ...restProps } = props;
    const formProps = restProps as ComponentProps<typeof AntdForm>;

    return (
      <AntdForm
        {...formProps}
        disabled={disabled ?? config.disabled}
        size={size ?? config.size}
        onFinish={async () => {
          try {
            await form.handleSubmit();
            await onSubmitSuccess?.();
          } catch (error) {
            await onSubmitError?.(error);
          }
        }}
      />
    );
  };
}
