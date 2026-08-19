/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse";
import type { VoloCmsKitTagsPopularTagDto } from "../volo/cmsKit/tags/PopularTagDto";

export type TagPublicGetPopularTagsPath = {
  entityType: string;
  /**
   * @description
   * Format: `int32`
   * @type integer
   */
  maxCount: number;
};

export type TagPublicGetPopularTagsStatus200Plain = VoloCmsKitTagsPopularTagDto[];

export type TagPublicGetPopularTagsStatus200Json = VoloCmsKitTagsPopularTagDto[];

export type TagPublicGetPopularTagsStatus200Json2 = VoloCmsKitTagsPopularTagDto[];

export type TagPublicGetPopularTagsStatus200 =
  | TagPublicGetPopularTagsStatus200Plain
  | TagPublicGetPopularTagsStatus200Json
  | TagPublicGetPopularTagsStatus200Json2;

export type TagPublicGetPopularTagsStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type TagPublicGetPopularTagsStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

export type TagPublicGetPopularTagsStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type TagPublicGetPopularTagsStatus400 =
  | TagPublicGetPopularTagsStatus400Plain
  | TagPublicGetPopularTagsStatus400Json
  | TagPublicGetPopularTagsStatus400Json2;

export type TagPublicGetPopularTagsStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type TagPublicGetPopularTagsStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

export type TagPublicGetPopularTagsStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type TagPublicGetPopularTagsStatus401 =
  | TagPublicGetPopularTagsStatus401Plain
  | TagPublicGetPopularTagsStatus401Json
  | TagPublicGetPopularTagsStatus401Json2;

export type TagPublicGetPopularTagsStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type TagPublicGetPopularTagsStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

export type TagPublicGetPopularTagsStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type TagPublicGetPopularTagsStatus403 =
  | TagPublicGetPopularTagsStatus403Plain
  | TagPublicGetPopularTagsStatus403Json
  | TagPublicGetPopularTagsStatus403Json2;

export type TagPublicGetPopularTagsStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type TagPublicGetPopularTagsStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

export type TagPublicGetPopularTagsStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type TagPublicGetPopularTagsStatus404 =
  | TagPublicGetPopularTagsStatus404Plain
  | TagPublicGetPopularTagsStatus404Json
  | TagPublicGetPopularTagsStatus404Json2;

export type TagPublicGetPopularTagsStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type TagPublicGetPopularTagsStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

export type TagPublicGetPopularTagsStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type TagPublicGetPopularTagsStatus500 =
  | TagPublicGetPopularTagsStatus500Plain
  | TagPublicGetPopularTagsStatus500Json
  | TagPublicGetPopularTagsStatus500Json2;

export type TagPublicGetPopularTagsStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type TagPublicGetPopularTagsStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

export type TagPublicGetPopularTagsStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type TagPublicGetPopularTagsStatus501 =
  | TagPublicGetPopularTagsStatus501Plain
  | TagPublicGetPopularTagsStatus501Json
  | TagPublicGetPopularTagsStatus501Json2;

export type TagPublicGetPopularTagsOptions = {
  body?: never;
  path: TagPublicGetPopularTagsPath;
  query?: never;
  headers?: never;
};

export type TagPublicGetPopularTagsResponses = {
  "200":
    | {
        contentType: "text/plain";
        data: TagPublicGetPopularTagsStatus200Plain;
      }
    | {
        contentType: "application/json";
        data: TagPublicGetPopularTagsStatus200Json;
      }
    | {
        contentType: "text/json";
        data: TagPublicGetPopularTagsStatus200Json2;
      };
  "400":
    | {
        contentType: "text/plain";
        data: TagPublicGetPopularTagsStatus400Plain;
      }
    | {
        contentType: "application/json";
        data: TagPublicGetPopularTagsStatus400Json;
      }
    | {
        contentType: "text/json";
        data: TagPublicGetPopularTagsStatus400Json2;
      };
  "401":
    | {
        contentType: "text/plain";
        data: TagPublicGetPopularTagsStatus401Plain;
      }
    | {
        contentType: "application/json";
        data: TagPublicGetPopularTagsStatus401Json;
      }
    | {
        contentType: "text/json";
        data: TagPublicGetPopularTagsStatus401Json2;
      };
  "403":
    | {
        contentType: "text/plain";
        data: TagPublicGetPopularTagsStatus403Plain;
      }
    | {
        contentType: "application/json";
        data: TagPublicGetPopularTagsStatus403Json;
      }
    | {
        contentType: "text/json";
        data: TagPublicGetPopularTagsStatus403Json2;
      };
  "404":
    | {
        contentType: "text/plain";
        data: TagPublicGetPopularTagsStatus404Plain;
      }
    | {
        contentType: "application/json";
        data: TagPublicGetPopularTagsStatus404Json;
      }
    | {
        contentType: "text/json";
        data: TagPublicGetPopularTagsStatus404Json2;
      };
  "500":
    | {
        contentType: "text/plain";
        data: TagPublicGetPopularTagsStatus500Plain;
      }
    | {
        contentType: "application/json";
        data: TagPublicGetPopularTagsStatus500Json;
      }
    | {
        contentType: "text/json";
        data: TagPublicGetPopularTagsStatus500Json2;
      };
  "501":
    | {
        contentType: "text/plain";
        data: TagPublicGetPopularTagsStatus501Plain;
      }
    | {
        contentType: "application/json";
        data: TagPublicGetPopularTagsStatus501Json;
      }
    | {
        contentType: "text/json";
        data: TagPublicGetPopularTagsStatus501Json2;
      };
};

/**
 * @description Union of all possible responses
 */
export type TagPublicGetPopularTagsResponse =
  | TagPublicGetPopularTagsStatus200
  | TagPublicGetPopularTagsStatus400
  | TagPublicGetPopularTagsStatus401
  | TagPublicGetPopularTagsStatus403
  | TagPublicGetPopularTagsStatus404
  | TagPublicGetPopularTagsStatus500
  | TagPublicGetPopularTagsStatus501;
