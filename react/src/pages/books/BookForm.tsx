import type { ReactNode } from "react";
import { useTranslation } from "react-i18next";
import { makeStyles, tokens } from "@fluentui/react-components";
import { useAppForm } from "@/components/form";
import { useBookCreate } from "@/api/hooks/book/useBookCreate";
import { useBookUpdate } from "@/api/hooks/book/useBookUpdate";
import type { BookFormBook } from "./book-types";
import { bookSchema } from "./book-schemas";
import { bookTypeOptions } from "./bookTypeOptions";

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
  const { t } = useTranslation();
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
          children={(field) => <field.TextField label={t("BookStore:Name")} required />}
        />
        <form.AppField
          name="type"
          children={(field) => (
            <field.SelectField label={t("BookStore:Type")} required>
              <option value="" disabled>
                {t("BookStore:SelectType")}
              </option>
              {bookTypeOptions.map((o) => (
                <option key={o.value} value={String(o.value)}>
                  {t(o.key)}
                </option>
              ))}
            </field.SelectField>
          )}
        />
        <form.AppField
          name="publishDate"
          children={(field) => (
            <field.DatePickerField label={t("BookStore:PublishDate")} required />
          )}
        />
        <form.AppField
          name="price"
          children={(field) => (
            <field.NumberField label={t("BookStore:Price")} required min={0} step={0.01} />
          )}
        />
        <div className={styles.actions}>
          <form.SubmitButton label={isEdit ? t("AbpUi::Save") : t("AbpUi::Create")} />
          {footer}
        </div>
      </form>
    </form.AppForm>
  );
}
