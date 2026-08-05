/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse.ts";
import type { VoloCmsKitPublicRatingsCreateUpdateRatingInput } from "../volo/cmsKit/public/ratings/CreateUpdateRatingInput.ts";
import type { VoloCmsKitPublicRatingsRatingDto } from "../volo/cmsKit/public/ratings/RatingDto.ts";

/**
 * @type string
 */
export type RatingPublicCreatePathEntityType = string;

/**
 * @type string
 */
export type RatingPublicCreatePathEntityId = string;

/**
 * @type object
 */
export type RatingPublicCreateStatus200Plain = VoloCmsKitPublicRatingsRatingDto;

/**
 * @type object
 */
export type RatingPublicCreateStatus200Json = VoloCmsKitPublicRatingsRatingDto;

/**
 * @type object
 */
export type RatingPublicCreateStatus200Json2 = VoloCmsKitPublicRatingsRatingDto;

export type RatingPublicCreateStatus200 =
  | RatingPublicCreateStatus200Plain
  | RatingPublicCreateStatus200Json
  | RatingPublicCreateStatus200Json2;

/**
 * @type object
 */
export type RatingPublicCreateStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type RatingPublicCreateStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type RatingPublicCreateStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type RatingPublicCreateStatus400 =
  | RatingPublicCreateStatus400Plain
  | RatingPublicCreateStatus400Json
  | RatingPublicCreateStatus400Json2;

/**
 * @type object
 */
export type RatingPublicCreateStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type RatingPublicCreateStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type RatingPublicCreateStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type RatingPublicCreateStatus401 =
  | RatingPublicCreateStatus401Plain
  | RatingPublicCreateStatus401Json
  | RatingPublicCreateStatus401Json2;

/**
 * @type object
 */
export type RatingPublicCreateStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type RatingPublicCreateStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type RatingPublicCreateStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type RatingPublicCreateStatus403 =
  | RatingPublicCreateStatus403Plain
  | RatingPublicCreateStatus403Json
  | RatingPublicCreateStatus403Json2;

/**
 * @type object
 */
export type RatingPublicCreateStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type RatingPublicCreateStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type RatingPublicCreateStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type RatingPublicCreateStatus404 =
  | RatingPublicCreateStatus404Plain
  | RatingPublicCreateStatus404Json
  | RatingPublicCreateStatus404Json2;

/**
 * @type object
 */
export type RatingPublicCreateStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type RatingPublicCreateStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type RatingPublicCreateStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type RatingPublicCreateStatus500 =
  | RatingPublicCreateStatus500Plain
  | RatingPublicCreateStatus500Json
  | RatingPublicCreateStatus500Json2;

/**
 * @type object
 */
export type RatingPublicCreateStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type RatingPublicCreateStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type RatingPublicCreateStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type RatingPublicCreateStatus501 =
  | RatingPublicCreateStatus501Plain
  | RatingPublicCreateStatus501Json
  | RatingPublicCreateStatus501Json2;

/**
 * @type object | undefined
 */
export type RatingPublicCreateJsonData = VoloCmsKitPublicRatingsCreateUpdateRatingInput | undefined;

/**
 * @type object | undefined
 */
export type RatingPublicCreateJson2Data =
  | VoloCmsKitPublicRatingsCreateUpdateRatingInput
  | undefined;

/**
 * @type object | undefined
 */
export type RatingPublicCreateJson3Data =
  | VoloCmsKitPublicRatingsCreateUpdateRatingInput
  | undefined;

export type RatingPublicCreateData =
  | RatingPublicCreateJsonData
  | RatingPublicCreateJson2Data
  | RatingPublicCreateJson3Data;

/**
 * @type object
 */
export type RatingPublicCreateRequestConfig = {
  data?: RatingPublicCreateData;
  /**
   * @type object
   */
  pathParams: {
    entityType: RatingPublicCreatePathEntityType;
    entityId: RatingPublicCreatePathEntityId;
  };
  queryParams?: never;
  headerParams?: never;
  /**
   * @type string
   */
  url: `/api/cms-kit-public/ratings/${string}/${string}`;
};

/**
 * @type object
 */
export type RatingPublicCreateResponses = {
  "200": RatingPublicCreateStatus200;
  "400": RatingPublicCreateStatus400;
  "401": RatingPublicCreateStatus401;
  "403": RatingPublicCreateStatus403;
  "404": RatingPublicCreateStatus404;
  "500": RatingPublicCreateStatus500;
  "501": RatingPublicCreateStatus501;
};

/**
 * @description Union of all possible responses
 */
export type RatingPublicCreateResponse =
  | RatingPublicCreateStatus200
  | RatingPublicCreateStatus400
  | RatingPublicCreateStatus401
  | RatingPublicCreateStatus403
  | RatingPublicCreateStatus404
  | RatingPublicCreateStatus500
  | RatingPublicCreateStatus501;
