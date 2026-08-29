/**
 * 题库列表表格聚合 hook：数据查询、列定义与表格实例。
 * 服务端分页 + 题型筛选 + 关键字搜索。
 */
import { useMemo } from "react";
import { questionGetListQueryOptions } from "@/api/hooks/question/useQuestionGetList";
import { useDataTableState } from "@/components/ui/data-table/useDataTableState";
import {
  useDataTableQuery,
  type AbpGridParams,
} from "@/components/ui/data-table/useDataTableQuery";
import { useDataTable } from "@/components/ui/data-table/useDataTable";
import type { ClassroomDtosQuestionDto } from "@/api/models/classroom/dtos/QuestionDto";
import { useQuestionColumns } from "./useQuestionColumns";

type QuestionItem = ClassroomDtosQuestionDto;

export function useQuestionsTable(
  onEdit: (question: QuestionItem) => void,
  onDelete: (question: QuestionItem) => void,
  typeFilter: number | null,
  keyword: string,
) {
  const tableState = useDataTableState({
    pagination: { pageIndex: 0, pageSize: 20 },
  });

  const extraParams = useMemo(
    () => (typeFilter != null ? ({ Type: typeFilter } as Record<string, unknown>) : {}),
    [typeFilter],
  );

  const query = useDataTableQuery<QuestionItem, AbpGridParams>({
    queryOptions: questionGetListQueryOptions,
    pagination: tableState.state.pagination,
    globalFilter: keyword.trim() || undefined,
    extraParams: extraParams as Record<string, unknown>,
  });

  const columns = useQuestionColumns(onEdit, onDelete);

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
