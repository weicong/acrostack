/* oxlint-disable */

import type { ClassroomDtosTeacherQuestionHistoryItemDto } from "./TeacherQuestionHistoryItemDto";

/**
 * @description 教师题目记录（本课堂全部题目，按题号排序）。
 * @type object
 */
export type ClassroomDtosTeacherQuestionHistoryDto = {
  /**
   * @description
   * Format: `uuid`
   * @type string | undefined
   */
  sessionId?: string;
  /**
   * @description
   * Format: `int32`
   * @type integer | undefined
   */
  questionCount?: number;
  items?: ClassroomDtosTeacherQuestionHistoryItemDto[] | null;
};
