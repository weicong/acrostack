# @acrostack/tanstack-form-antd

本文档描述 `packages/tanstack-form-antd` 的当前实现状态，用于同步设计目标、公开 API、类型约束和后续扩展边界。

## 一、定位

`@acrostack/tanstack-form-antd` 是一个轻量适配层，用来组合：

- `@tanstack/react-form` 的状态管理、校验、提交与订阅能力
- `antd` 的 `Form`、`Input`、`Checkbox`、`Button` 等 UI 组件

它不是新的表单状态库，也不会接管 Ant Design Form store。

## 二、当前里程碑

当前版本已经实现的能力：

- `useAntdForm`
- `Form`
- `TextField`
- `CheckboxField`
- `SubmitButton`
- `ResetButton`
- `Field` 逃生口透传

当前未实现、但类型和架构上保留扩展空间的能力：

- `SelectField`
- `DatePickerField`
- `NumberField`
- `SwitchField`
- `RadioGroupField`
- `TextAreaField`
- `PasswordField`
- `UploadField`

## 三、核心原则

### 1. TanStack Form 是唯一状态源

TanStack Form 负责：

- 字段值
- 字段元状态
- 表单状态
- 校验逻辑
- 提交流程
- 重置逻辑

Ant Design 只负责：

- 表单布局
- 控件渲染
- `Form.Item` 的标签、提示和错误展示
- 按钮和输入控件的视觉行为

明确不做的事情：

- 不使用 Ant Design Form store
- 不调用 `Form.useForm()`
- 不把字段值同步到 Ant Design form 实例
- 不把 TanStack `validators` 翻译成 Ant Design `rules`

### 2. 字段组件优先，`Field` 作为逃生口

推荐日常写法：

```tsx
<form.TextField name="name" label="用户名" />
```

高级场景仍可直接使用原始 `Field`：

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

### 3. `mode` 只控制 UI，不改变表单语义

当前支持：

```ts
export type FormMode = "edit" | "view" | "disabled";
```

语义如下：

- `edit`：正常编辑
- `view`：优先显示只读展示值
- `disabled`：仍保持控件形态，但整体不可交互

### 4. 错误展示由 TanStack 状态驱动

当前支持：

```ts
export type ErrorDisplayMode = "always" | "touched" | "dirty" | "submitted";
```

错误从 TanStack 字段状态中读取，再映射为：

```tsx
<Form.Item validateStatus={showError ? "error" : undefined} help={errorMessage} />
```

## 四、依赖与工具链

### 运行时依赖

当前 `package.json` 为：

```json
{
  "peerDependencies": {
    "@tanstack/react-form": ">=1",
    "antd": ">=6",
    "react": ">=19",
    "react-dom": ">=19"
  }
}
```

结论：

- `@tanstack/react-form` 当前是 `peerDependencies`
- `antd`、`react`、`react-dom` 也都是 `peerDependencies`

### 工具链

当前使用 Vite+ 工具链：

- 构建：`vp pack`
- 测试：`vp test`
- 检查：`vp check`

## 五、当前目录结构

```txt
src/
  index.ts
  types.ts
  context.tsx
  useAntdForm.tsx
  components/
    Form.tsx
    TextField.tsx
    CheckboxField.tsx
    SubmitButton.tsx
    ResetButton.tsx
  utils/
    errors.ts
    mode.ts
    props.ts
tests/
  useAntdForm.test.tsx
  TextField.test.tsx
  CheckboxField.test.tsx
  Form.test.tsx
  buttons.test.tsx
README.md
package.json
```

## 六、公开导出

当前 `src/index.ts` 导出如下：

```ts
export { useAntdForm } from "./useAntdForm";

export type {
  AntdFormApi,
  AntdFormContextValue,
  AntdFormProps,
  BaseFieldProps,
  CheckboxFieldProps,
  ErrorDisplayMode,
  FormMode,
  ResetButtonProps,
  SafeFormItemProps,
  SubmitButtonProps,
  TextFieldProps,
} from "./types";
```

说明：

- 当前仅提供 named exports
- `AntdFormContextValue`、`BaseFieldProps`、`SafeFormItemProps` 已公开
- `FieldName`、`FieldValue`、`AntdFieldValidators` 目前为内部类型工具，不从入口导出

## 七、核心类型

### 基础类型

```ts
export type ObjectFormValues = object;

export type FormMode = "edit" | "view" | "disabled";

export type ErrorDisplayMode = "always" | "touched" | "dirty" | "submitted";

export interface AntdFormContextValue {
  mode: FormMode;
  errorDisplayMode: ErrorDisplayMode;
  disabled?: boolean;
  readonly?: boolean;
}
```

### 安全的 `Form.Item` Props

字段内部会控制 `Form.Item` 的错误和名称，因此当前通过 `SafeFormItemProps` 排除冲突属性：

```ts
export type SafeFormItemProps = Omit<
  FormItemProps,
  "name" | "rules" | "validateStatus" | "help" | "initialValue" | "dependencies" | "shouldUpdate"
>;
```

### 字段名和值映射

字段名和值通过 TanStack 的 `DeepKeys` / `DeepValue` 建立映射：

```ts
export type FieldName<TFormValues extends ObjectFormValues> = DeepKeys<TFormValues>;

export type FieldValue<
  TFormValues extends ObjectFormValues,
  TName extends FieldName<TFormValues>,
> = DeepValue<TFormValues, TName>;
```

### 当前的 `validators` 类型设计

这是最近补齐的重点。

当前实现不再使用过宽的 `FieldValidators`，而是按事件拆分为：

```ts
export type AntdFieldValidators<
  TFormValues extends ObjectFormValues,
  TName extends FieldName<TFormValues>,
> = {
  onMount?: FieldValidateOrFn<TFormValues, TName, FieldValue<TFormValues, TName>>;
  onChange?: FieldValidateOrFn<TFormValues, TName, FieldValue<TFormValues, TName>>;
  onChangeAsync?: FieldAsyncValidateOrFn<TFormValues, TName, FieldValue<TFormValues, TName>>;
  onBlur?: FieldValidateOrFn<TFormValues, TName, FieldValue<TFormValues, TName>>;
  onBlurAsync?: FieldAsyncValidateOrFn<TFormValues, TName, FieldValue<TFormValues, TName>>;
  onSubmit?: FieldValidateOrFn<TFormValues, TName, FieldValue<TFormValues, TName>>;
  onSubmitAsync?: FieldAsyncValidateOrFn<TFormValues, TName, FieldValue<TFormValues, TName>>;
  onDynamic?: FieldValidateOrFn<TFormValues, TName, FieldValue<TFormValues, TName>>;
  onDynamicAsync?: FieldAsyncValidateOrFn<TFormValues, TName, FieldValue<TFormValues, TName>>;
  onChangeListenTo?: FieldName<TFormValues>[];
  onBlurListenTo?: FieldName<TFormValues>[];
};
```

这样可以让字段组件里的 `validators` 根据 `name` 自动推导 `value` 类型。

例如：

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

在上面的例子里：

- `TextField` 的 `value` 会推导为 `string`
- `CheckboxField` 的 `value` 会推导为 `boolean`

### 字段组件 Props

```ts
export interface TextFieldProps<
  TFormValues extends ObjectFormValues,
  TName extends FieldName<TFormValues> = FieldName<TFormValues>,
>
  extends
    BaseFieldProps,
    Omit<InputProps, "name" | "value" | "defaultValue" | "onChange" | "onBlur"> {
  name: TName;
  validators?: AntdFieldValidators<TFormValues, TName>;
  disabled?: boolean;
  readOnly?: boolean;
}

export interface CheckboxFieldProps<
  TFormValues extends ObjectFormValues,
  TName extends FieldName<TFormValues> = FieldName<TFormValues>,
>
  extends
    BaseFieldProps,
    Omit<CheckboxProps, "name" | "checked" | "defaultChecked" | "onChange" | "onBlur"> {
  name: TName;
  validators?: AntdFieldValidators<TFormValues, TName>;
  children?: ReactNode;
  disabled?: boolean;
}
```

### 组件级联合分发

为了让 JSX 使用时 `name` 和 `validators` 保持关联，当前实现额外定义了按字段名分发的组件 props：

```ts
export type TextFieldComponentProps<TFormValues extends ObjectFormValues> = {
  [TName in FieldName<TFormValues>]: TextFieldProps<TFormValues, TName>;
}[FieldName<TFormValues>];

export type CheckboxFieldComponentProps<TFormValues extends ObjectFormValues> = {
  [TName in FieldName<TFormValues>]: CheckboxFieldProps<TFormValues, TName>;
}[FieldName<TFormValues>];
```

这是当前 `validators` 自动推导能够在消费端稳定工作的关键。

## 八、`useAntdForm`

### 目标

`useAntdForm` 是 `useForm` 的包装器：

- 接收 TanStack Form 的 options
- 返回 TanStack 原始实例能力
- 附加 Ant Design 适配组件

### 当前实现

```tsx
export function useAntdForm<TFormValues extends ObjectFormValues>(
  options?: AntdFormOptions<TFormValues>,
): AntdFormApi<TFormValues> {
  const form = useForm<
    TFormValues,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined
  >(options);

  const components = useMemo(
    () => ({
      Form: createFormComponent(form as AntdFormApi<TFormValues>),
      TextField: createTextFieldComponent(form as AntdFormApi<TFormValues>),
      CheckboxField: createCheckboxFieldComponent(form as AntdFormApi<TFormValues>),
      SubmitButton: createSubmitButtonComponent(form as AntdFormApi<TFormValues>),
      ResetButton: createResetButtonComponent(form as AntdFormApi<TFormValues>),
    }),
    [form],
  );

  return Object.assign(form, {
    form,
    Field: form.Field,
    ...components,
  }) as AntdFormApi<TFormValues>;
}
```

### 说明

- 使用 `useMemo` 保持组件身份稳定
- 返回值保留了 `form.handleSubmit`、`form.reset`、`form.state` 等 TanStack 能力
- 同时补充 `form.Form`、`form.TextField`、`form.CheckboxField`、`form.SubmitButton`、`form.ResetButton`

## 九、上下文与模式解析

`Form` 通过上下文向字段和按钮提供：

- `mode`
- `errorDisplayMode`
- `disabled`
- `readonly`

字段和按钮的 UI 状态分别通过工具函数计算。

### 字段模式解析

```ts
export function resolveFieldMode(input: ResolveFieldModeInput): ResolvedFieldMode {
  const { context, mode, errorDisplayMode, disabled, readOnly } = input;

  const finalMode = mode ?? context.mode;
  const finalErrorDisplayMode = errorDisplayMode ?? context.errorDisplayMode;
  const finalDisabled = disabled ?? context.disabled ?? finalMode === "disabled";
  const finalReadOnly = readOnly ?? context.readonly ?? finalMode === "view";

  return {
    mode: finalMode,
    errorDisplayMode: finalErrorDisplayMode,
    disabled: finalDisabled,
    readOnly: finalReadOnly,
  };
}
```

### 按钮禁用规则

```ts
export function isActionDisabled(context: AntdFormContextValue, disabled?: boolean): boolean {
  const modeDisabled = context.mode === "view" || context.mode === "disabled";

  if (disabled !== undefined) {
    return disabled;
  }

  if (context.disabled) {
    return true;
  }

  return modeDisabled;
}
```

结论：

- `SubmitButton` 和 `ResetButton` 在 `view` / `disabled` 模式下默认禁用
- 字段在 `view` 模式下优先使用“展示态”

## 十、`Form` 组件

### 职责

`Form` 负责：

- 渲染 Ant Design `Form`
- 提供上下文
- 处理 `onSubmitCapture`
- 调用 `form.handleSubmit()`

### 当前行为

```tsx
export function createFormComponent<TFormValues extends ObjectFormValues>(
  form: AntdFormApi<TFormValues>,
) {
  return function FormComponent(props: AntdFormProps) {
    const {
      children,
      mode = "edit",
      errorDisplayMode = "touched",
      disabled,
      onSubmit,
      ...antdFormProps
    } = props;

    const isDisabled = disabled ?? mode === "disabled";

    return (
      <AntdFormContext.Provider
        value={{
          mode,
          errorDisplayMode,
          disabled: isDisabled,
          readonly: mode === "view",
        }}
      >
        <AntdForm
          {...antdFormProps}
          component="form"
          disabled={isDisabled}
          onSubmitCapture={(event) => {
            onSubmit?.(event);

            if (event.defaultPrevented) {
              return;
            }

            event.preventDefault();
            event.stopPropagation();

            void form.handleSubmit();
          }}
        >
          {children}
        </AntdForm>
      </AntdFormContext.Provider>
    );
  };
}
```

注意：

- 当前使用 `onSubmitCapture`
- 如果外部 `onSubmit` 调用了 `event.preventDefault()`，则不会触发 TanStack 提交

## 十一、错误处理与展示

### 错误归一化

当前实现可处理：

- 字符串错误
- 嵌套数组错误
- 对象、数字、布尔等其他值

对象等未知值会尝试 `JSON.stringify()`，失败时回退到 `Object.prototype.toString.call(value)`。

### 展示策略

```ts
export function shouldShowFieldError(input: ShouldShowErrorInput): boolean {
  const { errorDisplayMode, hasError, isTouched, isDirty, isSubmitted } = input;

  if (!hasError) {
    return false;
  }

  if (errorDisplayMode === "always") {
    return true;
  }

  if (errorDisplayMode === "touched") {
    return Boolean(isTouched);
  }

  if (errorDisplayMode === "dirty") {
    return Boolean(isDirty);
  }

  if (errorDisplayMode === "submitted") {
    return Boolean(isSubmitted);
  }

  return false;
}
```

字段最终统一通过：

```ts
buildValidationProps(showError, errorMessage);
```

生成：

- `validateStatus`
- `help`

## 十二、`TextField`

### 职责

`TextField` 把 TanStack 字段绑定到 Ant Design `Input`，并处理：

- `value`
- `onChange`
- `onBlur`
- `disabled`
- `readOnly`
- `mode=view` 时的只读展示
- 校验错误展示

### 当前行为

- 编辑态：渲染 `Input`
- 查看态：渲染文本
- 空值查看态显示 `-`
- 非字符串值会转成字符串或 JSON 文本

当前输入同步逻辑：

```tsx
<Input
  {...inputProps}
  value={field.state.value == null ? "" : String(field.state.value)}
  disabled={resolved.disabled}
  readOnly={resolved.readOnly}
  onChange={(event) => {
    field.handleChange(event.target.value as FieldValue<TFormValues, TName>);
  }}
  onBlur={() => {
    field.handleBlur();
  }}
/>
```

## 十三、`CheckboxField`

### 职责

`CheckboxField` 把布尔字段绑定到 Ant Design `Checkbox`。

### 当前行为

- 编辑态：渲染 `Checkbox`
- 查看态：渲染 `是` / `否`
- `checked` 始终由 `Boolean(field.state.value)` 驱动

当前同步逻辑：

```tsx
<Checkbox
  {...checkboxProps}
  checked={Boolean(field.state.value)}
  disabled={resolved.disabled}
  onChange={(event) => {
    field.handleChange(event.target.checked as FieldValue<TFormValues, TName>);
  }}
  onBlur={() => {
    field.handleBlur();
  }}
>
  {children}
</Checkbox>
```

## 十四、按钮组件

### `SubmitButton`

当前能力：

- 默认文案 `提交`
- 默认 `htmlType="submit"`
- 支持 `loadingWhenSubmitting`
- 默认在 `isSubmitting` 时自动 loading
- `loading` 可手动覆盖自动 loading
- 在 `view` / `disabled` 模式下默认禁用

### `ResetButton`

当前能力：

- 默认文案 `重置`
- 默认 `htmlType="button"`
- 点击后调用 `form.reset()`
- 如果 `onClick` 中调用了 `event.preventDefault()`，则不触发 reset
- 在 `view` / `disabled` 模式下默认禁用

当前不包含：

- `confirmReset`
- 二次确认弹窗

## 十五、基础示例

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

## 十六、安装说明

当前因为 `@tanstack/react-form` 是 peer dependency，使用方需要显式安装：

```bash
vp add @acrostack/tanstack-form-antd @tanstack/react-form antd
```

如果不是 Vite+ 项目，可等价使用对应包管理器安装相同依赖。

## 十七、测试与验证

当前已覆盖并验证：

- `useAntdForm` 组合能力
- `Form` 提交流程
- `TextField` 输入与错误展示
- `CheckboxField` 勾选行为
- `SubmitButton` / `ResetButton` 行为
- website demo 的消费端构建

最近一次验证通过的命令：

```bash
vp check --fix
vp test
vp run build
```

并额外验证：

```bash
cd apps/website
vp run build
```

## 十八、已知边界与后续计划

当前边界：

- 仅内建 `TextField` 和 `CheckboxField`
- `TextField` 当前使用 `Input`，未拆分 `Password`、`TextArea` 等变体
- `CheckboxField` 面向布尔值场景，未覆盖 checkbox group
- 字段组件当前通过字段值类型约束 `name`，以避免把字符串控件绑定到非字符串字段，或把复选框绑定到非布尔字段

后续扩展方向：

- 增加更多字段组件
- 在保持组件身份稳定的前提下继续收紧内部泛型
- 为更多字段组件补齐和 `validators` 一致的自动推导链路
- 根据新增字段更新 README 与 website demo
