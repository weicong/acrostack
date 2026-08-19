/* oxlint-disable */

import type { AcroStackOpenIddictManagementCreateOpenIddictScopeDto } from '../acroStack/openIddictManagement/CreateOpenIddictScopeDto'
import type { AcroStackOpenIddictManagementOpenIddictScopeDto } from '../acroStack/openIddictManagement/OpenIddictScopeDto'
import type { VoloAbpHttpRemoteServiceErrorResponse } from '../volo/abp/http/RemoteServiceErrorResponse'

export type OpenIddictScopeCreateStatus200Plain = AcroStackOpenIddictManagementOpenIddictScopeDto;

export type OpenIddictScopeCreateStatus200Json = AcroStackOpenIddictManagementOpenIddictScopeDto;

export type OpenIddictScopeCreateStatus200Json2 = AcroStackOpenIddictManagementOpenIddictScopeDto;

export type OpenIddictScopeCreateStatus200 = (OpenIddictScopeCreateStatus200Plain | OpenIddictScopeCreateStatus200Json | OpenIddictScopeCreateStatus200Json2);

export type OpenIddictScopeCreateStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictScopeCreateStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictScopeCreateStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictScopeCreateStatus400 = (OpenIddictScopeCreateStatus400Plain | OpenIddictScopeCreateStatus400Json | OpenIddictScopeCreateStatus400Json2);

export type OpenIddictScopeCreateStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictScopeCreateStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictScopeCreateStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictScopeCreateStatus401 = (OpenIddictScopeCreateStatus401Plain | OpenIddictScopeCreateStatus401Json | OpenIddictScopeCreateStatus401Json2);

export type OpenIddictScopeCreateStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictScopeCreateStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictScopeCreateStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictScopeCreateStatus403 = (OpenIddictScopeCreateStatus403Plain | OpenIddictScopeCreateStatus403Json | OpenIddictScopeCreateStatus403Json2);

export type OpenIddictScopeCreateStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictScopeCreateStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictScopeCreateStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictScopeCreateStatus404 = (OpenIddictScopeCreateStatus404Plain | OpenIddictScopeCreateStatus404Json | OpenIddictScopeCreateStatus404Json2);

export type OpenIddictScopeCreateStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictScopeCreateStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictScopeCreateStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictScopeCreateStatus500 = (OpenIddictScopeCreateStatus500Plain | OpenIddictScopeCreateStatus500Json | OpenIddictScopeCreateStatus500Json2);

export type OpenIddictScopeCreateStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictScopeCreateStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictScopeCreateStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictScopeCreateStatus501 = (OpenIddictScopeCreateStatus501Plain | OpenIddictScopeCreateStatus501Json | OpenIddictScopeCreateStatus501Json2);

export type OpenIddictScopeCreateBodyJson = AcroStackOpenIddictManagementCreateOpenIddictScopeDto | undefined;

export type OpenIddictScopeCreateBodyJson2 = AcroStackOpenIddictManagementCreateOpenIddictScopeDto | undefined;

export type OpenIddictScopeCreateBodyJson3 = AcroStackOpenIddictManagementCreateOpenIddictScopeDto | undefined;

export type OpenIddictScopeCreateBody = (OpenIddictScopeCreateBodyJson | OpenIddictScopeCreateBodyJson2 | OpenIddictScopeCreateBodyJson3);

export type OpenIddictScopeCreateOptions = {
    body: OpenIddictScopeCreateBody;
    path?: never;
    query?: never;
    headers?: never;
};

export type OpenIddictScopeCreateResponses = {
    "200": ({
        contentType: "text/plain";
        data: OpenIddictScopeCreateStatus200Plain;
    } | {
        contentType: "application/json";
        data: OpenIddictScopeCreateStatus200Json;
    } | {
        contentType: "text/json";
        data: OpenIddictScopeCreateStatus200Json2;
    });
    "400": ({
        contentType: "text/plain";
        data: OpenIddictScopeCreateStatus400Plain;
    } | {
        contentType: "application/json";
        data: OpenIddictScopeCreateStatus400Json;
    } | {
        contentType: "text/json";
        data: OpenIddictScopeCreateStatus400Json2;
    });
    "401": ({
        contentType: "text/plain";
        data: OpenIddictScopeCreateStatus401Plain;
    } | {
        contentType: "application/json";
        data: OpenIddictScopeCreateStatus401Json;
    } | {
        contentType: "text/json";
        data: OpenIddictScopeCreateStatus401Json2;
    });
    "403": ({
        contentType: "text/plain";
        data: OpenIddictScopeCreateStatus403Plain;
    } | {
        contentType: "application/json";
        data: OpenIddictScopeCreateStatus403Json;
    } | {
        contentType: "text/json";
        data: OpenIddictScopeCreateStatus403Json2;
    });
    "404": ({
        contentType: "text/plain";
        data: OpenIddictScopeCreateStatus404Plain;
    } | {
        contentType: "application/json";
        data: OpenIddictScopeCreateStatus404Json;
    } | {
        contentType: "text/json";
        data: OpenIddictScopeCreateStatus404Json2;
    });
    "500": ({
        contentType: "text/plain";
        data: OpenIddictScopeCreateStatus500Plain;
    } | {
        contentType: "application/json";
        data: OpenIddictScopeCreateStatus500Json;
    } | {
        contentType: "text/json";
        data: OpenIddictScopeCreateStatus500Json2;
    });
    "501": ({
        contentType: "text/plain";
        data: OpenIddictScopeCreateStatus501Plain;
    } | {
        contentType: "application/json";
        data: OpenIddictScopeCreateStatus501Json;
    } | {
        contentType: "text/json";
        data: OpenIddictScopeCreateStatus501Json2;
    });
};

/**
 * @description Union of all possible responses
*/
export type OpenIddictScopeCreateResponse = (OpenIddictScopeCreateStatus200 | OpenIddictScopeCreateStatus400 | OpenIddictScopeCreateStatus401 | OpenIddictScopeCreateStatus403 | OpenIddictScopeCreateStatus404 | OpenIddictScopeCreateStatus500 | OpenIddictScopeCreateStatus501);
