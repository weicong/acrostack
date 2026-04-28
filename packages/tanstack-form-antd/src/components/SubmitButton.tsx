import { Button } from "antd";
import { useAntdFormContext } from "../context";
import type { AntdFormApi, AnyFormValues, SubmitButtonProps } from "../types";
import { isActionDisabled } from "../utils/mode";

export function createSubmitButtonComponent<TFormValues extends AnyFormValues>(
  form: AntdFormApi<TFormValues>,
) {
  return function SubmitButton(props: SubmitButtonProps) {
    const {
      children = "提交",
      htmlType = "submit",
      loading,
      disabled,
      loadingWhenSubmitting = true,
      ...buttonProps
    } = props;

    const context = useAntdFormContext();

    return (
      <form.Subscribe selector={(state) => state.isSubmitting}>
        {(isSubmitting) => {
          const finalLoading = loading ?? (loadingWhenSubmitting ? isSubmitting : false);
          const finalDisabled = isActionDisabled(context, disabled);

          return (
            <Button
              {...buttonProps}
              htmlType={htmlType}
              loading={finalLoading}
              disabled={finalDisabled}
            >
              {children}
            </Button>
          );
        }}
      </form.Subscribe>
    );
  };
}
