/* oxlint-disable */

import type { VoloAbpAspNetCoreMvcApplicationConfigurationsApplicationLocalizationDto } from '../volo/abp/aspNetCore/mvc/applicationConfigurations/ApplicationLocalizationDto'
import type { VoloAbpHttpRemoteServiceErrorResponse } from '../volo/abp/http/RemoteServiceErrorResponse'

export type AbpApplicationLocalizationGetQuery = {
    CultureName: string;
    OnlyDynamics?: boolean;
};

export type AbpApplicationLocalizationGetStatus200Plain = VoloAbpAspNetCoreMvcApplicationConfigurationsApplicationLocalizationDto;

export type AbpApplicationLocalizationGetStatus200Json = VoloAbpAspNetCoreMvcApplicationConfigurationsApplicationLocalizationDto;

export type AbpApplicationLocalizationGetStatus200Json2 = VoloAbpAspNetCoreMvcApplicationConfigurationsApplicationLocalizationDto;

export type AbpApplicationLocalizationGetStatus200 = (AbpApplicationLocalizationGetStatus200Plain | AbpApplicationLocalizationGetStatus200Json | AbpApplicationLocalizationGetStatus200Json2);

export type AbpApplicationLocalizationGetStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type AbpApplicationLocalizationGetStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

export type AbpApplicationLocalizationGetStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type AbpApplicationLocalizationGetStatus400 = (AbpApplicationLocalizationGetStatus400Plain | AbpApplicationLocalizationGetStatus400Json | AbpApplicationLocalizationGetStatus400Json2);

export type AbpApplicationLocalizationGetStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type AbpApplicationLocalizationGetStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

export type AbpApplicationLocalizationGetStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type AbpApplicationLocalizationGetStatus401 = (AbpApplicationLocalizationGetStatus401Plain | AbpApplicationLocalizationGetStatus401Json | AbpApplicationLocalizationGetStatus401Json2);

export type AbpApplicationLocalizationGetStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type AbpApplicationLocalizationGetStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

export type AbpApplicationLocalizationGetStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type AbpApplicationLocalizationGetStatus403 = (AbpApplicationLocalizationGetStatus403Plain | AbpApplicationLocalizationGetStatus403Json | AbpApplicationLocalizationGetStatus403Json2);

export type AbpApplicationLocalizationGetStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type AbpApplicationLocalizationGetStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

export type AbpApplicationLocalizationGetStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type AbpApplicationLocalizationGetStatus404 = (AbpApplicationLocalizationGetStatus404Plain | AbpApplicationLocalizationGetStatus404Json | AbpApplicationLocalizationGetStatus404Json2);

export type AbpApplicationLocalizationGetStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type AbpApplicationLocalizationGetStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

export type AbpApplicationLocalizationGetStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type AbpApplicationLocalizationGetStatus500 = (AbpApplicationLocalizationGetStatus500Plain | AbpApplicationLocalizationGetStatus500Json | AbpApplicationLocalizationGetStatus500Json2);

export type AbpApplicationLocalizationGetStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type AbpApplicationLocalizationGetStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

export type AbpApplicationLocalizationGetStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type AbpApplicationLocalizationGetStatus501 = (AbpApplicationLocalizationGetStatus501Plain | AbpApplicationLocalizationGetStatus501Json | AbpApplicationLocalizationGetStatus501Json2);

export type AbpApplicationLocalizationGetOptions = {
    body?: never;
    path?: never;
    query: AbpApplicationLocalizationGetQuery;
    headers?: never;
};

export type AbpApplicationLocalizationGetResponses = {
    "200": ({
        contentType: "text/plain";
        data: AbpApplicationLocalizationGetStatus200Plain;
    } | {
        contentType: "application/json";
        data: AbpApplicationLocalizationGetStatus200Json;
    } | {
        contentType: "text/json";
        data: AbpApplicationLocalizationGetStatus200Json2;
    });
    "400": ({
        contentType: "text/plain";
        data: AbpApplicationLocalizationGetStatus400Plain;
    } | {
        contentType: "application/json";
        data: AbpApplicationLocalizationGetStatus400Json;
    } | {
        contentType: "text/json";
        data: AbpApplicationLocalizationGetStatus400Json2;
    });
    "401": ({
        contentType: "text/plain";
        data: AbpApplicationLocalizationGetStatus401Plain;
    } | {
        contentType: "application/json";
        data: AbpApplicationLocalizationGetStatus401Json;
    } | {
        contentType: "text/json";
        data: AbpApplicationLocalizationGetStatus401Json2;
    });
    "403": ({
        contentType: "text/plain";
        data: AbpApplicationLocalizationGetStatus403Plain;
    } | {
        contentType: "application/json";
        data: AbpApplicationLocalizationGetStatus403Json;
    } | {
        contentType: "text/json";
        data: AbpApplicationLocalizationGetStatus403Json2;
    });
    "404": ({
        contentType: "text/plain";
        data: AbpApplicationLocalizationGetStatus404Plain;
    } | {
        contentType: "application/json";
        data: AbpApplicationLocalizationGetStatus404Json;
    } | {
        contentType: "text/json";
        data: AbpApplicationLocalizationGetStatus404Json2;
    });
    "500": ({
        contentType: "text/plain";
        data: AbpApplicationLocalizationGetStatus500Plain;
    } | {
        contentType: "application/json";
        data: AbpApplicationLocalizationGetStatus500Json;
    } | {
        contentType: "text/json";
        data: AbpApplicationLocalizationGetStatus500Json2;
    });
    "501": ({
        contentType: "text/plain";
        data: AbpApplicationLocalizationGetStatus501Plain;
    } | {
        contentType: "application/json";
        data: AbpApplicationLocalizationGetStatus501Json;
    } | {
        contentType: "text/json";
        data: AbpApplicationLocalizationGetStatus501Json2;
    });
};

/**
 * @description Union of all possible responses
*/
export type AbpApplicationLocalizationGetResponse = (AbpApplicationLocalizationGetStatus200 | AbpApplicationLocalizationGetStatus400 | AbpApplicationLocalizationGetStatus401 | AbpApplicationLocalizationGetStatus403 | AbpApplicationLocalizationGetStatus404 | AbpApplicationLocalizationGetStatus500 | AbpApplicationLocalizationGetStatus501);
