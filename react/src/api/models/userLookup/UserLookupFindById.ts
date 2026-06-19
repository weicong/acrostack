/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse.ts";
import type { VoloAbpUsersUserData } from "../volo/abp/users/UserData.ts";

/**
 * @description
 * Format: `uuid`
 * @type string
 */
export type UserLookupFindByIdPathId = string;

/**
 * @type object
 */
export type UserLookupFindByIdStatus200Plain = VoloAbpUsersUserData;

/**
 * @type object
 */
export type UserLookupFindByIdStatus200Json = VoloAbpUsersUserData;

/**
 * @type object
 */
export type UserLookupFindByIdStatus200Json2 = VoloAbpUsersUserData;

export type UserLookupFindByIdStatus200 =
  | UserLookupFindByIdStatus200Plain
  | UserLookupFindByIdStatus200Json
  | UserLookupFindByIdStatus200Json2;

/**
 * @type object
 */
export type UserLookupFindByIdStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type UserLookupFindByIdStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type UserLookupFindByIdStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type UserLookupFindByIdStatus400 =
  | UserLookupFindByIdStatus400Plain
  | UserLookupFindByIdStatus400Json
  | UserLookupFindByIdStatus400Json2;

/**
 * @type object
 */
export type UserLookupFindByIdStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type UserLookupFindByIdStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type UserLookupFindByIdStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type UserLookupFindByIdStatus401 =
  | UserLookupFindByIdStatus401Plain
  | UserLookupFindByIdStatus401Json
  | UserLookupFindByIdStatus401Json2;

/**
 * @type object
 */
export type UserLookupFindByIdStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type UserLookupFindByIdStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type UserLookupFindByIdStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type UserLookupFindByIdStatus403 =
  | UserLookupFindByIdStatus403Plain
  | UserLookupFindByIdStatus403Json
  | UserLookupFindByIdStatus403Json2;

/**
 * @type object
 */
export type UserLookupFindByIdStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type UserLookupFindByIdStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type UserLookupFindByIdStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type UserLookupFindByIdStatus404 =
  | UserLookupFindByIdStatus404Plain
  | UserLookupFindByIdStatus404Json
  | UserLookupFindByIdStatus404Json2;

/**
 * @type object
 */
export type UserLookupFindByIdStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type UserLookupFindByIdStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type UserLookupFindByIdStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type UserLookupFindByIdStatus500 =
  | UserLookupFindByIdStatus500Plain
  | UserLookupFindByIdStatus500Json
  | UserLookupFindByIdStatus500Json2;

/**
 * @type object
 */
export type UserLookupFindByIdStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type UserLookupFindByIdStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type UserLookupFindByIdStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type UserLookupFindByIdStatus501 =
  | UserLookupFindByIdStatus501Plain
  | UserLookupFindByIdStatus501Json
  | UserLookupFindByIdStatus501Json2;

/**
 * @type object
 */
export type UserLookupFindByIdRequestConfig = {
  data?: never;
  /**
   * @type object
   */
  pathParams: {
    id: UserLookupFindByIdPathId;
  };
  queryParams?: never;
  headerParams?: never;
  /**
   * @type string
   */
  url: `/api/identity/users/lookup/${string}`;
};

/**
 * @type object
 */
export type UserLookupFindByIdResponses = {
  "200": UserLookupFindByIdStatus200;
  "400": UserLookupFindByIdStatus400;
  "401": UserLookupFindByIdStatus401;
  "403": UserLookupFindByIdStatus403;
  "404": UserLookupFindByIdStatus404;
  "500": UserLookupFindByIdStatus500;
  "501": UserLookupFindByIdStatus501;
};

/**
 * @description Union of all possible responses
 */
export type UserLookupFindByIdResponse =
  | UserLookupFindByIdStatus200
  | UserLookupFindByIdStatus400
  | UserLookupFindByIdStatus401
  | UserLookupFindByIdStatus403
  | UserLookupFindByIdStatus404
  | UserLookupFindByIdStatus500
  | UserLookupFindByIdStatus501;
