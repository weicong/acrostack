/* oxlint-disable */

import type { AcroStackServicesDtosCmsMenuDto } from "../acroStack/services/dtos/cms/MenuDto.ts";
import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse.ts";

/**
 * @type string | undefined
 */
export type MenuGetByNameQueryName = string | undefined;

/**
 * @type object
 */
export type MenuGetByNameStatus200Plain = AcroStackServicesDtosCmsMenuDto;

/**
 * @type object
 */
export type MenuGetByNameStatus200Json = AcroStackServicesDtosCmsMenuDto;

/**
 * @type object
 */
export type MenuGetByNameStatus200Json2 = AcroStackServicesDtosCmsMenuDto;

export type MenuGetByNameStatus200 =
  | MenuGetByNameStatus200Plain
  | MenuGetByNameStatus200Json
  | MenuGetByNameStatus200Json2;

/**
 * @type object
 */
export type MenuGetByNameStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MenuGetByNameStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MenuGetByNameStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuGetByNameStatus400 =
  | MenuGetByNameStatus400Plain
  | MenuGetByNameStatus400Json
  | MenuGetByNameStatus400Json2;

/**
 * @type object
 */
export type MenuGetByNameStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MenuGetByNameStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MenuGetByNameStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuGetByNameStatus401 =
  | MenuGetByNameStatus401Plain
  | MenuGetByNameStatus401Json
  | MenuGetByNameStatus401Json2;

/**
 * @type object
 */
export type MenuGetByNameStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MenuGetByNameStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MenuGetByNameStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuGetByNameStatus403 =
  | MenuGetByNameStatus403Plain
  | MenuGetByNameStatus403Json
  | MenuGetByNameStatus403Json2;

/**
 * @type object
 */
export type MenuGetByNameStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MenuGetByNameStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MenuGetByNameStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuGetByNameStatus404 =
  | MenuGetByNameStatus404Plain
  | MenuGetByNameStatus404Json
  | MenuGetByNameStatus404Json2;

/**
 * @type object
 */
export type MenuGetByNameStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MenuGetByNameStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MenuGetByNameStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuGetByNameStatus500 =
  | MenuGetByNameStatus500Plain
  | MenuGetByNameStatus500Json
  | MenuGetByNameStatus500Json2;

/**
 * @type object
 */
export type MenuGetByNameStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MenuGetByNameStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MenuGetByNameStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuGetByNameStatus501 =
  | MenuGetByNameStatus501Plain
  | MenuGetByNameStatus501Json
  | MenuGetByNameStatus501Json2;

/**
 * @type object
 */
export type MenuGetByNameRequestConfig = {
  data?: never;
  pathParams?: never;
  /**
   * @type object | undefined
   */
  queryParams?: {
    name?: MenuGetByNameQueryName;
  };
  headerParams?: never;
  /**
   * @type string
   */
  url: "/api/app/menu/by-name";
};

/**
 * @type object
 */
export type MenuGetByNameResponses = {
  "200": MenuGetByNameStatus200;
  "400": MenuGetByNameStatus400;
  "401": MenuGetByNameStatus401;
  "403": MenuGetByNameStatus403;
  "404": MenuGetByNameStatus404;
  "500": MenuGetByNameStatus500;
  "501": MenuGetByNameStatus501;
};

/**
 * @description Union of all possible responses
 */
export type MenuGetByNameResponse =
  | MenuGetByNameStatus200
  | MenuGetByNameStatus400
  | MenuGetByNameStatus401
  | MenuGetByNameStatus403
  | MenuGetByNameStatus404
  | MenuGetByNameStatus500
  | MenuGetByNameStatus501;
