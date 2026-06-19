/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse.ts";
import type { VoloAbpHttpModelingApplicationApiDescriptionModel } from "../volo/abp/http/modeling/ApplicationApiDescriptionModel.ts";

/**
 * @type boolean | undefined
 */
export type AbpApiDefinitionGetQueryIncludeTypes = boolean | undefined;

/**
 * @type boolean | undefined
 */
export type AbpApiDefinitionGetQueryIncludeDescriptions = boolean | undefined;

/**
 * @type object
 */
export type AbpApiDefinitionGetStatus200Plain = VoloAbpHttpModelingApplicationApiDescriptionModel;

/**
 * @type object
 */
export type AbpApiDefinitionGetStatus200Json = VoloAbpHttpModelingApplicationApiDescriptionModel;

/**
 * @type object
 */
export type AbpApiDefinitionGetStatus200Json2 = VoloAbpHttpModelingApplicationApiDescriptionModel;

export type AbpApiDefinitionGetStatus200 =
  | AbpApiDefinitionGetStatus200Plain
  | AbpApiDefinitionGetStatus200Json
  | AbpApiDefinitionGetStatus200Json2;

/**
 * @type object
 */
export type AbpApiDefinitionGetStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type AbpApiDefinitionGetStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type AbpApiDefinitionGetStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type AbpApiDefinitionGetStatus400 =
  | AbpApiDefinitionGetStatus400Plain
  | AbpApiDefinitionGetStatus400Json
  | AbpApiDefinitionGetStatus400Json2;

/**
 * @type object
 */
export type AbpApiDefinitionGetStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type AbpApiDefinitionGetStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type AbpApiDefinitionGetStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type AbpApiDefinitionGetStatus401 =
  | AbpApiDefinitionGetStatus401Plain
  | AbpApiDefinitionGetStatus401Json
  | AbpApiDefinitionGetStatus401Json2;

/**
 * @type object
 */
export type AbpApiDefinitionGetStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type AbpApiDefinitionGetStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type AbpApiDefinitionGetStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type AbpApiDefinitionGetStatus403 =
  | AbpApiDefinitionGetStatus403Plain
  | AbpApiDefinitionGetStatus403Json
  | AbpApiDefinitionGetStatus403Json2;

/**
 * @type object
 */
export type AbpApiDefinitionGetStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type AbpApiDefinitionGetStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type AbpApiDefinitionGetStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type AbpApiDefinitionGetStatus404 =
  | AbpApiDefinitionGetStatus404Plain
  | AbpApiDefinitionGetStatus404Json
  | AbpApiDefinitionGetStatus404Json2;

/**
 * @type object
 */
export type AbpApiDefinitionGetStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type AbpApiDefinitionGetStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type AbpApiDefinitionGetStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type AbpApiDefinitionGetStatus500 =
  | AbpApiDefinitionGetStatus500Plain
  | AbpApiDefinitionGetStatus500Json
  | AbpApiDefinitionGetStatus500Json2;

/**
 * @type object
 */
export type AbpApiDefinitionGetStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type AbpApiDefinitionGetStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type AbpApiDefinitionGetStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type AbpApiDefinitionGetStatus501 =
  | AbpApiDefinitionGetStatus501Plain
  | AbpApiDefinitionGetStatus501Json
  | AbpApiDefinitionGetStatus501Json2;

/**
 * @type object
 */
export type AbpApiDefinitionGetRequestConfig = {
  data?: never;
  pathParams?: never;
  /**
   * @type object | undefined
   */
  queryParams?: {
    IncludeTypes?: AbpApiDefinitionGetQueryIncludeTypes;
    IncludeDescriptions?: AbpApiDefinitionGetQueryIncludeDescriptions;
  };
  headerParams?: never;
  /**
   * @type string
   */
  url: "/api/abp/api-definition";
};

/**
 * @type object
 */
export type AbpApiDefinitionGetResponses = {
  "200": AbpApiDefinitionGetStatus200;
  "400": AbpApiDefinitionGetStatus400;
  "401": AbpApiDefinitionGetStatus401;
  "403": AbpApiDefinitionGetStatus403;
  "404": AbpApiDefinitionGetStatus404;
  "500": AbpApiDefinitionGetStatus500;
  "501": AbpApiDefinitionGetStatus501;
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
