/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse";
import type { VoloCmsKitAdminCommentsCommentSettingsDto } from "../volo/cmsKit/admin/comments/CommentSettingsDto";

export type CommentAdminUpdateSettingsStatus200 = unknown;

export type CommentAdminUpdateSettingsStatus204 = unknown;

export type CommentAdminUpdateSettingsStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type CommentAdminUpdateSettingsStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

export type CommentAdminUpdateSettingsStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type CommentAdminUpdateSettingsStatus400 =
  | CommentAdminUpdateSettingsStatus400Plain
  | CommentAdminUpdateSettingsStatus400Json
  | CommentAdminUpdateSettingsStatus400Json2;

export type CommentAdminUpdateSettingsStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type CommentAdminUpdateSettingsStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

export type CommentAdminUpdateSettingsStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type CommentAdminUpdateSettingsStatus401 =
  | CommentAdminUpdateSettingsStatus401Plain
  | CommentAdminUpdateSettingsStatus401Json
  | CommentAdminUpdateSettingsStatus401Json2;

export type CommentAdminUpdateSettingsStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type CommentAdminUpdateSettingsStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

export type CommentAdminUpdateSettingsStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type CommentAdminUpdateSettingsStatus403 =
  | CommentAdminUpdateSettingsStatus403Plain
  | CommentAdminUpdateSettingsStatus403Json
  | CommentAdminUpdateSettingsStatus403Json2;

export type CommentAdminUpdateSettingsStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type CommentAdminUpdateSettingsStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

export type CommentAdminUpdateSettingsStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type CommentAdminUpdateSettingsStatus404 =
  | CommentAdminUpdateSettingsStatus404Plain
  | CommentAdminUpdateSettingsStatus404Json
  | CommentAdminUpdateSettingsStatus404Json2;

export type CommentAdminUpdateSettingsStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type CommentAdminUpdateSettingsStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

export type CommentAdminUpdateSettingsStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type CommentAdminUpdateSettingsStatus500 =
  | CommentAdminUpdateSettingsStatus500Plain
  | CommentAdminUpdateSettingsStatus500Json
  | CommentAdminUpdateSettingsStatus500Json2;

export type CommentAdminUpdateSettingsStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type CommentAdminUpdateSettingsStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

export type CommentAdminUpdateSettingsStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type CommentAdminUpdateSettingsStatus501 =
  | CommentAdminUpdateSettingsStatus501Plain
  | CommentAdminUpdateSettingsStatus501Json
  | CommentAdminUpdateSettingsStatus501Json2;

export type CommentAdminUpdateSettingsBodyJson =
  | VoloCmsKitAdminCommentsCommentSettingsDto
  | undefined;

export type CommentAdminUpdateSettingsBodyJson2 =
  | VoloCmsKitAdminCommentsCommentSettingsDto
  | undefined;

export type CommentAdminUpdateSettingsBodyJson3 =
  | VoloCmsKitAdminCommentsCommentSettingsDto
  | undefined;

export type CommentAdminUpdateSettingsBody =
  | CommentAdminUpdateSettingsBodyJson
  | CommentAdminUpdateSettingsBodyJson2
  | CommentAdminUpdateSettingsBodyJson3;

export type CommentAdminUpdateSettingsOptions = {
  body: CommentAdminUpdateSettingsBody;
  path?: never;
  query?: never;
  headers?: never;
};

export type CommentAdminUpdateSettingsResponses = {
  "200": CommentAdminUpdateSettingsStatus200;
  "204": CommentAdminUpdateSettingsStatus204;
  "400":
    | {
        contentType: "text/plain";
        data: CommentAdminUpdateSettingsStatus400Plain;
      }
    | {
        contentType: "application/json";
        data: CommentAdminUpdateSettingsStatus400Json;
      }
    | {
        contentType: "text/json";
        data: CommentAdminUpdateSettingsStatus400Json2;
      };
  "401":
    | {
        contentType: "text/plain";
        data: CommentAdminUpdateSettingsStatus401Plain;
      }
    | {
        contentType: "application/json";
        data: CommentAdminUpdateSettingsStatus401Json;
      }
    | {
        contentType: "text/json";
        data: CommentAdminUpdateSettingsStatus401Json2;
      };
  "403":
    | {
        contentType: "text/plain";
        data: CommentAdminUpdateSettingsStatus403Plain;
      }
    | {
        contentType: "application/json";
        data: CommentAdminUpdateSettingsStatus403Json;
      }
    | {
        contentType: "text/json";
        data: CommentAdminUpdateSettingsStatus403Json2;
      };
  "404":
    | {
        contentType: "text/plain";
        data: CommentAdminUpdateSettingsStatus404Plain;
      }
    | {
        contentType: "application/json";
        data: CommentAdminUpdateSettingsStatus404Json;
      }
    | {
        contentType: "text/json";
        data: CommentAdminUpdateSettingsStatus404Json2;
      };
  "500":
    | {
        contentType: "text/plain";
        data: CommentAdminUpdateSettingsStatus500Plain;
      }
    | {
        contentType: "application/json";
        data: CommentAdminUpdateSettingsStatus500Json;
      }
    | {
        contentType: "text/json";
        data: CommentAdminUpdateSettingsStatus500Json2;
      };
  "501":
    | {
        contentType: "text/plain";
        data: CommentAdminUpdateSettingsStatus501Plain;
      }
    | {
        contentType: "application/json";
        data: CommentAdminUpdateSettingsStatus501Json;
      }
    | {
        contentType: "text/json";
        data: CommentAdminUpdateSettingsStatus501Json2;
      };
};

/**
 * @description Union of all possible responses
 */
export type CommentAdminUpdateSettingsResponse =
  | CommentAdminUpdateSettingsStatus200
  | CommentAdminUpdateSettingsStatus204
  | CommentAdminUpdateSettingsStatus400
  | CommentAdminUpdateSettingsStatus401
  | CommentAdminUpdateSettingsStatus403
  | CommentAdminUpdateSettingsStatus404
  | CommentAdminUpdateSettingsStatus500
  | CommentAdminUpdateSettingsStatus501;
