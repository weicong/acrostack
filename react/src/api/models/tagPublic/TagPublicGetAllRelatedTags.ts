/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse";
import type { VoloCmsKitTagsTagDto } from "../volo/cmsKit/tags/TagDto";

export type TagPublicGetAllRelatedTagsPath = {
  entityType: string;
  entityId: string;
};

export type TagPublicGetAllRelatedTagsStatus200Plain = VoloCmsKitTagsTagDto[];

export type TagPublicGetAllRelatedTagsStatus200Json = VoloCmsKitTagsTagDto[];

export type TagPublicGetAllRelatedTagsStatus200Json2 = VoloCmsKitTagsTagDto[];

export type TagPublicGetAllRelatedTagsStatus200 =
  | TagPublicGetAllRelatedTagsStatus200Plain
  | TagPublicGetAllRelatedTagsStatus200Json
  | TagPublicGetAllRelatedTagsStatus200Json2;

export type TagPublicGetAllRelatedTagsStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type TagPublicGetAllRelatedTagsStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

export type TagPublicGetAllRelatedTagsStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type TagPublicGetAllRelatedTagsStatus400 =
  | TagPublicGetAllRelatedTagsStatus400Plain
  | TagPublicGetAllRelatedTagsStatus400Json
  | TagPublicGetAllRelatedTagsStatus400Json2;

export type TagPublicGetAllRelatedTagsStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type TagPublicGetAllRelatedTagsStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

export type TagPublicGetAllRelatedTagsStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type TagPublicGetAllRelatedTagsStatus401 =
  | TagPublicGetAllRelatedTagsStatus401Plain
  | TagPublicGetAllRelatedTagsStatus401Json
  | TagPublicGetAllRelatedTagsStatus401Json2;

export type TagPublicGetAllRelatedTagsStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type TagPublicGetAllRelatedTagsStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

export type TagPublicGetAllRelatedTagsStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type TagPublicGetAllRelatedTagsStatus403 =
  | TagPublicGetAllRelatedTagsStatus403Plain
  | TagPublicGetAllRelatedTagsStatus403Json
  | TagPublicGetAllRelatedTagsStatus403Json2;

export type TagPublicGetAllRelatedTagsStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type TagPublicGetAllRelatedTagsStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

export type TagPublicGetAllRelatedTagsStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type TagPublicGetAllRelatedTagsStatus404 =
  | TagPublicGetAllRelatedTagsStatus404Plain
  | TagPublicGetAllRelatedTagsStatus404Json
  | TagPublicGetAllRelatedTagsStatus404Json2;

export type TagPublicGetAllRelatedTagsStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type TagPublicGetAllRelatedTagsStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

export type TagPublicGetAllRelatedTagsStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type TagPublicGetAllRelatedTagsStatus500 =
  | TagPublicGetAllRelatedTagsStatus500Plain
  | TagPublicGetAllRelatedTagsStatus500Json
  | TagPublicGetAllRelatedTagsStatus500Json2;

export type TagPublicGetAllRelatedTagsStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type TagPublicGetAllRelatedTagsStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

export type TagPublicGetAllRelatedTagsStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type TagPublicGetAllRelatedTagsStatus501 =
  | TagPublicGetAllRelatedTagsStatus501Plain
  | TagPublicGetAllRelatedTagsStatus501Json
  | TagPublicGetAllRelatedTagsStatus501Json2;

export type TagPublicGetAllRelatedTagsOptions = {
  body?: never;
  path: TagPublicGetAllRelatedTagsPath;
  query?: never;
  headers?: never;
};

export type TagPublicGetAllRelatedTagsResponses = {
  "200":
    | {
        contentType: "text/plain";
        data: TagPublicGetAllRelatedTagsStatus200Plain;
      }
    | {
        contentType: "application/json";
        data: TagPublicGetAllRelatedTagsStatus200Json;
      }
    | {
        contentType: "text/json";
        data: TagPublicGetAllRelatedTagsStatus200Json2;
      };
  "400":
    | {
        contentType: "text/plain";
        data: TagPublicGetAllRelatedTagsStatus400Plain;
      }
    | {
        contentType: "application/json";
        data: TagPublicGetAllRelatedTagsStatus400Json;
      }
    | {
        contentType: "text/json";
        data: TagPublicGetAllRelatedTagsStatus400Json2;
      };
  "401":
    | {
        contentType: "text/plain";
        data: TagPublicGetAllRelatedTagsStatus401Plain;
      }
    | {
        contentType: "application/json";
        data: TagPublicGetAllRelatedTagsStatus401Json;
      }
    | {
        contentType: "text/json";
        data: TagPublicGetAllRelatedTagsStatus401Json2;
      };
  "403":
    | {
        contentType: "text/plain";
        data: TagPublicGetAllRelatedTagsStatus403Plain;
      }
    | {
        contentType: "application/json";
        data: TagPublicGetAllRelatedTagsStatus403Json;
      }
    | {
        contentType: "text/json";
        data: TagPublicGetAllRelatedTagsStatus403Json2;
      };
  "404":
    | {
        contentType: "text/plain";
        data: TagPublicGetAllRelatedTagsStatus404Plain;
      }
    | {
        contentType: "application/json";
        data: TagPublicGetAllRelatedTagsStatus404Json;
      }
    | {
        contentType: "text/json";
        data: TagPublicGetAllRelatedTagsStatus404Json2;
      };
  "500":
    | {
        contentType: "text/plain";
        data: TagPublicGetAllRelatedTagsStatus500Plain;
      }
    | {
        contentType: "application/json";
        data: TagPublicGetAllRelatedTagsStatus500Json;
      }
    | {
        contentType: "text/json";
        data: TagPublicGetAllRelatedTagsStatus500Json2;
      };
  "501":
    | {
        contentType: "text/plain";
        data: TagPublicGetAllRelatedTagsStatus501Plain;
      }
    | {
        contentType: "application/json";
        data: TagPublicGetAllRelatedTagsStatus501Json;
      }
    | {
        contentType: "text/json";
        data: TagPublicGetAllRelatedTagsStatus501Json2;
      };
};

/**
 * @description Union of all possible responses
 */
export type TagPublicGetAllRelatedTagsResponse =
  | TagPublicGetAllRelatedTagsStatus200
  | TagPublicGetAllRelatedTagsStatus400
  | TagPublicGetAllRelatedTagsStatus401
  | TagPublicGetAllRelatedTagsStatus403
  | TagPublicGetAllRelatedTagsStatus404
  | TagPublicGetAllRelatedTagsStatus500
  | TagPublicGetAllRelatedTagsStatus501;
