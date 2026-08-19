/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse";
import type { VoloCmsKitAdminGlobalResourcesGlobalResourcesDto } from "../volo/cmsKit/admin/globalResources/GlobalResourcesDto";

export type GlobalResourceAdminGetStatus200Plain = VoloCmsKitAdminGlobalResourcesGlobalResourcesDto;

export type GlobalResourceAdminGetStatus200Json = VoloCmsKitAdminGlobalResourcesGlobalResourcesDto;

export type GlobalResourceAdminGetStatus200Json2 = VoloCmsKitAdminGlobalResourcesGlobalResourcesDto;

export type GlobalResourceAdminGetStatus200 =
  | GlobalResourceAdminGetStatus200Plain
  | GlobalResourceAdminGetStatus200Json
  | GlobalResourceAdminGetStatus200Json2;

export type GlobalResourceAdminGetStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type GlobalResourceAdminGetStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

export type GlobalResourceAdminGetStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type GlobalResourceAdminGetStatus400 =
  | GlobalResourceAdminGetStatus400Plain
  | GlobalResourceAdminGetStatus400Json
  | GlobalResourceAdminGetStatus400Json2;

export type GlobalResourceAdminGetStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type GlobalResourceAdminGetStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

export type GlobalResourceAdminGetStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type GlobalResourceAdminGetStatus401 =
  | GlobalResourceAdminGetStatus401Plain
  | GlobalResourceAdminGetStatus401Json
  | GlobalResourceAdminGetStatus401Json2;

export type GlobalResourceAdminGetStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type GlobalResourceAdminGetStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

export type GlobalResourceAdminGetStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type GlobalResourceAdminGetStatus403 =
  | GlobalResourceAdminGetStatus403Plain
  | GlobalResourceAdminGetStatus403Json
  | GlobalResourceAdminGetStatus403Json2;

export type GlobalResourceAdminGetStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type GlobalResourceAdminGetStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

export type GlobalResourceAdminGetStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type GlobalResourceAdminGetStatus404 =
  | GlobalResourceAdminGetStatus404Plain
  | GlobalResourceAdminGetStatus404Json
  | GlobalResourceAdminGetStatus404Json2;

export type GlobalResourceAdminGetStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type GlobalResourceAdminGetStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

export type GlobalResourceAdminGetStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type GlobalResourceAdminGetStatus500 =
  | GlobalResourceAdminGetStatus500Plain
  | GlobalResourceAdminGetStatus500Json
  | GlobalResourceAdminGetStatus500Json2;

export type GlobalResourceAdminGetStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type GlobalResourceAdminGetStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

export type GlobalResourceAdminGetStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type GlobalResourceAdminGetStatus501 =
  | GlobalResourceAdminGetStatus501Plain
  | GlobalResourceAdminGetStatus501Json
  | GlobalResourceAdminGetStatus501Json2;

export type GlobalResourceAdminGetOptions = {
  body?: never;
  path?: never;
  query?: never;
  headers?: never;
};

export type GlobalResourceAdminGetResponses = {
  "200":
    | {
        contentType: "text/plain";
        data: GlobalResourceAdminGetStatus200Plain;
      }
    | {
        contentType: "application/json";
        data: GlobalResourceAdminGetStatus200Json;
      }
    | {
        contentType: "text/json";
        data: GlobalResourceAdminGetStatus200Json2;
      };
  "400":
    | {
        contentType: "text/plain";
        data: GlobalResourceAdminGetStatus400Plain;
      }
    | {
        contentType: "application/json";
        data: GlobalResourceAdminGetStatus400Json;
      }
    | {
        contentType: "text/json";
        data: GlobalResourceAdminGetStatus400Json2;
      };
  "401":
    | {
        contentType: "text/plain";
        data: GlobalResourceAdminGetStatus401Plain;
      }
    | {
        contentType: "application/json";
        data: GlobalResourceAdminGetStatus401Json;
      }
    | {
        contentType: "text/json";
        data: GlobalResourceAdminGetStatus401Json2;
      };
  "403":
    | {
        contentType: "text/plain";
        data: GlobalResourceAdminGetStatus403Plain;
      }
    | {
        contentType: "application/json";
        data: GlobalResourceAdminGetStatus403Json;
      }
    | {
        contentType: "text/json";
        data: GlobalResourceAdminGetStatus403Json2;
      };
  "404":
    | {
        contentType: "text/plain";
        data: GlobalResourceAdminGetStatus404Plain;
      }
    | {
        contentType: "application/json";
        data: GlobalResourceAdminGetStatus404Json;
      }
    | {
        contentType: "text/json";
        data: GlobalResourceAdminGetStatus404Json2;
      };
  "500":
    | {
        contentType: "text/plain";
        data: GlobalResourceAdminGetStatus500Plain;
      }
    | {
        contentType: "application/json";
        data: GlobalResourceAdminGetStatus500Json;
      }
    | {
        contentType: "text/json";
        data: GlobalResourceAdminGetStatus500Json2;
      };
  "501":
    | {
        contentType: "text/plain";
        data: GlobalResourceAdminGetStatus501Plain;
      }
    | {
        contentType: "application/json";
        data: GlobalResourceAdminGetStatus501Json;
      }
    | {
        contentType: "text/json";
        data: GlobalResourceAdminGetStatus501Json2;
      };
};

/**
 * @description Union of all possible responses
 */
export type GlobalResourceAdminGetResponse =
  | GlobalResourceAdminGetStatus200
  | GlobalResourceAdminGetStatus400
  | GlobalResourceAdminGetStatus401
  | GlobalResourceAdminGetStatus403
  | GlobalResourceAdminGetStatus404
  | GlobalResourceAdminGetStatus500
  | GlobalResourceAdminGetStatus501;
