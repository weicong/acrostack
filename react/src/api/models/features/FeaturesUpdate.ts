/* oxlint-disable */

import type { VoloAbpFeatureManagementUpdateFeaturesDto } from "../volo/abp/featureManagement/UpdateFeaturesDto";
import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse";

export type FeaturesUpdateQuery = {
  providerName?: string;
  providerKey?: string;
};

export type FeaturesUpdateStatus200 = unknown;

export type FeaturesUpdateStatus204 = unknown;

export type FeaturesUpdateStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type FeaturesUpdateStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

export type FeaturesUpdateStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type FeaturesUpdateStatus400 =
  | FeaturesUpdateStatus400Plain
  | FeaturesUpdateStatus400Json
  | FeaturesUpdateStatus400Json2;

export type FeaturesUpdateStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type FeaturesUpdateStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

export type FeaturesUpdateStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type FeaturesUpdateStatus401 =
  | FeaturesUpdateStatus401Plain
  | FeaturesUpdateStatus401Json
  | FeaturesUpdateStatus401Json2;

export type FeaturesUpdateStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type FeaturesUpdateStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

export type FeaturesUpdateStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type FeaturesUpdateStatus403 =
  | FeaturesUpdateStatus403Plain
  | FeaturesUpdateStatus403Json
  | FeaturesUpdateStatus403Json2;

export type FeaturesUpdateStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type FeaturesUpdateStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

export type FeaturesUpdateStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type FeaturesUpdateStatus404 =
  | FeaturesUpdateStatus404Plain
  | FeaturesUpdateStatus404Json
  | FeaturesUpdateStatus404Json2;

export type FeaturesUpdateStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type FeaturesUpdateStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

export type FeaturesUpdateStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type FeaturesUpdateStatus500 =
  | FeaturesUpdateStatus500Plain
  | FeaturesUpdateStatus500Json
  | FeaturesUpdateStatus500Json2;

export type FeaturesUpdateStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type FeaturesUpdateStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

export type FeaturesUpdateStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type FeaturesUpdateStatus501 =
  | FeaturesUpdateStatus501Plain
  | FeaturesUpdateStatus501Json
  | FeaturesUpdateStatus501Json2;

export type FeaturesUpdateBodyJson = VoloAbpFeatureManagementUpdateFeaturesDto | undefined;

export type FeaturesUpdateBodyJson2 = VoloAbpFeatureManagementUpdateFeaturesDto | undefined;

export type FeaturesUpdateBodyJson3 = VoloAbpFeatureManagementUpdateFeaturesDto | undefined;

export type FeaturesUpdateBody =
  | FeaturesUpdateBodyJson
  | FeaturesUpdateBodyJson2
  | FeaturesUpdateBodyJson3;

export type FeaturesUpdateOptions = {
  body: FeaturesUpdateBody;
  path?: never;
  query?: FeaturesUpdateQuery;
  headers?: never;
};

export type FeaturesUpdateResponses = {
  "200": FeaturesUpdateStatus200;
  "204": FeaturesUpdateStatus204;
  "400":
    | {
        contentType: "text/plain";
        data: FeaturesUpdateStatus400Plain;
      }
    | {
        contentType: "application/json";
        data: FeaturesUpdateStatus400Json;
      }
    | {
        contentType: "text/json";
        data: FeaturesUpdateStatus400Json2;
      };
  "401":
    | {
        contentType: "text/plain";
        data: FeaturesUpdateStatus401Plain;
      }
    | {
        contentType: "application/json";
        data: FeaturesUpdateStatus401Json;
      }
    | {
        contentType: "text/json";
        data: FeaturesUpdateStatus401Json2;
      };
  "403":
    | {
        contentType: "text/plain";
        data: FeaturesUpdateStatus403Plain;
      }
    | {
        contentType: "application/json";
        data: FeaturesUpdateStatus403Json;
      }
    | {
        contentType: "text/json";
        data: FeaturesUpdateStatus403Json2;
      };
  "404":
    | {
        contentType: "text/plain";
        data: FeaturesUpdateStatus404Plain;
      }
    | {
        contentType: "application/json";
        data: FeaturesUpdateStatus404Json;
      }
    | {
        contentType: "text/json";
        data: FeaturesUpdateStatus404Json2;
      };
  "500":
    | {
        contentType: "text/plain";
        data: FeaturesUpdateStatus500Plain;
      }
    | {
        contentType: "application/json";
        data: FeaturesUpdateStatus500Json;
      }
    | {
        contentType: "text/json";
        data: FeaturesUpdateStatus500Json2;
      };
  "501":
    | {
        contentType: "text/plain";
        data: FeaturesUpdateStatus501Plain;
      }
    | {
        contentType: "application/json";
        data: FeaturesUpdateStatus501Json;
      }
    | {
        contentType: "text/json";
        data: FeaturesUpdateStatus501Json2;
      };
};

/**
 * @description Union of all possible responses
 */
export type FeaturesUpdateResponse =
  | FeaturesUpdateStatus200
  | FeaturesUpdateStatus204
  | FeaturesUpdateStatus400
  | FeaturesUpdateStatus401
  | FeaturesUpdateStatus403
  | FeaturesUpdateStatus404
  | FeaturesUpdateStatus500
  | FeaturesUpdateStatus501;
