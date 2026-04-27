import { Typography, Space, Tabs } from "antd";
import { Basic } from "./demos/Basic";
import { EditableTable } from "./demos/EditableTable";
import { CRUD } from "./demos/CRUD";

const { Title, Text } = Typography;

export default function App() {
  return (
    <div style={{ padding: "40px", background: "#f0f2f5", minHeight: "100vh" }}>
      <Space
        orientation="vertical"
        size="large"
        style={{ display: "flex", maxWidth: "1000px", margin: "0 auto" }}
      >
        <header>
          <Title level={2}>Ant Design × TanStack Form Demo</Title>
          <Text type="secondary">
            This demo showcases the <code>@acrostack/tanstack-form-antd</code> adapter. It provides
            a ProForm-style API with full type safety for TanStack Form using Ant Design v6
            components.
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
              key: "table",
              label: "Editable Table",
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
