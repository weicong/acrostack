import { render, screen } from "@testing-library/react";
import { Upload } from "antd";
import dayjs from "dayjs";
import type { ComponentProps } from "react";
import { expect, test } from "vite-plus/test";
import { useAntdForm } from "../src/index.ts";

type UploadFileList = NonNullable<ComponentProps<typeof Upload>["fileList"]>;

interface Values {
  keyword: string;
  searchKeyword: string;
  assignee: string;
  otpCode: string;
  bio: string;
  password: string;
  tags: string[];
  age: number;
  progress: number;
  score: number;
  category: string;
  viewMode: string;
  themeColor: string;
  enabled: boolean;
  level: string;
  birthday: ReturnType<typeof dayjs> | null;
  appointmentAt: ReturnType<typeof dayjs> | null;
  billingMonth: ReturnType<typeof dayjs> | null;
  sprintWeek: ReturnType<typeof dayjs> | null;
  fiscalQuarter: ReturnType<typeof dayjs> | null;
  archiveYear: ReturnType<typeof dayjs> | null;
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
      searchKeyword: "杭州西湖",
      assignee: "@weicong",
      otpCode: "123456",
      bio: "多行简介",
      password: "secret-123",
      tags: ["研发", "前端"],
      age: 28,
      progress: 75,
      score: 4.5,
      category: "admin",
      viewMode: "month",
      themeColor: "#1677ff",
      enabled: true,
      level: "high",
      birthday: dayjs("2024-05-20"),
      appointmentAt: dayjs("2024-05-20 14:45:30"),
      billingMonth: dayjs("2024-05-01"),
      sprintWeek: dayjs("2024-05-20"),
      fiscalQuarter: dayjs("2024-05-20"),
      archiveYear: dayjs("2024-01-01"),
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
      <form.SearchField name="searchKeyword" label="搜索" />
      <form.MentionsField name="assignee" label="负责人" />
      <form.OtpField name="otpCode" label="验证码" />
      <form.TextAreaField name="bio" label="简介" />
      <form.PasswordField name="password" label="密码" />
      <form.CheckboxGroupField name="tags" label="标签" />
      <form.NumberField name="age" label="年龄" />
      <form.SliderField name="progress" label="进度" />
      <form.RateField name="score" label="评分" />
      <form.SelectField name="category" label="分类" />
      <form.SegmentedField
        name="viewMode"
        label="视图模式"
        options={[
          { label: "月", value: "month" },
          { label: "周", value: "week" },
        ]}
      />
      <form.ColorPickerField name="themeColor" label="主题色" />
      <form.SwitchField name="enabled" label="开关" />
      <form.RadioGroupField name="level" label="等级" />
      <form.DatePickerField name="birthday" label="生日" />
      <form.DateTimePickerField name="appointmentAt" label="预约时间" />
      <form.MonthPickerField name="billingMonth" label="账期" />
      <form.WeekPickerField name="sprintWeek" label="周次" />
      <form.QuarterPickerField name="fiscalQuarter" label="季度" />
      <form.YearPickerField name="archiveYear" label="归档年份" />
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
  expect(screen.getByText("杭州西湖")).toBeTruthy();
  expect(screen.getByText("@weicong")).toBeTruthy();
  expect(screen.getByText("123456")).toBeTruthy();
  expect(screen.getByText("多行简介")).toBeTruthy();
  expect(screen.getByText("secret-123")).toBeTruthy();
  expect(screen.getByText("研发、前端")).toBeTruthy();
  expect(screen.getByText("28")).toBeTruthy();
  expect(screen.getByText("75")).toBeTruthy();
  expect(screen.getByText("4.5")).toBeTruthy();
  expect(screen.getByText("admin")).toBeTruthy();
  expect(screen.getByText("month")).toBeTruthy();
  expect(screen.getByText("#1677ff")).toBeTruthy();
  expect(screen.getByText("是")).toBeTruthy();
  expect(screen.getByText("high")).toBeTruthy();
  expect(screen.getByText("2024-05-20")).toBeTruthy();
  expect(screen.getByText("2024-05-20 14:45:30")).toBeTruthy();
  expect(screen.getByText("2024-05")).toBeTruthy();
  expect(screen.getByText("2024-Q2")).toBeTruthy();
  expect(screen.getByText("2024")).toBeTruthy();
  expect(screen.getByText("08:30:00")).toBeTruthy();
  expect(screen.getByText("2024-05-01 ~ 2024-05-31")).toBeTruthy();
  expect(screen.getByText("09:00:00 ~ 18:00:00")).toBeTruthy();
  expect(screen.getByText("engineering/frontend")).toBeTruthy();
  expect(screen.getByText("zhejiang、hangzhou、xihu")).toBeTruthy();
  expect(screen.getByText("read、write")).toBeTruthy();
  expect(screen.getByText("resume.pdf")).toBeTruthy();
});
