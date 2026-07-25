/* oxlint-disable */

import type { AcroStackServicesDtosSaaSCreateUpdateEditionDto } from "../acroStack/services/dtos/saaS/CreateUpdateEditionDto.ts";
import type { AcroStackServicesDtosSaaSEditionDto } from "../acroStack/services/dtos/saaS/EditionDto.ts";
import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse.ts";

/**
 * @type object
 */
export type EditionCreateStatus200Plain = AcroStackServicesDtosSaaSEditionDto;

/**
 * @type object
 */
export type EditionCreateStatus200Json = AcroStackServicesDtosSaaSEditionDto;

/**
 * @type object
 */
export type EditionCreateStatus200Json2 = AcroStackServicesDtosSaaSEditionDto;

export type EditionCreateStatus200 =
  | EditionCreateStatus200Plain
  | EditionCreateStatus200Json
  | EditionCreateStatus200Json2;

/**
 * @type object
 */
export type EditionCreateStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type EditionCreateStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type EditionCreateStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type EditionCreateStatus400 =
  | EditionCreateStatus400Plain
  | EditionCreateStatus400Json
  | EditionCreateStatus400Json2;

/**
 * @type object
 */
export type EditionCreateStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type EditionCreateStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type EditionCreateStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type EditionCreateStatus401 =
  | EditionCreateStatus401Plain
  | EditionCreateStatus401Json
  | EditionCreateStatus401Json2;

/**
 * @type object
 */
export type EditionCreateStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type EditionCreateStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type EditionCreateStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type EditionCreateStatus403 =
  | EditionCreateStatus403Plain
  | EditionCreateStatus403Json
  | EditionCreateStatus403Json2;

/**
 * @type object
 */
export type EditionCreateStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type EditionCreateStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type EditionCreateStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type EditionCreateStatus404 =
  | EditionCreateStatus404Plain
  | EditionCreateStatus404Json
  | EditionCreateStatus404Json2;

/**
 * @type object
 */
export type EditionCreateStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type EditionCreateStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type EditionCreateStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type EditionCreateStatus500 =
  | EditionCreateStatus500Plain
  | EditionCreateStatus500Json
  | EditionCreateStatus500Json2;

/**
 * @type object
 */
export type EditionCreateStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type EditionCreateStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type EditionCreateStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type EditionCreateStatus501 =
  | EditionCreateStatus501Plain
  | EditionCreateStatus501Json
  | EditionCreateStatus501Json2;

/**
 * @type object | undefined
 */
export type EditionCreateJsonData = AcroStackServicesDtosSaaSCreateUpdateEditionDto | undefined;

/**
 * @type object | undefined
 */
export type EditionCreateJson2Data = AcroStackServicesDtosSaaSCreateUpdateEditionDto | undefined;

/**
 * @type object | undefined
 */
export type EditionCreateJson3Data = AcroStackServicesDtosSaaSCreateUpdateEditionDto | undefined;

export type EditionCreateData =
  | EditionCreateJsonData
  | EditionCreateJson2Data
  | EditionCreateJson3Data;

/**
 * @type object
 */
export type EditionCreateRequestConfig = {
  data?: EditionCreateData;
  pathParams?: never;
  queryParams?: never;
  headerParams?: never;
  /**
   * @type string
   */
  url: "/api/app/edition";
};

/**
 * @type object
 */
export type EditionCreateResponses = {
  "200": EditionCreateStatus200;
  "400": EditionCreateStatus400;
  "401": EditionCreateStatus401;
  "403": EditionCreateStatus403;
  "404": EditionCreateStatus404;
  "500": EditionCreateStatus500;
  "501": EditionCreateStatus501;
};

/**
 * @description Union of all possible responses
 */
export type EditionCreateResponse =
  | EditionCreateStatus200
  | EditionCreateStatus400
  | EditionCreateStatus401
  | EditionCreateStatus403
  | EditionCreateStatus404
  | EditionCreateStatus500
  | EditionCreateStatus501;
