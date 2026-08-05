/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse.ts";

/**
 * @description
 * Format: `uuid`
 * @type string
 */
export type MediaDescriptorAdminDeletePathId = string;

/**
 * @type any
 */
export type MediaDescriptorAdminDeleteStatus200 = any;

/**
 * @type any
 */
export type MediaDescriptorAdminDeleteStatus204 = any;

/**
 * @type object
 */
export type MediaDescriptorAdminDeleteStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MediaDescriptorAdminDeleteStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MediaDescriptorAdminDeleteStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type MediaDescriptorAdminDeleteStatus400 =
  | MediaDescriptorAdminDeleteStatus400Plain
  | MediaDescriptorAdminDeleteStatus400Json
  | MediaDescriptorAdminDeleteStatus400Json2;

/**
 * @type object
 */
export type MediaDescriptorAdminDeleteStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MediaDescriptorAdminDeleteStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MediaDescriptorAdminDeleteStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type MediaDescriptorAdminDeleteStatus401 =
  | MediaDescriptorAdminDeleteStatus401Plain
  | MediaDescriptorAdminDeleteStatus401Json
  | MediaDescriptorAdminDeleteStatus401Json2;

/**
 * @type object
 */
export type MediaDescriptorAdminDeleteStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MediaDescriptorAdminDeleteStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MediaDescriptorAdminDeleteStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type MediaDescriptorAdminDeleteStatus403 =
  | MediaDescriptorAdminDeleteStatus403Plain
  | MediaDescriptorAdminDeleteStatus403Json
  | MediaDescriptorAdminDeleteStatus403Json2;

/**
 * @type object
 */
export type MediaDescriptorAdminDeleteStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MediaDescriptorAdminDeleteStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MediaDescriptorAdminDeleteStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type MediaDescriptorAdminDeleteStatus404 =
  | MediaDescriptorAdminDeleteStatus404Plain
  | MediaDescriptorAdminDeleteStatus404Json
  | MediaDescriptorAdminDeleteStatus404Json2;

/**
 * @type object
 */
export type MediaDescriptorAdminDeleteStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MediaDescriptorAdminDeleteStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MediaDescriptorAdminDeleteStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type MediaDescriptorAdminDeleteStatus500 =
  | MediaDescriptorAdminDeleteStatus500Plain
  | MediaDescriptorAdminDeleteStatus500Json
  | MediaDescriptorAdminDeleteStatus500Json2;

/**
 * @type object
 */
export type MediaDescriptorAdminDeleteStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MediaDescriptorAdminDeleteStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MediaDescriptorAdminDeleteStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type MediaDescriptorAdminDeleteStatus501 =
  | MediaDescriptorAdminDeleteStatus501Plain
  | MediaDescriptorAdminDeleteStatus501Json
  | MediaDescriptorAdminDeleteStatus501Json2;

/**
 * @type object
 */
export type MediaDescriptorAdminDeleteRequestConfig = {
  data?: never;
  /**
   * @type object
   */
  pathParams: {
    id: MediaDescriptorAdminDeletePathId;
  };
  queryParams?: never;
  headerParams?: never;
  /**
   * @type string
   */
  url: `/api/cms-kit-admin/media/${string}`;
};

/**
 * @type object
 */
export type MediaDescriptorAdminDeleteResponses = {
  "200": MediaDescriptorAdminDeleteStatus200;
  "204": MediaDescriptorAdminDeleteStatus204;
  "400": MediaDescriptorAdminDeleteStatus400;
  "401": MediaDescriptorAdminDeleteStatus401;
  "403": MediaDescriptorAdminDeleteStatus403;
  "404": MediaDescriptorAdminDeleteStatus404;
  "500": MediaDescriptorAdminDeleteStatus500;
  "501": MediaDescriptorAdminDeleteStatus501;
};

/**
 * @description Union of all possible responses
 */
export type MediaDescriptorAdminDeleteResponse =
  | MediaDescriptorAdminDeleteStatus200
  | MediaDescriptorAdminDeleteStatus204
  | MediaDescriptorAdminDeleteStatus400
  | MediaDescriptorAdminDeleteStatus401
  | MediaDescriptorAdminDeleteStatus403
  | MediaDescriptorAdminDeleteStatus404
  | MediaDescriptorAdminDeleteStatus500
  | MediaDescriptorAdminDeleteStatus501;
