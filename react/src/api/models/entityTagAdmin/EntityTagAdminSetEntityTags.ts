/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse.ts";
import type { VoloCmsKitAdminTagsEntityTagSetDto } from "../volo/cmsKit/admin/tags/EntityTagSetDto.ts";

/**
 * @type any
 */
export type EntityTagAdminSetEntityTagsStatus200 = any;

/**
 * @type any
 */
export type EntityTagAdminSetEntityTagsStatus204 = any;

/**
 * @type object
 */
export type EntityTagAdminSetEntityTagsStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type EntityTagAdminSetEntityTagsStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type EntityTagAdminSetEntityTagsStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type EntityTagAdminSetEntityTagsStatus400 =
  | EntityTagAdminSetEntityTagsStatus400Plain
  | EntityTagAdminSetEntityTagsStatus400Json
  | EntityTagAdminSetEntityTagsStatus400Json2;

/**
 * @type object
 */
export type EntityTagAdminSetEntityTagsStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type EntityTagAdminSetEntityTagsStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type EntityTagAdminSetEntityTagsStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type EntityTagAdminSetEntityTagsStatus401 =
  | EntityTagAdminSetEntityTagsStatus401Plain
  | EntityTagAdminSetEntityTagsStatus401Json
  | EntityTagAdminSetEntityTagsStatus401Json2;

/**
 * @type object
 */
export type EntityTagAdminSetEntityTagsStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type EntityTagAdminSetEntityTagsStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type EntityTagAdminSetEntityTagsStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type EntityTagAdminSetEntityTagsStatus403 =
  | EntityTagAdminSetEntityTagsStatus403Plain
  | EntityTagAdminSetEntityTagsStatus403Json
  | EntityTagAdminSetEntityTagsStatus403Json2;

/**
 * @type object
 */
export type EntityTagAdminSetEntityTagsStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type EntityTagAdminSetEntityTagsStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type EntityTagAdminSetEntityTagsStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type EntityTagAdminSetEntityTagsStatus404 =
  | EntityTagAdminSetEntityTagsStatus404Plain
  | EntityTagAdminSetEntityTagsStatus404Json
  | EntityTagAdminSetEntityTagsStatus404Json2;

/**
 * @type object
 */
export type EntityTagAdminSetEntityTagsStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type EntityTagAdminSetEntityTagsStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type EntityTagAdminSetEntityTagsStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type EntityTagAdminSetEntityTagsStatus500 =
  | EntityTagAdminSetEntityTagsStatus500Plain
  | EntityTagAdminSetEntityTagsStatus500Json
  | EntityTagAdminSetEntityTagsStatus500Json2;

/**
 * @type object
 */
export type EntityTagAdminSetEntityTagsStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type EntityTagAdminSetEntityTagsStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type EntityTagAdminSetEntityTagsStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type EntityTagAdminSetEntityTagsStatus501 =
  | EntityTagAdminSetEntityTagsStatus501Plain
  | EntityTagAdminSetEntityTagsStatus501Json
  | EntityTagAdminSetEntityTagsStatus501Json2;

/**
 * @type object | undefined
 */
export type EntityTagAdminSetEntityTagsJsonData = VoloCmsKitAdminTagsEntityTagSetDto | undefined;

/**
 * @type object | undefined
 */
export type EntityTagAdminSetEntityTagsJson2Data = VoloCmsKitAdminTagsEntityTagSetDto | undefined;

/**
 * @type object | undefined
 */
export type EntityTagAdminSetEntityTagsJson3Data = VoloCmsKitAdminTagsEntityTagSetDto | undefined;

export type EntityTagAdminSetEntityTagsData =
  | EntityTagAdminSetEntityTagsJsonData
  | EntityTagAdminSetEntityTagsJson2Data
  | EntityTagAdminSetEntityTagsJson3Data;

/**
 * @type object
 */
export type EntityTagAdminSetEntityTagsRequestConfig = {
  data?: EntityTagAdminSetEntityTagsData;
  pathParams?: never;
  queryParams?: never;
  headerParams?: never;
  /**
   * @type string
   */
  url: "/api/cms-kit-admin/entity-tags";
};

/**
 * @type object
 */
export type EntityTagAdminSetEntityTagsResponses = {
  "200": EntityTagAdminSetEntityTagsStatus200;
  "204": EntityTagAdminSetEntityTagsStatus204;
  "400": EntityTagAdminSetEntityTagsStatus400;
  "401": EntityTagAdminSetEntityTagsStatus401;
  "403": EntityTagAdminSetEntityTagsStatus403;
  "404": EntityTagAdminSetEntityTagsStatus404;
  "500": EntityTagAdminSetEntityTagsStatus500;
  "501": EntityTagAdminSetEntityTagsStatus501;
};

/**
 * @description Union of all possible responses
 */
export type EntityTagAdminSetEntityTagsResponse =
  | EntityTagAdminSetEntityTagsStatus200
  | EntityTagAdminSetEntityTagsStatus204
  | EntityTagAdminSetEntityTagsStatus400
  | EntityTagAdminSetEntityTagsStatus401
  | EntityTagAdminSetEntityTagsStatus403
  | EntityTagAdminSetEntityTagsStatus404
  | EntityTagAdminSetEntityTagsStatus500
  | EntityTagAdminSetEntityTagsStatus501;
