import type { ReactNode } from "react";

import { makeStyles, tokens } from "@fluentui/react-components";
import { useAppForm } from "@/components/form";
import { useBookCreate } from "@/api/hooks/book/useBookCreate";
import { useBookUpdate } from "@/api/hooks/book/useBookUpdate";
import type { BookFormBook } from "./types/book";
import { bookSchema } from "./book-schemas";
import { bookTypeOptions } from "./constants/bookType";

// ── Props ───────────────────────────────────────────────────────────

interface BookFormProps {
  book?: BookFormBook;
  onSuccess: () => void;
  footer?: ReactNode;
}

// ── Styles ──────────────────────────────────────────────────────────

const useStyles = makeStyles({
  form: {
    display: "flex",
    flexDirection: "column",
    gap: tokens.spacingVerticalM,
  },
  actions: {
    display: "flex",
    justifyContent: "flex-end",
    gap: tokens.spacingHorizontalS,
  },
});

// ── Component ───────────────────────────────────────────────────────

export function BookForm({ book, onSuccess, footer }: BookFormProps) {
  const styles = useStyles();
  const isEdit = !!book;

  const createMutation = useBookCreate();
  const updateMutation = useBookUpdate();

  const form = useAppForm({
    defaultValues: {
      name: book?.name ?? "",
      type: String(book?.type ?? ""),
      publishDate: book?.publishDate ? new Date(book.publishDate) : null,
      price: book?.price ?? 0,
    },
    validators: {
      onChange: ({ value }) => {
        const result = bookSchema.safeParse(value);
        if (result.error) return result.error.flatten().fieldErrors as Record<string, string[]>;
      },
    },
    onSubmit: ({ value }) => {
      const payload = {
        name: value.name,
        type: Number(value.type),
        publishDate: value.publishDate!.toISOString(),
        price: value.price,
      };

      if (isEdit && book?.id) {
        updateMutation.mutate({ path: { id: book.id }, body: payload }, { onSuccess });
      } else {
        createMutation.mutate({ body: payload }, { onSuccess });
      }
    },
  });

  return (
    <form.AppForm>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          void form.handleSubmit();
        }}
        className={styles.form}
      >
        <form.AppField
          name="name"
          children={(field) => <field.TextField label={"书名"} required />}
        />
        <form.AppField
          name="type"
          children={(field) => (
            <field.SelectField label={"类型"} required>
              <option value="" disabled>
                {"请选择类型"}
              </option>
              {bookTypeOptions.map((o) => (
                <option key={o.value} value={String(o.value)}>
                  {o.label}
                </option>
              ))}
            </field.SelectField>
          )}
        />
        <form.AppField
          name="publishDate"
          children={(field) => <field.DatePickerField label={"出版日期"} required />}
        />
        <form.AppField
          name="price"
          children={(field) => <field.NumberField label={"价格"} required min={0} step={0.01} />}
        />
        <div className={styles.actions}>
          <form.SubmitButton label={isEdit ? "保存" : "创建"} />
          {footer}
        </div>
      </form>
    </form.AppForm>
  );
}
