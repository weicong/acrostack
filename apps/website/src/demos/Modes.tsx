import { useState } from "react";
import { useAntdForm } from "@acrostack/tanstack-form-antd";
import type { ErrorDisplayMode, FormMode } from "@acrostack/tanstack-form-antd";
import { Card, Col, Row, Segmented, Space, Typography, message } from "antd";

const { Paragraph, Text } = Typography;

type ModeDemoValues = {
  name: string;
  role: string;
  active: boolean;
  score: number;
};

export function Modes() {
  const [mode, setMode] = useState<FormMode>("edit");
  const [errorDisplayMode, setErrorDisplayMode] = useState<ErrorDisplayMode>("touched");
  const form = useAntdForm<ModeDemoValues>({
    defaultValues: {
      name: "",
      role: "viewer",
      active: true,
      score: 3,
    },
    onSubmit: async ({ value }) => {
      console.log("mode demo submit", value);
      message.success("模式示例提交成功。");
    },
  });

  return (
    <Card
      title="模式与错误展示"
      variant="borderless"
      extra={
        <Space size="large">
          <Space size="small">
            <Text type="secondary">模式</Text>
            <Segmented<FormMode>
              value={mode}
              onChange={(value) => setMode(value)}
              options={[
                { label: "编辑", value: "edit" },
                { label: "查看", value: "view" },
                { label: "禁用", value: "disabled" },
              ]}
            />
          </Space>
          <Space size="small">
            <Text type="secondary">错误策略</Text>
            <Segmented<ErrorDisplayMode>
              value={errorDisplayMode}
              onChange={(value) => setErrorDisplayMode(value)}
              options={[
                { label: "touched", value: "touched" },
                { label: "dirty", value: "dirty" },
                { label: "submitted", value: "submitted" },
              ]}
            />
          </Space>
        </Space>
      }
    >
      <form.Form layout="vertical" mode={mode} errorDisplayMode={errorDisplayMode}>
        <Space orientation="vertical" size="large" style={{ width: "100%" }}>
          <Paragraph type="secondary" style={{ marginBottom: 0 }}>
            这个示例专门演示 `Form mode` 和 `errorDisplayMode` 对字段交互与错误展示的影响。
          </Paragraph>

          <Row gutter={16}>
            <Col span={12}>
              <form.TextField
                name="name"
                label="姓名"
                placeholder="请输入姓名"
                validators={{
                  onBlur: ({ value }) => {
                    if (!value) {
                      return "请输入姓名";
                    }

                    return undefined;
                  },
                }}
              />
            </Col>
            <Col span={12}>
              <form.SelectField
                name="role"
                label="角色"
                options={[
                  { label: "访客", value: "viewer" },
                  { label: "编辑", value: "editor" },
                  { label: "管理员", value: "admin" },
                ]}
              />
            </Col>
          </Row>

          <Row gutter={16}>
            <Col span={12}>
              <form.SwitchField name="active" label="启用状态" />
            </Col>
            <Col span={12}>
              <form.RateField
                name="score"
                label="评分"
                validators={{
                  onChange: ({ value }) => {
                    if (!value || value < 2) {
                      return "评分至少为 2";
                    }

                    return undefined;
                  },
                }}
              />
            </Col>
          </Row>

          <div
            style={{
              padding: 12,
              background: "#fafafa",
              borderRadius: 8,
              border: "1px dashed #d9d9d9",
            }}
          >
            <Text strong>当前表单值：</Text>
            <form.Subscribe selector={(state) => state.values}>
              {(values) => (
                <pre style={{ margin: "8px 0 0", whiteSpace: "pre-wrap" }}>
                  {JSON.stringify(values, null, 2)}
                </pre>
              )}
            </form.Subscribe>
          </div>

          <Space>
            <form.SubmitButton type="primary">提交</form.SubmitButton>
            <form.ResetButton>重置</form.ResetButton>
          </Space>
        </Space>
      </form.Form>
    </Card>
  );
}
