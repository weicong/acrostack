/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse";
import type { VoloCmsKitAdminTagsTagCreateDto } from "../volo/cmsKit/admin/tags/TagCreateDto";
import type { VoloCmsKitTagsTagDto } from "../volo/cmsKit/tags/TagDto";

export type TagAdminCreateStatus200Plain = VoloCmsKitTagsTagDto;

export type TagAdminCreateStatus200Json = VoloCmsKitTagsTagDto;

export type TagAdminCreateStatus200Json2 = VoloCmsKitTagsTagDto;

export type TagAdminCreateStatus200 =
  | TagAdminCreateStatus200Plain
  | TagAdminCreateStatus200Json
  | TagAdminCreateStatus200Json2;

export type TagAdminCreateStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type TagAdminCreateStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

export type TagAdminCreateStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type TagAdminCreateStatus400 =
  | TagAdminCreateStatus400Plain
  | TagAdminCreateStatus400Json
  | TagAdminCreateStatus400Json2;

export type TagAdminCreateStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type TagAdminCreateStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

export type TagAdminCreateStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type TagAdminCreateStatus401 =
  | TagAdminCreateStatus401Plain
  | TagAdminCreateStatus401Json
  | TagAdminCreateStatus401Json2;

export type TagAdminCreateStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type TagAdminCreateStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

export type TagAdminCreateStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type TagAdminCreateStatus403 =
  | TagAdminCreateStatus403Plain
  | TagAdminCreateStatus403Json
  | TagAdminCreateStatus403Json2;

export type TagAdminCreateStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type TagAdminCreateStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

export type TagAdminCreateStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type TagAdminCreateStatus404 =
  | TagAdminCreateStatus404Plain
  | TagAdminCreateStatus404Json
  | TagAdminCreateStatus404Json2;

export type TagAdminCreateStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type TagAdminCreateStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

export type TagAdminCreateStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type TagAdminCreateStatus500 =
  | TagAdminCreateStatus500Plain
  | TagAdminCreateStatus500Json
  | TagAdminCreateStatus500Json2;

export type TagAdminCreateStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type TagAdminCreateStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

export type TagAdminCreateStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type TagAdminCreateStatus501 =
  | TagAdminCreateStatus501Plain
  | TagAdminCreateStatus501Json
  | TagAdminCreateStatus501Json2;

export type TagAdminCreateBodyJson =
  | Omit<NonNullable<VoloCmsKitAdminTagsTagCreateDto>, "extraProperties">
  | undefined;

export type TagAdminCreateBodyJson2 =
  | Omit<NonNullable<VoloCmsKitAdminTagsTagCreateDto>, "extraProperties">
  | undefined;

export type TagAdminCreateBodyJson3 =
  | Omit<NonNullable<VoloCmsKitAdminTagsTagCreateDto>, "extraProperties">
  | undefined;

export type TagAdminCreateBody =
  | TagAdminCreateBodyJson
  | TagAdminCreateBodyJson2
  | TagAdminCreateBodyJson3;

export type TagAdminCreateOptions = {
  body: TagAdminCreateBody;
  path?: never;
  query?: never;
  headers?: never;
};

export type TagAdminCreateResponses = {
  "200":
    | {
        contentType: "text/plain";
        data: TagAdminCreateStatus200Plain;
      }
    | {
        contentType: "application/json";
        data: TagAdminCreateStatus200Json;
      }
    | {
        contentType: "text/json";
        data: TagAdminCreateStatus200Json2;
      };
  "400":
    | {
        contentType: "text/plain";
        data: TagAdminCreateStatus400Plain;
      }
    | {
        contentType: "application/json";
        data: TagAdminCreateStatus400Json;
      }
    | {
        contentType: "text/json";
        data: TagAdminCreateStatus400Json2;
      };
  "401":
    | {
        contentType: "text/plain";
        data: TagAdminCreateStatus401Plain;
      }
    | {
        contentType: "application/json";
        data: TagAdminCreateStatus401Json;
      }
    | {
        contentType: "text/json";
        data: TagAdminCreateStatus401Json2;
      };
  "403":
    | {
        contentType: "text/plain";
        data: TagAdminCreateStatus403Plain;
      }
    | {
        contentType: "application/json";
        data: TagAdminCreateStatus403Json;
      }
    | {
        contentType: "text/json";
        data: TagAdminCreateStatus403Json2;
      };
  "404":
    | {
        contentType: "text/plain";
        data: TagAdminCreateStatus404Plain;
      }
    | {
        contentType: "application/json";
        data: TagAdminCreateStatus404Json;
      }
    | {
        contentType: "text/json";
        data: TagAdminCreateStatus404Json2;
      };
  "500":
    | {
        contentType: "text/plain";
        data: TagAdminCreateStatus500Plain;
      }
    | {
        contentType: "application/json";
        data: TagAdminCreateStatus500Json;
      }
    | {
        contentType: "text/json";
        data: TagAdminCreateStatus500Json2;
      };
  "501":
    | {
        contentType: "text/plain";
        data: TagAdminCreateStatus501Plain;
      }
    | {
        contentType: "application/json";
        data: TagAdminCreateStatus501Json;
      }
    | {
        contentType: "text/json";
        data: TagAdminCreateStatus501Json2;
      };
};

/**
 * @description Union of all possible responses
 */
export type TagAdminCreateResponse =
  | TagAdminCreateStatus200
  | TagAdminCreateStatus400
  | TagAdminCreateStatus401
  | TagAdminCreateStatus403
  | TagAdminCreateStatus404
  | TagAdminCreateStatus500
  | TagAdminCreateStatus501;
