/**
 * 试卷表格列定义聚合：名称、题数、描述、创建时间与行内操作按钮（编辑/删除）。
 */
import { useMemo } from "react";
import { Button, Text } from "@fluentui/react-components";
import { Delete20Regular, Edit20Regular } from "@fluentui/react-icons";
import { type ColumnDef } from "@tanstack/react-table";
import { type AppTableFeatures } from "@/components/ui/data-table/useDataTable";
import type { ClassroomDtosQuizDto } from "@/api/models/classroom/dtos/QuizDto";
import { useQuizzesStyles } from "../styles/quizzes";

type QuizItem = ClassroomDtosQuizDto;

export function useQuizColumns(
  onEdit: (quiz: QuizItem) => void,
  onDelete: (quiz: QuizItem) => void,
) {
  const styles = useQuizzesStyles();

  return useMemo<ColumnDef<AppTableFeatures, QuizItem>[]>(
    () => [
      {
        id: "name",
        accessorKey: "name",
        header: "试卷名称",
        cell: (info) => (info.getValue() as string) ?? "—",
      },
      {
        id: "questionCount",
        accessorKey: "questionCount",
        header: "题数",
        cell: (info) => (info.getValue() as number) ?? 0,
      },
      {
        id: "description",
        accessorKey: "description",
        header: "描述",
        cell: (info) => {
          const desc = (info.getValue() as string) ?? "";
          return (
            <Text title={desc}>{desc.length > 30 ? `${desc.slice(0, 30)}…` : desc || "—"}</Text>
          );
        },
      },
      {
        id: "creationTime",
        accessorKey: "creationTime",
        header: "创建时间",
        cell: (info) => {
          const time = info.getValue() as string | undefined;
          return time ? new Date(time).toLocaleString("zh-CN", { hour12: false }) : "—";
        },
      },
      {
        id: "actions",
        header: "操作",
        cell: (info) => (
          <div className={styles.actions}>
            <Button
              size="small"
              icon={<Edit20Regular />}
              onClick={(e) => {
                e.stopPropagation();
                onEdit(info.row.original);
              }}
            >
              编辑
            </Button>
            <Button
              size="small"
              icon={<Delete20Regular />}
              onClick={(e) => {
                e.stopPropagation();
                onDelete(info.row.original);
              }}
            >
              删除
            </Button>
          </div>
        ),
      },
    ],
    [styles.actions, onEdit, onDelete],
  );
}
