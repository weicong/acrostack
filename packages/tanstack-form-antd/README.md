# `@acrostack/tanstack-form-antd`

`@acrostack/tanstack-form-antd` 是一个轻量适配层，用来把 `@tanstack/react-form` 与 Ant Design 组件组合起来。

它不重建表单状态，不接管校验逻辑，也不依赖 Ant Design Form store。TanStack Form 负责状态、校验、提交与重置，Ant Design 只负责布局和展示。

## 安装

```bash
vp add @acrostack/tanstack-form-antd antd
```

如果你的项目没有安装 `@tanstack/react-form`，也需要一并安装：

```bash
vp add @acrostack/tanstack-form-antd @tanstack/react-form antd
```

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
          onChange: ({ value }) => {
            if (!value) return "请输入用户名";
            return undefined;
          },
        }}
      />

      <form.CheckboxField
        name="agree"
        label="协议"
        validators={{
          onChange: ({ value }) => {
            if (!value) return "请先同意协议";
            return undefined;
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
        if (!value) return "请输入用户名";
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

## 设计原则

- 不使用 Ant Design Form store
- 不使用 Ant Design `rules`
- 校验逻辑统一使用 TanStack Form `validators`
- Ant Design 只负责 UI 布局、视觉样式和控件展示
- `Field` 作为高级逃生口保留

## 当前实现

第一版已提供：

- `useAntdForm`
- `Form`
- `TextField`
- `CheckboxField`
- `SubmitButton`
- `ResetButton`
