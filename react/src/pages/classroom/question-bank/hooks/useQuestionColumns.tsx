/**
 * 题库表格列定义聚合：题型、题干、选项数、正确答案、解析与行内操作按钮（编辑/删除）。
 */
import { useMemo } from "react";
import { Badge, Button, Text } from "@fluentui/react-components";
import { Delete20Regular, Edit20Regular } from "@fluentui/react-icons";
import { type ColumnDef } from "@tanstack/react-table";
import { type AppTableFeatures } from "@/components/ui/data-table/useDataTable";
import type { ClassroomDtosQuestionDto } from "@/api/models/classroom/dtos/QuestionDto";
import { questionTypeLabel } from "../../shared/constants/question";
import { useQuestionBankStyles } from "../styles/questionBank";

type QuestionItem = ClassroomDtosQuestionDto;

const typeBadgeColor: Record<number, "brand" | "success" | "warning" | "severe"> = {
  1: "brand",
  2: "success",
  3: "warning",
  4: "severe",
};

export function useQuestionColumns(
  onEdit: (question: QuestionItem) => void,
  onDelete: (question: QuestionItem) => void,
) {
  const styles = useQuestionBankStyles();

  return useMemo<ColumnDef<AppTableFeatures, QuestionItem>[]>(
    () => [
      {
        id: "type",
        accessorKey: "type",
        header: "题型",
        cell: (info) => {
          const type = (info.getValue() as number) ?? 1;
          return (
            <Badge appearance="filled" color={typeBadgeColor[type]}>
              {questionTypeLabel[type] ?? "未知"}
            </Badge>
          );
        },
      },
      {
        id: "stem",
        accessorKey: "stem",
        header: "题干",
        cell: (info) => {
          const stem = (info.getValue() as string) ?? "";
          return <Text title={stem}>{stem.length > 40 ? `${stem.slice(0, 40)}…` : stem}</Text>;
        },
      },
      {
        id: "options",
        header: "选项数",
        cell: (info) => info.row.original.options?.length ?? 0,
      },
      {
        id: "correctAnswer",
        accessorKey: "correctAnswer",
        header: "正确答案",
        cell: (info) => {
          const row = info.row.original;
          if (row.type === 3) {
            return row.correctAnswer === "true" ? "对" : row.correctAnswer === "false" ? "错" : "—";
          }
          return (info.getValue() as string) ?? "—";
        },
      },
      {
        id: "explanation",
        accessorKey: "explanation",
        header: "解析",
        cell: (info) => ((info.getValue() as string) ? "有" : "—"),
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
