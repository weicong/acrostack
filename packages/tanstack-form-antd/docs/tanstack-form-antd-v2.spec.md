# **`@acrostack/tanstack-form-antd` 实现文档**

## **一、项目目标**

实现一个 npm 包：`@acrostack/tanstack-form-antd`。

该包用于简化 **TanStack Form** 与 **Ant Design** 的集成，让使用者可以用接近 Ant Design 表单组件的方式编写 UI，同时仍然完全保留 TanStack Form 的状态管理、验证、提交、字段订阅等能力。

核心目标是提供一个轻量、类型安全、可扩展的适配层，而不是重新实现一个表单库。

最终使用体验应该类似：

```tsx
import { useAntdForm } from "@acrostack/tanstack-form-antd";

type UserFormValues = {
  name: string;
  agree: boolean;
};

export function UserForm() {
  const form = useAntdForm<UserFormValues>({
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
            if (value.length < 2) return "用户名至少 2 个字符";
            return undefined;
          },
        }}
      />

      <form.CheckboxField name="agree" label="协议">
        我已阅读并同意协议
      </form.CheckboxField>

      <form.SubmitButton type="primary">提交</form.SubmitButton>

      <form.ResetButton>重置</form.ResetButton>
    </form.Form>
  );
}
```

---

## **二、核心设计原则**

### **1. TanStack Form 是唯一的表单状态来源**

本包必须坚持以下原则：

TanStack Form 负责：

- 字段值；
- 字段状态；
- 表单状态；
- 校验逻辑；
- 提交流程；
- reset 逻辑；
- touched、dirty、error 等状态。

Ant Design 只负责：

- 布局；
- 视觉样式；
- 控件交互；
- `Form.Item` 的 label、help、validateStatus 展示；
- button、input、checkbox 等 UI 组件。

不要使用 Ant Design Form 的内部 store，不要使用 Ant Design 的 `rules` 作为校验来源，不要依赖 Ant Design 的 `form` 实例管理表单数据。

### **2. Ant Design Form 只作为布局容器**

可以使用 `antd` 的 `Form` 组件，但它只承担 UI 容器职责。

也就是说，可以这样使用：

```tsx
<AntdForm layout="vertical" disabled={isDisabled}>
  {children}
</AntdForm>
```

但不要这样使用：

```tsx
const [antdForm] = Form.useForm();
```

也不要把字段值同步进 Ant Design 的表单实例中。

### **3. 字段组件是首选 API，`Field` 是逃生口**

本包应该主推以下组件：

- `TextField`
- `CheckboxField`
- 后续扩展的 `SelectField`
- 后续扩展的 `DatePickerField`
- 后续扩展的 `NumberField`
- 后续扩展的 `SwitchField`

但仍然应该保留 TanStack Form 原始 `Field` 能力，作为高级场景的 escape hatch。

也就是说，用户主要写：

```tsx
<form.TextField name="name" label="用户名" />
```

但高级用户仍然可以写：

```tsx
<form.Field
  name="custom"
  children={(field) => {
    return <CustomComponent field={field} />;
  }}
/>
```

### **4. 不把 TanStack validators 翻译成 Ant Design rules**

不要做这种设计：

```tsx
rules={[
  {
    required: true,
    message: '请输入用户名',
  },
]}
```

也不要尝试把 `validators` 转换成 `rules`。

正确做法是：字段组件接收 TanStack Form 的 `validators`，直接传给 TanStack Form 的 `Field`。

字段错误信息从 TanStack Form 的字段状态中读取，然后映射到 Ant Design 的 `Form.Item`：

```tsx
<Form.Item validateStatus={hasError ? "error" : undefined} help={errorMessage} />
```

### **5. `mode` 是 UI 行为模式，不改变业务数据语义**

`mode` 用于控制 UI 表现和字段交互能力，不应该改变 TanStack Form 的底层状态逻辑。

支持三种模式：

```ts
export type FormMode = "edit" | "view" | "disabled";
```

语义如下：

- `edit`：编辑模式，字段可编辑，适合修改已有数据。
- `view`：查看模式，字段不可编辑，优先渲染为只读展示。
- `disabled`：禁用模式，字段仍以原控件形态展示，但控件禁用。

`view` 与 `disabled` 的差异非常重要：

- `view` 更偏向展示，字段可以渲染成文本或只读态。
- `disabled` 更偏向表单控件不可操作，仍保留 Ant Design 控件外观。

---

## **三、第一里程碑实现范围**

第一里程碑只实现最小可用核心能力。

必须实现：

- `useAntdForm`
- `Form`
- `TextField`
- `CheckboxField`
- `SubmitButton`
- `ResetButton`

必须导出基础类型：

- `FormMode`
- `ErrorDisplayMode`
- `AntdFormApi`
- `AntdFormProps`
- `TextFieldProps`
- `CheckboxFieldProps`
- `SubmitButtonProps`
- `ResetButtonProps`

暂不实现但要预留扩展空间：

- `SelectField`
- `DatePickerField`
- `NumberField`
- `SwitchField`
- `RadioGroupField`
- `TextAreaField`
- `PasswordField`
- `UploadField`

---

## **四、依赖设计**

### **运行依赖**

```json
{
  "dependencies": {
    "@tanstack/react-form": "latest"
  },
  "peerDependencies": {
    "antd": ">=6",
    "react": ">=19",
    "react-dom": ">=19"
  }
}
```

`antd`、`react`、`react-dom` 应作为 peer dependencies。

`@tanstack/react-form` 可以作为 dependency，也可以作为 peer dependency。第一版建议作为 dependency，以降低使用门槛。但如果项目希望避免多版本 TanStack Form，也可以改成 peer dependency。

### **开发依赖**

使用 viteplus 作为构建工具链
https://viteplus.dev/guide/

---

## **五、推荐目录结构**

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
package.json
tsconfig.json
README.md
```

---

## **六、核心类型设计**

### **`FormMode`**

```ts
export type FormMode = "edit" | "view" | "disabled";
```

### **`ErrorDisplayMode`**

```ts
export type ErrorDisplayMode = "always" | "touched" | "dirty" | "submitted";
```

含义：

- `always`：只要字段有错误就展示。
- `touched`：字段 touched 后才展示。
- `dirty`：字段 dirty 后才展示。
- `submitted`：表单提交后才展示。

第一版默认值建议为：

```ts
const defaultErrorDisplayMode: ErrorDisplayMode = "touched";
```

### **`AntdFormContextValue`**

```ts
import type { FormMode, ErrorDisplayMode } from "./types";

export interface AntdFormContextValue {
  mode: FormMode;
  errorDisplayMode: ErrorDisplayMode;
  disabled?: boolean;
  readonly?: boolean;
}
```

### **安全的 Ant Design Form.Item Props**

字段组件内部会使用 Ant Design 的 `Form.Item`，但不应该暴露会与 TanStack Form 冲突的属性。

需要排除：

- `name`
- `rules`
- `validateStatus`
- `help`
- `initialValue`
- `dependencies`
- `shouldUpdate`

示例类型：

```ts
import type { FormItemProps } from "antd";

export type SafeFormItemProps = Omit<
  FormItemProps,
  "name" | "rules" | "validateStatus" | "help" | "initialValue" | "dependencies" | "shouldUpdate"
>;
```

### **字段通用 Props**

字段组件应该有统一基础 props。

```ts
import type { ReactNode } from "react";
import type { SafeFormItemProps } from "./types";
import type { FormMode, ErrorDisplayMode } from "./types";

export interface BaseFieldProps {
  label?: ReactNode;
  extra?: ReactNode;
  tooltip?: ReactNode;
  required?: boolean;
  formItemProps?: SafeFormItemProps;
  mode?: FormMode;
  errorDisplayMode?: ErrorDisplayMode;
}
```

注意：`mode` 和 `errorDisplayMode` 可以在字段级别覆盖 Form 级别配置。

---

## **七、`useAntdForm` API 设计**

### **基本目标**

`useAntdForm` 是对 TanStack Form `useForm` 的封装。

它应该：

- 接收与 TanStack Form `useForm` 基本一致的 options；
- 内部调用 TanStack Form 的 `useForm`；
- 返回原始 form 能力；
- 同时挂载 Ant Design 适配后的组件。

### **期望 API**

```ts
const form = useAntdForm<TFormValues>({
  defaultValues,
  validators,
  onSubmit,
});
```

返回值应支持：

```tsx
<form.Form>
  <form.TextField name="name" />
  <form.CheckboxField name="agree" />
  <form.SubmitButton />
  <form.ResetButton />
</form.Form>
```

并支持：

```tsx
<form.Field
  name="custom"
  children={(field) => {
    return <CustomField field={field} />;
  }}
/>
```

### **返回对象建议结构**

```ts
export interface AntdFormApi<TFormValues> {
  form: unknown;
  Field: unknown;
  Form: React.ComponentType<AntdFormComponentProps>;
  TextField: React.ComponentType<any>;
  CheckboxField: React.ComponentType<any>;
  SubmitButton: React.ComponentType<any>;
  ResetButton: React.ComponentType<any>;
  handleSubmit: () => void | Promise<void>;
  reset: () => void;
  state: unknown;
}
```

实际实现中应尽量保留 TanStack Form 的准确类型，不要全部使用 `unknown`。上面只是结构示意。

推荐返回方式：

```ts
return {
  ...form,
  form,
  Field: form.Field,
  Form,
  TextField,
  CheckboxField,
  SubmitButton,
  ResetButton,
};
```

这样使用者既可以通过 `form.handleSubmit` 使用 TanStack 原生能力，也可以使用 `form.Form` 等适配组件。

---

## **八、组件身份稳定性要求**

`useAntdForm` 返回的组件不能在每次 render 时都变成全新组件，否则可能导致子组件重新挂载、输入框丢焦点或性能问题。

因此不要在 render 中直接这样写：

```tsx
function useAntdForm(options) {
  const form = useForm(options);

  const TextField = (props) => {
    return <TextFieldImpl form={form} {...props} />;
  };

  return {
    ...form,
    TextField,
  };
}
```

更推荐使用 `useMemo` 或组件工厂缓存。

示意：

```tsx
const components = useMemo(() => {
  return createAntdFormComponents(form);
}, [form]);
```

如果 TanStack Form 返回的 `form` 实例本身是稳定的，那么这种方式即可。

如果 `form` 实例不稳定，需要进一步确认依赖项，避免组件频繁重建。

---

## **九、上下文设计**

需要使用 React Context 在 `Form` 和字段之间传递 UI 配置。

### **`context.tsx`**

```tsx
import { createContext, useContext } from "react";
import type { AntdFormContextValue } from "./types";

export const AntdFormContext = createContext<AntdFormContextValue>({
  mode: "edit",
  errorDisplayMode: "touched",
});

export function useAntdFormContext() {
  return useContext(AntdFormContext);
}
```

字段组件读取：

```tsx
const context = useAntdFormContext();

const finalMode = props.mode ?? context.mode;
const finalErrorDisplayMode = props.errorDisplayMode ?? context.errorDisplayMode;
```

---

## **十、`Form` 组件设计**

### **职责**

`Form` 组件负责：

- 渲染 Ant Design 的 `Form` 容器；
- 处理 submit；
- 提供 `mode`；
- 提供 `errorDisplayMode`；
- 设置整体 disabled；
- 提供布局属性，如 `layout`、`labelCol`、`wrapperCol`。

`Form` 组件不负责：

- 字段注册；
- 字段校验；
- 字段值存储；
- Ant Design Form 实例管理。

### **Props 设计**

```ts
import type { ReactNode } from "react";
import type { FormProps as AntdFormProps } from "antd";
import type { FormMode, ErrorDisplayMode } from "../types";

export interface AntdFormComponentProps extends Omit<
  AntdFormProps,
  "form" | "onFinish" | "onSubmit"
> {
  children?: ReactNode;
  mode?: FormMode;
  errorDisplayMode?: ErrorDisplayMode;
  onSubmit?: React.FormEventHandler<HTMLFormElement>;
}
```

### **行为要求**

`Form` 内部应该调用 TanStack Form 的 `handleSubmit`。

伪代码：

```tsx
import { Form as AntdForm } from "antd";
import { AntdFormContext } from "../context";

export function createFormComponent(form) {
  return function FormComponent(props) {
    const {
      children,
      mode = "edit",
      errorDisplayMode = "touched",
      disabled,
      onSubmit,
      ...antdFormProps
    } = props;

    const isDisabled = disabled ?? mode === "disabled" ?? false;

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
          disabled={isDisabled}
          component="form"
          onSubmitCapture={(event) => {
            onSubmit?.(event);

            if (event.defaultPrevented) {
              return;
            }

            event.preventDefault();
            event.stopPropagation();

            form.handleSubmit();
          }}
        >
          {children}
        </AntdForm>
      </AntdFormContext.Provider>
    );
  };
}
```

注意：上面的代码是结构示意，实际实现时需要根据 Ant Design `Form` 的真实类型微调。

---

## **十一、错误展示工具函数**

### **字段错误读取**

TanStack Form 的字段错误可能是字符串，也可能是数组或对象。第一版建议先实现常见字符串错误和数组错误。

```ts
export function normalizeFieldErrors(errors: unknown): string[] {
  if (!errors) {
    return [];
  }

  if (typeof errors === "string") {
    return [errors];
  }

  if (Array.isArray(errors)) {
    return errors.flatMap((item) => normalizeFieldErrors(item)).filter(Boolean);
  }

  if (typeof errors === "object") {
    return [String(errors)];
  }

  return [String(errors)];
}
```

### **是否展示错误**

```ts
import type { ErrorDisplayMode } from "../types";

export interface ShouldShowErrorInput {
  errorDisplayMode: ErrorDisplayMode;
  hasError: boolean;
  isTouched?: boolean;
  isDirty?: boolean;
  isSubmitted?: boolean;
}

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

字段组件应该通过这个函数决定：

```tsx
const validateStatus = showError ? "error" : undefined;
const help = showError ? errorMessage : undefined;
```

---

## **十二、`TextField` 组件设计**

### **职责**

`TextField` 负责把 TanStack Form 字段绑定到 Ant Design `Input`。

它应该处理：

- `value`
- `onChange`
- `onBlur`
- `disabled`
- `readOnly`
- `placeholder`
- `label`
- `help`
- `validateStatus`
- `validators`

### **Props 设计**

```ts
import type { InputProps } from "antd";
import type { BaseFieldProps } from "../types";

export interface TextFieldProps<TFormValues>
  extends
    BaseFieldProps,
    Omit<InputProps, "name" | "value" | "defaultValue" | "onChange" | "onBlur"> {
  name: string;
  validators?: unknown;
}
```

实际实现中，`name` 和 `validators` 应该尽量使用 TanStack Form 提供的泛型类型，而不是 `string` 和 `unknown`。

第一版如果类型过于复杂，可以先使用相对宽松类型实现功能，再补类型测试逐步收紧。

### **渲染逻辑**

示意：

```tsx
import { Input, Form as AntdForm } from "antd";
import { useAntdFormContext } from "../context";
import { normalizeFieldErrors, shouldShowFieldError } from "../utils/errors";

export function createTextFieldComponent(form) {
  return function TextField(props) {
    const {
      name,
      label,
      validators,
      formItemProps,
      mode,
      errorDisplayMode,
      disabled,
      readOnly,
      required,
      extra,
      tooltip,
      ...inputProps
    } = props;

    const context = useAntdFormContext();

    const finalMode = mode ?? context.mode;
    const finalErrorDisplayMode = errorDisplayMode ?? context.errorDisplayMode;

    const isDisabled = disabled ?? context.disabled ?? finalMode === "disabled";

    const isReadOnly = readOnly ?? context.readonly ?? finalMode === "view";

    return (
      <form.Field
        name={name}
        validators={validators}
        children={(field) => {
          const errors = normalizeFieldErrors(field.state.meta.errors);
          const hasError = errors.length > 0;

          const showError = shouldShowFieldError({
            errorDisplayMode: finalErrorDisplayMode,
            hasError,
            isTouched: field.state.meta.isTouched,
            isDirty: field.state.meta.isDirty,
            isSubmitted: form.state?.isSubmitted,
          });

          const errorMessage = showError ? errors[0] : undefined;

          if (finalMode === "view") {
            return (
              <AntdForm.Item
                {...formItemProps}
                label={label}
                required={required}
                extra={extra}
                tooltip={tooltip}
                validateStatus={showError ? "error" : undefined}
                help={errorMessage}
              >
                <span>
                  {field.state.value == null || field.state.value === ""
                    ? "-"
                    : String(field.state.value)}
                </span>
              </AntdForm.Item>
            );
          }

          return (
            <AntdForm.Item
              {...formItemProps}
              label={label}
              required={required}
              extra={extra}
              tooltip={tooltip}
              validateStatus={showError ? "error" : undefined}
              help={errorMessage}
            >
              <Input
                {...inputProps}
                value={field.state.value ?? ""}
                disabled={isDisabled}
                readOnly={isReadOnly}
                onChange={(event) => {
                  field.handleChange(event.target.value);
                  inputProps.onChange?.(event);
                }}
                onBlur={(event) => {
                  field.handleBlur();
                  inputProps.onBlur?.(event);
                }}
              />
            </AntdForm.Item>
          );
        }}
      />
    );
  };
}
```

注意：上面示例中 `inputProps.onChange` 和 `inputProps.onBlur` 在类型上被 omit 掉了。如果希望允许用户传入额外回调，需要重新设计 props 类型，例如提供 `afterChange`、`afterBlur`，或者不要 omit `onChange`，但内部必须保证 TanStack Form 的 `handleChange` 一定执行。

第一版建议简单处理：不开放 `onChange` 和 `onBlur`，避免事件顺序和类型混乱。

---

## **十三、`CheckboxField` 组件设计**

### **职责**

`CheckboxField` 负责把 TanStack Form 字段绑定到 Ant Design `Checkbox`。

它应该使用：

- `checked`
- `onChange`
- `onBlur`
- `disabled`

而不是 `value`。

### **Props 设计**

```ts
import type { CheckboxProps } from "antd";
import type { ReactNode } from "react";
import type { BaseFieldProps } from "../types";

export interface CheckboxFieldProps<TFormValues>
  extends
    BaseFieldProps,
    Omit<CheckboxProps, "name" | "checked" | "defaultChecked" | "onChange" | "onBlur"> {
  name: string;
  validators?: unknown;
  children?: ReactNode;
}
```

### **渲染逻辑**

示意：

```tsx
import { Checkbox, Form as AntdForm } from "antd";
import { useAntdFormContext } from "../context";
import { normalizeFieldErrors, shouldShowFieldError } from "../utils/errors";

export function createCheckboxFieldComponent(form) {
  return function CheckboxField(props) {
    const {
      name,
      label,
      children,
      validators,
      formItemProps,
      mode,
      errorDisplayMode,
      disabled,
      required,
      extra,
      tooltip,
      ...checkboxProps
    } = props;

    const context = useAntdFormContext();

    const finalMode = mode ?? context.mode;
    const finalErrorDisplayMode = errorDisplayMode ?? context.errorDisplayMode;

    const isDisabled = disabled ?? context.disabled ?? finalMode === "disabled" ?? false;

    return (
      <form.Field
        name={name}
        validators={validators}
        children={(field) => {
          const errors = normalizeFieldErrors(field.state.meta.errors);
          const hasError = errors.length > 0;

          const showError = shouldShowFieldError({
            errorDisplayMode: finalErrorDisplayMode,
            hasError,
            isTouched: field.state.meta.isTouched,
            isDirty: field.state.meta.isDirty,
            isSubmitted: form.state?.isSubmitted,
          });

          const errorMessage = showError ? errors[0] : undefined;

          if (finalMode === "view") {
            return (
              <AntdForm.Item
                {...formItemProps}
                label={label}
                required={required}
                extra={extra}
                tooltip={tooltip}
                validateStatus={showError ? "error" : undefined}
                help={errorMessage}
              >
                <span>{field.state.value ? "是" : "否"}</span>
              </AntdForm.Item>
            );
          }

          return (
            <AntdForm.Item
              {...formItemProps}
              label={label}
              required={required}
              extra={extra}
              tooltip={tooltip}
              validateStatus={showError ? "error" : undefined}
              help={errorMessage}
            >
              <Checkbox
                {...checkboxProps}
                checked={Boolean(field.state.value)}
                disabled={isDisabled}
                onChange={(event) => {
                  field.handleChange(event.target.checked);
                }}
                onBlur={() => {
                  field.handleBlur();
                }}
              >
                {children}
              </Checkbox>
            </AntdForm.Item>
          );
        }}
      />
    );
  };
}
```

---

## **十四、`SubmitButton` 组件设计**

### **职责**

`SubmitButton` 负责提交表单。

它应该：

- 默认渲染 Ant Design `Button`；
- 默认 `htmlType="submit"`；
- 可根据 form 状态显示 loading；
- 在 disabled/view 模式下禁用；
- 保留用户传入的 Ant Design Button props。

### **Props 设计**

```ts
import type { ButtonProps } from "antd";

export interface SubmitButtonProps extends ButtonProps {
  loadingWhenSubmitting?: boolean;
}
```

默认：

```ts
loadingWhenSubmitting = true;
```

### **渲染逻辑**

示意：

```tsx
import { Button } from "antd";
import { useAntdFormContext } from "../context";

export function createSubmitButtonComponent(form) {
  return function SubmitButton(props) {
    const {
      children = "提交",
      htmlType = "submit",
      loading,
      disabled,
      loadingWhenSubmitting = true,
      ...buttonProps
    } = props;

    const context = useAntdFormContext();

    const isSubmitting = Boolean(form.state?.isSubmitting);

    const finalLoading = loading ?? (loadingWhenSubmitting ? isSubmitting : false);

    const finalDisabled =
      disabled ?? context.disabled ?? context.mode === "view" ?? context.mode === "disabled";

    return (
      <Button {...buttonProps} htmlType={htmlType} loading={finalLoading} disabled={finalDisabled}>
        {children}
      </Button>
    );
  };
}
```

注意：上面包含 `??` 和布尔表达式混用，实际实现时建议写得更明确，避免优先级误读：

```ts
const finalDisabled =
  (disabled ?? context.disabled ?? context.mode === "view") || context.mode === "disabled";
```

更安全写法：

```ts
const modeDisabled = context.mode === "view" || context.mode === "disabled";

const finalDisabled = disabled ?? context.disabled ?? modeDisabled;
```

请采用更安全写法。

---

## **十五、`ResetButton` 组件设计**

### **职责**

`ResetButton` 负责重置表单。

它应该：

- 默认渲染 Ant Design `Button`；
- 默认 `htmlType="button"`；
- 点击后调用 TanStack Form 的 `reset`；
- 可选调用用户传入的 `onClick`；
- 如果用户事件中调用了 `event.preventDefault()`，则不执行 reset。

### **Props 设计**

```ts
import type { ButtonProps } from "antd";

export interface ResetButtonProps extends ButtonProps {
  confirmReset?: boolean;
}
```

第一版可以先声明 `confirmReset`，但不实现确认弹窗。或者完全不加 `confirmReset`，后续再扩展。

建议第一版不实现 `confirmReset`，保持简单。

### **渲染逻辑**

```tsx
import { Button } from "antd";
import { useAntdFormContext } from "../context";

export function createResetButtonComponent(form) {
  return function ResetButton(props) {
    const { children = "重置", htmlType = "button", disabled, onClick, ...buttonProps } = props;

    const context = useAntdFormContext();

    const modeDisabled = context.mode === "view" || context.mode === "disabled";

    const finalDisabled = disabled ?? context.disabled ?? modeDisabled;

    return (
      <Button
        {...buttonProps}
        htmlType={htmlType}
        disabled={finalDisabled}
        onClick={(event) => {
          onClick?.(event);

          if (event.defaultPrevented) {
            return;
          }

          form.reset();
        }}
      >
        {children}
      </Button>
    );
  };
}
```

---

## **十六、`useAntdForm` 实现策略**

### **核心实现示意**

```tsx
import { useMemo } from "react";
import { useForm } from "@tanstack/react-form";
import { createFormComponent } from "./components/Form";
import { createTextFieldComponent } from "./components/TextField";
import { createCheckboxFieldComponent } from "./components/CheckboxField";
import { createSubmitButtonComponent } from "./components/SubmitButton";
import { createResetButtonComponent } from "./components/ResetButton";

export function useAntdForm<TFormValues>(options) {
  const form = useForm<TFormValues>(options);

  const components = useMemo(() => {
    return {
      Form: createFormComponent(form),
      TextField: createTextFieldComponent(form),
      CheckboxField: createCheckboxFieldComponent(form),
      SubmitButton: createSubmitButtonComponent(form),
      ResetButton: createResetButtonComponent(form),
    };
  }, [form]);

  return {
    ...form,
    form,
    Field: form.Field,
    ...components,
  };
}
```

### **类型注意事项**

TanStack Form 的类型比较复杂，第一版实现时可以分两步：

第一步：先确保运行时行为正确，使用相对宽松的内部类型。

第二步：逐步完善泛型，让字段的 `name` 能根据 `TFormValues` 推导。

理想效果：

```tsx
type Values = {
  name: string
  agree: boolean
}

const form = useAntdForm<Values>({
  defaultValues: {
    name: '',
    agree: false,
  },
})

<form.TextField name="name" />

<form.CheckboxField name="agree" />
```

如果用户写：

```tsx
<form.TextField name="notExists" />
```

TypeScript 最好能够报错。

但如果第一版难以完全做到，可以先保证主要 API 可用，再用类型测试迭代。

---

## **十七、导出设计**

### **`src/index.ts`**

```ts
export { useAntdForm } from "./useAntdForm";

export type {
  FormMode,
  ErrorDisplayMode,
  AntdFormComponentProps,
  TextFieldProps,
  CheckboxFieldProps,
  SubmitButtonProps,
  ResetButtonProps,
} from "./types";
```

不要默认导出。

推荐全部使用 named exports。

---

## **十八、README 内容要求**

README 至少包含以下内容。

### **安装**

```bash
npm install @acrostack/tanstack-form-antd @tanstack/react-form antd
```

如果 `@tanstack/react-form` 是 dependency，则安装命令可以简化为：

```bash
npm install @acrostack/tanstack-form-antd antd
```

### **基础示例**

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
    <form.Form layout="vertical">
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
    </form.Form>
  );
}
```

### **模式示例**

```tsx
<form.Form mode="view" layout="vertical">
  <form.TextField name="name" label="用户名" />

  <form.CheckboxField name="agree" label="协议">
    我同意协议
  </form.CheckboxField>
</form.Form>
```

### **错误展示策略示例**

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

### **高级自定义字段示例**

```tsx
<form.Field
  name="custom"
  children={(field) => {
    return (
      <CustomInput
        value={field.state.value}
        onChange={field.handleChange}
        onBlur={field.handleBlur}
      />
    );
  }}
/>
```

README 需要明确说明：

- 本包不使用 Ant Design Form store；
- 本包不使用 Ant Design rules；
- 校验逻辑请使用 TanStack Form validators；
- Ant Design 只负责 UI 展示；
- `Field` 被保留为高级逃生口。

---

## **十九、测试要求**

### **`useAntdForm` 测试**

需要验证：

- 可以创建 form；
- 返回 `Form`、`TextField`、`CheckboxField`、`SubmitButton`、`ResetButton`；
- _内容由 AI 生成仅供参考_
