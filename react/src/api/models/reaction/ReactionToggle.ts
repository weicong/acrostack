/* oxlint-disable */

import type { AcroStackServicesDtosCmsCreateReactionInput } from "../acroStack/services/dtos/cms/CreateReactionInput.ts";
import type { AcroStackServicesDtosCmsReactionSummaryDto } from "../acroStack/services/dtos/cms/ReactionSummaryDto.ts";
import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse.ts";

/**
 * @type object
 */
export type ReactionToggleStatus200Plain = AcroStackServicesDtosCmsReactionSummaryDto;

/**
 * @type object
 */
export type ReactionToggleStatus200Json = AcroStackServicesDtosCmsReactionSummaryDto;

/**
 * @type object
 */
export type ReactionToggleStatus200Json2 = AcroStackServicesDtosCmsReactionSummaryDto;

export type ReactionToggleStatus200 =
  | ReactionToggleStatus200Plain
  | ReactionToggleStatus200Json
  | ReactionToggleStatus200Json2;

/**
 * @type object
 */
export type ReactionToggleStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ReactionToggleStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ReactionToggleStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ReactionToggleStatus400 =
  | ReactionToggleStatus400Plain
  | ReactionToggleStatus400Json
  | ReactionToggleStatus400Json2;

/**
 * @type object
 */
export type ReactionToggleStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ReactionToggleStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ReactionToggleStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ReactionToggleStatus401 =
  | ReactionToggleStatus401Plain
  | ReactionToggleStatus401Json
  | ReactionToggleStatus401Json2;

/**
 * @type object
 */
export type ReactionToggleStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ReactionToggleStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ReactionToggleStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ReactionToggleStatus403 =
  | ReactionToggleStatus403Plain
  | ReactionToggleStatus403Json
  | ReactionToggleStatus403Json2;

/**
 * @type object
 */
export type ReactionToggleStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ReactionToggleStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ReactionToggleStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ReactionToggleStatus404 =
  | ReactionToggleStatus404Plain
  | ReactionToggleStatus404Json
  | ReactionToggleStatus404Json2;

/**
 * @type object
 */
export type ReactionToggleStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ReactionToggleStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ReactionToggleStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ReactionToggleStatus500 =
  | ReactionToggleStatus500Plain
  | ReactionToggleStatus500Json
  | ReactionToggleStatus500Json2;

/**
 * @type object
 */
export type ReactionToggleStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ReactionToggleStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ReactionToggleStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ReactionToggleStatus501 =
  | ReactionToggleStatus501Plain
  | ReactionToggleStatus501Json
  | ReactionToggleStatus501Json2;

/**
 * @type object | undefined
 */
export type ReactionToggleJsonData = AcroStackServicesDtosCmsCreateReactionInput | undefined;

/**
 * @type object | undefined
 */
export type ReactionToggleJson2Data = AcroStackServicesDtosCmsCreateReactionInput | undefined;

/**
 * @type object | undefined
 */
export type ReactionToggleJson3Data = AcroStackServicesDtosCmsCreateReactionInput | undefined;

export type ReactionToggleData =
  | ReactionToggleJsonData
  | ReactionToggleJson2Data
  | ReactionToggleJson3Data;

/**
 * @type object
 */
export type ReactionToggleRequestConfig = {
  data?: ReactionToggleData;
  pathParams?: never;
  queryParams?: never;
  headerParams?: never;
  /**
   * @type string
   */
  url: "/api/app/reaction/toggle";
};

/**
 * @type object
 */
export type ReactionToggleResponses = {
  "200": ReactionToggleStatus200;
  "400": ReactionToggleStatus400;
  "401": ReactionToggleStatus401;
  "403": ReactionToggleStatus403;
  "404": ReactionToggleStatus404;
  "500": ReactionToggleStatus500;
  "501": ReactionToggleStatus501;
};

/**
 * @description Union of all possible responses
 */
export type ReactionToggleResponse =
  | ReactionToggleStatus200
  | ReactionToggleStatus400
  | ReactionToggleStatus401
  | ReactionToggleStatus403
  | ReactionToggleStatus404
  | ReactionToggleStatus500
  | ReactionToggleStatus501;
