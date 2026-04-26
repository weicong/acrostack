import React from "react";
import { createForm } from "tanstack-form-antd";
import { Card, Space, Divider, message, Typography, Switch } from "antd";

const { Text } = Typography;

interface UserProfile {
  basicInfo: {
    firstName: string;
    lastName: string;
    age: number;
  };
  role: "admin" | "user" | "guest";
  bio: string;
  notifications: boolean;
  tags: string[];
}

const {
  Form,
  TextField,
  NumberField,
  SelectField,
  TextAreaField,
  SwitchField,
  SubmitButton,
  Dependency,
} = createForm<UserProfile>();

export function Basic() {
  const [readonly, setReadonly] = React.useState(false);

  const handleSubmit = (values: UserProfile) => {
    console.log("Submitted values:", values);
    message.success("Form submitted successfully! Check console for details.");
  };

  return (
    <Card
      title="User Profile Form"
      variant="borderless"
      extra={
        <Space>
          <span>Readonly Mode:</span>
          <Switch checked={readonly} onChange={setReadonly} />
        </Space>
      }
    >
      <Form
        readonly={readonly}
        defaultValues={{
          basicInfo: {
            firstName: "Ant",
            lastName: "Gravity",
            age: 25,
          },
          role: "admin",
          bio: "Coding assistant powered by DeepMind.",
          notifications: true,
          tags: ["react", "typescript"],
        }}
        onSubmit={handleSubmit}
      >
        <Space orientation="vertical" style={{ width: "100%" }} size="middle">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
            <TextField
              name="basicInfo.firstName"
              label="First Name"
              required="First name is required"
            />
            <TextField name="basicInfo.lastName" label="Last Name" required />
          </div>

          <NumberField name="basicInfo.age" label="Age" min={0} max={120} required />

          <SelectField
            name="role"
            label="Role"
            options={[
              { label: "Administrator", value: "admin" },
              { label: "Standard User", value: "user" },
              { label: "Guest", value: "guest" },
            ]}
            required
          />

          <TextAreaField
            name="bio"
            label="Biography"
            placeholder="Tell us about yourself..."
            rows={3}
          />

          <SwitchField
            name="notifications"
            label="Enable Notifications"
            checkedChildren="ON"
            unCheckedChildren="OFF"
          />

          <Divider />

          <Dependency name={["basicInfo.firstName", "basicInfo.lastName"]}>
            {({ "basicInfo.firstName": first, "basicInfo.lastName": last }) => (
              <div
                style={{
                  padding: "8px",
                  background: "#fafafa",
                  borderRadius: "4px",
                  border: "1px dashed #d9d9d9",
                }}
              >
                <Text strong>Live Preview Name:</Text> {first} {last}
              </div>
            )}
          </Dependency>

          <SubmitButton buttonProps={{ size: "large", block: true }}>Save Profile</SubmitButton>
        </Space>
      </Form>
    </Card>
  );
}
