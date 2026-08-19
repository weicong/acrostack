/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse";

/**
 * @description
 * Format: `int32`
 * @type integer
 */
export type ContactGetTotalUnreadMessageCountStatus200Plain = number;

/**
 * @description
 * Format: `int32`
 * @type integer
 */
export type ContactGetTotalUnreadMessageCountStatus200Json = number;

/**
 * @description
 * Format: `int32`
 * @type integer
 */
export type ContactGetTotalUnreadMessageCountStatus200Json2 = number;

export type ContactGetTotalUnreadMessageCountStatus200 =
  | ContactGetTotalUnreadMessageCountStatus200Plain
  | ContactGetTotalUnreadMessageCountStatus200Json
  | ContactGetTotalUnreadMessageCountStatus200Json2;

export type ContactGetTotalUnreadMessageCountStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type ContactGetTotalUnreadMessageCountStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

export type ContactGetTotalUnreadMessageCountStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ContactGetTotalUnreadMessageCountStatus400 =
  | ContactGetTotalUnreadMessageCountStatus400Plain
  | ContactGetTotalUnreadMessageCountStatus400Json
  | ContactGetTotalUnreadMessageCountStatus400Json2;

export type ContactGetTotalUnreadMessageCountStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type ContactGetTotalUnreadMessageCountStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

export type ContactGetTotalUnreadMessageCountStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ContactGetTotalUnreadMessageCountStatus401 =
  | ContactGetTotalUnreadMessageCountStatus401Plain
  | ContactGetTotalUnreadMessageCountStatus401Json
  | ContactGetTotalUnreadMessageCountStatus401Json2;

export type ContactGetTotalUnreadMessageCountStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type ContactGetTotalUnreadMessageCountStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

export type ContactGetTotalUnreadMessageCountStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ContactGetTotalUnreadMessageCountStatus403 =
  | ContactGetTotalUnreadMessageCountStatus403Plain
  | ContactGetTotalUnreadMessageCountStatus403Json
  | ContactGetTotalUnreadMessageCountStatus403Json2;

export type ContactGetTotalUnreadMessageCountStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type ContactGetTotalUnreadMessageCountStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

export type ContactGetTotalUnreadMessageCountStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ContactGetTotalUnreadMessageCountStatus404 =
  | ContactGetTotalUnreadMessageCountStatus404Plain
  | ContactGetTotalUnreadMessageCountStatus404Json
  | ContactGetTotalUnreadMessageCountStatus404Json2;

export type ContactGetTotalUnreadMessageCountStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type ContactGetTotalUnreadMessageCountStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

export type ContactGetTotalUnreadMessageCountStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ContactGetTotalUnreadMessageCountStatus500 =
  | ContactGetTotalUnreadMessageCountStatus500Plain
  | ContactGetTotalUnreadMessageCountStatus500Json
  | ContactGetTotalUnreadMessageCountStatus500Json2;

export type ContactGetTotalUnreadMessageCountStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type ContactGetTotalUnreadMessageCountStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

export type ContactGetTotalUnreadMessageCountStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ContactGetTotalUnreadMessageCountStatus501 =
  | ContactGetTotalUnreadMessageCountStatus501Plain
  | ContactGetTotalUnreadMessageCountStatus501Json
  | ContactGetTotalUnreadMessageCountStatus501Json2;

export type ContactGetTotalUnreadMessageCountOptions = {
  body?: never;
  path?: never;
  query?: never;
  headers?: never;
};

export type ContactGetTotalUnreadMessageCountResponses = {
  "200":
    | {
        contentType: "text/plain";
        data: ContactGetTotalUnreadMessageCountStatus200Plain;
      }
    | {
        contentType: "application/json";
        data: ContactGetTotalUnreadMessageCountStatus200Json;
      }
    | {
        contentType: "text/json";
        data: ContactGetTotalUnreadMessageCountStatus200Json2;
      };
  "400":
    | {
        contentType: "text/plain";
        data: ContactGetTotalUnreadMessageCountStatus400Plain;
      }
    | {
        contentType: "application/json";
        data: ContactGetTotalUnreadMessageCountStatus400Json;
      }
    | {
        contentType: "text/json";
        data: ContactGetTotalUnreadMessageCountStatus400Json2;
      };
  "401":
    | {
        contentType: "text/plain";
        data: ContactGetTotalUnreadMessageCountStatus401Plain;
      }
    | {
        contentType: "application/json";
        data: ContactGetTotalUnreadMessageCountStatus401Json;
      }
    | {
        contentType: "text/json";
        data: ContactGetTotalUnreadMessageCountStatus401Json2;
      };
  "403":
    | {
        contentType: "text/plain";
        data: ContactGetTotalUnreadMessageCountStatus403Plain;
      }
    | {
        contentType: "application/json";
        data: ContactGetTotalUnreadMessageCountStatus403Json;
      }
    | {
        contentType: "text/json";
        data: ContactGetTotalUnreadMessageCountStatus403Json2;
      };
  "404":
    | {
        contentType: "text/plain";
        data: ContactGetTotalUnreadMessageCountStatus404Plain;
      }
    | {
        contentType: "application/json";
        data: ContactGetTotalUnreadMessageCountStatus404Json;
      }
    | {
        contentType: "text/json";
        data: ContactGetTotalUnreadMessageCountStatus404Json2;
      };
  "500":
    | {
        contentType: "text/plain";
        data: ContactGetTotalUnreadMessageCountStatus500Plain;
      }
    | {
        contentType: "application/json";
        data: ContactGetTotalUnreadMessageCountStatus500Json;
      }
    | {
        contentType: "text/json";
        data: ContactGetTotalUnreadMessageCountStatus500Json2;
      };
  "501":
    | {
        contentType: "text/plain";
        data: ContactGetTotalUnreadMessageCountStatus501Plain;
      }
    | {
        contentType: "application/json";
        data: ContactGetTotalUnreadMessageCountStatus501Json;
      }
    | {
        contentType: "text/json";
        data: ContactGetTotalUnreadMessageCountStatus501Json2;
      };
};

/**
 * @description Union of all possible responses
 */
export type ContactGetTotalUnreadMessageCountResponse =
  | ContactGetTotalUnreadMessageCountStatus200
  | ContactGetTotalUnreadMessageCountStatus400
  | ContactGetTotalUnreadMessageCountStatus401
  | ContactGetTotalUnreadMessageCountStatus403
  | ContactGetTotalUnreadMessageCountStatus404
  | ContactGetTotalUnreadMessageCountStatus500
  | ContactGetTotalUnreadMessageCountStatus501;
