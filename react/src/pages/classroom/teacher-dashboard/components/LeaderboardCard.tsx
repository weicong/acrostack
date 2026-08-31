/**
 * 答题排行榜卡片：当前题目的答题速度与正确率排名。
 *
 * 排序规则（谁答得快、谁答得对就排前面）：
 * 1. 判对者最前，组内按用时升序；
 * 2. 判错者次之，组内同样按用时升序；
 * 3. 简答题等已提交但未判分的，排在已判分之后；
 * 4. 未提交学员垫底置灰（保持加入顺序）。
 *
 * 数据全部来自 DashboardDto.Participants（教师端即时可见判分结果），
 * 实时更新复用课堂面板既有的 DashboardUpdated / ParticipantChanged 推送，无需额外请求。
 */
import { useMemo } from "react";
import { Avatar, Badge, Card, Text, Title3, mergeClasses } from "@fluentui/react-components";
import {
  CheckmarkCircle20Filled,
  DismissCircle20Filled,
  PeopleAdd20Regular,
  Timer20Regular,
  Trophy20Regular,
} from "@fluentui/react-icons";
import type { ClassroomDtosParticipantStateDto } from "@/api/models/classroom/dtos/ParticipantStateDto";
import { useTeacherDashboardStyles } from "../styles/teacherDashboard";

interface LeaderboardEntry {
  participantId: string;
  nickname: string;
  studentNumber?: string | null;
  online: boolean;
  submitted: boolean;
  /** 答题用时（秒）；无法计算（缺 openedAt 等）时为 null，仍视为已提交。 */
  seconds: number | null;
  isCorrect?: boolean | null;
}

function formatSeconds(seconds: number): string {
  if (seconds < 60) return `${seconds.toFixed(1)}s`;
  const m = Math.floor(seconds / 60);
  const s = Math.round(seconds % 60);
  return `${m}分${String(s).padStart(2, "0")}秒`;
}

export function LeaderboardCard({
  participants,
  openedAt,
  questionNumber,
}: {
  participants: ClassroomDtosParticipantStateDto[];
  /** 当前题开放时间（计算答题速度的起点）。 */
  openedAt?: string | null;
  /** 当前题号（仅用于标题展示）。 */
  questionNumber?: number;
}) {
  const styles = useTeacherDashboardStyles();

  const entries = useMemo<LeaderboardEntry[]>(() => {
    const openedMs = openedAt ? Date.parse(openedAt) : Number.NaN;
    const rows = participants.map<LeaderboardEntry>((p) => {
      const submittedMs = p.submittedAt ? Date.parse(p.submittedAt) : Number.NaN;
      return {
        participantId: p.participantId ?? "",
        nickname: p.nickname ?? "匿名",
        studentNumber: p.studentNumber ?? null,
        online: p.onlineStatus === 1,
        submitted: Boolean(p.submittedAt),
        seconds:
          Number.isFinite(openedMs) && Number.isFinite(submittedMs)
            ? Math.max(0, (submittedMs - openedMs) / 1000)
            : null,
        isCorrect: p.isCorrect ?? null,
      };
    });

    // 分组：判对(0) -> 判错(1) -> 待判分(2) -> 未提交(3)；同组按用时升序，未提交保持原顺序
    const groupOf = (e: LeaderboardEntry) =>
      !e.submitted ? 3 : e.isCorrect === true ? 0 : e.isCorrect === false ? 1 : 2;
    return rows.sort((a, b) => {
      const ga = groupOf(a);
      const gb = groupOf(b);
      if (ga !== gb) return ga - gb;
      return (a.seconds ?? Number.POSITIVE_INFINITY) - (b.seconds ?? Number.POSITIVE_INFINITY);
    });
  }, [participants, openedAt]);

  const answeredCount = entries.filter((e) => e.submitted).length;

  return (
    <Card className={mergeClasses(styles.card, styles.cardDelay2)}>
      <div className={styles.cardHeader}>
        <div className={styles.cardTitleRow}>
          <Trophy20Regular className={styles.lbTitleIcon} />
          <Title3 as="h2">
            答题排行{questionNumber && questionNumber > 0 ? ` · 第 ${questionNumber} 题` : ""}
          </Title3>
        </div>
        <Text size={200} className={styles.statLabel}>
          {participants.length > 0 ? `${answeredCount}/${participants.length} 已提交 · ` : ""}
          答对更快者靠前
        </Text>
      </div>

      {participants.length === 0 ? (
        <div className={styles.emptyState}>
          <span className={styles.emptyIconWrap}>
            <PeopleAdd20Regular className={styles.emptyIcon} />
          </span>
          <Text size={300}>还没有学员加入，暂无排行</Text>
        </div>
      ) : (
        <div className={styles.leaderboard}>
          {entries.map((entry, index) => (
            <LeaderboardRow key={entry.participantId} entry={entry} rank={index + 1} />
          ))}
        </div>
      )}
    </Card>
  );
}

const MEDAL_CLASSES = ["lbRankGold", "lbRankSilver", "lbRankBronze"] as const;

function LeaderboardRow({ entry, rank }: { entry: LeaderboardEntry; rank: number }) {
  const styles = useTeacherDashboardStyles();
  const medalClass = rank <= 3 ? MEDAL_CLASSES[rank - 1] : undefined;

  return (
    <div
      className={mergeClasses(
        styles.lbRow,
        !entry.online && styles.lbRowOffline,
        entry.isCorrect === true && styles.lbRowCorrect,
      )}
    >
      <span className={mergeClasses(styles.lbRank, medalClass && styles[medalClass])}>{rank}</span>
      <Avatar name={entry.nickname} size={28} color="colorful" />
      <div className={styles.lbNameCol}>
        <Text className={styles.participantName}>{entry.nickname}</Text>
        {entry.studentNumber && (
          <Text size={200} className={styles.statLabel}>
            {entry.studentNumber}
          </Text>
        )}
      </div>
      {entry.submitted ? (
        <>
          {entry.seconds !== null && (
            <span className={styles.lbTime} title="答题用时">
              <Timer20Regular />
              {formatSeconds(entry.seconds)}
            </span>
          )}
          {entry.isCorrect == null ? (
            <Badge appearance="outline" color="warning">
              待判分
            </Badge>
          ) : entry.isCorrect ? (
            <CheckmarkCircle20Filled className={styles.correctIcon} aria-label="回答正确" />
          ) : (
            <DismissCircle20Filled className={styles.wrongIcon} aria-label="回答错误" />
          )}
        </>
      ) : (
        <Text size={200} className={styles.statLabel}>
          未作答
        </Text>
      )}
    </div>
  );
}
