/* oxlint-disable */

import type { VoloAbpAspNetCoreMvcApplicationConfigurationsApplicationConfigurationDto } from "../volo/abp/aspNetCore/mvc/applicationConfigurations/ApplicationConfigurationDto.ts";
import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse.ts";

/**
 * @type boolean | undefined
 */
export type AbpApplicationConfigurationGetQueryIncludeLocalizationResources = boolean | undefined;

/**
 * @type object
 */
export type AbpApplicationConfigurationGetStatus200Plain =
  VoloAbpAspNetCoreMvcApplicationConfigurationsApplicationConfigurationDto;

/**
 * @type object
 */
export type AbpApplicationConfigurationGetStatus200Json =
  VoloAbpAspNetCoreMvcApplicationConfigurationsApplicationConfigurationDto;

/**
 * @type object
 */
export type AbpApplicationConfigurationGetStatus200Json2 =
  VoloAbpAspNetCoreMvcApplicationConfigurationsApplicationConfigurationDto;

export type AbpApplicationConfigurationGetStatus200 =
  | AbpApplicationConfigurationGetStatus200Plain
  | AbpApplicationConfigurationGetStatus200Json
  | AbpApplicationConfigurationGetStatus200Json2;

/**
 * @type object
 */
export type AbpApplicationConfigurationGetStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type AbpApplicationConfigurationGetStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type AbpApplicationConfigurationGetStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type AbpApplicationConfigurationGetStatus400 =
  | AbpApplicationConfigurationGetStatus400Plain
  | AbpApplicationConfigurationGetStatus400Json
  | AbpApplicationConfigurationGetStatus400Json2;

/**
 * @type object
 */
export type AbpApplicationConfigurationGetStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type AbpApplicationConfigurationGetStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type AbpApplicationConfigurationGetStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type AbpApplicationConfigurationGetStatus401 =
  | AbpApplicationConfigurationGetStatus401Plain
  | AbpApplicationConfigurationGetStatus401Json
  | AbpApplicationConfigurationGetStatus401Json2;

/**
 * @type object
 */
export type AbpApplicationConfigurationGetStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type AbpApplicationConfigurationGetStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type AbpApplicationConfigurationGetStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type AbpApplicationConfigurationGetStatus403 =
  | AbpApplicationConfigurationGetStatus403Plain
  | AbpApplicationConfigurationGetStatus403Json
  | AbpApplicationConfigurationGetStatus403Json2;

/**
 * @type object
 */
export type AbpApplicationConfigurationGetStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type AbpApplicationConfigurationGetStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type AbpApplicationConfigurationGetStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type AbpApplicationConfigurationGetStatus404 =
  | AbpApplicationConfigurationGetStatus404Plain
  | AbpApplicationConfigurationGetStatus404Json
  | AbpApplicationConfigurationGetStatus404Json2;

/**
 * @type object
 */
export type AbpApplicationConfigurationGetStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type AbpApplicationConfigurationGetStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type AbpApplicationConfigurationGetStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type AbpApplicationConfigurationGetStatus500 =
  | AbpApplicationConfigurationGetStatus500Plain
  | AbpApplicationConfigurationGetStatus500Json
  | AbpApplicationConfigurationGetStatus500Json2;

/**
 * @type object
 */
export type AbpApplicationConfigurationGetStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type AbpApplicationConfigurationGetStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type AbpApplicationConfigurationGetStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type AbpApplicationConfigurationGetStatus501 =
  | AbpApplicationConfigurationGetStatus501Plain
  | AbpApplicationConfigurationGetStatus501Json
  | AbpApplicationConfigurationGetStatus501Json2;

/**
 * @type object
 */
export type AbpApplicationConfigurationGetRequestConfig = {
  data?: never;
  pathParams?: never;
  /**
   * @type object | undefined
   */
  queryParams?: {
    IncludeLocalizationResources?: AbpApplicationConfigurationGetQueryIncludeLocalizationResources;
  };
  headerParams?: never;
  /**
   * @type string
   */
  url: "/api/abp/application-configuration";
};

/**
 * @type object
 */
export type AbpApplicationConfigurationGetResponses = {
  "200": AbpApplicationConfigurationGetStatus200;
  "400": AbpApplicationConfigurationGetStatus400;
  "401": AbpApplicationConfigurationGetStatus401;
  "403": AbpApplicationConfigurationGetStatus403;
  "404": AbpApplicationConfigurationGetStatus404;
  "500": AbpApplicationConfigurationGetStatus500;
  "501": AbpApplicationConfigurationGetStatus501;
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
