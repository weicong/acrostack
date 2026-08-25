/**
 * 学员加入页（/student/join?code=xxx）。
 * 移动优先：输入课堂码 + 昵称 -> 加入课堂 -> 跳转学员答题页。
 * 支持从 JoinUrl 二维码链接直接带入课堂码。
 */
import { useEffect, useState } from "react";
import { useNavigate, useSearch } from "@tanstack/react-router";
import {
  Button,
  Card,
  Field,
  Input,
  Spinner,
  Text,
  Title1,
  makeStyles,
  tokens,
} from "@fluentui/react-components";
import { useToastController } from "@fluentui/react-components";
import { joinClassroom, classroomErrorMessage } from "../shared/utils/studentApi";
import { saveStudentSession } from "../shared/utils/studentSession";

const useStyles = makeStyles({
  page: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: tokens.spacingVerticalL,
    background: tokens.colorNeutralBackground2,
  },
  card: {
    width: "100%",
    maxWidth: "420px",
    padding: tokens.spacingVerticalXXL + " " + tokens.spacingHorizontalXL,
    display: "flex",
    flexDirection: "column",
    gap: tokens.spacingVerticalL,
  },
  center: { textAlign: "center" },
});

export function StudentJoinPage() {
  const styles = useStyles();
  const navigate = useNavigate();
  const { dispatchToast } = useToastController();

  const search = useSearch({ strict: false }) as { code?: string | undefined };
  const [classroomCode, setClassroomCode] = useState(search.code?.toUpperCase() ?? "");
  const [nickname, setNickname] = useState("");
  const [studentNumber, setStudentNumber] = useState("");
  const [joining, setJoining] = useState(false);

  // 若已存在该课堂的会话（刷新恢复），提示可继续
  useEffect(() => {
    if (search.code && localStorage.getItem(`classroom.student.${search.code}`)) {
      // 仅提示；课堂码不是 sessionId，无法直接恢复，由答题页按 sessionId 恢复
    }
  }, [search.code]);

  const canJoin = classroomCode.trim().length === 6 && nickname.trim().length > 0 && !joining;

  async function handleJoin() {
    setJoining(true);
    try {
      const result = await joinClassroom({
        classroomCode: classroomCode.trim().toUpperCase(),
        nickname: nickname.trim(),
        studentNumber: studentNumber.trim() || undefined,
      });

      saveStudentSession({
        sessionId: result.sessionId!,
        participantId: result.participantId!,
        nickname: result.nickname ?? nickname.trim(),
        accessToken: result.accessToken!,
        expiresInSeconds: result.expiresInSeconds ?? 0,
        storedAt: Date.now(),
      });

      dispatchToast("加入成功", { intent: "success" });
      void navigate({
        to: "/student/sessions/$sessionId",
        params: { sessionId: result.sessionId! },
      });
    } catch (err) {
      dispatchToast(`加入失败：${classroomErrorMessage(err)}`, { intent: "warning" });
      setJoining(false);
    }
  }

  return (
    <div className={styles.page}>
      <Card className={styles.card}>
        <div className={styles.center}>
          <Title1>加入课堂</Title1>
          <Text block size={300}>
            输入老师提供的 6 位课堂码
          </Text>
        </div>

        <Field label="课堂码" required>
          <Input
            value={classroomCode}
            onChange={(_, d) => setClassroomCode(d.value.toUpperCase().slice(0, 6))}
            placeholder="如 AB2C3D"
            size="large"
            autoFocus
          />
        </Field>

        <Field label="昵称" required>
          <Input
            value={nickname}
            onChange={(_, d) => setNickname(d.value.slice(0, 32))}
            placeholder="课堂上展示的名字"
            size="large"
          />
        </Field>

        <Field label="学号（选填）">
          <Input
            value={studentNumber}
            onChange={(_, d) => setStudentNumber(d.value.slice(0, 32))}
            placeholder="用于课后核对"
          />
        </Field>

        <Button
          appearance="primary"
          size="large"
          disabled={!canJoin}
          onClick={() => void handleJoin()}
        >
          {joining ? <Spinner size="tiny" /> : "加入课堂"}
        </Button>
      </Card>
    </div>
  );
}
