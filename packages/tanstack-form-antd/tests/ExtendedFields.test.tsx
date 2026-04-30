import { render, screen } from "@testing-library/react";
import { Upload } from "antd";
import dayjs from "dayjs";
import type { ComponentProps } from "react";
import { expect, test } from "vite-plus/test";
import { useAntdForm } from "../src/index.ts";

type UploadFileList = NonNullable<ComponentProps<typeof Upload>["fileList"]>;

interface Values {
  bio: string;
  password: string;
  tags: string[];
  age: number;
  category: string;
  enabled: boolean;
  level: string;
  birthday: ReturnType<typeof dayjs> | null;
  availableAt: ReturnType<typeof dayjs> | null;
  activeDateRange: [ReturnType<typeof dayjs> | null, ReturnType<typeof dayjs> | null] | null;
  activeTimeRange: [ReturnType<typeof dayjs> | null, ReturnType<typeof dayjs> | null] | null;
  department: string;
  location: string[];
  permissions: string[];
  attachments: UploadFileList;
}

function ExtendedFieldsViewExample() {
  const form = useAntdForm<Values>({
    defaultValues: {
      bio: "多行简介",
      password: "secret-123",
      tags: ["研发", "前端"],
      age: 28,
      category: "admin",
      enabled: true,
      level: "high",
      birthday: dayjs("2024-05-20"),
      availableAt: dayjs("2024-05-20 08:30:00"),
      activeDateRange: [dayjs("2024-05-01"), dayjs("2024-05-31")],
      activeTimeRange: [dayjs("2024-05-20 09:00:00"), dayjs("2024-05-20 18:00:00")],
      department: "engineering/frontend",
      location: ["zhejiang", "hangzhou", "xihu"],
      permissions: ["read", "write"],
      attachments: [
        {
          uid: "1",
          name: "resume.pdf",
          status: "done",
        },
      ],
    },
    onSubmit: async () => {},
  });

  return (
    <form.Form layout="vertical" mode="view">
      <form.TextAreaField name="bio" label="简介" />
      <form.PasswordField name="password" label="密码" />
      <form.CheckboxGroupField name="tags" label="标签" />
      <form.NumberField name="age" label="年龄" />
      <form.SelectField name="category" label="分类" />
      <form.SwitchField name="enabled" label="开关" />
      <form.RadioGroupField name="level" label="等级" />
      <form.DatePickerField name="birthday" label="生日" />
      <form.TimePickerField name="availableAt" label="可用时间" />
      <form.DateRangePickerField name="activeDateRange" label="生效日期" />
      <form.TimeRangeField name="activeTimeRange" label="工作时间" />
      <form.TreeSelectField name="department" label="部门" />
      <form.CascaderField name="location" label="地区" />
      <form.TransferField name="permissions" label="权限" />
      <form.UploadField name="attachments" label="附件" />
    </form.Form>
  );
}

test("extended fields render view values for built-in antd form components", () => {
  render(<ExtendedFieldsViewExample />);

  expect(screen.getByText("多行简介")).toBeTruthy();
  expect(screen.getByText("secret-123")).toBeTruthy();
  expect(screen.getByText("研发、前端")).toBeTruthy();
  expect(screen.getByText("28")).toBeTruthy();
  expect(screen.getByText("admin")).toBeTruthy();
  expect(screen.getByText("是")).toBeTruthy();
  expect(screen.getByText("high")).toBeTruthy();
  expect(screen.getByText("2024-05-20")).toBeTruthy();
  expect(screen.getByText("08:30:00")).toBeTruthy();
  expect(screen.getByText("2024-05-01 ~ 2024-05-31")).toBeTruthy();
  expect(screen.getByText("09:00:00 ~ 18:00:00")).toBeTruthy();
  expect(screen.getByText("engineering/frontend")).toBeTruthy();
  expect(screen.getByText("zhejiang、hangzhou、xihu")).toBeTruthy();
  expect(screen.getByText("read、write")).toBeTruthy();
  expect(screen.getByText("resume.pdf")).toBeTruthy();
});
