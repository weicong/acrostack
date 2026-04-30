import { renderHook } from "@testing-library/react";
import { expect, test, vi } from "vite-plus/test";
import { useAntdForm } from "../src/index.ts";

interface Values {
  name: string;
  agree: boolean;
}

test("useAntdForm returns TanStack form api and bound antd components", () => {
  const onSubmit = vi.fn();
  const { result } = renderHook(() =>
    useAntdForm<Values>({
      defaultValues: {
        name: "",
        agree: false,
      },
      onSubmit: async (payload) => {
        onSubmit(payload.value);
      },
    }),
  );

  expect(typeof result.current.handleSubmit).toBe("function");
  expect(typeof result.current.reset).toBe("function");
  expect(result.current.Field).toBe(result.current.form.Field);
  expect(typeof result.current.Form).toBe("function");
  expect(typeof result.current.TextField).toBe("function");
  expect(typeof result.current.TextAreaField).toBe("function");
  expect(typeof result.current.PasswordField).toBe("function");
  expect(typeof result.current.CheckboxField).toBe("function");
  expect(typeof result.current.CheckboxGroupField).toBe("function");
  expect(typeof result.current.NumberField).toBe("function");
  expect(typeof result.current.SelectField).toBe("function");
  expect(typeof result.current.SwitchField).toBe("function");
  expect(typeof result.current.RadioGroupField).toBe("function");
  expect(typeof result.current.DatePickerField).toBe("function");
  expect(typeof result.current.DateRangePickerField).toBe("function");
  expect(typeof result.current.TimePickerField).toBe("function");
  expect(typeof result.current.TimeRangeField).toBe("function");
  expect(typeof result.current.TreeSelectField).toBe("function");
  expect(typeof result.current.CascaderField).toBe("function");
  expect(typeof result.current.TransferField).toBe("function");
  expect(typeof result.current.UploadField).toBe("function");
  expect(typeof result.current.SubmitButton).toBe("function");
  expect(typeof result.current.ResetButton).toBe("function");
});
