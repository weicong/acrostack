/* oxlint-disable */

import type { ClassroomDtosClassSessionDto } from "../classroom/dtos/ClassSessionDto";
import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse";

export type ClassSessionGetPath = {
  /**
   * @description
   * Format: `uuid`
   * @type string
   */
  id: string;
};

export type ClassSessionGetStatus200Plain = ClassroomDtosClassSessionDto;

export type ClassSessionGetStatus200Json = ClassroomDtosClassSessionDto;

export type ClassSessionGetStatus200Json2 = ClassroomDtosClassSessionDto;

export type ClassSessionGetStatus200 =
  | ClassSessionGetStatus200Plain
  | ClassSessionGetStatus200Json
  | ClassSessionGetStatus200Json2;

export type ClassSessionGetStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionGetStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionGetStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionGetStatus400 =
  | ClassSessionGetStatus400Plain
  | ClassSessionGetStatus400Json
  | ClassSessionGetStatus400Json2;

export type ClassSessionGetStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionGetStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionGetStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionGetStatus401 =
  | ClassSessionGetStatus401Plain
  | ClassSessionGetStatus401Json
  | ClassSessionGetStatus401Json2;

export type ClassSessionGetStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionGetStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionGetStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionGetStatus403 =
  | ClassSessionGetStatus403Plain
  | ClassSessionGetStatus403Json
  | ClassSessionGetStatus403Json2;

export type ClassSessionGetStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionGetStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionGetStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionGetStatus404 =
  | ClassSessionGetStatus404Plain
  | ClassSessionGetStatus404Json
  | ClassSessionGetStatus404Json2;

export type ClassSessionGetStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionGetStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionGetStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionGetStatus500 =
  | ClassSessionGetStatus500Plain
  | ClassSessionGetStatus500Json
  | ClassSessionGetStatus500Json2;

export type ClassSessionGetStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionGetStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionGetStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionGetStatus501 =
  | ClassSessionGetStatus501Plain
  | ClassSessionGetStatus501Json
  | ClassSessionGetStatus501Json2;

export type ClassSessionGetOptions = {
  body?: never;
  path: ClassSessionGetPath;
  query?: never;
  headers?: never;
};

export type ClassSessionGetResponses = {
  "200":
    | {
        contentType: "text/plain";
        data: ClassSessionGetStatus200Plain;
      }
    | {
        contentType: "application/json";
        data: ClassSessionGetStatus200Json;
      }
    | {
        contentType: "text/json";
        data: ClassSessionGetStatus200Json2;
      };
  "400":
    | {
        contentType: "text/plain";
        data: ClassSessionGetStatus400Plain;
      }
    | {
        contentType: "application/json";
        data: ClassSessionGetStatus400Json;
      }
    | {
        contentType: "text/json";
        data: ClassSessionGetStatus400Json2;
      };
  "401":
    | {
        contentType: "text/plain";
        data: ClassSessionGetStatus401Plain;
      }
    | {
        contentType: "application/json";
        data: ClassSessionGetStatus401Json;
      }
    | {
        contentType: "text/json";
        data: ClassSessionGetStatus401Json2;
      };
  "403":
    | {
        contentType: "text/plain";
        data: ClassSessionGetStatus403Plain;
      }
    | {
        contentType: "application/json";
        data: ClassSessionGetStatus403Json;
      }
    | {
        contentType: "text/json";
        data: ClassSessionGetStatus403Json2;
      };
  "404":
    | {
        contentType: "text/plain";
        data: ClassSessionGetStatus404Plain;
      }
    | {
        contentType: "application/json";
        data: ClassSessionGetStatus404Json;
      }
    | {
        contentType: "text/json";
        data: ClassSessionGetStatus404Json2;
      };
  "500":
    | {
        contentType: "text/plain";
        data: ClassSessionGetStatus500Plain;
      }
    | {
        contentType: "application/json";
        data: ClassSessionGetStatus500Json;
      }
    | {
        contentType: "text/json";
        data: ClassSessionGetStatus500Json2;
      };
  "501":
    | {
        contentType: "text/plain";
        data: ClassSessionGetStatus501Plain;
      }
    | {
        contentType: "application/json";
        data: ClassSessionGetStatus501Json;
      }
    | {
        contentType: "text/json";
        data: ClassSessionGetStatus501Json2;
      };
};

/**
 * @description Union of all possible responses
 */
export type ClassSessionGetResponse =
  | ClassSessionGetStatus200
  | ClassSessionGetStatus400
  | ClassSessionGetStatus401
  | ClassSessionGetStatus403
  | ClassSessionGetStatus404
  | ClassSessionGetStatus500
  | ClassSessionGetStatus501;
