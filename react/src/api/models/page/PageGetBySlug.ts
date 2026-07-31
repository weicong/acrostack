/* oxlint-disable */

import type { AcroStackServicesDtosCmsPageDto } from "../acroStack/services/dtos/cms/PageDto.ts";
import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse.ts";

/**
 * @type string | undefined
 */
export type PageGetBySlugQuerySlug = string | undefined;

/**
 * @type object
 */
export type PageGetBySlugStatus200Plain = AcroStackServicesDtosCmsPageDto;

/**
 * @type object
 */
export type PageGetBySlugStatus200Json = AcroStackServicesDtosCmsPageDto;

/**
 * @type object
 */
export type PageGetBySlugStatus200Json2 = AcroStackServicesDtosCmsPageDto;

export type PageGetBySlugStatus200 =
  | PageGetBySlugStatus200Plain
  | PageGetBySlugStatus200Json
  | PageGetBySlugStatus200Json2;

/**
 * @type object
 */
export type PageGetBySlugStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PageGetBySlugStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PageGetBySlugStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type PageGetBySlugStatus400 =
  | PageGetBySlugStatus400Plain
  | PageGetBySlugStatus400Json
  | PageGetBySlugStatus400Json2;

/**
 * @type object
 */
export type PageGetBySlugStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PageGetBySlugStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PageGetBySlugStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type PageGetBySlugStatus401 =
  | PageGetBySlugStatus401Plain
  | PageGetBySlugStatus401Json
  | PageGetBySlugStatus401Json2;

/**
 * @type object
 */
export type PageGetBySlugStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PageGetBySlugStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PageGetBySlugStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type PageGetBySlugStatus403 =
  | PageGetBySlugStatus403Plain
  | PageGetBySlugStatus403Json
  | PageGetBySlugStatus403Json2;

/**
 * @type object
 */
export type PageGetBySlugStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PageGetBySlugStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PageGetBySlugStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type PageGetBySlugStatus404 =
  | PageGetBySlugStatus404Plain
  | PageGetBySlugStatus404Json
  | PageGetBySlugStatus404Json2;

/**
 * @type object
 */
export type PageGetBySlugStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PageGetBySlugStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PageGetBySlugStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type PageGetBySlugStatus500 =
  | PageGetBySlugStatus500Plain
  | PageGetBySlugStatus500Json
  | PageGetBySlugStatus500Json2;

/**
 * @type object
 */
export type PageGetBySlugStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PageGetBySlugStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PageGetBySlugStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type PageGetBySlugStatus501 =
  | PageGetBySlugStatus501Plain
  | PageGetBySlugStatus501Json
  | PageGetBySlugStatus501Json2;

/**
 * @type object
 */
export type PageGetBySlugRequestConfig = {
  data?: never;
  pathParams?: never;
  /**
   * @type object | undefined
   */
  queryParams?: {
    slug?: PageGetBySlugQuerySlug;
  };
  headerParams?: never;
  /**
   * @type string
   */
  url: "/api/app/page/by-slug";
};

/**
 * @type object
 */
export type PageGetBySlugResponses = {
  "200": PageGetBySlugStatus200;
  "400": PageGetBySlugStatus400;
  "401": PageGetBySlugStatus401;
  "403": PageGetBySlugStatus403;
  "404": PageGetBySlugStatus404;
  "500": PageGetBySlugStatus500;
  "501": PageGetBySlugStatus501;
};

/**
 * @description Union of all possible responses
 */
export type PageGetBySlugResponse =
  | PageGetBySlugStatus200
  | PageGetBySlugStatus400
  | PageGetBySlugStatus401
  | PageGetBySlugStatus403
  | PageGetBySlugStatus404
  | PageGetBySlugStatus500
  | PageGetBySlugStatus501;
