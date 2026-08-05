/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse.ts";

/**
 * @description
 * Format: `uuid`
 * @type string
 */
export type EntityTagAdminRemoveTagFromEntityQueryTagId = string;

/**
 * @type string
 */
export type EntityTagAdminRemoveTagFromEntityQueryEntityType = string;

/**
 * @type string
 */
export type EntityTagAdminRemoveTagFromEntityQueryEntityId = string;

/**
 * @type any
 */
export type EntityTagAdminRemoveTagFromEntityStatus200 = any;

/**
 * @type any
 */
export type EntityTagAdminRemoveTagFromEntityStatus204 = any;

/**
 * @type object
 */
export type EntityTagAdminRemoveTagFromEntityStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type EntityTagAdminRemoveTagFromEntityStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type EntityTagAdminRemoveTagFromEntityStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type EntityTagAdminRemoveTagFromEntityStatus400 =
  | EntityTagAdminRemoveTagFromEntityStatus400Plain
  | EntityTagAdminRemoveTagFromEntityStatus400Json
  | EntityTagAdminRemoveTagFromEntityStatus400Json2;

/**
 * @type object
 */
export type EntityTagAdminRemoveTagFromEntityStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type EntityTagAdminRemoveTagFromEntityStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type EntityTagAdminRemoveTagFromEntityStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type EntityTagAdminRemoveTagFromEntityStatus401 =
  | EntityTagAdminRemoveTagFromEntityStatus401Plain
  | EntityTagAdminRemoveTagFromEntityStatus401Json
  | EntityTagAdminRemoveTagFromEntityStatus401Json2;

/**
 * @type object
 */
export type EntityTagAdminRemoveTagFromEntityStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type EntityTagAdminRemoveTagFromEntityStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type EntityTagAdminRemoveTagFromEntityStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type EntityTagAdminRemoveTagFromEntityStatus403 =
  | EntityTagAdminRemoveTagFromEntityStatus403Plain
  | EntityTagAdminRemoveTagFromEntityStatus403Json
  | EntityTagAdminRemoveTagFromEntityStatus403Json2;

/**
 * @type object
 */
export type EntityTagAdminRemoveTagFromEntityStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type EntityTagAdminRemoveTagFromEntityStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type EntityTagAdminRemoveTagFromEntityStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type EntityTagAdminRemoveTagFromEntityStatus404 =
  | EntityTagAdminRemoveTagFromEntityStatus404Plain
  | EntityTagAdminRemoveTagFromEntityStatus404Json
  | EntityTagAdminRemoveTagFromEntityStatus404Json2;

/**
 * @type object
 */
export type EntityTagAdminRemoveTagFromEntityStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type EntityTagAdminRemoveTagFromEntityStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type EntityTagAdminRemoveTagFromEntityStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type EntityTagAdminRemoveTagFromEntityStatus500 =
  | EntityTagAdminRemoveTagFromEntityStatus500Plain
  | EntityTagAdminRemoveTagFromEntityStatus500Json
  | EntityTagAdminRemoveTagFromEntityStatus500Json2;

/**
 * @type object
 */
export type EntityTagAdminRemoveTagFromEntityStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type EntityTagAdminRemoveTagFromEntityStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type EntityTagAdminRemoveTagFromEntityStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type EntityTagAdminRemoveTagFromEntityStatus501 =
  | EntityTagAdminRemoveTagFromEntityStatus501Plain
  | EntityTagAdminRemoveTagFromEntityStatus501Json
  | EntityTagAdminRemoveTagFromEntityStatus501Json2;

/**
 * @type object
 */
export type EntityTagAdminRemoveTagFromEntityRequestConfig = {
  data?: never;
  pathParams?: never;
  /**
   * @type object | undefined
   */
  queryParams?: {
    TagId: EntityTagAdminRemoveTagFromEntityQueryTagId;
    EntityType: EntityTagAdminRemoveTagFromEntityQueryEntityType;
    EntityId: EntityTagAdminRemoveTagFromEntityQueryEntityId;
  };
  headerParams?: never;
  /**
   * @type string
   */
  url: "/api/cms-kit-admin/entity-tags";
};

/**
 * @type object
 */
export type EntityTagAdminRemoveTagFromEntityResponses = {
  "200": EntityTagAdminRemoveTagFromEntityStatus200;
  "204": EntityTagAdminRemoveTagFromEntityStatus204;
  "400": EntityTagAdminRemoveTagFromEntityStatus400;
  "401": EntityTagAdminRemoveTagFromEntityStatus401;
  "403": EntityTagAdminRemoveTagFromEntityStatus403;
  "404": EntityTagAdminRemoveTagFromEntityStatus404;
  "500": EntityTagAdminRemoveTagFromEntityStatus500;
  "501": EntityTagAdminRemoveTagFromEntityStatus501;
};

/**
 * @description Union of all possible responses
 */
export type EntityTagAdminRemoveTagFromEntityResponse =
  | EntityTagAdminRemoveTagFromEntityStatus200
  | EntityTagAdminRemoveTagFromEntityStatus204
  | EntityTagAdminRemoveTagFromEntityStatus400
  | EntityTagAdminRemoveTagFromEntityStatus401
  | EntityTagAdminRemoveTagFromEntityStatus403
  | EntityTagAdminRemoveTagFromEntityStatus404
  | EntityTagAdminRemoveTagFromEntityStatus500
  | EntityTagAdminRemoveTagFromEntityStatus501;
