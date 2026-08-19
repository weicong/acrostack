/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse";
import type { VoloCmsKitAdminGlobalResourcesGlobalResourcesUpdateDto } from "../volo/cmsKit/admin/globalResources/GlobalResourcesUpdateDto";

export type GlobalResourceAdminSetGlobalResourcesStatus200 = unknown;

export type GlobalResourceAdminSetGlobalResourcesStatus204 = unknown;

export type GlobalResourceAdminSetGlobalResourcesStatus400Plain =
  VoloAbpHttpRemoteServiceErrorResponse;

export type GlobalResourceAdminSetGlobalResourcesStatus400Json =
  VoloAbpHttpRemoteServiceErrorResponse;

export type GlobalResourceAdminSetGlobalResourcesStatus400Json2 =
  VoloAbpHttpRemoteServiceErrorResponse;

export type GlobalResourceAdminSetGlobalResourcesStatus400 =
  | GlobalResourceAdminSetGlobalResourcesStatus400Plain
  | GlobalResourceAdminSetGlobalResourcesStatus400Json
  | GlobalResourceAdminSetGlobalResourcesStatus400Json2;

export type GlobalResourceAdminSetGlobalResourcesStatus401Plain =
  VoloAbpHttpRemoteServiceErrorResponse;

export type GlobalResourceAdminSetGlobalResourcesStatus401Json =
  VoloAbpHttpRemoteServiceErrorResponse;

export type GlobalResourceAdminSetGlobalResourcesStatus401Json2 =
  VoloAbpHttpRemoteServiceErrorResponse;

export type GlobalResourceAdminSetGlobalResourcesStatus401 =
  | GlobalResourceAdminSetGlobalResourcesStatus401Plain
  | GlobalResourceAdminSetGlobalResourcesStatus401Json
  | GlobalResourceAdminSetGlobalResourcesStatus401Json2;

export type GlobalResourceAdminSetGlobalResourcesStatus403Plain =
  VoloAbpHttpRemoteServiceErrorResponse;

export type GlobalResourceAdminSetGlobalResourcesStatus403Json =
  VoloAbpHttpRemoteServiceErrorResponse;

export type GlobalResourceAdminSetGlobalResourcesStatus403Json2 =
  VoloAbpHttpRemoteServiceErrorResponse;

export type GlobalResourceAdminSetGlobalResourcesStatus403 =
  | GlobalResourceAdminSetGlobalResourcesStatus403Plain
  | GlobalResourceAdminSetGlobalResourcesStatus403Json
  | GlobalResourceAdminSetGlobalResourcesStatus403Json2;

export type GlobalResourceAdminSetGlobalResourcesStatus404Plain =
  VoloAbpHttpRemoteServiceErrorResponse;

export type GlobalResourceAdminSetGlobalResourcesStatus404Json =
  VoloAbpHttpRemoteServiceErrorResponse;

export type GlobalResourceAdminSetGlobalResourcesStatus404Json2 =
  VoloAbpHttpRemoteServiceErrorResponse;

export type GlobalResourceAdminSetGlobalResourcesStatus404 =
  | GlobalResourceAdminSetGlobalResourcesStatus404Plain
  | GlobalResourceAdminSetGlobalResourcesStatus404Json
  | GlobalResourceAdminSetGlobalResourcesStatus404Json2;

export type GlobalResourceAdminSetGlobalResourcesStatus500Plain =
  VoloAbpHttpRemoteServiceErrorResponse;

export type GlobalResourceAdminSetGlobalResourcesStatus500Json =
  VoloAbpHttpRemoteServiceErrorResponse;

export type GlobalResourceAdminSetGlobalResourcesStatus500Json2 =
  VoloAbpHttpRemoteServiceErrorResponse;

export type GlobalResourceAdminSetGlobalResourcesStatus500 =
  | GlobalResourceAdminSetGlobalResourcesStatus500Plain
  | GlobalResourceAdminSetGlobalResourcesStatus500Json
  | GlobalResourceAdminSetGlobalResourcesStatus500Json2;

export type GlobalResourceAdminSetGlobalResourcesStatus501Plain =
  VoloAbpHttpRemoteServiceErrorResponse;

export type GlobalResourceAdminSetGlobalResourcesStatus501Json =
  VoloAbpHttpRemoteServiceErrorResponse;

export type GlobalResourceAdminSetGlobalResourcesStatus501Json2 =
  VoloAbpHttpRemoteServiceErrorResponse;

export type GlobalResourceAdminSetGlobalResourcesStatus501 =
  | GlobalResourceAdminSetGlobalResourcesStatus501Plain
  | GlobalResourceAdminSetGlobalResourcesStatus501Json
  | GlobalResourceAdminSetGlobalResourcesStatus501Json2;

export type GlobalResourceAdminSetGlobalResourcesBodyJson =
  | Omit<NonNullable<VoloCmsKitAdminGlobalResourcesGlobalResourcesUpdateDto>, "extraProperties">
  | undefined;

export type GlobalResourceAdminSetGlobalResourcesBodyJson2 =
  | Omit<NonNullable<VoloCmsKitAdminGlobalResourcesGlobalResourcesUpdateDto>, "extraProperties">
  | undefined;

export type GlobalResourceAdminSetGlobalResourcesBodyJson3 =
  | Omit<NonNullable<VoloCmsKitAdminGlobalResourcesGlobalResourcesUpdateDto>, "extraProperties">
  | undefined;

export type GlobalResourceAdminSetGlobalResourcesBody =
  | GlobalResourceAdminSetGlobalResourcesBodyJson
  | GlobalResourceAdminSetGlobalResourcesBodyJson2
  | GlobalResourceAdminSetGlobalResourcesBodyJson3;

export type GlobalResourceAdminSetGlobalResourcesOptions = {
  body: GlobalResourceAdminSetGlobalResourcesBody;
  path?: never;
  query?: never;
  headers?: never;
};

export type GlobalResourceAdminSetGlobalResourcesResponses = {
  "200": GlobalResourceAdminSetGlobalResourcesStatus200;
  "204": GlobalResourceAdminSetGlobalResourcesStatus204;
  "400":
    | {
        contentType: "text/plain";
        data: GlobalResourceAdminSetGlobalResourcesStatus400Plain;
      }
    | {
        contentType: "application/json";
        data: GlobalResourceAdminSetGlobalResourcesStatus400Json;
      }
    | {
        contentType: "text/json";
        data: GlobalResourceAdminSetGlobalResourcesStatus400Json2;
      };
  "401":
    | {
        contentType: "text/plain";
        data: GlobalResourceAdminSetGlobalResourcesStatus401Plain;
      }
    | {
        contentType: "application/json";
        data: GlobalResourceAdminSetGlobalResourcesStatus401Json;
      }
    | {
        contentType: "text/json";
        data: GlobalResourceAdminSetGlobalResourcesStatus401Json2;
      };
  "403":
    | {
        contentType: "text/plain";
        data: GlobalResourceAdminSetGlobalResourcesStatus403Plain;
      }
    | {
        contentType: "application/json";
        data: GlobalResourceAdminSetGlobalResourcesStatus403Json;
      }
    | {
        contentType: "text/json";
        data: GlobalResourceAdminSetGlobalResourcesStatus403Json2;
      };
  "404":
    | {
        contentType: "text/plain";
        data: GlobalResourceAdminSetGlobalResourcesStatus404Plain;
      }
    | {
        contentType: "application/json";
        data: GlobalResourceAdminSetGlobalResourcesStatus404Json;
      }
    | {
        contentType: "text/json";
        data: GlobalResourceAdminSetGlobalResourcesStatus404Json2;
      };
  "500":
    | {
        contentType: "text/plain";
        data: GlobalResourceAdminSetGlobalResourcesStatus500Plain;
      }
    | {
        contentType: "application/json";
        data: GlobalResourceAdminSetGlobalResourcesStatus500Json;
      }
    | {
        contentType: "text/json";
        data: GlobalResourceAdminSetGlobalResourcesStatus500Json2;
      };
  "501":
    | {
        contentType: "text/plain";
        data: GlobalResourceAdminSetGlobalResourcesStatus501Plain;
      }
    | {
        contentType: "application/json";
        data: GlobalResourceAdminSetGlobalResourcesStatus501Json;
      }
    | {
        contentType: "text/json";
        data: GlobalResourceAdminSetGlobalResourcesStatus501Json2;
      };
};

/**
 * @description Union of all possible responses
 */
export type GlobalResourceAdminSetGlobalResourcesResponse =
  | GlobalResourceAdminSetGlobalResourcesStatus200
  | GlobalResourceAdminSetGlobalResourcesStatus204
  | GlobalResourceAdminSetGlobalResourcesStatus400
  | GlobalResourceAdminSetGlobalResourcesStatus401
  | GlobalResourceAdminSetGlobalResourcesStatus403
  | GlobalResourceAdminSetGlobalResourcesStatus404
  | GlobalResourceAdminSetGlobalResourcesStatus500
  | GlobalResourceAdminSetGlobalResourcesStatus501;
