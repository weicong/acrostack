import { fireEvent, render, screen } from "@testing-library/react";
import { expect, test } from "vite-plus/test";
import { useAntdForm } from "../src/index.ts";

interface Values {
  name: string;
  agree: boolean;
}

function CheckboxExample() {
  const form = useAntdForm<Values>({
    defaultValues: {
      name: "",
      agree: false,
    },
    onSubmit: async () => {},
  });

  return (
    <form.Form layout="vertical">
      <form.CheckboxField name="agree" label="协议">
        我同意协议
      </form.CheckboxField>
      <form.Field name="agree">
        {(field) => <span data-testid="checkbox-value">{String(field.state.value)}</span>}
      </form.Field>
    </form.Form>
  );
}

test("CheckboxField binds checked state to TanStack form", () => {
  render(<CheckboxExample />);

  const checkbox = screen.getByRole("checkbox", { name: "我同意协议" }) as HTMLInputElement;
  const value = screen.getByTestId("checkbox-value");

  expect(checkbox.checked).toBe(false);
  expect(value.textContent).toBe("false");

  fireEvent.click(checkbox);

  expect(checkbox.checked).toBe(true);
  expect(value.textContent).toBe("true");
});
