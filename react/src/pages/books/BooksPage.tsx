import { useTranslation } from "react-i18next";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { ChevronDown } from "lucide-react";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
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
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ConfirmDialog } from "@/components/ui/confirm-dialog";

const bookSchema = z.object({
  name: z.string().min(1, "Required"),
  type: z.number().min(0),
  publishDate: z.string().min(1, "Required"),
  price: z.number().min(0),
});

type BookFormData = z.infer<typeof bookSchema>;

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
      toast.success(t("AbpUi::SavedSuccessfully"));
    },
    onError: () => toast.error(t("AbpUi::Error")),
  });

  const updateMutation = useMutation({
    mutationFn: ({ id, input }: { id: string; input: CreateUpdateBookDto }) =>
      updateBook(id, input),
    onSuccess: () => {
      void queryClient.invalidateQueries({ queryKey: ["books"] });
      setIsFormOpen(false);
      setEditingBook(null);
      toast.success(t("AbpUi::SavedSuccessfully"));
    },
    onError: () => toast.error(t("AbpUi::Error")),
  });

  const deleteMutation = useMutation({
    mutationFn: deleteBook,
    onSuccess: () => {
      void queryClient.invalidateQueries({ queryKey: ["books"] });
      toast.success(t("AbpUi::DeletedSuccessfully"));
    },
    onError: () => toast.error(t("AbpUi::Error")),
  });

  const form = useForm<BookFormData>({
    resolver: zodResolver(bookSchema),
    defaultValues: {
      name: "",
      type: 0,
      publishDate: "",
      price: 0,
    },
  });

  const openCreate = () => {
    setEditingBook(null);
    form.reset({ name: "", type: 0, publishDate: "", price: 0 });
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

  const onSubmit = (values: BookFormData) => {
    const input: CreateUpdateBookDto = {
      name: values.name,
      type: values.type as CreateUpdateBookDto["type"],
      publishDate: values.publishDate,
      price: values.price,
    };
    if (editingBook) {
      updateMutation.mutate({ id: editingBook.id, input });
    } else {
      createMutation.mutate(input);
    }
  };

  const handleDelete = (id: string) => {
    setConfirmBookId(id);
  };

  const totalCount = data?.totalCount ?? 0;
  const totalPages = Math.ceil(totalCount / pageSize);
  const currentPage = Math.floor(skipCount / pageSize) + 1;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">{t("Menu:Books")}</h1>
        </div>
        <Button onClick={openCreate}>New Book</Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>{t("Menu:Books")}</CardTitle>
        </CardHeader>
        <CardContent>
          {isLoading ? (
            <p className="text-muted-foreground">{t("AbpAccount::PleaseWait")}</p>
          ) : (
            <>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[100px]">{t("AbpIdentity::Actions")}</TableHead>
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
                          <DropdownMenuTrigger asChild>
                            <Button variant="outline" size="sm">
                              {t("AbpUi::Actions")} <ChevronDown className="ml-1 h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            {canEdit && (
                              <DropdownMenuItem onClick={() => openEdit(book)}>
                                {t("AbpUi::Edit")}
                              </DropdownMenuItem>
                            )}
                            {canDelete && (
                              <DropdownMenuItem
                                className="text-destructive"
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
                <div className="mt-4 flex items-center justify-between">
                  <Button
                    variant="outline"
                    size="sm"
                    disabled={skipCount === 0}
                    onClick={() => setSkipCount((s) => Math.max(0, s - pageSize))}
                  >
                    Previous
                  </Button>
                  <span className="text-sm text-muted-foreground">
                    Page {currentPage} of {totalPages}
                  </span>
                  <Button
                    variant="outline"
                    size="sm"
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
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <DialogHeader>
              <DialogTitle>{editingBook ? t("AbpIdentity::Edit") : t("::NewBook")}</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" {...form.register("name")} placeholder="Book name" />
                {form.formState.errors.name && (
                  <p className="text-sm text-destructive">{form.formState.errors.name.message}</p>
                )}
              </div>
              <div className="grid gap-2">
                <Label htmlFor="type">Type</Label>
                <Controller
                  name="type"
                  control={form.control}
                  render={({ field }) => (
                    <Select
                      value={String(field.value ?? 0)}
                      onValueChange={(value) => field.onChange(Number(value))}
                    >
                      <SelectTrigger id="type">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {bookTypeOptions.map((opt) => (
                          <SelectItem key={opt.value} value={String(opt.value)}>
                            {t(opt.key)}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  )}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="publishDate">Publish Date</Label>
                <Controller
                  name="publishDate"
                  control={form.control}
                  render={({ field }) => (
                    <DatePicker id="publishDate" value={field.value} onChange={field.onChange} />
                  )}
                />
                {form.formState.errors.publishDate && (
                  <p className="text-sm text-destructive">
                    {form.formState.errors.publishDate.message}
                  </p>
                )}
              </div>
              <div className="grid gap-2">
                <Label htmlFor="price">Price</Label>
                <Input
                  id="price"
                  type="number"
                  min={0}
                  step={0.01}
                  {...form.register("price", { valueAsNumber: true })}
                />
                {form.formState.errors.price && (
                  <p className="text-sm text-destructive">{form.formState.errors.price.message}</p>
                )}
              </div>
            </div>
            <DialogFooter>
              <Button type="button" variant="outline" onClick={() => setIsFormOpen(false)}>
                {t("AbpUi::Cancel")}
              </Button>
              <Button type="submit" disabled={createMutation.isPending || updateMutation.isPending}>
                {t("AbpAccount::Save")}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
