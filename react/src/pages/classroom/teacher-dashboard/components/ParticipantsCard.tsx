/**
 * 学员列表卡片：在线状态、作答状态与对错标记；断线学员以灰色展示。
 */
import { Badge, Card, Text, Title3 } from "@fluentui/react-components";
import type { ClassroomDtosParticipantStateDto } from "@/api/models/classroom/dtos/ParticipantStateDto";
import { onlineStatusLabel, participantAnswerStateLabel } from "../constants/classroom";
import { useTeacherDashboardStyles } from "../styles/teacherDashboard";

export function ParticipantsCard({
  participants,
}: {
  participants: ClassroomDtosParticipantStateDto[];
}) {
  const styles = useTeacherDashboardStyles();

  return (
    <Card className={styles.card}>
      <div className={styles.header}>
        <Title3>学员（{participants.length}）</Title3>
        <Text size={200} className={styles.statLabel}>
          断线学员以灰色展示
        </Text>
      </div>
      {participants.length === 0 ? (
        <Text size={300}>还没有学员加入。等待学员通过课堂码加入。</Text>
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
  return (
    <div className={styles.participantRow} style={{ opacity: online ? 1 : 0.55 }}>
      <Badge appearance={online ? "filled" : "ghost"} color={online ? "success" : "subtle"}>
        {onlineStatusLabel[participant.onlineStatus ?? 0] ?? "未知"}
      </Badge>
      <Text weight="semibold" style={{ minWidth: "8em" }}>
        {participant.nickname ?? "匿名"}
      </Text>
      {participant.studentNumber && (
        <Text size={200} className={styles.statLabel}>
          {participant.studentNumber}
        </Text>
      )}
      <Badge
        appearance="outline"
        color={answerState === 2 ? "success" : answerState === 1 ? "informative" : "subtle"}
      >
        {participantAnswerStateLabel[answerState] ?? "未知"}
      </Badge>
      {participant.isCorrect != null && (
        <Badge appearance="outline" color={participant.isCorrect ? "success" : "danger"}>
          {participant.isCorrect ? "正确" : "错误"}
        </Badge>
      )}
      {participant.submittedAt && (
        <Text size={200} className={styles.statLabel}>
          {new Date(participant.submittedAt).toLocaleTimeString()}
        </Text>
      )}
    </div>
  );
}
