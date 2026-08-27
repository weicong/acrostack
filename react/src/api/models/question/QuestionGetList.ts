/* oxlint-disable */

import type { ClassroomQuestionType } from "../classroom/QuestionType";
import type { PagedResultDtoOfClassroomDtosQuestionDto } from "../pagedResultDtoOfClassroom/dtos/QuestionDto";
import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse";

export type QuestionGetListQuery = {
  /**
   * @description 题型：单选 / 多选 / 判断 / 简答（主观题不自动判分）。
   *
   * Format: `int32`
   * @type integer | undefined
   */
  Type?: ClassroomQuestionType;
  Filter?: string;
  Sorting?: string;
  /**
   * @description
   * Format: `int32`
   * @type integer | undefined
   */
  SkipCount?: number;
  /**
   * @description
   * Format: `int32`
   * @type integer | undefined
   */
  MaxResultCount?: number;
};

export type QuestionGetListStatus200Plain = PagedResultDtoOfClassroomDtosQuestionDto;

export type QuestionGetListStatus200Json = PagedResultDtoOfClassroomDtosQuestionDto;

export type QuestionGetListStatus200Json2 = PagedResultDtoOfClassroomDtosQuestionDto;

export type QuestionGetListStatus200 =
  | QuestionGetListStatus200Plain
  | QuestionGetListStatus200Json
  | QuestionGetListStatus200Json2;

export type QuestionGetListStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type QuestionGetListStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

export type QuestionGetListStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type QuestionGetListStatus400 =
  | QuestionGetListStatus400Plain
  | QuestionGetListStatus400Json
  | QuestionGetListStatus400Json2;

export type QuestionGetListStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type QuestionGetListStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

export type QuestionGetListStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type QuestionGetListStatus401 =
  | QuestionGetListStatus401Plain
  | QuestionGetListStatus401Json
  | QuestionGetListStatus401Json2;

export type QuestionGetListStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type QuestionGetListStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

export type QuestionGetListStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type QuestionGetListStatus403 =
  | QuestionGetListStatus403Plain
  | QuestionGetListStatus403Json
  | QuestionGetListStatus403Json2;

export type QuestionGetListStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type QuestionGetListStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

export type QuestionGetListStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type QuestionGetListStatus404 =
  | QuestionGetListStatus404Plain
  | QuestionGetListStatus404Json
  | QuestionGetListStatus404Json2;

export type QuestionGetListStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type QuestionGetListStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

export type QuestionGetListStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type QuestionGetListStatus500 =
  | QuestionGetListStatus500Plain
  | QuestionGetListStatus500Json
  | QuestionGetListStatus500Json2;

export type QuestionGetListStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type QuestionGetListStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

export type QuestionGetListStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type QuestionGetListStatus501 =
  | QuestionGetListStatus501Plain
  | QuestionGetListStatus501Json
  | QuestionGetListStatus501Json2;

export type QuestionGetListOptions = {
  body?: never;
  path?: never;
  query?: QuestionGetListQuery;
  headers?: never;
};

export type QuestionGetListResponses = {
  "200":
    | {
        contentType: "text/plain";
        data: QuestionGetListStatus200Plain;
      }
    | {
        contentType: "application/json";
        data: QuestionGetListStatus200Json;
      }
    | {
        contentType: "text/json";
        data: QuestionGetListStatus200Json2;
      };
  "400":
    | {
        contentType: "text/plain";
        data: QuestionGetListStatus400Plain;
      }
    | {
        contentType: "application/json";
        data: QuestionGetListStatus400Json;
      }
    | {
        contentType: "text/json";
        data: QuestionGetListStatus400Json2;
      };
  "401":
    | {
        contentType: "text/plain";
        data: QuestionGetListStatus401Plain;
      }
    | {
        contentType: "application/json";
        data: QuestionGetListStatus401Json;
      }
    | {
        contentType: "text/json";
        data: QuestionGetListStatus401Json2;
      };
  "403":
    | {
        contentType: "text/plain";
        data: QuestionGetListStatus403Plain;
      }
    | {
        contentType: "application/json";
        data: QuestionGetListStatus403Json;
      }
    | {
        contentType: "text/json";
        data: QuestionGetListStatus403Json2;
      };
  "404":
    | {
        contentType: "text/plain";
        data: QuestionGetListStatus404Plain;
      }
    | {
        contentType: "application/json";
        data: QuestionGetListStatus404Json;
      }
    | {
        contentType: "text/json";
        data: QuestionGetListStatus404Json2;
      };
  "500":
    | {
        contentType: "text/plain";
        data: QuestionGetListStatus500Plain;
      }
    | {
        contentType: "application/json";
        data: QuestionGetListStatus500Json;
      }
    | {
        contentType: "text/json";
        data: QuestionGetListStatus500Json2;
      };
  "501":
    | {
        contentType: "text/plain";
        data: QuestionGetListStatus501Plain;
      }
    | {
        contentType: "application/json";
        data: QuestionGetListStatus501Json;
      }
    | {
        contentType: "text/json";
        data: QuestionGetListStatus501Json2;
      };
};

/**
 * @description Union of all possible responses
 */
export type QuestionGetListResponse =
  | QuestionGetListStatus200
  | QuestionGetListStatus400
  | QuestionGetListStatus401
  | QuestionGetListStatus403
  | QuestionGetListStatus404
  | QuestionGetListStatus500
  | QuestionGetListStatus501;
