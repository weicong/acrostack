/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse";

export type PageAdminSetAsHomePagePath = {
  /**
   * @description
   * Format: `uuid`
   * @type string
   */
  id: string;
};

export type PageAdminSetAsHomePageStatus200 = unknown;

export type PageAdminSetAsHomePageStatus204 = unknown;

export type PageAdminSetAsHomePageStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type PageAdminSetAsHomePageStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

export type PageAdminSetAsHomePageStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type PageAdminSetAsHomePageStatus400 =
  | PageAdminSetAsHomePageStatus400Plain
  | PageAdminSetAsHomePageStatus400Json
  | PageAdminSetAsHomePageStatus400Json2;

export type PageAdminSetAsHomePageStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type PageAdminSetAsHomePageStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

export type PageAdminSetAsHomePageStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type PageAdminSetAsHomePageStatus401 =
  | PageAdminSetAsHomePageStatus401Plain
  | PageAdminSetAsHomePageStatus401Json
  | PageAdminSetAsHomePageStatus401Json2;

export type PageAdminSetAsHomePageStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type PageAdminSetAsHomePageStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

export type PageAdminSetAsHomePageStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type PageAdminSetAsHomePageStatus403 =
  | PageAdminSetAsHomePageStatus403Plain
  | PageAdminSetAsHomePageStatus403Json
  | PageAdminSetAsHomePageStatus403Json2;

export type PageAdminSetAsHomePageStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type PageAdminSetAsHomePageStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

export type PageAdminSetAsHomePageStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type PageAdminSetAsHomePageStatus404 =
  | PageAdminSetAsHomePageStatus404Plain
  | PageAdminSetAsHomePageStatus404Json
  | PageAdminSetAsHomePageStatus404Json2;

export type PageAdminSetAsHomePageStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type PageAdminSetAsHomePageStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

export type PageAdminSetAsHomePageStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type PageAdminSetAsHomePageStatus500 =
  | PageAdminSetAsHomePageStatus500Plain
  | PageAdminSetAsHomePageStatus500Json
  | PageAdminSetAsHomePageStatus500Json2;

export type PageAdminSetAsHomePageStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type PageAdminSetAsHomePageStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

export type PageAdminSetAsHomePageStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type PageAdminSetAsHomePageStatus501 =
  | PageAdminSetAsHomePageStatus501Plain
  | PageAdminSetAsHomePageStatus501Json
  | PageAdminSetAsHomePageStatus501Json2;

export type PageAdminSetAsHomePageOptions = {
  body?: never;
  path: PageAdminSetAsHomePagePath;
  query?: never;
  headers?: never;
};

export type PageAdminSetAsHomePageResponses = {
  "200": PageAdminSetAsHomePageStatus200;
  "204": PageAdminSetAsHomePageStatus204;
  "400":
    | {
        contentType: "text/plain";
        data: PageAdminSetAsHomePageStatus400Plain;
      }
    | {
        contentType: "application/json";
        data: PageAdminSetAsHomePageStatus400Json;
      }
    | {
        contentType: "text/json";
        data: PageAdminSetAsHomePageStatus400Json2;
      };
  "401":
    | {
        contentType: "text/plain";
        data: PageAdminSetAsHomePageStatus401Plain;
      }
    | {
        contentType: "application/json";
        data: PageAdminSetAsHomePageStatus401Json;
      }
    | {
        contentType: "text/json";
        data: PageAdminSetAsHomePageStatus401Json2;
      };
  "403":
    | {
        contentType: "text/plain";
        data: PageAdminSetAsHomePageStatus403Plain;
      }
    | {
        contentType: "application/json";
        data: PageAdminSetAsHomePageStatus403Json;
      }
    | {
        contentType: "text/json";
        data: PageAdminSetAsHomePageStatus403Json2;
      };
  "404":
    | {
        contentType: "text/plain";
        data: PageAdminSetAsHomePageStatus404Plain;
      }
    | {
        contentType: "application/json";
        data: PageAdminSetAsHomePageStatus404Json;
      }
    | {
        contentType: "text/json";
        data: PageAdminSetAsHomePageStatus404Json2;
      };
  "500":
    | {
        contentType: "text/plain";
        data: PageAdminSetAsHomePageStatus500Plain;
      }
    | {
        contentType: "application/json";
        data: PageAdminSetAsHomePageStatus500Json;
      }
    | {
        contentType: "text/json";
        data: PageAdminSetAsHomePageStatus500Json2;
      };
  "501":
    | {
        contentType: "text/plain";
        data: PageAdminSetAsHomePageStatus501Plain;
      }
    | {
        contentType: "application/json";
        data: PageAdminSetAsHomePageStatus501Json;
      }
    | {
        contentType: "text/json";
        data: PageAdminSetAsHomePageStatus501Json2;
      };
};

/**
 * @description Union of all possible responses
 */
export type PageAdminSetAsHomePageResponse =
  | PageAdminSetAsHomePageStatus200
  | PageAdminSetAsHomePageStatus204
  | PageAdminSetAsHomePageStatus400
  | PageAdminSetAsHomePageStatus401
  | PageAdminSetAsHomePageStatus403
  | PageAdminSetAsHomePageStatus404
  | PageAdminSetAsHomePageStatus500
  | PageAdminSetAsHomePageStatus501;
