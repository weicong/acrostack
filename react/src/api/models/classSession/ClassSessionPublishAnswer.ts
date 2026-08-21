/* oxlint-disable */

import type { ClassroomDtosClassSessionDto } from "../classroom/dtos/ClassSessionDto";
import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse";

export type ClassSessionPublishAnswerPath = {
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

export type ClassSessionPublishAnswerStatus200Plain = ClassroomDtosClassSessionDto;

export type ClassSessionPublishAnswerStatus200Json = ClassroomDtosClassSessionDto;

export type ClassSessionPublishAnswerStatus200Json2 = ClassroomDtosClassSessionDto;

export type ClassSessionPublishAnswerStatus200 =
  | ClassSessionPublishAnswerStatus200Plain
  | ClassSessionPublishAnswerStatus200Json
  | ClassSessionPublishAnswerStatus200Json2;

export type ClassSessionPublishAnswerStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionPublishAnswerStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionPublishAnswerStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionPublishAnswerStatus400 =
  | ClassSessionPublishAnswerStatus400Plain
  | ClassSessionPublishAnswerStatus400Json
  | ClassSessionPublishAnswerStatus400Json2;

export type ClassSessionPublishAnswerStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionPublishAnswerStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionPublishAnswerStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionPublishAnswerStatus401 =
  | ClassSessionPublishAnswerStatus401Plain
  | ClassSessionPublishAnswerStatus401Json
  | ClassSessionPublishAnswerStatus401Json2;

export type ClassSessionPublishAnswerStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionPublishAnswerStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionPublishAnswerStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionPublishAnswerStatus403 =
  | ClassSessionPublishAnswerStatus403Plain
  | ClassSessionPublishAnswerStatus403Json
  | ClassSessionPublishAnswerStatus403Json2;

export type ClassSessionPublishAnswerStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionPublishAnswerStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionPublishAnswerStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionPublishAnswerStatus404 =
  | ClassSessionPublishAnswerStatus404Plain
  | ClassSessionPublishAnswerStatus404Json
  | ClassSessionPublishAnswerStatus404Json2;

export type ClassSessionPublishAnswerStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionPublishAnswerStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionPublishAnswerStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionPublishAnswerStatus500 =
  | ClassSessionPublishAnswerStatus500Plain
  | ClassSessionPublishAnswerStatus500Json
  | ClassSessionPublishAnswerStatus500Json2;

export type ClassSessionPublishAnswerStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionPublishAnswerStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionPublishAnswerStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionPublishAnswerStatus501 =
  | ClassSessionPublishAnswerStatus501Plain
  | ClassSessionPublishAnswerStatus501Json
  | ClassSessionPublishAnswerStatus501Json2;

export type ClassSessionPublishAnswerOptions = {
  body?: never;
  path: ClassSessionPublishAnswerPath;
  query?: never;
  headers?: never;
};

export type ClassSessionPublishAnswerResponses = {
  "200":
    | {
        contentType: "text/plain";
        data: ClassSessionPublishAnswerStatus200Plain;
      }
    | {
        contentType: "application/json";
        data: ClassSessionPublishAnswerStatus200Json;
      }
    | {
        contentType: "text/json";
        data: ClassSessionPublishAnswerStatus200Json2;
      };
  "400":
    | {
        contentType: "text/plain";
        data: ClassSessionPublishAnswerStatus400Plain;
      }
    | {
        contentType: "application/json";
        data: ClassSessionPublishAnswerStatus400Json;
      }
    | {
        contentType: "text/json";
        data: ClassSessionPublishAnswerStatus400Json2;
      };
  "401":
    | {
        contentType: "text/plain";
        data: ClassSessionPublishAnswerStatus401Plain;
      }
    | {
        contentType: "application/json";
        data: ClassSessionPublishAnswerStatus401Json;
      }
    | {
        contentType: "text/json";
        data: ClassSessionPublishAnswerStatus401Json2;
      };
  "403":
    | {
        contentType: "text/plain";
        data: ClassSessionPublishAnswerStatus403Plain;
      }
    | {
        contentType: "application/json";
        data: ClassSessionPublishAnswerStatus403Json;
      }
    | {
        contentType: "text/json";
        data: ClassSessionPublishAnswerStatus403Json2;
      };
  "404":
    | {
        contentType: "text/plain";
        data: ClassSessionPublishAnswerStatus404Plain;
      }
    | {
        contentType: "application/json";
        data: ClassSessionPublishAnswerStatus404Json;
      }
    | {
        contentType: "text/json";
        data: ClassSessionPublishAnswerStatus404Json2;
      };
  "500":
    | {
        contentType: "text/plain";
        data: ClassSessionPublishAnswerStatus500Plain;
      }
    | {
        contentType: "application/json";
        data: ClassSessionPublishAnswerStatus500Json;
      }
    | {
        contentType: "text/json";
        data: ClassSessionPublishAnswerStatus500Json2;
      };
  "501":
    | {
        contentType: "text/plain";
        data: ClassSessionPublishAnswerStatus501Plain;
      }
    | {
        contentType: "application/json";
        data: ClassSessionPublishAnswerStatus501Json;
      }
    | {
        contentType: "text/json";
        data: ClassSessionPublishAnswerStatus501Json2;
      };
};

/**
 * @description Union of all possible responses
 */
export type ClassSessionPublishAnswerResponse =
  | ClassSessionPublishAnswerStatus200
  | ClassSessionPublishAnswerStatus400
  | ClassSessionPublishAnswerStatus401
  | ClassSessionPublishAnswerStatus403
  | ClassSessionPublishAnswerStatus404
  | ClassSessionPublishAnswerStatus500
  | ClassSessionPublishAnswerStatus501;
