/**
 * 教师课堂列表页表格聚合 hook：数据查询、列定义与表格实例。
 * 一次拉取最多 50 条，无分页。
 */
import { useMemo } from "react";
import { Badge, Button } from "@fluentui/react-components";
import { type ColumnDef } from "@tanstack/react-table";
import { classSessionGetListQueryOptions } from "@/api/hooks/classSession/useClassSessionGetList";
import { useDataTableState } from "@/components/ui/data-table/useDataTableState";
import {
  useDataTableQuery,
  type AbpGridParams,
} from "@/components/ui/data-table/useDataTableQuery";
import { useDataTable, type AppTableFeatures } from "@/components/ui/data-table/useDataTable";
import type { ClassroomDtosClassSessionDto } from "@/api/models/classroom/dtos/ClassSessionDto";
import { ClassSessionStatusValue, classSessionStatusLabel } from "../../shared/constants/classroom";
import { useTeacherSessionsStyles } from "../styles/teacherSessions";

type SessionItem = ClassroomDtosClassSessionDto;

const MAX_RESULT_COUNT = 50;

/** 课堂状态徽标：颜色语义与状态机对应。 */
function SessionStatusBadge({ status }: { status: number }) {
  if (status === ClassSessionStatusValue.Answering) {
    return (
      <Badge appearance="filled" color="success">
        答题中
      </Badge>
    );
  }
  if (status === ClassSessionStatusValue.Explaining) {
    return (
      <Badge appearance="filled" color="warning">
        讲评中
      </Badge>
    );
  }
  if (status === ClassSessionStatusValue.Finished) {
    return (
      <Badge appearance="ghost" color="informative">
        已结束
      </Badge>
    );
  }
  return (
    <Badge appearance="filled" color="informative">
      {classSessionStatusLabel[status] ?? "未知"}
    </Badge>
  );
}

export function useTeacherSessionsTable(onEnterDashboard: (sessionId: string) => void) {
  const styles = useTeacherSessionsStyles();

  const tableState = useDataTableState({
    pagination: { pageIndex: 0, pageSize: MAX_RESULT_COUNT },
  });

  const query = useDataTableQuery<SessionItem, AbpGridParams>({
    queryOptions: classSessionGetListQueryOptions,
    pagination: tableState.state.pagination,
  });

  const columns = useMemo<ColumnDef<AppTableFeatures, SessionItem>[]>(
    () => [
      {
        id: "classroomCode",
        accessorKey: "classroomCode",
        header: "课堂码",
        cell: (info) => (
          <span className={styles.classroomCode}>{(info.getValue() as string) ?? "—"}</span>
        ),
      },
      {
        id: "quizName",
        accessorKey: "quizName",
        header: "试卷",
        cell: (info) => (info.getValue() as string) ?? "—",
      },
      {
        id: "status",
        accessorKey: "status",
        header: "状态",
        cell: (info) => <SessionStatusBadge status={(info.getValue() as number) ?? 0} />,
      },
      {
        id: "progress",
        header: "进度",
        cell: (info) => {
          const row = info.row.original;
          return `${row.currentQuestionNumber ?? 0} / ${row.questionCount ?? 0}`;
        },
      },
      {
        id: "creationTime",
        accessorKey: "creationTime",
        header: "创建时间",
        cell: (info) => {
          const time = info.getValue() as string | undefined;
          return time ? new Date(time).toLocaleString() : "—";
        },
      },
      {
        id: "actions",
        header: "操作",
        cell: (info) => (
          <div className={styles.actionsCell}>
            <Button
              size="small"
              appearance="primary"
              onClick={(e) => {
                e.stopPropagation();
                onEnterDashboard(info.row.original.id!);
              }}
            >
              打开课堂
            </Button>
          </div>
        ),
      },
    ],
    [styles.classroomCode, styles.actionsCell, onEnterDashboard],
  );

  const table = useDataTable({
    data: query.data,
    columns,
    rowCount: query.totalCount,
    getRowId: (row) => row.id!,
    state: tableState.state,
    manualPagination: true,
    pageCount: 1,
  });

  return { table, query };
}
