import { Form as AntdForm } from "antd";
import type { AntdFormApi, AntdFormProps, ObjectFormValues } from "../types";
import { AntdFormContext } from "../context";

export function createFormComponent<TFormValues extends ObjectFormValues>(
  form: AntdFormApi<TFormValues>,
) {
  return function FormComponent(props: AntdFormProps) {
    const {
      children,
      mode = "edit",
      errorDisplayMode = "touched",
      disabled,
      onSubmit,
      ...antdFormProps
    } = props;

    const isDisabled = disabled ?? mode === "disabled";

    return (
      <AntdFormContext.Provider
        value={{
          mode,
          errorDisplayMode,
          disabled: isDisabled,
          readonly: mode === "view",
        }}
      >
        <AntdForm
          {...antdFormProps}
          component="form"
          disabled={isDisabled}
          onSubmitCapture={(event) => {
            onSubmit?.(event);

            if (event.defaultPrevented) {
              return;
            }

            event.preventDefault();
            event.stopPropagation();

            void form.handleSubmit();
          }}
        >
          {children}
        </AntdForm>
      </AntdFormContext.Provider>
    );
  };
}
