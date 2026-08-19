/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse";
import type { VoloCmsKitAdminBlogsBlogPostDto } from "../volo/cmsKit/admin/blogs/BlogPostDto";

export type BlogPostAdminGetPath = {
  /**
   * @description
   * Format: `uuid`
   * @type string
   */
  id: string;
};

export type BlogPostAdminGetStatus200Plain = VoloCmsKitAdminBlogsBlogPostDto;

export type BlogPostAdminGetStatus200Json = VoloCmsKitAdminBlogsBlogPostDto;

export type BlogPostAdminGetStatus200Json2 = VoloCmsKitAdminBlogsBlogPostDto;

export type BlogPostAdminGetStatus200 =
  | BlogPostAdminGetStatus200Plain
  | BlogPostAdminGetStatus200Json
  | BlogPostAdminGetStatus200Json2;

export type BlogPostAdminGetStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostAdminGetStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostAdminGetStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostAdminGetStatus400 =
  | BlogPostAdminGetStatus400Plain
  | BlogPostAdminGetStatus400Json
  | BlogPostAdminGetStatus400Json2;

export type BlogPostAdminGetStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostAdminGetStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostAdminGetStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostAdminGetStatus401 =
  | BlogPostAdminGetStatus401Plain
  | BlogPostAdminGetStatus401Json
  | BlogPostAdminGetStatus401Json2;

export type BlogPostAdminGetStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostAdminGetStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostAdminGetStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostAdminGetStatus403 =
  | BlogPostAdminGetStatus403Plain
  | BlogPostAdminGetStatus403Json
  | BlogPostAdminGetStatus403Json2;

export type BlogPostAdminGetStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostAdminGetStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostAdminGetStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostAdminGetStatus404 =
  | BlogPostAdminGetStatus404Plain
  | BlogPostAdminGetStatus404Json
  | BlogPostAdminGetStatus404Json2;

export type BlogPostAdminGetStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostAdminGetStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostAdminGetStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostAdminGetStatus500 =
  | BlogPostAdminGetStatus500Plain
  | BlogPostAdminGetStatus500Json
  | BlogPostAdminGetStatus500Json2;

export type BlogPostAdminGetStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostAdminGetStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostAdminGetStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostAdminGetStatus501 =
  | BlogPostAdminGetStatus501Plain
  | BlogPostAdminGetStatus501Json
  | BlogPostAdminGetStatus501Json2;

export type BlogPostAdminGetOptions = {
  body?: never;
  path: BlogPostAdminGetPath;
  query?: never;
  headers?: never;
};

export type BlogPostAdminGetResponses = {
  "200":
    | {
        contentType: "text/plain";
        data: BlogPostAdminGetStatus200Plain;
      }
    | {
        contentType: "application/json";
        data: BlogPostAdminGetStatus200Json;
      }
    | {
        contentType: "text/json";
        data: BlogPostAdminGetStatus200Json2;
      };
  "400":
    | {
        contentType: "text/plain";
        data: BlogPostAdminGetStatus400Plain;
      }
    | {
        contentType: "application/json";
        data: BlogPostAdminGetStatus400Json;
      }
    | {
        contentType: "text/json";
        data: BlogPostAdminGetStatus400Json2;
      };
  "401":
    | {
        contentType: "text/plain";
        data: BlogPostAdminGetStatus401Plain;
      }
    | {
        contentType: "application/json";
        data: BlogPostAdminGetStatus401Json;
      }
    | {
        contentType: "text/json";
        data: BlogPostAdminGetStatus401Json2;
      };
  "403":
    | {
        contentType: "text/plain";
        data: BlogPostAdminGetStatus403Plain;
      }
    | {
        contentType: "application/json";
        data: BlogPostAdminGetStatus403Json;
      }
    | {
        contentType: "text/json";
        data: BlogPostAdminGetStatus403Json2;
      };
  "404":
    | {
        contentType: "text/plain";
        data: BlogPostAdminGetStatus404Plain;
      }
    | {
        contentType: "application/json";
        data: BlogPostAdminGetStatus404Json;
      }
    | {
        contentType: "text/json";
        data: BlogPostAdminGetStatus404Json2;
      };
  "500":
    | {
        contentType: "text/plain";
        data: BlogPostAdminGetStatus500Plain;
      }
    | {
        contentType: "application/json";
        data: BlogPostAdminGetStatus500Json;
      }
    | {
        contentType: "text/json";
        data: BlogPostAdminGetStatus500Json2;
      };
  "501":
    | {
        contentType: "text/plain";
        data: BlogPostAdminGetStatus501Plain;
      }
    | {
        contentType: "application/json";
        data: BlogPostAdminGetStatus501Json;
      }
    | {
        contentType: "text/json";
        data: BlogPostAdminGetStatus501Json2;
      };
};

/**
 * @description Union of all possible responses
 */
export type BlogPostAdminGetResponse =
  | BlogPostAdminGetStatus200
  | BlogPostAdminGetStatus400
  | BlogPostAdminGetStatus401
  | BlogPostAdminGetStatus403
  | BlogPostAdminGetStatus404
  | BlogPostAdminGetStatus500
  | BlogPostAdminGetStatus501;
