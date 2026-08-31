/**
 * 课堂实时常量：SignalR 客户端方法名、状态枚举值与中文标签。
 * 方法名与 Classroom.HttpApi/Realtime/IClassroomClient.cs 一致；
 * 枚举值与后端 ClassSessionStatus.cs / SessionQuestionStatus.cs 一致。
 */

/** 服务端推送的客户端方法名。 */
export const ClassroomClientMethods = {
  ClassroomStarted: "ClassroomStarted",
  QuestionOpened: "QuestionOpened",
  QuestionClosed: "QuestionClosed",
  StatisticsPublished: "StatisticsPublished",
  AnswerPublished: "AnswerPublished",
  ParticipantChanged: "ParticipantChanged",
  DashboardUpdated: "DashboardUpdated",
  ParticipantPicked: "ParticipantPicked",
  ClassroomEnded: "ClassroomEnded",
} as const;

/** 课堂状态枚举值。 */
export const ClassSessionStatusValue = {
  Preparing: 0,
  Waiting: 10,
  Answering: 20,
  Explaining: 30,
  Finished: 40,
} as const;

/** 题目状态枚举值。 */
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

export const onlineStatusLabel: Record<number, string> = {
  0: "离线",
  1: "在线",
};

export const participantAnswerStateLabel: Record<number, string> = {
  0: "未答",
  1: "作答中",
  2: "已提交",
};
