import { useTranslation } from "react-i18next";
import {
  Button,
  Dialog,
  DialogBody,
  DialogContent,
  DialogSurface,
  DialogTitle,
  DialogTrigger,
  useId,
} from "@fluentui/react-components";
import type { BookFormBook } from "./book-types";
import { BookForm } from "./BookForm";

// ── Props ───────────────────────────────────────────────────────────

type BookFormDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  book?: BookFormBook;
  onSuccess: () => void;
};

// ── Component ───────────────────────────────────────────────────────

export function BookFormDialog({ open, onOpenChange, book, onSuccess }: BookFormDialogProps) {
  const { t } = useTranslation();
  const dialogId = useId("book-form-");
  const isEdit = !!book;

  return (
    <Dialog open={open} onOpenChange={(_, data) => onOpenChange(data.open)}>
      <DialogSurface aria-labelledby={`${dialogId}-title`}>
        <DialogBody>
          <DialogTitle id={`${dialogId}-title`}>
            {isEdit ? t("BookStore:EditBook") : t("BookStore:NewBook")}
          </DialogTitle>
          <DialogContent>
            {open && (
              <BookForm
                key={book?.id ?? "create"}
                book={book}
                onSuccess={onSuccess}
                footer={
                  <DialogTrigger disableButtonEnhancement>
                    <Button appearance="secondary">{t("AbpUi::Cancel")}</Button>
                  </DialogTrigger>
                }
              />
            )}
          </DialogContent>
        </DialogBody>
      </DialogSurface>
    </Dialog>
  );
}
