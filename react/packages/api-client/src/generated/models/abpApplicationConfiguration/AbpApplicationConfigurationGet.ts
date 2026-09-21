/* oxlint-disable */

import type { VoloAbpAspNetCoreMvcApplicationConfigurationsApplicationConfigurationDto } from "../volo/abp/aspNetCore/mvc/applicationConfigurations/ApplicationConfigurationDto";
import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse";

export type AbpApplicationConfigurationGetQuery = {
  IncludeLocalizationResources?: boolean;
};

export type AbpApplicationConfigurationGetStatus200Plain =
  VoloAbpAspNetCoreMvcApplicationConfigurationsApplicationConfigurationDto;

export type AbpApplicationConfigurationGetStatus200Json =
  VoloAbpAspNetCoreMvcApplicationConfigurationsApplicationConfigurationDto;

export type AbpApplicationConfigurationGetStatus200Json2 =
  VoloAbpAspNetCoreMvcApplicationConfigurationsApplicationConfigurationDto;

export type AbpApplicationConfigurationGetStatus200 =
  | AbpApplicationConfigurationGetStatus200Plain
  | AbpApplicationConfigurationGetStatus200Json
  | AbpApplicationConfigurationGetStatus200Json2;

export type AbpApplicationConfigurationGetStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type AbpApplicationConfigurationGetStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

export type AbpApplicationConfigurationGetStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type AbpApplicationConfigurationGetStatus400 =
  | AbpApplicationConfigurationGetStatus400Plain
  | AbpApplicationConfigurationGetStatus400Json
  | AbpApplicationConfigurationGetStatus400Json2;

export type AbpApplicationConfigurationGetStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type AbpApplicationConfigurationGetStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

export type AbpApplicationConfigurationGetStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type AbpApplicationConfigurationGetStatus401 =
  | AbpApplicationConfigurationGetStatus401Plain
  | AbpApplicationConfigurationGetStatus401Json
  | AbpApplicationConfigurationGetStatus401Json2;

export type AbpApplicationConfigurationGetStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type AbpApplicationConfigurationGetStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

export type AbpApplicationConfigurationGetStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type AbpApplicationConfigurationGetStatus403 =
  | AbpApplicationConfigurationGetStatus403Plain
  | AbpApplicationConfigurationGetStatus403Json
  | AbpApplicationConfigurationGetStatus403Json2;

export type AbpApplicationConfigurationGetStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type AbpApplicationConfigurationGetStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

export type AbpApplicationConfigurationGetStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type AbpApplicationConfigurationGetStatus404 =
  | AbpApplicationConfigurationGetStatus404Plain
  | AbpApplicationConfigurationGetStatus404Json
  | AbpApplicationConfigurationGetStatus404Json2;

export type AbpApplicationConfigurationGetStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type AbpApplicationConfigurationGetStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

export type AbpApplicationConfigurationGetStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type AbpApplicationConfigurationGetStatus500 =
  | AbpApplicationConfigurationGetStatus500Plain
  | AbpApplicationConfigurationGetStatus500Json
  | AbpApplicationConfigurationGetStatus500Json2;

export type AbpApplicationConfigurationGetStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type AbpApplicationConfigurationGetStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

export type AbpApplicationConfigurationGetStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type AbpApplicationConfigurationGetStatus501 =
  | AbpApplicationConfigurationGetStatus501Plain
  | AbpApplicationConfigurationGetStatus501Json
  | AbpApplicationConfigurationGetStatus501Json2;

export type AbpApplicationConfigurationGetOptions = {
  body?: never;
  path?: never;
  query?: AbpApplicationConfigurationGetQuery;
  headers?: never;
};

export type AbpApplicationConfigurationGetResponses = {
  "200":
    | {
        contentType: "text/plain";
        data: AbpApplicationConfigurationGetStatus200Plain;
      }
    | {
        contentType: "application/json";
        data: AbpApplicationConfigurationGetStatus200Json;
      }
    | {
        contentType: "text/json";
        data: AbpApplicationConfigurationGetStatus200Json2;
      };
  "400":
    | {
        contentType: "text/plain";
        data: AbpApplicationConfigurationGetStatus400Plain;
      }
    | {
        contentType: "application/json";
        data: AbpApplicationConfigurationGetStatus400Json;
      }
    | {
        contentType: "text/json";
        data: AbpApplicationConfigurationGetStatus400Json2;
      };
  "401":
    | {
        contentType: "text/plain";
        data: AbpApplicationConfigurationGetStatus401Plain;
      }
    | {
        contentType: "application/json";
        data: AbpApplicationConfigurationGetStatus401Json;
      }
    | {
        contentType: "text/json";
        data: AbpApplicationConfigurationGetStatus401Json2;
      };
  "403":
    | {
        contentType: "text/plain";
        data: AbpApplicationConfigurationGetStatus403Plain;
      }
    | {
        contentType: "application/json";
        data: AbpApplicationConfigurationGetStatus403Json;
      }
    | {
        contentType: "text/json";
        data: AbpApplicationConfigurationGetStatus403Json2;
      };
  "404":
    | {
        contentType: "text/plain";
        data: AbpApplicationConfigurationGetStatus404Plain;
      }
    | {
        contentType: "application/json";
        data: AbpApplicationConfigurationGetStatus404Json;
      }
    | {
        contentType: "text/json";
        data: AbpApplicationConfigurationGetStatus404Json2;
      };
  "500":
    | {
        contentType: "text/plain";
        data: AbpApplicationConfigurationGetStatus500Plain;
      }
    | {
        contentType: "application/json";
        data: AbpApplicationConfigurationGetStatus500Json;
      }
    | {
        contentType: "text/json";
        data: AbpApplicationConfigurationGetStatus500Json2;
      };
  "501":
    | {
        contentType: "text/plain";
        data: AbpApplicationConfigurationGetStatus501Plain;
      }
    | {
        contentType: "application/json";
        data: AbpApplicationConfigurationGetStatus501Json;
      }
    | {
        contentType: "text/json";
        data: AbpApplicationConfigurationGetStatus501Json2;
      };
};

/**
 * @description Union of all possible responses
 */
export type AbpApplicationConfigurationGetResponse =
  | AbpApplicationConfigurationGetStatus200
  | AbpApplicationConfigurationGetStatus400
  | AbpApplicationConfigurationGetStatus401
  | AbpApplicationConfigurationGetStatus403
  | AbpApplicationConfigurationGetStatus404
  | AbpApplicationConfigurationGetStatus500
  | AbpApplicationConfigurationGetStatus501;
