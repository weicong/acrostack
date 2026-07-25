/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse.ts";

/**
 * @description
 * Format: `uuid`
 * @type string
 */
export type EditionDeletePathId = string;

/**
 * @type any
 */
export type EditionDeleteStatus200 = any;

/**
 * @type any
 */
export type EditionDeleteStatus204 = any;

/**
 * @type object
 */
export type EditionDeleteStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type EditionDeleteStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type EditionDeleteStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type EditionDeleteStatus400 =
  | EditionDeleteStatus400Plain
  | EditionDeleteStatus400Json
  | EditionDeleteStatus400Json2;

/**
 * @type object
 */
export type EditionDeleteStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type EditionDeleteStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type EditionDeleteStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type EditionDeleteStatus401 =
  | EditionDeleteStatus401Plain
  | EditionDeleteStatus401Json
  | EditionDeleteStatus401Json2;

/**
 * @type object
 */
export type EditionDeleteStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type EditionDeleteStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type EditionDeleteStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type EditionDeleteStatus403 =
  | EditionDeleteStatus403Plain
  | EditionDeleteStatus403Json
  | EditionDeleteStatus403Json2;

/**
 * @type object
 */
export type EditionDeleteStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type EditionDeleteStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type EditionDeleteStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type EditionDeleteStatus404 =
  | EditionDeleteStatus404Plain
  | EditionDeleteStatus404Json
  | EditionDeleteStatus404Json2;

/**
 * @type object
 */
export type EditionDeleteStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type EditionDeleteStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type EditionDeleteStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type EditionDeleteStatus500 =
  | EditionDeleteStatus500Plain
  | EditionDeleteStatus500Json
  | EditionDeleteStatus500Json2;

/**
 * @type object
 */
export type EditionDeleteStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type EditionDeleteStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type EditionDeleteStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type EditionDeleteStatus501 =
  | EditionDeleteStatus501Plain
  | EditionDeleteStatus501Json
  | EditionDeleteStatus501Json2;

/**
 * @type object
 */
export type EditionDeleteRequestConfig = {
  data?: never;
  /**
   * @type object
   */
  pathParams: {
    id: EditionDeletePathId;
  };
  queryParams?: never;
  headerParams?: never;
  /**
   * @type string
   */
  url: `/api/app/edition/${string}`;
};

/**
 * @type object
 */
export type EditionDeleteResponses = {
  "200": EditionDeleteStatus200;
  "204": EditionDeleteStatus204;
  "400": EditionDeleteStatus400;
  "401": EditionDeleteStatus401;
  "403": EditionDeleteStatus403;
  "404": EditionDeleteStatus404;
  "500": EditionDeleteStatus500;
  "501": EditionDeleteStatus501;
};

/**
 * @description Union of all possible responses
 */
export type EditionDeleteResponse =
  | EditionDeleteStatus200
  | EditionDeleteStatus204
  | EditionDeleteStatus400
  | EditionDeleteStatus401
  | EditionDeleteStatus403
  | EditionDeleteStatus404
  | EditionDeleteStatus500
  | EditionDeleteStatus501;
