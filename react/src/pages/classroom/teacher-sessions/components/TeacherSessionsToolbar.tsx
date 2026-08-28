/**
 * 教师课堂列表页顶部区域：标题与"创建课堂"对话框。
 * 对话框内部管理打开状态与选中试卷；仅在打开时拉取试卷列表（Kubb hooks），
 * 创建动作委托给 hooks/useTeacherSessionActions。
 */
import { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogBody,
  DialogSurface,
  DialogTitle,
  DialogTrigger,
  Dropdown,
  Field,
  Option,
  Spinner,
  Text,
  Title3,
  tokens,
} from "@fluentui/react-components";
import { Add20Regular } from "@fluentui/react-icons";
import { useQuizGetList } from "@/api/hooks/quiz/useQuizGetList";
import { extractAbpErrorMessage } from "@/lib/http/error";
import { useTeacherSessionActions } from "../hooks/useTeacherSessionActions";
import { useTeacherSessionsStyles } from "../styles/teacherSessions";

export function TeacherSessionsToolbar() {
  const styles = useTeacherSessionsStyles();

  const [selectedQuizId, setSelectedQuizId] = useState<string | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  // 仅在创建对话框打开时拉取试卷列表
  const quizzesQuery = useQuizGetList(
    { query: { SkipCount: 0, MaxResultCount: 100 } },
    { query: { enabled: dialogOpen } },
  );
  const selectableQuizzes = (quizzesQuery.data?.items ?? []).filter(
    (q) => (q.questionCount ?? 0) > 0,
  );

  const { createSession, isCreating } = useTeacherSessionActions({
    selectedQuizId,
    onCreated: () => setDialogOpen(false),
  });

  return (
    <div className={styles.header}>
      <Title3>我的课堂</Title3>
      <Dialog open={dialogOpen} onOpenChange={(_, d) => setDialogOpen(d.open)}>
        <DialogTrigger disableButtonEnhancement>
          <Button appearance="primary" icon={<Add20Regular />}>
            创建课堂
          </Button>
        </DialogTrigger>
        <DialogSurface>
          <DialogBody>
            <DialogTitle>选择试卷创建课堂</DialogTitle>
            <Field label="试卷（仅显示含题目的试卷）" style={{ minWidth: "360px" }}>
              {selectableQuizzes.length === 0 ? (
                <Text size={300}>
                  暂无可用试卷。请先在题库中创建题目并组卷（试卷需至少包含一道题目）。
                </Text>
              ) : (
                <Dropdown
                  placeholder="选择试卷"
                  value={selectableQuizzes.find((q) => q.id === selectedQuizId)?.name ?? ""}
                  onOptionSelect={(_, d) => setSelectedQuizId(d.optionValue as string)}
                >
                  {selectableQuizzes.map((quiz) => (
                    <Option key={quiz.id} value={quiz.id!} text={quiz.name ?? ""}>
                      {quiz.name}（{quiz.questionCount} 题）
                    </Option>
                  ))}
                </Dropdown>
              )}
            </Field>
            {quizzesQuery.error && (
              <Text size={200} style={{ color: tokens.colorPaletteRedForeground1 }}>
                试卷加载失败：{extractAbpErrorMessage(quizzesQuery.error)}
              </Text>
            )}
            <DialogActions>
              <DialogTrigger disableButtonEnhancement>
                <Button appearance="secondary">取消</Button>
              </DialogTrigger>
              <Button
                appearance="primary"
                disabled={!selectedQuizId || isCreating}
                onClick={() => void createSession()}
              >
                {isCreating ? <Spinner size="tiny" /> : "创建并进入"}
              </Button>
            </DialogActions>
          </DialogBody>
        </DialogSurface>
      </Dialog>
    </div>
  );
}
