/* oxlint-disable */

import type { ClassroomDtosCreateUpdateQuestionDto } from "../classroom/dtos/CreateUpdateQuestionDto";
import type { ClassroomDtosQuestionDto } from "../classroom/dtos/QuestionDto";
import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse";

export type QuestionUpdatePath = {
  /**
   * @description
   * Format: `uuid`
   * @type string
   */
  id: string;
};

export type QuestionUpdateStatus200Plain = ClassroomDtosQuestionDto;

export type QuestionUpdateStatus200Json = ClassroomDtosQuestionDto;

export type QuestionUpdateStatus200Json2 = ClassroomDtosQuestionDto;

export type QuestionUpdateStatus200 =
  | QuestionUpdateStatus200Plain
  | QuestionUpdateStatus200Json
  | QuestionUpdateStatus200Json2;

export type QuestionUpdateStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type QuestionUpdateStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

export type QuestionUpdateStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type QuestionUpdateStatus400 =
  | QuestionUpdateStatus400Plain
  | QuestionUpdateStatus400Json
  | QuestionUpdateStatus400Json2;

export type QuestionUpdateStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type QuestionUpdateStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

export type QuestionUpdateStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type QuestionUpdateStatus401 =
  | QuestionUpdateStatus401Plain
  | QuestionUpdateStatus401Json
  | QuestionUpdateStatus401Json2;

export type QuestionUpdateStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type QuestionUpdateStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

export type QuestionUpdateStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type QuestionUpdateStatus403 =
  | QuestionUpdateStatus403Plain
  | QuestionUpdateStatus403Json
  | QuestionUpdateStatus403Json2;

export type QuestionUpdateStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type QuestionUpdateStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

export type QuestionUpdateStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type QuestionUpdateStatus404 =
  | QuestionUpdateStatus404Plain
  | QuestionUpdateStatus404Json
  | QuestionUpdateStatus404Json2;

export type QuestionUpdateStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type QuestionUpdateStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

export type QuestionUpdateStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type QuestionUpdateStatus500 =
  | QuestionUpdateStatus500Plain
  | QuestionUpdateStatus500Json
  | QuestionUpdateStatus500Json2;

export type QuestionUpdateStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type QuestionUpdateStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

export type QuestionUpdateStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type QuestionUpdateStatus501 =
  | QuestionUpdateStatus501Plain
  | QuestionUpdateStatus501Json
  | QuestionUpdateStatus501Json2;

export type QuestionUpdateBodyJson = ClassroomDtosCreateUpdateQuestionDto | undefined;

export type QuestionUpdateBodyJson2 = ClassroomDtosCreateUpdateQuestionDto | undefined;

export type QuestionUpdateBodyJson3 = ClassroomDtosCreateUpdateQuestionDto | undefined;

export type QuestionUpdateBody =
  | QuestionUpdateBodyJson
  | QuestionUpdateBodyJson2
  | QuestionUpdateBodyJson3;

export type QuestionUpdateOptions = {
  body: QuestionUpdateBody;
  path: QuestionUpdatePath;
  query?: never;
  headers?: never;
};

export type QuestionUpdateResponses = {
  "200":
    | {
        contentType: "text/plain";
        data: QuestionUpdateStatus200Plain;
      }
    | {
        contentType: "application/json";
        data: QuestionUpdateStatus200Json;
      }
    | {
        contentType: "text/json";
        data: QuestionUpdateStatus200Json2;
      };
  "400":
    | {
        contentType: "text/plain";
        data: QuestionUpdateStatus400Plain;
      }
    | {
        contentType: "application/json";
        data: QuestionUpdateStatus400Json;
      }
    | {
        contentType: "text/json";
        data: QuestionUpdateStatus400Json2;
      };
  "401":
    | {
        contentType: "text/plain";
        data: QuestionUpdateStatus401Plain;
      }
    | {
        contentType: "application/json";
        data: QuestionUpdateStatus401Json;
      }
    | {
        contentType: "text/json";
        data: QuestionUpdateStatus401Json2;
      };
  "403":
    | {
        contentType: "text/plain";
        data: QuestionUpdateStatus403Plain;
      }
    | {
        contentType: "application/json";
        data: QuestionUpdateStatus403Json;
      }
    | {
        contentType: "text/json";
        data: QuestionUpdateStatus403Json2;
      };
  "404":
    | {
        contentType: "text/plain";
        data: QuestionUpdateStatus404Plain;
      }
    | {
        contentType: "application/json";
        data: QuestionUpdateStatus404Json;
      }
    | {
        contentType: "text/json";
        data: QuestionUpdateStatus404Json2;
      };
  "500":
    | {
        contentType: "text/plain";
        data: QuestionUpdateStatus500Plain;
      }
    | {
        contentType: "application/json";
        data: QuestionUpdateStatus500Json;
      }
    | {
        contentType: "text/json";
        data: QuestionUpdateStatus500Json2;
      };
  "501":
    | {
        contentType: "text/plain";
        data: QuestionUpdateStatus501Plain;
      }
    | {
        contentType: "application/json";
        data: QuestionUpdateStatus501Json;
      }
    | {
        contentType: "text/json";
        data: QuestionUpdateStatus501Json2;
      };
};

/**
 * @description Union of all possible responses
 */
export type QuestionUpdateResponse =
  | QuestionUpdateStatus200
  | QuestionUpdateStatus400
  | QuestionUpdateStatus401
  | QuestionUpdateStatus403
  | QuestionUpdateStatus404
  | QuestionUpdateStatus500
  | QuestionUpdateStatus501;
