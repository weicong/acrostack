/* oxlint-disable */

import type { VoloAbpApplicationDtosListResultDto1AcroStackServicesDtosChatContactDtoAcroStackVersion1000CultureneutralPublicKeyTokennull } from "../volo/abp/application/dtos/listResultDto1AcroStack/services/dtos/chat/ContactDtoAcroStackVersion1000CultureneutralPublicKeyTokennull.ts";
import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse.ts";

/**
 * @type object
 */
export type ContactGetListStatus200Plain =
  VoloAbpApplicationDtosListResultDto1AcroStackServicesDtosChatContactDtoAcroStackVersion1000CultureneutralPublicKeyTokennull;

/**
 * @type object
 */
export type ContactGetListStatus200Json =
  VoloAbpApplicationDtosListResultDto1AcroStackServicesDtosChatContactDtoAcroStackVersion1000CultureneutralPublicKeyTokennull;

/**
 * @type object
 */
export type ContactGetListStatus200Json2 =
  VoloAbpApplicationDtosListResultDto1AcroStackServicesDtosChatContactDtoAcroStackVersion1000CultureneutralPublicKeyTokennull;

export type ContactGetListStatus200 =
  | ContactGetListStatus200Plain
  | ContactGetListStatus200Json
  | ContactGetListStatus200Json2;

/**
 * @type object
 */
export type ContactGetListStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ContactGetListStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ContactGetListStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ContactGetListStatus400 =
  | ContactGetListStatus400Plain
  | ContactGetListStatus400Json
  | ContactGetListStatus400Json2;

/**
 * @type object
 */
export type ContactGetListStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ContactGetListStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ContactGetListStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ContactGetListStatus401 =
  | ContactGetListStatus401Plain
  | ContactGetListStatus401Json
  | ContactGetListStatus401Json2;

/**
 * @type object
 */
export type ContactGetListStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ContactGetListStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ContactGetListStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ContactGetListStatus403 =
  | ContactGetListStatus403Plain
  | ContactGetListStatus403Json
  | ContactGetListStatus403Json2;

/**
 * @type object
 */
export type ContactGetListStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ContactGetListStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ContactGetListStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ContactGetListStatus404 =
  | ContactGetListStatus404Plain
  | ContactGetListStatus404Json
  | ContactGetListStatus404Json2;

/**
 * @type object
 */
export type ContactGetListStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ContactGetListStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ContactGetListStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ContactGetListStatus500 =
  | ContactGetListStatus500Plain
  | ContactGetListStatus500Json
  | ContactGetListStatus500Json2;

/**
 * @type object
 */
export type ContactGetListStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ContactGetListStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ContactGetListStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ContactGetListStatus501 =
  | ContactGetListStatus501Plain
  | ContactGetListStatus501Json
  | ContactGetListStatus501Json2;

/**
 * @type object
 */
export type ContactGetListRequestConfig = {
  data?: never;
  pathParams?: never;
  queryParams?: never;
  headerParams?: never;
  /**
   * @type string
   */
  url: "/api/app/contact";
};

/**
 * @type object
 */
export type ContactGetListResponses = {
  "200": ContactGetListStatus200;
  "400": ContactGetListStatus400;
  "401": ContactGetListStatus401;
  "403": ContactGetListStatus403;
  "404": ContactGetListStatus404;
  "500": ContactGetListStatus500;
  "501": ContactGetListStatus501;
};

/**
 * @description Union of all possible responses
 */
export type ContactGetListResponse =
  | ContactGetListStatus200
  | ContactGetListStatus400
  | ContactGetListStatus401
  | ContactGetListStatus403
  | ContactGetListStatus404
  | ContactGetListStatus500
  | ContactGetListStatus501;
