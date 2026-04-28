import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { expect, test, vi } from "vite-plus/test";
import { useAntdForm } from "../src/index.ts";

interface Values {
  name: string;
  agree: boolean;
}

test("Form submits through TanStack handleSubmit", async () => {
  const onSubmit = vi.fn();

  function Example() {
    const form = useAntdForm<Values>({
      defaultValues: {
        name: "",
        agree: false,
      },
      onSubmit: async ({ value }) => {
        onSubmit(value);
      },
    });

    return (
      <form.Form layout="vertical">
        <form.TextField name="name" placeholder="请输入用户名" />
        <form.SubmitButton type="primary">提交</form.SubmitButton>
      </form.Form>
    );
  }

  render(<Example />);

  fireEvent.change(screen.getByPlaceholderText("请输入用户名"), {
    target: {
      value: "Alice",
    },
  });
  fireEvent.click(screen.getByRole("button", { name: /提\s*交/u }));

  await waitFor(() => {
    expect(onSubmit).toHaveBeenCalledTimes(1);
  });

  expect(onSubmit.mock.calls[0]?.[0]).toEqual({
    name: "Alice",
    agree: false,
  });
});

test("Form respects prevented native submit handler", async () => {
  const onSubmit = vi.fn();

  function Example() {
    const form = useAntdForm<Values>({
      defaultValues: {
        name: "",
        agree: false,
      },
      onSubmit: async ({ value }) => {
        onSubmit(value);
      },
    });

    return (
      <form.Form
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <form.SubmitButton>提交</form.SubmitButton>
      </form.Form>
    );
  }

  render(<Example />);

  fireEvent.click(screen.getByRole("button", { name: /提\s*交/u }));

  await waitFor(() => {
    expect(onSubmit).not.toHaveBeenCalled();
  });
});
