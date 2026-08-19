/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse";
import type { VoloCmsKitAdminBlogsBlogDto } from "../volo/cmsKit/admin/blogs/BlogDto";
import type { VoloCmsKitAdminBlogsCreateBlogDto } from "../volo/cmsKit/admin/blogs/CreateBlogDto";

export type BlogAdminCreateStatus200Plain = VoloCmsKitAdminBlogsBlogDto;

export type BlogAdminCreateStatus200Json = VoloCmsKitAdminBlogsBlogDto;

export type BlogAdminCreateStatus200Json2 = VoloCmsKitAdminBlogsBlogDto;

export type BlogAdminCreateStatus200 =
  | BlogAdminCreateStatus200Plain
  | BlogAdminCreateStatus200Json
  | BlogAdminCreateStatus200Json2;

export type BlogAdminCreateStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogAdminCreateStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogAdminCreateStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogAdminCreateStatus400 =
  | BlogAdminCreateStatus400Plain
  | BlogAdminCreateStatus400Json
  | BlogAdminCreateStatus400Json2;

export type BlogAdminCreateStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogAdminCreateStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogAdminCreateStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogAdminCreateStatus401 =
  | BlogAdminCreateStatus401Plain
  | BlogAdminCreateStatus401Json
  | BlogAdminCreateStatus401Json2;

export type BlogAdminCreateStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogAdminCreateStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogAdminCreateStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogAdminCreateStatus403 =
  | BlogAdminCreateStatus403Plain
  | BlogAdminCreateStatus403Json
  | BlogAdminCreateStatus403Json2;

export type BlogAdminCreateStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogAdminCreateStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogAdminCreateStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogAdminCreateStatus404 =
  | BlogAdminCreateStatus404Plain
  | BlogAdminCreateStatus404Json
  | BlogAdminCreateStatus404Json2;

export type BlogAdminCreateStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogAdminCreateStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogAdminCreateStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogAdminCreateStatus500 =
  | BlogAdminCreateStatus500Plain
  | BlogAdminCreateStatus500Json
  | BlogAdminCreateStatus500Json2;

export type BlogAdminCreateStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogAdminCreateStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogAdminCreateStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogAdminCreateStatus501 =
  | BlogAdminCreateStatus501Plain
  | BlogAdminCreateStatus501Json
  | BlogAdminCreateStatus501Json2;

export type BlogAdminCreateBodyJson =
  | Omit<NonNullable<VoloCmsKitAdminBlogsCreateBlogDto>, "extraProperties">
  | undefined;

export type BlogAdminCreateBodyJson2 =
  | Omit<NonNullable<VoloCmsKitAdminBlogsCreateBlogDto>, "extraProperties">
  | undefined;

export type BlogAdminCreateBodyJson3 =
  | Omit<NonNullable<VoloCmsKitAdminBlogsCreateBlogDto>, "extraProperties">
  | undefined;

export type BlogAdminCreateBody =
  | BlogAdminCreateBodyJson
  | BlogAdminCreateBodyJson2
  | BlogAdminCreateBodyJson3;

export type BlogAdminCreateOptions = {
  body: BlogAdminCreateBody;
  path?: never;
  query?: never;
  headers?: never;
};

export type BlogAdminCreateResponses = {
  "200":
    | {
        contentType: "text/plain";
        data: BlogAdminCreateStatus200Plain;
      }
    | {
        contentType: "application/json";
        data: BlogAdminCreateStatus200Json;
      }
    | {
        contentType: "text/json";
        data: BlogAdminCreateStatus200Json2;
      };
  "400":
    | {
        contentType: "text/plain";
        data: BlogAdminCreateStatus400Plain;
      }
    | {
        contentType: "application/json";
        data: BlogAdminCreateStatus400Json;
      }
    | {
        contentType: "text/json";
        data: BlogAdminCreateStatus400Json2;
      };
  "401":
    | {
        contentType: "text/plain";
        data: BlogAdminCreateStatus401Plain;
      }
    | {
        contentType: "application/json";
        data: BlogAdminCreateStatus401Json;
      }
    | {
        contentType: "text/json";
        data: BlogAdminCreateStatus401Json2;
      };
  "403":
    | {
        contentType: "text/plain";
        data: BlogAdminCreateStatus403Plain;
      }
    | {
        contentType: "application/json";
        data: BlogAdminCreateStatus403Json;
      }
    | {
        contentType: "text/json";
        data: BlogAdminCreateStatus403Json2;
      };
  "404":
    | {
        contentType: "text/plain";
        data: BlogAdminCreateStatus404Plain;
      }
    | {
        contentType: "application/json";
        data: BlogAdminCreateStatus404Json;
      }
    | {
        contentType: "text/json";
        data: BlogAdminCreateStatus404Json2;
      };
  "500":
    | {
        contentType: "text/plain";
        data: BlogAdminCreateStatus500Plain;
      }
    | {
        contentType: "application/json";
        data: BlogAdminCreateStatus500Json;
      }
    | {
        contentType: "text/json";
        data: BlogAdminCreateStatus500Json2;
      };
  "501":
    | {
        contentType: "text/plain";
        data: BlogAdminCreateStatus501Plain;
      }
    | {
        contentType: "application/json";
        data: BlogAdminCreateStatus501Json;
      }
    | {
        contentType: "text/json";
        data: BlogAdminCreateStatus501Json2;
      };
};

/**
 * @description Union of all possible responses
 */
export type BlogAdminCreateResponse =
  | BlogAdminCreateStatus200
  | BlogAdminCreateStatus400
  | BlogAdminCreateStatus401
  | BlogAdminCreateStatus403
  | BlogAdminCreateStatus404
  | BlogAdminCreateStatus500
  | BlogAdminCreateStatus501;
