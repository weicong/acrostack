import { Space, Tabs, Typography } from "antd";
import { Basic } from "./demos/Basic";
import { CRUD } from "./demos/CRUD";

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
            这个站点展示当前版本的 <code>@acrostack/tanstack-form-antd</code> 适配层。它围绕单一
            <code>useAntdForm</code> 入口构建，以 TanStack Form 作为状态和校验的唯一来源，当前内建
            <code>TextField</code> 和 <code>CheckboxField</code>，支持 <code>view</code> /
            <code>disabled</code> 模式，并保留基于 <code>validators</code> 的类型推导能力。
          </Text>
        </header>

        <Tabs
          defaultActiveKey="basic"
          items={[
            {
              key: "basic",
              label: "基础用法",
              children: <Basic />,
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
