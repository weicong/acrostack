/* oxlint-disable */

import type { PagedResultDtoOfVoloCmsKitUsersCmsUserDto } from "../pagedResultDtoOfVolo/cmsKit/users/CmsUserDto";
import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse";

export type BlogPostPublicGetAuthorsHasBlogPostsQuery = {
  Filter?: string;
  Sorting?: string;
  /**
   * @description
   * Format: `int32`
   * @type integer | undefined
   */
  SkipCount?: number;
  /**
   * @description
   * Format: `int32`
   * @type integer | undefined
   */
  MaxResultCount?: number;
};

export type BlogPostPublicGetAuthorsHasBlogPostsStatus200Plain =
  PagedResultDtoOfVoloCmsKitUsersCmsUserDto;

export type BlogPostPublicGetAuthorsHasBlogPostsStatus200Json =
  PagedResultDtoOfVoloCmsKitUsersCmsUserDto;

export type BlogPostPublicGetAuthorsHasBlogPostsStatus200Json2 =
  PagedResultDtoOfVoloCmsKitUsersCmsUserDto;

export type BlogPostPublicGetAuthorsHasBlogPostsStatus200 =
  | BlogPostPublicGetAuthorsHasBlogPostsStatus200Plain
  | BlogPostPublicGetAuthorsHasBlogPostsStatus200Json
  | BlogPostPublicGetAuthorsHasBlogPostsStatus200Json2;

export type BlogPostPublicGetAuthorsHasBlogPostsStatus400Plain =
  VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostPublicGetAuthorsHasBlogPostsStatus400Json =
  VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostPublicGetAuthorsHasBlogPostsStatus400Json2 =
  VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostPublicGetAuthorsHasBlogPostsStatus400 =
  | BlogPostPublicGetAuthorsHasBlogPostsStatus400Plain
  | BlogPostPublicGetAuthorsHasBlogPostsStatus400Json
  | BlogPostPublicGetAuthorsHasBlogPostsStatus400Json2;

export type BlogPostPublicGetAuthorsHasBlogPostsStatus401Plain =
  VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostPublicGetAuthorsHasBlogPostsStatus401Json =
  VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostPublicGetAuthorsHasBlogPostsStatus401Json2 =
  VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostPublicGetAuthorsHasBlogPostsStatus401 =
  | BlogPostPublicGetAuthorsHasBlogPostsStatus401Plain
  | BlogPostPublicGetAuthorsHasBlogPostsStatus401Json
  | BlogPostPublicGetAuthorsHasBlogPostsStatus401Json2;

export type BlogPostPublicGetAuthorsHasBlogPostsStatus403Plain =
  VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostPublicGetAuthorsHasBlogPostsStatus403Json =
  VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostPublicGetAuthorsHasBlogPostsStatus403Json2 =
  VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostPublicGetAuthorsHasBlogPostsStatus403 =
  | BlogPostPublicGetAuthorsHasBlogPostsStatus403Plain
  | BlogPostPublicGetAuthorsHasBlogPostsStatus403Json
  | BlogPostPublicGetAuthorsHasBlogPostsStatus403Json2;

export type BlogPostPublicGetAuthorsHasBlogPostsStatus404Plain =
  VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostPublicGetAuthorsHasBlogPostsStatus404Json =
  VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostPublicGetAuthorsHasBlogPostsStatus404Json2 =
  VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostPublicGetAuthorsHasBlogPostsStatus404 =
  | BlogPostPublicGetAuthorsHasBlogPostsStatus404Plain
  | BlogPostPublicGetAuthorsHasBlogPostsStatus404Json
  | BlogPostPublicGetAuthorsHasBlogPostsStatus404Json2;

export type BlogPostPublicGetAuthorsHasBlogPostsStatus500Plain =
  VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostPublicGetAuthorsHasBlogPostsStatus500Json =
  VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostPublicGetAuthorsHasBlogPostsStatus500Json2 =
  VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostPublicGetAuthorsHasBlogPostsStatus500 =
  | BlogPostPublicGetAuthorsHasBlogPostsStatus500Plain
  | BlogPostPublicGetAuthorsHasBlogPostsStatus500Json
  | BlogPostPublicGetAuthorsHasBlogPostsStatus500Json2;

export type BlogPostPublicGetAuthorsHasBlogPostsStatus501Plain =
  VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostPublicGetAuthorsHasBlogPostsStatus501Json =
  VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostPublicGetAuthorsHasBlogPostsStatus501Json2 =
  VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostPublicGetAuthorsHasBlogPostsStatus501 =
  | BlogPostPublicGetAuthorsHasBlogPostsStatus501Plain
  | BlogPostPublicGetAuthorsHasBlogPostsStatus501Json
  | BlogPostPublicGetAuthorsHasBlogPostsStatus501Json2;

export type BlogPostPublicGetAuthorsHasBlogPostsOptions = {
  body?: never;
  path?: never;
  query?: BlogPostPublicGetAuthorsHasBlogPostsQuery;
  headers?: never;
};

export type BlogPostPublicGetAuthorsHasBlogPostsResponses = {
  "200":
    | {
        contentType: "text/plain";
        data: BlogPostPublicGetAuthorsHasBlogPostsStatus200Plain;
      }
    | {
        contentType: "application/json";
        data: BlogPostPublicGetAuthorsHasBlogPostsStatus200Json;
      }
    | {
        contentType: "text/json";
        data: BlogPostPublicGetAuthorsHasBlogPostsStatus200Json2;
      };
  "400":
    | {
        contentType: "text/plain";
        data: BlogPostPublicGetAuthorsHasBlogPostsStatus400Plain;
      }
    | {
        contentType: "application/json";
        data: BlogPostPublicGetAuthorsHasBlogPostsStatus400Json;
      }
    | {
        contentType: "text/json";
        data: BlogPostPublicGetAuthorsHasBlogPostsStatus400Json2;
      };
  "401":
    | {
        contentType: "text/plain";
        data: BlogPostPublicGetAuthorsHasBlogPostsStatus401Plain;
      }
    | {
        contentType: "application/json";
        data: BlogPostPublicGetAuthorsHasBlogPostsStatus401Json;
      }
    | {
        contentType: "text/json";
        data: BlogPostPublicGetAuthorsHasBlogPostsStatus401Json2;
      };
  "403":
    | {
        contentType: "text/plain";
        data: BlogPostPublicGetAuthorsHasBlogPostsStatus403Plain;
      }
    | {
        contentType: "application/json";
        data: BlogPostPublicGetAuthorsHasBlogPostsStatus403Json;
      }
    | {
        contentType: "text/json";
        data: BlogPostPublicGetAuthorsHasBlogPostsStatus403Json2;
      };
  "404":
    | {
        contentType: "text/plain";
        data: BlogPostPublicGetAuthorsHasBlogPostsStatus404Plain;
      }
    | {
        contentType: "application/json";
        data: BlogPostPublicGetAuthorsHasBlogPostsStatus404Json;
      }
    | {
        contentType: "text/json";
        data: BlogPostPublicGetAuthorsHasBlogPostsStatus404Json2;
      };
  "500":
    | {
        contentType: "text/plain";
        data: BlogPostPublicGetAuthorsHasBlogPostsStatus500Plain;
      }
    | {
        contentType: "application/json";
        data: BlogPostPublicGetAuthorsHasBlogPostsStatus500Json;
      }
    | {
        contentType: "text/json";
        data: BlogPostPublicGetAuthorsHasBlogPostsStatus500Json2;
      };
  "501":
    | {
        contentType: "text/plain";
        data: BlogPostPublicGetAuthorsHasBlogPostsStatus501Plain;
      }
    | {
        contentType: "application/json";
        data: BlogPostPublicGetAuthorsHasBlogPostsStatus501Json;
      }
    | {
        contentType: "text/json";
        data: BlogPostPublicGetAuthorsHasBlogPostsStatus501Json2;
      };
};

/**
 * @description Union of all possible responses
 */
export type BlogPostPublicGetAuthorsHasBlogPostsResponse =
  | BlogPostPublicGetAuthorsHasBlogPostsStatus200
  | BlogPostPublicGetAuthorsHasBlogPostsStatus400
  | BlogPostPublicGetAuthorsHasBlogPostsStatus401
  | BlogPostPublicGetAuthorsHasBlogPostsStatus403
  | BlogPostPublicGetAuthorsHasBlogPostsStatus404
  | BlogPostPublicGetAuthorsHasBlogPostsStatus500
  | BlogPostPublicGetAuthorsHasBlogPostsStatus501;
