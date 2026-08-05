/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse.ts";
import type { VoloCmsKitAdminTagsEntityTagCreateDto } from "../volo/cmsKit/admin/tags/EntityTagCreateDto.ts";

/**
 * @type any
 */
export type EntityTagAdminAddTagToEntityStatus200 = any;

/**
 * @type any
 */
export type EntityTagAdminAddTagToEntityStatus204 = any;

/**
 * @type object
 */
export type EntityTagAdminAddTagToEntityStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type EntityTagAdminAddTagToEntityStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type EntityTagAdminAddTagToEntityStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type EntityTagAdminAddTagToEntityStatus400 =
  | EntityTagAdminAddTagToEntityStatus400Plain
  | EntityTagAdminAddTagToEntityStatus400Json
  | EntityTagAdminAddTagToEntityStatus400Json2;

/**
 * @type object
 */
export type EntityTagAdminAddTagToEntityStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type EntityTagAdminAddTagToEntityStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type EntityTagAdminAddTagToEntityStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type EntityTagAdminAddTagToEntityStatus401 =
  | EntityTagAdminAddTagToEntityStatus401Plain
  | EntityTagAdminAddTagToEntityStatus401Json
  | EntityTagAdminAddTagToEntityStatus401Json2;

/**
 * @type object
 */
export type EntityTagAdminAddTagToEntityStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type EntityTagAdminAddTagToEntityStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type EntityTagAdminAddTagToEntityStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type EntityTagAdminAddTagToEntityStatus403 =
  | EntityTagAdminAddTagToEntityStatus403Plain
  | EntityTagAdminAddTagToEntityStatus403Json
  | EntityTagAdminAddTagToEntityStatus403Json2;

/**
 * @type object
 */
export type EntityTagAdminAddTagToEntityStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type EntityTagAdminAddTagToEntityStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type EntityTagAdminAddTagToEntityStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type EntityTagAdminAddTagToEntityStatus404 =
  | EntityTagAdminAddTagToEntityStatus404Plain
  | EntityTagAdminAddTagToEntityStatus404Json
  | EntityTagAdminAddTagToEntityStatus404Json2;

/**
 * @type object
 */
export type EntityTagAdminAddTagToEntityStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type EntityTagAdminAddTagToEntityStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type EntityTagAdminAddTagToEntityStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type EntityTagAdminAddTagToEntityStatus500 =
  | EntityTagAdminAddTagToEntityStatus500Plain
  | EntityTagAdminAddTagToEntityStatus500Json
  | EntityTagAdminAddTagToEntityStatus500Json2;

/**
 * @type object
 */
export type EntityTagAdminAddTagToEntityStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type EntityTagAdminAddTagToEntityStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type EntityTagAdminAddTagToEntityStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type EntityTagAdminAddTagToEntityStatus501 =
  | EntityTagAdminAddTagToEntityStatus501Plain
  | EntityTagAdminAddTagToEntityStatus501Json
  | EntityTagAdminAddTagToEntityStatus501Json2;

/**
 * @type object | undefined
 */
export type EntityTagAdminAddTagToEntityJsonData =
  | VoloCmsKitAdminTagsEntityTagCreateDto
  | undefined;

/**
 * @type object | undefined
 */
export type EntityTagAdminAddTagToEntityJson2Data =
  | VoloCmsKitAdminTagsEntityTagCreateDto
  | undefined;

/**
 * @type object | undefined
 */
export type EntityTagAdminAddTagToEntityJson3Data =
  | VoloCmsKitAdminTagsEntityTagCreateDto
  | undefined;

export type EntityTagAdminAddTagToEntityData =
  | EntityTagAdminAddTagToEntityJsonData
  | EntityTagAdminAddTagToEntityJson2Data
  | EntityTagAdminAddTagToEntityJson3Data;

/**
 * @type object
 */
export type EntityTagAdminAddTagToEntityRequestConfig = {
  data?: EntityTagAdminAddTagToEntityData;
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
export type EntityTagAdminAddTagToEntityResponses = {
  "200": EntityTagAdminAddTagToEntityStatus200;
  "204": EntityTagAdminAddTagToEntityStatus204;
  "400": EntityTagAdminAddTagToEntityStatus400;
  "401": EntityTagAdminAddTagToEntityStatus401;
  "403": EntityTagAdminAddTagToEntityStatus403;
  "404": EntityTagAdminAddTagToEntityStatus404;
  "500": EntityTagAdminAddTagToEntityStatus500;
  "501": EntityTagAdminAddTagToEntityStatus501;
};

/**
 * @description Union of all possible responses
 */
export type EntityTagAdminAddTagToEntityResponse =
  | EntityTagAdminAddTagToEntityStatus200
  | EntityTagAdminAddTagToEntityStatus204
  | EntityTagAdminAddTagToEntityStatus400
  | EntityTagAdminAddTagToEntityStatus401
  | EntityTagAdminAddTagToEntityStatus403
  | EntityTagAdminAddTagToEntityStatus404
  | EntityTagAdminAddTagToEntityStatus500
  | EntityTagAdminAddTagToEntityStatus501;
