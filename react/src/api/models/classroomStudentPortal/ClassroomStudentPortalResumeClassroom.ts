/* oxlint-disable */

import type { ClassroomDtosResumeClassroomResultDto } from "../classroom/dtos/ResumeClassroomResultDto";

export type ClassroomStudentPortalResumeClassroomPath = {
  /**
   * @description
   * Format: `uuid`
   * @type string
   */
  sessionId: string;
};

/**
 * @description 从门户进入课堂：校验会员关系后签发课堂范围短期令牌。
 * @type object
 */
export type ClassroomStudentPortalResumeClassroomStatus200Plain =
  ClassroomDtosResumeClassroomResultDto;

/**
 * @description 从门户进入课堂：校验会员关系后签发课堂范围短期令牌。
 * @type object
 */
export type ClassroomStudentPortalResumeClassroomStatus200Json =
  ClassroomDtosResumeClassroomResultDto;

/**
 * @description 从门户进入课堂：校验会员关系后签发课堂范围短期令牌。
 * @type object
 */
export type ClassroomStudentPortalResumeClassroomStatus200Json2 =
  ClassroomDtosResumeClassroomResultDto;

export type ClassroomStudentPortalResumeClassroomStatus200 =
  | ClassroomStudentPortalResumeClassroomStatus200Plain
  | ClassroomStudentPortalResumeClassroomStatus200Json
  | ClassroomStudentPortalResumeClassroomStatus200Json2;

export type ClassroomStudentPortalResumeClassroomOptions = {
  body?: never;
  path: ClassroomStudentPortalResumeClassroomPath;
  query?: never;
  headers?: never;
};

export type ClassroomStudentPortalResumeClassroomResponses = {
  "200":
    | {
        contentType: "text/plain";
        data: ClassroomStudentPortalResumeClassroomStatus200Plain;
      }
    | {
        contentType: "application/json";
        data: ClassroomStudentPortalResumeClassroomStatus200Json;
      }
    | {
        contentType: "text/json";
        data: ClassroomStudentPortalResumeClassroomStatus200Json2;
      };
};

/**
 * @description Union of all possible responses
 */
export type ClassroomStudentPortalResumeClassroomResponse =
  ClassroomStudentPortalResumeClassroomStatus200;
