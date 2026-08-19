/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse";
import type { VoloCmsKitAdminPagesPageDto } from "../volo/cmsKit/admin/pages/PageDto";

export type PageAdminGetPath = {
  /**
   * @description
   * Format: `uuid`
   * @type string
   */
  id: string;
};

export type PageAdminGetStatus200Plain = VoloCmsKitAdminPagesPageDto;

export type PageAdminGetStatus200Json = VoloCmsKitAdminPagesPageDto;

export type PageAdminGetStatus200Json2 = VoloCmsKitAdminPagesPageDto;

export type PageAdminGetStatus200 =
  | PageAdminGetStatus200Plain
  | PageAdminGetStatus200Json
  | PageAdminGetStatus200Json2;

export type PageAdminGetStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type PageAdminGetStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

export type PageAdminGetStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type PageAdminGetStatus400 =
  | PageAdminGetStatus400Plain
  | PageAdminGetStatus400Json
  | PageAdminGetStatus400Json2;

export type PageAdminGetStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type PageAdminGetStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

export type PageAdminGetStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type PageAdminGetStatus401 =
  | PageAdminGetStatus401Plain
  | PageAdminGetStatus401Json
  | PageAdminGetStatus401Json2;

export type PageAdminGetStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type PageAdminGetStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

export type PageAdminGetStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type PageAdminGetStatus403 =
  | PageAdminGetStatus403Plain
  | PageAdminGetStatus403Json
  | PageAdminGetStatus403Json2;

export type PageAdminGetStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type PageAdminGetStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

export type PageAdminGetStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type PageAdminGetStatus404 =
  | PageAdminGetStatus404Plain
  | PageAdminGetStatus404Json
  | PageAdminGetStatus404Json2;

export type PageAdminGetStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type PageAdminGetStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

export type PageAdminGetStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type PageAdminGetStatus500 =
  | PageAdminGetStatus500Plain
  | PageAdminGetStatus500Json
  | PageAdminGetStatus500Json2;

export type PageAdminGetStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type PageAdminGetStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

export type PageAdminGetStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type PageAdminGetStatus501 =
  | PageAdminGetStatus501Plain
  | PageAdminGetStatus501Json
  | PageAdminGetStatus501Json2;

export type PageAdminGetOptions = {
  body?: never;
  path: PageAdminGetPath;
  query?: never;
  headers?: never;
};

export type PageAdminGetResponses = {
  "200":
    | {
        contentType: "text/plain";
        data: PageAdminGetStatus200Plain;
      }
    | {
        contentType: "application/json";
        data: PageAdminGetStatus200Json;
      }
    | {
        contentType: "text/json";
        data: PageAdminGetStatus200Json2;
      };
  "400":
    | {
        contentType: "text/plain";
        data: PageAdminGetStatus400Plain;
      }
    | {
        contentType: "application/json";
        data: PageAdminGetStatus400Json;
      }
    | {
        contentType: "text/json";
        data: PageAdminGetStatus400Json2;
      };
  "401":
    | {
        contentType: "text/plain";
        data: PageAdminGetStatus401Plain;
      }
    | {
        contentType: "application/json";
        data: PageAdminGetStatus401Json;
      }
    | {
        contentType: "text/json";
        data: PageAdminGetStatus401Json2;
      };
  "403":
    | {
        contentType: "text/plain";
        data: PageAdminGetStatus403Plain;
      }
    | {
        contentType: "application/json";
        data: PageAdminGetStatus403Json;
      }
    | {
        contentType: "text/json";
        data: PageAdminGetStatus403Json2;
      };
  "404":
    | {
        contentType: "text/plain";
        data: PageAdminGetStatus404Plain;
      }
    | {
        contentType: "application/json";
        data: PageAdminGetStatus404Json;
      }
    | {
        contentType: "text/json";
        data: PageAdminGetStatus404Json2;
      };
  "500":
    | {
        contentType: "text/plain";
        data: PageAdminGetStatus500Plain;
      }
    | {
        contentType: "application/json";
        data: PageAdminGetStatus500Json;
      }
    | {
        contentType: "text/json";
        data: PageAdminGetStatus500Json2;
      };
  "501":
    | {
        contentType: "text/plain";
        data: PageAdminGetStatus501Plain;
      }
    | {
        contentType: "application/json";
        data: PageAdminGetStatus501Json;
      }
    | {
        contentType: "text/json";
        data: PageAdminGetStatus501Json2;
      };
};

/**
 * @description Union of all possible responses
 */
export type PageAdminGetResponse =
  | PageAdminGetStatus200
  | PageAdminGetStatus400
  | PageAdminGetStatus401
  | PageAdminGetStatus403
  | PageAdminGetStatus404
  | PageAdminGetStatus500
  | PageAdminGetStatus501;
