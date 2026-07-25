/* oxlint-disable */

import type { AcroStackServicesDtosSaaSCreateUpdateEditionDto } from "../acroStack/services/dtos/saaS/CreateUpdateEditionDto.ts";
import type { AcroStackServicesDtosSaaSEditionDto } from "../acroStack/services/dtos/saaS/EditionDto.ts";
import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse.ts";

/**
 * @description
 * Format: `uuid`
 * @type string
 */
export type EditionUpdatePathId = string;

/**
 * @type object
 */
export type EditionUpdateStatus200Plain = AcroStackServicesDtosSaaSEditionDto;

/**
 * @type object
 */
export type EditionUpdateStatus200Json = AcroStackServicesDtosSaaSEditionDto;

/**
 * @type object
 */
export type EditionUpdateStatus200Json2 = AcroStackServicesDtosSaaSEditionDto;

export type EditionUpdateStatus200 =
  | EditionUpdateStatus200Plain
  | EditionUpdateStatus200Json
  | EditionUpdateStatus200Json2;

/**
 * @type object
 */
export type EditionUpdateStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type EditionUpdateStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type EditionUpdateStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type EditionUpdateStatus400 =
  | EditionUpdateStatus400Plain
  | EditionUpdateStatus400Json
  | EditionUpdateStatus400Json2;

/**
 * @type object
 */
export type EditionUpdateStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type EditionUpdateStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type EditionUpdateStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type EditionUpdateStatus401 =
  | EditionUpdateStatus401Plain
  | EditionUpdateStatus401Json
  | EditionUpdateStatus401Json2;

/**
 * @type object
 */
export type EditionUpdateStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type EditionUpdateStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type EditionUpdateStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type EditionUpdateStatus403 =
  | EditionUpdateStatus403Plain
  | EditionUpdateStatus403Json
  | EditionUpdateStatus403Json2;

/**
 * @type object
 */
export type EditionUpdateStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type EditionUpdateStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type EditionUpdateStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type EditionUpdateStatus404 =
  | EditionUpdateStatus404Plain
  | EditionUpdateStatus404Json
  | EditionUpdateStatus404Json2;

/**
 * @type object
 */
export type EditionUpdateStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type EditionUpdateStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type EditionUpdateStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type EditionUpdateStatus500 =
  | EditionUpdateStatus500Plain
  | EditionUpdateStatus500Json
  | EditionUpdateStatus500Json2;

/**
 * @type object
 */
export type EditionUpdateStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type EditionUpdateStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type EditionUpdateStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type EditionUpdateStatus501 =
  | EditionUpdateStatus501Plain
  | EditionUpdateStatus501Json
  | EditionUpdateStatus501Json2;

/**
 * @type object | undefined
 */
export type EditionUpdateJsonData = AcroStackServicesDtosSaaSCreateUpdateEditionDto | undefined;

/**
 * @type object | undefined
 */
export type EditionUpdateJson2Data = AcroStackServicesDtosSaaSCreateUpdateEditionDto | undefined;

/**
 * @type object | undefined
 */
export type EditionUpdateJson3Data = AcroStackServicesDtosSaaSCreateUpdateEditionDto | undefined;

export type EditionUpdateData =
  | EditionUpdateJsonData
  | EditionUpdateJson2Data
  | EditionUpdateJson3Data;

/**
 * @type object
 */
export type EditionUpdateRequestConfig = {
  data?: EditionUpdateData;
  /**
   * @type object
   */
  pathParams: {
    id: EditionUpdatePathId;
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
export type EditionUpdateResponses = {
  "200": EditionUpdateStatus200;
  "400": EditionUpdateStatus400;
  "401": EditionUpdateStatus401;
  "403": EditionUpdateStatus403;
  "404": EditionUpdateStatus404;
  "500": EditionUpdateStatus500;
  "501": EditionUpdateStatus501;
};

/**
 * @description Union of all possible responses
 */
export type EditionUpdateResponse =
  | EditionUpdateStatus200
  | EditionUpdateStatus400
  | EditionUpdateStatus401
  | EditionUpdateStatus403
  | EditionUpdateStatus404
  | EditionUpdateStatus500
  | EditionUpdateStatus501;
