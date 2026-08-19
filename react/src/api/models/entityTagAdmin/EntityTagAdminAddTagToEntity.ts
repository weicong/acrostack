/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse";
import type { VoloCmsKitAdminTagsEntityTagCreateDto } from "../volo/cmsKit/admin/tags/EntityTagCreateDto";

export type EntityTagAdminAddTagToEntityStatus200 = unknown;

export type EntityTagAdminAddTagToEntityStatus204 = unknown;

export type EntityTagAdminAddTagToEntityStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type EntityTagAdminAddTagToEntityStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

export type EntityTagAdminAddTagToEntityStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type EntityTagAdminAddTagToEntityStatus400 =
  | EntityTagAdminAddTagToEntityStatus400Plain
  | EntityTagAdminAddTagToEntityStatus400Json
  | EntityTagAdminAddTagToEntityStatus400Json2;

export type EntityTagAdminAddTagToEntityStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type EntityTagAdminAddTagToEntityStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

export type EntityTagAdminAddTagToEntityStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type EntityTagAdminAddTagToEntityStatus401 =
  | EntityTagAdminAddTagToEntityStatus401Plain
  | EntityTagAdminAddTagToEntityStatus401Json
  | EntityTagAdminAddTagToEntityStatus401Json2;

export type EntityTagAdminAddTagToEntityStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type EntityTagAdminAddTagToEntityStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

export type EntityTagAdminAddTagToEntityStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type EntityTagAdminAddTagToEntityStatus403 =
  | EntityTagAdminAddTagToEntityStatus403Plain
  | EntityTagAdminAddTagToEntityStatus403Json
  | EntityTagAdminAddTagToEntityStatus403Json2;

export type EntityTagAdminAddTagToEntityStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type EntityTagAdminAddTagToEntityStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

export type EntityTagAdminAddTagToEntityStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type EntityTagAdminAddTagToEntityStatus404 =
  | EntityTagAdminAddTagToEntityStatus404Plain
  | EntityTagAdminAddTagToEntityStatus404Json
  | EntityTagAdminAddTagToEntityStatus404Json2;

export type EntityTagAdminAddTagToEntityStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type EntityTagAdminAddTagToEntityStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

export type EntityTagAdminAddTagToEntityStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type EntityTagAdminAddTagToEntityStatus500 =
  | EntityTagAdminAddTagToEntityStatus500Plain
  | EntityTagAdminAddTagToEntityStatus500Json
  | EntityTagAdminAddTagToEntityStatus500Json2;

export type EntityTagAdminAddTagToEntityStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type EntityTagAdminAddTagToEntityStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

export type EntityTagAdminAddTagToEntityStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type EntityTagAdminAddTagToEntityStatus501 =
  | EntityTagAdminAddTagToEntityStatus501Plain
  | EntityTagAdminAddTagToEntityStatus501Json
  | EntityTagAdminAddTagToEntityStatus501Json2;

export type EntityTagAdminAddTagToEntityBodyJson =
  | VoloCmsKitAdminTagsEntityTagCreateDto
  | undefined;

export type EntityTagAdminAddTagToEntityBodyJson2 =
  | VoloCmsKitAdminTagsEntityTagCreateDto
  | undefined;

export type EntityTagAdminAddTagToEntityBodyJson3 =
  | VoloCmsKitAdminTagsEntityTagCreateDto
  | undefined;

export type EntityTagAdminAddTagToEntityBody =
  | EntityTagAdminAddTagToEntityBodyJson
  | EntityTagAdminAddTagToEntityBodyJson2
  | EntityTagAdminAddTagToEntityBodyJson3;

export type EntityTagAdminAddTagToEntityOptions = {
  body: EntityTagAdminAddTagToEntityBody;
  path?: never;
  query?: never;
  headers?: never;
};

export type EntityTagAdminAddTagToEntityResponses = {
  "200": EntityTagAdminAddTagToEntityStatus200;
  "204": EntityTagAdminAddTagToEntityStatus204;
  "400":
    | {
        contentType: "text/plain";
        data: EntityTagAdminAddTagToEntityStatus400Plain;
      }
    | {
        contentType: "application/json";
        data: EntityTagAdminAddTagToEntityStatus400Json;
      }
    | {
        contentType: "text/json";
        data: EntityTagAdminAddTagToEntityStatus400Json2;
      };
  "401":
    | {
        contentType: "text/plain";
        data: EntityTagAdminAddTagToEntityStatus401Plain;
      }
    | {
        contentType: "application/json";
        data: EntityTagAdminAddTagToEntityStatus401Json;
      }
    | {
        contentType: "text/json";
        data: EntityTagAdminAddTagToEntityStatus401Json2;
      };
  "403":
    | {
        contentType: "text/plain";
        data: EntityTagAdminAddTagToEntityStatus403Plain;
      }
    | {
        contentType: "application/json";
        data: EntityTagAdminAddTagToEntityStatus403Json;
      }
    | {
        contentType: "text/json";
        data: EntityTagAdminAddTagToEntityStatus403Json2;
      };
  "404":
    | {
        contentType: "text/plain";
        data: EntityTagAdminAddTagToEntityStatus404Plain;
      }
    | {
        contentType: "application/json";
        data: EntityTagAdminAddTagToEntityStatus404Json;
      }
    | {
        contentType: "text/json";
        data: EntityTagAdminAddTagToEntityStatus404Json2;
      };
  "500":
    | {
        contentType: "text/plain";
        data: EntityTagAdminAddTagToEntityStatus500Plain;
      }
    | {
        contentType: "application/json";
        data: EntityTagAdminAddTagToEntityStatus500Json;
      }
    | {
        contentType: "text/json";
        data: EntityTagAdminAddTagToEntityStatus500Json2;
      };
  "501":
    | {
        contentType: "text/plain";
        data: EntityTagAdminAddTagToEntityStatus501Plain;
      }
    | {
        contentType: "application/json";
        data: EntityTagAdminAddTagToEntityStatus501Json;
      }
    | {
        contentType: "text/json";
        data: EntityTagAdminAddTagToEntityStatus501Json2;
      };
};

/**
 * @description Union of all possible responses
 */
export type EntityTagAdminAddTagToEntityResponse =
  | EntityTagAdminAddTagToEntityStatus200
  | EntityTagAdminAddTagToEntityStatus204
  | EntityTagAdminAddTagToEntityStatus400
  | EntityTagAdminAddTagToEntityStatus401
  | EntityTagAdminAddTagToEntityStatus403
  | EntityTagAdminAddTagToEntityStatus404
  | EntityTagAdminAddTagToEntityStatus500
  | EntityTagAdminAddTagToEntityStatus501;
