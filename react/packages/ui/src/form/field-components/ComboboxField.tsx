import { Field, FieldError, FieldLabel } from "#components/field";
import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "#components/combobox";
import { useFieldContext } from "../form-context";
import { getErrorMessage } from "./field-error";

export interface ComboboxOption {
  value: string;
  label: string;
}

export interface ComboboxFieldProps {
  label?: string;
  required?: boolean;
  /** The list of options to display */
  options: ComboboxOption[];
  /** Placeholder text */
  placeholder?: string;
  /** Whether the field holds `string[]` instead of `string` */
  multiple?: boolean;
  /** Text shown when the filter matches nothing */
  emptyMessage?: string;
}

/**
 * A combobox (filterable dropdown) field bound to a TanStack Form field.
 *
 * The form value stays a plain `string` (or `string[]` when `multiple`); the
 * option objects are mapped at this boundary so callers never deal with them.
 */
export function ComboboxField({
  label,
  required,
  options,
  placeholder,
  multiple = false,
  emptyMessage = "无匹配项",
}: ComboboxFieldProps) {
  const field = useFieldContext<string | string[] | null>();
  const errorMsg = getErrorMessage(field.state.meta);

  const raw = field.state.value;
  const selectedValues = multiple ? (Array.isArray(raw) ? raw : []) : [];
  const selectedSingle = multiple ? null : (options.find((o) => o.value === raw) ?? null);

  return (
    <Field data-invalid={errorMsg ? true : undefined}>
      {label !== undefined && (
        <FieldLabel htmlFor={field.name}>
          {label}
          {required && <span className="text-destructive">*</span>}
        </FieldLabel>
      )}

      {multiple ? (
        <Combobox
          multiple
          items={options}
          value={options.filter((o) => selectedValues.includes(o.value))}
          onValueChange={(next: ComboboxOption[]) => field.handleChange(next.map((o) => o.value))}
          itemToStringLabel={(option: ComboboxOption) => option.label}
          isItemEqualToValue={(a: ComboboxOption, b: ComboboxOption) => a.value === b.value}
        >
          <ComboboxInput
            id={field.name}
            placeholder={placeholder}
            showClear
            aria-invalid={errorMsg ? true : undefined}
          />
          <ComboboxContent>
            <ComboboxEmpty>{emptyMessage}</ComboboxEmpty>
            <ComboboxList>
              {(item: ComboboxOption) => (
                <ComboboxItem key={item.value} value={item}>
                  {item.label}
                </ComboboxItem>
              )}
            </ComboboxList>
          </ComboboxContent>
        </Combobox>
      ) : (
        <Combobox
          items={options}
          value={selectedSingle}
          onValueChange={(next: ComboboxOption | null) => field.handleChange(next?.value ?? "")}
          itemToStringLabel={(option: ComboboxOption) => option.label}
          isItemEqualToValue={(a: ComboboxOption, b: ComboboxOption) => a.value === b.value}
        >
          <ComboboxInput
            id={field.name}
            placeholder={placeholder}
            showClear
            aria-invalid={errorMsg ? true : undefined}
          />
          <ComboboxContent>
            <ComboboxEmpty>{emptyMessage}</ComboboxEmpty>
            <ComboboxList>
              {(item: ComboboxOption) => (
                <ComboboxItem key={item.value} value={item}>
                  {item.label}
                </ComboboxItem>
              )}
            </ComboboxList>
          </ComboboxContent>
        </Combobox>
      )}

      <FieldError errors={errorMsg ? [{ message: errorMsg }] : undefined} />
    </Field>
  );
}
