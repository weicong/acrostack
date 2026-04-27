import { Space, Tabs, Typography } from "antd";
import { Basic } from "./demos/Basic";
import { CRUD } from "./demos/CRUD";
import { EditableTable } from "./demos/EditableTable";

const { Title, Text } = Typography;

export default function App() {
  return (
    <div style={{ padding: 40, background: "#f0f2f5", minHeight: "100vh" }}>
      <Space
        direction="vertical"
        size="large"
        style={{ display: "flex", maxWidth: 1000, margin: "0 auto" }}
      >
        <header>
          <Title level={2}>Ant Design x TanStack Form Demo</Title>
          <Text type="secondary">
            This demo showcases the <code>@acrostack/tanstack-form-antd</code> adapter built around
            a single <code>useAntdForm</code> entry. It keeps TanStack Form as the source of truth
            while exposing typed Ant Design fields, preview mode, and escape hatches for custom
            bindings.
          </Text>
        </header>

        <Tabs
          defaultActiveKey="basic"
          items={[
            {
              key: "basic",
              label: "Basic Form",
              children: <Basic />,
            },
            {
              key: "advanced",
              label: "Advanced Field",
              children: <EditableTable />,
            },
            {
              key: "crud",
              label: "CRUD Table",
              children: <CRUD />,
            },
          ]}
        />
      </Space>
    </div>
  );
}
