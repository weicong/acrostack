/**
 * 课堂实时事件契约（与后端 Classroom.Application.Contracts/Realtime/ClassroomEvents.cs 对应）。
 * SignalR 客户端方法名与 Classroom.HttpApi/Realtime/IClassroomClient.cs 的方法名一致。
 */
import type { ClassroomDtosDashboardDto } from "@/api/models/classroom/dtos/DashboardDto";
import type { ClassroomDtosQuestionViewDto } from "@/api/models/classroom/dtos/QuestionViewDto";

/** 事件公共字段（所有课堂级事件携带）。 */
export interface ClassroomEventBase {
  sessionId: string;
  /** 事件产生时的课堂版本号；客户端发现不连续时重新拉取快照。 */
  version: number;
  serverTime: string;
  /** 事件唯一 Id，用于客户端去重。 */
  eventId: string;
}

export interface ClassroomStartedEvent extends ClassroomEventBase {}

export interface ClassroomEndedEvent extends ClassroomEventBase {}

export interface QuestionOpenedEvent extends ClassroomEventBase {
  sessionQuestionId: string;
  question: ClassroomDtosQuestionViewDto;
  openedAt: string;
  endsAt: string;
}

export interface QuestionClosedEvent extends ClassroomEventBase {
  sessionQuestionId: string;
}

export interface StatisticsPublishedEvent extends ClassroomEventBase {
  sessionQuestionId: string;
  optionCounts: Record<string, number>;
  submittedCount: number;
  totalParticipants: number;
}

export interface AnswerPublishedEvent extends ClassroomEventBase {
  sessionQuestionId: string;
  correctAnswer: string;
  explanation?: string | null;
}

export interface ParticipantChangedEvent extends ClassroomEventBase {
  participantId: string;
  nickname: string;
  onlineStatus: number;
  answerState: number;
  submittedAt?: string | null;
}

export interface DashboardUpdatedEvent extends ClassroomEventBase {
  dashboard: ClassroomDtosDashboardDto;
}

/** 服务端推送的客户端方法名（与 IClassroomClient.cs 一致）。 */
export const ClassroomClientMethods = {
  ClassroomStarted: "ClassroomStarted",
  QuestionOpened: "QuestionOpened",
  QuestionClosed: "QuestionClosed",
  StatisticsPublished: "StatisticsPublished",
  AnswerPublished: "AnswerPublished",
  ParticipantChanged: "ParticipantChanged",
  DashboardUpdated: "DashboardUpdated",
  ClassroomEnded: "ClassroomEnded",
} as const;

/** 课堂状态枚举值（与 ClassSessionStatus.cs 一致）。 */
export const ClassSessionStatusValue = {
  Preparing: 0,
  Waiting: 10,
  Answering: 20,
  Explaining: 30,
  Finished: 40,
} as const;

/** 题目状态枚举值（与 SessionQuestionStatus.cs 一致）。 */
export const SessionQuestionStatusValue = {
  Pending: 0,
  Open: 10,
  Closed: 20,
  StatisticsPublished: 30,
  AnswerPublished: 40,
} as const;

export const classSessionStatusLabel: Record<number, string> = {
  [ClassSessionStatusValue.Preparing]: "未开始",
  [ClassSessionStatusValue.Waiting]: "等待开题",
  [ClassSessionStatusValue.Answering]: "答题中",
  [ClassSessionStatusValue.Explaining]: "讲评中",
  [ClassSessionStatusValue.Finished]: "已结束",
};

export const questionTypeLabel: Record<number, string> = {
  1: "单选题",
  2: "多选题",
  3: "判断题",
  4: "简答题",
};

export const onlineStatusLabel: Record<number, string> = {
  0: "离线",
  1: "在线",
};

export const participantAnswerStateLabel: Record<number, string> = {
  0: "未答",
  1: "作答中",
  2: "已提交",
};
