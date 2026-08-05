/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse.ts";
import type { VoloCmsKitPublicRatingsRatingWithStarCountDto } from "../volo/cmsKit/public/ratings/RatingWithStarCountDto.ts";

/**
 * @type string
 */
export type RatingPublicGetGroupedStarCountsPathEntityType = string;

/**
 * @type string
 */
export type RatingPublicGetGroupedStarCountsPathEntityId = string;

/**
 * @type array
 */
export type RatingPublicGetGroupedStarCountsStatus200Plain =
  VoloCmsKitPublicRatingsRatingWithStarCountDto[];

/**
 * @type array
 */
export type RatingPublicGetGroupedStarCountsStatus200Json =
  VoloCmsKitPublicRatingsRatingWithStarCountDto[];

/**
 * @type array
 */
export type RatingPublicGetGroupedStarCountsStatus200Json2 =
  VoloCmsKitPublicRatingsRatingWithStarCountDto[];

export type RatingPublicGetGroupedStarCountsStatus200 =
  | RatingPublicGetGroupedStarCountsStatus200Plain
  | RatingPublicGetGroupedStarCountsStatus200Json
  | RatingPublicGetGroupedStarCountsStatus200Json2;

/**
 * @type object
 */
export type RatingPublicGetGroupedStarCountsStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type RatingPublicGetGroupedStarCountsStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type RatingPublicGetGroupedStarCountsStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type RatingPublicGetGroupedStarCountsStatus400 =
  | RatingPublicGetGroupedStarCountsStatus400Plain
  | RatingPublicGetGroupedStarCountsStatus400Json
  | RatingPublicGetGroupedStarCountsStatus400Json2;

/**
 * @type object
 */
export type RatingPublicGetGroupedStarCountsStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type RatingPublicGetGroupedStarCountsStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type RatingPublicGetGroupedStarCountsStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type RatingPublicGetGroupedStarCountsStatus401 =
  | RatingPublicGetGroupedStarCountsStatus401Plain
  | RatingPublicGetGroupedStarCountsStatus401Json
  | RatingPublicGetGroupedStarCountsStatus401Json2;

/**
 * @type object
 */
export type RatingPublicGetGroupedStarCountsStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type RatingPublicGetGroupedStarCountsStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type RatingPublicGetGroupedStarCountsStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type RatingPublicGetGroupedStarCountsStatus403 =
  | RatingPublicGetGroupedStarCountsStatus403Plain
  | RatingPublicGetGroupedStarCountsStatus403Json
  | RatingPublicGetGroupedStarCountsStatus403Json2;

/**
 * @type object
 */
export type RatingPublicGetGroupedStarCountsStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type RatingPublicGetGroupedStarCountsStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type RatingPublicGetGroupedStarCountsStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type RatingPublicGetGroupedStarCountsStatus404 =
  | RatingPublicGetGroupedStarCountsStatus404Plain
  | RatingPublicGetGroupedStarCountsStatus404Json
  | RatingPublicGetGroupedStarCountsStatus404Json2;

/**
 * @type object
 */
export type RatingPublicGetGroupedStarCountsStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type RatingPublicGetGroupedStarCountsStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type RatingPublicGetGroupedStarCountsStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type RatingPublicGetGroupedStarCountsStatus500 =
  | RatingPublicGetGroupedStarCountsStatus500Plain
  | RatingPublicGetGroupedStarCountsStatus500Json
  | RatingPublicGetGroupedStarCountsStatus500Json2;

/**
 * @type object
 */
export type RatingPublicGetGroupedStarCountsStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type RatingPublicGetGroupedStarCountsStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type RatingPublicGetGroupedStarCountsStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type RatingPublicGetGroupedStarCountsStatus501 =
  | RatingPublicGetGroupedStarCountsStatus501Plain
  | RatingPublicGetGroupedStarCountsStatus501Json
  | RatingPublicGetGroupedStarCountsStatus501Json2;

/**
 * @type object
 */
export type RatingPublicGetGroupedStarCountsRequestConfig = {
  data?: never;
  /**
   * @type object
   */
  pathParams: {
    entityType: RatingPublicGetGroupedStarCountsPathEntityType;
    entityId: RatingPublicGetGroupedStarCountsPathEntityId;
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
export type RatingPublicGetGroupedStarCountsResponses = {
  "200": RatingPublicGetGroupedStarCountsStatus200;
  "400": RatingPublicGetGroupedStarCountsStatus400;
  "401": RatingPublicGetGroupedStarCountsStatus401;
  "403": RatingPublicGetGroupedStarCountsStatus403;
  "404": RatingPublicGetGroupedStarCountsStatus404;
  "500": RatingPublicGetGroupedStarCountsStatus500;
  "501": RatingPublicGetGroupedStarCountsStatus501;
};

/**
 * @description Union of all possible responses
 */
export type RatingPublicGetGroupedStarCountsResponse =
  | RatingPublicGetGroupedStarCountsStatus200
  | RatingPublicGetGroupedStarCountsStatus400
  | RatingPublicGetGroupedStarCountsStatus401
  | RatingPublicGetGroupedStarCountsStatus403
  | RatingPublicGetGroupedStarCountsStatus404
  | RatingPublicGetGroupedStarCountsStatus500
  | RatingPublicGetGroupedStarCountsStatus501;
