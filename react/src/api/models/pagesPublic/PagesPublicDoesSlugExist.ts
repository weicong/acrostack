/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse.ts";

/**
 * @type string | undefined
 */
export type PagesPublicDoesSlugExistQuerySlug = string | undefined;

/**
 * @type boolean
 */
export type PagesPublicDoesSlugExistStatus200Plain = boolean;

/**
 * @type boolean
 */
export type PagesPublicDoesSlugExistStatus200Json = boolean;

/**
 * @type boolean
 */
export type PagesPublicDoesSlugExistStatus200Json2 = boolean;

export type PagesPublicDoesSlugExistStatus200 =
  | PagesPublicDoesSlugExistStatus200Plain
  | PagesPublicDoesSlugExistStatus200Json
  | PagesPublicDoesSlugExistStatus200Json2;

/**
 * @type object
 */
export type PagesPublicDoesSlugExistStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PagesPublicDoesSlugExistStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PagesPublicDoesSlugExistStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type PagesPublicDoesSlugExistStatus400 =
  | PagesPublicDoesSlugExistStatus400Plain
  | PagesPublicDoesSlugExistStatus400Json
  | PagesPublicDoesSlugExistStatus400Json2;

/**
 * @type object
 */
export type PagesPublicDoesSlugExistStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PagesPublicDoesSlugExistStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PagesPublicDoesSlugExistStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type PagesPublicDoesSlugExistStatus401 =
  | PagesPublicDoesSlugExistStatus401Plain
  | PagesPublicDoesSlugExistStatus401Json
  | PagesPublicDoesSlugExistStatus401Json2;

/**
 * @type object
 */
export type PagesPublicDoesSlugExistStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PagesPublicDoesSlugExistStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PagesPublicDoesSlugExistStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type PagesPublicDoesSlugExistStatus403 =
  | PagesPublicDoesSlugExistStatus403Plain
  | PagesPublicDoesSlugExistStatus403Json
  | PagesPublicDoesSlugExistStatus403Json2;

/**
 * @type object
 */
export type PagesPublicDoesSlugExistStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PagesPublicDoesSlugExistStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PagesPublicDoesSlugExistStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type PagesPublicDoesSlugExistStatus404 =
  | PagesPublicDoesSlugExistStatus404Plain
  | PagesPublicDoesSlugExistStatus404Json
  | PagesPublicDoesSlugExistStatus404Json2;

/**
 * @type object
 */
export type PagesPublicDoesSlugExistStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PagesPublicDoesSlugExistStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PagesPublicDoesSlugExistStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type PagesPublicDoesSlugExistStatus500 =
  | PagesPublicDoesSlugExistStatus500Plain
  | PagesPublicDoesSlugExistStatus500Json
  | PagesPublicDoesSlugExistStatus500Json2;

/**
 * @type object
 */
export type PagesPublicDoesSlugExistStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PagesPublicDoesSlugExistStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PagesPublicDoesSlugExistStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type PagesPublicDoesSlugExistStatus501 =
  | PagesPublicDoesSlugExistStatus501Plain
  | PagesPublicDoesSlugExistStatus501Json
  | PagesPublicDoesSlugExistStatus501Json2;

/**
 * @type object
 */
export type PagesPublicDoesSlugExistRequestConfig = {
  data?: never;
  pathParams?: never;
  /**
   * @type object | undefined
   */
  queryParams?: {
    slug?: PagesPublicDoesSlugExistQuerySlug;
  };
  headerParams?: never;
  /**
   * @type string
   */
  url: "/api/cms-kit-public/pages/exist";
};

/**
 * @type object
 */
export type PagesPublicDoesSlugExistResponses = {
  "200": PagesPublicDoesSlugExistStatus200;
  "400": PagesPublicDoesSlugExistStatus400;
  "401": PagesPublicDoesSlugExistStatus401;
  "403": PagesPublicDoesSlugExistStatus403;
  "404": PagesPublicDoesSlugExistStatus404;
  "500": PagesPublicDoesSlugExistStatus500;
  "501": PagesPublicDoesSlugExistStatus501;
};

/**
 * @description Union of all possible responses
 */
export type PagesPublicDoesSlugExistResponse =
  | PagesPublicDoesSlugExistStatus200
  | PagesPublicDoesSlugExistStatus400
  | PagesPublicDoesSlugExistStatus401
  | PagesPublicDoesSlugExistStatus403
  | PagesPublicDoesSlugExistStatus404
  | PagesPublicDoesSlugExistStatus500
  | PagesPublicDoesSlugExistStatus501;
