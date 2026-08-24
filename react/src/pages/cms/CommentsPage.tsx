/**
 * 评论管理页（CommentsPage）。
 *
 * 本文件只负责编排：权限判定、筛选状态、表格状态与列定义、数据查询；
 * 样式见 styles/comments，常量与助手见 utils/comments，
 * 筛选栏与审核徽标见 components/，动作聚合见 hooks/useCommentActions。
 */
import { useCallback, useMemo, useState } from "react";
import { Button } from "@fluentui/react-components";
import { CheckmarkCircle20Regular, Circle20Regular, Delete20Regular } from "@fluentui/react-icons";
import { format } from "date-fns";
import { type ColumnDef } from "@tanstack/react-table";
import { PageLayout } from "@/components/layout/PageLayout";
import { DataTable } from "@/components/data-table/DataTable";
import { useDataTableState } from "@/components/data-table/useDataTableState";
import { useDataTableQuery, type AbpGridParams } from "@/components/data-table/useDataTableQuery";
import { useDataTable, type AppTableFeatures } from "@/components/data-table/useDataTable";
import { ConfirmDialog } from "@/components/common/ConfirmDialog";
import { usePermissions } from "@/lib/auth/permissions";
import { commentAdminGetListQueryOptions } from "@/api/hooks/commentAdmin/useCommentAdminGetList";
import type { VoloCmsKitAdminCommentsCommentWithAuthorDto as CommentItem } from "@/api/models/volo/cmsKit/admin/comments/CommentWithAuthorDto";
import { useCommentsStyles } from "./styles/comments";
import { TEXT_MAX, getAuthorName } from "./utils/comments";
import { ApprovalStatusBadge } from "./components/ApprovalStatusBadge";
import { CommentsFilterBar } from "./components/CommentsFilterBar";
import { useCommentActions } from "./hooks/useCommentActions";

export function CommentsPage() {
  const styles = useCommentsStyles();
  const { isGranted } = usePermissions();
  const actions = useCommentActions();

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

  const columns = useMemo<ColumnDef<AppTableFeatures, CommentItem>[]>(
    () => [
      {
        id: "author",
        header: "作者",
        cell: ({ row }) => getAuthorName(row.original),
      },
      {
        id: "entityType",
        accessorKey: "entityType",
        header: "实体类型",
        cell: (info) => (info.getValue() as string) || "-",
      },
      {
        id: "entityId",
        accessorKey: "entityId",
        header: "实体 ID",
        cell: (info) => {
          const value = info.getValue() as string | null | undefined;
          if (!value) return "-";
          return value.length > 24 ? `${value.slice(0, 24)}…` : value;
        },
      },
      {
        id: "text",
        accessorKey: "text",
        header: "内容",
        cell: (info) => {
          const text = (info.getValue() as string | null | undefined) ?? "";
          if (!text) return "-";
          return text.length > TEXT_MAX ? `${text.slice(0, TEXT_MAX)}…` : text;
        },
      },
      {
        id: "isApproved",
        accessorKey: "isApproved",
        header: "审核状态",
        cell: (info) => (
          <ApprovalStatusBadge isApproved={info.getValue() as boolean | null | undefined} />
        ),
      },
      {
        id: "creationTime",
        accessorKey: "creationTime",
        header: "创建时间",
        cell: (info) => {
          const date = info.getValue() as string | undefined;
          return date ? format(new Date(date), "yyyy-MM-dd HH:mm") : "-";
        },
      },
      {
        id: "actions",
        header: "操作",
        cell: ({ row }) => (
          <div className={styles.actionsCell}>
            {canManage && row.original.id && (
              <Button
                size="small"
                appearance="subtle"
                icon={row.original.isApproved ? <Circle20Regular /> : <CheckmarkCircle20Regular />}
                onClick={() => void actions.toggleApproval(row.original)}
                aria-label={row.original.isApproved ? "取消通过" : "通过"}
                title={row.original.isApproved ? "取消通过" : "通过"}
              />
            )}
            {canDelete && (
              <Button
                size="small"
                appearance="subtle"
                icon={<Delete20Regular />}
                onClick={() => row.original.id && setDeleteCommentId(row.original.id)}
                aria-label={"删除"}
                title={"删除"}
              />
            )}
          </div>
        ),
      },
    ],
    [styles.actionsCell, canManage, canDelete, actions.toggleApproval],
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

  return (
    <PageLayout title={"评论"}>
      <CommentsFilterBar
        entityType={entityType}
        onEntityTypeChange={setEntityType}
        approvalState={approvalState}
        onApprovalStateChange={setApprovalState}
        onFilterSubmit={goToFirstPage}
        onSearch={tableState.state.onGlobalFilterChange}
      />

      <DataTable
        table={table}
        isLoading={query.isLoading}
        isError={query.isError}
        errorMessage={query.error ? String(query.error) : undefined}
      />

      <ConfirmDialog
        open={deleteCommentId !== null}
        onOpenChange={(open) => !open && setDeleteCommentId(null)}
        title={"你确定吗?"}
        description={"此项将被删除！"}
        confirmLabel={"删除"}
        variant="destructive"
        onConfirm={() =>
          void actions.deleteComment(deleteCommentId).then((ok) => ok && setDeleteCommentId(null))
        }
        isPending={actions.deletePending}
      />
    </PageLayout>
  );
}
