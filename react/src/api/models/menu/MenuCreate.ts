/* oxlint-disable */

import type { AcroStackServicesDtosCmsCreateMenuInput } from "../acroStack/services/dtos/cms/CreateMenuInput.ts";
import type { AcroStackServicesDtosCmsMenuDto } from "../acroStack/services/dtos/cms/MenuDto.ts";
import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse.ts";

/**
 * @type object
 */
export type MenuCreateStatus200Plain = AcroStackServicesDtosCmsMenuDto;

/**
 * @type object
 */
export type MenuCreateStatus200Json = AcroStackServicesDtosCmsMenuDto;

/**
 * @type object
 */
export type MenuCreateStatus200Json2 = AcroStackServicesDtosCmsMenuDto;

export type MenuCreateStatus200 =
  | MenuCreateStatus200Plain
  | MenuCreateStatus200Json
  | MenuCreateStatus200Json2;

/**
 * @type object
 */
export type MenuCreateStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MenuCreateStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MenuCreateStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuCreateStatus400 =
  | MenuCreateStatus400Plain
  | MenuCreateStatus400Json
  | MenuCreateStatus400Json2;

/**
 * @type object
 */
export type MenuCreateStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MenuCreateStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MenuCreateStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuCreateStatus401 =
  | MenuCreateStatus401Plain
  | MenuCreateStatus401Json
  | MenuCreateStatus401Json2;

/**
 * @type object
 */
export type MenuCreateStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MenuCreateStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MenuCreateStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuCreateStatus403 =
  | MenuCreateStatus403Plain
  | MenuCreateStatus403Json
  | MenuCreateStatus403Json2;

/**
 * @type object
 */
export type MenuCreateStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MenuCreateStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MenuCreateStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuCreateStatus404 =
  | MenuCreateStatus404Plain
  | MenuCreateStatus404Json
  | MenuCreateStatus404Json2;

/**
 * @type object
 */
export type MenuCreateStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MenuCreateStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MenuCreateStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuCreateStatus500 =
  | MenuCreateStatus500Plain
  | MenuCreateStatus500Json
  | MenuCreateStatus500Json2;

/**
 * @type object
 */
export type MenuCreateStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MenuCreateStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MenuCreateStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuCreateStatus501 =
  | MenuCreateStatus501Plain
  | MenuCreateStatus501Json
  | MenuCreateStatus501Json2;

/**
 * @type object | undefined
 */
export type MenuCreateJsonData = AcroStackServicesDtosCmsCreateMenuInput | undefined;

/**
 * @type object | undefined
 */
export type MenuCreateJson2Data = AcroStackServicesDtosCmsCreateMenuInput | undefined;

/**
 * @type object | undefined
 */
export type MenuCreateJson3Data = AcroStackServicesDtosCmsCreateMenuInput | undefined;

export type MenuCreateData = MenuCreateJsonData | MenuCreateJson2Data | MenuCreateJson3Data;

/**
 * @type object
 */
export type MenuCreateRequestConfig = {
  data?: MenuCreateData;
  pathParams?: never;
  queryParams?: never;
  headerParams?: never;
  /**
   * @type string
   */
  url: "/api/app/menu";
};

/**
 * @type object
 */
export type MenuCreateResponses = {
  "200": MenuCreateStatus200;
  "400": MenuCreateStatus400;
  "401": MenuCreateStatus401;
  "403": MenuCreateStatus403;
  "404": MenuCreateStatus404;
  "500": MenuCreateStatus500;
  "501": MenuCreateStatus501;
};

/**
 * @description Union of all possible responses
 */
export type MenuCreateResponse =
  | MenuCreateStatus200
  | MenuCreateStatus400
  | MenuCreateStatus401
  | MenuCreateStatus403
  | MenuCreateStatus404
  | MenuCreateStatus500
  | MenuCreateStatus501;
