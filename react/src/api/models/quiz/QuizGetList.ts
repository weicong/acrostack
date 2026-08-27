/* oxlint-disable */

import type { PagedResultDtoOfClassroomDtosQuizDto } from "../pagedResultDtoOfClassroom/dtos/QuizDto";
import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse";

export type QuizGetListQuery = {
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

export type QuizGetListStatus200Plain = PagedResultDtoOfClassroomDtosQuizDto;

export type QuizGetListStatus200Json = PagedResultDtoOfClassroomDtosQuizDto;

export type QuizGetListStatus200Json2 = PagedResultDtoOfClassroomDtosQuizDto;

export type QuizGetListStatus200 =
  | QuizGetListStatus200Plain
  | QuizGetListStatus200Json
  | QuizGetListStatus200Json2;

export type QuizGetListStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type QuizGetListStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

export type QuizGetListStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type QuizGetListStatus400 =
  | QuizGetListStatus400Plain
  | QuizGetListStatus400Json
  | QuizGetListStatus400Json2;

export type QuizGetListStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type QuizGetListStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

export type QuizGetListStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type QuizGetListStatus401 =
  | QuizGetListStatus401Plain
  | QuizGetListStatus401Json
  | QuizGetListStatus401Json2;

export type QuizGetListStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type QuizGetListStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

export type QuizGetListStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type QuizGetListStatus403 =
  | QuizGetListStatus403Plain
  | QuizGetListStatus403Json
  | QuizGetListStatus403Json2;

export type QuizGetListStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type QuizGetListStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

export type QuizGetListStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type QuizGetListStatus404 =
  | QuizGetListStatus404Plain
  | QuizGetListStatus404Json
  | QuizGetListStatus404Json2;

export type QuizGetListStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type QuizGetListStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

export type QuizGetListStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type QuizGetListStatus500 =
  | QuizGetListStatus500Plain
  | QuizGetListStatus500Json
  | QuizGetListStatus500Json2;

export type QuizGetListStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type QuizGetListStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

export type QuizGetListStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type QuizGetListStatus501 =
  | QuizGetListStatus501Plain
  | QuizGetListStatus501Json
  | QuizGetListStatus501Json2;

export type QuizGetListOptions = {
  body?: never;
  path?: never;
  query?: QuizGetListQuery;
  headers?: never;
};

export type QuizGetListResponses = {
  "200":
    | {
        contentType: "text/plain";
        data: QuizGetListStatus200Plain;
      }
    | {
        contentType: "application/json";
        data: QuizGetListStatus200Json;
      }
    | {
        contentType: "text/json";
        data: QuizGetListStatus200Json2;
      };
  "400":
    | {
        contentType: "text/plain";
        data: QuizGetListStatus400Plain;
      }
    | {
        contentType: "application/json";
        data: QuizGetListStatus400Json;
      }
    | {
        contentType: "text/json";
        data: QuizGetListStatus400Json2;
      };
  "401":
    | {
        contentType: "text/plain";
        data: QuizGetListStatus401Plain;
      }
    | {
        contentType: "application/json";
        data: QuizGetListStatus401Json;
      }
    | {
        contentType: "text/json";
        data: QuizGetListStatus401Json2;
      };
  "403":
    | {
        contentType: "text/plain";
        data: QuizGetListStatus403Plain;
      }
    | {
        contentType: "application/json";
        data: QuizGetListStatus403Json;
      }
    | {
        contentType: "text/json";
        data: QuizGetListStatus403Json2;
      };
  "404":
    | {
        contentType: "text/plain";
        data: QuizGetListStatus404Plain;
      }
    | {
        contentType: "application/json";
        data: QuizGetListStatus404Json;
      }
    | {
        contentType: "text/json";
        data: QuizGetListStatus404Json2;
      };
  "500":
    | {
        contentType: "text/plain";
        data: QuizGetListStatus500Plain;
      }
    | {
        contentType: "application/json";
        data: QuizGetListStatus500Json;
      }
    | {
        contentType: "text/json";
        data: QuizGetListStatus500Json2;
      };
  "501":
    | {
        contentType: "text/plain";
        data: QuizGetListStatus501Plain;
      }
    | {
        contentType: "application/json";
        data: QuizGetListStatus501Json;
      }
    | {
        contentType: "text/json";
        data: QuizGetListStatus501Json2;
      };
};

/**
 * @description Union of all possible responses
 */
export type QuizGetListResponse =
  | QuizGetListStatus200
  | QuizGetListStatus400
  | QuizGetListStatus401
  | QuizGetListStatus403
  | QuizGetListStatus404
  | QuizGetListStatus500
  | QuizGetListStatus501;
