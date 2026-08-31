/**
 * 学员列表卡片：网格化头像卡片（投屏更直观）、在线状态、作答状态与对错标记；
 * 断线学员以灰色半透明展示。
 * 头部提供"随机选人"入口（不重复点名 + 手动重置本轮），被点到学员高亮展示。
 */
import {
  Avatar,
  Badge,
  Button,
  Card,
  Text,
  Title3,
  Tooltip,
  mergeClasses,
} from "@fluentui/react-components";
import {
  ArrowCounterclockwise20Regular,
  CheckmarkCircle20Filled,
  DismissCircle20Filled,
  PeopleAdd20Regular,
  PersonQuestionMark20Regular,
} from "@fluentui/react-icons";
import type { ClassroomDtosParticipantStateDto } from "@/api/models/classroom/dtos/ParticipantStateDto";
import { participantAnswerStateLabel } from "../../shared/constants/classroom";
import type { RandomPicker } from "../hooks/useRandomPicker";
import { useTeacherDashboardStyles } from "../styles/teacherDashboard";

export function ParticipantsCard({
  participants,
  picker,
}: {
  participants: ClassroomDtosParticipantStateDto[];
  picker: RandomPicker;
}) {
  const styles = useTeacherDashboardStyles();
  const onlineCount = participants.filter((p) => p.onlineStatus === 1).length;
  const pickedId = picker.picked?.participantId ?? null;
  const canPick = onlineCount > 0;

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
        <div className={styles.pickActions}>
          {picker.pickedIds.length > 0 && (
            <>
              <Text size={200} className={styles.statLabel}>
                已点 {picker.pickedOnlineCount}/{onlineCount}
              </Text>
              <Tooltip content="清空本轮已点名单，重新开始随机点名" relationship="label">
                <Button
                  size="small"
                  icon={<ArrowCounterclockwise20Regular />}
                  onClick={picker.reset}
                  disabled={picker.picking}
                >
                  重置本轮
                </Button>
              </Tooltip>
            </>
          )}
          <Tooltip
            content={canPick ? "从在线学员中随机抽一位现场回答" : "暂无在线学员可点名"}
            relationship="label"
          >
            <Button
              size="small"
              appearance="primary"
              icon={<PersonQuestionMark20Regular />}
              onClick={() => void picker.pick()}
              disabled={!canPick || picker.picking}
            >
              随机选人
            </Button>
          </Tooltip>
        </div>
      </div>
      {picker.picked && (
        <div className={styles.pickBanner} role="status">
          <Avatar name={picker.picked.nickname ?? "匿名"} size={28} color="colorful" />
          <div className={styles.pickBannerText}>
            <Text className={styles.pickBannerLabel}>随机点名</Text>
            <Text className={styles.pickBannerName}>
              请 {picker.picked.nickname ?? "匿名"}
              {picker.picked.studentNumber ? `（${picker.picked.studentNumber}）` : ""} 回答问题
            </Text>
          </div>
          <Badge appearance="ghost" color="brand">{`组${picker.picked.groupIndex ?? 1}`}</Badge>
        </div>
      )}
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
            <ParticipantRow
              key={p.participantId}
              participant={p}
              picked={p.participantId === pickedId}
            />
          ))}
        </div>
      )}
    </Card>
  );
}

function ParticipantRow({
  participant,
  picked,
}: {
  participant: ClassroomDtosParticipantStateDto;
  picked: boolean;
}) {
  const styles = useTeacherDashboardStyles();
  const online = participant.onlineStatus === 1;
  const answerState = participant.answerState ?? 0;
  const nickname = participant.nickname ?? "匿名";
  return (
    <div
      className={mergeClasses(
        styles.participantRow,
        !online && styles.participantRowOffline,
        picked && styles.participantRowPicked,
      )}
    >
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
        {picked ? (
          <Badge appearance="filled" color="brand">
            被点到
          </Badge>
        ) : participant.isCorrect != null ? (
          participant.isCorrect ? (
            <CheckmarkCircle20Filled className={styles.correctIcon} />
          ) : (
            <DismissCircle20Filled className={styles.wrongIcon} />
          )
        ) : null}
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
