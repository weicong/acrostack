/* oxlint-disable */

import type { ClassroomDtosStudentAnswerHistoryDto } from "../classroom/dtos/StudentAnswerHistoryDto";

export type ClassroomStudentGetMyAnswerHistoryPath = {
  /**
   * @description
   * Format: `uuid`
   * @type string
   */
  id: string;
};

/**
 * @description 学员答题记录（本课堂全部题目，按 Order 排序）。
 * @type object
 */
export type ClassroomStudentGetMyAnswerHistoryStatus200Plain = ClassroomDtosStudentAnswerHistoryDto;

/**
 * @description 学员答题记录（本课堂全部题目，按 Order 排序）。
 * @type object
 */
export type ClassroomStudentGetMyAnswerHistoryStatus200Json = ClassroomDtosStudentAnswerHistoryDto;

/**
 * @description 学员答题记录（本课堂全部题目，按 Order 排序）。
 * @type object
 */
export type ClassroomStudentGetMyAnswerHistoryStatus200Json2 = ClassroomDtosStudentAnswerHistoryDto;

export type ClassroomStudentGetMyAnswerHistoryStatus200 =
  | ClassroomStudentGetMyAnswerHistoryStatus200Plain
  | ClassroomStudentGetMyAnswerHistoryStatus200Json
  | ClassroomStudentGetMyAnswerHistoryStatus200Json2;

export type ClassroomStudentGetMyAnswerHistoryOptions = {
  body?: never;
  path: ClassroomStudentGetMyAnswerHistoryPath;
  query?: never;
  headers?: never;
};

export type ClassroomStudentGetMyAnswerHistoryResponses = {
  "200":
    | {
        contentType: "text/plain";
        data: ClassroomStudentGetMyAnswerHistoryStatus200Plain;
      }
    | {
        contentType: "application/json";
        data: ClassroomStudentGetMyAnswerHistoryStatus200Json;
      }
    | {
        contentType: "text/json";
        data: ClassroomStudentGetMyAnswerHistoryStatus200Json2;
      };
};

/**
 * @description Union of all possible responses
 */
export type ClassroomStudentGetMyAnswerHistoryResponse =
  ClassroomStudentGetMyAnswerHistoryStatus200;
