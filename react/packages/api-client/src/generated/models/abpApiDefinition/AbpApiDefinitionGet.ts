/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse";
import type { VoloAbpHttpModelingApplicationApiDescriptionModel } from "../volo/abp/http/modeling/ApplicationApiDescriptionModel";

export type AbpApiDefinitionGetQuery = {
  IncludeTypes?: boolean;
  IncludeDescriptions?: boolean;
};

export type AbpApiDefinitionGetStatus200Plain = VoloAbpHttpModelingApplicationApiDescriptionModel;

export type AbpApiDefinitionGetStatus200Json = VoloAbpHttpModelingApplicationApiDescriptionModel;

export type AbpApiDefinitionGetStatus200Json2 = VoloAbpHttpModelingApplicationApiDescriptionModel;

export type AbpApiDefinitionGetStatus200 =
  | AbpApiDefinitionGetStatus200Plain
  | AbpApiDefinitionGetStatus200Json
  | AbpApiDefinitionGetStatus200Json2;

export type AbpApiDefinitionGetStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type AbpApiDefinitionGetStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

export type AbpApiDefinitionGetStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type AbpApiDefinitionGetStatus400 =
  | AbpApiDefinitionGetStatus400Plain
  | AbpApiDefinitionGetStatus400Json
  | AbpApiDefinitionGetStatus400Json2;

export type AbpApiDefinitionGetStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type AbpApiDefinitionGetStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

export type AbpApiDefinitionGetStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type AbpApiDefinitionGetStatus401 =
  | AbpApiDefinitionGetStatus401Plain
  | AbpApiDefinitionGetStatus401Json
  | AbpApiDefinitionGetStatus401Json2;

export type AbpApiDefinitionGetStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type AbpApiDefinitionGetStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

export type AbpApiDefinitionGetStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type AbpApiDefinitionGetStatus403 =
  | AbpApiDefinitionGetStatus403Plain
  | AbpApiDefinitionGetStatus403Json
  | AbpApiDefinitionGetStatus403Json2;

export type AbpApiDefinitionGetStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type AbpApiDefinitionGetStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

export type AbpApiDefinitionGetStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type AbpApiDefinitionGetStatus404 =
  | AbpApiDefinitionGetStatus404Plain
  | AbpApiDefinitionGetStatus404Json
  | AbpApiDefinitionGetStatus404Json2;

export type AbpApiDefinitionGetStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type AbpApiDefinitionGetStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

export type AbpApiDefinitionGetStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type AbpApiDefinitionGetStatus500 =
  | AbpApiDefinitionGetStatus500Plain
  | AbpApiDefinitionGetStatus500Json
  | AbpApiDefinitionGetStatus500Json2;

export type AbpApiDefinitionGetStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type AbpApiDefinitionGetStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

export type AbpApiDefinitionGetStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type AbpApiDefinitionGetStatus501 =
  | AbpApiDefinitionGetStatus501Plain
  | AbpApiDefinitionGetStatus501Json
  | AbpApiDefinitionGetStatus501Json2;

export type AbpApiDefinitionGetOptions = {
  body?: never;
  path?: never;
  query?: AbpApiDefinitionGetQuery;
  headers?: never;
};

export type AbpApiDefinitionGetResponses = {
  "200":
    | {
        contentType: "text/plain";
        data: AbpApiDefinitionGetStatus200Plain;
      }
    | {
        contentType: "application/json";
        data: AbpApiDefinitionGetStatus200Json;
      }
    | {
        contentType: "text/json";
        data: AbpApiDefinitionGetStatus200Json2;
      };
  "400":
    | {
        contentType: "text/plain";
        data: AbpApiDefinitionGetStatus400Plain;
      }
    | {
        contentType: "application/json";
        data: AbpApiDefinitionGetStatus400Json;
      }
    | {
        contentType: "text/json";
        data: AbpApiDefinitionGetStatus400Json2;
      };
  "401":
    | {
        contentType: "text/plain";
        data: AbpApiDefinitionGetStatus401Plain;
      }
    | {
        contentType: "application/json";
        data: AbpApiDefinitionGetStatus401Json;
      }
    | {
        contentType: "text/json";
        data: AbpApiDefinitionGetStatus401Json2;
      };
  "403":
    | {
        contentType: "text/plain";
        data: AbpApiDefinitionGetStatus403Plain;
      }
    | {
        contentType: "application/json";
        data: AbpApiDefinitionGetStatus403Json;
      }
    | {
        contentType: "text/json";
        data: AbpApiDefinitionGetStatus403Json2;
      };
  "404":
    | {
        contentType: "text/plain";
        data: AbpApiDefinitionGetStatus404Plain;
      }
    | {
        contentType: "application/json";
        data: AbpApiDefinitionGetStatus404Json;
      }
    | {
        contentType: "text/json";
        data: AbpApiDefinitionGetStatus404Json2;
      };
  "500":
    | {
        contentType: "text/plain";
        data: AbpApiDefinitionGetStatus500Plain;
      }
    | {
        contentType: "application/json";
        data: AbpApiDefinitionGetStatus500Json;
      }
    | {
        contentType: "text/json";
        data: AbpApiDefinitionGetStatus500Json2;
      };
  "501":
    | {
        contentType: "text/plain";
        data: AbpApiDefinitionGetStatus501Plain;
      }
    | {
        contentType: "application/json";
        data: AbpApiDefinitionGetStatus501Json;
      }
    | {
        contentType: "text/json";
        data: AbpApiDefinitionGetStatus501Json2;
      };
};

/**
 * @description Union of all possible responses
 */
export type AbpApiDefinitionGetResponse =
  | AbpApiDefinitionGetStatus200
  | AbpApiDefinitionGetStatus400
  | AbpApiDefinitionGetStatus401
  | AbpApiDefinitionGetStatus403
  | AbpApiDefinitionGetStatus404
  | AbpApiDefinitionGetStatus500
  | AbpApiDefinitionGetStatus501;
