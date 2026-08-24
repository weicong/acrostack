/**
 * 教师课堂列表页（/classroom）。
 *
 * 功能：
 * - 列出我的课堂（状态、课堂码、题数、当前题号）
 * - 选择试卷创建新课堂，创建成功后进入教师驾驶舱
 *
 * 提示词四节"课堂管理"：创建课堂即从试卷复制题目生成 SessionQuestions；
 * 课堂码 6 位，用于学员加入。
 */
import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import {
  Badge,
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
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableHeaderCell,
  TableRow,
  Text,
  Title3,
  makeStyles,
  tokens,
} from "@fluentui/react-components";
import { useToastController } from "@fluentui/react-components";
import { Add20Regular } from "@fluentui/react-icons";
import {
  ClassSessionStatusValue,
  classSessionStatusLabel,
} from "@/pages/classroom/classroomEvents";
import {
  createSession,
  getQuizzes,
  getTeacherSessions,
  teacherApiErrorMessage,
} from "@/pages/classroom/teacherApi";
import type { ClassroomDtosClassSessionDto } from "@/api/models/classroom/dtos/ClassSessionDto";
import type { ClassroomDtosQuizDto } from "@/api/models/classroom/dtos/QuizDto";

const useStyles = makeStyles({
  page: {
    display: "flex",
    flexDirection: "column",
    gap: tokens.spacingVerticalL,
    padding: tokens.spacingVerticalL + " " + tokens.spacingHorizontalL,
    maxWidth: "1080px",
    margin: "0 auto",
    width: "100%",
  },
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: tokens.spacingHorizontalM,
  },
  classroomCode: {
    fontFamily: tokens.fontFamilyMonospace,
    fontWeight: tokens.fontWeightBold,
    fontSize: tokens.fontSizeBase400,
    letterSpacing: "0.08em",
  },
  empty: {
    textAlign: "center",
    padding: tokens.spacingVerticalXXL,
    display: "flex",
    flexDirection: "column",
    gap: tokens.spacingVerticalM,
    alignItems: "center",
  },
});

/** 课堂状态徽标：颜色语义与状态机对应（答题中=绿、讲评中=黄、已结束=灰）。 */
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

export function TeacherSessionsPage() {
  const styles = useStyles();
  const navigate = useNavigate();
  const { dispatchToast } = useToastController();

  const [sessions, setSessions] = useState<ClassroomDtosClassSessionDto[] | null>(null);
  const [loadError, setLoadError] = useState<string | null>(null);
  const [quizzes, setQuizzes] = useState<ClassroomDtosQuizDto[]>([]);
  const [selectedQuizId, setSelectedQuizId] = useState<string | null>(null);
  const [creating, setCreating] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);

  const refresh = useCallback(async () => {
    try {
      const result = await getTeacherSessions();
      setSessions(result.items ?? []);
      setLoadError(null);
    } catch (err) {
      setLoadError(teacherApiErrorMessage(err));
    }
  }, []);

  useEffect(() => {
    void refresh();
  }, [refresh]);

  // 打开创建对话框时加载试卷列表
  useEffect(() => {
    if (!dialogOpen || quizzes.length > 0) return;
    getQuizzes()
      .then((result) => setQuizzes(result.items ?? []))
      .catch((err) => {
        dispatchToast(`试卷加载失败：${teacherApiErrorMessage(err)}`, { intent: "error" });
      });
  }, [dialogOpen, quizzes.length, dispatchToast]);

  async function handleCreate() {
    if (!selectedQuizId || creating) return;
    setCreating(true);
    try {
      const session = await createSession(selectedQuizId);
      setDialogOpen(false);
      dispatchToast(`课堂已创建，课堂码 ${session.classroomCode ?? ""}`, { intent: "success" });
      void navigate({ to: "/classroom/$sessionId", params: { sessionId: session.id! } });
    } catch (err) {
      dispatchToast(`创建失败：${teacherApiErrorMessage(err)}`, { intent: "error" });
    } finally {
      setCreating(false);
    }
  }

  const selectableQuizzes = quizzes.filter((q) => (q.questionCount ?? 0) > 0);

  return (
    <div className={styles.page}>
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
              <DialogActions>
                <DialogTrigger disableButtonEnhancement>
                  <Button appearance="secondary">取消</Button>
                </DialogTrigger>
                <Button
                  appearance="primary"
                  disabled={!selectedQuizId || creating}
                  onClick={() => void handleCreate()}
                >
                  {creating ? <Spinner size="tiny" /> : "创建并进入"}
                </Button>
              </DialogActions>
            </DialogBody>
          </DialogSurface>
        </Dialog>
      </div>

      {loadError && <Text style={{ color: tokens.colorPaletteRedForeground1 }}>{loadError}</Text>}

      {sessions === null ? (
        <div className={styles.empty}>
          <Spinner />
          <Text>正在加载课堂…</Text>
        </div>
      ) : sessions.length === 0 ? (
        <div className={styles.empty}>
          <Text>还没有课堂。点击"创建课堂"选择试卷开始。</Text>
        </div>
      ) : (
        <Table size="small">
          <TableHeader>
            <TableRow>
              <TableHeaderCell>课堂码</TableHeaderCell>
              <TableHeaderCell>试卷</TableHeaderCell>
              <TableHeaderCell>状态</TableHeaderCell>
              <TableHeaderCell>进度</TableHeaderCell>
              <TableHeaderCell>创建时间</TableHeaderCell>
              <TableHeaderCell>操作</TableHeaderCell>
            </TableRow>
          </TableHeader>
          <TableBody>
            {sessions.map((s) => (
              <TableRow key={s.id}>
                <TableCell>
                  <span className={styles.classroomCode}>{s.classroomCode ?? "—"}</span>
                </TableCell>
                <TableCell>{s.quizName ?? "—"}</TableCell>
                <TableCell>
                  <SessionStatusBadge status={s.status ?? 0} />
                </TableCell>
                <TableCell>
                  {s.currentQuestionNumber ?? 0} / {s.questionCount ?? 0}
                </TableCell>
                <TableCell>
                  {s.creationTime ? new Date(s.creationTime).toLocaleString() : "—"}
                </TableCell>
                <TableCell>
                  <Button
                    size="small"
                    appearance="primary"
                    onClick={() =>
                      navigate({ to: "/classroom/$sessionId", params: { sessionId: s.id! } })
                    }
                  >
                    驾驶舱
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </div>
  );
}
