/* oxlint-disable */

import type { VoloAbpApplicationDtosListResultDto1VoloAbpIdentityIdentityRoleDtoVoloAbpIdentityApplicationContractsVersion10400CultureneutralPublicKeyTokennull } from "../volo/abp/application/dtos/listResultDto1Volo/abp/identity/identityRoleDtoVolo/abp/identity/application/ContractsVersion10400CultureneutralPublicKeyTokennull.ts";
import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse.ts";

/**
 * @type object
 */
export type UserGetAssignableRolesStatus200Plain =
  VoloAbpApplicationDtosListResultDto1VoloAbpIdentityIdentityRoleDtoVoloAbpIdentityApplicationContractsVersion10400CultureneutralPublicKeyTokennull;

/**
 * @type object
 */
export type UserGetAssignableRolesStatus200Json =
  VoloAbpApplicationDtosListResultDto1VoloAbpIdentityIdentityRoleDtoVoloAbpIdentityApplicationContractsVersion10400CultureneutralPublicKeyTokennull;

/**
 * @type object
 */
export type UserGetAssignableRolesStatus200Json2 =
  VoloAbpApplicationDtosListResultDto1VoloAbpIdentityIdentityRoleDtoVoloAbpIdentityApplicationContractsVersion10400CultureneutralPublicKeyTokennull;

export type UserGetAssignableRolesStatus200 =
  | UserGetAssignableRolesStatus200Plain
  | UserGetAssignableRolesStatus200Json
  | UserGetAssignableRolesStatus200Json2;

/**
 * @type object
 */
export type UserGetAssignableRolesStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type UserGetAssignableRolesStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type UserGetAssignableRolesStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type UserGetAssignableRolesStatus400 =
  | UserGetAssignableRolesStatus400Plain
  | UserGetAssignableRolesStatus400Json
  | UserGetAssignableRolesStatus400Json2;

/**
 * @type object
 */
export type UserGetAssignableRolesStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type UserGetAssignableRolesStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type UserGetAssignableRolesStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type UserGetAssignableRolesStatus401 =
  | UserGetAssignableRolesStatus401Plain
  | UserGetAssignableRolesStatus401Json
  | UserGetAssignableRolesStatus401Json2;

/**
 * @type object
 */
export type UserGetAssignableRolesStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type UserGetAssignableRolesStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type UserGetAssignableRolesStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type UserGetAssignableRolesStatus403 =
  | UserGetAssignableRolesStatus403Plain
  | UserGetAssignableRolesStatus403Json
  | UserGetAssignableRolesStatus403Json2;

/**
 * @type object
 */
export type UserGetAssignableRolesStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type UserGetAssignableRolesStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type UserGetAssignableRolesStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type UserGetAssignableRolesStatus404 =
  | UserGetAssignableRolesStatus404Plain
  | UserGetAssignableRolesStatus404Json
  | UserGetAssignableRolesStatus404Json2;

/**
 * @type object
 */
export type UserGetAssignableRolesStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type UserGetAssignableRolesStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type UserGetAssignableRolesStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type UserGetAssignableRolesStatus500 =
  | UserGetAssignableRolesStatus500Plain
  | UserGetAssignableRolesStatus500Json
  | UserGetAssignableRolesStatus500Json2;

/**
 * @type object
 */
export type UserGetAssignableRolesStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type UserGetAssignableRolesStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type UserGetAssignableRolesStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type UserGetAssignableRolesStatus501 =
  | UserGetAssignableRolesStatus501Plain
  | UserGetAssignableRolesStatus501Json
  | UserGetAssignableRolesStatus501Json2;

/**
 * @type object
 */
export type UserGetAssignableRolesRequestConfig = {
  data?: never;
  pathParams?: never;
  queryParams?: never;
  headerParams?: never;
  /**
   * @type string
   */
  url: "/api/identity/users/assignable-roles";
};

/**
 * @type object
 */
export type UserGetAssignableRolesResponses = {
  "200": UserGetAssignableRolesStatus200;
  "400": UserGetAssignableRolesStatus400;
  "401": UserGetAssignableRolesStatus401;
  "403": UserGetAssignableRolesStatus403;
  "404": UserGetAssignableRolesStatus404;
  "500": UserGetAssignableRolesStatus500;
  "501": UserGetAssignableRolesStatus501;
};

/**
 * @description Union of all possible responses
 */
export type UserGetAssignableRolesResponse =
  | UserGetAssignableRolesStatus200
  | UserGetAssignableRolesStatus400
  | UserGetAssignableRolesStatus401
  | UserGetAssignableRolesStatus403
  | UserGetAssignableRolesStatus404
  | UserGetAssignableRolesStatus500
  | UserGetAssignableRolesStatus501;
