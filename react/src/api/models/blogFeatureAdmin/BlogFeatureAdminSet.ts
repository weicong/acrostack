/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse";
import type { VoloCmsKitAdminBlogsBlogFeatureInputDto } from "../volo/cmsKit/admin/blogs/BlogFeatureInputDto";

export type BlogFeatureAdminSetPath = {
  /**
   * @description
   * Format: `uuid`
   * @type string
   */
  blogId: string;
};

export type BlogFeatureAdminSetStatus200 = unknown;

export type BlogFeatureAdminSetStatus204 = unknown;

export type BlogFeatureAdminSetStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogFeatureAdminSetStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogFeatureAdminSetStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogFeatureAdminSetStatus400 =
  | BlogFeatureAdminSetStatus400Plain
  | BlogFeatureAdminSetStatus400Json
  | BlogFeatureAdminSetStatus400Json2;

export type BlogFeatureAdminSetStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogFeatureAdminSetStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogFeatureAdminSetStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogFeatureAdminSetStatus401 =
  | BlogFeatureAdminSetStatus401Plain
  | BlogFeatureAdminSetStatus401Json
  | BlogFeatureAdminSetStatus401Json2;

export type BlogFeatureAdminSetStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogFeatureAdminSetStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogFeatureAdminSetStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogFeatureAdminSetStatus403 =
  | BlogFeatureAdminSetStatus403Plain
  | BlogFeatureAdminSetStatus403Json
  | BlogFeatureAdminSetStatus403Json2;

export type BlogFeatureAdminSetStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogFeatureAdminSetStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogFeatureAdminSetStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogFeatureAdminSetStatus404 =
  | BlogFeatureAdminSetStatus404Plain
  | BlogFeatureAdminSetStatus404Json
  | BlogFeatureAdminSetStatus404Json2;

export type BlogFeatureAdminSetStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogFeatureAdminSetStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogFeatureAdminSetStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogFeatureAdminSetStatus500 =
  | BlogFeatureAdminSetStatus500Plain
  | BlogFeatureAdminSetStatus500Json
  | BlogFeatureAdminSetStatus500Json2;

export type BlogFeatureAdminSetStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogFeatureAdminSetStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogFeatureAdminSetStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogFeatureAdminSetStatus501 =
  | BlogFeatureAdminSetStatus501Plain
  | BlogFeatureAdminSetStatus501Json
  | BlogFeatureAdminSetStatus501Json2;

export type BlogFeatureAdminSetBodyJson = VoloCmsKitAdminBlogsBlogFeatureInputDto | undefined;

export type BlogFeatureAdminSetBodyJson2 = VoloCmsKitAdminBlogsBlogFeatureInputDto | undefined;

export type BlogFeatureAdminSetBodyJson3 = VoloCmsKitAdminBlogsBlogFeatureInputDto | undefined;

export type BlogFeatureAdminSetBody =
  | BlogFeatureAdminSetBodyJson
  | BlogFeatureAdminSetBodyJson2
  | BlogFeatureAdminSetBodyJson3;

export type BlogFeatureAdminSetOptions = {
  body: BlogFeatureAdminSetBody;
  path: BlogFeatureAdminSetPath;
  query?: never;
  headers?: never;
};

export type BlogFeatureAdminSetResponses = {
  "200": BlogFeatureAdminSetStatus200;
  "204": BlogFeatureAdminSetStatus204;
  "400":
    | {
        contentType: "text/plain";
        data: BlogFeatureAdminSetStatus400Plain;
      }
    | {
        contentType: "application/json";
        data: BlogFeatureAdminSetStatus400Json;
      }
    | {
        contentType: "text/json";
        data: BlogFeatureAdminSetStatus400Json2;
      };
  "401":
    | {
        contentType: "text/plain";
        data: BlogFeatureAdminSetStatus401Plain;
      }
    | {
        contentType: "application/json";
        data: BlogFeatureAdminSetStatus401Json;
      }
    | {
        contentType: "text/json";
        data: BlogFeatureAdminSetStatus401Json2;
      };
  "403":
    | {
        contentType: "text/plain";
        data: BlogFeatureAdminSetStatus403Plain;
      }
    | {
        contentType: "application/json";
        data: BlogFeatureAdminSetStatus403Json;
      }
    | {
        contentType: "text/json";
        data: BlogFeatureAdminSetStatus403Json2;
      };
  "404":
    | {
        contentType: "text/plain";
        data: BlogFeatureAdminSetStatus404Plain;
      }
    | {
        contentType: "application/json";
        data: BlogFeatureAdminSetStatus404Json;
      }
    | {
        contentType: "text/json";
        data: BlogFeatureAdminSetStatus404Json2;
      };
  "500":
    | {
        contentType: "text/plain";
        data: BlogFeatureAdminSetStatus500Plain;
      }
    | {
        contentType: "application/json";
        data: BlogFeatureAdminSetStatus500Json;
      }
    | {
        contentType: "text/json";
        data: BlogFeatureAdminSetStatus500Json2;
      };
  "501":
    | {
        contentType: "text/plain";
        data: BlogFeatureAdminSetStatus501Plain;
      }
    | {
        contentType: "application/json";
        data: BlogFeatureAdminSetStatus501Json;
      }
    | {
        contentType: "text/json";
        data: BlogFeatureAdminSetStatus501Json2;
      };
};

/**
 * @description Union of all possible responses
 */
export type BlogFeatureAdminSetResponse =
  | BlogFeatureAdminSetStatus200
  | BlogFeatureAdminSetStatus204
  | BlogFeatureAdminSetStatus400
  | BlogFeatureAdminSetStatus401
  | BlogFeatureAdminSetStatus403
  | BlogFeatureAdminSetStatus404
  | BlogFeatureAdminSetStatus500
  | BlogFeatureAdminSetStatus501;
