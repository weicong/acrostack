/* oxlint-disable */

import type { AcroStackServicesDtosSaaSEditionDto } from "../acroStack/services/dtos/saaS/EditionDto.ts";
import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse.ts";

/**
 * @description
 * Format: `uuid`
 * @type string
 */
export type EditionGetPathId = string;

/**
 * @type object
 */
export type EditionGetStatus200Plain = AcroStackServicesDtosSaaSEditionDto;

/**
 * @type object
 */
export type EditionGetStatus200Json = AcroStackServicesDtosSaaSEditionDto;

/**
 * @type object
 */
export type EditionGetStatus200Json2 = AcroStackServicesDtosSaaSEditionDto;

export type EditionGetStatus200 =
  | EditionGetStatus200Plain
  | EditionGetStatus200Json
  | EditionGetStatus200Json2;

/**
 * @type object
 */
export type EditionGetStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type EditionGetStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type EditionGetStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type EditionGetStatus400 =
  | EditionGetStatus400Plain
  | EditionGetStatus400Json
  | EditionGetStatus400Json2;

/**
 * @type object
 */
export type EditionGetStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type EditionGetStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type EditionGetStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type EditionGetStatus401 =
  | EditionGetStatus401Plain
  | EditionGetStatus401Json
  | EditionGetStatus401Json2;

/**
 * @type object
 */
export type EditionGetStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type EditionGetStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type EditionGetStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type EditionGetStatus403 =
  | EditionGetStatus403Plain
  | EditionGetStatus403Json
  | EditionGetStatus403Json2;

/**
 * @type object
 */
export type EditionGetStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type EditionGetStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type EditionGetStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type EditionGetStatus404 =
  | EditionGetStatus404Plain
  | EditionGetStatus404Json
  | EditionGetStatus404Json2;

/**
 * @type object
 */
export type EditionGetStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type EditionGetStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type EditionGetStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type EditionGetStatus500 =
  | EditionGetStatus500Plain
  | EditionGetStatus500Json
  | EditionGetStatus500Json2;

/**
 * @type object
 */
export type EditionGetStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type EditionGetStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type EditionGetStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type EditionGetStatus501 =
  | EditionGetStatus501Plain
  | EditionGetStatus501Json
  | EditionGetStatus501Json2;

/**
 * @type object
 */
export type EditionGetRequestConfig = {
  data?: never;
  /**
   * @type object
   */
  pathParams: {
    id: EditionGetPathId;
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
export type EditionGetResponses = {
  "200": EditionGetStatus200;
  "400": EditionGetStatus400;
  "401": EditionGetStatus401;
  "403": EditionGetStatus403;
  "404": EditionGetStatus404;
  "500": EditionGetStatus500;
  "501": EditionGetStatus501;
};

/**
 * @description Union of all possible responses
 */
export type EditionGetResponse =
  | EditionGetStatus200
  | EditionGetStatus400
  | EditionGetStatus401
  | EditionGetStatus403
  | EditionGetStatus404
  | EditionGetStatus500
  | EditionGetStatus501;
