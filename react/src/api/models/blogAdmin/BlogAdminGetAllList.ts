/* oxlint-disable */

import type { VoloAbpApplicationDtosListResultDto1VoloCmsKitAdminBlogsBlogDtoVoloCmsKitAdminApplicationContractsVersion10500CultureneutralPublicKeyTokennull } from "../volo/abp/application/dtos/listResultDto1Volo/cmsKit/admin/blogs/blogDtoVolo/cmsKit/admin/application/ContractsVersion10500CultureneutralPublicKeyTokennull.ts";
import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse.ts";

/**
 * @type object
 */
export type BlogAdminGetAllListStatus200Plain =
  VoloAbpApplicationDtosListResultDto1VoloCmsKitAdminBlogsBlogDtoVoloCmsKitAdminApplicationContractsVersion10500CultureneutralPublicKeyTokennull;

/**
 * @type object
 */
export type BlogAdminGetAllListStatus200Json =
  VoloAbpApplicationDtosListResultDto1VoloCmsKitAdminBlogsBlogDtoVoloCmsKitAdminApplicationContractsVersion10500CultureneutralPublicKeyTokennull;

/**
 * @type object
 */
export type BlogAdminGetAllListStatus200Json2 =
  VoloAbpApplicationDtosListResultDto1VoloCmsKitAdminBlogsBlogDtoVoloCmsKitAdminApplicationContractsVersion10500CultureneutralPublicKeyTokennull;

export type BlogAdminGetAllListStatus200 =
  | BlogAdminGetAllListStatus200Plain
  | BlogAdminGetAllListStatus200Json
  | BlogAdminGetAllListStatus200Json2;

/**
 * @type object
 */
export type BlogAdminGetAllListStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogAdminGetAllListStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogAdminGetAllListStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogAdminGetAllListStatus400 =
  | BlogAdminGetAllListStatus400Plain
  | BlogAdminGetAllListStatus400Json
  | BlogAdminGetAllListStatus400Json2;

/**
 * @type object
 */
export type BlogAdminGetAllListStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogAdminGetAllListStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogAdminGetAllListStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogAdminGetAllListStatus401 =
  | BlogAdminGetAllListStatus401Plain
  | BlogAdminGetAllListStatus401Json
  | BlogAdminGetAllListStatus401Json2;

/**
 * @type object
 */
export type BlogAdminGetAllListStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogAdminGetAllListStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogAdminGetAllListStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogAdminGetAllListStatus403 =
  | BlogAdminGetAllListStatus403Plain
  | BlogAdminGetAllListStatus403Json
  | BlogAdminGetAllListStatus403Json2;

/**
 * @type object
 */
export type BlogAdminGetAllListStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogAdminGetAllListStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogAdminGetAllListStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogAdminGetAllListStatus404 =
  | BlogAdminGetAllListStatus404Plain
  | BlogAdminGetAllListStatus404Json
  | BlogAdminGetAllListStatus404Json2;

/**
 * @type object
 */
export type BlogAdminGetAllListStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogAdminGetAllListStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogAdminGetAllListStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogAdminGetAllListStatus500 =
  | BlogAdminGetAllListStatus500Plain
  | BlogAdminGetAllListStatus500Json
  | BlogAdminGetAllListStatus500Json2;

/**
 * @type object
 */
export type BlogAdminGetAllListStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogAdminGetAllListStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogAdminGetAllListStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogAdminGetAllListStatus501 =
  | BlogAdminGetAllListStatus501Plain
  | BlogAdminGetAllListStatus501Json
  | BlogAdminGetAllListStatus501Json2;

/**
 * @type object
 */
export type BlogAdminGetAllListRequestConfig = {
  data?: never;
  pathParams?: never;
  queryParams?: never;
  headerParams?: never;
  /**
   * @type string
   */
  url: "/api/cms-kit-admin/blogs/all";
};

/**
 * @type object
 */
export type BlogAdminGetAllListResponses = {
  "200": BlogAdminGetAllListStatus200;
  "400": BlogAdminGetAllListStatus400;
  "401": BlogAdminGetAllListStatus401;
  "403": BlogAdminGetAllListStatus403;
  "404": BlogAdminGetAllListStatus404;
  "500": BlogAdminGetAllListStatus500;
  "501": BlogAdminGetAllListStatus501;
};

/**
 * @description Union of all possible responses
 */
export type BlogAdminGetAllListResponse =
  | BlogAdminGetAllListStatus200
  | BlogAdminGetAllListStatus400
  | BlogAdminGetAllListStatus401
  | BlogAdminGetAllListStatus403
  | BlogAdminGetAllListStatus404
  | BlogAdminGetAllListStatus500
  | BlogAdminGetAllListStatus501;
