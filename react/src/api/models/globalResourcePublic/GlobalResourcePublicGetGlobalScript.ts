/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse";
import type { VoloCmsKitPublicGlobalResourcesGlobalResourceDto } from "../volo/cmsKit/public/globalResources/GlobalResourceDto";

export type GlobalResourcePublicGetGlobalScriptStatus200Plain =
  VoloCmsKitPublicGlobalResourcesGlobalResourceDto;

export type GlobalResourcePublicGetGlobalScriptStatus200Json =
  VoloCmsKitPublicGlobalResourcesGlobalResourceDto;

export type GlobalResourcePublicGetGlobalScriptStatus200Json2 =
  VoloCmsKitPublicGlobalResourcesGlobalResourceDto;

export type GlobalResourcePublicGetGlobalScriptStatus200 =
  | GlobalResourcePublicGetGlobalScriptStatus200Plain
  | GlobalResourcePublicGetGlobalScriptStatus200Json
  | GlobalResourcePublicGetGlobalScriptStatus200Json2;

export type GlobalResourcePublicGetGlobalScriptStatus400Plain =
  VoloAbpHttpRemoteServiceErrorResponse;

export type GlobalResourcePublicGetGlobalScriptStatus400Json =
  VoloAbpHttpRemoteServiceErrorResponse;

export type GlobalResourcePublicGetGlobalScriptStatus400Json2 =
  VoloAbpHttpRemoteServiceErrorResponse;

export type GlobalResourcePublicGetGlobalScriptStatus400 =
  | GlobalResourcePublicGetGlobalScriptStatus400Plain
  | GlobalResourcePublicGetGlobalScriptStatus400Json
  | GlobalResourcePublicGetGlobalScriptStatus400Json2;

export type GlobalResourcePublicGetGlobalScriptStatus401Plain =
  VoloAbpHttpRemoteServiceErrorResponse;

export type GlobalResourcePublicGetGlobalScriptStatus401Json =
  VoloAbpHttpRemoteServiceErrorResponse;

export type GlobalResourcePublicGetGlobalScriptStatus401Json2 =
  VoloAbpHttpRemoteServiceErrorResponse;

export type GlobalResourcePublicGetGlobalScriptStatus401 =
  | GlobalResourcePublicGetGlobalScriptStatus401Plain
  | GlobalResourcePublicGetGlobalScriptStatus401Json
  | GlobalResourcePublicGetGlobalScriptStatus401Json2;

export type GlobalResourcePublicGetGlobalScriptStatus403Plain =
  VoloAbpHttpRemoteServiceErrorResponse;

export type GlobalResourcePublicGetGlobalScriptStatus403Json =
  VoloAbpHttpRemoteServiceErrorResponse;

export type GlobalResourcePublicGetGlobalScriptStatus403Json2 =
  VoloAbpHttpRemoteServiceErrorResponse;

export type GlobalResourcePublicGetGlobalScriptStatus403 =
  | GlobalResourcePublicGetGlobalScriptStatus403Plain
  | GlobalResourcePublicGetGlobalScriptStatus403Json
  | GlobalResourcePublicGetGlobalScriptStatus403Json2;

export type GlobalResourcePublicGetGlobalScriptStatus404Plain =
  VoloAbpHttpRemoteServiceErrorResponse;

export type GlobalResourcePublicGetGlobalScriptStatus404Json =
  VoloAbpHttpRemoteServiceErrorResponse;

export type GlobalResourcePublicGetGlobalScriptStatus404Json2 =
  VoloAbpHttpRemoteServiceErrorResponse;

export type GlobalResourcePublicGetGlobalScriptStatus404 =
  | GlobalResourcePublicGetGlobalScriptStatus404Plain
  | GlobalResourcePublicGetGlobalScriptStatus404Json
  | GlobalResourcePublicGetGlobalScriptStatus404Json2;

export type GlobalResourcePublicGetGlobalScriptStatus500Plain =
  VoloAbpHttpRemoteServiceErrorResponse;

export type GlobalResourcePublicGetGlobalScriptStatus500Json =
  VoloAbpHttpRemoteServiceErrorResponse;

export type GlobalResourcePublicGetGlobalScriptStatus500Json2 =
  VoloAbpHttpRemoteServiceErrorResponse;

export type GlobalResourcePublicGetGlobalScriptStatus500 =
  | GlobalResourcePublicGetGlobalScriptStatus500Plain
  | GlobalResourcePublicGetGlobalScriptStatus500Json
  | GlobalResourcePublicGetGlobalScriptStatus500Json2;

export type GlobalResourcePublicGetGlobalScriptStatus501Plain =
  VoloAbpHttpRemoteServiceErrorResponse;

export type GlobalResourcePublicGetGlobalScriptStatus501Json =
  VoloAbpHttpRemoteServiceErrorResponse;

export type GlobalResourcePublicGetGlobalScriptStatus501Json2 =
  VoloAbpHttpRemoteServiceErrorResponse;

export type GlobalResourcePublicGetGlobalScriptStatus501 =
  | GlobalResourcePublicGetGlobalScriptStatus501Plain
  | GlobalResourcePublicGetGlobalScriptStatus501Json
  | GlobalResourcePublicGetGlobalScriptStatus501Json2;

export type GlobalResourcePublicGetGlobalScriptOptions = {
  body?: never;
  path?: never;
  query?: never;
  headers?: never;
};

export type GlobalResourcePublicGetGlobalScriptResponses = {
  "200":
    | {
        contentType: "text/plain";
        data: GlobalResourcePublicGetGlobalScriptStatus200Plain;
      }
    | {
        contentType: "application/json";
        data: GlobalResourcePublicGetGlobalScriptStatus200Json;
      }
    | {
        contentType: "text/json";
        data: GlobalResourcePublicGetGlobalScriptStatus200Json2;
      };
  "400":
    | {
        contentType: "text/plain";
        data: GlobalResourcePublicGetGlobalScriptStatus400Plain;
      }
    | {
        contentType: "application/json";
        data: GlobalResourcePublicGetGlobalScriptStatus400Json;
      }
    | {
        contentType: "text/json";
        data: GlobalResourcePublicGetGlobalScriptStatus400Json2;
      };
  "401":
    | {
        contentType: "text/plain";
        data: GlobalResourcePublicGetGlobalScriptStatus401Plain;
      }
    | {
        contentType: "application/json";
        data: GlobalResourcePublicGetGlobalScriptStatus401Json;
      }
    | {
        contentType: "text/json";
        data: GlobalResourcePublicGetGlobalScriptStatus401Json2;
      };
  "403":
    | {
        contentType: "text/plain";
        data: GlobalResourcePublicGetGlobalScriptStatus403Plain;
      }
    | {
        contentType: "application/json";
        data: GlobalResourcePublicGetGlobalScriptStatus403Json;
      }
    | {
        contentType: "text/json";
        data: GlobalResourcePublicGetGlobalScriptStatus403Json2;
      };
  "404":
    | {
        contentType: "text/plain";
        data: GlobalResourcePublicGetGlobalScriptStatus404Plain;
      }
    | {
        contentType: "application/json";
        data: GlobalResourcePublicGetGlobalScriptStatus404Json;
      }
    | {
        contentType: "text/json";
        data: GlobalResourcePublicGetGlobalScriptStatus404Json2;
      };
  "500":
    | {
        contentType: "text/plain";
        data: GlobalResourcePublicGetGlobalScriptStatus500Plain;
      }
    | {
        contentType: "application/json";
        data: GlobalResourcePublicGetGlobalScriptStatus500Json;
      }
    | {
        contentType: "text/json";
        data: GlobalResourcePublicGetGlobalScriptStatus500Json2;
      };
  "501":
    | {
        contentType: "text/plain";
        data: GlobalResourcePublicGetGlobalScriptStatus501Plain;
      }
    | {
        contentType: "application/json";
        data: GlobalResourcePublicGetGlobalScriptStatus501Json;
      }
    | {
        contentType: "text/json";
        data: GlobalResourcePublicGetGlobalScriptStatus501Json2;
      };
};

/**
 * @description Union of all possible responses
 */
export type GlobalResourcePublicGetGlobalScriptResponse =
  | GlobalResourcePublicGetGlobalScriptStatus200
  | GlobalResourcePublicGetGlobalScriptStatus400
  | GlobalResourcePublicGetGlobalScriptStatus401
  | GlobalResourcePublicGetGlobalScriptStatus403
  | GlobalResourcePublicGetGlobalScriptStatus404
  | GlobalResourcePublicGetGlobalScriptStatus500
  | GlobalResourcePublicGetGlobalScriptStatus501;
