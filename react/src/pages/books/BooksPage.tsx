import { useTranslation } from "react-i18next";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { ChevronDown20Regular } from "@fluentui/react-icons";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DatePicker } from "@/components/ui/date-picker";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Select, SelectItem } from "@/components/ui/select";
import {
  getBooks,
  createBook,
  updateBook,
  deleteBook,
  bookTypeOptions,
  type BookDto,
  type CreateUpdateBookDto,
} from "@/lib/api/books";
import { useState } from "react";
import { usePermissions } from "@/lib/auth/permissions";
import { useToastController, Toaster, useId } from "@fluentui/react-components";
import { useAppForm } from "@/components/form/app-form";
import { z } from "zod";
import { ConfirmDialog } from "@/components/ui/confirm-dialog";

const bookSchema = z.object({
  name: z.string().min(1, "Required"),
  type: z.number().min(0),
  publishDate: z.string().min(1, "Required"),
  price: z.number().min(0),
});

export function BooksPage() {
  const { t } = useTranslation();
  const queryClient = useQueryClient();
  const { isGranted } = usePermissions();
  const canEdit = isGranted("AcroStack.Books.Edit");
  const canDelete = isGranted("AcroStack.Books.Delete");
  const [editingBook, setEditingBook] = useState<BookDto | null>(null);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [skipCount, setSkipCount] = useState(0);
  const [confirmBookId, setConfirmBookId] = useState<string | null>(null);
  const pageSize = 10;
  const toasterId = useId("toaster");
  const { dispatchToast } = useToastController(toasterId);

  const showToast = (message: string, intent: "success" | "error") => {
    dispatchToast(<>{message}</>, { intent });
  };

  const { data, isLoading } = useQuery({
    queryKey: ["books", skipCount],
    queryFn: () =>
      getBooks({
        maxResultCount: pageSize,
        skipCount,
        sorting: "creationTime desc",
      }),
  });

  const createMutation = useMutation({
    mutationFn: createBook,
    onSuccess: () => {
      void queryClient.invalidateQueries({ queryKey: ["books"] });
      setIsFormOpen(false);
      showToast(t("AbpUi::SavedSuccessfully"), "success");
    },
    onError: () => showToast(t("AbpUi::Error"), "error"),
  });

  const updateMutation = useMutation({
    mutationFn: ({ id, input }: { id: string; input: CreateUpdateBookDto }) =>
      updateBook(id, input),
    onSuccess: () => {
      void queryClient.invalidateQueries({ queryKey: ["books"] });
      setIsFormOpen(false);
      setEditingBook(null);
      showToast(t("AbpUi::SavedSuccessfully"), "success");
    },
    onError: () => showToast(t("AbpUi::Error"), "error"),
  });

  const deleteMutation = useMutation({
    mutationFn: deleteBook,
    onSuccess: () => {
      void queryClient.invalidateQueries({ queryKey: ["books"] });
      showToast(t("AbpUi::DeletedSuccessfully"), "success");
    },
    onError: () => showToast(t("AbpUi::Error"), "error"),
  });

  const form = useAppForm({
    defaultValues: {
      name: "",
      type: 0,
      publishDate: "",
      price: 0,
    },
    validators: {
      onChange: bookSchema,
    },
    onSubmit: ({ value }) => {
      const input: CreateUpdateBookDto = {
        name: value.name,
        type: value.type as CreateUpdateBookDto["type"],
        publishDate: value.publishDate,
        price: value.price,
      };
      if (editingBook) {
        updateMutation.mutate({ id: editingBook.id, input });
      } else {
        createMutation.mutate(input);
      }
    },
  });

  const openCreate = () => {
    setEditingBook(null);
    form.reset();
    setIsFormOpen(true);
  };

  const openEdit = async (book: BookDto) => {
    setEditingBook(book);
    form.reset({
      name: book.name ?? "",
      type: book.type ?? 0,
      publishDate: book.publishDate?.slice(0, 10) ?? "",
      price: book.price ?? 0,
    });
    setIsFormOpen(true);
  };

  const handleDelete = (id: string) => {
    setConfirmBookId(id);
  };

  const totalCount = data?.totalCount ?? 0;
  const totalPages = Math.ceil(totalCount / pageSize);
  const currentPage = Math.floor(skipCount / pageSize) + 1;

  return (
    <>
      <Toaster toasterId={toasterId} />
      <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div>
            <h1 style={{ fontSize: "1.875rem", fontWeight: 700 }}>{t("Menu:Books")}</h1>
          </div>
          <Button onClick={openCreate}>New Book</Button>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>{t("Menu:Books")}</CardTitle>
          </CardHeader>
          <CardContent>
            {isLoading ? (
              <p style={{ color: "var(--colorNeutralForeground3)" }}>
                {t("AbpAccount::PleaseWait")}
              </p>
            ) : (
              <>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead style={{ width: "6.25rem" }}>
                        {t("AbpIdentity::Actions")}
                      </TableHead>
                      <TableHead>Name</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Publish Date</TableHead>
                      <TableHead>Price</TableHead>
                      <TableHead>{t("AbpIdentity::CreationTime")}</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {(data?.items ?? []).map((book) => (
                      <TableRow key={book.id}>
                        <TableCell>
                          <DropdownMenu>
                            <DropdownMenuTrigger>
                              <Button
                                variant="outline"
                                size="small"
                                icon={<ChevronDown20Regular />}
                              >
                                {t("AbpUi::Actions")}
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                              {canEdit && (
                                <DropdownMenuItem onClick={() => openEdit(book)}>
                                  {t("AbpUi::Edit")}
                                </DropdownMenuItem>
                              )}
                              {canDelete && (
                                <DropdownMenuItem
                                  style={{ color: "var(--colorPaletteRedForeground3)" }}
                                  onClick={() => handleDelete(book.id)}
                                >
                                  {t("AbpUi::Delete")}
                                </DropdownMenuItem>
                              )}
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                        <TableCell>{book.name}</TableCell>
                        <TableCell>
                          {t(bookTypeOptions.find((o) => o.value === book.type)?.key ?? "")}
                        </TableCell>
                        <TableCell>{book.publishDate?.slice(0, 10)}</TableCell>
                        <TableCell>{book.price}</TableCell>
                        <TableCell>{book.creationTime?.slice(0, 10)}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
                {totalPages > 1 && (
                  <div
                    style={{
                      marginTop: "1rem",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <Button
                      variant="outline"
                      size="small"
                      disabled={skipCount === 0}
                      onClick={() => setSkipCount((s) => Math.max(0, s - pageSize))}
                    >
                      Previous
                    </Button>
                    <span style={{ fontSize: "0.875rem", color: "var(--colorNeutralForeground3)" }}>
                      Page {currentPage} of {totalPages}
                    </span>
                    <Button
                      variant="outline"
                      size="small"
                      disabled={skipCount + pageSize >= totalCount}
                      onClick={() => setSkipCount((s) => s + pageSize)}
                    >
                      Next
                    </Button>
                  </div>
                )}
              </>
            )}
          </CardContent>
        </Card>

        <ConfirmDialog
          open={confirmBookId !== null}
          onOpenChange={(open) => !open && setConfirmBookId(null)}
          title={t("::AreYouSureToDelete")}
          variant="destructive"
          confirmLabel={t("AbpUi::Delete")}
          cancelLabel={t("AbpUi::Cancel")}
          onConfirm={() => {
            if (confirmBookId) deleteMutation.mutate(confirmBookId);
            setConfirmBookId(null);
          }}
          isPending={deleteMutation.isPending}
        />

        <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
          <DialogContent>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                e.stopPropagation();
                void form.handleSubmit();
              }}
            >
              <DialogHeader>
                <DialogTitle>{editingBook ? t("AbpIdentity::Edit") : t("::NewBook")}</DialogTitle>
              </DialogHeader>
              <div style={{ display: "grid", gap: "1rem", padding: "1rem 0" }}>
                <form.AppField
                  name="name"
                  children={(field) => (
                    <div style={{ display: "grid", gap: "0.5rem" }}>
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        placeholder="Book name"
                        value={field.state.value}
                        onBlur={field.handleBlur}
                        onChange={(e) => field.handleChange(e.target.value)}
                      />
                      {field.state.meta.isTouched && field.state.meta.errors.length > 0 && (
                        <p
                          style={{
                            fontSize: "0.875rem",
                            color: "var(--colorPaletteRedForeground3)",
                          }}
                        >
                          {String(
                            field.state.meta.errors
                              .map((e) => (typeof e === "string" ? e : JSON.stringify(e)))
                              .join(", "),
                          )}
                        </p>
                      )}
                    </div>
                  )}
                />
                <form.AppField
                  name="type"
                  children={(field) => (
                    <div style={{ display: "grid", gap: "0.5rem" }}>
                      <Label htmlFor="type">Type</Label>
                      <Select
                        value={String(field.state.value ?? 0)}
                        onValueChange={(value) => field.handleChange(Number(value))}
                      >
                        {bookTypeOptions.map((opt) => (
                          <SelectItem key={opt.value} value={String(opt.value)}>
                            {t(opt.key)}
                          </SelectItem>
                        ))}
                      </Select>
                    </div>
                  )}
                />
                <form.AppField
                  name="publishDate"
                  children={(field) => (
                    <div style={{ display: "grid", gap: "0.5rem" }}>
                      <Label htmlFor="publishDate">Publish Date</Label>
                      <DatePicker
                        id="publishDate"
                        value={field.state.value}
                        onChange={(value: string) => field.handleChange(value)}
                      />
                      {field.state.meta.isTouched && field.state.meta.errors.length > 0 && (
                        <p
                          style={{
                            fontSize: "0.875rem",
                            color: "var(--colorPaletteRedForeground3)",
                          }}
                        >
                          {String(
                            field.state.meta.errors
                              .map((e) => (typeof e === "string" ? e : JSON.stringify(e)))
                              .join(", "),
                          )}
                        </p>
                      )}
                    </div>
                  )}
                />
                <form.AppField
                  name="price"
                  children={(field) => (
                    <div style={{ display: "grid", gap: "0.5rem" }}>
                      <Label htmlFor="price">Price</Label>
                      <Input
                        id="price"
                        type="number"
                        min={0}
                        step={0.01}
                        value={String(field.state.value)}
                        onBlur={field.handleBlur}
                        onChange={(e) => field.handleChange(Number(e.target.value))}
                      />
                      {field.state.meta.isTouched && field.state.meta.errors.length > 0 && (
                        <p
                          style={{
                            fontSize: "0.875rem",
                            color: "var(--colorPaletteRedForeground3)",
                          }}
                        >
                          {String(
                            field.state.meta.errors
                              .map((e) => (typeof e === "string" ? e : JSON.stringify(e)))
                              .join(", "),
                          )}
                        </p>
                      )}
                    </div>
                  )}
                />
              </div>
              <DialogFooter>
                <Button type="button" variant="outline" onClick={() => setIsFormOpen(false)}>
                  {t("AbpUi::Cancel")}
                </Button>
                <form.Subscribe
                  selector={(state) => [state.canSubmit, state.isSubmitting]}
                  children={([canSubmit, isSubmitting]) => (
                    <Button
                      type="submit"
                      disabled={
                        !canSubmit ||
                        isSubmitting ||
                        createMutation.isPending ||
                        updateMutation.isPending
                      }
                    >
                      {isSubmitting || createMutation.isPending || updateMutation.isPending
                        ? t("AbpAccount::PleaseWait")
                        : t("AbpAccount::Save")}
                    </Button>
                  )}
                />
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
}
