import { useCallback, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { Button, Input, makeStyles, tokens, useToastController } from "@fluentui/react-components";
import { Delete20Regular, Search20Regular } from "@fluentui/react-icons";
import { format } from "date-fns";
import type { ColumnDef } from "@tanstack/react-table";
import { useQueryClient } from "@tanstack/react-query";
import { PageLayout } from "@/components/layout/PageLayout";
import { DataTable } from "@/components/data-table/DataTable";
import { useDataTableState } from "@/components/data-table/useDataTableState";
import { useDataTable } from "@/components/data-table/useDataTable";
import { ConfirmDialog } from "@/components/common/ConfirmDialog";
import { usePermissions, useCurrentUser } from "@/lib/auth/permissions";
import {
  useCommentGetListForEntity,
  commentGetListForEntityQueryKey,
} from "@/api/hooks/comment/useCommentGetListForEntity";
import { useCommentDelete } from "@/api/hooks/comment/useCommentDelete";
import type { AcroStackServicesDtosCmsCommentDto as CommentDto } from "@/api/models/acroStack/services/dtos/cms/CommentDto";

type CommentItem = CommentDto;

const TEXT_MAX = 80;

const useStyles = makeStyles({
  toolbar: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "flex-end",
    gap: tokens.spacingHorizontalS,
    marginBottom: tokens.spacingHorizontalM,
  },
  field: {
    display: "flex",
    flexDirection: "column",
    gap: tokens.spacingVerticalXXS,
  },
  entityTypeInput: {
    minWidth: "180px",
  },
  entityIdInput: {
    minWidth: "240px",
  },
  actionsCell: {
    display: "flex",
    gap: tokens.spacingHorizontalXS,
  },
});

export function CommentsPage() {
  const { t } = useTranslation();
  const styles = useStyles();
  const queryClient = useQueryClient();
  const { isGranted } = usePermissions();
  const currentUser = useCurrentUser();
  const { dispatchToast } = useToastController();
  const deleteMutation = useCommentDelete();

  const canDeleteAny = isGranted("AcroStack.Cms.Comments.Delete");

  const [entityType, setEntityType] = useState("");
  const [entityId, setEntityId] = useState("");
  const [query, setQuery] = useState<{ entityType: string; entityId: string } | null>(null);
  const [deleteCommentId, setDeleteCommentId] = useState<string | null>(null);

  const tableState = useDataTableState();

  const pageSize = tableState.state.pagination.pageSize;
  const pageIndex = tableState.state.pagination.pageIndex;

  const commentsQuery = useCommentGetListForEntity(
    query
      ? {
          EntityType: query.entityType,
          EntityId: query.entityId,
          SkipCount: pageIndex * pageSize,
          MaxResultCount: pageSize,
        }
      : undefined,
    {
      query: { enabled: !!query },
    },
  );

  const data = commentsQuery.data?.items ?? [];
  const totalCount = Number(commentsQuery.data?.totalCount ?? 0);
  const pageCount = Math.ceil(totalCount / pageSize) || 1;

  const canDeleteComment = useCallback(
    (comment: CommentItem) => {
      if (canDeleteAny) return true;
      const creatorId = comment.creatorId ?? comment.creatorUserId ?? null;
      return !!currentUser?.id && creatorId === currentUser.id;
    },
    [canDeleteAny, currentUser?.id],
  );

  const handleLoad = useCallback(() => {
    const type = entityType.trim();
    const id = entityId.trim();
    if (!type || !id) return;
    setQuery({ entityType: type, entityId: id });
  }, [entityType, entityId]);

  const handleDelete = useCallback((id: string) => {
    setDeleteCommentId(id);
  }, []);

  const handleDeleteConfirm = useCallback(() => {
    if (!deleteCommentId || !query) return;
    deleteMutation.mutate(
      { id: deleteCommentId },
      {
        onSuccess: () => {
          setDeleteCommentId(null);
          void queryClient.invalidateQueries({
            queryKey: commentGetListForEntityQueryKey({
              EntityType: query.entityType,
              EntityId: query.entityId,
              SkipCount: pageIndex * pageSize,
              MaxResultCount: pageSize,
            }),
          });
          dispatchToast(t("AbpUi::DeletedSuccessfully"), { intent: "success" });
        },
        onError: (err) => {
          dispatchToast(String(err), { intent: "error" });
        },
      },
    );
  }, [deleteCommentId, deleteMutation, query, queryClient, pageIndex, pageSize, dispatchToast, t]);

  const columns = useMemo<ColumnDef<CommentItem>[]>(
    () => [
      {
        id: "author",
        header: t("Cms:Author"),
        cell: ({ row }) => row.original.authorName || row.original.creatorUserName || "-",
      },
      {
        id: "entityType",
        accessorKey: "entityType",
        header: t("Cms:EntityType"),
        cell: (info) => (info.getValue() as string) || "-",
      },
      {
        id: "text",
        accessorKey: "text",
        header: t("Cms:Text"),
        cell: (info) => {
          const text = (info.getValue() as string | null | undefined) ?? "";
          if (!text) return "-";
          return text.length > TEXT_MAX ? `${text.slice(0, TEXT_MAX)}…` : text;
        },
      },
      {
        id: "creationTime",
        accessorKey: "creationTime",
        header: t("AbpUi::CreationTime"),
        cell: (info) => {
          const date = info.getValue() as string | undefined;
          return date ? format(new Date(date), "yyyy-MM-dd HH:mm") : "-";
        },
      },
      {
        id: "actions",
        header: t("AbpUi::Actions"),
        cell: ({ row }) =>
          canDeleteComment(row.original) && row.original.id ? (
            <div className={styles.actionsCell}>
              <Button
                size="small"
                appearance="subtle"
                icon={<Delete20Regular />}
                onClick={() => handleDelete(row.original.id!)}
                aria-label={t("AbpUi::Delete")}
                title={t("AbpUi::Delete")}
              />
            </div>
          ) : null,
      },
    ],
    [t, styles.actionsCell, canDeleteComment, handleDelete],
  );

  const table = useDataTable({
    columns,
    data,
    rowCount: totalCount,
    getRowId: (row) => row.id ?? "",
    state: tableState.state,
    manualPagination: true,
    pageCount,
  });

  return (
    <PageLayout title={t("Cms:Comments")}>
      <div className={styles.toolbar}>
        <div className={styles.field}>
          <label htmlFor="comment-entity-type">{t("Cms:EntityType")}</label>
          <Input
            id="comment-entity-type"
            className={styles.entityTypeInput}
            value={entityType}
            onChange={(_, data) => setEntityType(data.value)}
            placeholder={t("Cms:EntityTypePlaceholder")}
          />
        </div>
        <div className={styles.field}>
          <label htmlFor="comment-entity-id">{t("Cms:EntityId")}</label>
          <Input
            id="comment-entity-id"
            className={styles.entityIdInput}
            value={entityId}
            onChange={(_, data) => setEntityId(data.value)}
            placeholder={t("Cms:EntityIdPlaceholder")}
          />
        </div>
        <Button
          appearance="primary"
          icon={<Search20Regular />}
          onClick={handleLoad}
          disabled={!entityType.trim() || !entityId.trim()}
        >
          {t("AbpUi::Search")}
        </Button>
      </div>

      <DataTable
        table={table}
        isLoading={commentsQuery.isLoading}
        isError={commentsQuery.isError}
        errorMessage={commentsQuery.error ? String(commentsQuery.error) : undefined}
        emptyMessage={query ? undefined : t("Cms:CommentsEnterEntity")}
      />

      <ConfirmDialog
        open={deleteCommentId !== null}
        onOpenChange={(open) => !open && setDeleteCommentId(null)}
        title={t("AbpUi::AreYouSure")}
        description={t("AbpUi::ItemWillBeDeleted")}
        confirmLabel={t("AbpUi::Delete")}
        variant="destructive"
        onConfirm={handleDeleteConfirm}
        isPending={deleteMutation.isPending}
      />
    </PageLayout>
  );
}
