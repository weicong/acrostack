import { useCallback, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { useQueryClient } from "@tanstack/react-query";
import { Button, makeStyles, tokens } from "@fluentui/react-components";
import { Add20Regular, Edit20Regular, Delete20Regular } from "@fluentui/react-icons";
import { format } from "date-fns";
import type { ColumnDef } from "@tanstack/react-table";
import { bookGetListQueryOptions, bookGetListQueryKey } from "@/api/hooks/book/useBookGetList";
import { useBookDelete } from "@/api/hooks/book/useBookDelete";
import { useDataTableState } from "@/components/data-table/useDataTableState";
import { useDataTableQuery, type AbpGridParams } from "@/components/data-table/useDataTableQuery";
import { useDataTable } from "@/components/data-table/useDataTable";
import { DataTable } from "@/components/data-table/DataTable";
import { ConfirmDialog } from "@/components/common/ConfirmDialog";
import type { AcroStackServicesDtosBooksBookDto } from "@/api/models/acroStack/services/dtos/books/BookDto";
import { BookFormDialog } from "./BookFormDialog";
import { toFormBook, type BookFormBook } from "./book-types";
import { bookTypeOptions } from "./bookTypeOptions";

type BookItem = AcroStackServicesDtosBooksBookDto;

const useStyles = makeStyles({
  toolbar: {
    display: "flex",
    justifyContent: "flex-end",
  },
  actionsCell: {
    display: "flex",
    gap: tokens.spacingHorizontalXS,
  },
});

function useBooksTable(onEdit: (book: BookItem) => void, onDelete: (id: string) => void) {
  const { t } = useTranslation();
  const styles = useStyles();

  const tableState = useDataTableState({
    sorting: [{ id: "name", desc: false }],
  });

  const query = useDataTableQuery<BookItem, AbpGridParams>({
    queryOptions: bookGetListQueryOptions,
    sorting: tableState.state.sorting,
    pagination: tableState.state.pagination,
  });

  const columns = useMemo<ColumnDef<BookItem>[]>(
    () => [
      {
        id: "name",
        accessorKey: "name",
        header: t("BookStore:Name"),
        cell: (info) => (info.getValue() as string) || "-",
      },
      {
        id: "type",
        accessorKey: "type",
        header: t("BookStore:Type"),
        cell: (info) => {
          const type = info.getValue() as number | undefined;
          const label = bookTypeOptions.find((o) => o.value === type)?.key;
          return label ? t(label) : "-";
        },
      },
      {
        id: "publishDate",
        accessorKey: "publishDate",
        header: t("BookStore:PublishDate"),
        cell: (info) => {
          const date = info.getValue() as string | undefined;
          return date ? format(new Date(date), "yyyy-MM-dd") : "-";
        },
      },
      {
        id: "price",
        accessorKey: "price",
        header: t("BookStore:Price"),
        cell: (info) => {
          const price = info.getValue() as number | undefined;
          return price != null ? price.toFixed(2) : "-";
        },
      },
      {
        id: "actions",
        header: "",
        cell: (info) => (
          <div className={styles.actionsCell}>
            <Button
              size="small"
              appearance="subtle"
              icon={<Edit20Regular />}
              onClick={(e) => {
                e.stopPropagation();
                onEdit(info.row.original);
              }}
              aria-label={t("AbpUi::Edit")}
            />
            <Button
              size="small"
              appearance="subtle"
              icon={<Delete20Regular />}
              onClick={(e) => {
                e.stopPropagation();
                onDelete(info.row.original.id!);
              }}
              aria-label={t("AbpUi::Delete")}
            />
          </div>
        ),
      },
    ],
    [t, styles.actionsCell, onEdit, onDelete],
  );

  const table = useDataTable({
    data: query.data,
    columns,
    rowCount: query.totalCount,
    getRowId: (row) => row.id!,
    state: tableState.state,
    manualPagination: true,
    manualSorting: true,
    pageCount: query.pageCount,
  });

  return { table, query };
}

export function BooksPage() {
  const { t } = useTranslation();
  const styles = useStyles();
  const queryClient = useQueryClient();
  const deleteMutation = useBookDelete();

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

  const handleDeleteConfirm = useCallback(() => {
    if (!deleteBookId) return;
    deleteMutation.mutate(
      { id: deleteBookId },
      {
        onSuccess: () => {
          setDeleteBookId(null);
          void queryClient.invalidateQueries({ queryKey: bookGetListQueryKey() });
        },
      },
    );
  }, [deleteBookId, deleteMutation, queryClient]);

  const { table, query } = useBooksTable(handleEdit, handleDelete);

  return (
    <>
      <div className={styles.toolbar}>
        <Button appearance="primary" icon={<Add20Regular />} onClick={handleCreate}>
          {t("BookStore:NewBook")}
        </Button>
      </div>

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
        title={t("AbpUi::AreYouSure")}
        description={t("AbpUi::ItemWillBeDeleted")}
        confirmLabel={t("AbpUi::Delete")}
        variant="destructive"
        onConfirm={handleDeleteConfirm}
        isPending={deleteMutation.isPending}
      />
    </>
  );
}
