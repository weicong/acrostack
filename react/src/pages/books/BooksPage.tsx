/**
 * 图书管理页：路由查询参数、对话框编排与子模块组装。
 * 表格逻辑见 hooks/useBooksTable，删除动作见 hooks/useBookActions，
 * 工具栏见 components/BooksToolbar。
 */
import { useCallback, useState } from "react";

import { useNavigate } from "@tanstack/react-router";
import { useQueryClient } from "@tanstack/react-query";
import { PageLayout } from "@/components/layout/PageLayout";
import { DataTable } from "@/components/data-table/DataTable";
import { ConfirmDialog } from "@/components/common/ConfirmDialog";
import { BookFormDialog } from "./components/BookFormDialog";
import { toFormBook, type BookFormBook, type BookListItem } from "./types/book";
import { bookGetListQueryKey } from "@/api/hooks/book/useBookGetList";
import { Route } from "@/routes/admin/books";
import { useBooksTable } from "./hooks/useBooksTable";
import { useBookActions } from "./hooks/useBookActions";
import { BooksToolbar } from "./components/BooksToolbar";

type BookItem = BookListItem;

export function BooksPage() {
  const queryClient = useQueryClient();
  const navigate = useNavigate({ from: Route.fullPath });
  const searchParams = Route.useSearch();

  const [formOpen, setFormOpen] = useState(false);
  const [formBook, setFormBook] = useState<BookFormBook | undefined>();
  const [deleteBookId, setDeleteBookId] = useState<string | null>(null);

  const handleCreate = useCallback(() => {
    setFormBook(undefined);
    setFormOpen(true);
  }, []);

  const handleEdit = useCallback((book: BookItem) => {
    setFormBook(toFormBook(book));
    setFormOpen(true);
  }, []);

  const handleDelete = useCallback((id: string) => {
    setDeleteBookId(id);
  }, []);

  const handleFormSuccess = useCallback(() => {
    setFormOpen(false);
    void queryClient.invalidateQueries({ queryKey: bookGetListQueryKey() });
  }, [queryClient]);

  const { remove, deletePending } = useBookActions();

  async function handleDeleteConfirm() {
    if (!deleteBookId) return;
    const ok = await remove(deleteBookId);
    if (ok) setDeleteBookId(null);
  }

  const { table, query } = useBooksTable(
    handleEdit,
    handleDelete,
    searchParams.q,
    searchParams.type,
  );

  function handleApplyFilter(filter: { q: string; type?: number }) {
    void navigate({ search: filter });
  }

  return (
    <PageLayout title={"图书"}>
      <BooksToolbar
        initialSearch={searchParams.q}
        initialType={searchParams.type}
        onCreate={handleCreate}
        onApplyFilter={handleApplyFilter}
      />

      <DataTable
        table={table}
        isLoading={query.isLoading}
        isError={query.isError}
        errorMessage={query.error ? String(query.error) : undefined}
      />

      <BookFormDialog
        open={formOpen}
        onOpenChange={setFormOpen}
        book={formBook}
        onSuccess={handleFormSuccess}
      />

      <ConfirmDialog
        open={deleteBookId !== null}
        onOpenChange={(open) => {
          if (!open) setDeleteBookId(null);
        }}
        title={"你确定吗?"}
        description={"此项将被删除！"}
        confirmLabel={"删除"}
        variant="destructive"
        onConfirm={() => void handleDeleteConfirm()}
        isPending={deletePending}
      />
    </PageLayout>
  );
}
