import { useState } from "react";
import { createForm } from "tanstack-form-antd";
import { Table, Button, Space, Card, Modal, Popconfirm, Tag, message } from "antd";
import { PlusOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons";

interface UserRecord {
  id: string;
  name: string;
  email: string;
  role: "admin" | "user";
  status: "active" | "inactive";
}

// Create the form factory for the user schema
const { Form, TextField, SelectField, SubmitButton } = createForm<Omit<UserRecord, "id">>();

export function CRUD() {
  const [data, setData] = useState<UserRecord[]>([
    {
      id: "1",
      name: "John Doe",
      email: "john@example.com",
      role: "admin",
      status: "active",
    },
    {
      id: "2",
      name: "Jane Smith",
      email: "jane@example.com",
      role: "user",
      status: "inactive",
    },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [initialValues, setInitialValues] = useState<Omit<UserRecord, "id">>({
    name: "",
    email: "",
    role: "user",
    status: "active",
  });

  const showModal = (record?: UserRecord) => {
    if (record) {
      setEditingId(record.id);
      setInitialValues({
        name: record.name,
        email: record.email,
        role: record.role,
        status: record.status,
      });
    } else {
      setEditingId(null);
      setInitialValues({
        name: "",
        email: "",
        role: "user",
        status: "active",
      });
    }
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = (values: Omit<UserRecord, "id">) => {
    if (editingId) {
      setData((prev) =>
        prev.map((item) => (item.id === editingId ? { ...item, ...values } : item)),
      );
      message.success("User updated successfully");
    } else {
      const newUser = { ...values, id: Date.now().toString() };
      setData((prev) => [...prev, newUser]);
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
      render: (role: string) => (
        <Tag color={role === "admin" ? "gold" : "blue"}>{role.toUpperCase()}</Tag>
      ),
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status: string) => (
        <Tag color={status === "active" ? "green" : "volcano"}>{status.toUpperCase()}</Tag>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (_: any, record: UserRecord) => (
        <Space size="middle">
          <Button type="link" icon={<EditOutlined />} onClick={() => showModal(record)}>
            Edit
          </Button>
          <Popconfirm
            title="Are you sure to delete this user?"
            onConfirm={() => handleDelete(record.id)}
            okText="Yes"
            cancelText="No"
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
      <Table columns={columns} dataSource={data} rowKey="id" />

      <Modal
        title={editingId ? "Edit User" : "Add User"}
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
        destroyOnHidden // Ensure form is destroyed and recreated with new initialValues
      >
        <Form defaultValues={initialValues} onSubmit={handleSubmit}>
          <Space orientation="vertical" style={{ width: "100%" }} size="middle">
            <TextField name="name" label="Full Name" required="Name is required" />
            <TextField
              name="email"
              label="Email Address"
              required="Email is required"
              validators={{
                onChange: ({ value }) =>
                  !/^\S+@\S+\.\S+$/.test(value) ? "Invalid email format" : undefined,
              }}
            />
            <SelectField
              name="role"
              label="Role"
              options={[
                { label: "Admin", value: "admin" },
                { label: "User", value: "user" },
              ]}
              required
            />
            <SelectField
              name="status"
              label="Status"
              options={[
                { label: "Active", value: "active" },
                { label: "Inactive", value: "inactive" },
              ]}
              required
            />

            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                gap: "8px",
                marginTop: "16px",
              }}
            >
              <Button onClick={handleCancel}>Cancel</Button>
              <SubmitButton>{editingId ? "Update" : "Create"}</SubmitButton>
            </div>
          </Space>
        </Form>
      </Modal>
    </Card>
  );
}
