/**
 * 试卷列表表格聚合 hook：数据查询、列定义与表格实例。
 * 服务端分页 + 关键字搜索。
 */
import { quizGetListQueryOptions } from "@/api/hooks/quiz/useQuizGetList";
import { useDataTableState } from "@/components/ui/data-table/useDataTableState";
import {
  useDataTableQuery,
  type AbpGridParams,
} from "@/components/ui/data-table/useDataTableQuery";
import { useDataTable } from "@/components/ui/data-table/useDataTable";
import type { ClassroomDtosQuizDto } from "@/api/models/classroom/dtos/QuizDto";
import { useQuizColumns } from "./useQuizColumns";

type QuizItem = ClassroomDtosQuizDto;

export function useQuizzesTable(
  onEdit: (quiz: QuizItem) => void,
  onDelete: (quiz: QuizItem) => void,
  keyword: string,
) {
  const tableState = useDataTableState({
    pagination: { pageIndex: 0, pageSize: 20 },
  });

  const query = useDataTableQuery<QuizItem, AbpGridParams>({
    queryOptions: quizGetListQueryOptions,
    pagination: tableState.state.pagination,
    globalFilter: keyword.trim() || undefined,
  });

  const columns = useQuizColumns(onEdit, onDelete);

  const table = useDataTable({
    data: query.data,
    columns,
    rowCount: query.totalCount,
    getRowId: (row) => row.id!,
    state: tableState.state,
    manualPagination: true,
    manualFiltering: true,
    pageCount: query.pageCount,
  });

  return { table, query, tableState };
}
