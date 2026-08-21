/* oxlint-disable */

import type { ClassroomDtosClassSessionDto } from "../classroom/dtos/ClassSessionDto";
import type { ClassroomDtosOpenQuestionDto } from "../classroom/dtos/OpenQuestionDto";
import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse";

export type ClassSessionNextQuestionPath = {
  /**
   * @description
   * Format: `uuid`
   * @type string
   */
  id: string;
};

export type ClassSessionNextQuestionStatus200Plain = ClassroomDtosClassSessionDto;

export type ClassSessionNextQuestionStatus200Json = ClassroomDtosClassSessionDto;

export type ClassSessionNextQuestionStatus200Json2 = ClassroomDtosClassSessionDto;

export type ClassSessionNextQuestionStatus200 =
  | ClassSessionNextQuestionStatus200Plain
  | ClassSessionNextQuestionStatus200Json
  | ClassSessionNextQuestionStatus200Json2;

export type ClassSessionNextQuestionStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionNextQuestionStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionNextQuestionStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionNextQuestionStatus400 =
  | ClassSessionNextQuestionStatus400Plain
  | ClassSessionNextQuestionStatus400Json
  | ClassSessionNextQuestionStatus400Json2;

export type ClassSessionNextQuestionStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionNextQuestionStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionNextQuestionStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionNextQuestionStatus401 =
  | ClassSessionNextQuestionStatus401Plain
  | ClassSessionNextQuestionStatus401Json
  | ClassSessionNextQuestionStatus401Json2;

export type ClassSessionNextQuestionStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionNextQuestionStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionNextQuestionStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionNextQuestionStatus403 =
  | ClassSessionNextQuestionStatus403Plain
  | ClassSessionNextQuestionStatus403Json
  | ClassSessionNextQuestionStatus403Json2;

export type ClassSessionNextQuestionStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionNextQuestionStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionNextQuestionStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionNextQuestionStatus404 =
  | ClassSessionNextQuestionStatus404Plain
  | ClassSessionNextQuestionStatus404Json
  | ClassSessionNextQuestionStatus404Json2;

export type ClassSessionNextQuestionStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionNextQuestionStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionNextQuestionStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionNextQuestionStatus500 =
  | ClassSessionNextQuestionStatus500Plain
  | ClassSessionNextQuestionStatus500Json
  | ClassSessionNextQuestionStatus500Json2;

export type ClassSessionNextQuestionStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionNextQuestionStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionNextQuestionStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionNextQuestionStatus501 =
  | ClassSessionNextQuestionStatus501Plain
  | ClassSessionNextQuestionStatus501Json
  | ClassSessionNextQuestionStatus501Json2;

export type ClassSessionNextQuestionBodyJson = ClassroomDtosOpenQuestionDto | undefined;

export type ClassSessionNextQuestionBodyJson2 = ClassroomDtosOpenQuestionDto | undefined;

export type ClassSessionNextQuestionBodyJson3 = ClassroomDtosOpenQuestionDto | undefined;

export type ClassSessionNextQuestionBody =
  | ClassSessionNextQuestionBodyJson
  | ClassSessionNextQuestionBodyJson2
  | ClassSessionNextQuestionBodyJson3;

export type ClassSessionNextQuestionOptions = {
  body: ClassSessionNextQuestionBody;
  path: ClassSessionNextQuestionPath;
  query?: never;
  headers?: never;
};

export type ClassSessionNextQuestionResponses = {
  "200":
    | {
        contentType: "text/plain";
        data: ClassSessionNextQuestionStatus200Plain;
      }
    | {
        contentType: "application/json";
        data: ClassSessionNextQuestionStatus200Json;
      }
    | {
        contentType: "text/json";
        data: ClassSessionNextQuestionStatus200Json2;
      };
  "400":
    | {
        contentType: "text/plain";
        data: ClassSessionNextQuestionStatus400Plain;
      }
    | {
        contentType: "application/json";
        data: ClassSessionNextQuestionStatus400Json;
      }
    | {
        contentType: "text/json";
        data: ClassSessionNextQuestionStatus400Json2;
      };
  "401":
    | {
        contentType: "text/plain";
        data: ClassSessionNextQuestionStatus401Plain;
      }
    | {
        contentType: "application/json";
        data: ClassSessionNextQuestionStatus401Json;
      }
    | {
        contentType: "text/json";
        data: ClassSessionNextQuestionStatus401Json2;
      };
  "403":
    | {
        contentType: "text/plain";
        data: ClassSessionNextQuestionStatus403Plain;
      }
    | {
        contentType: "application/json";
        data: ClassSessionNextQuestionStatus403Json;
      }
    | {
        contentType: "text/json";
        data: ClassSessionNextQuestionStatus403Json2;
      };
  "404":
    | {
        contentType: "text/plain";
        data: ClassSessionNextQuestionStatus404Plain;
      }
    | {
        contentType: "application/json";
        data: ClassSessionNextQuestionStatus404Json;
      }
    | {
        contentType: "text/json";
        data: ClassSessionNextQuestionStatus404Json2;
      };
  "500":
    | {
        contentType: "text/plain";
        data: ClassSessionNextQuestionStatus500Plain;
      }
    | {
        contentType: "application/json";
        data: ClassSessionNextQuestionStatus500Json;
      }
    | {
        contentType: "text/json";
        data: ClassSessionNextQuestionStatus500Json2;
      };
  "501":
    | {
        contentType: "text/plain";
        data: ClassSessionNextQuestionStatus501Plain;
      }
    | {
        contentType: "application/json";
        data: ClassSessionNextQuestionStatus501Json;
      }
    | {
        contentType: "text/json";
        data: ClassSessionNextQuestionStatus501Json2;
      };
};

/**
 * @description Union of all possible responses
 */
export type ClassSessionNextQuestionResponse =
  | ClassSessionNextQuestionStatus200
  | ClassSessionNextQuestionStatus400
  | ClassSessionNextQuestionStatus401
  | ClassSessionNextQuestionStatus403
  | ClassSessionNextQuestionStatus404
  | ClassSessionNextQuestionStatus500
  | ClassSessionNextQuestionStatus501;
