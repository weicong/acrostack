/* oxlint-disable */

import type { ClassroomDtosCreateUpdateQuestionDto } from "../classroom/dtos/CreateUpdateQuestionDto";
import type { ClassroomDtosQuestionDto } from "../classroom/dtos/QuestionDto";
import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse";

export type QuestionCreateStatus200Plain = ClassroomDtosQuestionDto;

export type QuestionCreateStatus200Json = ClassroomDtosQuestionDto;

export type QuestionCreateStatus200Json2 = ClassroomDtosQuestionDto;

export type QuestionCreateStatus200 =
  | QuestionCreateStatus200Plain
  | QuestionCreateStatus200Json
  | QuestionCreateStatus200Json2;

export type QuestionCreateStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type QuestionCreateStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

export type QuestionCreateStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type QuestionCreateStatus400 =
  | QuestionCreateStatus400Plain
  | QuestionCreateStatus400Json
  | QuestionCreateStatus400Json2;

export type QuestionCreateStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type QuestionCreateStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

export type QuestionCreateStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type QuestionCreateStatus401 =
  | QuestionCreateStatus401Plain
  | QuestionCreateStatus401Json
  | QuestionCreateStatus401Json2;

export type QuestionCreateStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type QuestionCreateStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

export type QuestionCreateStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type QuestionCreateStatus403 =
  | QuestionCreateStatus403Plain
  | QuestionCreateStatus403Json
  | QuestionCreateStatus403Json2;

export type QuestionCreateStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type QuestionCreateStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

export type QuestionCreateStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type QuestionCreateStatus404 =
  | QuestionCreateStatus404Plain
  | QuestionCreateStatus404Json
  | QuestionCreateStatus404Json2;

export type QuestionCreateStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type QuestionCreateStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

export type QuestionCreateStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type QuestionCreateStatus500 =
  | QuestionCreateStatus500Plain
  | QuestionCreateStatus500Json
  | QuestionCreateStatus500Json2;

export type QuestionCreateStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type QuestionCreateStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

export type QuestionCreateStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type QuestionCreateStatus501 =
  | QuestionCreateStatus501Plain
  | QuestionCreateStatus501Json
  | QuestionCreateStatus501Json2;

export type QuestionCreateBodyJson = ClassroomDtosCreateUpdateQuestionDto | undefined;

export type QuestionCreateBodyJson2 = ClassroomDtosCreateUpdateQuestionDto | undefined;

export type QuestionCreateBodyJson3 = ClassroomDtosCreateUpdateQuestionDto | undefined;

export type QuestionCreateBody =
  | QuestionCreateBodyJson
  | QuestionCreateBodyJson2
  | QuestionCreateBodyJson3;

export type QuestionCreateOptions = {
  body: QuestionCreateBody;
  path?: never;
  query?: never;
  headers?: never;
};

export type QuestionCreateResponses = {
  "200":
    | {
        contentType: "text/plain";
        data: QuestionCreateStatus200Plain;
      }
    | {
        contentType: "application/json";
        data: QuestionCreateStatus200Json;
      }
    | {
        contentType: "text/json";
        data: QuestionCreateStatus200Json2;
      };
  "400":
    | {
        contentType: "text/plain";
        data: QuestionCreateStatus400Plain;
      }
    | {
        contentType: "application/json";
        data: QuestionCreateStatus400Json;
      }
    | {
        contentType: "text/json";
        data: QuestionCreateStatus400Json2;
      };
  "401":
    | {
        contentType: "text/plain";
        data: QuestionCreateStatus401Plain;
      }
    | {
        contentType: "application/json";
        data: QuestionCreateStatus401Json;
      }
    | {
        contentType: "text/json";
        data: QuestionCreateStatus401Json2;
      };
  "403":
    | {
        contentType: "text/plain";
        data: QuestionCreateStatus403Plain;
      }
    | {
        contentType: "application/json";
        data: QuestionCreateStatus403Json;
      }
    | {
        contentType: "text/json";
        data: QuestionCreateStatus403Json2;
      };
  "404":
    | {
        contentType: "text/plain";
        data: QuestionCreateStatus404Plain;
      }
    | {
        contentType: "application/json";
        data: QuestionCreateStatus404Json;
      }
    | {
        contentType: "text/json";
        data: QuestionCreateStatus404Json2;
      };
  "500":
    | {
        contentType: "text/plain";
        data: QuestionCreateStatus500Plain;
      }
    | {
        contentType: "application/json";
        data: QuestionCreateStatus500Json;
      }
    | {
        contentType: "text/json";
        data: QuestionCreateStatus500Json2;
      };
  "501":
    | {
        contentType: "text/plain";
        data: QuestionCreateStatus501Plain;
      }
    | {
        contentType: "application/json";
        data: QuestionCreateStatus501Json;
      }
    | {
        contentType: "text/json";
        data: QuestionCreateStatus501Json2;
      };
};

/**
 * @description Union of all possible responses
 */
export type QuestionCreateResponse =
  | QuestionCreateStatus200
  | QuestionCreateStatus400
  | QuestionCreateStatus401
  | QuestionCreateStatus403
  | QuestionCreateStatus404
  | QuestionCreateStatus500
  | QuestionCreateStatus501;
