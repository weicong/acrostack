/**
 * 课堂答题记录页（/student/classrooms/:sessionId）：学员门户子页。
 * 复用答题页的 HistoryView 逐题回顾；数据经门户令牌获取（无需课堂令牌）。
 */
import { useCallback, useEffect, useState } from "react";
import { Link, useParams } from "@tanstack/react-router";
import { Button, Card, Text, Title2, makeStyles, tokens } from "@fluentui/react-components";
import { usePageTitle } from "@/lib/usePageTitle";
import type { ClassroomDtosStudentAnswerHistoryDto } from "@/api/models/classroom/dtos/StudentAnswerHistoryDto";
import { classroomErrorMessage, getMyClassroomAnswers } from "../shared/utils/studentApi";
import { loadStudentProfile } from "../shared/utils/studentProfile";
import { HistoryView } from "../student-session/components/HistoryView";

const useStyles = makeStyles({
  page: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    gap: tokens.spacingVerticalM,
    padding: tokens.spacingVerticalL,
  },
  header: {
    display: "flex",
    flexDirection: "column",
    gap: tokens.spacingVerticalXS,
  },
});

export function StudentClassroomHistoryPage() {
  const styles = useStyles();
  const { sessionId = "" } = useParams({ strict: false }) as { sessionId?: string };
  usePageTitle("答题记录");

  const profile = loadStudentProfile();
  const [history, setHistory] = useState<ClassroomDtosStudentAnswerHistoryDto | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const refresh = useCallback(async () => {
    if (!profile || !sessionId) return;
    setLoading(true);
    try {
      const result = await getMyClassroomAnswers(profile.studentToken, sessionId);
      setHistory(result);
      setError(null);
    } catch (err) {
      setError(classroomErrorMessage(err));
    } finally {
      setLoading(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sessionId]);

  useEffect(() => {
    void refresh();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <Button appearance="subtle" icon={<span aria-hidden>←</span>} as="a" href="/student">
          返回我的课堂
        </Button>
        <Title2 as="p" style={{ margin: 0 }}>
          答题记录
        </Title2>
      </div>

      {!profile ? (
        <Card>
          <Text block>
            本机还没有学员身份。<Link to="/student/join">先加入课堂</Link>后再查看记录。
          </Text>
        </Card>
      ) : (
        <HistoryView history={history} loading={loading} error={error} />
      )}
    </div>
  );
}
