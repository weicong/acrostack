import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { expect, test } from "vite-plus/test";
import { useAntdForm } from "../src/index.ts";

interface Values {
  name: string;
  agree: boolean;
}

test("ResetButton resets TanStack form state", async () => {
  function Example() {
    const form = useAntdForm<Values>({
      defaultValues: {
        name: "",
        agree: false,
      },
      onSubmit: async () => {},
    });

    return (
      <form.Form layout="vertical">
        <form.TextField name="name" placeholder="请输入用户名" />
        <form.ResetButton>重置</form.ResetButton>
      </form.Form>
    );
  }

  render(<Example />);

  const input = screen.getByPlaceholderText("请输入用户名") as HTMLInputElement;

  fireEvent.change(input, {
    target: {
      value: "before reset",
    },
  });

  expect(input.value).toBe("before reset");

  fireEvent.click(screen.getByRole("button", { name: /重\s*置/u }));

  await waitFor(() => {
    expect(input.value).toBe("");
  });
});

test("SubmitButton is disabled in view mode", () => {
  function Example() {
    const form = useAntdForm<Values>({
      defaultValues: {
        name: "readonly",
        agree: true,
      },
      onSubmit: async () => {},
    });

    return (
      <form.Form mode="view">
        <form.SubmitButton>提交</form.SubmitButton>
      </form.Form>
    );
  }

  render(<Example />);

  expect((screen.getByRole("button", { name: /提\s*交/u }) as HTMLButtonElement).disabled).toBe(
    true,
  );
});
