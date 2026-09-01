/* oxlint-disable */

import type { ClassroomDtosTeacherQuestionHistoryDto } from "../classroom/dtos/TeacherQuestionHistoryDto";
import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse";

export type ClassSessionGetQuestionHistoryPath = {
  /**
   * @description
   * Format: `uuid`
   * @type string
   */
  id: string;
};

/**
 * @description 教师题目记录（本课堂全部题目，按题号排序）。
 * @type object
 */
export type ClassSessionGetQuestionHistoryStatus200Plain = ClassroomDtosTeacherQuestionHistoryDto;

/**
 * @description 教师题目记录（本课堂全部题目，按题号排序）。
 * @type object
 */
export type ClassSessionGetQuestionHistoryStatus200Json = ClassroomDtosTeacherQuestionHistoryDto;

/**
 * @description 教师题目记录（本课堂全部题目，按题号排序）。
 * @type object
 */
export type ClassSessionGetQuestionHistoryStatus200Json2 = ClassroomDtosTeacherQuestionHistoryDto;

export type ClassSessionGetQuestionHistoryStatus200 =
  | ClassSessionGetQuestionHistoryStatus200Plain
  | ClassSessionGetQuestionHistoryStatus200Json
  | ClassSessionGetQuestionHistoryStatus200Json2;

export type ClassSessionGetQuestionHistoryStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionGetQuestionHistoryStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionGetQuestionHistoryStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionGetQuestionHistoryStatus400 =
  | ClassSessionGetQuestionHistoryStatus400Plain
  | ClassSessionGetQuestionHistoryStatus400Json
  | ClassSessionGetQuestionHistoryStatus400Json2;

export type ClassSessionGetQuestionHistoryStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionGetQuestionHistoryStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionGetQuestionHistoryStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionGetQuestionHistoryStatus401 =
  | ClassSessionGetQuestionHistoryStatus401Plain
  | ClassSessionGetQuestionHistoryStatus401Json
  | ClassSessionGetQuestionHistoryStatus401Json2;

export type ClassSessionGetQuestionHistoryStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionGetQuestionHistoryStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionGetQuestionHistoryStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionGetQuestionHistoryStatus403 =
  | ClassSessionGetQuestionHistoryStatus403Plain
  | ClassSessionGetQuestionHistoryStatus403Json
  | ClassSessionGetQuestionHistoryStatus403Json2;

export type ClassSessionGetQuestionHistoryStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionGetQuestionHistoryStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionGetQuestionHistoryStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionGetQuestionHistoryStatus404 =
  | ClassSessionGetQuestionHistoryStatus404Plain
  | ClassSessionGetQuestionHistoryStatus404Json
  | ClassSessionGetQuestionHistoryStatus404Json2;

export type ClassSessionGetQuestionHistoryStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionGetQuestionHistoryStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionGetQuestionHistoryStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionGetQuestionHistoryStatus500 =
  | ClassSessionGetQuestionHistoryStatus500Plain
  | ClassSessionGetQuestionHistoryStatus500Json
  | ClassSessionGetQuestionHistoryStatus500Json2;

export type ClassSessionGetQuestionHistoryStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionGetQuestionHistoryStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionGetQuestionHistoryStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionGetQuestionHistoryStatus501 =
  | ClassSessionGetQuestionHistoryStatus501Plain
  | ClassSessionGetQuestionHistoryStatus501Json
  | ClassSessionGetQuestionHistoryStatus501Json2;

export type ClassSessionGetQuestionHistoryOptions = {
  body?: never;
  path: ClassSessionGetQuestionHistoryPath;
  query?: never;
  headers?: never;
};

export type ClassSessionGetQuestionHistoryResponses = {
  "200":
    | {
        contentType: "text/plain";
        data: ClassSessionGetQuestionHistoryStatus200Plain;
      }
    | {
        contentType: "application/json";
        data: ClassSessionGetQuestionHistoryStatus200Json;
      }
    | {
        contentType: "text/json";
        data: ClassSessionGetQuestionHistoryStatus200Json2;
      };
  "400":
    | {
        contentType: "text/plain";
        data: ClassSessionGetQuestionHistoryStatus400Plain;
      }
    | {
        contentType: "application/json";
        data: ClassSessionGetQuestionHistoryStatus400Json;
      }
    | {
        contentType: "text/json";
        data: ClassSessionGetQuestionHistoryStatus400Json2;
      };
  "401":
    | {
        contentType: "text/plain";
        data: ClassSessionGetQuestionHistoryStatus401Plain;
      }
    | {
        contentType: "application/json";
        data: ClassSessionGetQuestionHistoryStatus401Json;
      }
    | {
        contentType: "text/json";
        data: ClassSessionGetQuestionHistoryStatus401Json2;
      };
  "403":
    | {
        contentType: "text/plain";
        data: ClassSessionGetQuestionHistoryStatus403Plain;
      }
    | {
        contentType: "application/json";
        data: ClassSessionGetQuestionHistoryStatus403Json;
      }
    | {
        contentType: "text/json";
        data: ClassSessionGetQuestionHistoryStatus403Json2;
      };
  "404":
    | {
        contentType: "text/plain";
        data: ClassSessionGetQuestionHistoryStatus404Plain;
      }
    | {
        contentType: "application/json";
        data: ClassSessionGetQuestionHistoryStatus404Json;
      }
    | {
        contentType: "text/json";
        data: ClassSessionGetQuestionHistoryStatus404Json2;
      };
  "500":
    | {
        contentType: "text/plain";
        data: ClassSessionGetQuestionHistoryStatus500Plain;
      }
    | {
        contentType: "application/json";
        data: ClassSessionGetQuestionHistoryStatus500Json;
      }
    | {
        contentType: "text/json";
        data: ClassSessionGetQuestionHistoryStatus500Json2;
      };
  "501":
    | {
        contentType: "text/plain";
        data: ClassSessionGetQuestionHistoryStatus501Plain;
      }
    | {
        contentType: "application/json";
        data: ClassSessionGetQuestionHistoryStatus501Json;
      }
    | {
        contentType: "text/json";
        data: ClassSessionGetQuestionHistoryStatus501Json2;
      };
};

/**
 * @description Union of all possible responses
 */
export type ClassSessionGetQuestionHistoryResponse =
  | ClassSessionGetQuestionHistoryStatus200
  | ClassSessionGetQuestionHistoryStatus400
  | ClassSessionGetQuestionHistoryStatus401
  | ClassSessionGetQuestionHistoryStatus403
  | ClassSessionGetQuestionHistoryStatus404
  | ClassSessionGetQuestionHistoryStatus500
  | ClassSessionGetQuestionHistoryStatus501;
