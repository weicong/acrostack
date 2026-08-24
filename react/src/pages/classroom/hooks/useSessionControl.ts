/**
 * 教师课堂控制聚合 hook：封装 7 个 Kubb mutation、busy 状态、
 * 状态机可用性标志与投屏/复制课堂码等动作。
 *
 * 前端禁用只是体验优化；服务端仍会校验状态机与权限。
 */
import { useState } from "react";
import { useToastController } from "@fluentui/react-components";
import { useClassSessionStart } from "@/api/hooks/classSession/useClassSessionStart";
import { useClassSessionNextQuestion } from "@/api/hooks/classSession/useClassSessionNextQuestion";
import { useClassSessionCloseQuestion } from "@/api/hooks/classSession/useClassSessionCloseQuestion";
import { useClassSessionPublishStatistics } from "@/api/hooks/classSession/useClassSessionPublishStatistics";
import { useClassSessionPublishAnswer } from "@/api/hooks/classSession/useClassSessionPublishAnswer";
import { useClassSessionFinish } from "@/api/hooks/classSession/useClassSessionFinish";
import { useClassSessionCreatePresentationToken } from "@/api/hooks/classSession/useClassSessionCreatePresentationToken";
import { extractAbpErrorMessage } from "@/lib/api/error";
import { ClassSessionStatusValue, SessionQuestionStatusValue } from "../constants/classroom";
import type { ClassroomDtosQuestionViewDto } from "@/api/models/classroom/dtos/QuestionViewDto";

export interface UseSessionControlOptions {
  sessionId: string;
  /** 课堂状态枚举值。 */
  status: number;
  /** 当前题视图；为空表示暂无开放题目。 */
  question: ClassroomDtosQuestionViewDto | null;
  /** 当前题目状态枚举值。 */
  questionStatus: number;
  currentQuestionNumber: number;
  questionCount: number;
  classroomCode?: string | null;
  /** 操作成功后重新拉取教师快照校准。 */
  refreshSnapshot: () => Promise<unknown>;
}

/** useSessionControl 的返回类型，供展示组件消费。 */
export type SessionControl = ReturnType<typeof useSessionControl>;

export function useSessionControl(options: UseSessionControlOptions) {
  const {
    sessionId,
    status,
    question,
    questionStatus,
    currentQuestionNumber,
    questionCount,
    classroomCode,
    refreshSnapshot,
  } = options;
  const { dispatchToast } = useToastController();
  const [busyAction, setBusyAction] = useState<string | null>(null);

  const startMutation = useClassSessionStart();
  const nextMutation = useClassSessionNextQuestion();
  const closeQuestionMutation = useClassSessionCloseQuestion();
  const publishStatisticsMutation = useClassSessionPublishStatistics();
  const publishAnswerMutation = useClassSessionPublishAnswer();
  const finishMutation = useClassSessionFinish();
  const presentationTokenMutation = useClassSessionCreatePresentationToken();

  async function run(name: string, action: () => Promise<unknown>) {
    if (busyAction) return;
    setBusyAction(name);
    try {
      await action();
      await refreshSnapshot();
    } catch (err) {
      dispatchToast(`操作失败：${extractAbpErrorMessage(err)}`, { intent: "error" });
    } finally {
      setBusyAction(null);
    }
  }

  // 可用性标志（由快照派生）
  const hasOpenQuestion = questionStatus === SessionQuestionStatusValue.Open;
  const canStart = status === ClassSessionStatusValue.Preparing;
  const canNext =
    !canStart &&
    status !== ClassSessionStatusValue.Finished &&
    !hasOpenQuestion &&
    currentQuestionNumber < questionCount;
  const canClose = hasOpenQuestion;
  const canPublishStatistics =
    question !== null &&
    (questionStatus === SessionQuestionStatusValue.Closed ||
      questionStatus === SessionQuestionStatusValue.StatisticsPublished);
  const canPublishAnswer =
    question !== null &&
    (questionStatus === SessionQuestionStatusValue.Closed ||
      questionStatus === SessionQuestionStatusValue.StatisticsPublished);
  const canFinish =
    status !== ClassSessionStatusValue.Preparing && status !== ClassSessionStatusValue.Finished;

  async function runStart() {
    await run("start", () => startMutation.mutateAsync({ path: { id: sessionId } }));
  }

  async function runNext(durationSeconds?: number) {
    await run("next", () =>
      nextMutation.mutateAsync({
        path: { id: sessionId },
        body: { durationSeconds },
      }),
    );
  }

  async function runClose() {
    if (!question?.sessionQuestionId) return;
    const sessionQuestionId = question.sessionQuestionId;
    await run("close", () =>
      closeQuestionMutation.mutateAsync({ path: { id: sessionId, questionId: sessionQuestionId } }),
    );
  }

  async function runPublishStatistics() {
    if (!question?.sessionQuestionId) return;
    const sessionQuestionId = question.sessionQuestionId;
    await run("publishStats", () =>
      publishStatisticsMutation.mutateAsync({
        path: { id: sessionId, questionId: sessionQuestionId },
      }),
    );
  }

  async function runPublishAnswer() {
    if (!question?.sessionQuestionId) return;
    const sessionQuestionId = question.sessionQuestionId;
    await run("publishAnswer", () =>
      publishAnswerMutation.mutateAsync({ path: { id: sessionId, questionId: sessionQuestionId } }),
    );
  }

  async function runFinish() {
    await run("finish", () => finishMutation.mutateAsync({ path: { id: sessionId } }));
  }

  async function copyClassroomCode() {
    try {
      await navigator.clipboard.writeText(`课堂码：${classroomCode ?? ""}`);
      dispatchToast("已复制课堂码", { intent: "success" });
    } catch {
      dispatchToast(`复制失败，课堂码：${classroomCode ?? ""}`, { intent: "warning" });
    }
  }

  async function openPresentation() {
    if (busyAction) return;
    setBusyAction("presentation");
    try {
      const result = await presentationTokenMutation.mutateAsync({ path: { id: sessionId } });
      if (!result.accessToken) throw new Error("服务端未返回投屏令牌");
      window.open(
        `/presentation/${sessionId}?t=${encodeURIComponent(result.accessToken)}`,
        "_blank",
        "noopener",
      );
    } catch (err) {
      dispatchToast(`投屏令牌生成失败：${extractAbpErrorMessage(err)}`, { intent: "error" });
    } finally {
      setBusyAction(null);
    }
  }

  return {
    busyAction,
    hasOpenQuestion,
    canStart,
    canNext,
    canClose,
    canPublishStatistics,
    canPublishAnswer,
    canFinish,
    runStart,
    runNext,
    runClose,
    runPublishStatistics,
    runPublishAnswer,
    runFinish,
    copyClassroomCode,
    openPresentation,
  };
}
