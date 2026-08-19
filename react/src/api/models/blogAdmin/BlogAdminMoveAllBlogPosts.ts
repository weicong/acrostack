/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse";

export type BlogAdminMoveAllBlogPostsPath = {
  /**
   * @description
   * Format: `uuid`
   * @type string
   */
  blogId: string;
};

export type BlogAdminMoveAllBlogPostsQuery = {
  /**
   * @description
   * Format: `uuid`
   * @type string | undefined
   */
  assignToBlogId?: string;
};

export type BlogAdminMoveAllBlogPostsStatus200 = unknown;

export type BlogAdminMoveAllBlogPostsStatus204 = unknown;

export type BlogAdminMoveAllBlogPostsStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogAdminMoveAllBlogPostsStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogAdminMoveAllBlogPostsStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogAdminMoveAllBlogPostsStatus400 =
  | BlogAdminMoveAllBlogPostsStatus400Plain
  | BlogAdminMoveAllBlogPostsStatus400Json
  | BlogAdminMoveAllBlogPostsStatus400Json2;

export type BlogAdminMoveAllBlogPostsStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogAdminMoveAllBlogPostsStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogAdminMoveAllBlogPostsStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogAdminMoveAllBlogPostsStatus401 =
  | BlogAdminMoveAllBlogPostsStatus401Plain
  | BlogAdminMoveAllBlogPostsStatus401Json
  | BlogAdminMoveAllBlogPostsStatus401Json2;

export type BlogAdminMoveAllBlogPostsStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogAdminMoveAllBlogPostsStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogAdminMoveAllBlogPostsStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogAdminMoveAllBlogPostsStatus403 =
  | BlogAdminMoveAllBlogPostsStatus403Plain
  | BlogAdminMoveAllBlogPostsStatus403Json
  | BlogAdminMoveAllBlogPostsStatus403Json2;

export type BlogAdminMoveAllBlogPostsStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogAdminMoveAllBlogPostsStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogAdminMoveAllBlogPostsStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogAdminMoveAllBlogPostsStatus404 =
  | BlogAdminMoveAllBlogPostsStatus404Plain
  | BlogAdminMoveAllBlogPostsStatus404Json
  | BlogAdminMoveAllBlogPostsStatus404Json2;

export type BlogAdminMoveAllBlogPostsStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogAdminMoveAllBlogPostsStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogAdminMoveAllBlogPostsStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogAdminMoveAllBlogPostsStatus500 =
  | BlogAdminMoveAllBlogPostsStatus500Plain
  | BlogAdminMoveAllBlogPostsStatus500Json
  | BlogAdminMoveAllBlogPostsStatus500Json2;

export type BlogAdminMoveAllBlogPostsStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogAdminMoveAllBlogPostsStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogAdminMoveAllBlogPostsStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogAdminMoveAllBlogPostsStatus501 =
  | BlogAdminMoveAllBlogPostsStatus501Plain
  | BlogAdminMoveAllBlogPostsStatus501Json
  | BlogAdminMoveAllBlogPostsStatus501Json2;

export type BlogAdminMoveAllBlogPostsOptions = {
  body?: never;
  path: BlogAdminMoveAllBlogPostsPath;
  query?: BlogAdminMoveAllBlogPostsQuery;
  headers?: never;
};

export type BlogAdminMoveAllBlogPostsResponses = {
  "200": BlogAdminMoveAllBlogPostsStatus200;
  "204": BlogAdminMoveAllBlogPostsStatus204;
  "400":
    | {
        contentType: "text/plain";
        data: BlogAdminMoveAllBlogPostsStatus400Plain;
      }
    | {
        contentType: "application/json";
        data: BlogAdminMoveAllBlogPostsStatus400Json;
      }
    | {
        contentType: "text/json";
        data: BlogAdminMoveAllBlogPostsStatus400Json2;
      };
  "401":
    | {
        contentType: "text/plain";
        data: BlogAdminMoveAllBlogPostsStatus401Plain;
      }
    | {
        contentType: "application/json";
        data: BlogAdminMoveAllBlogPostsStatus401Json;
      }
    | {
        contentType: "text/json";
        data: BlogAdminMoveAllBlogPostsStatus401Json2;
      };
  "403":
    | {
        contentType: "text/plain";
        data: BlogAdminMoveAllBlogPostsStatus403Plain;
      }
    | {
        contentType: "application/json";
        data: BlogAdminMoveAllBlogPostsStatus403Json;
      }
    | {
        contentType: "text/json";
        data: BlogAdminMoveAllBlogPostsStatus403Json2;
      };
  "404":
    | {
        contentType: "text/plain";
        data: BlogAdminMoveAllBlogPostsStatus404Plain;
      }
    | {
        contentType: "application/json";
        data: BlogAdminMoveAllBlogPostsStatus404Json;
      }
    | {
        contentType: "text/json";
        data: BlogAdminMoveAllBlogPostsStatus404Json2;
      };
  "500":
    | {
        contentType: "text/plain";
        data: BlogAdminMoveAllBlogPostsStatus500Plain;
      }
    | {
        contentType: "application/json";
        data: BlogAdminMoveAllBlogPostsStatus500Json;
      }
    | {
        contentType: "text/json";
        data: BlogAdminMoveAllBlogPostsStatus500Json2;
      };
  "501":
    | {
        contentType: "text/plain";
        data: BlogAdminMoveAllBlogPostsStatus501Plain;
      }
    | {
        contentType: "application/json";
        data: BlogAdminMoveAllBlogPostsStatus501Json;
      }
    | {
        contentType: "text/json";
        data: BlogAdminMoveAllBlogPostsStatus501Json2;
      };
};

/**
 * @description Union of all possible responses
 */
export type BlogAdminMoveAllBlogPostsResponse =
  | BlogAdminMoveAllBlogPostsStatus200
  | BlogAdminMoveAllBlogPostsStatus204
  | BlogAdminMoveAllBlogPostsStatus400
  | BlogAdminMoveAllBlogPostsStatus401
  | BlogAdminMoveAllBlogPostsStatus403
  | BlogAdminMoveAllBlogPostsStatus404
  | BlogAdminMoveAllBlogPostsStatus500
  | BlogAdminMoveAllBlogPostsStatus501;
