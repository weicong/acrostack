import { useAntdForm } from "@acrostack/tanstack-form-antd";
import { Card, Input, Space, Typography, message } from "antd";

const { Text } = Typography;

type AdvancedFormValues = {
  projectName: string;
  slug: string;
  budget: string;
  status: string;
  publishStart: string;
  publishEnd: string;
  isPublic: boolean;
};

export function EditableTable() {
  const { Form, Field, Subscribe, TextField, CheckboxField, SubmitButton, ResetButton } =
    useAntdForm<AdvancedFormValues>({
      defaultValues: {
        projectName: "AcroStack Demo",
        slug: "acrostack-demo",
        budget: "5000",
        status: "active",
        publishStart: "2026-05-01",
        publishEnd: "2026-05-15",
        isPublic: true,
      },
      onSubmit: async ({ value }) => {
        console.log("Advanced form submitted:", value);
        message.success("Advanced form saved successfully! Check console for data.");
      },
    });

  return (
    <Card title="Advanced Custom Field Demo" variant="borderless">
      <Form layout="vertical">
        <Space orientation="vertical" style={{ width: "100%" }} size="large">
          <TextField
            name="projectName"
            label="Project Name"
            placeholder="Enter project name"
            validators={{
              onBlur: ({ value }) => {
                if (!value) {
                  return "Project name is required";
                }

                return undefined;
              },
            }}
          />

          <Field
            name="slug"
            validators={{
              onBlur: ({ value }) => {
                if (!value) {
                  return "Slug is required";
                }

                return undefined;
              },
            }}
          >
            {(field) => (
              <div>
                <div style={{ marginBottom: 8, color: "rgba(0, 0, 0, 0.88)" }}>Project Slug</div>
                <Space.Compact style={{ width: "100%" }}>
                  <span
                    style={{
                      display: "flex",
                      alignItems: "center",
                      padding: "0 11px",
                      background: "#fafafa",
                      border: "1px solid #d9d9d9",
                      borderRight: 0,
                      borderRadius: "6px 0 0 6px",
                      color: "rgba(0, 0, 0, 0.88)",
                      whiteSpace: "nowrap",
                    }}
                  >
                    /projects/
                  </span>
                  <Input
                    value={field.state.value ?? ""}
                    onChange={(event) => field.handleChange(event.target.value as never)}
                    onBlur={() => field.handleBlur()}
                    placeholder="project-slug"
                  />
                </Space.Compact>
              </div>
            )}
          </Field>

          <TextField name="budget" label="Budget" placeholder="Enter budget in USD" />

          <TextField name="status" label="Status" placeholder="draft / active / archived" />

          <TextField name="publishStart" label="Publish Start" placeholder="YYYY-MM-DD" />

          <TextField name="publishEnd" label="Publish End" placeholder="YYYY-MM-DD" />

          <CheckboxField name="isPublic" label="Public Visibility">
            Public project
          </CheckboxField>

          <Subscribe selector={(state: any) => state.values as AdvancedFormValues}>
            {(values) => (
              <div
                style={{
                  padding: 12,
                  background: "#fafafa",
                  borderRadius: 8,
                  border: "1px dashed #d9d9d9",
                }}
              >
                <Text strong>Live Values</Text>
                <pre style={{ margin: "8px 0 0", whiteSpace: "pre-wrap" }}>
                  {JSON.stringify(values, null, 2)}
                </pre>
              </div>
            )}
          </Subscribe>

          <Space>
            <SubmitButton size="large">Submit Advanced Form</SubmitButton>
            <ResetButton size="large">Reset</ResetButton>
          </Space>
        </Space>
      </Form>
    </Card>
  );
}
