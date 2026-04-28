import { useState } from "react";
import { useAntdForm } from "@acrostack/tanstack-form-antd";
import { Button, Card, Modal, Popconfirm, Space, Table, Tag, Typography, message } from "antd";
import { DeleteOutlined, EditOutlined, PlusOutlined } from "@ant-design/icons";

type UserRecord = {
  id: string;
  name: string;
  email: string;
  role: string;
  active: boolean;
};

type UserFormValues = Omit<UserRecord, "id">;

type UserModalFormProps = {
  initialValues: UserFormValues;
  editingId: string | null;
  onSubmitValue: (value: UserFormValues) => void;
  onCancel: () => void;
};

const { Text } = Typography;

function UserModalForm(props: UserModalFormProps) {
  const { Form, TextField, CheckboxField, SubmitButton, ResetButton } = useAntdForm<UserFormValues>(
    {
      defaultValues: props.initialValues,
      onSubmit: async ({ value }) => {
        props.onSubmitValue(value);
      },
    },
  );

  return (
    <Form layout="vertical">
      <Space orientation="vertical" style={{ width: "100%" }} size="middle">
        <Text type="secondary">
          这个弹窗表单使用当前内建字段集，并保持 TanStack validators 作为唯一校验来源。
        </Text>

        <TextField
          name="name"
          label="姓名"
          placeholder="请输入姓名"
          validators={{
            onBlur: ({ value }) => {
              if (!value) {
                return "请输入姓名";
              }

              return undefined;
            },
          }}
        />
        <TextField
          name="email"
          label="邮箱"
          placeholder="请输入邮箱"
          validators={{
            onBlur: ({ value }) => {
              if (!value) {
                return "请输入邮箱";
              }

              if (!value.includes("@")) {
                return "邮箱格式不正确";
              }

              return undefined;
            },
          }}
        />
        <TextField
          name="role"
          label="角色"
          placeholder="请输入角色"
          validators={{
            onBlur: ({ value }) => {
              if (!value) {
                return "请输入角色";
              }

              return undefined;
            },
          }}
        />
        <CheckboxField name="active" label="状态">
          启用用户
        </CheckboxField>

        <div style={{ display: "flex", justifyContent: "flex-end", gap: 8, marginTop: 16 }}>
          <Button onClick={props.onCancel}>取消</Button>
          <ResetButton>重置</ResetButton>
          <SubmitButton>{props.editingId ? "更新" : "创建"}</SubmitButton>
        </div>
      </Space>
    </Form>
  );
}

export function CRUD() {
  const [data, setData] = useState<UserRecord[]>([
    {
      id: "1",
      name: "张三",
      email: "john@example.com",
      role: "管理员",
      active: true,
    },
    {
      id: "2",
      name: "李四",
      email: "jane@example.com",
      role: "普通用户",
      active: false,
    },
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [initialValues, setInitialValues] = useState<UserFormValues>({
    name: "",
    email: "",
    role: "普通用户",
    active: true,
  });

  const showModal = (record?: UserRecord) => {
    if (record) {
      setEditingId(record.id);
      setInitialValues({
        name: record.name,
        email: record.email,
        role: record.role,
        active: record.active,
      });
    } else {
      setEditingId(null);
      setInitialValues({
        name: "",
        email: "",
        role: "普通用户",
        active: true,
      });
    }
    setIsModalOpen(true);
  };

  const handleSubmitValue = (value: UserFormValues) => {
    if (editingId) {
      setData((prev) => prev.map((item) => (item.id === editingId ? { ...item, ...value } : item)));
      message.success("用户更新成功");
    } else {
      setData((prev) => [...prev, { ...value, id: Date.now().toString() }]);
      message.success("用户创建成功");
    }
    setIsModalOpen(false);
  };

  const handleDelete = (id: string) => {
    setData((prev) => prev.filter((item) => item.id !== id));
    message.success("用户已删除");
  };

  const columns = [
    { title: "姓名", dataIndex: "name", key: "name" },
    { title: "邮箱", dataIndex: "email", key: "email" },
    {
      title: "角色",
      dataIndex: "role",
      key: "role",
      render: (role: UserRecord["role"]) => <Tag color="blue">{role}</Tag>,
    },
    {
      title: "状态",
      dataIndex: "active",
      key: "active",
      render: (active: UserRecord["active"]) => (
        <Tag color={active ? "green" : "volcano"}>{active ? "启用" : "停用"}</Tag>
      ),
    },
    {
      title: "操作",
      key: "action",
      render: (_: unknown, record: UserRecord) => (
        <Space size="middle">
          <Button type="link" icon={<EditOutlined />} onClick={() => showModal(record)}>
            编辑
          </Button>
          <Popconfirm title="确认删除这个用户吗？" onConfirm={() => handleDelete(record.id)}>
            <Button type="link" danger icon={<DeleteOutlined />}>
              删除
            </Button>
          </Popconfirm>
        </Space>
      ),
    },
  ];

  return (
    <Card
      title="内建字段 CRUD 示例"
      variant="borderless"
      extra={
        <Button type="primary" icon={<PlusOutlined />} onClick={() => showModal()}>
          新增用户
        </Button>
      }
    >
      <Table columns={columns} dataSource={data} rowKey="id" pagination={false} />

      <Modal
        title={editingId ? "编辑用户" : "新增用户"}
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        footer={null}
        destroyOnHidden
      >
        <UserModalForm
          key={editingId ?? "new"}
          editingId={editingId}
          initialValues={initialValues}
          onSubmitValue={handleSubmitValue}
          onCancel={() => setIsModalOpen(false)}
        />
      </Modal>
    </Card>
  );
}
