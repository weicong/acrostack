import { useAntdForm, validators } from "@acrostack/tanstack-form-antd";
import { Card, Input, Slider, Space, Typography, message } from "antd";

const { Text } = Typography;

type AdvancedFormValues = {
  projectName: string;
  slug: string;
  budget: number | null;
  status: "draft" | "active" | "archived";
  publishWindow: [string, string] | null;
  isPublic: boolean;
};

export function EditableTable() {
  const {
    form,
    Form,
    FormField,
    TextField,
    NumberField,
    SelectField,
    RangePickerField,
    SwitchField,
    SubmitButton,
    ResetButton,
  } = useAntdForm<AdvancedFormValues>({
    defaultValues: {
      projectName: "AcroStack Demo",
      slug: "acrostack-demo",
      budget: 5000,
      status: "active",
      publishWindow: ["2026-05-01", "2026-05-15"],
      isPublic: true,
    },
    onSubmit: async ({ value }: { value: AdvancedFormValues }) => {
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
            validators={validators.required("Project name is required")}
          />

          <FormField name="slug" validators={validators.required("Slug is required")}>
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
                    value={(field.state.value as string | undefined) ?? ""}
                    onChange={(event) => field.handleChange(event.target.value as never)}
                    onBlur={() => field.handleBlur()}
                    placeholder="project-slug"
                  />
                </Space.Compact>
              </div>
            )}
          </FormField>

          <NumberField
            name="budget"
            label="Budget"
            min={0}
            addonAfter="USD"
            validators={validators.required("Budget is required")}
          />

          <FormField name="budget">
            {(field) => (
              <div>
                <div style={{ marginBottom: 8, color: "rgba(0, 0, 0, 0.88)" }}>Budget Slider</div>
                <Slider
                  min={0}
                  max={10000}
                  step={100}
                  value={(field.state.value as number | null | undefined) ?? 0}
                  onChange={(value) => field.handleChange(value as never)}
                  onChangeComplete={() => field.handleBlur()}
                />
              </div>
            )}
          </FormField>

          <SelectField
            name="status"
            label="Status"
            options={[
              { label: "Draft", value: "draft" },
              { label: "Active", value: "active" },
              { label: "Archived", value: "archived" },
            ]}
            validators={validators.required("Status is required")}
          />

          <RangePickerField
            name="publishWindow"
            label="Publish Window"
            displayFormat="YYYY/MM/DD"
            validators={validators.required("Publish window is required")}
          />

          <SwitchField
            name="isPublic"
            label="Public Visibility"
            checkedText="Public"
            uncheckedText="Private"
          />

          <form.Subscribe selector={(state: any) => state.values as AdvancedFormValues}>
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
          </form.Subscribe>

          <Space>
            <SubmitButton size="large">Submit Advanced Form</SubmitButton>
            <ResetButton size="large">Reset</ResetButton>
          </Space>
        </Space>
      </Form>
    </Card>
  );
}
