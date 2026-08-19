/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from '../volo/abp/http/RemoteServiceErrorResponse'
import type { VoloCmsKitPublicRatingsCreateUpdateRatingInput } from '../volo/cmsKit/public/ratings/CreateUpdateRatingInput'
import type { VoloCmsKitPublicRatingsRatingDto } from '../volo/cmsKit/public/ratings/RatingDto'

export type RatingPublicCreatePath = {
    entityType: string;
    entityId: string;
};

export type RatingPublicCreateStatus200Plain = VoloCmsKitPublicRatingsRatingDto;

export type RatingPublicCreateStatus200Json = VoloCmsKitPublicRatingsRatingDto;

export type RatingPublicCreateStatus200Json2 = VoloCmsKitPublicRatingsRatingDto;

export type RatingPublicCreateStatus200 = (RatingPublicCreateStatus200Plain | RatingPublicCreateStatus200Json | RatingPublicCreateStatus200Json2);

export type RatingPublicCreateStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type RatingPublicCreateStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

export type RatingPublicCreateStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type RatingPublicCreateStatus400 = (RatingPublicCreateStatus400Plain | RatingPublicCreateStatus400Json | RatingPublicCreateStatus400Json2);

export type RatingPublicCreateStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type RatingPublicCreateStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

export type RatingPublicCreateStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type RatingPublicCreateStatus401 = (RatingPublicCreateStatus401Plain | RatingPublicCreateStatus401Json | RatingPublicCreateStatus401Json2);

export type RatingPublicCreateStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type RatingPublicCreateStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

export type RatingPublicCreateStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type RatingPublicCreateStatus403 = (RatingPublicCreateStatus403Plain | RatingPublicCreateStatus403Json | RatingPublicCreateStatus403Json2);

export type RatingPublicCreateStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type RatingPublicCreateStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

export type RatingPublicCreateStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type RatingPublicCreateStatus404 = (RatingPublicCreateStatus404Plain | RatingPublicCreateStatus404Json | RatingPublicCreateStatus404Json2);

export type RatingPublicCreateStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type RatingPublicCreateStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

export type RatingPublicCreateStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type RatingPublicCreateStatus500 = (RatingPublicCreateStatus500Plain | RatingPublicCreateStatus500Json | RatingPublicCreateStatus500Json2);

export type RatingPublicCreateStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type RatingPublicCreateStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

export type RatingPublicCreateStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type RatingPublicCreateStatus501 = (RatingPublicCreateStatus501Plain | RatingPublicCreateStatus501Json | RatingPublicCreateStatus501Json2);

export type RatingPublicCreateBodyJson = VoloCmsKitPublicRatingsCreateUpdateRatingInput | undefined;

export type RatingPublicCreateBodyJson2 = VoloCmsKitPublicRatingsCreateUpdateRatingInput | undefined;

export type RatingPublicCreateBodyJson3 = VoloCmsKitPublicRatingsCreateUpdateRatingInput | undefined;

export type RatingPublicCreateBody = (RatingPublicCreateBodyJson | RatingPublicCreateBodyJson2 | RatingPublicCreateBodyJson3);

export type RatingPublicCreateOptions = {
    body: RatingPublicCreateBody;
    path: RatingPublicCreatePath;
    query?: never;
    headers?: never;
};

export type RatingPublicCreateResponses = {
    "200": ({
        contentType: "text/plain";
        data: RatingPublicCreateStatus200Plain;
    } | {
        contentType: "application/json";
        data: RatingPublicCreateStatus200Json;
    } | {
        contentType: "text/json";
        data: RatingPublicCreateStatus200Json2;
    });
    "400": ({
        contentType: "text/plain";
        data: RatingPublicCreateStatus400Plain;
    } | {
        contentType: "application/json";
        data: RatingPublicCreateStatus400Json;
    } | {
        contentType: "text/json";
        data: RatingPublicCreateStatus400Json2;
    });
    "401": ({
        contentType: "text/plain";
        data: RatingPublicCreateStatus401Plain;
    } | {
        contentType: "application/json";
        data: RatingPublicCreateStatus401Json;
    } | {
        contentType: "text/json";
        data: RatingPublicCreateStatus401Json2;
    });
    "403": ({
        contentType: "text/plain";
        data: RatingPublicCreateStatus403Plain;
    } | {
        contentType: "application/json";
        data: RatingPublicCreateStatus403Json;
    } | {
        contentType: "text/json";
        data: RatingPublicCreateStatus403Json2;
    });
    "404": ({
        contentType: "text/plain";
        data: RatingPublicCreateStatus404Plain;
    } | {
        contentType: "application/json";
        data: RatingPublicCreateStatus404Json;
    } | {
        contentType: "text/json";
        data: RatingPublicCreateStatus404Json2;
    });
    "500": ({
        contentType: "text/plain";
        data: RatingPublicCreateStatus500Plain;
    } | {
        contentType: "application/json";
        data: RatingPublicCreateStatus500Json;
    } | {
        contentType: "text/json";
        data: RatingPublicCreateStatus500Json2;
    });
    "501": ({
        contentType: "text/plain";
        data: RatingPublicCreateStatus501Plain;
    } | {
        contentType: "application/json";
        data: RatingPublicCreateStatus501Json;
    } | {
        contentType: "text/json";
        data: RatingPublicCreateStatus501Json2;
    });
};

/**
 * @description Union of all possible responses
*/
export type RatingPublicCreateResponse = (RatingPublicCreateStatus200 | RatingPublicCreateStatus400 | RatingPublicCreateStatus401 | RatingPublicCreateStatus403 | RatingPublicCreateStatus404 | RatingPublicCreateStatus500 | RatingPublicCreateStatus501);
