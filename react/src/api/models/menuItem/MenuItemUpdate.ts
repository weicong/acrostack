/* oxlint-disable */

import type { AcroStackServicesDtosCmsMenuItemDto } from "../acroStack/services/dtos/cms/MenuItemDto.ts";
import type { AcroStackServicesDtosCmsUpdateMenuItemInput } from "../acroStack/services/dtos/cms/UpdateMenuItemInput.ts";
import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse.ts";

/**
 * @description
 * Format: `uuid`
 * @type string
 */
export type MenuItemUpdatePathId = string;

/**
 * @type object
 */
export type MenuItemUpdateStatus200Plain = AcroStackServicesDtosCmsMenuItemDto;

/**
 * @type object
 */
export type MenuItemUpdateStatus200Json = AcroStackServicesDtosCmsMenuItemDto;

/**
 * @type object
 */
export type MenuItemUpdateStatus200Json2 = AcroStackServicesDtosCmsMenuItemDto;

export type MenuItemUpdateStatus200 =
  | MenuItemUpdateStatus200Plain
  | MenuItemUpdateStatus200Json
  | MenuItemUpdateStatus200Json2;

/**
 * @type object
 */
export type MenuItemUpdateStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MenuItemUpdateStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MenuItemUpdateStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuItemUpdateStatus400 =
  | MenuItemUpdateStatus400Plain
  | MenuItemUpdateStatus400Json
  | MenuItemUpdateStatus400Json2;

/**
 * @type object
 */
export type MenuItemUpdateStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MenuItemUpdateStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MenuItemUpdateStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuItemUpdateStatus401 =
  | MenuItemUpdateStatus401Plain
  | MenuItemUpdateStatus401Json
  | MenuItemUpdateStatus401Json2;

/**
 * @type object
 */
export type MenuItemUpdateStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MenuItemUpdateStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MenuItemUpdateStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuItemUpdateStatus403 =
  | MenuItemUpdateStatus403Plain
  | MenuItemUpdateStatus403Json
  | MenuItemUpdateStatus403Json2;

/**
 * @type object
 */
export type MenuItemUpdateStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MenuItemUpdateStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MenuItemUpdateStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuItemUpdateStatus404 =
  | MenuItemUpdateStatus404Plain
  | MenuItemUpdateStatus404Json
  | MenuItemUpdateStatus404Json2;

/**
 * @type object
 */
export type MenuItemUpdateStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MenuItemUpdateStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MenuItemUpdateStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuItemUpdateStatus500 =
  | MenuItemUpdateStatus500Plain
  | MenuItemUpdateStatus500Json
  | MenuItemUpdateStatus500Json2;

/**
 * @type object
 */
export type MenuItemUpdateStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MenuItemUpdateStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MenuItemUpdateStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuItemUpdateStatus501 =
  | MenuItemUpdateStatus501Plain
  | MenuItemUpdateStatus501Json
  | MenuItemUpdateStatus501Json2;

/**
 * @type object | undefined
 */
export type MenuItemUpdateJsonData = AcroStackServicesDtosCmsUpdateMenuItemInput | undefined;

/**
 * @type object | undefined
 */
export type MenuItemUpdateJson2Data = AcroStackServicesDtosCmsUpdateMenuItemInput | undefined;

/**
 * @type object | undefined
 */
export type MenuItemUpdateJson3Data = AcroStackServicesDtosCmsUpdateMenuItemInput | undefined;

export type MenuItemUpdateData =
  | MenuItemUpdateJsonData
  | MenuItemUpdateJson2Data
  | MenuItemUpdateJson3Data;

/**
 * @type object
 */
export type MenuItemUpdateRequestConfig = {
  data?: MenuItemUpdateData;
  /**
   * @type object
   */
  pathParams: {
    id: MenuItemUpdatePathId;
  };
  queryParams?: never;
  headerParams?: never;
  /**
   * @type string
   */
  url: `/api/app/menu-item/${string}`;
};

/**
 * @type object
 */
export type MenuItemUpdateResponses = {
  "200": MenuItemUpdateStatus200;
  "400": MenuItemUpdateStatus400;
  "401": MenuItemUpdateStatus401;
  "403": MenuItemUpdateStatus403;
  "404": MenuItemUpdateStatus404;
  "500": MenuItemUpdateStatus500;
  "501": MenuItemUpdateStatus501;
};

/**
 * @description Union of all possible responses
 */
export type MenuItemUpdateResponse =
  | MenuItemUpdateStatus200
  | MenuItemUpdateStatus400
  | MenuItemUpdateStatus401
  | MenuItemUpdateStatus403
  | MenuItemUpdateStatus404
  | MenuItemUpdateStatus500
  | MenuItemUpdateStatus501;
