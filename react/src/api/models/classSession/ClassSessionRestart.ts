/* oxlint-disable */

import type { ClassroomDtosClassSessionDto } from "../classroom/dtos/ClassSessionDto";
import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse";

export type ClassSessionRestartPath = {
  /**
   * @description
   * Format: `uuid`
   * @type string
   */
  id: string;
};

export type ClassSessionRestartStatus200Plain = ClassroomDtosClassSessionDto;

export type ClassSessionRestartStatus200Json = ClassroomDtosClassSessionDto;

export type ClassSessionRestartStatus200Json2 = ClassroomDtosClassSessionDto;

export type ClassSessionRestartStatus200 =
  | ClassSessionRestartStatus200Plain
  | ClassSessionRestartStatus200Json
  | ClassSessionRestartStatus200Json2;

export type ClassSessionRestartStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionRestartStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionRestartStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionRestartStatus400 =
  | ClassSessionRestartStatus400Plain
  | ClassSessionRestartStatus400Json
  | ClassSessionRestartStatus400Json2;

export type ClassSessionRestartStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionRestartStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionRestartStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionRestartStatus401 =
  | ClassSessionRestartStatus401Plain
  | ClassSessionRestartStatus401Json
  | ClassSessionRestartStatus401Json2;

export type ClassSessionRestartStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionRestartStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionRestartStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionRestartStatus403 =
  | ClassSessionRestartStatus403Plain
  | ClassSessionRestartStatus403Json
  | ClassSessionRestartStatus403Json2;

export type ClassSessionRestartStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionRestartStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionRestartStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionRestartStatus404 =
  | ClassSessionRestartStatus404Plain
  | ClassSessionRestartStatus404Json
  | ClassSessionRestartStatus404Json2;

export type ClassSessionRestartStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionRestartStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionRestartStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionRestartStatus500 =
  | ClassSessionRestartStatus500Plain
  | ClassSessionRestartStatus500Json
  | ClassSessionRestartStatus500Json2;

export type ClassSessionRestartStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionRestartStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionRestartStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionRestartStatus501 =
  | ClassSessionRestartStatus501Plain
  | ClassSessionRestartStatus501Json
  | ClassSessionRestartStatus501Json2;

export type ClassSessionRestartOptions = {
  body?: never;
  path: ClassSessionRestartPath;
  query?: never;
  headers?: never;
};

export type ClassSessionRestartResponses = {
  "200":
    | {
        contentType: "text/plain";
        data: ClassSessionRestartStatus200Plain;
      }
    | {
        contentType: "application/json";
        data: ClassSessionRestartStatus200Json;
      }
    | {
        contentType: "text/json";
        data: ClassSessionRestartStatus200Json2;
      };
  "400":
    | {
        contentType: "text/plain";
        data: ClassSessionRestartStatus400Plain;
      }
    | {
        contentType: "application/json";
        data: ClassSessionRestartStatus400Json;
      }
    | {
        contentType: "text/json";
        data: ClassSessionRestartStatus400Json2;
      };
  "401":
    | {
        contentType: "text/plain";
        data: ClassSessionRestartStatus401Plain;
      }
    | {
        contentType: "application/json";
        data: ClassSessionRestartStatus401Json;
      }
    | {
        contentType: "text/json";
        data: ClassSessionRestartStatus401Json2;
      };
  "403":
    | {
        contentType: "text/plain";
        data: ClassSessionRestartStatus403Plain;
      }
    | {
        contentType: "application/json";
        data: ClassSessionRestartStatus403Json;
      }
    | {
        contentType: "text/json";
        data: ClassSessionRestartStatus403Json2;
      };
  "404":
    | {
        contentType: "text/plain";
        data: ClassSessionRestartStatus404Plain;
      }
    | {
        contentType: "application/json";
        data: ClassSessionRestartStatus404Json;
      }
    | {
        contentType: "text/json";
        data: ClassSessionRestartStatus404Json2;
      };
  "500":
    | {
        contentType: "text/plain";
        data: ClassSessionRestartStatus500Plain;
      }
    | {
        contentType: "application/json";
        data: ClassSessionRestartStatus500Json;
      }
    | {
        contentType: "text/json";
        data: ClassSessionRestartStatus500Json2;
      };
  "501":
    | {
        contentType: "text/plain";
        data: ClassSessionRestartStatus501Plain;
      }
    | {
        contentType: "application/json";
        data: ClassSessionRestartStatus501Json;
      }
    | {
        contentType: "text/json";
        data: ClassSessionRestartStatus501Json2;
      };
};

/**
 * @description Union of all possible responses
 */
export type ClassSessionRestartResponse =
  | ClassSessionRestartStatus200
  | ClassSessionRestartStatus400
  | ClassSessionRestartStatus401
  | ClassSessionRestartStatus403
  | ClassSessionRestartStatus404
  | ClassSessionRestartStatus500
  | ClassSessionRestartStatus501;
