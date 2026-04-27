# **TanStack Form × Antd v6 表单适配包设计文档**

包名暂定：

```txt
@scope/tanstack-form-antd
```

本包是 `@tanstack/react-form` 与 `antd@6` 的适配层。它不重新实现表单状态管理，也不兼容 Antd Form 的 `rules` 校验体系。它只提供一套强类型、低样板代码的 Antd 字段组件，让业务侧可以用统一的 `useAntdForm` 写出新增、编辑、详情预览三类页面。

本包唯一主入口是：

```ts
useAntdForm<TValues>(options);
```

不提供 `createAntdForm`，不导出独立的 `TextField`、`SelectField`、`Form`、`SubmitButton` 作为主 API，避免多套写法并存造成使用混乱。

---

## **一、核心设计目标**

本包需要满足以下目标。

首先，表单值必须强类型。开发者声明：

```ts
type UserFormValues = {
  username: string;
  role: string;
  birthday: string | null;
  active: boolean;
};
```

之后：

```tsx
<TextField name="username" />
```

应当合法，而：

```tsx
<TextField name="usernmae" />
```

应当在 TypeScript 层报错。

其次，使用方式必须简洁。用户不需要在每个字段上传入 `form={form}`，也不需要显式使用 `form.Field`。推荐写法是：

```tsx
const { Form, TextField, SelectField, DatePickerField, SwitchField, SubmitButton } =
  useAntdForm<UserFormValues>({
    defaultValues,
    onSubmit,
  });

return (
  <Form layout="vertical">
    <TextField name="username" label="用户名" />
    <SelectField name="role" label="角色" options={roleOptions} />
    <DatePickerField name="birthday" label="生日" />
    <SwitchField name="active" label="是否启用" />
    <SubmitButton>保存</SubmitButton>
  </Form>
);
```

第三，TanStack Form 是唯一数据源。Antd `Form` 和 `Form.Item` 只负责布局、样式、标签和错误展示，不负责字段值管理，不使用 Antd `rules`。

第四，日期值默认保存为字符串。`DatePickerField` 的表单值默认是 `string | null`，不是 `dayjs` 对象。`RangePickerField` 的表单值默认是 `[string, string] | null`。

第五，支持表单预览态。通过：

```ts
mode: "preview";
```

同一套字段组件从输入控件自动切换成纯展示形态，用于详情页和数据预览页。

---

## **二、最终用户 API**

### **1. 编辑表单示例**

```tsx
import { useAntdForm, validators } from "@scope/tanstack-form-antd";

type UserFormValues = {
  username: string;
  role: string;
  birthday: string | null;
  active: boolean;
};

export function UserEditor() {
  const {
    form,
    Form,
    TextField,
    SelectField,
    DatePickerField,
    SwitchField,
    SubmitButton,
    ResetButton,
  } = useAntdForm<UserFormValues>({
    mode: "edit",

    defaultValues: {
      username: "",
      role: "",
      birthday: null,
      active: true,
    },

    onSubmit: async ({ value }) => {
      console.log(value);
    },
  });

  return (
    <Form layout="vertical">
      <TextField
        name="username"
        label="用户名"
        required
        placeholder="请输入用户名"
        validators={{
          onChange: validators.required("请输入用户名"),
        }}
      />

      <SelectField
        name="role"
        label="角色"
        required
        options={[
          { label: "管理员", value: "admin" },
          { label: "普通用户", value: "user" },
        ]}
        validators={{
          onChange: validators.required("请选择角色"),
        }}
      />

      <DatePickerField name="birthday" label="生日" valueFormat="YYYY-MM-DD" />

      <SwitchField name="active" label="是否启用" checkedText="启用" uncheckedText="停用" />

      <SubmitButton>保存</SubmitButton>
      <ResetButton>重置</ResetButton>
    </Form>
  );
}
```

### **2. 预览表单示例**

同一套字段组件可以切换成预览态。

```tsx
import { useAntdForm } from "@scope/tanstack-form-antd";

type UserFormValues = {
  username: string;
  role: string;
  birthday: string | null;
  active: boolean;
};

export function UserPreview() {
  const { Form, TextField, SelectField, DatePickerField, SwitchField } =
    useAntdForm<UserFormValues>({
      mode: "preview",
      emptyText: "-",

      defaultValues: {
        username: "张三",
        role: "admin",
        birthday: "1995-08-12",
        active: true,
      },
    });

  return (
    <Form layout="vertical">
      <TextField name="username" label="用户名" />

      <SelectField
        name="role"
        label="角色"
        options={[
          { label: "管理员", value: "admin" },
          { label: "普通用户", value: "user" },
        ]}
      />

      <DatePickerField name="birthday" label="生日" />

      <SwitchField name="active" label="是否启用" checkedText="启用" uncheckedText="停用" />
    </Form>
  );
}
```

预览态下渲染结果应当类似：

```txt
用户名：张三
角色：管理员
生日：1995-08-12
是否启用：启用
```

---

## **三、对外导出设计**

包入口 `src/index.ts` 只导出以下内容：

```ts
export { useAntdForm } from "./useAntdForm";
export { validators } from "./validators";

export type {
  UseAntdFormOptions,
  UseAntdFormReturn,
  FormMode,
  ShowErrorWhen,
  BaseFieldProps,
  RenderPreview,
} from "./types";
```

不要导出以下组件作为用户直接 import 的主 API：

```ts
Form;
TextField;
SelectField;
DatePickerField;
SubmitButton;
ResetButton;
```

这些组件只能通过 `useAntdForm` 返回。

这样用户只会有一种写法：

```tsx
const { Form, TextField } = useAntdForm<FormValues>(...)
```

而不会出现：

```tsx
import { TextField } from "@scope/tanstack-form-antd";
```

---

## **四、文件结构**

建议文件结构如下：

```txt
src/
  index.ts

  useAntdForm.tsx

  context/
    InternalFormContext.tsx

  components/
    BoundForm.tsx
    SubmitButton.tsx
    ResetButton.tsx
    FormField.tsx
    FormItem.tsx
    PreviewValue.tsx

  fields/
    TextField.tsx
    TextAreaField.tsx
    PasswordField.tsx
    NumberField.tsx
    SelectField.tsx
    CheckboxField.tsx
    SwitchField.tsx
    RadioGroupField.tsx
    DatePickerField.tsx
    RangePickerField.tsx

  adapters/
    createFieldComponent.tsx
    valueAdapters.ts
    previewAdapters.ts

  validators/
    index.ts
    builtInValidators.ts

  types/
    index.ts
    form.ts
    field.ts
    path.ts
    preview.ts
    validators.ts

  utils/
    getFieldError.ts
    getValidateStatus.ts
    isEmptyValue.ts
    formatPreviewValue.ts
    flattenOptions.ts
    mergeRefs.ts
    warning.ts

  style/
    index.css
```

第一版 MVP 至少实现：

```txt
useAntdForm
Form
FormField
FormItem
SubmitButton
ResetButton
TextField
TextAreaField
PasswordField
NumberField
SelectField
CheckboxField
SwitchField
RadioGroupField
DatePickerField
RangePickerField
validators
preview mode
```

`UploadField`、`CascaderField`、`TreeSelectField` 可以后续再做。

---

## **五、核心类型设计**

### **1. 表单模式**

第一版只支持两种模式：

```ts
export type FormMode = "edit" | "preview";
```

不做 `readonly`。原因是 `readonly` 在 Antd 各组件上的表现不统一，`Input` 可以 `readOnly`，但 `Select`、`DatePicker`、`Switch` 通常只能 `disabled`，容易造成样式和语义混乱。

本包当前只解决“表单数据预览形态”，所以使用 `preview`。

---

### **2. 错误展示时机**

```ts
export type ShowErrorWhen = "touched" | "dirty" | "submitted" | "touchedOrSubmitted" | "always";
```

默认值：

```ts
"touchedOrSubmitted";
```

---

### **3. 路径类型**

需要实现字段路径强类型。

建议在 `types/path.ts` 中封装 TanStack Form 的路径类型，不要让业务组件直接依赖 TanStack 内部类型名。

如果当前 TanStack Form 版本导出了 `DeepKeys`、`DeepValue`，可以这样：

```ts
import type { DeepKeys, DeepValue } from "@tanstack/react-form";

export type FieldPath<TValues> = DeepKeys<TValues>;

export type FieldPathValue<TValues, TName extends FieldPath<TValues>> = DeepValue<TValues, TName>;
```

如果当前安装版本的导出位置不同，Coding Agent 需要在这一层适配，而不是修改字段组件代码。

另外需要提供按值类型过滤字段名的工具类型：

```ts
export type FieldPathByValue<TValues, TValue> = {
  [TName in FieldPath<TValues>]: FieldPathValue<TValues, TName> extends TValue ? TName : never;
}[FieldPath<TValues>];
```

用途：

```ts
DatePickerField.name;
```

只能接受值类型为：

```ts
string | null | undefined;
```

的字段。

`RangePickerField.name` 只能接受值类型为：

```ts
[string, string] | null | undefined;
```

的字段。

`SwitchField.name` 只能接受值类型为：

```ts
boolean;
```

或：

```ts
boolean | undefined;
```

的字段。

如果类型过滤实现过于复杂，第一版可以先保证 `name` 是 `FieldPath<TValues>`，第二阶段再增强到按值类型过滤。

---

### **4. useAntdForm Options**

```ts
import type { ReactNode } from "react";
import type { FormOptions } from "@tanstack/react-form";

export type UseAntdFormOptions<TValues> = FormOptions<TValues> & {
  mode?: FormMode;

  /**
   * 预览态空值展示。
   * 默认 '-'
   */
  emptyText?: ReactNode;

  /**
   * 错误展示时机。
   * 默认 'touchedOrSubmitted'
   */
  showErrorWhen?: ShowErrorWhen;

  /**
   * 日期字段默认保存格式。
   * 默认 'YYYY-MM-DD'
   */
  dateValueFormat?: string;

  /**
   * Antd 组件尺寸。
   * 默认 'middle'
   */
  size?: "small" | "middle" | "large";

  /**
   * 全表单禁用。
   * edit 模式下生效。
   * preview 模式下字段本来就不可编辑。
   */
  disabled?: boolean;
};
```

注意：`UseAntdFormOptions<TValues>` 必须兼容 TanStack Form 的 `useForm` 配置。具体类型名如果不是 `FormOptions`，Coding Agent 需要按实际版本调整，并保持本包对外类型稳定。

---

### **5. useAntdForm Return**

```ts
export type UseAntdFormReturn<TValues> = {
  form: unknown;

  Form: BoundFormComponent;
  FormField: BoundFormFieldComponent<TValues>;

  TextField: BoundTextFieldComponent<TValues>;
  TextAreaField: BoundTextAreaFieldComponent<TValues>;
  PasswordField: BoundPasswordFieldComponent<TValues>;
  NumberField: BoundNumberFieldComponent<TValues>;

  SelectField: BoundSelectFieldComponent<TValues>;
  CheckboxField: BoundCheckboxFieldComponent<TValues>;
  SwitchField: BoundSwitchFieldComponent<TValues>;
  RadioGroupField: BoundRadioGroupFieldComponent<TValues>;

  DatePickerField: BoundDatePickerFieldComponent<TValues>;
  RangePickerField: BoundRangePickerFieldComponent<TValues>;

  SubmitButton: BoundSubmitButtonComponent;
  ResetButton: BoundResetButtonComponent;
};
```

`form` 实际类型应为 TanStack Form 返回的 form API。这里文档中写 `unknown` 是为了说明结构，实际实现时需要使用正确类型。

---

### **6. 字段基础 Props**

```ts
import type { ReactNode, CSSProperties } from "react";
import type { FormItemProps } from "antd";
import type { FieldPath, FieldPathValue } from "./path";
import type { FormMode, ShowErrorWhen } from "./form";

export type RenderPreview<TValue> = (
  value: TValue,
  context: {
    emptyText: ReactNode;
    formattedValue: ReactNode;
  },
) => ReactNode;

export type BaseFieldProps<TValues, TName extends FieldPath<TValues>> = {
  name: TName;

  label?: ReactNode;
  required?: boolean;

  /**
   * 字段级模式覆盖。
   * 优先级：field.mode > form.mode > 'edit'
   */
  mode?: FormMode;

  /**
   * 字段级空值展示覆盖。
   */
  emptyText?: ReactNode;

  /**
   * 字段级错误展示时机覆盖。
   */
  showErrorWhen?: ShowErrorWhen;

  /**
   * 预览态自定义渲染。
   */
  renderPreview?: RenderPreview<FieldPathValue<TValues, TName>>;

  /**
   * 传给 Antd Form.Item。
   * 禁止使用 rules。
   */
  formItemProps?: Omit<FormItemProps, "name" | "rules" | "children">;

  previewClassName?: string;
  previewStyle?: CSSProperties;

  /**
   * TanStack Form 字段校验。
   * 直接透传给 form.Field。
   */
  validators?: unknown;
};
```

实际实现时，`validators` 需要替换成 TanStack Form 当前版本的字段 validators 类型。

不要支持：

```ts
rules;
```

如果用户传了 `rules`，TypeScript 层不应允许。

---

## **六、useAntdForm 实现要求**

### **1. 基本职责**

`useAntdForm` 做五件事：

第一，调用 TanStack Form 的 `useForm(options)` 创建表单实例。

第二，合并本包配置默认值。

第三，创建一组绑定当前 form 的组件。

第四，保证返回的组件引用稳定，避免每次 render 造成字段组件重挂载。

第五，返回原始 `form`，给高级场景使用。

---

### **2. 默认配置**

```ts
const defaultConfig = {
  mode: "edit",
  emptyText: "-",
  showErrorWhen: "touchedOrSubmitted",
  dateValueFormat: "YYYY-MM-DD",
  size: "middle",
  disabled: false,
};
```

---

### **3. 组件引用稳定性**

这是实现重点。

不要这样写：

```tsx
export function useAntdForm<TValues>(options) {
  const form = useForm(options)

  const TextField = props => {
    return ...
  }

  return {
    form,
    TextField,
  }
}
```

这会导致每次组件重新渲染时，`TextField` 都是新的组件类型，React 可能重挂载字段，造成输入焦点丢失或内部状态重置。

推荐实现方式：

```tsx
export function useAntdForm<TValues>(
  options: UseAntdFormOptions<TValues>,
): UseAntdFormReturn<TValues> {
  const form = useForm(options);

  const contextRef = useRef<InternalFormContextValue<TValues> | null>(null);

  contextRef.current = {
    form,
    config: {
      mode: options.mode ?? "edit",
      emptyText: options.emptyText ?? "-",
      showErrorWhen: options.showErrorWhen ?? "touchedOrSubmitted",
      dateValueFormat: options.dateValueFormat ?? "YYYY-MM-DD",
      size: options.size ?? "middle",
      disabled: options.disabled ?? false,
    },
  };

  const componentsRef = useRef<UseAntdFormReturn<TValues> | null>(null);

  if (!componentsRef.current) {
    componentsRef.current = createBoundComponents<TValues>(contextRef);
  }

  return {
    ...componentsRef.current,
    form,
  };
}
```

其中 `createBoundComponents` 只在第一次 render 时执行。它返回的组件都通过 `contextRef.current` 获取最新的 form 和 config。

---

### **4. createBoundComponents**

```ts
function createBoundComponents<TValues>(
  contextRef: React.MutableRefObject<InternalFormContextValue<TValues> | null>,
): Omit<UseAntdFormReturn<TValues>, "form"> {
  return {
    Form: createBoundForm(contextRef),
    FormField: createBoundFormField(contextRef),

    TextField: createTextField(contextRef),
    TextAreaField: createTextAreaField(contextRef),
    PasswordField: createPasswordField(contextRef),
    NumberField: createNumberField(contextRef),

    SelectField: createSelectField(contextRef),
    CheckboxField: createCheckboxField(contextRef),
    SwitchField: createSwitchField(contextRef),
    RadioGroupField: createRadioGroupField(contextRef),

    DatePickerField: createDatePickerField(contextRef),
    RangePickerField: createRangePickerField(contextRef),

    SubmitButton: createSubmitButton(contextRef),
    ResetButton: createResetButton(contextRef),
  };
}
```

每个组件内部调用：

```ts
const ctx = getContextOrThrow(contextRef);
```

如果 `contextRef.current` 不存在，需要抛出开发错误：

```txt
useAntdForm internal context is not ready.
```

---

## **七、Form 组件设计**

### **1. Form 用法**

```tsx
<Form layout="vertical">...</Form>
```

用户不需要传：

```tsx
form = { form };
```

### **2. Form Props**

`Form` Props 基本继承 Antd `FormProps`，但需要禁止这些属性：

```ts
form;
onFinish;
rules;
```

实际类型：

```ts
import type { FormProps as AntdFormProps } from "antd";

export type BoundFormProps = Omit<AntdFormProps, "form" | "onFinish"> & {
  onSubmitSuccess?: () => void;
  onSubmitError?: (error: unknown) => void;
};
```

### **3. Form 行为**

`Form` 内部渲染 Antd Form：

```tsx
<AntdForm
  {...props}
  disabled={props.disabled ?? config.disabled}
  size={props.size ?? config.size}
  onFinish={async () => {
    await form.handleSubmit();
  }}
>
  {props.children}
</AntdForm>
```

注意事项：

`AntdForm` 只作为布局和提交容器。字段组件里的 `Form.Item` 不传 `name`，避免 Antd 接管字段状态。

---

## **八、FormItem 组件设计**

`FormItem` 是内部组件，不对外导出。

它负责把 TanStack Field 的 meta 映射到 Antd `Form.Item`：

```tsx
<AntdForm.Item
  label={label}
  required={required}
  validateStatus={validateStatus}
  help={help}
  {...formItemProps}
>
  {children}
</AntdForm.Item>
```

### **1. 错误展示规则**

工具函数：

```ts
export function getFieldError(params: {
  meta: any;
  showErrorWhen: ShowErrorWhen;
  submitted: boolean;
}): React.ReactNode | undefined;
```

逻辑：

```ts
const hasError = meta.errors && meta.errors.length > 0;

const shouldShow =
  showErrorWhen === "always" ||
  (showErrorWhen === "touched" && meta.isTouched) ||
  (showErrorWhen === "dirty" && meta.isDirty) ||
  (showErrorWhen === "submitted" && submitted) ||
  (showErrorWhen === "touchedOrSubmitted" && (meta.isTouched || submitted));

if (!hasError || !shouldShow) return undefined;

return normalizeError(meta.errors[0]);
```

`normalizeError`：

```ts
function normalizeError(error: unknown): React.ReactNode {
  if (error == null) return undefined;
  if (typeof error === "string") return error;
  if (typeof error === "object" && "message" in error) {
    return String((error as any).message);
  }
  return String(error);
}
```

### **2. validateStatus 规则**

```ts
export function getValidateStatus(params: {
  error?: React.ReactNode;
  isValidating?: boolean;
}): FormItemProps["validateStatus"] {
  if (params.isValidating) return "validating";
  if (params.error) return "error";
  return undefined;
}
```

第一版不展示 `success`，避免成功态过多干扰 UI。

---

## **九、字段组件通用渲染流程**

每个字段组件都遵循同一流程：

```tsx
function FieldComponent(props) {
  const ctx = getContextOrThrow(contextRef);
  const form = ctx.form;
  const config = ctx.config;

  const mode = props.mode ?? config.mode;
  const emptyText = props.emptyText ?? config.emptyText;
  const showErrorWhen = props.showErrorWhen ?? config.showErrorWhen;

  return (
    <form.Field name={props.name} validators={props.validators}>
      {(field) => {
        if (mode === "preview") {
          return (
            <PreviewFormItem
              field={field}
              label={props.label}
              required={props.required}
              emptyText={emptyText}
              renderPreview={props.renderPreview}
              formItemProps={props.formItemProps}
            />
          );
        }

        return (
          <EditFormItem
            field={field}
            label={props.label}
            required={props.required}
            showErrorWhen={showErrorWhen}
            formItemProps={props.formItemProps}
          >
            {renderAntdControl(field)}
          </EditFormItem>
        );
      }}
    </form.Field>
  );
}
```

---

## **十、预览态设计**

### **1. 空值判断**

工具函数：

```ts
export function isEmptyValue(value: unknown): boolean {
  return (
    value === null ||
    value === undefined ||
    value === "" ||
    (Array.isArray(value) && value.length === 0)
  );
}
```

### **2. PreviewValue**

```tsx
type PreviewValueProps<TValue> = {
  value: TValue;
  emptyText: React.ReactNode;
  renderPreview?: RenderPreview<TValue>;
  formatter?: (value: TValue) => React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
};

export function PreviewValue<TValue>(props: PreviewValueProps<TValue>) {
  const formattedValue = isEmptyValue(props.value)
    ? props.emptyText
    : props.formatter
      ? props.formatter(props.value)
      : String(props.value);

  if (props.renderPreview) {
    return (
      <>
        {props.renderPreview(props.value, {
          emptyText: props.emptyText,
          formattedValue,
        })}
      </>
    );
  }

  return (
    <span className={props.className} style={props.style}>
      {formattedValue}
    </span>
  );
}
```

### **3. 预览态 FormItem**

预览态仍然使用 Antd `Form.Item` 保持布局统一：

```tsx
<AntdForm.Item
  label={label}
  required={required}
  {...formItemProps}
>
  <PreviewValue ... />
</AntdForm.Item>
```

预览态不展示校验错误。

---

## **十一、具体字段组件设计**

### **1. TextField**

底层组件：

```ts
Input;
```

编辑态行为：

```tsx
<Input
  {...inputProps}
  value={field.state.value ?? ""}
  disabled={config.disabled || inputProps.disabled}
  onChange={(event) => {
    field.handleChange(event.target.value);
    inputProps.onChange?.(event);
  }}
  onBlur={(event) => {
    field.handleBlur();
    inputProps.onBlur?.(event);
  }}
/>
```

预览态：

```ts
String(value);
```

Props：

```ts
type TextFieldProps<TValues, TName> = BaseFieldProps<TValues, TName> &
  Omit<InputProps, "name" | "value" | "defaultValue" | "onChange" | "onBlur">;
```

---

### **2. TextAreaField**

底层组件：

```ts
Input.TextArea;
```

编辑态同 `TextField`。

预览态需要保留换行：

```tsx
<span style={{ whiteSpace: "pre-wrap" }}>{value}</span>
```

---

### **3. PasswordField**

底层组件：

```ts
Input.Password;
```

编辑态正常密码输入。

预览态默认不展示真实密码，显示：

```txt
******
```

如果值为空，显示 `emptyText`。

支持：

```ts
maskPreview?: boolean
```

默认：

```ts
maskPreview = true;
```

如果用户设置：

```tsx
<PasswordField maskPreview={false} />
```

预览态可以显示真实值。

---

### **4. NumberField**

底层组件：

```ts
InputNumber;
```

编辑态：

```tsx
<InputNumber
  {...props}
  value={field.state.value}
  disabled={config.disabled || props.disabled}
  onChange={(value) => {
    field.handleChange(value);
    props.onChange?.(value);
  }}
  onBlur={(event) => {
    field.handleBlur();
    props.onBlur?.(event);
  }}
/>
```

预览态：

```ts
String(value);
```

支持：

```ts
formatPreview?: (value: number | null | undefined) => React.ReactNode
```

第一版也可以统一使用 `renderPreview`，不额外提供 `formatPreview`。

---

### **5. SelectField**

底层组件：

```ts
Select;
```

编辑态：

```tsx
<Select
  {...props}
  value={field.state.value}
  disabled={config.disabled || props.disabled}
  onChange={(value, option) => {
    field.handleChange(value);
    props.onChange?.(value, option);
  }}
  onBlur={(event) => {
    field.handleBlur();
    props.onBlur?.(event);
  }}
/>
```

预览态需要把 value 映射成 label。

工具函数：

```ts
type OptionLike = {
  label?: React.ReactNode;
  value?: unknown;
  options?: OptionLike[];
};

export function flattenOptions(options: OptionLike[] = []): OptionLike[] {
  const result: OptionLike[] = [];

  for (const option of options) {
    if (option.options) {
      result.push(...flattenOptions(option.options));
    } else {
      result.push(option);
    }
  }

  return result;
}
```

格式化：

```ts
function formatSelectPreview(value, options, separator = "、") {
  if (isEmptyValue(value)) return undefined;

  const flat = flattenOptions(options);
  const map = new Map(flat.map((item) => [item.value, item.label ?? item.value]));

  if (Array.isArray(value)) {
    return value.map((item) => map.get(item) ?? String(item)).join(separator);
  }

  return map.get(value) ?? String(value);
}
```

支持 Props：

```ts
previewSeparator?: string
```

### **6. CheckboxField**

底层组件：

```ts
Checkbox;
```

适用字段值：

```ts
boolean;
boolean | undefined;
```

编辑态行为：

```tsx
<Checkbox
  {...checkboxProps}
  checked={Boolean(field.state.value)}
  disabled={config.disabled || checkboxProps.disabled}
  onChange={(event) => {
    field.handleChange(event.target.checked);
    checkboxProps.onChange?.(event);
  }}
  onBlur={(event) => {
    field.handleBlur();
    checkboxProps.onBlur?.(event);
  }}
>
  {checkboxProps.children}
</Checkbox>
```

预览态默认展示：

```txt
true  -> 是
false -> 否
```

支持自定义文案：

```tsx
<CheckboxField name="agreed" label="是否同意" checkedText="已同意" uncheckedText="未同意" />
```

Props 设计：

```ts
export type CheckboxFieldProps<TValues, TName extends FieldPath<TValues>> = BaseFieldProps<
  TValues,
  TName
> &
  Omit<CheckboxProps, "name" | "checked" | "defaultChecked" | "value" | "onChange" | "onBlur"> & {
    checkedText?: React.ReactNode;
    uncheckedText?: React.ReactNode;
  };
```

预览态格式化：

```ts
function formatBooleanPreview(
  value: unknown,
  checkedText: React.ReactNode = "是",
  uncheckedText: React.ReactNode = "否",
) {
  return value ? checkedText : uncheckedText;
}
```

---

### **7. SwitchField**

底层组件：

```ts
Switch;
```

适用字段值：

```ts
boolean;
boolean | undefined;
```

编辑态行为：

```tsx
<Switch
  {...switchProps}
  checked={Boolean(field.state.value)}
  disabled={config.disabled || switchProps.disabled}
  onChange={(checked, event) => {
    field.handleChange(checked);
    switchProps.onChange?.(checked, event);
  }}
  onBlur={(event) => {
    field.handleBlur();
    switchProps.onBlur?.(event);
  }}
/>
```

预览态默认展示：

```txt
true  -> 是
false -> 否
```

支持：

```tsx
<SwitchField name="active" label="状态" checkedText="启用" uncheckedText="停用" />
```

Props 设计：

```ts
export type SwitchFieldProps<TValues, TName extends FieldPath<TValues>> = BaseFieldProps<
  TValues,
  TName
> &
  Omit<SwitchProps, "name" | "checked" | "defaultChecked" | "value" | "onChange" | "onBlur"> & {
    checkedText?: React.ReactNode;
    uncheckedText?: React.ReactNode;
  };
```

---

### **8. RadioGroupField**

底层组件：

```ts
Radio.Group;
```

适用字段值：

```ts
string;
number;
boolean;
string | number | boolean | null | undefined;
```

编辑态行为：

```tsx
<Radio.Group
  {...radioGroupProps}
  value={field.state.value}
  disabled={config.disabled || radioGroupProps.disabled}
  onChange={(event) => {
    field.handleChange(event.target.value);
    radioGroupProps.onChange?.(event);
  }}
  onBlur={(event) => {
    field.handleBlur();
    radioGroupProps.onBlur?.(event);
  }}
/>
```

预览态行为和 `SelectField` 类似，需要根据 `options` 把 value 映射成 label。

```tsx
<RadioGroupField
  name="gender"
  label="性别"
  options={[
    { label: "男", value: "male" },
    { label: "女", value: "female" },
  ]}
/>
```

如果值为：

```ts
gender: "male";
```

预览态展示：

```txt
男
```

Props 设计：

```ts
export type RadioGroupFieldProps<TValues, TName extends FieldPath<TValues>> = BaseFieldProps<
  TValues,
  TName
> &
  Omit<RadioGroupProps, "name" | "value" | "defaultValue" | "onChange" | "onBlur">;
```

---

### **9. DatePickerField**

底层组件：

```ts
DatePicker;
```

核心原则：表单中默认保存字符串，不保存 dayjs。

默认配置：

```ts
valueType = "string";
valueFormat = config.dateValueFormat ?? "YYYY-MM-DD";
emptyValue = null;
```

适用字段值：

```ts
string | null;
string | undefined;
string | null | undefined;
```

编辑态行为：

```tsx
<DatePicker
  {...datePickerProps}
  value={field.state.value ? dayjs(field.state.value, valueFormat) : null}
  disabled={config.disabled || datePickerProps.disabled}
  onChange={(date, dateString) => {
    const nextValue = date ? String(dateString) : emptyValue;
    field.handleChange(nextValue);
    datePickerProps.onChange?.(date, dateString);
  }}
  onBlur={(event) => {
    field.handleBlur();
    datePickerProps.onBlur?.(event);
  }}
/>
```

注意：`dateString` 在 Antd DatePicker 中可能是字符串，也可能在某些场景中是数组。`DatePickerField` 只处理单日期，所以应确保写入表单的值是字符串。

推荐实现：

```ts
function normalizeDateString(dateString: string | string[]): string {
  return Array.isArray(dateString) ? (dateString[0] ?? "") : dateString;
}
```

然后：

```ts
const normalized = normalizeDateString(dateString);
field.handleChange(date ? normalized : emptyValue);
```

Props 设计：

```ts
export type DateValueType = "string" | "dayjs";

export type DatePickerFieldProps<TValues, TName extends FieldPath<TValues>> = BaseFieldProps<
  TValues,
  TName
> &
  Omit<DatePickerProps, "name" | "value" | "defaultValue" | "onChange" | "onBlur"> & {
    valueType?: DateValueType;
    valueFormat?: string;
    emptyValue?: null | undefined | "";
    displayFormat?: string;
  };
```

第一版虽然默认使用 `valueType="string"`，但可以保留 `valueType="dayjs"` 作为扩展能力。如果实现成本要控制，也可以第一版只支持字符串，暂不开放 `valueType`。

预览态行为：

如果没有传 `displayFormat`，直接展示表单中的字符串：

```txt
1995-08-12
```

如果传了：

```tsx
<DatePickerField
  name="birthday"
  label="生日"
  valueFormat="YYYY-MM-DD"
  displayFormat="YYYY年MM月DD日"
/>
```

则预览态展示：

```txt
1995年08月12日
```

格式化函数：

```ts
function formatDatePreview(
  value: unknown,
  valueFormat: string,
  displayFormat?: string,
  emptyText?: React.ReactNode,
) {
  if (isEmptyValue(value)) return emptyText;

  if (!displayFormat) return String(value);

  const date = dayjs(String(value), valueFormat);

  if (!date.isValid()) return String(value);

  return date.format(displayFormat);
}
```

---

### **10. RangePickerField**

底层组件：

```ts
DatePicker.RangePicker;
```

核心原则：表单中默认保存字符串元组。

适用字段值：

```ts
[string, string] | null[(string, string)] | undefined[(string, string)] | null | undefined;
```

编辑态行为：

```tsx
<DatePicker.RangePicker
  {...rangePickerProps}
  value={
    Array.isArray(field.state.value)
      ? [
          field.state.value[0] ? dayjs(field.state.value[0], valueFormat) : null,
          field.state.value[1] ? dayjs(field.state.value[1], valueFormat) : null,
        ]
      : null
  }
  disabled={config.disabled || rangePickerProps.disabled}
  onChange={(dates, dateStrings) => {
    const nextValue =
      dates && dateStrings[0] && dateStrings[1] ? [dateStrings[0], dateStrings[1]] : emptyValue;

    field.handleChange(nextValue);
    rangePickerProps.onChange?.(dates, dateStrings);
  }}
  onBlur={(event) => {
    field.handleBlur();
    rangePickerProps.onBlur?.(event);
  }}
/>
```

Props 设计：

```ts
export type RangePickerFieldProps<TValues, TName extends FieldPath<TValues>> = BaseFieldProps<
  TValues,
  TName
> &
  Omit<RangePickerProps, "name" | "value" | "defaultValue" | "onChange" | "onBlur"> & {
    valueFormat?: string;
    displayFormat?: string;
    emptyValue?: null | undefined;
    separator?: React.ReactNode;
  };
```

默认：

```ts
separator = " 至 ";
valueFormat = config.dateValueFormat;
emptyValue = null;
```

预览态：

```ts
["2026-04-01", "2026-04-30"];
```

展示为：

```txt
2026-04-01 至 2026-04-30
```

如果传：

```tsx
<RangePickerField name="activeRange" label="有效期" separator=" ~ " />
```

展示为：

```txt
2026-04-01 ~ 2026-04-30
```

格式化函数：

```ts
function formatRangePreview(params: {
  value: unknown
  valueFormat: string
  displayFormat?: string
  separator?: React.ReactNode
  emptyText: React.ReactNode
}) {
  const { value, valueFormat, displayFormat, separator = ' 至 ', emptyText } = params

  if (!Array.isArray(value) || value.length !== 2) return emptyText

  const [start, end] = value

  if (!start || !end) return emptyText

  const formatOne = (input: string) => {
    if (!displayFormat) return input

    const date = dayjs(input, valueFormat)

    if (!date.isValid()) return input

    return date.format(displayFormat)
  }

  return (
    <>
      {formatOne(start)}
      {separator}
      {formatOne(end)}
    </>
  )
}
```

---

## **十二、FormField 逃生口设计**

虽然包只保留 `useAntdForm` 一个入口，但必须提供 `FormField` 作为高级 escape hatch。它不是第二套 API，而是 `useAntdForm` 返回对象中的一个高级组件。

使用示例：

```tsx
const { Form, FormField } = useAntdForm<UserFormValues>({
  defaultValues,
});

return (
  <Form layout="vertical">
    <FormField name="username">
      {(field) => (
        <Input
          value={field.state.value}
          onChange={(event) => field.handleChange(event.target.value)}
          onBlur={field.handleBlur}
        />
      )}
    </FormField>
  </Form>
);
```

Props 设计：

```ts
export type FormFieldProps<TValues, TName extends FieldPath<TValues>> = {
  name: TName;
  validators?: unknown;
  children: (field: unknown) => React.ReactNode;
};
```

实际实现时，`field` 和 `validators` 应替换成 TanStack Form 当前版本的准确类型。

实现：

```tsx
function createBoundFormField<TValues>(
  contextRef: React.MutableRefObject<InternalFormContextValue<TValues> | null>,
) {
  return function BoundFormField<TName extends FieldPath<TValues>>(
    props: FormFieldProps<TValues, TName>,
  ) {
    const ctx = getContextOrThrow(contextRef);
    const form = ctx.form;

    return (
      <form.Field name={props.name} validators={props.validators}>
        {(field) => props.children(field)}
      </form.Field>
    );
  };
}
```

---

## **十三、SubmitButton 设计**

### **1. 使用方式**

```tsx
<SubmitButton>保存</SubmitButton>
```

用户不需要传 `form`。

### **2. 默认行为**

`SubmitButton` 默认绑定当前表单状态：

```ts
type = "primary";
htmlType = "submit";
loading = form.state.isSubmitting;
disabled = !form.state.canSubmit;
```

合并规则：

```txt
最终 loading = props.loading ?? formIsSubmitting
最终 disabled = props.disabled || !formCanSubmit
```

如果表单是 `preview` 模式，默认禁用提交：

```txt
preview 模式下，最终 disabled = true
```

但允许用户关闭自动禁用：

```tsx
<SubmitButton autoDisabled={false}>确认提交</SubmitButton>
```

### **3. Props**

```ts
export type SubmitButtonProps = Omit<ButtonProps, "htmlType"> & {
  htmlType?: ButtonProps["htmlType"];

  /**
   * 是否自动根据 form.state.isSubmitting 设置 loading。
   * 默认 true。
   */
  autoLoading?: boolean;

  /**
   * 是否自动根据 form.state.canSubmit 和 mode 设置 disabled。
   * 默认 true。
   */
  autoDisabled?: boolean;
};
```

### **4. 实现伪代码**

```tsx
function createSubmitButton<TValues>(
  contextRef: React.MutableRefObject<InternalFormContextValue<TValues> | null>,
) {
  return function SubmitButton(props: SubmitButtonProps) {
    const ctx = getContextOrThrow(contextRef);
    const { form, config } = ctx;

    const {
      autoLoading = true,
      autoDisabled = true,
      type = "primary",
      htmlType = "submit",
      loading: userLoading,
      disabled: userDisabled,
      ...restProps
    } = props;

    return (
      <form.Subscribe
        selector={(state) => ({
          canSubmit: state.canSubmit,
          isSubmitting: state.isSubmitting,
        })}
      >
        {(state) => {
          const finalLoading = autoLoading ? (userLoading ?? state.isSubmitting) : userLoading;

          const finalDisabled = autoDisabled
            ? Boolean(userDisabled) || !state.canSubmit || config.mode === "preview"
            : userDisabled;

          return (
            <Button
              {...restProps}
              type={type}
              htmlType={htmlType}
              loading={finalLoading}
              disabled={finalDisabled}
            />
          );
        }}
      </form.Subscribe>
    );
  };
}
```

---

## **十四、ResetButton 设计**

### **1. 使用方式**

```tsx
<ResetButton>重置</ResetButton>
```

### **2. 默认行为**

点击后调用：

```ts
form.reset();
```

`preview` 模式下默认禁用。

### **3. Props**

```ts
export type ResetButtonProps = Omit<ButtonProps, "htmlType" | "onClick"> & {
  autoDisabled?: boolean;

  onClick?: React.MouseEventHandler<HTMLElement>;

  /**
   * 点击前确认。
   * 返回 false 时不执行 reset。
   */
  beforeReset?: () => boolean | Promise<boolean>;
};
```

### **4. 实现伪代码**

```tsx
function createResetButton<TValues>(
  contextRef: React.MutableRefObject<InternalFormContextValue<TValues> | null>,
) {
  return function ResetButton(props: ResetButtonProps) {
    const ctx = getContextOrThrow(contextRef);
    const { form, config } = ctx;

    const { autoDisabled = true, disabled, beforeReset, onClick, children, ...restProps } = props;

    const finalDisabled = autoDisabled ? Boolean(disabled) || config.mode === "preview" : disabled;

    return (
      <Button
        {...restProps}
        disabled={finalDisabled}
        onClick={async (event) => {
          onClick?.(event);

          if (event.defaultPrevented) return;

          if (beforeReset) {
            const shouldReset = await beforeReset();
            if (!shouldReset) return;
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

## **十五、validators 设计**

本包不兼容 Antd `rules`，不提供 `rulesToValidators`。所有校验都应该走 TanStack Form 的 `validators`。

为了提升开发体验，可以提供轻量 helper。它们的返回值必须符合 TanStack Form 字段 validator 的函数形态。

### **1. 使用示例**

```tsx
<TextField
  name="username"
  label="用户名"
  required
  validators={validators.required("请输入用户名")}
/>
```

组合校验：

```tsx
<TextField
  name="username"
  label="用户名"
  required
  validators={validators.compose(
    validators.required("请输入用户名"),
    validators.minLength(3, "用户名至少 3 个字符"),
  )}
/>
```

邮箱：

```tsx
<TextField name="email" label="邮箱" validators={validators.email("邮箱格式不正确")} />
```

### **2. required**

```ts
export function required(message = "必填项") {
  return ({ value }: { value: unknown }) => {
    if (isEmptyValue(value)) return message;
    return undefined;
  };
}
```

### **3. minLength**

```ts
export function minLength(length: number, message?: string) {
  return ({ value }: { value: unknown }) => {
    if (value == null || value === "") return undefined;

    if (String(value).length < length) {
      return message ?? `至少输入 ${length} 个字符`;
    }

    return undefined;
  };
}
```

### **4. maxLength**

```ts
export function maxLength(length: number, message?: string) {
  return ({ value }: { value: unknown }) => {
    if (value == null || value === "") return undefined;

    if (String(value).length > length) {
      return message ?? `最多输入 ${length} 个字符`;
    }

    return undefined;
  };
}
```

### **5. pattern**

```ts
export function pattern(regexp: RegExp, message = "格式不正确") {
  return ({ value }: { value: unknown }) => {
    if (value == null || value === "") return undefined;

    if (!regexp.test(String(value))) return message;

    return undefined;
  };
}
```

### **6. email**

```ts
export function email(message = "邮箱格式不正确") {
  return pattern(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, message);
}
```

### **7. compose**

```ts
export function compose(...validators: Array<(params: any) => unknown>) {
  return (params: any) => {
    for (const validator of validators) {
      const result = validator(params);
      if (result) return result;
    }

    return undefined;
  };
}
```

### **8. validators/index.ts**

```ts
export const validators = {
  required,
  minLength,
  maxLength,
  pattern,
  email,
  compose,
};

export { required, minLength, maxLength, pattern, email, compose };
```

包入口只导出对象即可：

```ts
export { validators } from "./validators";
```

---

## **十六、内部 Context 设计**

虽然 `useAntdForm` 返回的是绑定组件，但内部仍需要一个上下文结构承载当前 form 和全局配置。

### **1. InternalFormContextValue**

```ts
export type InternalFormConfig = {
  mode: FormMode;
  emptyText: React.ReactNode;
  showErrorWhen: ShowErrorWhen;
  dateValueFormat: string;
  size: "small" | "middle" | "large";
  disabled: boolean;
};

export type InternalFormContextValue<TValues> = {
  form: any;
  config: InternalFormConfig;
};
```

实际实现时 `form` 替换成 TanStack Form 的准确类型。

### **2. getContextOrThrow**

```ts
export function getContextOrThrow<TValues>(
  contextRef: React.MutableRefObject<InternalFormContextValue<TValues> | null>,
) {
  const ctx = contextRef.current;

  if (!ctx) {
    throw new Error("useAntdForm internal context is not ready.");
  }

  return ctx;
}
```

### **3. 是否需要 React Context**

如果所有组件都通过闭包中的 `contextRef` 获取当前 form，其实可以不使用 React Context。

但 `Form` 内部如果要支持更复杂的嵌套组件，也可以再提供一个 React Context。第一版建议不额外引入 React Context，减少复杂度。因为所有字段组件都是 `useAntdForm` 返回的绑定组件，它们已经有能力访问 `contextRef`。

---

## **十七、Antd Form 的使用边界**

本包使用 Antd `Form` 和 `Form.Item`，但不使用 Antd Form 的数据管理。

必须遵守以下规则：

`AntdForm` 不接收用户传入的 `form` 实例。

`Form.Item` 不传 `name`。

`Form.Item` 不传 `rules`。

字段值来自 TanStack Form。

字段校验来自 TanStack Form。

提交调用 TanStack Form 的 `form.handleSubmit()`。

这可以避免双状态源问题。

---

## **十八、日期和 dayjs 依赖**

因为 `DatePickerField` 和 `RangePickerField` 需要在字符串和 dayjs 之间转换，所以包需要依赖：

```json
{
  "dependencies": {
    "dayjs": "^1.11.0"
  }
}
```

如果不希望包直接依赖 dayjs，也可以把 dayjs 放进 `peerDependencies`。但考虑到 Antd DatePicker 本身就是 dayjs 体系，第一版直接放 `dependencies` 更简单。

日期默认行为：

```ts
DatePickerField:
  form value: string | null
  default valueFormat: 'YYYY-MM-DD'

RangePickerField:
  form value: [string, string] | null
  default valueFormat: 'YYYY-MM-DD'
```

不处理时区转换。

不自动转 UTC。

不自动转时间戳。

如果用户要时区转换，应在业务层或提交前处理。

---

## **十九、构建配置**

使用 Vite library mode。

### **1. package.json**

```json
{
  "name": "@scope/tanstack-form-antd",
  "version": "0.1.0",
  "type": "module",
  "main": "./dist/index.cjs",
  "module": "./dist/index.js",
  "types": "./dist/index.d.ts",
  "files": ["dist"],
  "sideEffects": ["*.css"],
  "exports": {
    ".": {
      "types": "./dist/index.d.ts",
      "import": "./dist/index.js",
      "require": "./dist/index.cjs"
    }
  },
  "peerDependencies": {
    "react": ">=18",
    "react-dom": ">=18",
    "antd": ">=6",
    "@tanstack/react-form": ">=1"
  },
  "dependencies": {
    "dayjs": "^1.11.0"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "latest",
    "vite": "latest",
    "typescript": "latest",
    "vite-plugin-dts": "latest",
    "vitest": "latest",
    "@testing-library/react": "latest",
    "@testing-library/user-event": "latest",
    "jsdom": "latest"
  }
}
```

### **2. vite.config.ts**

```ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import { resolve } from "node:path";

export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
    }),
  ],

  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "TanstackFormAntd",
      formats: ["es", "cjs"],
      fileName: (format) => {
        return format === "es" ? "index.js" : "index.cjs";
      },
    },

    rollupOptions: {
      external: ["react", "react-dom", "antd", "@tanstack/react-form", "dayjs"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          antd: "antd",
          dayjs: "dayjs",
        },
      },
    },

    sourcemap: true,
  },
});
```

---

## **二十、测试要求**

### **1. 单元测试**

需要测试以下工具函数：

```txt
isEmptyValue
getFieldError
getValidateStatus
flattenOptions
formatSelectPreview
formatDatePreview
formatRangePreview
validators.required
validators.minLength
validators.maxLength
validators.pattern
validators.email
validators.compose
```

### **2. 组件测试**

使用 React Testing Library。

必须覆盖：

```txt
TextField 输入后，TanStack Form value 更新
TextField blur 后触发 touched
TextField 校验错误显示到 Form.Item help
SelectField 选择后，value 更新
SelectField preview 模式显示 label，不显示 value
SwitchField 修改后，boolean value 更新
SwitchField preview 模式显示 checkedText / uncheckedText
DatePickerField 写入字符串日期
DatePickerField 清空后写入 null
RangePickerField 写入 [string, string]
RangePickerField preview 模式显示 start + separator + end
SubmitButton 提交中显示 loading
SubmitButton 表单不可提交时 disabled
SubmitButton preview 模式默认 disabled
ResetButton 点击后调用 form.reset
```

### **3. 类型测试**

建议使用 `tsd` 或 `expect-type`。

必须覆盖：

```ts
type UserFormValues = {
  username: string
  role: string
  birthday: string | null
  active: boolean
  range: [string, string] | null
}

const {
  TextField,
  DatePickerField,
  RangePickerField,
  SwitchField,
} = useAntdForm<UserFormValues>({
  defaultValues: {
    username: '',
    role: '',
    birthday: null,
    active: true,
    range: null,
  },
})

// 应合法
;<TextField name="username" />
;<DatePickerField name="birthday" />
;<RangePickerField name="range" />
;<SwitchField name="active" />

// 应报错
;<TextField name="notExists" />
```

如果第一版没有实现按字段值类型过滤，则下面这些暂不强制：

```tsx
<DatePickerField name="active" />
<SwitchField name="birthday" />
```

但 `name="notExists"` 必须报错。

---

## **二十一、实现顺序建议**

建议 Coding Agent 按以下顺序实现，减少返工。

第一步，实现类型基础：

```txt
types/form.ts
types/path.ts
types/field.ts
types/preview.ts
```

第二步，实现工具函数：

```txt
isEmptyValue
getFieldError
getValidateStatus
flattenOptions
formatPreviewValue
warning
```

第三步，实现 `useAntdForm` 和 `createBoundComponents` 框架。

第四步，实现 `Form`、`FormItem`、`PreviewValue`。

第五步，实现基础字段：

```txt
TextField
TextAreaField
PasswordField
NumberField
```

第六步，实现选择和布尔字段：

```txt
SelectField
RadioGroupField
CheckboxField
SwitchField
```

第七步，实现日期字段：

```txt
DatePickerField
RangePickerField
```

第八步，实现按钮：

```txt
SubmitButton
ResetButton
```

第九步，实现 validators。

第十步，补测试和 examples。

---

## **二十二、MVP 验收标准**

MVP 完成后，下面这段代码必须可以正常运行，并且具备类型提示。

```tsx
import { useAntdForm, validators } from "@scope/tanstack-form-antd";

type UserFormValues = {
  username: string;
  role: string;
  birthday: string | null;
  active: boolean;
  range: [string, string] | null;
};

export function UserEditor() {
  const {
    Form,
    TextField,
    SelectField,
    DatePickerField,
    RangePickerField,
    SwitchField,
    SubmitButton,
    ResetButton,
  } = useAntdForm<UserFormValues>({
    defaultValues: {
      username: "",
      role: "",
      birthday: null,
      active: true,
      range: null,
    },

    onSubmit: async ({ value }) => {
      console.log(value);
    },
  });

  return (
    <Form layout="vertical">
      <TextField
        name="username"
        label="用户名"
        required
        validators={validators.required("请输入用户名")}
      />

      <SelectField
        name="role"
        label="角色"
        required
        options={[
          { label: "管理员", value: "admin" },
          { label: "普通用户", value: "user" },
        ]}
        validators={validators.required("请选择角色")}
      />

      <DatePickerField name="birthday" label="生日" />

      <RangePickerField name="range" label="有效期" />

      <SwitchField name="active" label="是否启用" checkedText="启用" uncheckedText="停用" />

      <SubmitButton>保存</SubmitButton>
      <ResetButton>重置</ResetButton>
    </Form>
  );
}
```

预览态代码也必须可以运行：

```tsx
export function UserPreview() {
  const { Form, TextField, SelectField, DatePickerField, RangePickerField, SwitchField } =
    useAntdForm<UserFormValues>({
      mode: "preview",
      emptyText: "-",

      defaultValues: {
        username: "张三",
        role: "admin",
        birthday: "1995-08-12",
        active: true,
        range: ["2026-04-01", "2026-04-30"],
      },
    });

  return (
    <Form layout="vertical">
      <TextField name="username" label="用户名" />

      <SelectField
        name="role"
        label="角色"
        options={[
          { label: "管理员", value: "admin" },
          { label: "普通用户", value: "user" },
        ]}
      />

      <DatePickerField name="birthday" label="生日" />

      <RangePickerField name="range" label="有效期" separator=" ~ " />

      <SwitchField name="active" label="是否启用" checkedText="启用" uncheckedText="停用" />
    </Form>
  );
}
```

预览态应展示：

```txt
用户名：张三
角色：管理员
生日：1995-08-12
有效期：2026-04-01 ~ 2026-04-30
是否启用：启用
```

---

## **二十三、明确不做的内容**

第一版不做以下能力：

```txt
不兼容 Antd rules
不导出独立字段组件作为主 API
不提供 createAntdForm
不实现 Antd Form 的 form 实例绑定
不让 Antd Form 管理字段值
不做 UploadField
不做 CascaderField
不做 TreeSelectField
不做 ArrayField / Form.List
不做复杂 schema 校验库绑定
不做时区转换
不做 UTC 转换
不做自动时间戳转换
不做 readonly 控件态
```

其中 `readonly` 控件态不是 `preview`。第一版只实现：

```ts
mode: "edit" | "preview";
```

后续如果确实需要保持控件外观但不可编辑，再单独增加：

```ts
mode: "readonly";
```

---

## **二十四、Agent 实现注意事项**

实现时最容易出错的点有几个。

第一，`useAntdForm` 返回的组件必须稳定，不能每次 render 重新创建。

第二，Antd `Form.Item` 不要传 `name`，否则 Antd 会试图接管字段状态。

第三，字段组件不要支持 `rules`。如果 Props 继承了 Antd 组件或 Form.Item 类型，需要用 `Omit` 排除 `rules`。

第四，`required` 只负责 UI 必填标识，不自动生成校验。真正必填校验必须使用：

```tsx
validators={validators.required('请输入 xxx')}
```

第五，日期字段的表单值默认是字符串，不是 dayjs。

第六，预览态不展示校验错误，也不渲染输入控件。

第七，选择类字段预览态必须优先展示 label，而不是原始 value。

第八，`SubmitButton` 在 `preview` 模式下默认禁用，但允许通过 `autoDisabled={false}` 覆盖。

第九，所有用户传入的 Antd 原始事件回调都应该在内部状态更新后继续调用，避免吞掉用户逻辑。

例如：

```tsx
onChange={event => {
  field.handleChange(event.target.value)
  props.onChange?.(event)
}}
```

第十，如果 TanStack Form 当前版本的类型名和文档中不同，应在 `types/` 层做适配，不要把不稳定类型散落到字段组件里。

---
