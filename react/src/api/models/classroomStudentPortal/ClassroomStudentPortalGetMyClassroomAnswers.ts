/* oxlint-disable */

import type { ClassroomDtosStudentAnswerHistoryDto } from "../classroom/dtos/StudentAnswerHistoryDto";

export type ClassroomStudentPortalGetMyClassroomAnswersPath = {
  /**
   * @description
   * Format: `uuid`
   * @type string
   */
  sessionId: string;
};

/**
 * @description 学员答题记录（本课堂全部题目，按 Order 排序）。
 * @type object
 */
export type ClassroomStudentPortalGetMyClassroomAnswersStatus200Plain =
  ClassroomDtosStudentAnswerHistoryDto;

/**
 * @description 学员答题记录（本课堂全部题目，按 Order 排序）。
 * @type object
 */
export type ClassroomStudentPortalGetMyClassroomAnswersStatus200Json =
  ClassroomDtosStudentAnswerHistoryDto;

/**
 * @description 学员答题记录（本课堂全部题目，按 Order 排序）。
 * @type object
 */
export type ClassroomStudentPortalGetMyClassroomAnswersStatus200Json2 =
  ClassroomDtosStudentAnswerHistoryDto;

export type ClassroomStudentPortalGetMyClassroomAnswersStatus200 =
  | ClassroomStudentPortalGetMyClassroomAnswersStatus200Plain
  | ClassroomStudentPortalGetMyClassroomAnswersStatus200Json
  | ClassroomStudentPortalGetMyClassroomAnswersStatus200Json2;

export type ClassroomStudentPortalGetMyClassroomAnswersOptions = {
  body?: never;
  path: ClassroomStudentPortalGetMyClassroomAnswersPath;
  query?: never;
  headers?: never;
};

export type ClassroomStudentPortalGetMyClassroomAnswersResponses = {
  "200":
    | {
        contentType: "text/plain";
        data: ClassroomStudentPortalGetMyClassroomAnswersStatus200Plain;
      }
    | {
        contentType: "application/json";
        data: ClassroomStudentPortalGetMyClassroomAnswersStatus200Json;
      }
    | {
        contentType: "text/json";
        data: ClassroomStudentPortalGetMyClassroomAnswersStatus200Json2;
      };
};

/**
 * @description Union of all possible responses
 */
export type ClassroomStudentPortalGetMyClassroomAnswersResponse =
  ClassroomStudentPortalGetMyClassroomAnswersStatus200;
