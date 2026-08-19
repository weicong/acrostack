/* oxlint-disable */

import type { VoloAbpAspNetCoreMvcMultiTenancyFindTenantResultDto } from '../volo/abp/aspNetCore/mvc/multiTenancy/FindTenantResultDto'
import type { VoloAbpHttpRemoteServiceErrorResponse } from '../volo/abp/http/RemoteServiceErrorResponse'

export type AbpTenantFindTenantByNamePath = {
    name: string;
};

export type AbpTenantFindTenantByNameStatus200Plain = VoloAbpAspNetCoreMvcMultiTenancyFindTenantResultDto;

export type AbpTenantFindTenantByNameStatus200Json = VoloAbpAspNetCoreMvcMultiTenancyFindTenantResultDto;

export type AbpTenantFindTenantByNameStatus200Json2 = VoloAbpAspNetCoreMvcMultiTenancyFindTenantResultDto;

export type AbpTenantFindTenantByNameStatus200 = (AbpTenantFindTenantByNameStatus200Plain | AbpTenantFindTenantByNameStatus200Json | AbpTenantFindTenantByNameStatus200Json2);

export type AbpTenantFindTenantByNameStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type AbpTenantFindTenantByNameStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

export type AbpTenantFindTenantByNameStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type AbpTenantFindTenantByNameStatus400 = (AbpTenantFindTenantByNameStatus400Plain | AbpTenantFindTenantByNameStatus400Json | AbpTenantFindTenantByNameStatus400Json2);

export type AbpTenantFindTenantByNameStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type AbpTenantFindTenantByNameStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

export type AbpTenantFindTenantByNameStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type AbpTenantFindTenantByNameStatus401 = (AbpTenantFindTenantByNameStatus401Plain | AbpTenantFindTenantByNameStatus401Json | AbpTenantFindTenantByNameStatus401Json2);

export type AbpTenantFindTenantByNameStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type AbpTenantFindTenantByNameStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

export type AbpTenantFindTenantByNameStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type AbpTenantFindTenantByNameStatus403 = (AbpTenantFindTenantByNameStatus403Plain | AbpTenantFindTenantByNameStatus403Json | AbpTenantFindTenantByNameStatus403Json2);

export type AbpTenantFindTenantByNameStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type AbpTenantFindTenantByNameStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

export type AbpTenantFindTenantByNameStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type AbpTenantFindTenantByNameStatus404 = (AbpTenantFindTenantByNameStatus404Plain | AbpTenantFindTenantByNameStatus404Json | AbpTenantFindTenantByNameStatus404Json2);

export type AbpTenantFindTenantByNameStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type AbpTenantFindTenantByNameStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

export type AbpTenantFindTenantByNameStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type AbpTenantFindTenantByNameStatus500 = (AbpTenantFindTenantByNameStatus500Plain | AbpTenantFindTenantByNameStatus500Json | AbpTenantFindTenantByNameStatus500Json2);

export type AbpTenantFindTenantByNameStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type AbpTenantFindTenantByNameStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

export type AbpTenantFindTenantByNameStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type AbpTenantFindTenantByNameStatus501 = (AbpTenantFindTenantByNameStatus501Plain | AbpTenantFindTenantByNameStatus501Json | AbpTenantFindTenantByNameStatus501Json2);

export type AbpTenantFindTenantByNameOptions = {
    body?: never;
    path: AbpTenantFindTenantByNamePath;
    query?: never;
    headers?: never;
};

export type AbpTenantFindTenantByNameResponses = {
    "200": ({
        contentType: "text/plain";
        data: AbpTenantFindTenantByNameStatus200Plain;
    } | {
        contentType: "application/json";
        data: AbpTenantFindTenantByNameStatus200Json;
    } | {
        contentType: "text/json";
        data: AbpTenantFindTenantByNameStatus200Json2;
    });
    "400": ({
        contentType: "text/plain";
        data: AbpTenantFindTenantByNameStatus400Plain;
    } | {
        contentType: "application/json";
        data: AbpTenantFindTenantByNameStatus400Json;
    } | {
        contentType: "text/json";
        data: AbpTenantFindTenantByNameStatus400Json2;
    });
    "401": ({
        contentType: "text/plain";
        data: AbpTenantFindTenantByNameStatus401Plain;
    } | {
        contentType: "application/json";
        data: AbpTenantFindTenantByNameStatus401Json;
    } | {
        contentType: "text/json";
        data: AbpTenantFindTenantByNameStatus401Json2;
    });
    "403": ({
        contentType: "text/plain";
        data: AbpTenantFindTenantByNameStatus403Plain;
    } | {
        contentType: "application/json";
        data: AbpTenantFindTenantByNameStatus403Json;
    } | {
        contentType: "text/json";
        data: AbpTenantFindTenantByNameStatus403Json2;
    });
    "404": ({
        contentType: "text/plain";
        data: AbpTenantFindTenantByNameStatus404Plain;
    } | {
        contentType: "application/json";
        data: AbpTenantFindTenantByNameStatus404Json;
    } | {
        contentType: "text/json";
        data: AbpTenantFindTenantByNameStatus404Json2;
    });
    "500": ({
        contentType: "text/plain";
        data: AbpTenantFindTenantByNameStatus500Plain;
    } | {
        contentType: "application/json";
        data: AbpTenantFindTenantByNameStatus500Json;
    } | {
        contentType: "text/json";
        data: AbpTenantFindTenantByNameStatus500Json2;
    });
    "501": ({
        contentType: "text/plain";
        data: AbpTenantFindTenantByNameStatus501Plain;
    } | {
        contentType: "application/json";
        data: AbpTenantFindTenantByNameStatus501Json;
    } | {
        contentType: "text/json";
        data: AbpTenantFindTenantByNameStatus501Json2;
    });
};

/**
 * @description Union of all possible responses
*/
export type AbpTenantFindTenantByNameResponse = (AbpTenantFindTenantByNameStatus200 | AbpTenantFindTenantByNameStatus400 | AbpTenantFindTenantByNameStatus401 | AbpTenantFindTenantByNameStatus403 | AbpTenantFindTenantByNameStatus404 | AbpTenantFindTenantByNameStatus500 | AbpTenantFindTenantByNameStatus501);
