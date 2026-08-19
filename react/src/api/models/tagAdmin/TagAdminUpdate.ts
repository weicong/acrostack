/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse";
import type { VoloCmsKitAdminTagsTagUpdateDto } from "../volo/cmsKit/admin/tags/TagUpdateDto";
import type { VoloCmsKitTagsTagDto } from "../volo/cmsKit/tags/TagDto";

export type TagAdminUpdatePath = {
  /**
   * @description
   * Format: `uuid`
   * @type string
   */
  id: string;
};

export type TagAdminUpdateStatus200Plain = VoloCmsKitTagsTagDto;

export type TagAdminUpdateStatus200Json = VoloCmsKitTagsTagDto;

export type TagAdminUpdateStatus200Json2 = VoloCmsKitTagsTagDto;

export type TagAdminUpdateStatus200 =
  | TagAdminUpdateStatus200Plain
  | TagAdminUpdateStatus200Json
  | TagAdminUpdateStatus200Json2;

export type TagAdminUpdateStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type TagAdminUpdateStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

export type TagAdminUpdateStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type TagAdminUpdateStatus400 =
  | TagAdminUpdateStatus400Plain
  | TagAdminUpdateStatus400Json
  | TagAdminUpdateStatus400Json2;

export type TagAdminUpdateStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type TagAdminUpdateStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

export type TagAdminUpdateStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type TagAdminUpdateStatus401 =
  | TagAdminUpdateStatus401Plain
  | TagAdminUpdateStatus401Json
  | TagAdminUpdateStatus401Json2;

export type TagAdminUpdateStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type TagAdminUpdateStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

export type TagAdminUpdateStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type TagAdminUpdateStatus403 =
  | TagAdminUpdateStatus403Plain
  | TagAdminUpdateStatus403Json
  | TagAdminUpdateStatus403Json2;

export type TagAdminUpdateStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type TagAdminUpdateStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

export type TagAdminUpdateStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type TagAdminUpdateStatus404 =
  | TagAdminUpdateStatus404Plain
  | TagAdminUpdateStatus404Json
  | TagAdminUpdateStatus404Json2;

export type TagAdminUpdateStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type TagAdminUpdateStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

export type TagAdminUpdateStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type TagAdminUpdateStatus500 =
  | TagAdminUpdateStatus500Plain
  | TagAdminUpdateStatus500Json
  | TagAdminUpdateStatus500Json2;

export type TagAdminUpdateStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type TagAdminUpdateStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

export type TagAdminUpdateStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type TagAdminUpdateStatus501 =
  | TagAdminUpdateStatus501Plain
  | TagAdminUpdateStatus501Json
  | TagAdminUpdateStatus501Json2;

export type TagAdminUpdateBodyJson =
  | Omit<NonNullable<VoloCmsKitAdminTagsTagUpdateDto>, "extraProperties">
  | undefined;

export type TagAdminUpdateBodyJson2 =
  | Omit<NonNullable<VoloCmsKitAdminTagsTagUpdateDto>, "extraProperties">
  | undefined;

export type TagAdminUpdateBodyJson3 =
  | Omit<NonNullable<VoloCmsKitAdminTagsTagUpdateDto>, "extraProperties">
  | undefined;

export type TagAdminUpdateBody =
  | TagAdminUpdateBodyJson
  | TagAdminUpdateBodyJson2
  | TagAdminUpdateBodyJson3;

export type TagAdminUpdateOptions = {
  body: TagAdminUpdateBody;
  path: TagAdminUpdatePath;
  query?: never;
  headers?: never;
};

export type TagAdminUpdateResponses = {
  "200":
    | {
        contentType: "text/plain";
        data: TagAdminUpdateStatus200Plain;
      }
    | {
        contentType: "application/json";
        data: TagAdminUpdateStatus200Json;
      }
    | {
        contentType: "text/json";
        data: TagAdminUpdateStatus200Json2;
      };
  "400":
    | {
        contentType: "text/plain";
        data: TagAdminUpdateStatus400Plain;
      }
    | {
        contentType: "application/json";
        data: TagAdminUpdateStatus400Json;
      }
    | {
        contentType: "text/json";
        data: TagAdminUpdateStatus400Json2;
      };
  "401":
    | {
        contentType: "text/plain";
        data: TagAdminUpdateStatus401Plain;
      }
    | {
        contentType: "application/json";
        data: TagAdminUpdateStatus401Json;
      }
    | {
        contentType: "text/json";
        data: TagAdminUpdateStatus401Json2;
      };
  "403":
    | {
        contentType: "text/plain";
        data: TagAdminUpdateStatus403Plain;
      }
    | {
        contentType: "application/json";
        data: TagAdminUpdateStatus403Json;
      }
    | {
        contentType: "text/json";
        data: TagAdminUpdateStatus403Json2;
      };
  "404":
    | {
        contentType: "text/plain";
        data: TagAdminUpdateStatus404Plain;
      }
    | {
        contentType: "application/json";
        data: TagAdminUpdateStatus404Json;
      }
    | {
        contentType: "text/json";
        data: TagAdminUpdateStatus404Json2;
      };
  "500":
    | {
        contentType: "text/plain";
        data: TagAdminUpdateStatus500Plain;
      }
    | {
        contentType: "application/json";
        data: TagAdminUpdateStatus500Json;
      }
    | {
        contentType: "text/json";
        data: TagAdminUpdateStatus500Json2;
      };
  "501":
    | {
        contentType: "text/plain";
        data: TagAdminUpdateStatus501Plain;
      }
    | {
        contentType: "application/json";
        data: TagAdminUpdateStatus501Json;
      }
    | {
        contentType: "text/json";
        data: TagAdminUpdateStatus501Json2;
      };
};

/**
 * @description Union of all possible responses
 */
export type TagAdminUpdateResponse =
  | TagAdminUpdateStatus200
  | TagAdminUpdateStatus400
  | TagAdminUpdateStatus401
  | TagAdminUpdateStatus403
  | TagAdminUpdateStatus404
  | TagAdminUpdateStatus500
  | TagAdminUpdateStatus501;
