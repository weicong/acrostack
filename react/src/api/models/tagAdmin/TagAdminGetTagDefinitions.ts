/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse.ts";
import type { VoloCmsKitAdminTagsTagDefinitionDto } from "../volo/cmsKit/admin/tags/TagDefinitionDto.ts";

/**
 * @type array
 */
export type TagAdminGetTagDefinitionsStatus200Plain = VoloCmsKitAdminTagsTagDefinitionDto[];

/**
 * @type array
 */
export type TagAdminGetTagDefinitionsStatus200Json = VoloCmsKitAdminTagsTagDefinitionDto[];

/**
 * @type array
 */
export type TagAdminGetTagDefinitionsStatus200Json2 = VoloCmsKitAdminTagsTagDefinitionDto[];

export type TagAdminGetTagDefinitionsStatus200 =
  | TagAdminGetTagDefinitionsStatus200Plain
  | TagAdminGetTagDefinitionsStatus200Json
  | TagAdminGetTagDefinitionsStatus200Json2;

/**
 * @type object
 */
export type TagAdminGetTagDefinitionsStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TagAdminGetTagDefinitionsStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TagAdminGetTagDefinitionsStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type TagAdminGetTagDefinitionsStatus400 =
  | TagAdminGetTagDefinitionsStatus400Plain
  | TagAdminGetTagDefinitionsStatus400Json
  | TagAdminGetTagDefinitionsStatus400Json2;

/**
 * @type object
 */
export type TagAdminGetTagDefinitionsStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TagAdminGetTagDefinitionsStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TagAdminGetTagDefinitionsStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type TagAdminGetTagDefinitionsStatus401 =
  | TagAdminGetTagDefinitionsStatus401Plain
  | TagAdminGetTagDefinitionsStatus401Json
  | TagAdminGetTagDefinitionsStatus401Json2;

/**
 * @type object
 */
export type TagAdminGetTagDefinitionsStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TagAdminGetTagDefinitionsStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TagAdminGetTagDefinitionsStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type TagAdminGetTagDefinitionsStatus403 =
  | TagAdminGetTagDefinitionsStatus403Plain
  | TagAdminGetTagDefinitionsStatus403Json
  | TagAdminGetTagDefinitionsStatus403Json2;

/**
 * @type object
 */
export type TagAdminGetTagDefinitionsStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TagAdminGetTagDefinitionsStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TagAdminGetTagDefinitionsStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type TagAdminGetTagDefinitionsStatus404 =
  | TagAdminGetTagDefinitionsStatus404Plain
  | TagAdminGetTagDefinitionsStatus404Json
  | TagAdminGetTagDefinitionsStatus404Json2;

/**
 * @type object
 */
export type TagAdminGetTagDefinitionsStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TagAdminGetTagDefinitionsStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TagAdminGetTagDefinitionsStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type TagAdminGetTagDefinitionsStatus500 =
  | TagAdminGetTagDefinitionsStatus500Plain
  | TagAdminGetTagDefinitionsStatus500Json
  | TagAdminGetTagDefinitionsStatus500Json2;

/**
 * @type object
 */
export type TagAdminGetTagDefinitionsStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TagAdminGetTagDefinitionsStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TagAdminGetTagDefinitionsStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type TagAdminGetTagDefinitionsStatus501 =
  | TagAdminGetTagDefinitionsStatus501Plain
  | TagAdminGetTagDefinitionsStatus501Json
  | TagAdminGetTagDefinitionsStatus501Json2;

/**
 * @type object
 */
export type TagAdminGetTagDefinitionsRequestConfig = {
  data?: never;
  pathParams?: never;
  queryParams?: never;
  headerParams?: never;
  /**
   * @type string
   */
  url: "/api/cms-kit-admin/tags/tag-definitions";
};

/**
 * @type object
 */
export type TagAdminGetTagDefinitionsResponses = {
  "200": TagAdminGetTagDefinitionsStatus200;
  "400": TagAdminGetTagDefinitionsStatus400;
  "401": TagAdminGetTagDefinitionsStatus401;
  "403": TagAdminGetTagDefinitionsStatus403;
  "404": TagAdminGetTagDefinitionsStatus404;
  "500": TagAdminGetTagDefinitionsStatus500;
  "501": TagAdminGetTagDefinitionsStatus501;
};

/**
 * @description Union of all possible responses
 */
export type TagAdminGetTagDefinitionsResponse =
  | TagAdminGetTagDefinitionsStatus200
  | TagAdminGetTagDefinitionsStatus400
  | TagAdminGetTagDefinitionsStatus401
  | TagAdminGetTagDefinitionsStatus403
  | TagAdminGetTagDefinitionsStatus404
  | TagAdminGetTagDefinitionsStatus500
  | TagAdminGetTagDefinitionsStatus501;
