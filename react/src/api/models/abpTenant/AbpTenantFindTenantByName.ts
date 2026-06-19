/* oxlint-disable */

import type { VoloAbpAspNetCoreMvcMultiTenancyFindTenantResultDto } from "../volo/abp/aspNetCore/mvc/multiTenancy/FindTenantResultDto.ts";
import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse.ts";

/**
 * @type string
 */
export type AbpTenantFindTenantByNamePathName = string;

/**
 * @type object
 */
export type AbpTenantFindTenantByNameStatus200Plain =
  VoloAbpAspNetCoreMvcMultiTenancyFindTenantResultDto;

/**
 * @type object
 */
export type AbpTenantFindTenantByNameStatus200Json =
  VoloAbpAspNetCoreMvcMultiTenancyFindTenantResultDto;

/**
 * @type object
 */
export type AbpTenantFindTenantByNameStatus200Json2 =
  VoloAbpAspNetCoreMvcMultiTenancyFindTenantResultDto;

export type AbpTenantFindTenantByNameStatus200 =
  | AbpTenantFindTenantByNameStatus200Plain
  | AbpTenantFindTenantByNameStatus200Json
  | AbpTenantFindTenantByNameStatus200Json2;

/**
 * @type object
 */
export type AbpTenantFindTenantByNameStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type AbpTenantFindTenantByNameStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type AbpTenantFindTenantByNameStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type AbpTenantFindTenantByNameStatus400 =
  | AbpTenantFindTenantByNameStatus400Plain
  | AbpTenantFindTenantByNameStatus400Json
  | AbpTenantFindTenantByNameStatus400Json2;

/**
 * @type object
 */
export type AbpTenantFindTenantByNameStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type AbpTenantFindTenantByNameStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type AbpTenantFindTenantByNameStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type AbpTenantFindTenantByNameStatus401 =
  | AbpTenantFindTenantByNameStatus401Plain
  | AbpTenantFindTenantByNameStatus401Json
  | AbpTenantFindTenantByNameStatus401Json2;

/**
 * @type object
 */
export type AbpTenantFindTenantByNameStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type AbpTenantFindTenantByNameStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type AbpTenantFindTenantByNameStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type AbpTenantFindTenantByNameStatus403 =
  | AbpTenantFindTenantByNameStatus403Plain
  | AbpTenantFindTenantByNameStatus403Json
  | AbpTenantFindTenantByNameStatus403Json2;

/**
 * @type object
 */
export type AbpTenantFindTenantByNameStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type AbpTenantFindTenantByNameStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type AbpTenantFindTenantByNameStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type AbpTenantFindTenantByNameStatus404 =
  | AbpTenantFindTenantByNameStatus404Plain
  | AbpTenantFindTenantByNameStatus404Json
  | AbpTenantFindTenantByNameStatus404Json2;

/**
 * @type object
 */
export type AbpTenantFindTenantByNameStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type AbpTenantFindTenantByNameStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type AbpTenantFindTenantByNameStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type AbpTenantFindTenantByNameStatus500 =
  | AbpTenantFindTenantByNameStatus500Plain
  | AbpTenantFindTenantByNameStatus500Json
  | AbpTenantFindTenantByNameStatus500Json2;

/**
 * @type object
 */
export type AbpTenantFindTenantByNameStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type AbpTenantFindTenantByNameStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type AbpTenantFindTenantByNameStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type AbpTenantFindTenantByNameStatus501 =
  | AbpTenantFindTenantByNameStatus501Plain
  | AbpTenantFindTenantByNameStatus501Json
  | AbpTenantFindTenantByNameStatus501Json2;

/**
 * @type object
 */
export type AbpTenantFindTenantByNameRequestConfig = {
  data?: never;
  /**
   * @type object
   */
  pathParams: {
    name: AbpTenantFindTenantByNamePathName;
  };
  queryParams?: never;
  headerParams?: never;
  /**
   * @type string
   */
  url: `/api/abp/multi-tenancy/tenants/by-name/${string}`;
};

/**
 * @type object
 */
export type AbpTenantFindTenantByNameResponses = {
  "200": AbpTenantFindTenantByNameStatus200;
  "400": AbpTenantFindTenantByNameStatus400;
  "401": AbpTenantFindTenantByNameStatus401;
  "403": AbpTenantFindTenantByNameStatus403;
  "404": AbpTenantFindTenantByNameStatus404;
  "500": AbpTenantFindTenantByNameStatus500;
  "501": AbpTenantFindTenantByNameStatus501;
};

/**
 * @description Union of all possible responses
 */
export type AbpTenantFindTenantByNameResponse =
  | AbpTenantFindTenantByNameStatus200
  | AbpTenantFindTenantByNameStatus400
  | AbpTenantFindTenantByNameStatus401
  | AbpTenantFindTenantByNameStatus403
  | AbpTenantFindTenantByNameStatus404
  | AbpTenantFindTenantByNameStatus500
  | AbpTenantFindTenantByNameStatus501;
