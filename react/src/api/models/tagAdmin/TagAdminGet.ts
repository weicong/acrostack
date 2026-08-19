/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse";
import type { VoloCmsKitTagsTagDto } from "../volo/cmsKit/tags/TagDto";

export type TagAdminGetPath = {
  /**
   * @description
   * Format: `uuid`
   * @type string
   */
  id: string;
};

export type TagAdminGetStatus200Plain = VoloCmsKitTagsTagDto;

export type TagAdminGetStatus200Json = VoloCmsKitTagsTagDto;

export type TagAdminGetStatus200Json2 = VoloCmsKitTagsTagDto;

export type TagAdminGetStatus200 =
  | TagAdminGetStatus200Plain
  | TagAdminGetStatus200Json
  | TagAdminGetStatus200Json2;

export type TagAdminGetStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type TagAdminGetStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

export type TagAdminGetStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type TagAdminGetStatus400 =
  | TagAdminGetStatus400Plain
  | TagAdminGetStatus400Json
  | TagAdminGetStatus400Json2;

export type TagAdminGetStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type TagAdminGetStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

export type TagAdminGetStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type TagAdminGetStatus401 =
  | TagAdminGetStatus401Plain
  | TagAdminGetStatus401Json
  | TagAdminGetStatus401Json2;

export type TagAdminGetStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type TagAdminGetStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

export type TagAdminGetStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type TagAdminGetStatus403 =
  | TagAdminGetStatus403Plain
  | TagAdminGetStatus403Json
  | TagAdminGetStatus403Json2;

export type TagAdminGetStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type TagAdminGetStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

export type TagAdminGetStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type TagAdminGetStatus404 =
  | TagAdminGetStatus404Plain
  | TagAdminGetStatus404Json
  | TagAdminGetStatus404Json2;

export type TagAdminGetStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type TagAdminGetStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

export type TagAdminGetStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type TagAdminGetStatus500 =
  | TagAdminGetStatus500Plain
  | TagAdminGetStatus500Json
  | TagAdminGetStatus500Json2;

export type TagAdminGetStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type TagAdminGetStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

export type TagAdminGetStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type TagAdminGetStatus501 =
  | TagAdminGetStatus501Plain
  | TagAdminGetStatus501Json
  | TagAdminGetStatus501Json2;

export type TagAdminGetOptions = {
  body?: never;
  path: TagAdminGetPath;
  query?: never;
  headers?: never;
};

export type TagAdminGetResponses = {
  "200":
    | {
        contentType: "text/plain";
        data: TagAdminGetStatus200Plain;
      }
    | {
        contentType: "application/json";
        data: TagAdminGetStatus200Json;
      }
    | {
        contentType: "text/json";
        data: TagAdminGetStatus200Json2;
      };
  "400":
    | {
        contentType: "text/plain";
        data: TagAdminGetStatus400Plain;
      }
    | {
        contentType: "application/json";
        data: TagAdminGetStatus400Json;
      }
    | {
        contentType: "text/json";
        data: TagAdminGetStatus400Json2;
      };
  "401":
    | {
        contentType: "text/plain";
        data: TagAdminGetStatus401Plain;
      }
    | {
        contentType: "application/json";
        data: TagAdminGetStatus401Json;
      }
    | {
        contentType: "text/json";
        data: TagAdminGetStatus401Json2;
      };
  "403":
    | {
        contentType: "text/plain";
        data: TagAdminGetStatus403Plain;
      }
    | {
        contentType: "application/json";
        data: TagAdminGetStatus403Json;
      }
    | {
        contentType: "text/json";
        data: TagAdminGetStatus403Json2;
      };
  "404":
    | {
        contentType: "text/plain";
        data: TagAdminGetStatus404Plain;
      }
    | {
        contentType: "application/json";
        data: TagAdminGetStatus404Json;
      }
    | {
        contentType: "text/json";
        data: TagAdminGetStatus404Json2;
      };
  "500":
    | {
        contentType: "text/plain";
        data: TagAdminGetStatus500Plain;
      }
    | {
        contentType: "application/json";
        data: TagAdminGetStatus500Json;
      }
    | {
        contentType: "text/json";
        data: TagAdminGetStatus500Json2;
      };
  "501":
    | {
        contentType: "text/plain";
        data: TagAdminGetStatus501Plain;
      }
    | {
        contentType: "application/json";
        data: TagAdminGetStatus501Json;
      }
    | {
        contentType: "text/json";
        data: TagAdminGetStatus501Json2;
      };
};

/**
 * @description Union of all possible responses
 */
export type TagAdminGetResponse =
  | TagAdminGetStatus200
  | TagAdminGetStatus400
  | TagAdminGetStatus401
  | TagAdminGetStatus403
  | TagAdminGetStatus404
  | TagAdminGetStatus500
  | TagAdminGetStatus501;
