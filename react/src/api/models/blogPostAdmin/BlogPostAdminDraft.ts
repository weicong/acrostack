/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse";

export type BlogPostAdminDraftPath = {
  /**
   * @description
   * Format: `uuid`
   * @type string
   */
  id: string;
};

export type BlogPostAdminDraftStatus200 = unknown;

export type BlogPostAdminDraftStatus204 = unknown;

export type BlogPostAdminDraftStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostAdminDraftStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostAdminDraftStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostAdminDraftStatus400 =
  | BlogPostAdminDraftStatus400Plain
  | BlogPostAdminDraftStatus400Json
  | BlogPostAdminDraftStatus400Json2;

export type BlogPostAdminDraftStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostAdminDraftStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostAdminDraftStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostAdminDraftStatus401 =
  | BlogPostAdminDraftStatus401Plain
  | BlogPostAdminDraftStatus401Json
  | BlogPostAdminDraftStatus401Json2;

export type BlogPostAdminDraftStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostAdminDraftStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostAdminDraftStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostAdminDraftStatus403 =
  | BlogPostAdminDraftStatus403Plain
  | BlogPostAdminDraftStatus403Json
  | BlogPostAdminDraftStatus403Json2;

export type BlogPostAdminDraftStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostAdminDraftStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostAdminDraftStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostAdminDraftStatus404 =
  | BlogPostAdminDraftStatus404Plain
  | BlogPostAdminDraftStatus404Json
  | BlogPostAdminDraftStatus404Json2;

export type BlogPostAdminDraftStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostAdminDraftStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostAdminDraftStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostAdminDraftStatus500 =
  | BlogPostAdminDraftStatus500Plain
  | BlogPostAdminDraftStatus500Json
  | BlogPostAdminDraftStatus500Json2;

export type BlogPostAdminDraftStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostAdminDraftStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostAdminDraftStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostAdminDraftStatus501 =
  | BlogPostAdminDraftStatus501Plain
  | BlogPostAdminDraftStatus501Json
  | BlogPostAdminDraftStatus501Json2;

export type BlogPostAdminDraftOptions = {
  body?: never;
  path: BlogPostAdminDraftPath;
  query?: never;
  headers?: never;
};

export type BlogPostAdminDraftResponses = {
  "200": BlogPostAdminDraftStatus200;
  "204": BlogPostAdminDraftStatus204;
  "400":
    | {
        contentType: "text/plain";
        data: BlogPostAdminDraftStatus400Plain;
      }
    | {
        contentType: "application/json";
        data: BlogPostAdminDraftStatus400Json;
      }
    | {
        contentType: "text/json";
        data: BlogPostAdminDraftStatus400Json2;
      };
  "401":
    | {
        contentType: "text/plain";
        data: BlogPostAdminDraftStatus401Plain;
      }
    | {
        contentType: "application/json";
        data: BlogPostAdminDraftStatus401Json;
      }
    | {
        contentType: "text/json";
        data: BlogPostAdminDraftStatus401Json2;
      };
  "403":
    | {
        contentType: "text/plain";
        data: BlogPostAdminDraftStatus403Plain;
      }
    | {
        contentType: "application/json";
        data: BlogPostAdminDraftStatus403Json;
      }
    | {
        contentType: "text/json";
        data: BlogPostAdminDraftStatus403Json2;
      };
  "404":
    | {
        contentType: "text/plain";
        data: BlogPostAdminDraftStatus404Plain;
      }
    | {
        contentType: "application/json";
        data: BlogPostAdminDraftStatus404Json;
      }
    | {
        contentType: "text/json";
        data: BlogPostAdminDraftStatus404Json2;
      };
  "500":
    | {
        contentType: "text/plain";
        data: BlogPostAdminDraftStatus500Plain;
      }
    | {
        contentType: "application/json";
        data: BlogPostAdminDraftStatus500Json;
      }
    | {
        contentType: "text/json";
        data: BlogPostAdminDraftStatus500Json2;
      };
  "501":
    | {
        contentType: "text/plain";
        data: BlogPostAdminDraftStatus501Plain;
      }
    | {
        contentType: "application/json";
        data: BlogPostAdminDraftStatus501Json;
      }
    | {
        contentType: "text/json";
        data: BlogPostAdminDraftStatus501Json2;
      };
};

/**
 * @description Union of all possible responses
 */
export type BlogPostAdminDraftResponse =
  | BlogPostAdminDraftStatus200
  | BlogPostAdminDraftStatus204
  | BlogPostAdminDraftStatus400
  | BlogPostAdminDraftStatus401
  | BlogPostAdminDraftStatus403
  | BlogPostAdminDraftStatus404
  | BlogPostAdminDraftStatus500
  | BlogPostAdminDraftStatus501;
