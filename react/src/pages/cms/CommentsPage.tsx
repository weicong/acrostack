import { useCallback, useEffect, useMemo, useState } from "react";
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
import { type ColumnDef } from "@tanstack/react-table";
import { useQueryClient } from "@tanstack/react-query";
import { PageLayout } from "@/components/layout/PageLayout";
import { DataTable } from "@/components/data-table/DataTable";
import { useDataTableState } from "@/components/data-table/useDataTableState";
import { useDataTableQuery, type AbpGridParams } from "@/components/data-table/useDataTableQuery";
import { useDataTable, type AppTableFeatures } from "@/components/data-table/useDataTable";
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
      { path: { id: deleteCommentId } },
      {
        onSuccess: () => {
          setDeleteCommentId(null);
          invalidateList();
          dispatchToast("删除成功", { intent: "success" });
        },
        onError: (err) => {
          dispatchToast(String(err), { intent: "error" });
        },
      },
    );
  }, [deleteCommentId, deleteMutation, invalidateList, dispatchToast]);

  const handleToggleApproval = useCallback(
    (comment: CommentItem) => {
      if (!comment.id) return;
      const newApproved = !comment.isApproved;
      approvalMutation.mutate(
        {
          path: { id: comment.id },
          body: { isApproved: newApproved },
        },
        {
          onSuccess: () => {
            invalidateList();
            dispatchToast(newApproved ? "评论已通过" : "评论已取消通过", {
              intent: "success",
            });
          },
          onError: (err) => {
            dispatchToast(String(err), { intent: "error" });
          },
        },
      );
    },
    [approvalMutation, invalidateList, dispatchToast],
  );

  const renderApprovalBadge = useCallback((isApproved: boolean | null | undefined) => {
    if (isApproved === true) {
      return (
        <Badge appearance="filled" color="success">
          {"评论已通过"}
        </Badge>
      );
    }
    if (isApproved === false) {
      return (
        <Badge appearance="filled" color="danger">
          {"评论已拒绝"}
        </Badge>
      );
    }
    return (
      <Badge appearance="filled" color="warning">
        {"评论已标记为等待"}
      </Badge>
    );
  }, []);

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
        cell: (info) => renderApprovalBadge(info.getValue() as boolean | null | undefined),
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
                onClick={() => handleToggleApproval(row.original)}
                aria-label={row.original.isApproved ? "取消通过" : "通过"}
                title={row.original.isApproved ? "取消通过" : "通过"}
              />
            )}
            {canDelete && (
              <Button
                size="small"
                appearance="subtle"
                icon={<Delete20Regular />}
                onClick={() => row.original.id && handleDelete(row.original.id)}
                aria-label={"删除"}
                title={"删除"}
              />
            )}
          </div>
        ),
      },
    ],
    [
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
    <PageLayout title={"评论"}>
      <div className={styles.toolbar}>
        <div className={styles.field}>
          <label htmlFor="comment-entity-type">{"实体类型"}</label>
          <Input
            id="comment-entity-type"
            className={styles.entityTypeInput}
            value={entityType}
            onChange={(_, data) => setEntityType(data.value)}
            placeholder={"全部类型"}
            contentAfter={
              <Button
                size="small"
                appearance="subtle"
                icon={<Search20Regular />}
                onClick={goToFirstPage}
                disabled={!entityType.trim()}
                aria-label={"搜索"}
              />
            }
          />
        </div>
        <div className={styles.field}>
          <label htmlFor="comment-state-filter">{"审核状态"}</label>
          <Dropdown
            id="comment-state-filter"
            className={styles.stateFilter}
            placeholder={"全部状态"}
            value={
              approvalState === CommentApproveState.Approved
                ? "评论已通过"
                : approvalState === CommentApproveState.WaitingForApproval
                  ? "评论已标记为等待"
                  : ""
            }
            onOptionSelect={(_, data) => {
              const val = data.optionValue;
              setApprovalState(val === "" ? "" : Number(val));
              goToFirstPage();
            }}
            clearable
          >
            <Option value="">{"全部状态"}</Option>
            <Option value={String(CommentApproveState.Approved)}>{"评论已通过"}</Option>
            <Option value={String(CommentApproveState.WaitingForApproval)}>
              {"评论已标记为等待"}
            </Option>
          </Dropdown>
        </div>
        <div className={styles.field} style={{ flex: 1, minWidth: "200px" }}>
          <label htmlFor="comment-search">{"搜索"}</label>
          <Input
            id="comment-search"
            value={searchValue}
            onChange={(_, data) => setSearchValue(data.value)}
            placeholder={"搜索评论..."}
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
        title={"你确定吗?"}
        description={"此项将被删除！"}
        confirmLabel={"删除"}
        variant="destructive"
        onConfirm={handleDeleteConfirm}
        isPending={deleteMutation.isPending}
      />
    </PageLayout>
  );
}
