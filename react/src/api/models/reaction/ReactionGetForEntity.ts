/* oxlint-disable */

import type { AcroStackServicesDtosCmsReactionSummaryDto } from "../acroStack/services/dtos/cms/ReactionSummaryDto.ts";
import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse.ts";

/**
 * @type string | undefined
 */
export type ReactionGetForEntityQueryEntityType = string | undefined;

/**
 * @description
 * Format: `uuid`
 * @type string
 */
export type ReactionGetForEntityPathEntityId = string;

/**
 * @type object
 */
export type ReactionGetForEntityStatus200Plain = AcroStackServicesDtosCmsReactionSummaryDto;

/**
 * @type object
 */
export type ReactionGetForEntityStatus200Json = AcroStackServicesDtosCmsReactionSummaryDto;

/**
 * @type object
 */
export type ReactionGetForEntityStatus200Json2 = AcroStackServicesDtosCmsReactionSummaryDto;

export type ReactionGetForEntityStatus200 =
  | ReactionGetForEntityStatus200Plain
  | ReactionGetForEntityStatus200Json
  | ReactionGetForEntityStatus200Json2;

/**
 * @type object
 */
export type ReactionGetForEntityStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ReactionGetForEntityStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ReactionGetForEntityStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ReactionGetForEntityStatus400 =
  | ReactionGetForEntityStatus400Plain
  | ReactionGetForEntityStatus400Json
  | ReactionGetForEntityStatus400Json2;

/**
 * @type object
 */
export type ReactionGetForEntityStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ReactionGetForEntityStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ReactionGetForEntityStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ReactionGetForEntityStatus401 =
  | ReactionGetForEntityStatus401Plain
  | ReactionGetForEntityStatus401Json
  | ReactionGetForEntityStatus401Json2;

/**
 * @type object
 */
export type ReactionGetForEntityStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ReactionGetForEntityStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ReactionGetForEntityStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ReactionGetForEntityStatus403 =
  | ReactionGetForEntityStatus403Plain
  | ReactionGetForEntityStatus403Json
  | ReactionGetForEntityStatus403Json2;

/**
 * @type object
 */
export type ReactionGetForEntityStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ReactionGetForEntityStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ReactionGetForEntityStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ReactionGetForEntityStatus404 =
  | ReactionGetForEntityStatus404Plain
  | ReactionGetForEntityStatus404Json
  | ReactionGetForEntityStatus404Json2;

/**
 * @type object
 */
export type ReactionGetForEntityStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ReactionGetForEntityStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ReactionGetForEntityStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ReactionGetForEntityStatus500 =
  | ReactionGetForEntityStatus500Plain
  | ReactionGetForEntityStatus500Json
  | ReactionGetForEntityStatus500Json2;

/**
 * @type object
 */
export type ReactionGetForEntityStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ReactionGetForEntityStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ReactionGetForEntityStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ReactionGetForEntityStatus501 =
  | ReactionGetForEntityStatus501Plain
  | ReactionGetForEntityStatus501Json
  | ReactionGetForEntityStatus501Json2;

/**
 * @type object
 */
export type ReactionGetForEntityRequestConfig = {
  data?: never;
  /**
   * @type object
   */
  pathParams: {
    entityId: ReactionGetForEntityPathEntityId;
  };
  /**
   * @type object | undefined
   */
  queryParams?: {
    entityType?: ReactionGetForEntityQueryEntityType;
  };
  headerParams?: never;
  /**
   * @type string
   */
  url: `/api/app/reaction/for-entity/${string}`;
};

/**
 * @type object
 */
export type ReactionGetForEntityResponses = {
  "200": ReactionGetForEntityStatus200;
  "400": ReactionGetForEntityStatus400;
  "401": ReactionGetForEntityStatus401;
  "403": ReactionGetForEntityStatus403;
  "404": ReactionGetForEntityStatus404;
  "500": ReactionGetForEntityStatus500;
  "501": ReactionGetForEntityStatus501;
};

/**
 * @description Union of all possible responses
 */
export type ReactionGetForEntityResponse =
  | ReactionGetForEntityStatus200
  | ReactionGetForEntityStatus400
  | ReactionGetForEntityStatus401
  | ReactionGetForEntityStatus403
  | ReactionGetForEntityStatus404
  | ReactionGetForEntityStatus500
  | ReactionGetForEntityStatus501;
