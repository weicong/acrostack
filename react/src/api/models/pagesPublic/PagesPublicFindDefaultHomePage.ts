/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse.ts";
import type { VoloCmsKitContentsPageDto } from "../volo/cmsKit/contents/PageDto.ts";

/**
 * @type object
 */
export type PagesPublicFindDefaultHomePageStatus200Plain = VoloCmsKitContentsPageDto;

/**
 * @type object
 */
export type PagesPublicFindDefaultHomePageStatus200Json = VoloCmsKitContentsPageDto;

/**
 * @type object
 */
export type PagesPublicFindDefaultHomePageStatus200Json2 = VoloCmsKitContentsPageDto;

export type PagesPublicFindDefaultHomePageStatus200 =
  | PagesPublicFindDefaultHomePageStatus200Plain
  | PagesPublicFindDefaultHomePageStatus200Json
  | PagesPublicFindDefaultHomePageStatus200Json2;

/**
 * @type object
 */
export type PagesPublicFindDefaultHomePageStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PagesPublicFindDefaultHomePageStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PagesPublicFindDefaultHomePageStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type PagesPublicFindDefaultHomePageStatus400 =
  | PagesPublicFindDefaultHomePageStatus400Plain
  | PagesPublicFindDefaultHomePageStatus400Json
  | PagesPublicFindDefaultHomePageStatus400Json2;

/**
 * @type object
 */
export type PagesPublicFindDefaultHomePageStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PagesPublicFindDefaultHomePageStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PagesPublicFindDefaultHomePageStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type PagesPublicFindDefaultHomePageStatus401 =
  | PagesPublicFindDefaultHomePageStatus401Plain
  | PagesPublicFindDefaultHomePageStatus401Json
  | PagesPublicFindDefaultHomePageStatus401Json2;

/**
 * @type object
 */
export type PagesPublicFindDefaultHomePageStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PagesPublicFindDefaultHomePageStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PagesPublicFindDefaultHomePageStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type PagesPublicFindDefaultHomePageStatus403 =
  | PagesPublicFindDefaultHomePageStatus403Plain
  | PagesPublicFindDefaultHomePageStatus403Json
  | PagesPublicFindDefaultHomePageStatus403Json2;

/**
 * @type object
 */
export type PagesPublicFindDefaultHomePageStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PagesPublicFindDefaultHomePageStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PagesPublicFindDefaultHomePageStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type PagesPublicFindDefaultHomePageStatus404 =
  | PagesPublicFindDefaultHomePageStatus404Plain
  | PagesPublicFindDefaultHomePageStatus404Json
  | PagesPublicFindDefaultHomePageStatus404Json2;

/**
 * @type object
 */
export type PagesPublicFindDefaultHomePageStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PagesPublicFindDefaultHomePageStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PagesPublicFindDefaultHomePageStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type PagesPublicFindDefaultHomePageStatus500 =
  | PagesPublicFindDefaultHomePageStatus500Plain
  | PagesPublicFindDefaultHomePageStatus500Json
  | PagesPublicFindDefaultHomePageStatus500Json2;

/**
 * @type object
 */
export type PagesPublicFindDefaultHomePageStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PagesPublicFindDefaultHomePageStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PagesPublicFindDefaultHomePageStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type PagesPublicFindDefaultHomePageStatus501 =
  | PagesPublicFindDefaultHomePageStatus501Plain
  | PagesPublicFindDefaultHomePageStatus501Json
  | PagesPublicFindDefaultHomePageStatus501Json2;

/**
 * @type object
 */
export type PagesPublicFindDefaultHomePageRequestConfig = {
  data?: never;
  pathParams?: never;
  queryParams?: never;
  headerParams?: never;
  /**
   * @type string
   */
  url: "/api/cms-kit-public/pages/home";
};

/**
 * @type object
 */
export type PagesPublicFindDefaultHomePageResponses = {
  "200": PagesPublicFindDefaultHomePageStatus200;
  "400": PagesPublicFindDefaultHomePageStatus400;
  "401": PagesPublicFindDefaultHomePageStatus401;
  "403": PagesPublicFindDefaultHomePageStatus403;
  "404": PagesPublicFindDefaultHomePageStatus404;
  "500": PagesPublicFindDefaultHomePageStatus500;
  "501": PagesPublicFindDefaultHomePageStatus501;
};

/**
 * @description Union of all possible responses
 */
export type PagesPublicFindDefaultHomePageResponse =
  | PagesPublicFindDefaultHomePageStatus200
  | PagesPublicFindDefaultHomePageStatus400
  | PagesPublicFindDefaultHomePageStatus401
  | PagesPublicFindDefaultHomePageStatus403
  | PagesPublicFindDefaultHomePageStatus404
  | PagesPublicFindDefaultHomePageStatus500
  | PagesPublicFindDefaultHomePageStatus501;
