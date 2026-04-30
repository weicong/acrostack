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
          <Title level={2}>TanStack Form × Ant Design 集成示例</Title>
          <Text type="secondary">
            展示 <code>@acrostack/tanstack-form-antd</code> 的完整能力。所有示例围绕{" "}
            <code>useAntdForm</code> 构建，以 TanStack Form
            作为状态和校验的唯一来源，演示文本、选择、日期时间、上传等内建字段组件。
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
