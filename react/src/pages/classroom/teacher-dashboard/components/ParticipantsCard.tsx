/**
 * 学员列表卡片：网格化头像卡片（投屏更直观）、在线状态、作答状态与对错标记；
 * 断线学员以灰色半透明展示。
 */
import { Avatar, Badge, Card, Text, Title3, mergeClasses } from "@fluentui/react-components";
import {
  CheckmarkCircle20Filled,
  DismissCircle20Filled,
  PeopleAdd20Regular,
} from "@fluentui/react-icons";
import type { ClassroomDtosParticipantStateDto } from "@/api/models/classroom/dtos/ParticipantStateDto";
import { participantAnswerStateLabel } from "../../shared/constants/classroom";
import { useTeacherDashboardStyles } from "../styles/teacherDashboard";

export function ParticipantsCard({
  participants,
}: {
  participants: ClassroomDtosParticipantStateDto[];
}) {
  const styles = useTeacherDashboardStyles();
  const onlineCount = participants.filter((p) => p.onlineStatus === 1).length;

  return (
    <Card className={mergeClasses(styles.card, styles.cardDelay2)}>
      <div className={styles.cardHeader}>
        <div className={styles.cardTitleRow}>
          <Title3 as="h2">学员（{participants.length}）</Title3>
          {participants.length > 0 && (
            <Text size={200} className={styles.statLabel}>
              在线 {onlineCount}
            </Text>
          )}
        </div>
        <Text size={200} className={styles.statLabel}>
          断线学员以灰色展示
        </Text>
      </div>
      {participants.length === 0 ? (
        <div className={styles.emptyState}>
          <span className={styles.emptyIconWrap}>
            <PeopleAdd20Regular className={styles.emptyIcon} />
          </span>
          <Text size={300}>还没有学员加入，等待学员通过课堂码加入</Text>
        </div>
      ) : (
        <div className={styles.participants}>
          {participants.map((p) => (
            <ParticipantRow key={p.participantId} participant={p} />
          ))}
        </div>
      )}
    </Card>
  );
}

function ParticipantRow({ participant }: { participant: ClassroomDtosParticipantStateDto }) {
  const styles = useTeacherDashboardStyles();
  const online = participant.onlineStatus === 1;
  const answerState = participant.answerState ?? 0;
  const nickname = participant.nickname ?? "匿名";
  return (
    <div className={mergeClasses(styles.participantRow, !online && styles.participantRowOffline)}>
      <div className={styles.participantTop}>
        <div className={styles.avatarWrap}>
          <Avatar name={nickname} size={32} color="colorful" />
          <span
            className={mergeClasses(
              styles.onlineDot,
              online ? styles.onlineDotOn : styles.onlineDotOff,
            )}
          />
        </div>
        <div className={styles.participantNameCol}>
          <Text className={styles.participantName}>{nickname}</Text>
          {participant.studentNumber && (
            <Text size={200} className={styles.statLabel}>
              {participant.studentNumber}
            </Text>
          )}
        </div>
        {participant.isCorrect != null &&
          (participant.isCorrect ? (
            <CheckmarkCircle20Filled className={styles.correctIcon} />
          ) : (
            <DismissCircle20Filled className={styles.wrongIcon} />
          ))}
      </div>
      <div className={styles.participantBottom}>
        <Badge appearance="ghost" color="brand">
          {`组${participant.groupIndex ?? 1}`}
        </Badge>
        <Badge
          appearance="outline"
          color={answerState === 2 ? "success" : answerState === 1 ? "informative" : "subtle"}
        >
          {participantAnswerStateLabel[answerState] ?? "未知"}
        </Badge>
        {participant.submittedAt && (
          <Text size={200} className={styles.statLabel}>
            {new Date(participant.submittedAt).toLocaleTimeString()}
          </Text>
        )}
      </div>
    </div>
  );
}
