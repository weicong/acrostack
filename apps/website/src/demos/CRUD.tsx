import { useState } from "react";
import { useAntdForm } from "@acrostack/tanstack-form-antd";
import { Button, Card, Modal, Popconfirm, Space, Table, Tag, message } from "antd";
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
        <TextField
          name="name"
          label="Full Name"
          placeholder="Enter full name"
          validators={{
            onBlur: ({ value }) => {
              if (!value) {
                return "Name is required";
              }

              return undefined;
            },
          }}
        />
        <TextField
          name="email"
          label="Email Address"
          placeholder="Enter email address"
          validators={{
            onBlur: ({ value }) => {
              if (!value) {
                return "Email is required";
              }

              if (!value.includes("@")) {
                return "Invalid email format";
              }

              return undefined;
            },
          }}
        />
        <TextField
          name="role"
          label="Role"
          placeholder="Enter role"
          validators={{
            onBlur: ({ value }) => {
              if (!value) {
                return "Role is required";
              }

              return undefined;
            },
          }}
        />
        <CheckboxField name="active" label="Status">
          Active user
        </CheckboxField>

        <div style={{ display: "flex", justifyContent: "flex-end", gap: 8, marginTop: 16 }}>
          <Button onClick={props.onCancel}>Cancel</Button>
          <ResetButton>Reset</ResetButton>
          <SubmitButton>{props.editingId ? "Update" : "Create"}</SubmitButton>
        </div>
      </Space>
    </Form>
  );
}

export function CRUD() {
  const [data, setData] = useState<UserRecord[]>([
    {
      id: "1",
      name: "John Doe",
      email: "john@example.com",
      role: "admin",
      active: true,
    },
    {
      id: "2",
      name: "Jane Smith",
      email: "jane@example.com",
      role: "user",
      active: false,
    },
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [initialValues, setInitialValues] = useState<UserFormValues>({
    name: "",
    email: "",
    role: "user",
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
        role: "user",
        active: true,
      });
    }
    setIsModalOpen(true);
  };

  const handleSubmitValue = (value: UserFormValues) => {
    if (editingId) {
      setData((prev) => prev.map((item) => (item.id === editingId ? { ...item, ...value } : item)));
      message.success("User updated successfully");
    } else {
      setData((prev) => [...prev, { ...value, id: Date.now().toString() }]);
      message.success("User created successfully");
    }
    setIsModalOpen(false);
  };

  const handleDelete = (id: string) => {
    setData((prev) => prev.filter((item) => item.id !== id));
    message.success("User deleted");
  };

  const columns = [
    { title: "Name", dataIndex: "name", key: "name" },
    { title: "Email", dataIndex: "email", key: "email" },
    {
      title: "Role",
      dataIndex: "role",
      key: "role",
      render: (role: UserRecord["role"]) => <Tag color="blue">{role.toUpperCase()}</Tag>,
    },
    {
      title: "Status",
      dataIndex: "active",
      key: "active",
      render: (active: UserRecord["active"]) => (
        <Tag color={active ? "green" : "volcano"}>{active ? "ACTIVE" : "INACTIVE"}</Tag>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (_: unknown, record: UserRecord) => (
        <Space size="middle">
          <Button type="link" icon={<EditOutlined />} onClick={() => showModal(record)}>
            Edit
          </Button>
          <Popconfirm
            title="Are you sure to delete this user?"
            onConfirm={() => handleDelete(record.id)}
          >
            <Button type="link" danger icon={<DeleteOutlined />}>
              Delete
            </Button>
          </Popconfirm>
        </Space>
      ),
    },
  ];

  return (
    <Card
      title="User Management CRUD"
      variant="borderless"
      extra={
        <Button type="primary" icon={<PlusOutlined />} onClick={() => showModal()}>
          Add User
        </Button>
      }
    >
      <Table columns={columns} dataSource={data} rowKey="id" pagination={false} />

      <Modal
        title={editingId ? "Edit User" : "Add User"}
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
