/**
 * 我的课堂页（/student）：学员门户首页。
 * 列出加入过的课堂（进行中的排前）：进行中可一键进入（resume 换取课堂令牌），
 * 已结束的查看答题记录。本机无档案时引导去加入页。
 */
import { useCallback, useEffect, useState } from "react";
import { Link, useNavigate } from "@tanstack/react-router";
import {
  Badge,
  Button,
  Card,
  Spinner,
  Text,
  Title1,
  makeStyles,
  tokens,
  useToastController,
} from "@fluentui/react-components";
import { usePageTitle } from "@/lib/usePageTitle";
import type { ClassroomDtosMyClassroomItemDto } from "@/api/models/classroom/dtos/MyClassroomItemDto";
import {
  classroomErrorMessage,
  getMyClassrooms,
  resumeClassroom,
} from "../shared/utils/studentApi";
import { loadStudentProfile } from "../shared/utils/studentProfile";
import { saveStudentSession } from "../shared/utils/studentSession";
import { ClassSessionStatusValue, classSessionStatusLabel } from "../shared/constants/classroom";
import { StudentPortalTabs } from "./StudentPortalTabs";

const useStyles = makeStyles({
  page: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    padding: tokens.spacingVerticalL,
    paddingBottom: 0,
  },
  body: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    gap: tokens.spacingVerticalM,
    maxWidth: "480px",
    width: "100%",
    margin: "0 auto",
  },
  card: {
    padding: tokens.spacingVerticalL,
    display: "flex",
    flexDirection: "column",
    gap: tokens.spacingVerticalS,
  },
  itemHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: tokens.spacingHorizontalS,
  },
  itemMeta: {
    display: "flex",
    gap: tokens.spacingHorizontalS,
    flexWrap: "wrap",
  },
  footerNote: {
    textAlign: "center",
    padding: tokens.spacingVerticalM,
  },
});

function formatDateTime(value?: string | null): string {
  if (!value) return "";
  const d = new Date(value);
  if (Number.isNaN(d.getTime())) return "";
  return `${d.getMonth() + 1}月${d.getDate()}日 ${String(d.getHours()).padStart(2, "0")}:${String(d.getMinutes()).padStart(2, "0")}`;
}

/** 本地非空视图模型（生成的 DTO 字段可空，在边界处归一化）。 */
interface MyClassroomItem {
  sessionId: string;
  quizTitle: string;
  status: number;
  groupIndex: number;
  joinedAt?: string | null;
  questionCount: number;
  answeredCount: number;
}

function normalizeItem(i: ClassroomDtosMyClassroomItemDto): MyClassroomItem {
  return {
    sessionId: i.sessionId ?? "",
    quizTitle: i.quizTitle ?? "未命名课堂",
    status: i.status ?? 0,
    groupIndex: i.groupIndex ?? 0,
    joinedAt: i.joinedAt,
    questionCount: i.questionCount ?? 0,
    answeredCount: i.answeredCount ?? 0,
  };
}

export function StudentMyClassroomsPage() {
  const styles = useStyles();
  const navigate = useNavigate();
  const { dispatchToast } = useToastController();
  usePageTitle("我的课堂");

  const profile = loadStudentProfile();
  const [classrooms, setClassrooms] = useState<MyClassroomItem[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [entering, setEntering] = useState<string | null>(null);

  const refresh = useCallback(async () => {
    if (!profile) return;
    setLoading(true);
    try {
      const result = await getMyClassrooms(profile.studentToken);
      setClassrooms((result ?? []).map(normalizeItem));
      setError(null);
    } catch (err) {
      setError(classroomErrorMessage(err));
    } finally {
      setLoading(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (profile) void refresh();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function handleEnter(item: MyClassroomItem) {
    if (!profile || !item.sessionId) return;
    setEntering(item.sessionId);
    try {
      const result = await resumeClassroom(profile.studentToken, item.sessionId);
      if (!result.sessionId || !result.participantId || !result.accessToken) {
        throw new Error("进入课堂响应缺少会话信息");
      }
      saveStudentSession({
        sessionId: result.sessionId,
        participantId: result.participantId,
        nickname: result.nickname ?? profile.name,
        accessToken: result.accessToken,
        expiresInSeconds: result.expiresInSeconds ?? 0,
        storedAt: Date.now(),
      });
      void navigate({
        to: "/student/sessions/$sessionId",
        params: { sessionId: result.sessionId },
      });
    } catch (err) {
      dispatchToast(`进入课堂失败：${classroomErrorMessage(err)}`, { intent: "warning" });
      setEntering(null);
    }
  }

  if (!profile) {
    return (
      <div className={styles.page}>
        <div className={styles.body}>
          <Card className={styles.card}>
            <Title1>我的课堂</Title1>
            <Text block>
              本机还没有学员身份。加入任意课堂并登记信息后，即可在这里查看课堂与答题记录。
            </Text>
            <Button appearance="primary" size="large" as="a" href="/student/join">
              去加入课堂
            </Button>
          </Card>
        </div>
        <StudentPortalTabs />
      </div>
    );
  }

  return (
    <div className={styles.page}>
      <div className={styles.body}>
        <div>
          <Title1>我的课堂</Title1>
          <Text block size={300}>
            {profile.name}，欢迎回来
          </Text>
        </div>

        {loading && !classrooms && (
          <Card className={styles.card}>
            <div style={{ textAlign: "center" }}>
              <Spinner />
              <Text block>正在加载课堂…</Text>
            </div>
          </Card>
        )}

        {error && (
          <Card className={styles.card}>
            <Text block style={{ color: tokens.colorPaletteRedForeground1 }}>
              {error}
            </Text>
            <Button onClick={() => void refresh()}>重试</Button>
          </Card>
        )}

        {classrooms?.length === 0 && (
          <Card className={styles.card}>
            <Text block>还没有加入过课堂。输入老师的课堂码开始答题吧。</Text>
            <Button appearance="primary" as="a" href="/student/join">
              加入课堂
            </Button>
          </Card>
        )}

        {classrooms?.map((item) => {
          const finished = item.status === ClassSessionStatusValue.Finished;
          return (
            <Card key={item.sessionId} className={styles.card}>
              <div className={styles.itemHeader}>
                <Text weight="semibold" size={400}>
                  {item.quizTitle}
                </Text>
                <Badge
                  appearance="filled"
                  color={
                    finished
                      ? "subtle"
                      : item.status === ClassSessionStatusValue.Answering
                        ? "brand"
                        : "informative"
                  }
                >
                  {classSessionStatusLabel[item.status] ?? "未知状态"}
                </Badge>
              </div>
              <div className={styles.itemMeta}>
                {item.groupIndex > 0 && <Text size={300}>学习小组{item.groupIndex}</Text>}
                <Text size={300}>加入于 {formatDateTime(item.joinedAt)}</Text>
                {item.questionCount > 0 && (
                  <Text size={300}>
                    已答 {item.answeredCount}/{item.questionCount} 题
                  </Text>
                )}
              </div>
              {finished ? (
                <Button
                  onClick={() =>
                    void navigate({
                      to: "/student/classrooms/$sessionId",
                      params: { sessionId: item.sessionId },
                    })
                  }
                >
                  查看答题记录
                </Button>
              ) : (
                <Button
                  appearance="primary"
                  disabled={entering === item.sessionId}
                  onClick={() => void handleEnter(item)}
                >
                  {entering === item.sessionId ? <Spinner size="tiny" /> : "进入课堂"}
                </Button>
              )}
            </Card>
          );
        })}

        <Link to="/student/join" className={styles.footerNote}>
          <Text size={300}>输入课堂码加入新课堂 →</Text>
        </Link>
      </div>
      <StudentPortalTabs />
    </div>
  );
}
