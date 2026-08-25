/**
 * 课堂实时事件契约（与后端 Classroom.Application.Contracts/Realtime/ClassroomEvents.cs 对应）。
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
