import { createForm } from "@acrostack/tanstack-form-antd";
import { Table, Button, Space, Card, Typography, message } from "antd";
import { PlusOutlined, DeleteOutlined } from "@ant-design/icons";

const { Text } = Typography;

interface InvoiceItem {
  id: string;
  name: string;
  quantity: number;
  price: number;
}

interface Invoice {
  customerName: string;
  items: InvoiceItem[];
}

const { Form, TextField, NumberField, FieldArray, SubmitButton } = createForm<Invoice>();

export function EditableTable() {
  const handleSubmit = (values: Invoice) => {
    console.log("Invoice submitted:", values);
    message.success("Invoice saved successfully! Check console for data.");
  };

  return (
    <Card title="Editable Table Demo" variant="borderless">
      <Form
        defaultValues={{
          customerName: "New Customer",
          items: [
            { id: "1", name: "Service A", quantity: 1, price: 100 },
            { id: "2", name: "Part B", quantity: 2, price: 50 },
          ],
        }}
        onSubmit={handleSubmit}
      >
        <Space orientation="vertical" style={{ width: "100%" }} size="large">
          <TextField
            name="customerName"
            label="Customer Name"
            required="Please enter customer name"
            placeholder="Enter customer name..."
          />

          <FieldArray name="items">
            {(fieldArray) => (
              <div style={{ width: "100%" }}>
                <Table
                  dataSource={fieldArray.state.value}
                  pagination={false}
                  rowKey="id"
                  bordered
                  columns={[
                    {
                      title: "Product / Service",
                      dataIndex: "name",
                      render: (_, __, index) => (
                        <TextField
                          name={`items[${index}].name` as any}
                          placeholder="Item name"
                          required
                        />
                      ),
                    },
                    {
                      title: "Quantity",
                      dataIndex: "quantity",
                      width: 120,
                      render: (_, __, index) => (
                        <NumberField name={`items[${index}].quantity` as any} min={1} required />
                      ),
                    },
                    {
                      title: "Price",
                      dataIndex: "price",
                      width: 150,
                      render: (_, __, index) => (
                        <NumberField
                          name={`items[${index}].price` as any}
                          min={0}
                          required
                          inputNumberProps={{
                            formatter: (value) =>
                              `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ","),
                            parser: (value) => value!.replace(/\$\s?|(,*)/g, ""),
                          }}
                        />
                      ),
                    },
                    {
                      title: "Total",
                      width: 120,
                      render: (_, record) => (
                        <Text strong>
                          ${((record.quantity || 0) * (record.price || 0)).toLocaleString()}
                        </Text>
                      ),
                    },
                    {
                      title: "Action",
                      width: 60,
                      align: "center",
                      render: (_, __, index) => (
                        <Button
                          type="text"
                          danger
                          icon={<DeleteOutlined />}
                          onClick={() => fieldArray.removeValue(index)}
                        />
                      ),
                    },
                  ]}
                  footer={() => (
                    <Button
                      type="dashed"
                      onClick={() =>
                        fieldArray.pushValue({
                          id: crypto.randomUUID(),
                          name: "",
                          quantity: 1,
                          price: 0,
                        })
                      }
                      block
                      icon={<PlusOutlined />}
                    >
                      Add Line Item
                    </Button>
                  )}
                />
              </div>
            )}
          </FieldArray>

          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <SubmitButton buttonProps={{ size: "large" }}>Submit Invoice</SubmitButton>
          </div>
        </Space>
      </Form>
    </Card>
  );
}
