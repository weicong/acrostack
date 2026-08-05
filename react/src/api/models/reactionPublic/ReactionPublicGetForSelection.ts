/* oxlint-disable */

import type { VoloAbpApplicationDtosListResultDto1VoloCmsKitPublicReactionsReactionWithSelectionDtoVoloCmsKitPublicApplicationContractsVersion10500CultureneutralPublicKeyTokennull } from "../volo/abp/application/dtos/listResultDto1Volo/cmsKit/public/reactions/reactionWithSelectionDtoVolo/cmsKit/public/application/ContractsVersion10500CultureneutralPublicKeyTokennull.ts";
import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse.ts";

/**
 * @type string
 */
export type ReactionPublicGetForSelectionPathEntityType = string;

/**
 * @type string
 */
export type ReactionPublicGetForSelectionPathEntityId = string;

/**
 * @type object
 */
export type ReactionPublicGetForSelectionStatus200Plain =
  VoloAbpApplicationDtosListResultDto1VoloCmsKitPublicReactionsReactionWithSelectionDtoVoloCmsKitPublicApplicationContractsVersion10500CultureneutralPublicKeyTokennull;

/**
 * @type object
 */
export type ReactionPublicGetForSelectionStatus200Json =
  VoloAbpApplicationDtosListResultDto1VoloCmsKitPublicReactionsReactionWithSelectionDtoVoloCmsKitPublicApplicationContractsVersion10500CultureneutralPublicKeyTokennull;

/**
 * @type object
 */
export type ReactionPublicGetForSelectionStatus200Json2 =
  VoloAbpApplicationDtosListResultDto1VoloCmsKitPublicReactionsReactionWithSelectionDtoVoloCmsKitPublicApplicationContractsVersion10500CultureneutralPublicKeyTokennull;

export type ReactionPublicGetForSelectionStatus200 =
  | ReactionPublicGetForSelectionStatus200Plain
  | ReactionPublicGetForSelectionStatus200Json
  | ReactionPublicGetForSelectionStatus200Json2;

/**
 * @type object
 */
export type ReactionPublicGetForSelectionStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ReactionPublicGetForSelectionStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ReactionPublicGetForSelectionStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ReactionPublicGetForSelectionStatus400 =
  | ReactionPublicGetForSelectionStatus400Plain
  | ReactionPublicGetForSelectionStatus400Json
  | ReactionPublicGetForSelectionStatus400Json2;

/**
 * @type object
 */
export type ReactionPublicGetForSelectionStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ReactionPublicGetForSelectionStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ReactionPublicGetForSelectionStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ReactionPublicGetForSelectionStatus401 =
  | ReactionPublicGetForSelectionStatus401Plain
  | ReactionPublicGetForSelectionStatus401Json
  | ReactionPublicGetForSelectionStatus401Json2;

/**
 * @type object
 */
export type ReactionPublicGetForSelectionStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ReactionPublicGetForSelectionStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ReactionPublicGetForSelectionStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ReactionPublicGetForSelectionStatus403 =
  | ReactionPublicGetForSelectionStatus403Plain
  | ReactionPublicGetForSelectionStatus403Json
  | ReactionPublicGetForSelectionStatus403Json2;

/**
 * @type object
 */
export type ReactionPublicGetForSelectionStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ReactionPublicGetForSelectionStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ReactionPublicGetForSelectionStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ReactionPublicGetForSelectionStatus404 =
  | ReactionPublicGetForSelectionStatus404Plain
  | ReactionPublicGetForSelectionStatus404Json
  | ReactionPublicGetForSelectionStatus404Json2;

/**
 * @type object
 */
export type ReactionPublicGetForSelectionStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ReactionPublicGetForSelectionStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ReactionPublicGetForSelectionStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ReactionPublicGetForSelectionStatus500 =
  | ReactionPublicGetForSelectionStatus500Plain
  | ReactionPublicGetForSelectionStatus500Json
  | ReactionPublicGetForSelectionStatus500Json2;

/**
 * @type object
 */
export type ReactionPublicGetForSelectionStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ReactionPublicGetForSelectionStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type ReactionPublicGetForSelectionStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ReactionPublicGetForSelectionStatus501 =
  | ReactionPublicGetForSelectionStatus501Plain
  | ReactionPublicGetForSelectionStatus501Json
  | ReactionPublicGetForSelectionStatus501Json2;

/**
 * @type object
 */
export type ReactionPublicGetForSelectionRequestConfig = {
  data?: never;
  /**
   * @type object
   */
  pathParams: {
    entityType: ReactionPublicGetForSelectionPathEntityType;
    entityId: ReactionPublicGetForSelectionPathEntityId;
  };
  queryParams?: never;
  headerParams?: never;
  /**
   * @type string
   */
  url: `/api/cms-kit-public/reactions/${string}/${string}`;
};

/**
 * @type object
 */
export type ReactionPublicGetForSelectionResponses = {
  "200": ReactionPublicGetForSelectionStatus200;
  "400": ReactionPublicGetForSelectionStatus400;
  "401": ReactionPublicGetForSelectionStatus401;
  "403": ReactionPublicGetForSelectionStatus403;
  "404": ReactionPublicGetForSelectionStatus404;
  "500": ReactionPublicGetForSelectionStatus500;
  "501": ReactionPublicGetForSelectionStatus501;
};

/**
 * @description Union of all possible responses
 */
export type ReactionPublicGetForSelectionResponse =
  | ReactionPublicGetForSelectionStatus200
  | ReactionPublicGetForSelectionStatus400
  | ReactionPublicGetForSelectionStatus401
  | ReactionPublicGetForSelectionStatus403
  | ReactionPublicGetForSelectionStatus404
  | ReactionPublicGetForSelectionStatus500
  | ReactionPublicGetForSelectionStatus501;
