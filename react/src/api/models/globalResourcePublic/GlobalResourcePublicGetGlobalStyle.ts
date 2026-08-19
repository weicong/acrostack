/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from '../volo/abp/http/RemoteServiceErrorResponse'
import type { VoloCmsKitPublicGlobalResourcesGlobalResourceDto } from '../volo/cmsKit/public/globalResources/GlobalResourceDto'

export type GlobalResourcePublicGetGlobalStyleStatus200Plain = VoloCmsKitPublicGlobalResourcesGlobalResourceDto;

export type GlobalResourcePublicGetGlobalStyleStatus200Json = VoloCmsKitPublicGlobalResourcesGlobalResourceDto;

export type GlobalResourcePublicGetGlobalStyleStatus200Json2 = VoloCmsKitPublicGlobalResourcesGlobalResourceDto;

export type GlobalResourcePublicGetGlobalStyleStatus200 = (GlobalResourcePublicGetGlobalStyleStatus200Plain | GlobalResourcePublicGetGlobalStyleStatus200Json | GlobalResourcePublicGetGlobalStyleStatus200Json2);

export type GlobalResourcePublicGetGlobalStyleStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type GlobalResourcePublicGetGlobalStyleStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

export type GlobalResourcePublicGetGlobalStyleStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type GlobalResourcePublicGetGlobalStyleStatus400 = (GlobalResourcePublicGetGlobalStyleStatus400Plain | GlobalResourcePublicGetGlobalStyleStatus400Json | GlobalResourcePublicGetGlobalStyleStatus400Json2);

export type GlobalResourcePublicGetGlobalStyleStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type GlobalResourcePublicGetGlobalStyleStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

export type GlobalResourcePublicGetGlobalStyleStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type GlobalResourcePublicGetGlobalStyleStatus401 = (GlobalResourcePublicGetGlobalStyleStatus401Plain | GlobalResourcePublicGetGlobalStyleStatus401Json | GlobalResourcePublicGetGlobalStyleStatus401Json2);

export type GlobalResourcePublicGetGlobalStyleStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type GlobalResourcePublicGetGlobalStyleStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

export type GlobalResourcePublicGetGlobalStyleStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type GlobalResourcePublicGetGlobalStyleStatus403 = (GlobalResourcePublicGetGlobalStyleStatus403Plain | GlobalResourcePublicGetGlobalStyleStatus403Json | GlobalResourcePublicGetGlobalStyleStatus403Json2);

export type GlobalResourcePublicGetGlobalStyleStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type GlobalResourcePublicGetGlobalStyleStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

export type GlobalResourcePublicGetGlobalStyleStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type GlobalResourcePublicGetGlobalStyleStatus404 = (GlobalResourcePublicGetGlobalStyleStatus404Plain | GlobalResourcePublicGetGlobalStyleStatus404Json | GlobalResourcePublicGetGlobalStyleStatus404Json2);

export type GlobalResourcePublicGetGlobalStyleStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type GlobalResourcePublicGetGlobalStyleStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

export type GlobalResourcePublicGetGlobalStyleStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type GlobalResourcePublicGetGlobalStyleStatus500 = (GlobalResourcePublicGetGlobalStyleStatus500Plain | GlobalResourcePublicGetGlobalStyleStatus500Json | GlobalResourcePublicGetGlobalStyleStatus500Json2);

export type GlobalResourcePublicGetGlobalStyleStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type GlobalResourcePublicGetGlobalStyleStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

export type GlobalResourcePublicGetGlobalStyleStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type GlobalResourcePublicGetGlobalStyleStatus501 = (GlobalResourcePublicGetGlobalStyleStatus501Plain | GlobalResourcePublicGetGlobalStyleStatus501Json | GlobalResourcePublicGetGlobalStyleStatus501Json2);

export type GlobalResourcePublicGetGlobalStyleOptions = {
    body?: never;
    path?: never;
    query?: never;
    headers?: never;
};

export type GlobalResourcePublicGetGlobalStyleResponses = {
    "200": ({
        contentType: "text/plain";
        data: GlobalResourcePublicGetGlobalStyleStatus200Plain;
    } | {
        contentType: "application/json";
        data: GlobalResourcePublicGetGlobalStyleStatus200Json;
    } | {
        contentType: "text/json";
        data: GlobalResourcePublicGetGlobalStyleStatus200Json2;
    });
    "400": ({
        contentType: "text/plain";
        data: GlobalResourcePublicGetGlobalStyleStatus400Plain;
    } | {
        contentType: "application/json";
        data: GlobalResourcePublicGetGlobalStyleStatus400Json;
    } | {
        contentType: "text/json";
        data: GlobalResourcePublicGetGlobalStyleStatus400Json2;
    });
    "401": ({
        contentType: "text/plain";
        data: GlobalResourcePublicGetGlobalStyleStatus401Plain;
    } | {
        contentType: "application/json";
        data: GlobalResourcePublicGetGlobalStyleStatus401Json;
    } | {
        contentType: "text/json";
        data: GlobalResourcePublicGetGlobalStyleStatus401Json2;
    });
    "403": ({
        contentType: "text/plain";
        data: GlobalResourcePublicGetGlobalStyleStatus403Plain;
    } | {
        contentType: "application/json";
        data: GlobalResourcePublicGetGlobalStyleStatus403Json;
    } | {
        contentType: "text/json";
        data: GlobalResourcePublicGetGlobalStyleStatus403Json2;
    });
    "404": ({
        contentType: "text/plain";
        data: GlobalResourcePublicGetGlobalStyleStatus404Plain;
    } | {
        contentType: "application/json";
        data: GlobalResourcePublicGetGlobalStyleStatus404Json;
    } | {
        contentType: "text/json";
        data: GlobalResourcePublicGetGlobalStyleStatus404Json2;
    });
    "500": ({
        contentType: "text/plain";
        data: GlobalResourcePublicGetGlobalStyleStatus500Plain;
    } | {
        contentType: "application/json";
        data: GlobalResourcePublicGetGlobalStyleStatus500Json;
    } | {
        contentType: "text/json";
        data: GlobalResourcePublicGetGlobalStyleStatus500Json2;
    });
    "501": ({
        contentType: "text/plain";
        data: GlobalResourcePublicGetGlobalStyleStatus501Plain;
    } | {
        contentType: "application/json";
        data: GlobalResourcePublicGetGlobalStyleStatus501Json;
    } | {
        contentType: "text/json";
        data: GlobalResourcePublicGetGlobalStyleStatus501Json2;
    });
};

/**
 * @description Union of all possible responses
*/
export type GlobalResourcePublicGetGlobalStyleResponse = (GlobalResourcePublicGetGlobalStyleStatus200 | GlobalResourcePublicGetGlobalStyleStatus400 | GlobalResourcePublicGetGlobalStyleStatus401 | GlobalResourcePublicGetGlobalStyleStatus403 | GlobalResourcePublicGetGlobalStyleStatus404 | GlobalResourcePublicGetGlobalStyleStatus500 | GlobalResourcePublicGetGlobalStyleStatus501);
