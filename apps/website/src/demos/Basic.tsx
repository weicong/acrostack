import { useAntdForm } from "@acrostack/tanstack-form-antd";
import { Button, Card, Col, Collapse, Row, Space, Typography, Upload, message } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import dayjs from "dayjs";
import type { ComponentProps } from "react";

const { Paragraph, Text } = Typography;

type UploadFileList = NonNullable<ComponentProps<typeof Upload>["fileList"]>;

type ShowcaseValues = {
  username: string;
  keyword: string;
  searchKeyword: string;
  assignee: string;
  otpCode: string;
  bio: string;
  password: string;
  agree: boolean;
  tags: string[];
  age: number;
  progress: number;
  score: number;
  category: string;
  viewMode: string;
  themeColor: string;
  enabled: boolean;
  level: string;
  birthday: dayjs.Dayjs | null;
  appointmentAt: dayjs.Dayjs | null;
  billingMonth: dayjs.Dayjs | null;
  sprintWeek: dayjs.Dayjs | null;
  fiscalQuarter: dayjs.Dayjs | null;
  archiveYear: dayjs.Dayjs | null;
  availableAt: dayjs.Dayjs | null;
  activeDateRange: [dayjs.Dayjs | null, dayjs.Dayjs | null] | null;
  activeTimeRange: [dayjs.Dayjs | null, dayjs.Dayjs | null] | null;
  department: string;
  location: string[];
  permissions: string[];
  attachments: UploadFileList;
};

const departmentTree = [
  {
    title: "研发中心",
    value: "engineering",
    children: [
      { title: "前端", value: "engineering/frontend" },
      { title: "后端", value: "engineering/backend" },
    ],
  },
];

const regionOptions = [
  {
    value: "zhejiang",
    label: "浙江",
    children: [
      {
        value: "hangzhou",
        label: "杭州",
        children: [{ value: "xihu", label: "西湖区" }],
      },
    ],
  },
];

const transferData = [
  { key: "read", title: "读取权限" },
  { key: "write", title: "写入权限" },
  { key: "publish", title: "发布权限" },
];

export function Basic() {
  const form = useAntdForm<ShowcaseValues>({
    defaultValues: {
      username: "weicong",
      keyword: "杭州",
      searchKeyword: "杭州西湖",
      assignee: "@weicong",
      otpCode: "123456",
      bio: "展示 TanStack Form 与 Ant Design 的深度集成能力。",
      password: "secret-123",
      agree: true,
      tags: ["react", "typescript"],
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
    onSubmit: async ({ value }) => {
      console.log("showcase submit", value);
      message.success("字段总览表单已提交，可在控制台查看值。");
    },
  });

  return (
    <Card title="字段总览" variant="borderless">
      <form.Form layout="vertical">
        <Space orientation="vertical" size="large" style={{ width: "100%" }}>
          <Paragraph type="secondary" style={{ marginBottom: 0 }}>
            集中展示所有内建字段组件，便于快速查看 API 和视觉效果。CRUD 示例位于独立标签页。
          </Paragraph>

          <Collapse
            defaultActiveKey={["text", "selection", "date", "other"]}
            items={[
              {
                key: "text",
                label: "文本输入类",
                children: (
                  <Space orientation="vertical" size="middle" style={{ width: "100%" }}>
                    <Row gutter={16}>
                      <Col span={8}>
                        <form.TextField
                          name="username"
                          label="TextField"
                          placeholder="请输入用户名"
                        />
                      </Col>
                      <Col span={8}>
                        <form.SearchField
                          name="searchKeyword"
                          label="SearchField"
                          placeholder="搜索关键词"
                        />
                      </Col>
                      <Col span={8}>
                        <form.PasswordField
                          name="password"
                          label="PasswordField"
                          placeholder="请输入密码"
                        />
                      </Col>
                    </Row>

                    <Row gutter={16}>
                      <Col span={8}>
                        <form.AutoCompleteField
                          name="keyword"
                          label="AutoCompleteField"
                          options={[{ value: "杭州" }, { value: "上海" }, { value: "北京" }]}
                        />
                      </Col>
                      <Col span={8}>
                        <form.MentionsField
                          name="assignee"
                          label="MentionsField"
                          options={[{ value: "weicong", label: "weicong" }]}
                        />
                      </Col>
                      <Col span={8}>
                        <form.OtpField name="otpCode" label="OtpField" length={6} />
                      </Col>
                    </Row>

                    <form.TextAreaField
                      name="bio"
                      label="TextAreaField"
                      autoSize={{ minRows: 3, maxRows: 5 }}
                    />
                  </Space>
                ),
              },
              {
                key: "selection",
                label: "选择类",
                children: (
                  <Space orientation="vertical" size="middle" style={{ width: "100%" }}>
                    <Row gutter={16}>
                      <Col span={8}>
                        <form.SelectField
                          name="category"
                          label="SelectField"
                          options={[
                            { label: "管理员", value: "admin" },
                            { label: "编辑", value: "editor" },
                            { label: "访客", value: "guest" },
                          ]}
                        />
                      </Col>
                      <Col span={8}>
                        <form.TreeSelectField
                          name="department"
                          label="TreeSelectField"
                          treeData={departmentTree}
                          treeDefaultExpandAll
                        />
                      </Col>
                      <Col span={8}>
                        <form.SegmentedField
                          name="viewMode"
                          label="SegmentedField"
                          options={[
                            { label: "月", value: "month" },
                            { label: "周", value: "week" },
                            { label: "年", value: "year" },
                          ]}
                        />
                      </Col>
                    </Row>

                    <Row gutter={16}>
                      <Col span={12}>
                        <form.CascaderField
                          name="location"
                          label="CascaderField"
                          options={regionOptions}
                        />
                      </Col>
                      <Col span={12}>
                        <form.TransferField
                          name="permissions"
                          label="TransferField"
                          dataSource={transferData}
                          render={(item) => item.title ?? ""}
                          styles={{ section: { width: 220, height: 180 } }}
                        />
                      </Col>
                    </Row>
                  </Space>
                ),
              },
              {
                key: "checkbox-radio",
                label: "复选与单选类",
                children: (
                  <Space orientation="vertical" size="middle" style={{ width: "100%" }}>
                    <Row gutter={16}>
                      <Col span={8}>
                        <form.CheckboxField name="agree" label="CheckboxField">
                          我同意协议
                        </form.CheckboxField>
                      </Col>
                      <Col span={8}>
                        <form.SwitchField name="enabled" label="SwitchField" />
                      </Col>
                      <Col span={8}>
                        <form.RateField name="score" label="RateField" allowHalf />
                      </Col>
                    </Row>

                    <Row gutter={16}>
                      <Col span={12}>
                        <form.CheckboxGroupField
                          name="tags"
                          label="CheckboxGroupField"
                          options={[
                            { label: "React", value: "react" },
                            { label: "TypeScript", value: "typescript" },
                            { label: "Ant Design", value: "antd" },
                          ]}
                        />
                      </Col>
                      <Col span={12}>
                        <form.RadioGroupField
                          name="level"
                          label="RadioGroupField"
                          options={[
                            { label: "高", value: "high" },
                            { label: "中", value: "medium" },
                            { label: "低", value: "low" },
                          ]}
                        />
                      </Col>
                    </Row>
                  </Space>
                ),
              },
              {
                key: "number",
                label: "数值与颜色类",
                children: (
                  <Space orientation="vertical" size="middle" style={{ width: "100%" }}>
                    <Row gutter={16}>
                      <Col span={8}>
                        <form.NumberField
                          name="age"
                          label="NumberField"
                          min={0}
                          max={100}
                          style={{ width: "100%" }}
                        />
                      </Col>
                      <Col span={8}>
                        <form.SliderField name="progress" label="SliderField" min={0} max={100} />
                      </Col>
                      <Col span={8}>
                        <form.ColorPickerField name="themeColor" label="ColorPickerField" />
                      </Col>
                    </Row>
                  </Space>
                ),
              },
              {
                key: "date",
                label: "日期与时间类",
                children: (
                  <Space orientation="vertical" size="middle" style={{ width: "100%" }}>
                    <Row gutter={16}>
                      <Col span={8}>
                        <form.DatePickerField name="birthday" label="DatePickerField" />
                      </Col>
                      <Col span={8}>
                        <form.DateTimePickerField
                          name="appointmentAt"
                          label="DateTimePickerField"
                        />
                      </Col>
                      <Col span={8}>
                        <form.TimePickerField name="availableAt" label="TimePickerField" />
                      </Col>
                    </Row>

                    <Row gutter={16}>
                      <Col span={6}>
                        <form.MonthPickerField name="billingMonth" label="MonthPickerField" />
                      </Col>
                      <Col span={6}>
                        <form.WeekPickerField name="sprintWeek" label="WeekPickerField" />
                      </Col>
                      <Col span={6}>
                        <form.QuarterPickerField name="fiscalQuarter" label="QuarterPickerField" />
                      </Col>
                      <Col span={6}>
                        <form.YearPickerField name="archiveYear" label="YearPickerField" />
                      </Col>
                    </Row>

                    <Row gutter={16}>
                      <Col span={12}>
                        <form.DateRangePickerField
                          name="activeDateRange"
                          label="DateRangePickerField"
                        />
                      </Col>
                      <Col span={12}>
                        <form.TimeRangeField name="activeTimeRange" label="TimeRangeField" />
                      </Col>
                    </Row>
                  </Space>
                ),
              },
              {
                key: "other",
                label: "文件上传类",
                children: (
                  <form.UploadField
                    name="attachments"
                    label="UploadField"
                    beforeUpload={() => false}
                    multiple
                  >
                    <Button icon={<UploadOutlined />}>选择文件</Button>
                  </form.UploadField>
                ),
              },
            ]}
          />

          <div
            style={{
              padding: 12,
              background: "#fafafa",
              borderRadius: 8,
              border: "1px dashed #d9d9d9",
            }}
          >
            <Text strong>实时状态：</Text>
            <form.Subscribe selector={(state) => state.values}>
              {(values) => (
                <pre style={{ margin: "8px 0 0", whiteSpace: "pre-wrap" }}>
                  {JSON.stringify(values, null, 2)}
                </pre>
              )}
            </form.Subscribe>
          </div>

          <Space>
            <form.SubmitButton type="primary">提交字段总览</form.SubmitButton>
            <form.ResetButton>重置</form.ResetButton>
          </Space>
        </Space>
      </form.Form>
    </Card>
  );
}
