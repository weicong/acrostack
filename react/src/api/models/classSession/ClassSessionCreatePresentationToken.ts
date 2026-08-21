/* oxlint-disable */

import type { ClassroomPresentationTokenResultDto } from "../classroom/PresentationTokenResultDto";
import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse";

export type ClassSessionCreatePresentationTokenPath = {
  /**
   * @description
   * Format: `uuid`
   * @type string
   */
  id: string;
};

export type ClassSessionCreatePresentationTokenStatus200Plain = ClassroomPresentationTokenResultDto;

export type ClassSessionCreatePresentationTokenStatus200Json = ClassroomPresentationTokenResultDto;

export type ClassSessionCreatePresentationTokenStatus200Json2 = ClassroomPresentationTokenResultDto;

export type ClassSessionCreatePresentationTokenStatus200 =
  | ClassSessionCreatePresentationTokenStatus200Plain
  | ClassSessionCreatePresentationTokenStatus200Json
  | ClassSessionCreatePresentationTokenStatus200Json2;

export type ClassSessionCreatePresentationTokenStatus400Plain =
  VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionCreatePresentationTokenStatus400Json =
  VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionCreatePresentationTokenStatus400Json2 =
  VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionCreatePresentationTokenStatus400 =
  | ClassSessionCreatePresentationTokenStatus400Plain
  | ClassSessionCreatePresentationTokenStatus400Json
  | ClassSessionCreatePresentationTokenStatus400Json2;

export type ClassSessionCreatePresentationTokenStatus401Plain =
  VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionCreatePresentationTokenStatus401Json =
  VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionCreatePresentationTokenStatus401Json2 =
  VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionCreatePresentationTokenStatus401 =
  | ClassSessionCreatePresentationTokenStatus401Plain
  | ClassSessionCreatePresentationTokenStatus401Json
  | ClassSessionCreatePresentationTokenStatus401Json2;

export type ClassSessionCreatePresentationTokenStatus403Plain =
  VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionCreatePresentationTokenStatus403Json =
  VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionCreatePresentationTokenStatus403Json2 =
  VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionCreatePresentationTokenStatus403 =
  | ClassSessionCreatePresentationTokenStatus403Plain
  | ClassSessionCreatePresentationTokenStatus403Json
  | ClassSessionCreatePresentationTokenStatus403Json2;

export type ClassSessionCreatePresentationTokenStatus404Plain =
  VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionCreatePresentationTokenStatus404Json =
  VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionCreatePresentationTokenStatus404Json2 =
  VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionCreatePresentationTokenStatus404 =
  | ClassSessionCreatePresentationTokenStatus404Plain
  | ClassSessionCreatePresentationTokenStatus404Json
  | ClassSessionCreatePresentationTokenStatus404Json2;

export type ClassSessionCreatePresentationTokenStatus500Plain =
  VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionCreatePresentationTokenStatus500Json =
  VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionCreatePresentationTokenStatus500Json2 =
  VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionCreatePresentationTokenStatus500 =
  | ClassSessionCreatePresentationTokenStatus500Plain
  | ClassSessionCreatePresentationTokenStatus500Json
  | ClassSessionCreatePresentationTokenStatus500Json2;

export type ClassSessionCreatePresentationTokenStatus501Plain =
  VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionCreatePresentationTokenStatus501Json =
  VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionCreatePresentationTokenStatus501Json2 =
  VoloAbpHttpRemoteServiceErrorResponse;

export type ClassSessionCreatePresentationTokenStatus501 =
  | ClassSessionCreatePresentationTokenStatus501Plain
  | ClassSessionCreatePresentationTokenStatus501Json
  | ClassSessionCreatePresentationTokenStatus501Json2;

export type ClassSessionCreatePresentationTokenOptions = {
  body?: never;
  path: ClassSessionCreatePresentationTokenPath;
  query?: never;
  headers?: never;
};

export type ClassSessionCreatePresentationTokenResponses = {
  "200":
    | {
        contentType: "text/plain";
        data: ClassSessionCreatePresentationTokenStatus200Plain;
      }
    | {
        contentType: "application/json";
        data: ClassSessionCreatePresentationTokenStatus200Json;
      }
    | {
        contentType: "text/json";
        data: ClassSessionCreatePresentationTokenStatus200Json2;
      };
  "400":
    | {
        contentType: "text/plain";
        data: ClassSessionCreatePresentationTokenStatus400Plain;
      }
    | {
        contentType: "application/json";
        data: ClassSessionCreatePresentationTokenStatus400Json;
      }
    | {
        contentType: "text/json";
        data: ClassSessionCreatePresentationTokenStatus400Json2;
      };
  "401":
    | {
        contentType: "text/plain";
        data: ClassSessionCreatePresentationTokenStatus401Plain;
      }
    | {
        contentType: "application/json";
        data: ClassSessionCreatePresentationTokenStatus401Json;
      }
    | {
        contentType: "text/json";
        data: ClassSessionCreatePresentationTokenStatus401Json2;
      };
  "403":
    | {
        contentType: "text/plain";
        data: ClassSessionCreatePresentationTokenStatus403Plain;
      }
    | {
        contentType: "application/json";
        data: ClassSessionCreatePresentationTokenStatus403Json;
      }
    | {
        contentType: "text/json";
        data: ClassSessionCreatePresentationTokenStatus403Json2;
      };
  "404":
    | {
        contentType: "text/plain";
        data: ClassSessionCreatePresentationTokenStatus404Plain;
      }
    | {
        contentType: "application/json";
        data: ClassSessionCreatePresentationTokenStatus404Json;
      }
    | {
        contentType: "text/json";
        data: ClassSessionCreatePresentationTokenStatus404Json2;
      };
  "500":
    | {
        contentType: "text/plain";
        data: ClassSessionCreatePresentationTokenStatus500Plain;
      }
    | {
        contentType: "application/json";
        data: ClassSessionCreatePresentationTokenStatus500Json;
      }
    | {
        contentType: "text/json";
        data: ClassSessionCreatePresentationTokenStatus500Json2;
      };
  "501":
    | {
        contentType: "text/plain";
        data: ClassSessionCreatePresentationTokenStatus501Plain;
      }
    | {
        contentType: "application/json";
        data: ClassSessionCreatePresentationTokenStatus501Json;
      }
    | {
        contentType: "text/json";
        data: ClassSessionCreatePresentationTokenStatus501Json2;
      };
};

/**
 * @description Union of all possible responses
 */
export type ClassSessionCreatePresentationTokenResponse =
  | ClassSessionCreatePresentationTokenStatus200
  | ClassSessionCreatePresentationTokenStatus400
  | ClassSessionCreatePresentationTokenStatus401
  | ClassSessionCreatePresentationTokenStatus403
  | ClassSessionCreatePresentationTokenStatus404
  | ClassSessionCreatePresentationTokenStatus500
  | ClassSessionCreatePresentationTokenStatus501;
