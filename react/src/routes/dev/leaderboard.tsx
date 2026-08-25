/**
 * 【临时】排行榜排序逻辑测试页（/dev/leaderboard）。
 * 用模拟数据渲染 LeaderboardCard，人工/自动化核对排序是否符合预期，验证后应删除。
 */
import { createRoute } from "@tanstack/react-router";
import { makeStyles, Text, tokens } from "@fluentui/react-components";
import { Route as devRoute } from "./route";
import { LeaderboardCard } from "@/pages/classroom/teacher-dashboard/components/LeaderboardCard";
import type { ClassroomDtosParticipantStateDto } from "@/api/models/classroom/dtos/ParticipantStateDto";

const useDevStyles = makeStyles({
  root: {
    display: "flex",
    flexWrap: "wrap",
    gap: tokens.spacingHorizontalL,
    padding: tokens.spacingHorizontalL,
    alignItems: "flex-start",
  },
  panel: { width: "380px", display: "flex", flexDirection: "column", gap: tokens.spacingVerticalS },
  expect: {
    padding: tokens.spacingVerticalS,
    borderRadius: tokens.borderRadiusMedium,
    background: tokens.colorNeutralBackground3,
    fontSize: tokens.fontSizeBase200,
    lineHeight: "1.6",
  },
});

/** 场景一：主流程。openedAt = 10:00:00，用时 = submittedAt - openedAt。 */
const openedAt = "2026-08-25T10:00:00+08:00";
const at = (offsetSeconds: number) =>
  new Date(Date.parse(openedAt) + offsetSeconds * 1000).toISOString();

// 故意乱序构造，检验排序稳定性与分组
const mainParticipants: ClassroomDtosParticipantStateDto[] = [
  {
    participantId: "p-xiaohong",
    nickname: "小红",
    onlineStatus: 1,
    answerState: 2,
    submittedAt: at(3.1),
    revision: 1,
    isCorrect: false,
  }, // 最快但答错
  {
    participantId: "p-dashan",
    nickname: "大山",
    studentNumber: "2024008",
    onlineStatus: 1,
    answerState: 2,
    submittedAt: at(20.0),
    revision: 1,
    isCorrect: true,
  }, // 与小美同 20s，稳定序应排其输入顺序之后
  {
    participantId: "p-xiaoming",
    nickname: "小明",
    studentNumber: "2024001",
    onlineStatus: 1,
    answerState: 2,
    submittedAt: at(5.0),
    revision: 1,
    isCorrect: true,
  }, // 最快且对 → 第1
  {
    participantId: "p-aqiang",
    nickname: "阿强",
    onlineStatus: 1,
    answerState: 4,
    submittedAt: at(8.8),
    revision: 2,
    isCorrect: null,
  }, // 简答待判分
  {
    participantId: "p-xiaomei",
    nickname: "小美",
    studentNumber: "2024002",
    onlineStatus: 0,
    answerState: 2,
    submittedAt: at(20.0),
    revision: 1,
    isCorrect: true,
  }, // 离线已交
  { participantId: "p-xiaojun", nickname: "小军", onlineStatus: 0, answerState: 1 }, // 未作答+离线 → 垫底
  {
    participantId: "p-xiaogang",
    nickname: "小刚",
    studentNumber: "2024003",
    onlineStatus: 1,
    answerState: 3,
    submittedAt: at(30.2),
    revision: 3,
    isCorrect: false,
  }, // 改答仍错
  { participantId: "p-xiaohua", nickname: "小华", onlineStatus: 1, answerState: 1 }, // 未作答
];

/** 场景二：边界。openedAt 缺失（无时间起点）+ 提交早于开放（负时长需钳为 0）。 */
const clampOpenedAt = "2026-08-25T11:00:00+08:00";
const edgeParticipants: ClassroomDtosParticipantStateDto[] = [
  {
    participantId: "e-late",
    nickname: "迟到者",
    onlineStatus: 1,
    answerState: 2,
    submittedAt: "2026-08-25T10:59:50+08:00",
    revision: 1,
    isCorrect: true,
  }, // 早于开题 10s → 钳为 0.0s 排第一组首位
  {
    participantId: "e-normal",
    nickname: "正常者",
    onlineStatus: 1,
    answerState: 2,
    submittedAt: "2026-08-25T11:00:09.500+08:00",
    revision: 1,
    isCorrect: true,
  },
  {
    participantId: "e-wrong",
    nickname: "错答者",
    onlineStatus: 1,
    answerState: 2,
    submittedAt: "2026-08-25T11:00:01+08:00",
    revision: 1,
    isCorrect: false,
  },
];

function DevLeaderboardPage() {
  const styles = useDevStyles();
  return (
    <div className={styles.root}>
      <div className={styles.panel}>
        <Text as="h2" size={400} weight="semibold">
          场景一：速度 + 正确率混合排名（第 3 题）
        </Text>
        <LeaderboardCard participants={mainParticipants} openedAt={openedAt} questionNumber={3} />
        <div className={styles.expect}>
          预期（同组同用时按输入稳定序）：①小明(对 5.0s) ②大山(对 20.0s，与小美同秒、输入在前)
          ③小美(对 20.0s 离线) ④小红(错 3.1s 最快但错) ⑤小刚(错 30.2s 改答后仍错) ⑥阿强(待判分 8.8s)
          ⑦小军(未作答，输入在小华前) ⑧小华(未作答)
        </div>
      </div>
      <div className={styles.panel}>
        <Text as="h2" size={400} weight="semibold">
          场景二：边界情况
        </Text>
        <LeaderboardCard
          participants={edgeParticipants}
          openedAt={clampOpenedAt}
          questionNumber={4}
        />
        <div className={styles.expect}>
          预期：①迟到者(0.0s，提交早于开题被钳为 0) ②正常者(9.5s) ③错答者(1.0s 但答错垫底于判对组)
        </div>
      </div>
      <div className={styles.panel}>
        <Text as="h2" size={400} weight="semibold">
          场景三：openedAt 缺失 + 无学员
        </Text>
        <LeaderboardCard participants={edgeParticipants.slice(0, 1)} questionNumber={5} />
        <LeaderboardCard participants={[]} />
        <div className={styles.expect}>
          预期：上卡「迟到者」已提交但无 openedAt → 不显示用时、仍按判对组排首；下卡显示空态文案。
        </div>
      </div>
    </div>
  );
}

export const Route = createRoute({
  getParentRoute: () => devRoute,
  path: "/leaderboard",
  component: DevLeaderboardPage,
});
