/* oxlint-disable */

import type { VoloAbpApplicationDtosListResultDto1AcroStackServicesDtosCmsMenuDtoAcroStackVersion1000CultureneutralPublicKeyTokennull } from "../volo/abp/application/dtos/listResultDto1AcroStack/services/dtos/cms/MenuDtoAcroStackVersion1000CultureneutralPublicKeyTokennull.ts";
import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse.ts";

/**
 * @type object
 */
export type MenuGetListStatus200Plain =
  VoloAbpApplicationDtosListResultDto1AcroStackServicesDtosCmsMenuDtoAcroStackVersion1000CultureneutralPublicKeyTokennull;

/**
 * @type object
 */
export type MenuGetListStatus200Json =
  VoloAbpApplicationDtosListResultDto1AcroStackServicesDtosCmsMenuDtoAcroStackVersion1000CultureneutralPublicKeyTokennull;

/**
 * @type object
 */
export type MenuGetListStatus200Json2 =
  VoloAbpApplicationDtosListResultDto1AcroStackServicesDtosCmsMenuDtoAcroStackVersion1000CultureneutralPublicKeyTokennull;

export type MenuGetListStatus200 =
  | MenuGetListStatus200Plain
  | MenuGetListStatus200Json
  | MenuGetListStatus200Json2;

/**
 * @type object
 */
export type MenuGetListStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MenuGetListStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MenuGetListStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuGetListStatus400 =
  | MenuGetListStatus400Plain
  | MenuGetListStatus400Json
  | MenuGetListStatus400Json2;

/**
 * @type object
 */
export type MenuGetListStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MenuGetListStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MenuGetListStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuGetListStatus401 =
  | MenuGetListStatus401Plain
  | MenuGetListStatus401Json
  | MenuGetListStatus401Json2;

/**
 * @type object
 */
export type MenuGetListStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MenuGetListStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MenuGetListStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuGetListStatus403 =
  | MenuGetListStatus403Plain
  | MenuGetListStatus403Json
  | MenuGetListStatus403Json2;

/**
 * @type object
 */
export type MenuGetListStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MenuGetListStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MenuGetListStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuGetListStatus404 =
  | MenuGetListStatus404Plain
  | MenuGetListStatus404Json
  | MenuGetListStatus404Json2;

/**
 * @type object
 */
export type MenuGetListStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MenuGetListStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MenuGetListStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuGetListStatus500 =
  | MenuGetListStatus500Plain
  | MenuGetListStatus500Json
  | MenuGetListStatus500Json2;

/**
 * @type object
 */
export type MenuGetListStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MenuGetListStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MenuGetListStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuGetListStatus501 =
  | MenuGetListStatus501Plain
  | MenuGetListStatus501Json
  | MenuGetListStatus501Json2;

/**
 * @type object
 */
export type MenuGetListRequestConfig = {
  data?: never;
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
export type MenuGetListResponses = {
  "200": MenuGetListStatus200;
  "400": MenuGetListStatus400;
  "401": MenuGetListStatus401;
  "403": MenuGetListStatus403;
  "404": MenuGetListStatus404;
  "500": MenuGetListStatus500;
  "501": MenuGetListStatus501;
};

/**
 * @description Union of all possible responses
 */
export type MenuGetListResponse =
  | MenuGetListStatus200
  | MenuGetListStatus400
  | MenuGetListStatus401
  | MenuGetListStatus403
  | MenuGetListStatus404
  | MenuGetListStatus500
  | MenuGetListStatus501;
