import { useState } from "react";
import { afterEach, describe, expect, test, vi } from "vite-plus/test";
import { cleanup, fireEvent, render, screen, waitFor } from "@testing-library/react";
import { useAntdForm, validators } from "../src";

type DemoValues = {
  firstName: string;
  notifications: boolean;
};

afterEach(() => {
  cleanup();
});

function DemoForm(props: {
  mode?: "edit" | "preview";
  showErrorWhen?: "touched" | "dirty" | "submitted" | "touchedOrSubmitted" | "always";
  onTextChange?: (value: string) => void;
  onTextBlur?: () => void;
  onSwitchChange?: (checked: boolean) => void;
  onSubmitValue?: (value: DemoValues) => void;
  beforeReset?: () => boolean | Promise<boolean>;
}) {
  const [submitCount, setSubmitCount] = useState(0);
  const { Form, TextField, SwitchField, SubmitButton, ResetButton } = useAntdForm<DemoValues>({
    mode: props.mode,
    showErrorWhen: props.showErrorWhen,
    defaultValues: {
      firstName: "",
      notifications: false,
    },
    onSubmit: async ({ value }: { value: DemoValues }) => {
      setSubmitCount((count) => count + 1);
      props.onSubmitValue?.(value);
    },
  });

  return (
    <>
      <Form layout="vertical">
        <TextField
          name="firstName"
          label="First Name"
          validators={validators.required("First name is required")}
          onChange={(event) => props.onTextChange?.(event.target.value)}
          onBlur={() => props.onTextBlur?.()}
        />
        <SwitchField
          name="notifications"
          label="Notifications"
          checkedChildren="ON"
          unCheckedChildren="OFF"
          validators={{
            onBlur: ({ value }: { value: boolean }) =>
              value ? undefined : "Notifications are required",
          }}
          onChange={(checked) => props.onSwitchChange?.(checked)}
        />
        <SubmitButton>Submit</SubmitButton>
        <ResetButton beforeReset={props.beforeReset}>Reset</ResetButton>
      </Form>
      <div data-testid="submit-count">{submitCount}</div>
    </>
  );
}

function PreviewForm() {
  const { Form, TextField } = useAntdForm<DemoValues>({
    mode: "preview",
    defaultValues: {
      firstName: "Alice",
      notifications: true,
    },
  });

  return (
    <Form layout="vertical">
      <TextField
        name="firstName"
        label="First Name"
        renderPreview={(value) => `${value} (${value.length})`}
      />
    </Form>
  );
}

function ErrorFormItemOverrideForm() {
  const { Form, TextField } = useAntdForm<DemoValues>({
    showErrorWhen: "touched",
    defaultValues: {
      firstName: "",
      notifications: false,
    },
  });

  return (
    <Form layout="vertical">
      <TextField
        name="firstName"
        label="First Name"
        validators={{
          onBlur: validators.required("First name is required"),
        }}
        formItemProps={{ help: "Custom help" } as never}
      />
    </Form>
  );
}

describe("tanstack-form-antd field bridge", () => {
  test("forwards text field change and blur handlers", async () => {
    const onTextChange = vi.fn();
    const onTextBlur = vi.fn();

    render(<DemoForm onTextChange={onTextChange} onTextBlur={onTextBlur} />);

    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: "Alice" } });
    fireEvent.blur(input);

    expect(onTextChange).toHaveBeenCalledWith("Alice");
    expect(onTextBlur).toHaveBeenCalledTimes(1);
  });

  test("marks switch as touched after interaction so touched-mode errors can appear", async () => {
    render(<DemoForm showErrorWhen="touched" />);

    const switchButton = screen.getByRole("switch");
    fireEvent.click(switchButton);
    fireEvent.click(switchButton);

    await waitFor(() => {
      expect(screen.getByText("Notifications are required")).toBeTruthy();
    });
  });

  test("respects preview mode for submit and reset buttons", () => {
    render(<DemoForm mode="preview" />);

    expect((screen.getByRole("button", { name: "Submit" }) as HTMLButtonElement).disabled).toBe(
      true,
    );
    expect((screen.getByRole("button", { name: "Reset" }) as HTMLButtonElement).disabled).toBe(
      true,
    );
  });

  test("runs beforeReset guard before resetting field state", async () => {
    const beforeReset = vi.fn(async () => false);

    render(<DemoForm beforeReset={beforeReset} />);

    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: "Alice" } });
    fireEvent.click(screen.getByRole("button", { name: "Reset" }));

    await waitFor(() => {
      expect(beforeReset).toHaveBeenCalledTimes(1);
    });

    expect((input as HTMLInputElement).value).toBe("Alice");
  });

  test("uses renderPreview with formatted value in preview mode", () => {
    render(<PreviewForm />);

    expect(screen.getByText("Alice (5)")).toBeTruthy();
  });

  test("keeps internal error state ahead of formItemProps overrides", async () => {
    render(<ErrorFormItemOverrideForm />);

    const input = screen.getByRole("textbox");
    fireEvent.blur(input);

    await waitFor(() => {
      expect(screen.getByText("First name is required")).toBeTruthy();
    });

    expect(screen.queryByText("Custom help")).toBeNull();
  });

  test("submits current field values", async () => {
    const onSubmitValue = vi.fn();
    const onSwitchChange = vi.fn();

    render(<DemoForm onSubmitValue={onSubmitValue} onSwitchChange={onSwitchChange} />);

    fireEvent.change(screen.getByRole("textbox"), { target: { value: "Alice" } });
    fireEvent.click(screen.getByRole("switch"));
    fireEvent.click(screen.getByRole("button", { name: "Submit" }));

    await waitFor(() => {
      expect(onSubmitValue).toHaveBeenCalledWith({
        firstName: "Alice",
        notifications: true,
      });
    });

    expect(onSwitchChange).toHaveBeenCalledWith(true);
    expect(screen.getByTestId("submit-count").textContent).toBe("1");
  });
});
