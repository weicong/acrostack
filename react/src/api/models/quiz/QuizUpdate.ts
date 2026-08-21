/* oxlint-disable */

import type { ClassroomDtosCreateUpdateQuizDto } from "../classroom/dtos/CreateUpdateQuizDto";
import type { ClassroomDtosQuizDto } from "../classroom/dtos/QuizDto";
import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse";

export type QuizUpdatePath = {
  /**
   * @description
   * Format: `uuid`
   * @type string
   */
  id: string;
};

export type QuizUpdateStatus200Plain = ClassroomDtosQuizDto;

export type QuizUpdateStatus200Json = ClassroomDtosQuizDto;

export type QuizUpdateStatus200Json2 = ClassroomDtosQuizDto;

export type QuizUpdateStatus200 =
  | QuizUpdateStatus200Plain
  | QuizUpdateStatus200Json
  | QuizUpdateStatus200Json2;

export type QuizUpdateStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type QuizUpdateStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

export type QuizUpdateStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type QuizUpdateStatus400 =
  | QuizUpdateStatus400Plain
  | QuizUpdateStatus400Json
  | QuizUpdateStatus400Json2;

export type QuizUpdateStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type QuizUpdateStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

export type QuizUpdateStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type QuizUpdateStatus401 =
  | QuizUpdateStatus401Plain
  | QuizUpdateStatus401Json
  | QuizUpdateStatus401Json2;

export type QuizUpdateStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type QuizUpdateStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

export type QuizUpdateStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type QuizUpdateStatus403 =
  | QuizUpdateStatus403Plain
  | QuizUpdateStatus403Json
  | QuizUpdateStatus403Json2;

export type QuizUpdateStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type QuizUpdateStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

export type QuizUpdateStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type QuizUpdateStatus404 =
  | QuizUpdateStatus404Plain
  | QuizUpdateStatus404Json
  | QuizUpdateStatus404Json2;

export type QuizUpdateStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type QuizUpdateStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

export type QuizUpdateStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type QuizUpdateStatus500 =
  | QuizUpdateStatus500Plain
  | QuizUpdateStatus500Json
  | QuizUpdateStatus500Json2;

export type QuizUpdateStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type QuizUpdateStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

export type QuizUpdateStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type QuizUpdateStatus501 =
  | QuizUpdateStatus501Plain
  | QuizUpdateStatus501Json
  | QuizUpdateStatus501Json2;

export type QuizUpdateBodyJson = ClassroomDtosCreateUpdateQuizDto | undefined;

export type QuizUpdateBodyJson2 = ClassroomDtosCreateUpdateQuizDto | undefined;

export type QuizUpdateBodyJson3 = ClassroomDtosCreateUpdateQuizDto | undefined;

export type QuizUpdateBody = QuizUpdateBodyJson | QuizUpdateBodyJson2 | QuizUpdateBodyJson3;

export type QuizUpdateOptions = {
  body: QuizUpdateBody;
  path: QuizUpdatePath;
  query?: never;
  headers?: never;
};

export type QuizUpdateResponses = {
  "200":
    | {
        contentType: "text/plain";
        data: QuizUpdateStatus200Plain;
      }
    | {
        contentType: "application/json";
        data: QuizUpdateStatus200Json;
      }
    | {
        contentType: "text/json";
        data: QuizUpdateStatus200Json2;
      };
  "400":
    | {
        contentType: "text/plain";
        data: QuizUpdateStatus400Plain;
      }
    | {
        contentType: "application/json";
        data: QuizUpdateStatus400Json;
      }
    | {
        contentType: "text/json";
        data: QuizUpdateStatus400Json2;
      };
  "401":
    | {
        contentType: "text/plain";
        data: QuizUpdateStatus401Plain;
      }
    | {
        contentType: "application/json";
        data: QuizUpdateStatus401Json;
      }
    | {
        contentType: "text/json";
        data: QuizUpdateStatus401Json2;
      };
  "403":
    | {
        contentType: "text/plain";
        data: QuizUpdateStatus403Plain;
      }
    | {
        contentType: "application/json";
        data: QuizUpdateStatus403Json;
      }
    | {
        contentType: "text/json";
        data: QuizUpdateStatus403Json2;
      };
  "404":
    | {
        contentType: "text/plain";
        data: QuizUpdateStatus404Plain;
      }
    | {
        contentType: "application/json";
        data: QuizUpdateStatus404Json;
      }
    | {
        contentType: "text/json";
        data: QuizUpdateStatus404Json2;
      };
  "500":
    | {
        contentType: "text/plain";
        data: QuizUpdateStatus500Plain;
      }
    | {
        contentType: "application/json";
        data: QuizUpdateStatus500Json;
      }
    | {
        contentType: "text/json";
        data: QuizUpdateStatus500Json2;
      };
  "501":
    | {
        contentType: "text/plain";
        data: QuizUpdateStatus501Plain;
      }
    | {
        contentType: "application/json";
        data: QuizUpdateStatus501Json;
      }
    | {
        contentType: "text/json";
        data: QuizUpdateStatus501Json2;
      };
};

/**
 * @description Union of all possible responses
 */
export type QuizUpdateResponse =
  | QuizUpdateStatus200
  | QuizUpdateStatus400
  | QuizUpdateStatus401
  | QuizUpdateStatus403
  | QuizUpdateStatus404
  | QuizUpdateStatus500
  | QuizUpdateStatus501;
