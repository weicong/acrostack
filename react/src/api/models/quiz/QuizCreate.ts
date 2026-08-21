/* oxlint-disable */

import type { ClassroomDtosCreateUpdateQuizDto } from "../classroom/dtos/CreateUpdateQuizDto";
import type { ClassroomDtosQuizDto } from "../classroom/dtos/QuizDto";
import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse";

export type QuizCreateStatus200Plain = ClassroomDtosQuizDto;

export type QuizCreateStatus200Json = ClassroomDtosQuizDto;

export type QuizCreateStatus200Json2 = ClassroomDtosQuizDto;

export type QuizCreateStatus200 =
  | QuizCreateStatus200Plain
  | QuizCreateStatus200Json
  | QuizCreateStatus200Json2;

export type QuizCreateStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type QuizCreateStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

export type QuizCreateStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type QuizCreateStatus400 =
  | QuizCreateStatus400Plain
  | QuizCreateStatus400Json
  | QuizCreateStatus400Json2;

export type QuizCreateStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type QuizCreateStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

export type QuizCreateStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type QuizCreateStatus401 =
  | QuizCreateStatus401Plain
  | QuizCreateStatus401Json
  | QuizCreateStatus401Json2;

export type QuizCreateStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type QuizCreateStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

export type QuizCreateStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type QuizCreateStatus403 =
  | QuizCreateStatus403Plain
  | QuizCreateStatus403Json
  | QuizCreateStatus403Json2;

export type QuizCreateStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type QuizCreateStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

export type QuizCreateStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type QuizCreateStatus404 =
  | QuizCreateStatus404Plain
  | QuizCreateStatus404Json
  | QuizCreateStatus404Json2;

export type QuizCreateStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type QuizCreateStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

export type QuizCreateStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type QuizCreateStatus500 =
  | QuizCreateStatus500Plain
  | QuizCreateStatus500Json
  | QuizCreateStatus500Json2;

export type QuizCreateStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type QuizCreateStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

export type QuizCreateStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type QuizCreateStatus501 =
  | QuizCreateStatus501Plain
  | QuizCreateStatus501Json
  | QuizCreateStatus501Json2;

export type QuizCreateBodyJson = ClassroomDtosCreateUpdateQuizDto | undefined;

export type QuizCreateBodyJson2 = ClassroomDtosCreateUpdateQuizDto | undefined;

export type QuizCreateBodyJson3 = ClassroomDtosCreateUpdateQuizDto | undefined;

export type QuizCreateBody = QuizCreateBodyJson | QuizCreateBodyJson2 | QuizCreateBodyJson3;

export type QuizCreateOptions = {
  body: QuizCreateBody;
  path?: never;
  query?: never;
  headers?: never;
};

export type QuizCreateResponses = {
  "200":
    | {
        contentType: "text/plain";
        data: QuizCreateStatus200Plain;
      }
    | {
        contentType: "application/json";
        data: QuizCreateStatus200Json;
      }
    | {
        contentType: "text/json";
        data: QuizCreateStatus200Json2;
      };
  "400":
    | {
        contentType: "text/plain";
        data: QuizCreateStatus400Plain;
      }
    | {
        contentType: "application/json";
        data: QuizCreateStatus400Json;
      }
    | {
        contentType: "text/json";
        data: QuizCreateStatus400Json2;
      };
  "401":
    | {
        contentType: "text/plain";
        data: QuizCreateStatus401Plain;
      }
    | {
        contentType: "application/json";
        data: QuizCreateStatus401Json;
      }
    | {
        contentType: "text/json";
        data: QuizCreateStatus401Json2;
      };
  "403":
    | {
        contentType: "text/plain";
        data: QuizCreateStatus403Plain;
      }
    | {
        contentType: "application/json";
        data: QuizCreateStatus403Json;
      }
    | {
        contentType: "text/json";
        data: QuizCreateStatus403Json2;
      };
  "404":
    | {
        contentType: "text/plain";
        data: QuizCreateStatus404Plain;
      }
    | {
        contentType: "application/json";
        data: QuizCreateStatus404Json;
      }
    | {
        contentType: "text/json";
        data: QuizCreateStatus404Json2;
      };
  "500":
    | {
        contentType: "text/plain";
        data: QuizCreateStatus500Plain;
      }
    | {
        contentType: "application/json";
        data: QuizCreateStatus500Json;
      }
    | {
        contentType: "text/json";
        data: QuizCreateStatus500Json2;
      };
  "501":
    | {
        contentType: "text/plain";
        data: QuizCreateStatus501Plain;
      }
    | {
        contentType: "application/json";
        data: QuizCreateStatus501Json;
      }
    | {
        contentType: "text/json";
        data: QuizCreateStatus501Json2;
      };
};

/**
 * @description Union of all possible responses
 */
export type QuizCreateResponse =
  | QuizCreateStatus200
  | QuizCreateStatus400
  | QuizCreateStatus401
  | QuizCreateStatus403
  | QuizCreateStatus404
  | QuizCreateStatus500
  | QuizCreateStatus501;
