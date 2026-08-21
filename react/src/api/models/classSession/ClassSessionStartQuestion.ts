/* oxlint-disable */

import type { ClassroomDtosClassSessionDto } from "../classroom/dtos/ClassSessionDto";
import type { ClassroomDtosOpenQuestionDto } from "../classroom/dtos/OpenQuestionDto";
import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse";

export type ClassSessionStartQuestionPath = {
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

export type ClassSessionStartQuestionStatus200Plain = ClassroomDtosClassSessionDto;

export type ClassSessionStartQuestionStatus200Json = ClassroomDtosClassSessionDto;

export type ClassSessionStartQuestionStatus200Json2 = ClassroomDtosClassSessionDto;

export type ClassSessionStartQuestionStatus200 =
  | ClassSessionStartQuestionStatus200Plain
  | ClassSessionStartQuestionStatus200Json
  | ClassSessionStartQuestionStatus200Json2;

export type ClassSessionStartQuestionStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionStartQuestionStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionStartQuestionStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionStartQuestionStatus400 =
  | ClassSessionStartQuestionStatus400Plain
  | ClassSessionStartQuestionStatus400Json
  | ClassSessionStartQuestionStatus400Json2;

export type ClassSessionStartQuestionStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionStartQuestionStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionStartQuestionStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionStartQuestionStatus401 =
  | ClassSessionStartQuestionStatus401Plain
  | ClassSessionStartQuestionStatus401Json
  | ClassSessionStartQuestionStatus401Json2;

export type ClassSessionStartQuestionStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionStartQuestionStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionStartQuestionStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionStartQuestionStatus403 =
  | ClassSessionStartQuestionStatus403Plain
  | ClassSessionStartQuestionStatus403Json
  | ClassSessionStartQuestionStatus403Json2;

export type ClassSessionStartQuestionStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionStartQuestionStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionStartQuestionStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionStartQuestionStatus404 =
  | ClassSessionStartQuestionStatus404Plain
  | ClassSessionStartQuestionStatus404Json
  | ClassSessionStartQuestionStatus404Json2;

export type ClassSessionStartQuestionStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionStartQuestionStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionStartQuestionStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionStartQuestionStatus500 =
  | ClassSessionStartQuestionStatus500Plain
  | ClassSessionStartQuestionStatus500Json
  | ClassSessionStartQuestionStatus500Json2;

export type ClassSessionStartQuestionStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionStartQuestionStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionStartQuestionStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionStartQuestionStatus501 =
  | ClassSessionStartQuestionStatus501Plain
  | ClassSessionStartQuestionStatus501Json
  | ClassSessionStartQuestionStatus501Json2;

export type ClassSessionStartQuestionBodyJson = ClassroomDtosOpenQuestionDto | undefined;

export type ClassSessionStartQuestionBodyJson2 = ClassroomDtosOpenQuestionDto | undefined;

export type ClassSessionStartQuestionBodyJson3 = ClassroomDtosOpenQuestionDto | undefined;

export type ClassSessionStartQuestionBody =
  | ClassSessionStartQuestionBodyJson
  | ClassSessionStartQuestionBodyJson2
  | ClassSessionStartQuestionBodyJson3;

export type ClassSessionStartQuestionOptions = {
  body: ClassSessionStartQuestionBody;
  path: ClassSessionStartQuestionPath;
  query?: never;
  headers?: never;
};

export type ClassSessionStartQuestionResponses = {
  "200":
    | {
        contentType: "text/plain";
        data: ClassSessionStartQuestionStatus200Plain;
      }
    | {
        contentType: "application/json";
        data: ClassSessionStartQuestionStatus200Json;
      }
    | {
        contentType: "text/json";
        data: ClassSessionStartQuestionStatus200Json2;
      };
  "400":
    | {
        contentType: "text/plain";
        data: ClassSessionStartQuestionStatus400Plain;
      }
    | {
        contentType: "application/json";
        data: ClassSessionStartQuestionStatus400Json;
      }
    | {
        contentType: "text/json";
        data: ClassSessionStartQuestionStatus400Json2;
      };
  "401":
    | {
        contentType: "text/plain";
        data: ClassSessionStartQuestionStatus401Plain;
      }
    | {
        contentType: "application/json";
        data: ClassSessionStartQuestionStatus401Json;
      }
    | {
        contentType: "text/json";
        data: ClassSessionStartQuestionStatus401Json2;
      };
  "403":
    | {
        contentType: "text/plain";
        data: ClassSessionStartQuestionStatus403Plain;
      }
    | {
        contentType: "application/json";
        data: ClassSessionStartQuestionStatus403Json;
      }
    | {
        contentType: "text/json";
        data: ClassSessionStartQuestionStatus403Json2;
      };
  "404":
    | {
        contentType: "text/plain";
        data: ClassSessionStartQuestionStatus404Plain;
      }
    | {
        contentType: "application/json";
        data: ClassSessionStartQuestionStatus404Json;
      }
    | {
        contentType: "text/json";
        data: ClassSessionStartQuestionStatus404Json2;
      };
  "500":
    | {
        contentType: "text/plain";
        data: ClassSessionStartQuestionStatus500Plain;
      }
    | {
        contentType: "application/json";
        data: ClassSessionStartQuestionStatus500Json;
      }
    | {
        contentType: "text/json";
        data: ClassSessionStartQuestionStatus500Json2;
      };
  "501":
    | {
        contentType: "text/plain";
        data: ClassSessionStartQuestionStatus501Plain;
      }
    | {
        contentType: "application/json";
        data: ClassSessionStartQuestionStatus501Json;
      }
    | {
        contentType: "text/json";
        data: ClassSessionStartQuestionStatus501Json2;
      };
};

/**
 * @description Union of all possible responses
 */
export type ClassSessionStartQuestionResponse =
  | ClassSessionStartQuestionStatus200
  | ClassSessionStartQuestionStatus400
  | ClassSessionStartQuestionStatus401
  | ClassSessionStartQuestionStatus403
  | ClassSessionStartQuestionStatus404
  | ClassSessionStartQuestionStatus500
  | ClassSessionStartQuestionStatus501;
