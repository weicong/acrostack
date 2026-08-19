/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse";

export type BlogPostAdminSendToReviewPath = {
  /**
   * @description
   * Format: `uuid`
   * @type string
   */
  id: string;
};

export type BlogPostAdminSendToReviewStatus200 = unknown;

export type BlogPostAdminSendToReviewStatus204 = unknown;

export type BlogPostAdminSendToReviewStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostAdminSendToReviewStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostAdminSendToReviewStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostAdminSendToReviewStatus400 =
  | BlogPostAdminSendToReviewStatus400Plain
  | BlogPostAdminSendToReviewStatus400Json
  | BlogPostAdminSendToReviewStatus400Json2;

export type BlogPostAdminSendToReviewStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostAdminSendToReviewStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostAdminSendToReviewStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostAdminSendToReviewStatus401 =
  | BlogPostAdminSendToReviewStatus401Plain
  | BlogPostAdminSendToReviewStatus401Json
  | BlogPostAdminSendToReviewStatus401Json2;

export type BlogPostAdminSendToReviewStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostAdminSendToReviewStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostAdminSendToReviewStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostAdminSendToReviewStatus403 =
  | BlogPostAdminSendToReviewStatus403Plain
  | BlogPostAdminSendToReviewStatus403Json
  | BlogPostAdminSendToReviewStatus403Json2;

export type BlogPostAdminSendToReviewStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostAdminSendToReviewStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostAdminSendToReviewStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostAdminSendToReviewStatus404 =
  | BlogPostAdminSendToReviewStatus404Plain
  | BlogPostAdminSendToReviewStatus404Json
  | BlogPostAdminSendToReviewStatus404Json2;

export type BlogPostAdminSendToReviewStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostAdminSendToReviewStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostAdminSendToReviewStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostAdminSendToReviewStatus500 =
  | BlogPostAdminSendToReviewStatus500Plain
  | BlogPostAdminSendToReviewStatus500Json
  | BlogPostAdminSendToReviewStatus500Json2;

export type BlogPostAdminSendToReviewStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostAdminSendToReviewStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostAdminSendToReviewStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostAdminSendToReviewStatus501 =
  | BlogPostAdminSendToReviewStatus501Plain
  | BlogPostAdminSendToReviewStatus501Json
  | BlogPostAdminSendToReviewStatus501Json2;

export type BlogPostAdminSendToReviewOptions = {
  body?: never;
  path: BlogPostAdminSendToReviewPath;
  query?: never;
  headers?: never;
};

export type BlogPostAdminSendToReviewResponses = {
  "200": BlogPostAdminSendToReviewStatus200;
  "204": BlogPostAdminSendToReviewStatus204;
  "400":
    | {
        contentType: "text/plain";
        data: BlogPostAdminSendToReviewStatus400Plain;
      }
    | {
        contentType: "application/json";
        data: BlogPostAdminSendToReviewStatus400Json;
      }
    | {
        contentType: "text/json";
        data: BlogPostAdminSendToReviewStatus400Json2;
      };
  "401":
    | {
        contentType: "text/plain";
        data: BlogPostAdminSendToReviewStatus401Plain;
      }
    | {
        contentType: "application/json";
        data: BlogPostAdminSendToReviewStatus401Json;
      }
    | {
        contentType: "text/json";
        data: BlogPostAdminSendToReviewStatus401Json2;
      };
  "403":
    | {
        contentType: "text/plain";
        data: BlogPostAdminSendToReviewStatus403Plain;
      }
    | {
        contentType: "application/json";
        data: BlogPostAdminSendToReviewStatus403Json;
      }
    | {
        contentType: "text/json";
        data: BlogPostAdminSendToReviewStatus403Json2;
      };
  "404":
    | {
        contentType: "text/plain";
        data: BlogPostAdminSendToReviewStatus404Plain;
      }
    | {
        contentType: "application/json";
        data: BlogPostAdminSendToReviewStatus404Json;
      }
    | {
        contentType: "text/json";
        data: BlogPostAdminSendToReviewStatus404Json2;
      };
  "500":
    | {
        contentType: "text/plain";
        data: BlogPostAdminSendToReviewStatus500Plain;
      }
    | {
        contentType: "application/json";
        data: BlogPostAdminSendToReviewStatus500Json;
      }
    | {
        contentType: "text/json";
        data: BlogPostAdminSendToReviewStatus500Json2;
      };
  "501":
    | {
        contentType: "text/plain";
        data: BlogPostAdminSendToReviewStatus501Plain;
      }
    | {
        contentType: "application/json";
        data: BlogPostAdminSendToReviewStatus501Json;
      }
    | {
        contentType: "text/json";
        data: BlogPostAdminSendToReviewStatus501Json2;
      };
};

/**
 * @description Union of all possible responses
 */
export type BlogPostAdminSendToReviewResponse =
  | BlogPostAdminSendToReviewStatus200
  | BlogPostAdminSendToReviewStatus204
  | BlogPostAdminSendToReviewStatus400
  | BlogPostAdminSendToReviewStatus401
  | BlogPostAdminSendToReviewStatus403
  | BlogPostAdminSendToReviewStatus404
  | BlogPostAdminSendToReviewStatus500
  | BlogPostAdminSendToReviewStatus501;
