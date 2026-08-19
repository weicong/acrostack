/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse";
import type { VoloCmsKitAdminBlogsBlogDto } from "../volo/cmsKit/admin/blogs/BlogDto";
import type { VoloCmsKitAdminBlogsUpdateBlogDto } from "../volo/cmsKit/admin/blogs/UpdateBlogDto";

export type BlogAdminUpdatePath = {
  /**
   * @description
   * Format: `uuid`
   * @type string
   */
  id: string;
};

export type BlogAdminUpdateStatus200Plain = VoloCmsKitAdminBlogsBlogDto;

export type BlogAdminUpdateStatus200Json = VoloCmsKitAdminBlogsBlogDto;

export type BlogAdminUpdateStatus200Json2 = VoloCmsKitAdminBlogsBlogDto;

export type BlogAdminUpdateStatus200 =
  | BlogAdminUpdateStatus200Plain
  | BlogAdminUpdateStatus200Json
  | BlogAdminUpdateStatus200Json2;

export type BlogAdminUpdateStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogAdminUpdateStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogAdminUpdateStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogAdminUpdateStatus400 =
  | BlogAdminUpdateStatus400Plain
  | BlogAdminUpdateStatus400Json
  | BlogAdminUpdateStatus400Json2;

export type BlogAdminUpdateStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogAdminUpdateStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogAdminUpdateStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogAdminUpdateStatus401 =
  | BlogAdminUpdateStatus401Plain
  | BlogAdminUpdateStatus401Json
  | BlogAdminUpdateStatus401Json2;

export type BlogAdminUpdateStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogAdminUpdateStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogAdminUpdateStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogAdminUpdateStatus403 =
  | BlogAdminUpdateStatus403Plain
  | BlogAdminUpdateStatus403Json
  | BlogAdminUpdateStatus403Json2;

export type BlogAdminUpdateStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogAdminUpdateStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogAdminUpdateStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogAdminUpdateStatus404 =
  | BlogAdminUpdateStatus404Plain
  | BlogAdminUpdateStatus404Json
  | BlogAdminUpdateStatus404Json2;

export type BlogAdminUpdateStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogAdminUpdateStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogAdminUpdateStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogAdminUpdateStatus500 =
  | BlogAdminUpdateStatus500Plain
  | BlogAdminUpdateStatus500Json
  | BlogAdminUpdateStatus500Json2;

export type BlogAdminUpdateStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogAdminUpdateStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogAdminUpdateStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogAdminUpdateStatus501 =
  | BlogAdminUpdateStatus501Plain
  | BlogAdminUpdateStatus501Json
  | BlogAdminUpdateStatus501Json2;

export type BlogAdminUpdateBodyJson =
  | Omit<NonNullable<VoloCmsKitAdminBlogsUpdateBlogDto>, "extraProperties">
  | undefined;

export type BlogAdminUpdateBodyJson2 =
  | Omit<NonNullable<VoloCmsKitAdminBlogsUpdateBlogDto>, "extraProperties">
  | undefined;

export type BlogAdminUpdateBodyJson3 =
  | Omit<NonNullable<VoloCmsKitAdminBlogsUpdateBlogDto>, "extraProperties">
  | undefined;

export type BlogAdminUpdateBody =
  | BlogAdminUpdateBodyJson
  | BlogAdminUpdateBodyJson2
  | BlogAdminUpdateBodyJson3;

export type BlogAdminUpdateOptions = {
  body: BlogAdminUpdateBody;
  path: BlogAdminUpdatePath;
  query?: never;
  headers?: never;
};

export type BlogAdminUpdateResponses = {
  "200":
    | {
        contentType: "text/plain";
        data: BlogAdminUpdateStatus200Plain;
      }
    | {
        contentType: "application/json";
        data: BlogAdminUpdateStatus200Json;
      }
    | {
        contentType: "text/json";
        data: BlogAdminUpdateStatus200Json2;
      };
  "400":
    | {
        contentType: "text/plain";
        data: BlogAdminUpdateStatus400Plain;
      }
    | {
        contentType: "application/json";
        data: BlogAdminUpdateStatus400Json;
      }
    | {
        contentType: "text/json";
        data: BlogAdminUpdateStatus400Json2;
      };
  "401":
    | {
        contentType: "text/plain";
        data: BlogAdminUpdateStatus401Plain;
      }
    | {
        contentType: "application/json";
        data: BlogAdminUpdateStatus401Json;
      }
    | {
        contentType: "text/json";
        data: BlogAdminUpdateStatus401Json2;
      };
  "403":
    | {
        contentType: "text/plain";
        data: BlogAdminUpdateStatus403Plain;
      }
    | {
        contentType: "application/json";
        data: BlogAdminUpdateStatus403Json;
      }
    | {
        contentType: "text/json";
        data: BlogAdminUpdateStatus403Json2;
      };
  "404":
    | {
        contentType: "text/plain";
        data: BlogAdminUpdateStatus404Plain;
      }
    | {
        contentType: "application/json";
        data: BlogAdminUpdateStatus404Json;
      }
    | {
        contentType: "text/json";
        data: BlogAdminUpdateStatus404Json2;
      };
  "500":
    | {
        contentType: "text/plain";
        data: BlogAdminUpdateStatus500Plain;
      }
    | {
        contentType: "application/json";
        data: BlogAdminUpdateStatus500Json;
      }
    | {
        contentType: "text/json";
        data: BlogAdminUpdateStatus500Json2;
      };
  "501":
    | {
        contentType: "text/plain";
        data: BlogAdminUpdateStatus501Plain;
      }
    | {
        contentType: "application/json";
        data: BlogAdminUpdateStatus501Json;
      }
    | {
        contentType: "text/json";
        data: BlogAdminUpdateStatus501Json2;
      };
};

/**
 * @description Union of all possible responses
 */
export type BlogAdminUpdateResponse =
  | BlogAdminUpdateStatus200
  | BlogAdminUpdateStatus400
  | BlogAdminUpdateStatus401
  | BlogAdminUpdateStatus403
  | BlogAdminUpdateStatus404
  | BlogAdminUpdateStatus500
  | BlogAdminUpdateStatus501;
