/* oxlint-disable */

import type { VoloAbpFeatureManagementGetFeatureListResultDto } from '../volo/abp/featureManagement/GetFeatureListResultDto'
import type { VoloAbpHttpRemoteServiceErrorResponse } from '../volo/abp/http/RemoteServiceErrorResponse'

export type FeaturesGetQuery = {
    providerName?: string;
    providerKey?: string;
};

export type FeaturesGetStatus200Plain = VoloAbpFeatureManagementGetFeatureListResultDto;

export type FeaturesGetStatus200Json = VoloAbpFeatureManagementGetFeatureListResultDto;

export type FeaturesGetStatus200Json2 = VoloAbpFeatureManagementGetFeatureListResultDto;

export type FeaturesGetStatus200 = (FeaturesGetStatus200Plain | FeaturesGetStatus200Json | FeaturesGetStatus200Json2);

export type FeaturesGetStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type FeaturesGetStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

export type FeaturesGetStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type FeaturesGetStatus400 = (FeaturesGetStatus400Plain | FeaturesGetStatus400Json | FeaturesGetStatus400Json2);

export type FeaturesGetStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type FeaturesGetStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

export type FeaturesGetStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type FeaturesGetStatus401 = (FeaturesGetStatus401Plain | FeaturesGetStatus401Json | FeaturesGetStatus401Json2);

export type FeaturesGetStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type FeaturesGetStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

export type FeaturesGetStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type FeaturesGetStatus403 = (FeaturesGetStatus403Plain | FeaturesGetStatus403Json | FeaturesGetStatus403Json2);

export type FeaturesGetStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type FeaturesGetStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

export type FeaturesGetStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type FeaturesGetStatus404 = (FeaturesGetStatus404Plain | FeaturesGetStatus404Json | FeaturesGetStatus404Json2);

export type FeaturesGetStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type FeaturesGetStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

export type FeaturesGetStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type FeaturesGetStatus500 = (FeaturesGetStatus500Plain | FeaturesGetStatus500Json | FeaturesGetStatus500Json2);

export type FeaturesGetStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type FeaturesGetStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

export type FeaturesGetStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type FeaturesGetStatus501 = (FeaturesGetStatus501Plain | FeaturesGetStatus501Json | FeaturesGetStatus501Json2);

export type FeaturesGetOptions = {
    body?: never;
    path?: never;
    query?: FeaturesGetQuery;
    headers?: never;
};

export type FeaturesGetResponses = {
    "200": ({
        contentType: "text/plain";
        data: FeaturesGetStatus200Plain;
    } | {
        contentType: "application/json";
        data: FeaturesGetStatus200Json;
    } | {
        contentType: "text/json";
        data: FeaturesGetStatus200Json2;
    });
    "400": ({
        contentType: "text/plain";
        data: FeaturesGetStatus400Plain;
    } | {
        contentType: "application/json";
        data: FeaturesGetStatus400Json;
    } | {
        contentType: "text/json";
        data: FeaturesGetStatus400Json2;
    });
    "401": ({
        contentType: "text/plain";
        data: FeaturesGetStatus401Plain;
    } | {
        contentType: "application/json";
        data: FeaturesGetStatus401Json;
    } | {
        contentType: "text/json";
        data: FeaturesGetStatus401Json2;
    });
    "403": ({
        contentType: "text/plain";
        data: FeaturesGetStatus403Plain;
    } | {
        contentType: "application/json";
        data: FeaturesGetStatus403Json;
    } | {
        contentType: "text/json";
        data: FeaturesGetStatus403Json2;
    });
    "404": ({
        contentType: "text/plain";
        data: FeaturesGetStatus404Plain;
    } | {
        contentType: "application/json";
        data: FeaturesGetStatus404Json;
    } | {
        contentType: "text/json";
        data: FeaturesGetStatus404Json2;
    });
    "500": ({
        contentType: "text/plain";
        data: FeaturesGetStatus500Plain;
    } | {
        contentType: "application/json";
        data: FeaturesGetStatus500Json;
    } | {
        contentType: "text/json";
        data: FeaturesGetStatus500Json2;
    });
    "501": ({
        contentType: "text/plain";
        data: FeaturesGetStatus501Plain;
    } | {
        contentType: "application/json";
        data: FeaturesGetStatus501Json;
    } | {
        contentType: "text/json";
        data: FeaturesGetStatus501Json2;
    });
};

/**
 * @description Union of all possible responses
*/
export type FeaturesGetResponse = (FeaturesGetStatus200 | FeaturesGetStatus400 | FeaturesGetStatus401 | FeaturesGetStatus403 | FeaturesGetStatus404 | FeaturesGetStatus500 | FeaturesGetStatus501);
