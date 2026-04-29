import { Button } from "antd";
import { useAntdFormContext } from "../context";
import type { AntdFormApi, ObjectFormValues, ResetButtonProps } from "../types";
import { isActionDisabled } from "../utils/mode";

export function createResetButtonComponent<TFormValues extends ObjectFormValues>(
  form: AntdFormApi<TFormValues>,
) {
  return function ResetButton(props: ResetButtonProps) {
    const { children = "重置", htmlType = "button", disabled, onClick, ...buttonProps } = props;
    const context = useAntdFormContext();
    const finalDisabled = isActionDisabled(context, disabled);

    return (
      <Button
        {...buttonProps}
        htmlType={htmlType}
        disabled={finalDisabled}
        onClick={(event) => {
          onClick?.(event);

          if (event.defaultPrevented) {
            return;
          }

          form.reset();
        }}
      >
        {children}
      </Button>
    );
  };
}
