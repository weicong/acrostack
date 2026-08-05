/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse.ts";

/**
 * @description
 * Format: `uuid`
 * @type string
 */
export type PageAdminSetAsHomePagePathId = string;

/**
 * @type any
 */
export type PageAdminSetAsHomePageStatus200 = any;

/**
 * @type any
 */
export type PageAdminSetAsHomePageStatus204 = any;

/**
 * @type object
 */
export type PageAdminSetAsHomePageStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PageAdminSetAsHomePageStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PageAdminSetAsHomePageStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type PageAdminSetAsHomePageStatus400 =
  | PageAdminSetAsHomePageStatus400Plain
  | PageAdminSetAsHomePageStatus400Json
  | PageAdminSetAsHomePageStatus400Json2;

/**
 * @type object
 */
export type PageAdminSetAsHomePageStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PageAdminSetAsHomePageStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PageAdminSetAsHomePageStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type PageAdminSetAsHomePageStatus401 =
  | PageAdminSetAsHomePageStatus401Plain
  | PageAdminSetAsHomePageStatus401Json
  | PageAdminSetAsHomePageStatus401Json2;

/**
 * @type object
 */
export type PageAdminSetAsHomePageStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PageAdminSetAsHomePageStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PageAdminSetAsHomePageStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type PageAdminSetAsHomePageStatus403 =
  | PageAdminSetAsHomePageStatus403Plain
  | PageAdminSetAsHomePageStatus403Json
  | PageAdminSetAsHomePageStatus403Json2;

/**
 * @type object
 */
export type PageAdminSetAsHomePageStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PageAdminSetAsHomePageStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PageAdminSetAsHomePageStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type PageAdminSetAsHomePageStatus404 =
  | PageAdminSetAsHomePageStatus404Plain
  | PageAdminSetAsHomePageStatus404Json
  | PageAdminSetAsHomePageStatus404Json2;

/**
 * @type object
 */
export type PageAdminSetAsHomePageStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PageAdminSetAsHomePageStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PageAdminSetAsHomePageStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type PageAdminSetAsHomePageStatus500 =
  | PageAdminSetAsHomePageStatus500Plain
  | PageAdminSetAsHomePageStatus500Json
  | PageAdminSetAsHomePageStatus500Json2;

/**
 * @type object
 */
export type PageAdminSetAsHomePageStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PageAdminSetAsHomePageStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PageAdminSetAsHomePageStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type PageAdminSetAsHomePageStatus501 =
  | PageAdminSetAsHomePageStatus501Plain
  | PageAdminSetAsHomePageStatus501Json
  | PageAdminSetAsHomePageStatus501Json2;

/**
 * @type object
 */
export type PageAdminSetAsHomePageRequestConfig = {
  data?: never;
  /**
   * @type object
   */
  pathParams: {
    id: PageAdminSetAsHomePagePathId;
  };
  queryParams?: never;
  headerParams?: never;
  /**
   * @type string
   */
  url: `/api/cms-kit-admin/pages/setashomepage/${string}`;
};

/**
 * @type object
 */
export type PageAdminSetAsHomePageResponses = {
  "200": PageAdminSetAsHomePageStatus200;
  "204": PageAdminSetAsHomePageStatus204;
  "400": PageAdminSetAsHomePageStatus400;
  "401": PageAdminSetAsHomePageStatus401;
  "403": PageAdminSetAsHomePageStatus403;
  "404": PageAdminSetAsHomePageStatus404;
  "500": PageAdminSetAsHomePageStatus500;
  "501": PageAdminSetAsHomePageStatus501;
};

/**
 * @description Union of all possible responses
 */
export type PageAdminSetAsHomePageResponse =
  | PageAdminSetAsHomePageStatus200
  | PageAdminSetAsHomePageStatus204
  | PageAdminSetAsHomePageStatus400
  | PageAdminSetAsHomePageStatus401
  | PageAdminSetAsHomePageStatus403
  | PageAdminSetAsHomePageStatus404
  | PageAdminSetAsHomePageStatus500
  | PageAdminSetAsHomePageStatus501;
