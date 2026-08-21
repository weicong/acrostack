/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse";

export type QuizDeletePath = {
  /**
   * @description
   * Format: `uuid`
   * @type string
   */
  id: string;
};

export type QuizDeleteStatus200 = unknown;

export type QuizDeleteStatus204 = unknown;

export type QuizDeleteStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type QuizDeleteStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

export type QuizDeleteStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type QuizDeleteStatus400 =
  | QuizDeleteStatus400Plain
  | QuizDeleteStatus400Json
  | QuizDeleteStatus400Json2;

export type QuizDeleteStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type QuizDeleteStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

export type QuizDeleteStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type QuizDeleteStatus401 =
  | QuizDeleteStatus401Plain
  | QuizDeleteStatus401Json
  | QuizDeleteStatus401Json2;

export type QuizDeleteStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type QuizDeleteStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

export type QuizDeleteStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type QuizDeleteStatus403 =
  | QuizDeleteStatus403Plain
  | QuizDeleteStatus403Json
  | QuizDeleteStatus403Json2;

export type QuizDeleteStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type QuizDeleteStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

export type QuizDeleteStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type QuizDeleteStatus404 =
  | QuizDeleteStatus404Plain
  | QuizDeleteStatus404Json
  | QuizDeleteStatus404Json2;

export type QuizDeleteStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type QuizDeleteStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

export type QuizDeleteStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type QuizDeleteStatus500 =
  | QuizDeleteStatus500Plain
  | QuizDeleteStatus500Json
  | QuizDeleteStatus500Json2;

export type QuizDeleteStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type QuizDeleteStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

export type QuizDeleteStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type QuizDeleteStatus501 =
  | QuizDeleteStatus501Plain
  | QuizDeleteStatus501Json
  | QuizDeleteStatus501Json2;

export type QuizDeleteOptions = {
  body?: never;
  path: QuizDeletePath;
  query?: never;
  headers?: never;
};

export type QuizDeleteResponses = {
  "200": QuizDeleteStatus200;
  "204": QuizDeleteStatus204;
  "400":
    | {
        contentType: "text/plain";
        data: QuizDeleteStatus400Plain;
      }
    | {
        contentType: "application/json";
        data: QuizDeleteStatus400Json;
      }
    | {
        contentType: "text/json";
        data: QuizDeleteStatus400Json2;
      };
  "401":
    | {
        contentType: "text/plain";
        data: QuizDeleteStatus401Plain;
      }
    | {
        contentType: "application/json";
        data: QuizDeleteStatus401Json;
      }
    | {
        contentType: "text/json";
        data: QuizDeleteStatus401Json2;
      };
  "403":
    | {
        contentType: "text/plain";
        data: QuizDeleteStatus403Plain;
      }
    | {
        contentType: "application/json";
        data: QuizDeleteStatus403Json;
      }
    | {
        contentType: "text/json";
        data: QuizDeleteStatus403Json2;
      };
  "404":
    | {
        contentType: "text/plain";
        data: QuizDeleteStatus404Plain;
      }
    | {
        contentType: "application/json";
        data: QuizDeleteStatus404Json;
      }
    | {
        contentType: "text/json";
        data: QuizDeleteStatus404Json2;
      };
  "500":
    | {
        contentType: "text/plain";
        data: QuizDeleteStatus500Plain;
      }
    | {
        contentType: "application/json";
        data: QuizDeleteStatus500Json;
      }
    | {
        contentType: "text/json";
        data: QuizDeleteStatus500Json2;
      };
  "501":
    | {
        contentType: "text/plain";
        data: QuizDeleteStatus501Plain;
      }
    | {
        contentType: "application/json";
        data: QuizDeleteStatus501Json;
      }
    | {
        contentType: "text/json";
        data: QuizDeleteStatus501Json2;
      };
};

/**
 * @description Union of all possible responses
 */
export type QuizDeleteResponse =
  | QuizDeleteStatus200
  | QuizDeleteStatus204
  | QuizDeleteStatus400
  | QuizDeleteStatus401
  | QuizDeleteStatus403
  | QuizDeleteStatus404
  | QuizDeleteStatus500
  | QuizDeleteStatus501;
