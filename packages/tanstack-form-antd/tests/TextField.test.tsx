import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { expect, test } from "vite-plus/test";
import { useAntdForm } from "../src/index.ts";

interface Values {
  name: string;
  agree: boolean;
}

function TextFieldExample() {
  const form = useAntdForm<Values>({
    defaultValues: {
      name: "",
      agree: false,
    },
    onSubmit: async () => {},
  });

  return (
    <form.Form layout="vertical">
      <form.TextField
        name="name"
        label="用户名"
        placeholder="请输入用户名"
        validators={{
          onBlur: ({ value }) => {
            if (!value) {
              return "请输入用户名";
            }

            return undefined;
          },
        }}
      />
    </form.Form>
  );
}

test("TextField binds input value and shows touched errors from TanStack validators", async () => {
  render(<TextFieldExample />);

  const input = screen.getByPlaceholderText("请输入用户名") as HTMLInputElement;

  expect(input.value).toBe("");

  fireEvent.blur(input);

  await waitFor(() => {
    expect(screen.getByText("请输入用户名")).toBeTruthy();
  });

  fireEvent.change(input, {
    target: {
      value: "张三",
    },
  });

  expect(input.value).toBe("张三");
});
