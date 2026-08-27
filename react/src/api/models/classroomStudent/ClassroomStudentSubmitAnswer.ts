/* oxlint-disable */

import type { ClassroomDtosSubmitAnswerInputDto } from "../classroom/dtos/SubmitAnswerInputDto";
import type { ClassroomDtosSubmitAnswerResultDto } from "../classroom/dtos/SubmitAnswerResultDto";

export type ClassroomStudentSubmitAnswerPath = {
  /**
   * @description
   * Format: `uuid`
   * @type string
   */
  id: string;
};

export type ClassroomStudentSubmitAnswerStatus200Plain = ClassroomDtosSubmitAnswerResultDto;

export type ClassroomStudentSubmitAnswerStatus200Json = ClassroomDtosSubmitAnswerResultDto;

export type ClassroomStudentSubmitAnswerStatus200Json2 = ClassroomDtosSubmitAnswerResultDto;

export type ClassroomStudentSubmitAnswerStatus200 =
  | ClassroomStudentSubmitAnswerStatus200Plain
  | ClassroomStudentSubmitAnswerStatus200Json
  | ClassroomStudentSubmitAnswerStatus200Json2;

/**
 * @description 提交/修改答案 DTO。\r\nParticipantId 从令牌获取（禁止信任请求体）；ClientSubmittedAt 仅用于诊断，不用于截止判定。
 * @type object | undefined
 */
export type ClassroomStudentSubmitAnswerBodyJson = ClassroomDtosSubmitAnswerInputDto | undefined;

/**
 * @description 提交/修改答案 DTO。\r\nParticipantId 从令牌获取（禁止信任请求体）；ClientSubmittedAt 仅用于诊断，不用于截止判定。
 * @type object | undefined
 */
export type ClassroomStudentSubmitAnswerBodyJson2 = ClassroomDtosSubmitAnswerInputDto | undefined;

/**
 * @description 提交/修改答案 DTO。\r\nParticipantId 从令牌获取（禁止信任请求体）；ClientSubmittedAt 仅用于诊断，不用于截止判定。
 * @type object | undefined
 */
export type ClassroomStudentSubmitAnswerBodyJson3 = ClassroomDtosSubmitAnswerInputDto | undefined;

export type ClassroomStudentSubmitAnswerBody =
  | ClassroomStudentSubmitAnswerBodyJson
  | ClassroomStudentSubmitAnswerBodyJson2
  | ClassroomStudentSubmitAnswerBodyJson3;

export type ClassroomStudentSubmitAnswerOptions = {
  body: ClassroomStudentSubmitAnswerBody;
  path: ClassroomStudentSubmitAnswerPath;
  query?: never;
  headers?: never;
};

export type ClassroomStudentSubmitAnswerResponses = {
  "200":
    | {
        contentType: "text/plain";
        data: ClassroomStudentSubmitAnswerStatus200Plain;
      }
    | {
        contentType: "application/json";
        data: ClassroomStudentSubmitAnswerStatus200Json;
      }
    | {
        contentType: "text/json";
        data: ClassroomStudentSubmitAnswerStatus200Json2;
      };
};

/**
 * @description Union of all possible responses
 */
export type ClassroomStudentSubmitAnswerResponse = ClassroomStudentSubmitAnswerStatus200;
