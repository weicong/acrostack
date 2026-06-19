/* oxlint-disable */

import type { VoloAbpApplicationDtosListResultDto1VoloAbpIdentityIdentityRoleDtoVoloAbpIdentityApplicationContractsVersion10400CultureneutralPublicKeyTokennull } from "../volo/abp/application/dtos/listResultDto1Volo/abp/identity/identityRoleDtoVolo/abp/identity/application/ContractsVersion10400CultureneutralPublicKeyTokennull.ts";
import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse.ts";

/**
 * @type object
 */
export type RoleGetAllListStatus200Plain =
  VoloAbpApplicationDtosListResultDto1VoloAbpIdentityIdentityRoleDtoVoloAbpIdentityApplicationContractsVersion10400CultureneutralPublicKeyTokennull;

/**
 * @type object
 */
export type RoleGetAllListStatus200Json =
  VoloAbpApplicationDtosListResultDto1VoloAbpIdentityIdentityRoleDtoVoloAbpIdentityApplicationContractsVersion10400CultureneutralPublicKeyTokennull;

/**
 * @type object
 */
export type RoleGetAllListStatus200Json2 =
  VoloAbpApplicationDtosListResultDto1VoloAbpIdentityIdentityRoleDtoVoloAbpIdentityApplicationContractsVersion10400CultureneutralPublicKeyTokennull;

export type RoleGetAllListStatus200 =
  | RoleGetAllListStatus200Plain
  | RoleGetAllListStatus200Json
  | RoleGetAllListStatus200Json2;

/**
 * @type object
 */
export type RoleGetAllListStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type RoleGetAllListStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type RoleGetAllListStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type RoleGetAllListStatus400 =
  | RoleGetAllListStatus400Plain
  | RoleGetAllListStatus400Json
  | RoleGetAllListStatus400Json2;

/**
 * @type object
 */
export type RoleGetAllListStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type RoleGetAllListStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type RoleGetAllListStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type RoleGetAllListStatus401 =
  | RoleGetAllListStatus401Plain
  | RoleGetAllListStatus401Json
  | RoleGetAllListStatus401Json2;

/**
 * @type object
 */
export type RoleGetAllListStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type RoleGetAllListStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type RoleGetAllListStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type RoleGetAllListStatus403 =
  | RoleGetAllListStatus403Plain
  | RoleGetAllListStatus403Json
  | RoleGetAllListStatus403Json2;

/**
 * @type object
 */
export type RoleGetAllListStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type RoleGetAllListStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type RoleGetAllListStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type RoleGetAllListStatus404 =
  | RoleGetAllListStatus404Plain
  | RoleGetAllListStatus404Json
  | RoleGetAllListStatus404Json2;

/**
 * @type object
 */
export type RoleGetAllListStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type RoleGetAllListStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type RoleGetAllListStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type RoleGetAllListStatus500 =
  | RoleGetAllListStatus500Plain
  | RoleGetAllListStatus500Json
  | RoleGetAllListStatus500Json2;

/**
 * @type object
 */
export type RoleGetAllListStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type RoleGetAllListStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type RoleGetAllListStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type RoleGetAllListStatus501 =
  | RoleGetAllListStatus501Plain
  | RoleGetAllListStatus501Json
  | RoleGetAllListStatus501Json2;

/**
 * @type object
 */
export type RoleGetAllListRequestConfig = {
  data?: never;
  pathParams?: never;
  queryParams?: never;
  headerParams?: never;
  /**
   * @type string
   */
  url: "/api/identity/roles/all";
};

/**
 * @type object
 */
export type RoleGetAllListResponses = {
  "200": RoleGetAllListStatus200;
  "400": RoleGetAllListStatus400;
  "401": RoleGetAllListStatus401;
  "403": RoleGetAllListStatus403;
  "404": RoleGetAllListStatus404;
  "500": RoleGetAllListStatus500;
  "501": RoleGetAllListStatus501;
};

/**
 * @description Union of all possible responses
 */
export type RoleGetAllListResponse =
  | RoleGetAllListStatus200
  | RoleGetAllListStatus400
  | RoleGetAllListStatus401
  | RoleGetAllListStatus403
  | RoleGetAllListStatus404
  | RoleGetAllListStatus500
  | RoleGetAllListStatus501;
