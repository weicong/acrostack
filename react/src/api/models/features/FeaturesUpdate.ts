/* oxlint-disable */

import type { VoloAbpFeatureManagementUpdateFeaturesDto } from "../volo/abp/featureManagement/UpdateFeaturesDto.ts";
import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse.ts";

/**
 * @type string | undefined
 */
export type FeaturesUpdateQueryProviderName = string | undefined;

/**
 * @type string | undefined
 */
export type FeaturesUpdateQueryProviderKey = string | undefined;

/**
 * @type any
 */
export type FeaturesUpdateStatus200 = any;

/**
 * @type any
 */
export type FeaturesUpdateStatus204 = any;

/**
 * @type object
 */
export type FeaturesUpdateStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type FeaturesUpdateStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type FeaturesUpdateStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type FeaturesUpdateStatus400 =
  | FeaturesUpdateStatus400Plain
  | FeaturesUpdateStatus400Json
  | FeaturesUpdateStatus400Json2;

/**
 * @type object
 */
export type FeaturesUpdateStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type FeaturesUpdateStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type FeaturesUpdateStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type FeaturesUpdateStatus401 =
  | FeaturesUpdateStatus401Plain
  | FeaturesUpdateStatus401Json
  | FeaturesUpdateStatus401Json2;

/**
 * @type object
 */
export type FeaturesUpdateStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type FeaturesUpdateStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type FeaturesUpdateStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type FeaturesUpdateStatus403 =
  | FeaturesUpdateStatus403Plain
  | FeaturesUpdateStatus403Json
  | FeaturesUpdateStatus403Json2;

/**
 * @type object
 */
export type FeaturesUpdateStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type FeaturesUpdateStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type FeaturesUpdateStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type FeaturesUpdateStatus404 =
  | FeaturesUpdateStatus404Plain
  | FeaturesUpdateStatus404Json
  | FeaturesUpdateStatus404Json2;

/**
 * @type object
 */
export type FeaturesUpdateStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type FeaturesUpdateStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type FeaturesUpdateStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type FeaturesUpdateStatus500 =
  | FeaturesUpdateStatus500Plain
  | FeaturesUpdateStatus500Json
  | FeaturesUpdateStatus500Json2;

/**
 * @type object
 */
export type FeaturesUpdateStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type FeaturesUpdateStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type FeaturesUpdateStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type FeaturesUpdateStatus501 =
  | FeaturesUpdateStatus501Plain
  | FeaturesUpdateStatus501Json
  | FeaturesUpdateStatus501Json2;

/**
 * @type object | undefined
 */
export type FeaturesUpdateJsonData = VoloAbpFeatureManagementUpdateFeaturesDto | undefined;

/**
 * @type object | undefined
 */
export type FeaturesUpdateJson2Data = VoloAbpFeatureManagementUpdateFeaturesDto | undefined;

/**
 * @type object | undefined
 */
export type FeaturesUpdateJson3Data = VoloAbpFeatureManagementUpdateFeaturesDto | undefined;

export type FeaturesUpdateData =
  | FeaturesUpdateJsonData
  | FeaturesUpdateJson2Data
  | FeaturesUpdateJson3Data;

/**
 * @type object
 */
export type FeaturesUpdateRequestConfig = {
  data?: FeaturesUpdateData;
  pathParams?: never;
  /**
   * @type object | undefined
   */
  queryParams?: {
    providerName?: FeaturesUpdateQueryProviderName;
    providerKey?: FeaturesUpdateQueryProviderKey;
  };
  headerParams?: never;
  /**
   * @type string
   */
  url: "/api/feature-management/features";
};

/**
 * @type object
 */
export type FeaturesUpdateResponses = {
  "200": FeaturesUpdateStatus200;
  "204": FeaturesUpdateStatus204;
  "400": FeaturesUpdateStatus400;
  "401": FeaturesUpdateStatus401;
  "403": FeaturesUpdateStatus403;
  "404": FeaturesUpdateStatus404;
  "500": FeaturesUpdateStatus500;
  "501": FeaturesUpdateStatus501;
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
