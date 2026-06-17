import { createFormHook } from "@tanstack/react-form";
import { useFieldContext, useFormContext, fieldContext, formContext } from "./form-context";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectItem } from "@/components/ui/select";
import { DatePicker } from "@/components/ui/date-picker";

function FormInput({
  label,
  id,
  type,
  autoComplete,
  placeholder,
}: {
  label: string;
  id?: string;
  type?:
    | "date"
    | "datetime-local"
    | "email"
    | "month"
    | "number"
    | "password"
    | "search"
    | "tel"
    | "text"
    | "time"
    | "url"
    | "week"
    | undefined;
  autoComplete?: string;
  placeholder?: string;
}) {
  const field = useFieldContext<string>();
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
      <Label htmlFor={id ?? field.name}>{label}</Label>
      <Input
        id={id ?? field.name}
        type={type}
        autoComplete={autoComplete}
        placeholder={placeholder}
        value={field.state.value}
        onBlur={field.handleBlur}
        onChange={(e) => field.handleChange(e.target.value)}
      />
      {field.state.meta.isTouched && field.state.meta.errors.length > 0 && (
        <p style={{ fontSize: "0.875rem", color: "var(--colorPaletteRedForeground3)" }}>
          {String(
            field.state.meta.errors
              .map((e) => (typeof e === "string" ? e : JSON.stringify(e)))
              .join(", "),
          )}
        </p>
      )}
    </div>
  );
}

function FormSelect({
  label,
  id,
  options,
}: {
  label: string;
  id?: string;
  options: { value: string; label: string }[];
}) {
  const field = useFieldContext<string>();
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
      <Label htmlFor={id ?? field.name}>{label}</Label>
      <Select value={field.state.value} onValueChange={(value) => field.handleChange(value)}>
        {options.map((opt) => (
          <SelectItem key={opt.value} value={opt.value}>
            {opt.label}
          </SelectItem>
        ))}
      </Select>
      {field.state.meta.isTouched && field.state.meta.errors.length > 0 && (
        <p style={{ fontSize: "0.875rem", color: "var(--colorPaletteRedForeground3)" }}>
          {String(
            field.state.meta.errors
              .map((e) => (typeof e === "string" ? e : JSON.stringify(e)))
              .join(", "),
          )}
        </p>
      )}
    </div>
  );
}

function FormDatePicker({ label, id }: { label: string; id?: string }) {
  const field = useFieldContext<string>();
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
      <Label htmlFor={id ?? field.name}>{label}</Label>
      <DatePicker
        id={id ?? field.name}
        value={field.state.value}
        onChange={(value: string) => field.handleChange(value)}
      />
      {field.state.meta.isTouched && field.state.meta.errors.length > 0 && (
        <p style={{ fontSize: "0.875rem", color: "var(--colorPaletteRedForeground3)" }}>
          {String(
            field.state.meta.errors
              .map((e) => (typeof e === "string" ? e : JSON.stringify(e)))
              .join(", "),
          )}
        </p>
      )}
    </div>
  );
}

function FormNumberInput({
  label,
  id,
  min,
  step,
}: {
  label: string;
  id?: string;
  min?: number;
  step?: number;
}) {
  const field = useFieldContext<number>();
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
      <Label htmlFor={id ?? field.name}>{label}</Label>
      <Input
        id={id ?? field.name}
        type="number"
        min={min}
        step={step}
        value={String(field.state.value)}
        onBlur={field.handleBlur}
        onChange={(e) => field.handleChange(Number(e.target.value))}
      />
      {field.state.meta.isTouched && field.state.meta.errors.length > 0 && (
        <p style={{ fontSize: "0.875rem", color: "var(--colorPaletteRedForeground3)" }}>
          {String(
            field.state.meta.errors
              .map((e) => (typeof e === "string" ? e : JSON.stringify(e)))
              .join(", "),
          )}
        </p>
      )}
    </div>
  );
}

export const { useAppForm, withForm } = createFormHook({
  fieldComponents: {
    FormInput,
    FormSelect,
    FormDatePicker,
    FormNumberInput,
  },
  formComponents: {},
  fieldContext,
  formContext,
});

export { useFieldContext, useFormContext };
