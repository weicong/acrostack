/* oxlint-disable */

import type { ClassroomDtosClassSessionDto } from "../classroom/dtos/ClassSessionDto";
import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse";

export type ClassSessionFinishPath = {
  /**
   * @description
   * Format: `uuid`
   * @type string
   */
  id: string;
};

export type ClassSessionFinishStatus200Plain = ClassroomDtosClassSessionDto;

export type ClassSessionFinishStatus200Json = ClassroomDtosClassSessionDto;

export type ClassSessionFinishStatus200Json2 = ClassroomDtosClassSessionDto;

export type ClassSessionFinishStatus200 =
  | ClassSessionFinishStatus200Plain
  | ClassSessionFinishStatus200Json
  | ClassSessionFinishStatus200Json2;

export type ClassSessionFinishStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionFinishStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionFinishStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionFinishStatus400 =
  | ClassSessionFinishStatus400Plain
  | ClassSessionFinishStatus400Json
  | ClassSessionFinishStatus400Json2;

export type ClassSessionFinishStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionFinishStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionFinishStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionFinishStatus401 =
  | ClassSessionFinishStatus401Plain
  | ClassSessionFinishStatus401Json
  | ClassSessionFinishStatus401Json2;

export type ClassSessionFinishStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionFinishStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionFinishStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionFinishStatus403 =
  | ClassSessionFinishStatus403Plain
  | ClassSessionFinishStatus403Json
  | ClassSessionFinishStatus403Json2;

export type ClassSessionFinishStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionFinishStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionFinishStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionFinishStatus404 =
  | ClassSessionFinishStatus404Plain
  | ClassSessionFinishStatus404Json
  | ClassSessionFinishStatus404Json2;

export type ClassSessionFinishStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionFinishStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionFinishStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionFinishStatus500 =
  | ClassSessionFinishStatus500Plain
  | ClassSessionFinishStatus500Json
  | ClassSessionFinishStatus500Json2;

export type ClassSessionFinishStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionFinishStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionFinishStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionFinishStatus501 =
  | ClassSessionFinishStatus501Plain
  | ClassSessionFinishStatus501Json
  | ClassSessionFinishStatus501Json2;

export type ClassSessionFinishOptions = {
  body?: never;
  path: ClassSessionFinishPath;
  query?: never;
  headers?: never;
};

export type ClassSessionFinishResponses = {
  "200":
    | {
        contentType: "text/plain";
        data: ClassSessionFinishStatus200Plain;
      }
    | {
        contentType: "application/json";
        data: ClassSessionFinishStatus200Json;
      }
    | {
        contentType: "text/json";
        data: ClassSessionFinishStatus200Json2;
      };
  "400":
    | {
        contentType: "text/plain";
        data: ClassSessionFinishStatus400Plain;
      }
    | {
        contentType: "application/json";
        data: ClassSessionFinishStatus400Json;
      }
    | {
        contentType: "text/json";
        data: ClassSessionFinishStatus400Json2;
      };
  "401":
    | {
        contentType: "text/plain";
        data: ClassSessionFinishStatus401Plain;
      }
    | {
        contentType: "application/json";
        data: ClassSessionFinishStatus401Json;
      }
    | {
        contentType: "text/json";
        data: ClassSessionFinishStatus401Json2;
      };
  "403":
    | {
        contentType: "text/plain";
        data: ClassSessionFinishStatus403Plain;
      }
    | {
        contentType: "application/json";
        data: ClassSessionFinishStatus403Json;
      }
    | {
        contentType: "text/json";
        data: ClassSessionFinishStatus403Json2;
      };
  "404":
    | {
        contentType: "text/plain";
        data: ClassSessionFinishStatus404Plain;
      }
    | {
        contentType: "application/json";
        data: ClassSessionFinishStatus404Json;
      }
    | {
        contentType: "text/json";
        data: ClassSessionFinishStatus404Json2;
      };
  "500":
    | {
        contentType: "text/plain";
        data: ClassSessionFinishStatus500Plain;
      }
    | {
        contentType: "application/json";
        data: ClassSessionFinishStatus500Json;
      }
    | {
        contentType: "text/json";
        data: ClassSessionFinishStatus500Json2;
      };
  "501":
    | {
        contentType: "text/plain";
        data: ClassSessionFinishStatus501Plain;
      }
    | {
        contentType: "application/json";
        data: ClassSessionFinishStatus501Json;
      }
    | {
        contentType: "text/json";
        data: ClassSessionFinishStatus501Json2;
      };
};

/**
 * @description Union of all possible responses
 */
export type ClassSessionFinishResponse =
  | ClassSessionFinishStatus200
  | ClassSessionFinishStatus400
  | ClassSessionFinishStatus401
  | ClassSessionFinishStatus403
  | ClassSessionFinishStatus404
  | ClassSessionFinishStatus500
  | ClassSessionFinishStatus501;
