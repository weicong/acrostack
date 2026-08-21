/* oxlint-disable */

import type { ClassroomDtosQuizDto } from "../classroom/dtos/QuizDto";
import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse";

export type QuizGetPath = {
  /**
   * @description
   * Format: `uuid`
   * @type string
   */
  id: string;
};

export type QuizGetStatus200Plain = ClassroomDtosQuizDto;

export type QuizGetStatus200Json = ClassroomDtosQuizDto;

export type QuizGetStatus200Json2 = ClassroomDtosQuizDto;

export type QuizGetStatus200 = QuizGetStatus200Plain | QuizGetStatus200Json | QuizGetStatus200Json2;

export type QuizGetStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type QuizGetStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

export type QuizGetStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type QuizGetStatus400 = QuizGetStatus400Plain | QuizGetStatus400Json | QuizGetStatus400Json2;

export type QuizGetStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type QuizGetStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

export type QuizGetStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type QuizGetStatus401 = QuizGetStatus401Plain | QuizGetStatus401Json | QuizGetStatus401Json2;

export type QuizGetStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type QuizGetStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

export type QuizGetStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type QuizGetStatus403 = QuizGetStatus403Plain | QuizGetStatus403Json | QuizGetStatus403Json2;

export type QuizGetStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type QuizGetStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

export type QuizGetStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type QuizGetStatus404 = QuizGetStatus404Plain | QuizGetStatus404Json | QuizGetStatus404Json2;

export type QuizGetStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type QuizGetStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

export type QuizGetStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type QuizGetStatus500 = QuizGetStatus500Plain | QuizGetStatus500Json | QuizGetStatus500Json2;

export type QuizGetStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type QuizGetStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

export type QuizGetStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type QuizGetStatus501 = QuizGetStatus501Plain | QuizGetStatus501Json | QuizGetStatus501Json2;

export type QuizGetOptions = {
  body?: never;
  path: QuizGetPath;
  query?: never;
  headers?: never;
};

export type QuizGetResponses = {
  "200":
    | {
        contentType: "text/plain";
        data: QuizGetStatus200Plain;
      }
    | {
        contentType: "application/json";
        data: QuizGetStatus200Json;
      }
    | {
        contentType: "text/json";
        data: QuizGetStatus200Json2;
      };
  "400":
    | {
        contentType: "text/plain";
        data: QuizGetStatus400Plain;
      }
    | {
        contentType: "application/json";
        data: QuizGetStatus400Json;
      }
    | {
        contentType: "text/json";
        data: QuizGetStatus400Json2;
      };
  "401":
    | {
        contentType: "text/plain";
        data: QuizGetStatus401Plain;
      }
    | {
        contentType: "application/json";
        data: QuizGetStatus401Json;
      }
    | {
        contentType: "text/json";
        data: QuizGetStatus401Json2;
      };
  "403":
    | {
        contentType: "text/plain";
        data: QuizGetStatus403Plain;
      }
    | {
        contentType: "application/json";
        data: QuizGetStatus403Json;
      }
    | {
        contentType: "text/json";
        data: QuizGetStatus403Json2;
      };
  "404":
    | {
        contentType: "text/plain";
        data: QuizGetStatus404Plain;
      }
    | {
        contentType: "application/json";
        data: QuizGetStatus404Json;
      }
    | {
        contentType: "text/json";
        data: QuizGetStatus404Json2;
      };
  "500":
    | {
        contentType: "text/plain";
        data: QuizGetStatus500Plain;
      }
    | {
        contentType: "application/json";
        data: QuizGetStatus500Json;
      }
    | {
        contentType: "text/json";
        data: QuizGetStatus500Json2;
      };
  "501":
    | {
        contentType: "text/plain";
        data: QuizGetStatus501Plain;
      }
    | {
        contentType: "application/json";
        data: QuizGetStatus501Json;
      }
    | {
        contentType: "text/json";
        data: QuizGetStatus501Json2;
      };
};

/**
 * @description Union of all possible responses
 */
export type QuizGetResponse =
  | QuizGetStatus200
  | QuizGetStatus400
  | QuizGetStatus401
  | QuizGetStatus403
  | QuizGetStatus404
  | QuizGetStatus500
  | QuizGetStatus501;
