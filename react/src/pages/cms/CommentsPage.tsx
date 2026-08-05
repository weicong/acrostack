import { useCallback, useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  Badge,
  Button,
  Dropdown,
  Input,
  Option,
  makeStyles,
  tokens,
  useToastController,
} from "@fluentui/react-components";
import {
  CheckmarkCircle20Regular,
  Circle20Regular,
  Delete20Regular,
  Search20Regular,
} from "@fluentui/react-icons";
import { format } from "date-fns";
import { type ColumnDef, stockFeatures } from "@tanstack/react-table";
import { useQueryClient } from "@tanstack/react-query";
import { PageLayout } from "@/components/layout/PageLayout";
import { DataTable } from "@/components/data-table/DataTable";
import { useDataTableState } from "@/components/data-table/useDataTableState";
import { useDataTableQuery, type AbpGridParams } from "@/components/data-table/useDataTableQuery";
import { useDataTable } from "@/components/data-table/useDataTable";
import { ConfirmDialog } from "@/components/common/ConfirmDialog";
import { usePermissions } from "@/lib/auth/permissions";
import {
  commentAdminGetListQueryOptions,
  commentAdminGetListQueryKey,
} from "@/api/hooks/commentAdmin/useCommentAdminGetList";
import { useCommentAdminDelete } from "@/api/hooks/commentAdmin/useCommentAdminDelete";
import { useCommentAdminUpdateApprovalStatus } from "@/api/hooks/commentAdmin/useCommentAdminUpdateApprovalStatus";
import type { VoloCmsKitAdminCommentsCommentWithAuthorDto as CommentItem } from "@/api/models/volo/cmsKit/admin/comments/CommentWithAuthorDto";

const TEXT_MAX = 80;

// ABP CommentApproveState enum (Volo.CmsKit.Comments.CommentApproveState)
const CommentApproveState = {
  Approved: 0,
  WaitingForApproval: 1,
} as const;

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
  stateFilter: {
    minWidth: "160px",
  },
  actionsCell: {
    display: "flex",
    gap: tokens.spacingHorizontalXS,
  },
});

function getAuthorName(comment: CommentItem): string {
  const author = comment.author;
  if (!author) return "-";
  const name = author.name ?? author.userName;
  const surname = author.surname;
  if (name && surname) return `${name} ${surname}`;
  return name ?? author.userName ?? "-";
}

export function CommentsPage() {
  const { t } = useTranslation();
  const styles = useStyles();
  const queryClient = useQueryClient();
  const { isGranted } = usePermissions();
  const { dispatchToast } = useToastController();
  const deleteMutation = useCommentAdminDelete();
  const approvalMutation = useCommentAdminUpdateApprovalStatus();

  const canManage = isGranted("CmsKit.Comments");
  const canDelete = isGranted("CmsKit.Comments.Delete");

  const [entityType, setEntityType] = useState("");
  const [approvalState, setApprovalState] = useState<number | "">("");
  const [deleteCommentId, setDeleteCommentId] = useState<string | null>(null);

  const tableState = useDataTableState({
    sorting: [{ id: "creationTime", desc: true }],
  });

  const extraParams = useMemo(() => {
    const params: Record<string, unknown> = {};
    if (entityType.trim()) params.EntityType = entityType.trim();
    if (approvalState !== "") params.CommentApproveState = approvalState;
    return params;
  }, [entityType, approvalState]);

  const goToFirstPage = useCallback(() => {
    tableState.state.onPaginationChange((prev) => ({ ...prev, pageIndex: 0 }));
  }, [tableState.state.onPaginationChange]);

  const query = useDataTableQuery<CommentItem, AbpGridParams>({
    queryOptions: commentAdminGetListQueryOptions,
    sorting: tableState.state.sorting,
    pagination: tableState.state.pagination,
    globalFilter: tableState.state.globalFilter,
    extraParams,
  });

  const invalidateList = useCallback(() => {
    void queryClient.invalidateQueries({
      queryKey: commentAdminGetListQueryKey(),
    });
  }, [queryClient]);

  const handleDelete = useCallback((id: string) => {
    setDeleteCommentId(id);
  }, []);

  const handleDeleteConfirm = useCallback(() => {
    if (!deleteCommentId) return;
    deleteMutation.mutate(
      { id: deleteCommentId },
      {
        onSuccess: () => {
          setDeleteCommentId(null);
          invalidateList();
          dispatchToast(t("AbpUi::DeletedSuccessfully"), { intent: "success" });
        },
        onError: (err) => {
          dispatchToast(String(err), { intent: "error" });
        },
      },
    );
  }, [deleteCommentId, deleteMutation, invalidateList, dispatchToast, t]);

  const handleToggleApproval = useCallback(
    (comment: CommentItem) => {
      if (!comment.id) return;
      const newApproved = !comment.isApproved;
      approvalMutation.mutate(
        {
          id: comment.id,
          data: { isApproved: newApproved },
        },
        {
          onSuccess: () => {
            invalidateList();
            dispatchToast(newApproved ? t("Cms:CommentApproved") : t("Cms:CommentUnapproved"), {
              intent: "success",
            });
          },
          onError: (err) => {
            dispatchToast(String(err), { intent: "error" });
          },
        },
      );
    },
    [approvalMutation, invalidateList, dispatchToast, t],
  );

  const renderApprovalBadge = useCallback(
    (isApproved: boolean | null | undefined) => {
      if (isApproved === true) {
        return (
          <Badge appearance="filled" color="success">
            {t("Cms:CommentApproved")}
          </Badge>
        );
      }
      if (isApproved === false) {
        return (
          <Badge appearance="filled" color="danger">
            {t("Cms:CommentRejected")}
          </Badge>
        );
      }
      return (
        <Badge appearance="filled" color="warning">
          {t("Cms:CommentWaiting")}
        </Badge>
      );
    },
    [t],
  );

  const columns = useMemo<ColumnDef<typeof stockFeatures, CommentItem>[]>(
    () => [
      {
        id: "author",
        header: t("Cms:Author"),
        cell: ({ row }) => getAuthorName(row.original),
      },
      {
        id: "entityType",
        accessorKey: "entityType",
        header: t("Cms:EntityType"),
        cell: (info) => (info.getValue() as string) || "-",
      },
      {
        id: "entityId",
        accessorKey: "entityId",
        header: t("Cms:EntityId"),
        cell: (info) => {
          const value = info.getValue() as string | null | undefined;
          if (!value) return "-";
          return value.length > 24 ? `${value.slice(0, 24)}…` : value;
        },
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
        id: "isApproved",
        accessorKey: "isApproved",
        header: t("Cms:ApprovalStatus"),
        cell: (info) => renderApprovalBadge(info.getValue() as boolean | null | undefined),
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
        cell: ({ row }) => (
          <div className={styles.actionsCell}>
            {canManage && row.original.id && (
              <Button
                size="small"
                appearance="subtle"
                icon={row.original.isApproved ? <Circle20Regular /> : <CheckmarkCircle20Regular />}
                onClick={() => handleToggleApproval(row.original)}
                aria-label={row.original.isApproved ? t("Cms:Unapprove") : t("Cms:Approve")}
                title={row.original.isApproved ? t("Cms:Unapprove") : t("Cms:Approve")}
              />
            )}
            {canDelete && (
              <Button
                size="small"
                appearance="subtle"
                icon={<Delete20Regular />}
                onClick={() => row.original.id && handleDelete(row.original.id)}
                aria-label={t("AbpUi::Delete")}
                title={t("AbpUi::Delete")}
              />
            )}
          </div>
        ),
      },
    ],
    [
      t,
      styles.actionsCell,
      canManage,
      canDelete,
      renderApprovalBadge,
      handleToggleApproval,
      handleDelete,
    ],
  );

  const table = useDataTable({
    columns,
    data: query.data,
    rowCount: query.totalCount,
    getRowId: (row) => row.id ?? "",
    state: tableState.state,
    manualPagination: true,
    manualSorting: true,
    pageCount: query.pageCount,
  });

  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      tableState.state.onGlobalFilterChange(searchValue);
    }, 300);
    return () => clearTimeout(timer);
  }, [searchValue, tableState.state]);

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
            contentAfter={
              <Button
                size="small"
                appearance="subtle"
                icon={<Search20Regular />}
                onClick={goToFirstPage}
                disabled={!entityType.trim()}
                aria-label={t("AbpUi::Search")}
              />
            }
          />
        </div>
        <div className={styles.field}>
          <label htmlFor="comment-state-filter">{t("Cms:ApprovalStatus")}</label>
          <Dropdown
            id="comment-state-filter"
            className={styles.stateFilter}
            placeholder={t("Cms:AllStates")}
            value={
              approvalState === CommentApproveState.Approved
                ? t("Cms:CommentApproved")
                : approvalState === CommentApproveState.WaitingForApproval
                  ? t("Cms:CommentWaiting")
                  : ""
            }
            onOptionSelect={(_, data) => {
              const val = data.optionValue;
              setApprovalState(val === "" ? "" : Number(val));
              goToFirstPage();
            }}
            clearable
          >
            <Option value="">{t("Cms:AllStates")}</Option>
            <Option value={String(CommentApproveState.Approved)}>{t("Cms:CommentApproved")}</Option>
            <Option value={String(CommentApproveState.WaitingForApproval)}>
              {t("Cms:CommentWaiting")}
            </Option>
          </Dropdown>
        </div>
        <div className={styles.field} style={{ flex: 1, minWidth: "200px" }}>
          <label htmlFor="comment-search">{t("AbpUi::Search")}</label>
          <Input
            id="comment-search"
            value={searchValue}
            onChange={(_, data) => setSearchValue(data.value)}
            placeholder={t("Cms:SearchComments")}
            contentBefore={<Search20Regular />}
          />
        </div>
      </div>

      <DataTable
        table={table}
        isLoading={query.isLoading}
        isError={query.isError}
        errorMessage={query.error ? String(query.error) : undefined}
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
