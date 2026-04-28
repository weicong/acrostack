import { useState } from "react";
import { useAntdForm } from "@acrostack/tanstack-form-antd";
import { Card, Divider, Space, Switch, Typography, message } from "antd";

const { Text } = Typography;

type UserProfile = {
  basicInfo: {
    firstName: string;
    lastName: string;
    role: string;
  };
  bio: string;
  notifications: boolean;
};

export function Basic() {
  const [preview, setPreview] = useState(false);
  const { Form, Subscribe, TextField, CheckboxField, SubmitButton, ResetButton } =
    useAntdForm<UserProfile>({
      defaultValues: {
        basicInfo: {
          firstName: "张",
          lastName: "三",
          role: "管理员",
        },
        bio: "一个使用 TanStack Form 和 Ant Design 构建的演示表单。",
        notifications: true,
      },
      onSubmit: async ({ value }) => {
        console.log("提交结果:", value);
        message.success("表单提交成功，可在控制台查看详情。");
      },
    });

  return (
    <Card
      title="内建字段与预览模式"
      variant="borderless"
      extra={
        <Space>
          <span>预览模式：</span>
          <Switch checked={preview} onChange={setPreview} />
        </Space>
      }
    >
      <Form layout="vertical" mode={preview ? "view" : "edit"}>
        <Space orientation="vertical" style={{ width: "100%" }} size="middle">
          <Text type="secondary">
            这个示例使用内建的 `TextField` 和 `CheckboxField`，同时演示嵌套字段路径，以及
            `validators` 根据 `name` 自动推导 `value` 类型。
          </Text>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            <TextField
              name="basicInfo.firstName"
              label="名"
              placeholder="请输入名"
              validators={{
                onBlur: ({ value }) => {
                  if (!value) {
                    return "请输入名";
                  }

                  return undefined;
                },
              }}
            />
            <TextField
              name="basicInfo.lastName"
              label="姓"
              placeholder="请输入姓"
              validators={{
                onBlur: ({ value }) => {
                  if (!value) {
                    return "请输入姓";
                  }

                  return undefined;
                },
              }}
            />
          </div>

          <TextField
            name="basicInfo.role"
            label="角色"
            placeholder="请输入角色"
            validators={{
              onBlur: ({ value }) => {
                if (!value) {
                  return "请输入角色";
                }

                return undefined;
              },
            }}
          />

          <TextField
            name="bio"
            label="简介"
            placeholder="请输入个人简介"
            validators={{
              onChange: ({ value }) => {
                if (value.length > 120) {
                  return "个人简介不能超过 120 个字符";
                }

                return undefined;
              },
            }}
          />

          <CheckboxField name="notifications" label="通知设置">
            开启通知
          </CheckboxField>

          <Divider style={{ margin: 0 }} />

          <Subscribe selector={(state: any) => state.values.basicInfo as UserProfile["basicInfo"]}>
            {(basicInfo) => (
              <div
                style={{
                  padding: 12,
                  background: "#fafafa",
                  borderRadius: 8,
                  border: "1px dashed #d9d9d9",
                }}
              >
                <Text strong>实时预览姓名：</Text>
                {basicInfo.firstName} {basicInfo.lastName}
              </div>
            )}
          </Subscribe>

          <Space>
            <SubmitButton size="large">保存资料</SubmitButton>
            <ResetButton size="large">重置</ResetButton>
          </Space>
        </Space>
      </Form>
    </Card>
  );
}
