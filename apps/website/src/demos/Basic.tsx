import { useState } from "react";
import { useAntdForm, validators } from "@acrostack/tanstack-form-antd";
import { Card, Divider, Space, Switch, Typography, message } from "antd";

const { Text } = Typography;

type UserProfile = {
  basicInfo: {
    firstName: string;
    lastName: string;
    age: number | null;
  };
  role: "admin" | "user" | "guest";
  bio: string;
  notifications: boolean;
};

export function Basic() {
  const [preview, setPreview] = useState(false);
  const {
    form,
    Form,
    TextField,
    NumberField,
    SelectField,
    TextAreaField,
    SwitchField,
    SubmitButton,
    ResetButton,
  } = useAntdForm<UserProfile>({
    mode: preview ? "preview" : "edit",
    defaultValues: {
      basicInfo: {
        firstName: "Ant",
        lastName: "Gravity",
        age: 25,
      },
      role: "admin",
      bio: "Coding assistant powered by DeepMind.",
      notifications: true,
    },
    onSubmit: async ({ value }: { value: UserProfile }) => {
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
      <Form layout="vertical">
        <Space orientation="vertical" style={{ width: "100%" }} size="middle">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            <TextField
              name="basicInfo.firstName"
              label="First Name"
              placeholder="Enter first name"
              validators={validators.required("First name is required")}
            />
            <TextField
              name="basicInfo.lastName"
              label="Last Name"
              placeholder="Enter last name"
              validators={validators.required("Last name is required")}
            />
          </div>

          <NumberField
            name="basicInfo.age"
            label="Age"
            min={0}
            max={120}
            placeholder="Enter age"
            validators={validators.required("Age is required")}
          />

          <SelectField
            name="role"
            label="Role"
            options={[
              { label: "Administrator", value: "admin" },
              { label: "Standard User", value: "user" },
              { label: "Guest", value: "guest" },
            ]}
            validators={validators.required("Role is required")}
          />

          <TextAreaField
            name="bio"
            label="Biography"
            placeholder="Tell us about yourself..."
            rows={4}
            validators={validators.maxLength(120, "Biography must be under 120 characters")}
          />

          <SwitchField
            name="notifications"
            label="Enable Notifications"
            checkedChildren="ON"
            unCheckedChildren="OFF"
            checkedText="Enabled"
            uncheckedText="Disabled"
          />

          <Divider style={{ margin: 0 }} />

          <form.Subscribe
            selector={(state: any) => state.values.basicInfo as UserProfile["basicInfo"]}
          >
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
          </form.Subscribe>

          <Space>
            <SubmitButton size="large">Save Profile</SubmitButton>
            <ResetButton size="large">Reset</ResetButton>
          </Space>
        </Space>
      </Form>
    </Card>
  );
}
