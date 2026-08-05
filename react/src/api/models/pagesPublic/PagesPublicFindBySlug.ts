/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse.ts";
import type { VoloCmsKitContentsPageDto } from "../volo/cmsKit/contents/PageDto.ts";

/**
 * @type string | undefined
 */
export type PagesPublicFindBySlugQuerySlug = string | undefined;

/**
 * @type object
 */
export type PagesPublicFindBySlugStatus200Plain = VoloCmsKitContentsPageDto;

/**
 * @type object
 */
export type PagesPublicFindBySlugStatus200Json = VoloCmsKitContentsPageDto;

/**
 * @type object
 */
export type PagesPublicFindBySlugStatus200Json2 = VoloCmsKitContentsPageDto;

export type PagesPublicFindBySlugStatus200 =
  | PagesPublicFindBySlugStatus200Plain
  | PagesPublicFindBySlugStatus200Json
  | PagesPublicFindBySlugStatus200Json2;

/**
 * @type object
 */
export type PagesPublicFindBySlugStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PagesPublicFindBySlugStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PagesPublicFindBySlugStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type PagesPublicFindBySlugStatus400 =
  | PagesPublicFindBySlugStatus400Plain
  | PagesPublicFindBySlugStatus400Json
  | PagesPublicFindBySlugStatus400Json2;

/**
 * @type object
 */
export type PagesPublicFindBySlugStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PagesPublicFindBySlugStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PagesPublicFindBySlugStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type PagesPublicFindBySlugStatus401 =
  | PagesPublicFindBySlugStatus401Plain
  | PagesPublicFindBySlugStatus401Json
  | PagesPublicFindBySlugStatus401Json2;

/**
 * @type object
 */
export type PagesPublicFindBySlugStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PagesPublicFindBySlugStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PagesPublicFindBySlugStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type PagesPublicFindBySlugStatus403 =
  | PagesPublicFindBySlugStatus403Plain
  | PagesPublicFindBySlugStatus403Json
  | PagesPublicFindBySlugStatus403Json2;

/**
 * @type object
 */
export type PagesPublicFindBySlugStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PagesPublicFindBySlugStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PagesPublicFindBySlugStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type PagesPublicFindBySlugStatus404 =
  | PagesPublicFindBySlugStatus404Plain
  | PagesPublicFindBySlugStatus404Json
  | PagesPublicFindBySlugStatus404Json2;

/**
 * @type object
 */
export type PagesPublicFindBySlugStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PagesPublicFindBySlugStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PagesPublicFindBySlugStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type PagesPublicFindBySlugStatus500 =
  | PagesPublicFindBySlugStatus500Plain
  | PagesPublicFindBySlugStatus500Json
  | PagesPublicFindBySlugStatus500Json2;

/**
 * @type object
 */
export type PagesPublicFindBySlugStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PagesPublicFindBySlugStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PagesPublicFindBySlugStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type PagesPublicFindBySlugStatus501 =
  | PagesPublicFindBySlugStatus501Plain
  | PagesPublicFindBySlugStatus501Json
  | PagesPublicFindBySlugStatus501Json2;

/**
 * @type object
 */
export type PagesPublicFindBySlugRequestConfig = {
  data?: never;
  pathParams?: never;
  /**
   * @type object | undefined
   */
  queryParams?: {
    slug?: PagesPublicFindBySlugQuerySlug;
  };
  headerParams?: never;
  /**
   * @type string
   */
  url: "/api/cms-kit-public/pages/by-slug";
};

/**
 * @type object
 */
export type PagesPublicFindBySlugResponses = {
  "200": PagesPublicFindBySlugStatus200;
  "400": PagesPublicFindBySlugStatus400;
  "401": PagesPublicFindBySlugStatus401;
  "403": PagesPublicFindBySlugStatus403;
  "404": PagesPublicFindBySlugStatus404;
  "500": PagesPublicFindBySlugStatus500;
  "501": PagesPublicFindBySlugStatus501;
};

/**
 * @description Union of all possible responses
 */
export type PagesPublicFindBySlugResponse =
  | PagesPublicFindBySlugStatus200
  | PagesPublicFindBySlugStatus400
  | PagesPublicFindBySlugStatus401
  | PagesPublicFindBySlugStatus403
  | PagesPublicFindBySlugStatus404
  | PagesPublicFindBySlugStatus500
  | PagesPublicFindBySlugStatus501;
