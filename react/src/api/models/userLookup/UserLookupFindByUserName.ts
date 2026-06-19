/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse.ts";
import type { VoloAbpUsersUserData } from "../volo/abp/users/UserData.ts";

/**
 * @type string
 */
export type UserLookupFindByUserNamePathUserName = string;

/**
 * @type object
 */
export type UserLookupFindByUserNameStatus200Plain = VoloAbpUsersUserData;

/**
 * @type object
 */
export type UserLookupFindByUserNameStatus200Json = VoloAbpUsersUserData;

/**
 * @type object
 */
export type UserLookupFindByUserNameStatus200Json2 = VoloAbpUsersUserData;

export type UserLookupFindByUserNameStatus200 =
  | UserLookupFindByUserNameStatus200Plain
  | UserLookupFindByUserNameStatus200Json
  | UserLookupFindByUserNameStatus200Json2;

/**
 * @type object
 */
export type UserLookupFindByUserNameStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type UserLookupFindByUserNameStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type UserLookupFindByUserNameStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type UserLookupFindByUserNameStatus400 =
  | UserLookupFindByUserNameStatus400Plain
  | UserLookupFindByUserNameStatus400Json
  | UserLookupFindByUserNameStatus400Json2;

/**
 * @type object
 */
export type UserLookupFindByUserNameStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type UserLookupFindByUserNameStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type UserLookupFindByUserNameStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type UserLookupFindByUserNameStatus401 =
  | UserLookupFindByUserNameStatus401Plain
  | UserLookupFindByUserNameStatus401Json
  | UserLookupFindByUserNameStatus401Json2;

/**
 * @type object
 */
export type UserLookupFindByUserNameStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type UserLookupFindByUserNameStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type UserLookupFindByUserNameStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type UserLookupFindByUserNameStatus403 =
  | UserLookupFindByUserNameStatus403Plain
  | UserLookupFindByUserNameStatus403Json
  | UserLookupFindByUserNameStatus403Json2;

/**
 * @type object
 */
export type UserLookupFindByUserNameStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type UserLookupFindByUserNameStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type UserLookupFindByUserNameStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type UserLookupFindByUserNameStatus404 =
  | UserLookupFindByUserNameStatus404Plain
  | UserLookupFindByUserNameStatus404Json
  | UserLookupFindByUserNameStatus404Json2;

/**
 * @type object
 */
export type UserLookupFindByUserNameStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type UserLookupFindByUserNameStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type UserLookupFindByUserNameStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type UserLookupFindByUserNameStatus500 =
  | UserLookupFindByUserNameStatus500Plain
  | UserLookupFindByUserNameStatus500Json
  | UserLookupFindByUserNameStatus500Json2;

/**
 * @type object
 */
export type UserLookupFindByUserNameStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type UserLookupFindByUserNameStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type UserLookupFindByUserNameStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type UserLookupFindByUserNameStatus501 =
  | UserLookupFindByUserNameStatus501Plain
  | UserLookupFindByUserNameStatus501Json
  | UserLookupFindByUserNameStatus501Json2;

/**
 * @type object
 */
export type UserLookupFindByUserNameRequestConfig = {
  data?: never;
  /**
   * @type object
   */
  pathParams: {
    userName: UserLookupFindByUserNamePathUserName;
  };
  queryParams?: never;
  headerParams?: never;
  /**
   * @type string
   */
  url: `/api/identity/users/lookup/by-username/${string}`;
};

/**
 * @type object
 */
export type UserLookupFindByUserNameResponses = {
  "200": UserLookupFindByUserNameStatus200;
  "400": UserLookupFindByUserNameStatus400;
  "401": UserLookupFindByUserNameStatus401;
  "403": UserLookupFindByUserNameStatus403;
  "404": UserLookupFindByUserNameStatus404;
  "500": UserLookupFindByUserNameStatus500;
  "501": UserLookupFindByUserNameStatus501;
};

/**
 * @description Union of all possible responses
 */
export type UserLookupFindByUserNameResponse =
  | UserLookupFindByUserNameStatus200
  | UserLookupFindByUserNameStatus400
  | UserLookupFindByUserNameStatus401
  | UserLookupFindByUserNameStatus403
  | UserLookupFindByUserNameStatus404
  | UserLookupFindByUserNameStatus500
  | UserLookupFindByUserNameStatus501;
