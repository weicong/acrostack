/* oxlint-disable */

import type { VoloAbpFeatureManagementGetFeatureListResultDto } from "../volo/abp/featureManagement/GetFeatureListResultDto.ts";
import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse.ts";

/**
 * @type string | undefined
 */
export type FeaturesGetQueryProviderName = string | undefined;

/**
 * @type string | undefined
 */
export type FeaturesGetQueryProviderKey = string | undefined;

/**
 * @type object
 */
export type FeaturesGetStatus200Plain = VoloAbpFeatureManagementGetFeatureListResultDto;

/**
 * @type object
 */
export type FeaturesGetStatus200Json = VoloAbpFeatureManagementGetFeatureListResultDto;

/**
 * @type object
 */
export type FeaturesGetStatus200Json2 = VoloAbpFeatureManagementGetFeatureListResultDto;

export type FeaturesGetStatus200 =
  | FeaturesGetStatus200Plain
  | FeaturesGetStatus200Json
  | FeaturesGetStatus200Json2;

/**
 * @type object
 */
export type FeaturesGetStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type FeaturesGetStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type FeaturesGetStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type FeaturesGetStatus400 =
  | FeaturesGetStatus400Plain
  | FeaturesGetStatus400Json
  | FeaturesGetStatus400Json2;

/**
 * @type object
 */
export type FeaturesGetStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type FeaturesGetStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type FeaturesGetStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type FeaturesGetStatus401 =
  | FeaturesGetStatus401Plain
  | FeaturesGetStatus401Json
  | FeaturesGetStatus401Json2;

/**
 * @type object
 */
export type FeaturesGetStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type FeaturesGetStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type FeaturesGetStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type FeaturesGetStatus403 =
  | FeaturesGetStatus403Plain
  | FeaturesGetStatus403Json
  | FeaturesGetStatus403Json2;

/**
 * @type object
 */
export type FeaturesGetStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type FeaturesGetStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type FeaturesGetStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type FeaturesGetStatus404 =
  | FeaturesGetStatus404Plain
  | FeaturesGetStatus404Json
  | FeaturesGetStatus404Json2;

/**
 * @type object
 */
export type FeaturesGetStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type FeaturesGetStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type FeaturesGetStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type FeaturesGetStatus500 =
  | FeaturesGetStatus500Plain
  | FeaturesGetStatus500Json
  | FeaturesGetStatus500Json2;

/**
 * @type object
 */
export type FeaturesGetStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type FeaturesGetStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type FeaturesGetStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type FeaturesGetStatus501 =
  | FeaturesGetStatus501Plain
  | FeaturesGetStatus501Json
  | FeaturesGetStatus501Json2;

/**
 * @type object
 */
export type FeaturesGetRequestConfig = {
  data?: never;
  pathParams?: never;
  /**
   * @type object | undefined
   */
  queryParams?: {
    providerName?: FeaturesGetQueryProviderName;
    providerKey?: FeaturesGetQueryProviderKey;
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
export type FeaturesGetResponses = {
  "200": FeaturesGetStatus200;
  "400": FeaturesGetStatus400;
  "401": FeaturesGetStatus401;
  "403": FeaturesGetStatus403;
  "404": FeaturesGetStatus404;
  "500": FeaturesGetStatus500;
  "501": FeaturesGetStatus501;
};

/**
 * @description Union of all possible responses
 */
export type FeaturesGetResponse =
  | FeaturesGetStatus200
  | FeaturesGetStatus400
  | FeaturesGetStatus401
  | FeaturesGetStatus403
  | FeaturesGetStatus404
  | FeaturesGetStatus500
  | FeaturesGetStatus501;
