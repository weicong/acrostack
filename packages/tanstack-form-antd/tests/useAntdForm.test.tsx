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
  expect(typeof result.current.CheckboxField).toBe("function");
  expect(typeof result.current.SubmitButton).toBe("function");
  expect(typeof result.current.ResetButton).toBe("function");
});
