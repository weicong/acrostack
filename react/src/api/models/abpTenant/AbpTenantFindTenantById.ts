/* oxlint-disable */

import type { VoloAbpAspNetCoreMvcMultiTenancyFindTenantResultDto } from "../volo/abp/aspNetCore/mvc/multiTenancy/FindTenantResultDto.ts";
import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse.ts";

/**
 * @description
 * Format: `uuid`
 * @type string
 */
export type AbpTenantFindTenantByIdPathId = string;

/**
 * @type object
 */
export type AbpTenantFindTenantByIdStatus200Plain =
  VoloAbpAspNetCoreMvcMultiTenancyFindTenantResultDto;

/**
 * @type object
 */
export type AbpTenantFindTenantByIdStatus200Json =
  VoloAbpAspNetCoreMvcMultiTenancyFindTenantResultDto;

/**
 * @type object
 */
export type AbpTenantFindTenantByIdStatus200Json2 =
  VoloAbpAspNetCoreMvcMultiTenancyFindTenantResultDto;

export type AbpTenantFindTenantByIdStatus200 =
  | AbpTenantFindTenantByIdStatus200Plain
  | AbpTenantFindTenantByIdStatus200Json
  | AbpTenantFindTenantByIdStatus200Json2;

/**
 * @type object
 */
export type AbpTenantFindTenantByIdStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type AbpTenantFindTenantByIdStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type AbpTenantFindTenantByIdStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type AbpTenantFindTenantByIdStatus400 =
  | AbpTenantFindTenantByIdStatus400Plain
  | AbpTenantFindTenantByIdStatus400Json
  | AbpTenantFindTenantByIdStatus400Json2;

/**
 * @type object
 */
export type AbpTenantFindTenantByIdStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type AbpTenantFindTenantByIdStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type AbpTenantFindTenantByIdStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type AbpTenantFindTenantByIdStatus401 =
  | AbpTenantFindTenantByIdStatus401Plain
  | AbpTenantFindTenantByIdStatus401Json
  | AbpTenantFindTenantByIdStatus401Json2;

/**
 * @type object
 */
export type AbpTenantFindTenantByIdStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type AbpTenantFindTenantByIdStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type AbpTenantFindTenantByIdStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type AbpTenantFindTenantByIdStatus403 =
  | AbpTenantFindTenantByIdStatus403Plain
  | AbpTenantFindTenantByIdStatus403Json
  | AbpTenantFindTenantByIdStatus403Json2;

/**
 * @type object
 */
export type AbpTenantFindTenantByIdStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type AbpTenantFindTenantByIdStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type AbpTenantFindTenantByIdStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type AbpTenantFindTenantByIdStatus404 =
  | AbpTenantFindTenantByIdStatus404Plain
  | AbpTenantFindTenantByIdStatus404Json
  | AbpTenantFindTenantByIdStatus404Json2;

/**
 * @type object
 */
export type AbpTenantFindTenantByIdStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type AbpTenantFindTenantByIdStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type AbpTenantFindTenantByIdStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type AbpTenantFindTenantByIdStatus500 =
  | AbpTenantFindTenantByIdStatus500Plain
  | AbpTenantFindTenantByIdStatus500Json
  | AbpTenantFindTenantByIdStatus500Json2;

/**
 * @type object
 */
export type AbpTenantFindTenantByIdStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type AbpTenantFindTenantByIdStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type AbpTenantFindTenantByIdStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type AbpTenantFindTenantByIdStatus501 =
  | AbpTenantFindTenantByIdStatus501Plain
  | AbpTenantFindTenantByIdStatus501Json
  | AbpTenantFindTenantByIdStatus501Json2;

/**
 * @type object
 */
export type AbpTenantFindTenantByIdRequestConfig = {
  data?: never;
  /**
   * @type object
   */
  pathParams: {
    id: AbpTenantFindTenantByIdPathId;
  };
  queryParams?: never;
  headerParams?: never;
  /**
   * @type string
   */
  url: `/api/abp/multi-tenancy/tenants/by-id/${string}`;
};

/**
 * @type object
 */
export type AbpTenantFindTenantByIdResponses = {
  "200": AbpTenantFindTenantByIdStatus200;
  "400": AbpTenantFindTenantByIdStatus400;
  "401": AbpTenantFindTenantByIdStatus401;
  "403": AbpTenantFindTenantByIdStatus403;
  "404": AbpTenantFindTenantByIdStatus404;
  "500": AbpTenantFindTenantByIdStatus500;
  "501": AbpTenantFindTenantByIdStatus501;
};

/**
 * @description Union of all possible responses
 */
export type AbpTenantFindTenantByIdResponse =
  | AbpTenantFindTenantByIdStatus200
  | AbpTenantFindTenantByIdStatus400
  | AbpTenantFindTenantByIdStatus401
  | AbpTenantFindTenantByIdStatus403
  | AbpTenantFindTenantByIdStatus404
  | AbpTenantFindTenantByIdStatus500
  | AbpTenantFindTenantByIdStatus501;
