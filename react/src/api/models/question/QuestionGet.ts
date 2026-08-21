/* oxlint-disable */

import type { ClassroomDtosQuestionDto } from "../classroom/dtos/QuestionDto";
import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse";

export type QuestionGetPath = {
  /**
   * @description
   * Format: `uuid`
   * @type string
   */
  id: string;
};

export type QuestionGetStatus200Plain = ClassroomDtosQuestionDto;

export type QuestionGetStatus200Json = ClassroomDtosQuestionDto;

export type QuestionGetStatus200Json2 = ClassroomDtosQuestionDto;

export type QuestionGetStatus200 =
  | QuestionGetStatus200Plain
  | QuestionGetStatus200Json
  | QuestionGetStatus200Json2;

export type QuestionGetStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type QuestionGetStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

export type QuestionGetStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type QuestionGetStatus400 =
  | QuestionGetStatus400Plain
  | QuestionGetStatus400Json
  | QuestionGetStatus400Json2;

export type QuestionGetStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type QuestionGetStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

export type QuestionGetStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type QuestionGetStatus401 =
  | QuestionGetStatus401Plain
  | QuestionGetStatus401Json
  | QuestionGetStatus401Json2;

export type QuestionGetStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type QuestionGetStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

export type QuestionGetStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type QuestionGetStatus403 =
  | QuestionGetStatus403Plain
  | QuestionGetStatus403Json
  | QuestionGetStatus403Json2;

export type QuestionGetStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type QuestionGetStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

export type QuestionGetStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type QuestionGetStatus404 =
  | QuestionGetStatus404Plain
  | QuestionGetStatus404Json
  | QuestionGetStatus404Json2;

export type QuestionGetStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type QuestionGetStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

export type QuestionGetStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type QuestionGetStatus500 =
  | QuestionGetStatus500Plain
  | QuestionGetStatus500Json
  | QuestionGetStatus500Json2;

export type QuestionGetStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type QuestionGetStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

export type QuestionGetStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type QuestionGetStatus501 =
  | QuestionGetStatus501Plain
  | QuestionGetStatus501Json
  | QuestionGetStatus501Json2;

export type QuestionGetOptions = {
  body?: never;
  path: QuestionGetPath;
  query?: never;
  headers?: never;
};

export type QuestionGetResponses = {
  "200":
    | {
        contentType: "text/plain";
        data: QuestionGetStatus200Plain;
      }
    | {
        contentType: "application/json";
        data: QuestionGetStatus200Json;
      }
    | {
        contentType: "text/json";
        data: QuestionGetStatus200Json2;
      };
  "400":
    | {
        contentType: "text/plain";
        data: QuestionGetStatus400Plain;
      }
    | {
        contentType: "application/json";
        data: QuestionGetStatus400Json;
      }
    | {
        contentType: "text/json";
        data: QuestionGetStatus400Json2;
      };
  "401":
    | {
        contentType: "text/plain";
        data: QuestionGetStatus401Plain;
      }
    | {
        contentType: "application/json";
        data: QuestionGetStatus401Json;
      }
    | {
        contentType: "text/json";
        data: QuestionGetStatus401Json2;
      };
  "403":
    | {
        contentType: "text/plain";
        data: QuestionGetStatus403Plain;
      }
    | {
        contentType: "application/json";
        data: QuestionGetStatus403Json;
      }
    | {
        contentType: "text/json";
        data: QuestionGetStatus403Json2;
      };
  "404":
    | {
        contentType: "text/plain";
        data: QuestionGetStatus404Plain;
      }
    | {
        contentType: "application/json";
        data: QuestionGetStatus404Json;
      }
    | {
        contentType: "text/json";
        data: QuestionGetStatus404Json2;
      };
  "500":
    | {
        contentType: "text/plain";
        data: QuestionGetStatus500Plain;
      }
    | {
        contentType: "application/json";
        data: QuestionGetStatus500Json;
      }
    | {
        contentType: "text/json";
        data: QuestionGetStatus500Json2;
      };
  "501":
    | {
        contentType: "text/plain";
        data: QuestionGetStatus501Plain;
      }
    | {
        contentType: "application/json";
        data: QuestionGetStatus501Json;
      }
    | {
        contentType: "text/json";
        data: QuestionGetStatus501Json2;
      };
};

/**
 * @description Union of all possible responses
 */
export type QuestionGetResponse =
  | QuestionGetStatus200
  | QuestionGetStatus400
  | QuestionGetStatus401
  | QuestionGetStatus403
  | QuestionGetStatus404
  | QuestionGetStatus500
  | QuestionGetStatus501;
