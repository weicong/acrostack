/**
 * 教师课堂列表页（/classroom）。
 *
 * 功能：
 * - 列出我的课堂（状态、课堂码、题数、当前题号）
 * - 选择试卷创建新课堂，创建成功后进入教师驾驶舱
 *
 * 本文件只负责编排：顶部创建入口见 components/TeacherSessionsToolbar，
 * 表格数据源见 hooks/useTeacherSessionsTable，样式见 styles/teacherSessions。
 *
 * 提示词四节"课堂管理"：创建课堂即从试卷复制题目生成 SessionQuestions；
 * 课堂码 6 位，用于学员加入。
 */
import { useNavigate } from "@tanstack/react-router";
import {
  Badge,
  Button,
  Spinner,
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableHeaderCell,
  TableRow,
  Text,
  tokens,
} from "@fluentui/react-components";
import { ClassSessionStatusValue, classSessionStatusLabel } from "../shared/constants/classroom";
import { useTeacherSessionsStyles } from "./styles/teacherSessions";
import { TeacherSessionsToolbar } from "./components/TeacherSessionsToolbar";
import { useTeacherSessionsTable } from "./hooks/useTeacherSessionsTable";

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
  const styles = useTeacherSessionsStyles();
  const navigate = useNavigate();
  const { sessions, isLoading, errorMessage } = useTeacherSessionsTable();

  return (
    <div className={styles.page}>
      <TeacherSessionsToolbar />

      {errorMessage && (
        <Text style={{ color: tokens.colorPaletteRedForeground1 }}>{errorMessage}</Text>
      )}

      {isLoading ? (
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
