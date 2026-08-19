/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse";
import type { VoloCmsKitAdminBlogsBlogPostDto } from "../volo/cmsKit/admin/blogs/BlogPostDto";
import type { VoloCmsKitAdminBlogsCreateBlogPostDto } from "../volo/cmsKit/admin/blogs/CreateBlogPostDto";

export type BlogPostAdminCreateAndSendToReviewStatus200Plain = VoloCmsKitAdminBlogsBlogPostDto;

export type BlogPostAdminCreateAndSendToReviewStatus200Json = VoloCmsKitAdminBlogsBlogPostDto;

export type BlogPostAdminCreateAndSendToReviewStatus200Json2 = VoloCmsKitAdminBlogsBlogPostDto;

export type BlogPostAdminCreateAndSendToReviewStatus200 =
  | BlogPostAdminCreateAndSendToReviewStatus200Plain
  | BlogPostAdminCreateAndSendToReviewStatus200Json
  | BlogPostAdminCreateAndSendToReviewStatus200Json2;

export type BlogPostAdminCreateAndSendToReviewStatus400Plain =
  VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostAdminCreateAndSendToReviewStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostAdminCreateAndSendToReviewStatus400Json2 =
  VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostAdminCreateAndSendToReviewStatus400 =
  | BlogPostAdminCreateAndSendToReviewStatus400Plain
  | BlogPostAdminCreateAndSendToReviewStatus400Json
  | BlogPostAdminCreateAndSendToReviewStatus400Json2;

export type BlogPostAdminCreateAndSendToReviewStatus401Plain =
  VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostAdminCreateAndSendToReviewStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostAdminCreateAndSendToReviewStatus401Json2 =
  VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostAdminCreateAndSendToReviewStatus401 =
  | BlogPostAdminCreateAndSendToReviewStatus401Plain
  | BlogPostAdminCreateAndSendToReviewStatus401Json
  | BlogPostAdminCreateAndSendToReviewStatus401Json2;

export type BlogPostAdminCreateAndSendToReviewStatus403Plain =
  VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostAdminCreateAndSendToReviewStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostAdminCreateAndSendToReviewStatus403Json2 =
  VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostAdminCreateAndSendToReviewStatus403 =
  | BlogPostAdminCreateAndSendToReviewStatus403Plain
  | BlogPostAdminCreateAndSendToReviewStatus403Json
  | BlogPostAdminCreateAndSendToReviewStatus403Json2;

export type BlogPostAdminCreateAndSendToReviewStatus404Plain =
  VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostAdminCreateAndSendToReviewStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostAdminCreateAndSendToReviewStatus404Json2 =
  VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostAdminCreateAndSendToReviewStatus404 =
  | BlogPostAdminCreateAndSendToReviewStatus404Plain
  | BlogPostAdminCreateAndSendToReviewStatus404Json
  | BlogPostAdminCreateAndSendToReviewStatus404Json2;

export type BlogPostAdminCreateAndSendToReviewStatus500Plain =
  VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostAdminCreateAndSendToReviewStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostAdminCreateAndSendToReviewStatus500Json2 =
  VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostAdminCreateAndSendToReviewStatus500 =
  | BlogPostAdminCreateAndSendToReviewStatus500Plain
  | BlogPostAdminCreateAndSendToReviewStatus500Json
  | BlogPostAdminCreateAndSendToReviewStatus500Json2;

export type BlogPostAdminCreateAndSendToReviewStatus501Plain =
  VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostAdminCreateAndSendToReviewStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostAdminCreateAndSendToReviewStatus501Json2 =
  VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostAdminCreateAndSendToReviewStatus501 =
  | BlogPostAdminCreateAndSendToReviewStatus501Plain
  | BlogPostAdminCreateAndSendToReviewStatus501Json
  | BlogPostAdminCreateAndSendToReviewStatus501Json2;

export type BlogPostAdminCreateAndSendToReviewBodyJson =
  | Omit<NonNullable<VoloCmsKitAdminBlogsCreateBlogPostDto>, "extraProperties">
  | undefined;

export type BlogPostAdminCreateAndSendToReviewBodyJson2 =
  | Omit<NonNullable<VoloCmsKitAdminBlogsCreateBlogPostDto>, "extraProperties">
  | undefined;

export type BlogPostAdminCreateAndSendToReviewBodyJson3 =
  | Omit<NonNullable<VoloCmsKitAdminBlogsCreateBlogPostDto>, "extraProperties">
  | undefined;

export type BlogPostAdminCreateAndSendToReviewBody =
  | BlogPostAdminCreateAndSendToReviewBodyJson
  | BlogPostAdminCreateAndSendToReviewBodyJson2
  | BlogPostAdminCreateAndSendToReviewBodyJson3;

export type BlogPostAdminCreateAndSendToReviewOptions = {
  body: BlogPostAdminCreateAndSendToReviewBody;
  path?: never;
  query?: never;
  headers?: never;
};

export type BlogPostAdminCreateAndSendToReviewResponses = {
  "200":
    | {
        contentType: "text/plain";
        data: BlogPostAdminCreateAndSendToReviewStatus200Plain;
      }
    | {
        contentType: "application/json";
        data: BlogPostAdminCreateAndSendToReviewStatus200Json;
      }
    | {
        contentType: "text/json";
        data: BlogPostAdminCreateAndSendToReviewStatus200Json2;
      };
  "400":
    | {
        contentType: "text/plain";
        data: BlogPostAdminCreateAndSendToReviewStatus400Plain;
      }
    | {
        contentType: "application/json";
        data: BlogPostAdminCreateAndSendToReviewStatus400Json;
      }
    | {
        contentType: "text/json";
        data: BlogPostAdminCreateAndSendToReviewStatus400Json2;
      };
  "401":
    | {
        contentType: "text/plain";
        data: BlogPostAdminCreateAndSendToReviewStatus401Plain;
      }
    | {
        contentType: "application/json";
        data: BlogPostAdminCreateAndSendToReviewStatus401Json;
      }
    | {
        contentType: "text/json";
        data: BlogPostAdminCreateAndSendToReviewStatus401Json2;
      };
  "403":
    | {
        contentType: "text/plain";
        data: BlogPostAdminCreateAndSendToReviewStatus403Plain;
      }
    | {
        contentType: "application/json";
        data: BlogPostAdminCreateAndSendToReviewStatus403Json;
      }
    | {
        contentType: "text/json";
        data: BlogPostAdminCreateAndSendToReviewStatus403Json2;
      };
  "404":
    | {
        contentType: "text/plain";
        data: BlogPostAdminCreateAndSendToReviewStatus404Plain;
      }
    | {
        contentType: "application/json";
        data: BlogPostAdminCreateAndSendToReviewStatus404Json;
      }
    | {
        contentType: "text/json";
        data: BlogPostAdminCreateAndSendToReviewStatus404Json2;
      };
  "500":
    | {
        contentType: "text/plain";
        data: BlogPostAdminCreateAndSendToReviewStatus500Plain;
      }
    | {
        contentType: "application/json";
        data: BlogPostAdminCreateAndSendToReviewStatus500Json;
      }
    | {
        contentType: "text/json";
        data: BlogPostAdminCreateAndSendToReviewStatus500Json2;
      };
  "501":
    | {
        contentType: "text/plain";
        data: BlogPostAdminCreateAndSendToReviewStatus501Plain;
      }
    | {
        contentType: "application/json";
        data: BlogPostAdminCreateAndSendToReviewStatus501Json;
      }
    | {
        contentType: "text/json";
        data: BlogPostAdminCreateAndSendToReviewStatus501Json2;
      };
};

/**
 * @description Union of all possible responses
 */
export type BlogPostAdminCreateAndSendToReviewResponse =
  | BlogPostAdminCreateAndSendToReviewStatus200
  | BlogPostAdminCreateAndSendToReviewStatus400
  | BlogPostAdminCreateAndSendToReviewStatus401
  | BlogPostAdminCreateAndSendToReviewStatus403
  | BlogPostAdminCreateAndSendToReviewStatus404
  | BlogPostAdminCreateAndSendToReviewStatus500
  | BlogPostAdminCreateAndSendToReviewStatus501;
