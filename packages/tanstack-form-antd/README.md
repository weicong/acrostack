# `@acrostack/tanstack-form-antd`

`@acrostack/tanstack-form-antd` 是一个轻量适配层，用来把 `@tanstack/react-form` 与 Ant Design 组件组合起来。

它不重建表单状态，不接管校验逻辑，也不依赖 Ant Design Form store。TanStack Form 负责状态、校验、提交与重置，Ant Design 只负责布局和展示。

## 安装

当前 `@tanstack/react-form` 是 `peer dependency`，因此需要和包一起安装：

```bash
vp add @acrostack/tanstack-form-antd @tanstack/react-form antd
```

如果不是 Vite+ 项目，可用等价的包管理器安装相同依赖。

## 基础示例

```tsx
import { useAntdForm } from "@acrostack/tanstack-form-antd";

type Values = {
  name: string;
  agree: boolean;
};

export function Example() {
  const form = useAntdForm<Values>({
    defaultValues: {
      name: "",
      agree: false,
    },
    onSubmit: async ({ value }) => {
      console.log(value);
    },
  });

  return (
    <form.Form layout="vertical" mode="edit">
      <form.TextField
        name="name"
        label="用户名"
        placeholder="请输入用户名"
        validators={{
          onBlur: ({ value }) => {
            if (!value) {
              return "请输入用户名";
            }

            return undefined;
          },
        }}
      />

      <form.CheckboxField
        name="agree"
        label="协议"
        validators={{
          onChange: ({ value }) => {
            return value ? undefined : "请先同意协议";
          },
        }}
      >
        我同意协议
      </form.CheckboxField>

      <form.SubmitButton type="primary">提交</form.SubmitButton>
      <form.ResetButton>重置</form.ResetButton>
    </form.Form>
  );
}
```

## 类型推导

字段组件的 `name` 会约束可用字段路径，`validators` 会根据 `name` 自动推导 `value` 类型。

```tsx
type Values = {
  name: string;
  agree: boolean;
};

const form = useAntdForm<Values>({
  defaultValues: {
    name: "",
    agree: false,
  },
});

<form.TextField
  name="name"
  validators={{
    onBlur: ({ value }) => {
      value.toUpperCase();
      return undefined;
    },
  }}
/>;

<form.CheckboxField
  name="agree"
  validators={{
    onChange: ({ value }) => {
      return value ? undefined : "请先同意协议";
    },
  }}
/>;
```

上面的例子里：

- `TextField` 的 `value` 会推导为 `string`
- `CheckboxField` 的 `value` 会推导为 `boolean`
- 如果传入不存在的 `name`，TypeScript 会报错

## 模式

```tsx
<form.Form mode="view" layout="vertical">
  <form.TextField name="name" label="用户名" />
  <form.CheckboxField name="agree" label="协议">
    我同意协议
  </form.CheckboxField>
</form.Form>
```

- `edit`：可编辑模式
- `view`：只读展示模式，优先显示文本
- `disabled`：控件保持原样，但不可交互

## 错误展示策略

```tsx
<form.Form errorDisplayMode="submitted">
  <form.TextField
    name="name"
    label="用户名"
    validators={{
      onChange: ({ value }) => {
        if (!value) {
          return "请输入用户名";
        }

        return undefined;
      },
    }}
  />
</form.Form>
```

支持：

- `always`
- `touched`
- `dirty`
- `submitted`

默认值是 `touched`。

## 高级自定义字段

`Field` 仍然保留为 escape hatch，适合高级场景：

```tsx
<form.Field
  name="custom"
  children={(field) => {
    return (
      <CustomInput
        value={field.state.value}
        onChange={(value) => field.handleChange(value)}
        onBlur={field.handleBlur}
      />
    );
  }}
/>
```

## 当前实现

当前已提供：

- `useAntdForm`
- `Form`
- `TextField`
- `AutoCompleteField`
- `MentionsField`
- `SearchField`
- `OtpField`
- `TextAreaField`
- `PasswordField`
- `CheckboxField`
- `CheckboxGroupField`
- `NumberField`
- `SliderField`
- `RateField`
- `SelectField`
- `SegmentedField`
- `ColorPickerField`
- `SwitchField`
- `RadioGroupField`
- `DatePickerField`
- `DateTimePickerField`
- `MonthPickerField`
- `WeekPickerField`
- `QuarterPickerField`
- `YearPickerField`
- `DateRangePickerField`
- `TimePickerField`
- `TimeRangeField`
- `TreeSelectField`
- `CascaderField`
- `TransferField`
- `UploadField`
- `SubmitButton`
- `ResetButton`

当前未内建、但会作为后续扩展方向：

- `RangeTimePickerFieldWithSeconds`
- `DualListTreeTransferField`
- 更细粒度的 Upload 派生字段（如 Dragger 专用适配）

## 设计原则

- 不使用 Ant Design Form store
- 不使用 Ant Design `rules`
- 校验逻辑统一使用 TanStack Form `validators`
- Ant Design 只负责 UI 布局、视觉样式和控件展示
- `Field` 作为高级逃生口保留
