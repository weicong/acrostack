/* oxlint-disable */

import type { ClassroomDtosClassSessionDto } from "../classroom/dtos/ClassSessionDto";
import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse";

export type ClassSessionCloseQuestionPath = {
  /**
   * @description
   * Format: `uuid`
   * @type string
   */
  id: string;
  /**
   * @description
   * Format: `uuid`
   * @type string
   */
  questionId: string;
};

export type ClassSessionCloseQuestionStatus200Plain = ClassroomDtosClassSessionDto;

export type ClassSessionCloseQuestionStatus200Json = ClassroomDtosClassSessionDto;

export type ClassSessionCloseQuestionStatus200Json2 = ClassroomDtosClassSessionDto;

export type ClassSessionCloseQuestionStatus200 =
  | ClassSessionCloseQuestionStatus200Plain
  | ClassSessionCloseQuestionStatus200Json
  | ClassSessionCloseQuestionStatus200Json2;

export type ClassSessionCloseQuestionStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionCloseQuestionStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionCloseQuestionStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionCloseQuestionStatus400 =
  | ClassSessionCloseQuestionStatus400Plain
  | ClassSessionCloseQuestionStatus400Json
  | ClassSessionCloseQuestionStatus400Json2;

export type ClassSessionCloseQuestionStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionCloseQuestionStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionCloseQuestionStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionCloseQuestionStatus401 =
  | ClassSessionCloseQuestionStatus401Plain
  | ClassSessionCloseQuestionStatus401Json
  | ClassSessionCloseQuestionStatus401Json2;

export type ClassSessionCloseQuestionStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionCloseQuestionStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionCloseQuestionStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionCloseQuestionStatus403 =
  | ClassSessionCloseQuestionStatus403Plain
  | ClassSessionCloseQuestionStatus403Json
  | ClassSessionCloseQuestionStatus403Json2;

export type ClassSessionCloseQuestionStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionCloseQuestionStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionCloseQuestionStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionCloseQuestionStatus404 =
  | ClassSessionCloseQuestionStatus404Plain
  | ClassSessionCloseQuestionStatus404Json
  | ClassSessionCloseQuestionStatus404Json2;

export type ClassSessionCloseQuestionStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionCloseQuestionStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionCloseQuestionStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionCloseQuestionStatus500 =
  | ClassSessionCloseQuestionStatus500Plain
  | ClassSessionCloseQuestionStatus500Json
  | ClassSessionCloseQuestionStatus500Json2;

export type ClassSessionCloseQuestionStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionCloseQuestionStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionCloseQuestionStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionCloseQuestionStatus501 =
  | ClassSessionCloseQuestionStatus501Plain
  | ClassSessionCloseQuestionStatus501Json
  | ClassSessionCloseQuestionStatus501Json2;

export type ClassSessionCloseQuestionOptions = {
  body?: never;
  path: ClassSessionCloseQuestionPath;
  query?: never;
  headers?: never;
};

export type ClassSessionCloseQuestionResponses = {
  "200":
    | {
        contentType: "text/plain";
        data: ClassSessionCloseQuestionStatus200Plain;
      }
    | {
        contentType: "application/json";
        data: ClassSessionCloseQuestionStatus200Json;
      }
    | {
        contentType: "text/json";
        data: ClassSessionCloseQuestionStatus200Json2;
      };
  "400":
    | {
        contentType: "text/plain";
        data: ClassSessionCloseQuestionStatus400Plain;
      }
    | {
        contentType: "application/json";
        data: ClassSessionCloseQuestionStatus400Json;
      }
    | {
        contentType: "text/json";
        data: ClassSessionCloseQuestionStatus400Json2;
      };
  "401":
    | {
        contentType: "text/plain";
        data: ClassSessionCloseQuestionStatus401Plain;
      }
    | {
        contentType: "application/json";
        data: ClassSessionCloseQuestionStatus401Json;
      }
    | {
        contentType: "text/json";
        data: ClassSessionCloseQuestionStatus401Json2;
      };
  "403":
    | {
        contentType: "text/plain";
        data: ClassSessionCloseQuestionStatus403Plain;
      }
    | {
        contentType: "application/json";
        data: ClassSessionCloseQuestionStatus403Json;
      }
    | {
        contentType: "text/json";
        data: ClassSessionCloseQuestionStatus403Json2;
      };
  "404":
    | {
        contentType: "text/plain";
        data: ClassSessionCloseQuestionStatus404Plain;
      }
    | {
        contentType: "application/json";
        data: ClassSessionCloseQuestionStatus404Json;
      }
    | {
        contentType: "text/json";
        data: ClassSessionCloseQuestionStatus404Json2;
      };
  "500":
    | {
        contentType: "text/plain";
        data: ClassSessionCloseQuestionStatus500Plain;
      }
    | {
        contentType: "application/json";
        data: ClassSessionCloseQuestionStatus500Json;
      }
    | {
        contentType: "text/json";
        data: ClassSessionCloseQuestionStatus500Json2;
      };
  "501":
    | {
        contentType: "text/plain";
        data: ClassSessionCloseQuestionStatus501Plain;
      }
    | {
        contentType: "application/json";
        data: ClassSessionCloseQuestionStatus501Json;
      }
    | {
        contentType: "text/json";
        data: ClassSessionCloseQuestionStatus501Json2;
      };
};

/**
 * @description Union of all possible responses
 */
export type ClassSessionCloseQuestionResponse =
  | ClassSessionCloseQuestionStatus200
  | ClassSessionCloseQuestionStatus400
  | ClassSessionCloseQuestionStatus401
  | ClassSessionCloseQuestionStatus403
  | ClassSessionCloseQuestionStatus404
  | ClassSessionCloseQuestionStatus500
  | ClassSessionCloseQuestionStatus501;
