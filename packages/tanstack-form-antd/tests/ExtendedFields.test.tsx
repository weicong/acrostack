import { render, screen } from "@testing-library/react";
import { Upload } from "antd";
import dayjs from "dayjs";
import type { ComponentProps } from "react";
import { expect, test } from "vite-plus/test";
import { useAntdForm } from "../src/index.ts";

type UploadFileList = NonNullable<ComponentProps<typeof Upload>["fileList"]>;

interface Values {
  keyword: string;
  assignee: string;
  bio: string;
  password: string;
  tags: string[];
  age: number;
  progress: number;
  score: number;
  category: string;
  themeColor: string;
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
      keyword: "杭州",
      assignee: "@weicong",
      bio: "多行简介",
      password: "secret-123",
      tags: ["研发", "前端"],
      age: 28,
      progress: 75,
      score: 4.5,
      category: "admin",
      themeColor: "#1677ff",
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
      <form.AutoCompleteField name="keyword" label="关键词" />
      <form.MentionsField name="assignee" label="负责人" />
      <form.TextAreaField name="bio" label="简介" />
      <form.PasswordField name="password" label="密码" />
      <form.CheckboxGroupField name="tags" label="标签" />
      <form.NumberField name="age" label="年龄" />
      <form.SliderField name="progress" label="进度" />
      <form.RateField name="score" label="评分" />
      <form.SelectField name="category" label="分类" />
      <form.ColorPickerField name="themeColor" label="主题色" />
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

  expect(screen.getByText("杭州")).toBeTruthy();
  expect(screen.getByText("@weicong")).toBeTruthy();
  expect(screen.getByText("多行简介")).toBeTruthy();
  expect(screen.getByText("secret-123")).toBeTruthy();
  expect(screen.getByText("研发、前端")).toBeTruthy();
  expect(screen.getByText("28")).toBeTruthy();
  expect(screen.getByText("75")).toBeTruthy();
  expect(screen.getByText("4.5")).toBeTruthy();
  expect(screen.getByText("admin")).toBeTruthy();
  expect(screen.getByText("#1677ff")).toBeTruthy();
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
