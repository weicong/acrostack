/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse";
import type { VoloCmsKitPublicRatingsRatingWithStarCountDto } from "../volo/cmsKit/public/ratings/RatingWithStarCountDto";

export type RatingPublicGetGroupedStarCountsPath = {
  entityType: string;
  entityId: string;
};

export type RatingPublicGetGroupedStarCountsStatus200Plain =
  VoloCmsKitPublicRatingsRatingWithStarCountDto[];

export type RatingPublicGetGroupedStarCountsStatus200Json =
  VoloCmsKitPublicRatingsRatingWithStarCountDto[];

export type RatingPublicGetGroupedStarCountsStatus200Json2 =
  VoloCmsKitPublicRatingsRatingWithStarCountDto[];

export type RatingPublicGetGroupedStarCountsStatus200 =
  | RatingPublicGetGroupedStarCountsStatus200Plain
  | RatingPublicGetGroupedStarCountsStatus200Json
  | RatingPublicGetGroupedStarCountsStatus200Json2;

export type RatingPublicGetGroupedStarCountsStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type RatingPublicGetGroupedStarCountsStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

export type RatingPublicGetGroupedStarCountsStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type RatingPublicGetGroupedStarCountsStatus400 =
  | RatingPublicGetGroupedStarCountsStatus400Plain
  | RatingPublicGetGroupedStarCountsStatus400Json
  | RatingPublicGetGroupedStarCountsStatus400Json2;

export type RatingPublicGetGroupedStarCountsStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type RatingPublicGetGroupedStarCountsStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

export type RatingPublicGetGroupedStarCountsStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type RatingPublicGetGroupedStarCountsStatus401 =
  | RatingPublicGetGroupedStarCountsStatus401Plain
  | RatingPublicGetGroupedStarCountsStatus401Json
  | RatingPublicGetGroupedStarCountsStatus401Json2;

export type RatingPublicGetGroupedStarCountsStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type RatingPublicGetGroupedStarCountsStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

export type RatingPublicGetGroupedStarCountsStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type RatingPublicGetGroupedStarCountsStatus403 =
  | RatingPublicGetGroupedStarCountsStatus403Plain
  | RatingPublicGetGroupedStarCountsStatus403Json
  | RatingPublicGetGroupedStarCountsStatus403Json2;

export type RatingPublicGetGroupedStarCountsStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type RatingPublicGetGroupedStarCountsStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

export type RatingPublicGetGroupedStarCountsStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type RatingPublicGetGroupedStarCountsStatus404 =
  | RatingPublicGetGroupedStarCountsStatus404Plain
  | RatingPublicGetGroupedStarCountsStatus404Json
  | RatingPublicGetGroupedStarCountsStatus404Json2;

export type RatingPublicGetGroupedStarCountsStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type RatingPublicGetGroupedStarCountsStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

export type RatingPublicGetGroupedStarCountsStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type RatingPublicGetGroupedStarCountsStatus500 =
  | RatingPublicGetGroupedStarCountsStatus500Plain
  | RatingPublicGetGroupedStarCountsStatus500Json
  | RatingPublicGetGroupedStarCountsStatus500Json2;

export type RatingPublicGetGroupedStarCountsStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type RatingPublicGetGroupedStarCountsStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

export type RatingPublicGetGroupedStarCountsStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type RatingPublicGetGroupedStarCountsStatus501 =
  | RatingPublicGetGroupedStarCountsStatus501Plain
  | RatingPublicGetGroupedStarCountsStatus501Json
  | RatingPublicGetGroupedStarCountsStatus501Json2;

export type RatingPublicGetGroupedStarCountsOptions = {
  body?: never;
  path: RatingPublicGetGroupedStarCountsPath;
  query?: never;
  headers?: never;
};

export type RatingPublicGetGroupedStarCountsResponses = {
  "200":
    | {
        contentType: "text/plain";
        data: RatingPublicGetGroupedStarCountsStatus200Plain;
      }
    | {
        contentType: "application/json";
        data: RatingPublicGetGroupedStarCountsStatus200Json;
      }
    | {
        contentType: "text/json";
        data: RatingPublicGetGroupedStarCountsStatus200Json2;
      };
  "400":
    | {
        contentType: "text/plain";
        data: RatingPublicGetGroupedStarCountsStatus400Plain;
      }
    | {
        contentType: "application/json";
        data: RatingPublicGetGroupedStarCountsStatus400Json;
      }
    | {
        contentType: "text/json";
        data: RatingPublicGetGroupedStarCountsStatus400Json2;
      };
  "401":
    | {
        contentType: "text/plain";
        data: RatingPublicGetGroupedStarCountsStatus401Plain;
      }
    | {
        contentType: "application/json";
        data: RatingPublicGetGroupedStarCountsStatus401Json;
      }
    | {
        contentType: "text/json";
        data: RatingPublicGetGroupedStarCountsStatus401Json2;
      };
  "403":
    | {
        contentType: "text/plain";
        data: RatingPublicGetGroupedStarCountsStatus403Plain;
      }
    | {
        contentType: "application/json";
        data: RatingPublicGetGroupedStarCountsStatus403Json;
      }
    | {
        contentType: "text/json";
        data: RatingPublicGetGroupedStarCountsStatus403Json2;
      };
  "404":
    | {
        contentType: "text/plain";
        data: RatingPublicGetGroupedStarCountsStatus404Plain;
      }
    | {
        contentType: "application/json";
        data: RatingPublicGetGroupedStarCountsStatus404Json;
      }
    | {
        contentType: "text/json";
        data: RatingPublicGetGroupedStarCountsStatus404Json2;
      };
  "500":
    | {
        contentType: "text/plain";
        data: RatingPublicGetGroupedStarCountsStatus500Plain;
      }
    | {
        contentType: "application/json";
        data: RatingPublicGetGroupedStarCountsStatus500Json;
      }
    | {
        contentType: "text/json";
        data: RatingPublicGetGroupedStarCountsStatus500Json2;
      };
  "501":
    | {
        contentType: "text/plain";
        data: RatingPublicGetGroupedStarCountsStatus501Plain;
      }
    | {
        contentType: "application/json";
        data: RatingPublicGetGroupedStarCountsStatus501Json;
      }
    | {
        contentType: "text/json";
        data: RatingPublicGetGroupedStarCountsStatus501Json2;
      };
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
