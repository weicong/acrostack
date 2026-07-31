/* oxlint-disable */

import type { AcroStackServicesDtosCmsMenuDto } from "../acroStack/services/dtos/cms/MenuDto.ts";
import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse.ts";

/**
 * @description
 * Format: `uuid`
 * @type string
 */
export type MenuGetPathId = string;

/**
 * @type object
 */
export type MenuGetStatus200Plain = AcroStackServicesDtosCmsMenuDto;

/**
 * @type object
 */
export type MenuGetStatus200Json = AcroStackServicesDtosCmsMenuDto;

/**
 * @type object
 */
export type MenuGetStatus200Json2 = AcroStackServicesDtosCmsMenuDto;

export type MenuGetStatus200 = MenuGetStatus200Plain | MenuGetStatus200Json | MenuGetStatus200Json2;

/**
 * @type object
 */
export type MenuGetStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MenuGetStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MenuGetStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuGetStatus400 = MenuGetStatus400Plain | MenuGetStatus400Json | MenuGetStatus400Json2;

/**
 * @type object
 */
export type MenuGetStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MenuGetStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MenuGetStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuGetStatus401 = MenuGetStatus401Plain | MenuGetStatus401Json | MenuGetStatus401Json2;

/**
 * @type object
 */
export type MenuGetStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MenuGetStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MenuGetStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuGetStatus403 = MenuGetStatus403Plain | MenuGetStatus403Json | MenuGetStatus403Json2;

/**
 * @type object
 */
export type MenuGetStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MenuGetStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MenuGetStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuGetStatus404 = MenuGetStatus404Plain | MenuGetStatus404Json | MenuGetStatus404Json2;

/**
 * @type object
 */
export type MenuGetStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MenuGetStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MenuGetStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuGetStatus500 = MenuGetStatus500Plain | MenuGetStatus500Json | MenuGetStatus500Json2;

/**
 * @type object
 */
export type MenuGetStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MenuGetStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MenuGetStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuGetStatus501 = MenuGetStatus501Plain | MenuGetStatus501Json | MenuGetStatus501Json2;

/**
 * @type object
 */
export type MenuGetRequestConfig = {
  data?: never;
  /**
   * @type object
   */
  pathParams: {
    id: MenuGetPathId;
  };
  queryParams?: never;
  headerParams?: never;
  /**
   * @type string
   */
  url: `/api/app/menu/${string}`;
};

/**
 * @type object
 */
export type MenuGetResponses = {
  "200": MenuGetStatus200;
  "400": MenuGetStatus400;
  "401": MenuGetStatus401;
  "403": MenuGetStatus403;
  "404": MenuGetStatus404;
  "500": MenuGetStatus500;
  "501": MenuGetStatus501;
};

/**
 * @description Union of all possible responses
 */
export type MenuGetResponse =
  | MenuGetStatus200
  | MenuGetStatus400
  | MenuGetStatus401
  | MenuGetStatus403
  | MenuGetStatus404
  | MenuGetStatus500
  | MenuGetStatus501;
