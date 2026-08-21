/* oxlint-disable */

import type { ClassroomDtosTeacherSnapshotDto } from "../classroom/dtos/TeacherSnapshotDto";
import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse";

export type ClassSessionGetSnapshotPath = {
  /**
   * @description
   * Format: `uuid`
   * @type string
   */
  id: string;
};

export type ClassSessionGetSnapshotStatus200Plain = ClassroomDtosTeacherSnapshotDto;

export type ClassSessionGetSnapshotStatus200Json = ClassroomDtosTeacherSnapshotDto;

export type ClassSessionGetSnapshotStatus200Json2 = ClassroomDtosTeacherSnapshotDto;

export type ClassSessionGetSnapshotStatus200 =
  | ClassSessionGetSnapshotStatus200Plain
  | ClassSessionGetSnapshotStatus200Json
  | ClassSessionGetSnapshotStatus200Json2;

export type ClassSessionGetSnapshotStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionGetSnapshotStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionGetSnapshotStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionGetSnapshotStatus400 =
  | ClassSessionGetSnapshotStatus400Plain
  | ClassSessionGetSnapshotStatus400Json
  | ClassSessionGetSnapshotStatus400Json2;

export type ClassSessionGetSnapshotStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionGetSnapshotStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionGetSnapshotStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionGetSnapshotStatus401 =
  | ClassSessionGetSnapshotStatus401Plain
  | ClassSessionGetSnapshotStatus401Json
  | ClassSessionGetSnapshotStatus401Json2;

export type ClassSessionGetSnapshotStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionGetSnapshotStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionGetSnapshotStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionGetSnapshotStatus403 =
  | ClassSessionGetSnapshotStatus403Plain
  | ClassSessionGetSnapshotStatus403Json
  | ClassSessionGetSnapshotStatus403Json2;

export type ClassSessionGetSnapshotStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionGetSnapshotStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionGetSnapshotStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionGetSnapshotStatus404 =
  | ClassSessionGetSnapshotStatus404Plain
  | ClassSessionGetSnapshotStatus404Json
  | ClassSessionGetSnapshotStatus404Json2;

export type ClassSessionGetSnapshotStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionGetSnapshotStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionGetSnapshotStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionGetSnapshotStatus500 =
  | ClassSessionGetSnapshotStatus500Plain
  | ClassSessionGetSnapshotStatus500Json
  | ClassSessionGetSnapshotStatus500Json2;

export type ClassSessionGetSnapshotStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionGetSnapshotStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionGetSnapshotStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionGetSnapshotStatus501 =
  | ClassSessionGetSnapshotStatus501Plain
  | ClassSessionGetSnapshotStatus501Json
  | ClassSessionGetSnapshotStatus501Json2;

export type ClassSessionGetSnapshotOptions = {
  body?: never;
  path: ClassSessionGetSnapshotPath;
  query?: never;
  headers?: never;
};

export type ClassSessionGetSnapshotResponses = {
  "200":
    | {
        contentType: "text/plain";
        data: ClassSessionGetSnapshotStatus200Plain;
      }
    | {
        contentType: "application/json";
        data: ClassSessionGetSnapshotStatus200Json;
      }
    | {
        contentType: "text/json";
        data: ClassSessionGetSnapshotStatus200Json2;
      };
  "400":
    | {
        contentType: "text/plain";
        data: ClassSessionGetSnapshotStatus400Plain;
      }
    | {
        contentType: "application/json";
        data: ClassSessionGetSnapshotStatus400Json;
      }
    | {
        contentType: "text/json";
        data: ClassSessionGetSnapshotStatus400Json2;
      };
  "401":
    | {
        contentType: "text/plain";
        data: ClassSessionGetSnapshotStatus401Plain;
      }
    | {
        contentType: "application/json";
        data: ClassSessionGetSnapshotStatus401Json;
      }
    | {
        contentType: "text/json";
        data: ClassSessionGetSnapshotStatus401Json2;
      };
  "403":
    | {
        contentType: "text/plain";
        data: ClassSessionGetSnapshotStatus403Plain;
      }
    | {
        contentType: "application/json";
        data: ClassSessionGetSnapshotStatus403Json;
      }
    | {
        contentType: "text/json";
        data: ClassSessionGetSnapshotStatus403Json2;
      };
  "404":
    | {
        contentType: "text/plain";
        data: ClassSessionGetSnapshotStatus404Plain;
      }
    | {
        contentType: "application/json";
        data: ClassSessionGetSnapshotStatus404Json;
      }
    | {
        contentType: "text/json";
        data: ClassSessionGetSnapshotStatus404Json2;
      };
  "500":
    | {
        contentType: "text/plain";
        data: ClassSessionGetSnapshotStatus500Plain;
      }
    | {
        contentType: "application/json";
        data: ClassSessionGetSnapshotStatus500Json;
      }
    | {
        contentType: "text/json";
        data: ClassSessionGetSnapshotStatus500Json2;
      };
  "501":
    | {
        contentType: "text/plain";
        data: ClassSessionGetSnapshotStatus501Plain;
      }
    | {
        contentType: "application/json";
        data: ClassSessionGetSnapshotStatus501Json;
      }
    | {
        contentType: "text/json";
        data: ClassSessionGetSnapshotStatus501Json2;
      };
};

/**
 * @description Union of all possible responses
 */
export type ClassSessionGetSnapshotResponse =
  | ClassSessionGetSnapshotStatus200
  | ClassSessionGetSnapshotStatus400
  | ClassSessionGetSnapshotStatus401
  | ClassSessionGetSnapshotStatus403
  | ClassSessionGetSnapshotStatus404
  | ClassSessionGetSnapshotStatus500
  | ClassSessionGetSnapshotStatus501;
