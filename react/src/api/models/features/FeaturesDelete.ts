/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse.ts";

/**
 * @type string | undefined
 */
export type FeaturesDeleteQueryProviderName = string | undefined;

/**
 * @type string | undefined
 */
export type FeaturesDeleteQueryProviderKey = string | undefined;

/**
 * @type any
 */
export type FeaturesDeleteStatus200 = any;

/**
 * @type any
 */
export type FeaturesDeleteStatus204 = any;

/**
 * @type object
 */
export type FeaturesDeleteStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type FeaturesDeleteStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type FeaturesDeleteStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type FeaturesDeleteStatus400 =
  | FeaturesDeleteStatus400Plain
  | FeaturesDeleteStatus400Json
  | FeaturesDeleteStatus400Json2;

/**
 * @type object
 */
export type FeaturesDeleteStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type FeaturesDeleteStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type FeaturesDeleteStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type FeaturesDeleteStatus401 =
  | FeaturesDeleteStatus401Plain
  | FeaturesDeleteStatus401Json
  | FeaturesDeleteStatus401Json2;

/**
 * @type object
 */
export type FeaturesDeleteStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type FeaturesDeleteStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type FeaturesDeleteStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type FeaturesDeleteStatus403 =
  | FeaturesDeleteStatus403Plain
  | FeaturesDeleteStatus403Json
  | FeaturesDeleteStatus403Json2;

/**
 * @type object
 */
export type FeaturesDeleteStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type FeaturesDeleteStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type FeaturesDeleteStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type FeaturesDeleteStatus404 =
  | FeaturesDeleteStatus404Plain
  | FeaturesDeleteStatus404Json
  | FeaturesDeleteStatus404Json2;

/**
 * @type object
 */
export type FeaturesDeleteStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type FeaturesDeleteStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type FeaturesDeleteStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type FeaturesDeleteStatus500 =
  | FeaturesDeleteStatus500Plain
  | FeaturesDeleteStatus500Json
  | FeaturesDeleteStatus500Json2;

/**
 * @type object
 */
export type FeaturesDeleteStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type FeaturesDeleteStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type FeaturesDeleteStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type FeaturesDeleteStatus501 =
  | FeaturesDeleteStatus501Plain
  | FeaturesDeleteStatus501Json
  | FeaturesDeleteStatus501Json2;

/**
 * @type object
 */
export type FeaturesDeleteRequestConfig = {
  data?: never;
  pathParams?: never;
  /**
   * @type object | undefined
   */
  queryParams?: {
    providerName?: FeaturesDeleteQueryProviderName;
    providerKey?: FeaturesDeleteQueryProviderKey;
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
export type FeaturesDeleteResponses = {
  "200": FeaturesDeleteStatus200;
  "204": FeaturesDeleteStatus204;
  "400": FeaturesDeleteStatus400;
  "401": FeaturesDeleteStatus401;
  "403": FeaturesDeleteStatus403;
  "404": FeaturesDeleteStatus404;
  "500": FeaturesDeleteStatus500;
  "501": FeaturesDeleteStatus501;
};

/**
 * @description Union of all possible responses
 */
export type FeaturesDeleteResponse =
  | FeaturesDeleteStatus200
  | FeaturesDeleteStatus204
  | FeaturesDeleteStatus400
  | FeaturesDeleteStatus401
  | FeaturesDeleteStatus403
  | FeaturesDeleteStatus404
  | FeaturesDeleteStatus500
  | FeaturesDeleteStatus501;
