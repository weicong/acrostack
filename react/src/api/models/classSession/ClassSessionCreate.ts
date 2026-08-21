/* oxlint-disable */

import type { ClassroomDtosClassSessionDto } from "../classroom/dtos/ClassSessionDto";
import type { ClassroomDtosCreateClassSessionDto } from "../classroom/dtos/CreateClassSessionDto";
import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse";

export type ClassSessionCreateStatus200Plain = ClassroomDtosClassSessionDto;

export type ClassSessionCreateStatus200Json = ClassroomDtosClassSessionDto;

export type ClassSessionCreateStatus200Json2 = ClassroomDtosClassSessionDto;

export type ClassSessionCreateStatus200 =
  | ClassSessionCreateStatus200Plain
  | ClassSessionCreateStatus200Json
  | ClassSessionCreateStatus200Json2;

export type ClassSessionCreateStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionCreateStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionCreateStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionCreateStatus400 =
  | ClassSessionCreateStatus400Plain
  | ClassSessionCreateStatus400Json
  | ClassSessionCreateStatus400Json2;

export type ClassSessionCreateStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionCreateStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionCreateStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionCreateStatus401 =
  | ClassSessionCreateStatus401Plain
  | ClassSessionCreateStatus401Json
  | ClassSessionCreateStatus401Json2;

export type ClassSessionCreateStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionCreateStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionCreateStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionCreateStatus403 =
  | ClassSessionCreateStatus403Plain
  | ClassSessionCreateStatus403Json
  | ClassSessionCreateStatus403Json2;

export type ClassSessionCreateStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionCreateStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionCreateStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionCreateStatus404 =
  | ClassSessionCreateStatus404Plain
  | ClassSessionCreateStatus404Json
  | ClassSessionCreateStatus404Json2;

export type ClassSessionCreateStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionCreateStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionCreateStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionCreateStatus500 =
  | ClassSessionCreateStatus500Plain
  | ClassSessionCreateStatus500Json
  | ClassSessionCreateStatus500Json2;

export type ClassSessionCreateStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionCreateStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionCreateStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionCreateStatus501 =
  | ClassSessionCreateStatus501Plain
  | ClassSessionCreateStatus501Json
  | ClassSessionCreateStatus501Json2;

export type ClassSessionCreateBodyJson = ClassroomDtosCreateClassSessionDto | undefined;

export type ClassSessionCreateBodyJson2 = ClassroomDtosCreateClassSessionDto | undefined;

export type ClassSessionCreateBodyJson3 = ClassroomDtosCreateClassSessionDto | undefined;

export type ClassSessionCreateBody =
  | ClassSessionCreateBodyJson
  | ClassSessionCreateBodyJson2
  | ClassSessionCreateBodyJson3;

export type ClassSessionCreateOptions = {
  body: ClassSessionCreateBody;
  path?: never;
  query?: never;
  headers?: never;
};

export type ClassSessionCreateResponses = {
  "200":
    | {
        contentType: "text/plain";
        data: ClassSessionCreateStatus200Plain;
      }
    | {
        contentType: "application/json";
        data: ClassSessionCreateStatus200Json;
      }
    | {
        contentType: "text/json";
        data: ClassSessionCreateStatus200Json2;
      };
  "400":
    | {
        contentType: "text/plain";
        data: ClassSessionCreateStatus400Plain;
      }
    | {
        contentType: "application/json";
        data: ClassSessionCreateStatus400Json;
      }
    | {
        contentType: "text/json";
        data: ClassSessionCreateStatus400Json2;
      };
  "401":
    | {
        contentType: "text/plain";
        data: ClassSessionCreateStatus401Plain;
      }
    | {
        contentType: "application/json";
        data: ClassSessionCreateStatus401Json;
      }
    | {
        contentType: "text/json";
        data: ClassSessionCreateStatus401Json2;
      };
  "403":
    | {
        contentType: "text/plain";
        data: ClassSessionCreateStatus403Plain;
      }
    | {
        contentType: "application/json";
        data: ClassSessionCreateStatus403Json;
      }
    | {
        contentType: "text/json";
        data: ClassSessionCreateStatus403Json2;
      };
  "404":
    | {
        contentType: "text/plain";
        data: ClassSessionCreateStatus404Plain;
      }
    | {
        contentType: "application/json";
        data: ClassSessionCreateStatus404Json;
      }
    | {
        contentType: "text/json";
        data: ClassSessionCreateStatus404Json2;
      };
  "500":
    | {
        contentType: "text/plain";
        data: ClassSessionCreateStatus500Plain;
      }
    | {
        contentType: "application/json";
        data: ClassSessionCreateStatus500Json;
      }
    | {
        contentType: "text/json";
        data: ClassSessionCreateStatus500Json2;
      };
  "501":
    | {
        contentType: "text/plain";
        data: ClassSessionCreateStatus501Plain;
      }
    | {
        contentType: "application/json";
        data: ClassSessionCreateStatus501Json;
      }
    | {
        contentType: "text/json";
        data: ClassSessionCreateStatus501Json2;
      };
};

/**
 * @description Union of all possible responses
 */
export type ClassSessionCreateResponse =
  | ClassSessionCreateStatus200
  | ClassSessionCreateStatus400
  | ClassSessionCreateStatus401
  | ClassSessionCreateStatus403
  | ClassSessionCreateStatus404
  | ClassSessionCreateStatus500
  | ClassSessionCreateStatus501;
