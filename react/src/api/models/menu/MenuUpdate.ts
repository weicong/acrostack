/* oxlint-disable */

import type { AcroStackServicesDtosCmsCreateMenuInput } from "../acroStack/services/dtos/cms/CreateMenuInput.ts";
import type { AcroStackServicesDtosCmsMenuDto } from "../acroStack/services/dtos/cms/MenuDto.ts";
import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse.ts";

/**
 * @description
 * Format: `uuid`
 * @type string
 */
export type MenuUpdatePathId = string;

/**
 * @type object
 */
export type MenuUpdateStatus200Plain = AcroStackServicesDtosCmsMenuDto;

/**
 * @type object
 */
export type MenuUpdateStatus200Json = AcroStackServicesDtosCmsMenuDto;

/**
 * @type object
 */
export type MenuUpdateStatus200Json2 = AcroStackServicesDtosCmsMenuDto;

export type MenuUpdateStatus200 =
  | MenuUpdateStatus200Plain
  | MenuUpdateStatus200Json
  | MenuUpdateStatus200Json2;

/**
 * @type object
 */
export type MenuUpdateStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MenuUpdateStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MenuUpdateStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuUpdateStatus400 =
  | MenuUpdateStatus400Plain
  | MenuUpdateStatus400Json
  | MenuUpdateStatus400Json2;

/**
 * @type object
 */
export type MenuUpdateStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MenuUpdateStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MenuUpdateStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuUpdateStatus401 =
  | MenuUpdateStatus401Plain
  | MenuUpdateStatus401Json
  | MenuUpdateStatus401Json2;

/**
 * @type object
 */
export type MenuUpdateStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MenuUpdateStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MenuUpdateStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuUpdateStatus403 =
  | MenuUpdateStatus403Plain
  | MenuUpdateStatus403Json
  | MenuUpdateStatus403Json2;

/**
 * @type object
 */
export type MenuUpdateStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MenuUpdateStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MenuUpdateStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuUpdateStatus404 =
  | MenuUpdateStatus404Plain
  | MenuUpdateStatus404Json
  | MenuUpdateStatus404Json2;

/**
 * @type object
 */
export type MenuUpdateStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MenuUpdateStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MenuUpdateStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuUpdateStatus500 =
  | MenuUpdateStatus500Plain
  | MenuUpdateStatus500Json
  | MenuUpdateStatus500Json2;

/**
 * @type object
 */
export type MenuUpdateStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MenuUpdateStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MenuUpdateStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuUpdateStatus501 =
  | MenuUpdateStatus501Plain
  | MenuUpdateStatus501Json
  | MenuUpdateStatus501Json2;

/**
 * @type object | undefined
 */
export type MenuUpdateJsonData = AcroStackServicesDtosCmsCreateMenuInput | undefined;

/**
 * @type object | undefined
 */
export type MenuUpdateJson2Data = AcroStackServicesDtosCmsCreateMenuInput | undefined;

/**
 * @type object | undefined
 */
export type MenuUpdateJson3Data = AcroStackServicesDtosCmsCreateMenuInput | undefined;

export type MenuUpdateData = MenuUpdateJsonData | MenuUpdateJson2Data | MenuUpdateJson3Data;

/**
 * @type object
 */
export type MenuUpdateRequestConfig = {
  data?: MenuUpdateData;
  /**
   * @type object
   */
  pathParams: {
    id: MenuUpdatePathId;
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
export type MenuUpdateResponses = {
  "200": MenuUpdateStatus200;
  "400": MenuUpdateStatus400;
  "401": MenuUpdateStatus401;
  "403": MenuUpdateStatus403;
  "404": MenuUpdateStatus404;
  "500": MenuUpdateStatus500;
  "501": MenuUpdateStatus501;
};

/**
 * @description Union of all possible responses
 */
export type MenuUpdateResponse =
  | MenuUpdateStatus200
  | MenuUpdateStatus400
  | MenuUpdateStatus401
  | MenuUpdateStatus403
  | MenuUpdateStatus404
  | MenuUpdateStatus500
  | MenuUpdateStatus501;
