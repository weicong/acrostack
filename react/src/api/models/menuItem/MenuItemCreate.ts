/* oxlint-disable */

import type { AcroStackServicesDtosCmsCreateMenuItemInput } from "../acroStack/services/dtos/cms/CreateMenuItemInput.ts";
import type { AcroStackServicesDtosCmsMenuItemDto } from "../acroStack/services/dtos/cms/MenuItemDto.ts";
import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse.ts";

/**
 * @type object
 */
export type MenuItemCreateStatus200Plain = AcroStackServicesDtosCmsMenuItemDto;

/**
 * @type object
 */
export type MenuItemCreateStatus200Json = AcroStackServicesDtosCmsMenuItemDto;

/**
 * @type object
 */
export type MenuItemCreateStatus200Json2 = AcroStackServicesDtosCmsMenuItemDto;

export type MenuItemCreateStatus200 =
  | MenuItemCreateStatus200Plain
  | MenuItemCreateStatus200Json
  | MenuItemCreateStatus200Json2;

/**
 * @type object
 */
export type MenuItemCreateStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MenuItemCreateStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MenuItemCreateStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuItemCreateStatus400 =
  | MenuItemCreateStatus400Plain
  | MenuItemCreateStatus400Json
  | MenuItemCreateStatus400Json2;

/**
 * @type object
 */
export type MenuItemCreateStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MenuItemCreateStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MenuItemCreateStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuItemCreateStatus401 =
  | MenuItemCreateStatus401Plain
  | MenuItemCreateStatus401Json
  | MenuItemCreateStatus401Json2;

/**
 * @type object
 */
export type MenuItemCreateStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MenuItemCreateStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MenuItemCreateStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuItemCreateStatus403 =
  | MenuItemCreateStatus403Plain
  | MenuItemCreateStatus403Json
  | MenuItemCreateStatus403Json2;

/**
 * @type object
 */
export type MenuItemCreateStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MenuItemCreateStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MenuItemCreateStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuItemCreateStatus404 =
  | MenuItemCreateStatus404Plain
  | MenuItemCreateStatus404Json
  | MenuItemCreateStatus404Json2;

/**
 * @type object
 */
export type MenuItemCreateStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MenuItemCreateStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MenuItemCreateStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuItemCreateStatus500 =
  | MenuItemCreateStatus500Plain
  | MenuItemCreateStatus500Json
  | MenuItemCreateStatus500Json2;

/**
 * @type object
 */
export type MenuItemCreateStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MenuItemCreateStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MenuItemCreateStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuItemCreateStatus501 =
  | MenuItemCreateStatus501Plain
  | MenuItemCreateStatus501Json
  | MenuItemCreateStatus501Json2;

/**
 * @type object | undefined
 */
export type MenuItemCreateJsonData = AcroStackServicesDtosCmsCreateMenuItemInput | undefined;

/**
 * @type object | undefined
 */
export type MenuItemCreateJson2Data = AcroStackServicesDtosCmsCreateMenuItemInput | undefined;

/**
 * @type object | undefined
 */
export type MenuItemCreateJson3Data = AcroStackServicesDtosCmsCreateMenuItemInput | undefined;

export type MenuItemCreateData =
  | MenuItemCreateJsonData
  | MenuItemCreateJson2Data
  | MenuItemCreateJson3Data;

/**
 * @type object
 */
export type MenuItemCreateRequestConfig = {
  data?: MenuItemCreateData;
  pathParams?: never;
  queryParams?: never;
  headerParams?: never;
  /**
   * @type string
   */
  url: "/api/app/menu-item";
};

/**
 * @type object
 */
export type MenuItemCreateResponses = {
  "200": MenuItemCreateStatus200;
  "400": MenuItemCreateStatus400;
  "401": MenuItemCreateStatus401;
  "403": MenuItemCreateStatus403;
  "404": MenuItemCreateStatus404;
  "500": MenuItemCreateStatus500;
  "501": MenuItemCreateStatus501;
};

/**
 * @description Union of all possible responses
 */
export type MenuItemCreateResponse =
  | MenuItemCreateStatus200
  | MenuItemCreateStatus400
  | MenuItemCreateStatus401
  | MenuItemCreateStatus403
  | MenuItemCreateStatus404
  | MenuItemCreateStatus500
  | MenuItemCreateStatus501;
