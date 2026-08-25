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
import type { BookFormBook } from "../types/book";
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
  const dialogId = useId("book-form-");
  const isEdit = !!book;

  return (
    <Dialog open={open} onOpenChange={(_, data) => onOpenChange(data.open)}>
      <DialogSurface aria-labelledby={`${dialogId}-title`}>
        <DialogBody>
          <DialogTitle id={`${dialogId}-title`}>{isEdit ? "编辑图书" : "新增图书"}</DialogTitle>
          <DialogContent>
            {open && (
              <BookForm
                key={book?.id ?? "create"}
                book={book}
                onSuccess={onSuccess}
                footer={
                  <DialogTrigger disableButtonEnhancement>
                    <Button appearance="secondary">{"取消"}</Button>
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
