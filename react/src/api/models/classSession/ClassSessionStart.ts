/* oxlint-disable */

import type { ClassroomDtosClassSessionDto } from "../classroom/dtos/ClassSessionDto";
import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse";

export type ClassSessionStartPath = {
  /**
   * @description
   * Format: `uuid`
   * @type string
   */
  id: string;
};

export type ClassSessionStartStatus200Plain = ClassroomDtosClassSessionDto;

export type ClassSessionStartStatus200Json = ClassroomDtosClassSessionDto;

export type ClassSessionStartStatus200Json2 = ClassroomDtosClassSessionDto;

export type ClassSessionStartStatus200 =
  | ClassSessionStartStatus200Plain
  | ClassSessionStartStatus200Json
  | ClassSessionStartStatus200Json2;

export type ClassSessionStartStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionStartStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionStartStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionStartStatus400 =
  | ClassSessionStartStatus400Plain
  | ClassSessionStartStatus400Json
  | ClassSessionStartStatus400Json2;

export type ClassSessionStartStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionStartStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionStartStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionStartStatus401 =
  | ClassSessionStartStatus401Plain
  | ClassSessionStartStatus401Json
  | ClassSessionStartStatus401Json2;

export type ClassSessionStartStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionStartStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionStartStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionStartStatus403 =
  | ClassSessionStartStatus403Plain
  | ClassSessionStartStatus403Json
  | ClassSessionStartStatus403Json2;

export type ClassSessionStartStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionStartStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionStartStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionStartStatus404 =
  | ClassSessionStartStatus404Plain
  | ClassSessionStartStatus404Json
  | ClassSessionStartStatus404Json2;

export type ClassSessionStartStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionStartStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionStartStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionStartStatus500 =
  | ClassSessionStartStatus500Plain
  | ClassSessionStartStatus500Json
  | ClassSessionStartStatus500Json2;

export type ClassSessionStartStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionStartStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionStartStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionStartStatus501 =
  | ClassSessionStartStatus501Plain
  | ClassSessionStartStatus501Json
  | ClassSessionStartStatus501Json2;

export type ClassSessionStartOptions = {
  body?: never;
  path: ClassSessionStartPath;
  query?: never;
  headers?: never;
};

export type ClassSessionStartResponses = {
  "200":
    | {
        contentType: "text/plain";
        data: ClassSessionStartStatus200Plain;
      }
    | {
        contentType: "application/json";
        data: ClassSessionStartStatus200Json;
      }
    | {
        contentType: "text/json";
        data: ClassSessionStartStatus200Json2;
      };
  "400":
    | {
        contentType: "text/plain";
        data: ClassSessionStartStatus400Plain;
      }
    | {
        contentType: "application/json";
        data: ClassSessionStartStatus400Json;
      }
    | {
        contentType: "text/json";
        data: ClassSessionStartStatus400Json2;
      };
  "401":
    | {
        contentType: "text/plain";
        data: ClassSessionStartStatus401Plain;
      }
    | {
        contentType: "application/json";
        data: ClassSessionStartStatus401Json;
      }
    | {
        contentType: "text/json";
        data: ClassSessionStartStatus401Json2;
      };
  "403":
    | {
        contentType: "text/plain";
        data: ClassSessionStartStatus403Plain;
      }
    | {
        contentType: "application/json";
        data: ClassSessionStartStatus403Json;
      }
    | {
        contentType: "text/json";
        data: ClassSessionStartStatus403Json2;
      };
  "404":
    | {
        contentType: "text/plain";
        data: ClassSessionStartStatus404Plain;
      }
    | {
        contentType: "application/json";
        data: ClassSessionStartStatus404Json;
      }
    | {
        contentType: "text/json";
        data: ClassSessionStartStatus404Json2;
      };
  "500":
    | {
        contentType: "text/plain";
        data: ClassSessionStartStatus500Plain;
      }
    | {
        contentType: "application/json";
        data: ClassSessionStartStatus500Json;
      }
    | {
        contentType: "text/json";
        data: ClassSessionStartStatus500Json2;
      };
  "501":
    | {
        contentType: "text/plain";
        data: ClassSessionStartStatus501Plain;
      }
    | {
        contentType: "application/json";
        data: ClassSessionStartStatus501Json;
      }
    | {
        contentType: "text/json";
        data: ClassSessionStartStatus501Json2;
      };
};

/**
 * @description Union of all possible responses
 */
export type ClassSessionStartResponse =
  | ClassSessionStartStatus200
  | ClassSessionStartStatus400
  | ClassSessionStartStatus401
  | ClassSessionStartStatus403
  | ClassSessionStartStatus404
  | ClassSessionStartStatus500
  | ClassSessionStartStatus501;
