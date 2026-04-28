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
          firstName: "Ant",
          lastName: "Gravity",
          role: "admin",
        },
        bio: "Coding assistant powered by DeepMind.",
        notifications: true,
      },
      onSubmit: async ({ value }) => {
        console.log("Submitted values:", value);
        message.success("Form submitted successfully! Check console for details.");
      },
    });

  return (
    <Card
      title="User Profile Form"
      variant="borderless"
      extra={
        <Space>
          <span>Preview Mode:</span>
          <Switch checked={preview} onChange={setPreview} />
        </Space>
      }
    >
      <Form layout="vertical" mode={preview ? "view" : "edit"}>
        <Space orientation="vertical" style={{ width: "100%" }} size="middle">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            <TextField
              name="basicInfo.firstName"
              label="First Name"
              placeholder="Enter first name"
              validators={{
                onBlur: ({ value }) => {
                  if (!value) {
                    return "First name is required";
                  }

                  return undefined;
                },
              }}
            />
            <TextField
              name="basicInfo.lastName"
              label="Last Name"
              placeholder="Enter last name"
              validators={{
                onBlur: ({ value }) => {
                  if (!value) {
                    return "Last name is required";
                  }

                  return undefined;
                },
              }}
            />
          </div>

          <TextField
            name="basicInfo.role"
            label="Role"
            placeholder="Enter role"
            validators={{
              onBlur: ({ value }) => {
                if (!value) {
                  return "Role is required";
                }

                return undefined;
              },
            }}
          />

          <TextField
            name="bio"
            label="Biography"
            placeholder="Tell us about yourself..."
            validators={{
              onChange: ({ value }) => {
                if (value.length > 120) {
                  return "Biography must be under 120 characters";
                }

                return undefined;
              },
            }}
          />

          <CheckboxField name="notifications" label="Notifications">
            Enable notifications
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
                <Text strong>Live Preview Name:</Text> {basicInfo.firstName} {basicInfo.lastName}
              </div>
            )}
          </Subscribe>

          <Space>
            <SubmitButton size="large">Save Profile</SubmitButton>
            <ResetButton size="large">Reset</ResetButton>
          </Space>
        </Space>
      </Form>
    </Card>
  );
}
