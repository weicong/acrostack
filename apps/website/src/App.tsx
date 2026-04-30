import { Space, Tabs, Typography } from "antd";
import { Basic } from "./demos/Basic";
import { CRUD } from "./demos/CRUD";
import { Modes } from "./demos/Modes";

const { Title, Text } = Typography;

export default function App() {
  return (
    <div style={{ padding: 40, background: "#f0f2f5", minHeight: "100vh" }}>
      <Space
        orientation="vertical"
        size="large"
        style={{ display: "flex", maxWidth: 1000, margin: "0 auto" }}
      >
        <header>
          <Title level={2}>`@acrostack/tanstack-form-antd` 示例</Title>
          <Text type="secondary">
            这个站点展示当前版本的 <code>@acrostack/tanstack-form-antd</code>。所有 demo 都围绕单一
            <code>useAntdForm</code> 入口构建，以 TanStack Form 作为状态和校验唯一来源，并演示当前
            已内建的文本、选择、日期时间、上传与高级选择字段组件。现有 <code>CRUD</code>{" "}
            示例单独保留。
          </Text>
        </header>

        <Tabs
          defaultActiveKey="basic"
          items={[
            {
              key: "basic",
              label: "字段总览",
              children: <Basic />,
            },
            {
              key: "modes",
              label: "模式与校验",
              children: <Modes />,
            },
            {
              key: "crud",
              label: "CRUD 示例",
              children: <CRUD />,
            },
          ]}
        />
      </Space>
    </div>
  );
}
