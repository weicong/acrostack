/* oxlint-disable */

import type { VoloAbpAspNetCoreMvcApplicationConfigurationsApplicationLocalizationDto } from "../volo/abp/aspNetCore/mvc/applicationConfigurations/ApplicationLocalizationDto.ts";
import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse.ts";

/**
 * @type string
 */
export type AbpApplicationLocalizationGetQueryCultureName = string;

/**
 * @type boolean | undefined
 */
export type AbpApplicationLocalizationGetQueryOnlyDynamics = boolean | undefined;

/**
 * @type object
 */
export type AbpApplicationLocalizationGetStatus200Plain =
  VoloAbpAspNetCoreMvcApplicationConfigurationsApplicationLocalizationDto;

/**
 * @type object
 */
export type AbpApplicationLocalizationGetStatus200Json =
  VoloAbpAspNetCoreMvcApplicationConfigurationsApplicationLocalizationDto;

/**
 * @type object
 */
export type AbpApplicationLocalizationGetStatus200Json2 =
  VoloAbpAspNetCoreMvcApplicationConfigurationsApplicationLocalizationDto;

export type AbpApplicationLocalizationGetStatus200 =
  | AbpApplicationLocalizationGetStatus200Plain
  | AbpApplicationLocalizationGetStatus200Json
  | AbpApplicationLocalizationGetStatus200Json2;

/**
 * @type object
 */
export type AbpApplicationLocalizationGetStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type AbpApplicationLocalizationGetStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type AbpApplicationLocalizationGetStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type AbpApplicationLocalizationGetStatus400 =
  | AbpApplicationLocalizationGetStatus400Plain
  | AbpApplicationLocalizationGetStatus400Json
  | AbpApplicationLocalizationGetStatus400Json2;

/**
 * @type object
 */
export type AbpApplicationLocalizationGetStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type AbpApplicationLocalizationGetStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type AbpApplicationLocalizationGetStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type AbpApplicationLocalizationGetStatus401 =
  | AbpApplicationLocalizationGetStatus401Plain
  | AbpApplicationLocalizationGetStatus401Json
  | AbpApplicationLocalizationGetStatus401Json2;

/**
 * @type object
 */
export type AbpApplicationLocalizationGetStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type AbpApplicationLocalizationGetStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type AbpApplicationLocalizationGetStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type AbpApplicationLocalizationGetStatus403 =
  | AbpApplicationLocalizationGetStatus403Plain
  | AbpApplicationLocalizationGetStatus403Json
  | AbpApplicationLocalizationGetStatus403Json2;

/**
 * @type object
 */
export type AbpApplicationLocalizationGetStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type AbpApplicationLocalizationGetStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type AbpApplicationLocalizationGetStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type AbpApplicationLocalizationGetStatus404 =
  | AbpApplicationLocalizationGetStatus404Plain
  | AbpApplicationLocalizationGetStatus404Json
  | AbpApplicationLocalizationGetStatus404Json2;

/**
 * @type object
 */
export type AbpApplicationLocalizationGetStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type AbpApplicationLocalizationGetStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type AbpApplicationLocalizationGetStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type AbpApplicationLocalizationGetStatus500 =
  | AbpApplicationLocalizationGetStatus500Plain
  | AbpApplicationLocalizationGetStatus500Json
  | AbpApplicationLocalizationGetStatus500Json2;

/**
 * @type object
 */
export type AbpApplicationLocalizationGetStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type AbpApplicationLocalizationGetStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type AbpApplicationLocalizationGetStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type AbpApplicationLocalizationGetStatus501 =
  | AbpApplicationLocalizationGetStatus501Plain
  | AbpApplicationLocalizationGetStatus501Json
  | AbpApplicationLocalizationGetStatus501Json2;

/**
 * @type object
 */
export type AbpApplicationLocalizationGetRequestConfig = {
  data?: never;
  pathParams?: never;
  /**
   * @type object | undefined
   */
  queryParams?: {
    CultureName: AbpApplicationLocalizationGetQueryCultureName;
    OnlyDynamics?: AbpApplicationLocalizationGetQueryOnlyDynamics;
  };
  headerParams?: never;
  /**
   * @type string
   */
  url: "/api/abp/application-localization";
};

/**
 * @type object
 */
export type AbpApplicationLocalizationGetResponses = {
  "200": AbpApplicationLocalizationGetStatus200;
  "400": AbpApplicationLocalizationGetStatus400;
  "401": AbpApplicationLocalizationGetStatus401;
  "403": AbpApplicationLocalizationGetStatus403;
  "404": AbpApplicationLocalizationGetStatus404;
  "500": AbpApplicationLocalizationGetStatus500;
  "501": AbpApplicationLocalizationGetStatus501;
};

/**
 * @description Union of all possible responses
 */
export type AbpApplicationLocalizationGetResponse =
  | AbpApplicationLocalizationGetStatus200
  | AbpApplicationLocalizationGetStatus400
  | AbpApplicationLocalizationGetStatus401
  | AbpApplicationLocalizationGetStatus403
  | AbpApplicationLocalizationGetStatus404
  | AbpApplicationLocalizationGetStatus500
  | AbpApplicationLocalizationGetStatus501;
