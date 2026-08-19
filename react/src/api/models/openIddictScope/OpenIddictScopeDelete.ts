/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from '../volo/abp/http/RemoteServiceErrorResponse'

export type OpenIddictScopeDeletePath = {
    /**
     * @description
     * Format: `uuid`
     * @type string
    */
    id: string;
};

export type OpenIddictScopeDeleteStatus200 = unknown;

export type OpenIddictScopeDeleteStatus204 = unknown;

export type OpenIddictScopeDeleteStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictScopeDeleteStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictScopeDeleteStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictScopeDeleteStatus400 = (OpenIddictScopeDeleteStatus400Plain | OpenIddictScopeDeleteStatus400Json | OpenIddictScopeDeleteStatus400Json2);

export type OpenIddictScopeDeleteStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictScopeDeleteStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictScopeDeleteStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictScopeDeleteStatus401 = (OpenIddictScopeDeleteStatus401Plain | OpenIddictScopeDeleteStatus401Json | OpenIddictScopeDeleteStatus401Json2);

export type OpenIddictScopeDeleteStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictScopeDeleteStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictScopeDeleteStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictScopeDeleteStatus403 = (OpenIddictScopeDeleteStatus403Plain | OpenIddictScopeDeleteStatus403Json | OpenIddictScopeDeleteStatus403Json2);

export type OpenIddictScopeDeleteStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictScopeDeleteStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictScopeDeleteStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictScopeDeleteStatus404 = (OpenIddictScopeDeleteStatus404Plain | OpenIddictScopeDeleteStatus404Json | OpenIddictScopeDeleteStatus404Json2);

export type OpenIddictScopeDeleteStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictScopeDeleteStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictScopeDeleteStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictScopeDeleteStatus500 = (OpenIddictScopeDeleteStatus500Plain | OpenIddictScopeDeleteStatus500Json | OpenIddictScopeDeleteStatus500Json2);

export type OpenIddictScopeDeleteStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictScopeDeleteStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictScopeDeleteStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictScopeDeleteStatus501 = (OpenIddictScopeDeleteStatus501Plain | OpenIddictScopeDeleteStatus501Json | OpenIddictScopeDeleteStatus501Json2);

export type OpenIddictScopeDeleteOptions = {
    body?: never;
    path: OpenIddictScopeDeletePath;
    query?: never;
    headers?: never;
};

export type OpenIddictScopeDeleteResponses = {
    "200": OpenIddictScopeDeleteStatus200;
    "204": OpenIddictScopeDeleteStatus204;
    "400": ({
        contentType: "text/plain";
        data: OpenIddictScopeDeleteStatus400Plain;
    } | {
        contentType: "application/json";
        data: OpenIddictScopeDeleteStatus400Json;
    } | {
        contentType: "text/json";
        data: OpenIddictScopeDeleteStatus400Json2;
    });
    "401": ({
        contentType: "text/plain";
        data: OpenIddictScopeDeleteStatus401Plain;
    } | {
        contentType: "application/json";
        data: OpenIddictScopeDeleteStatus401Json;
    } | {
        contentType: "text/json";
        data: OpenIddictScopeDeleteStatus401Json2;
    });
    "403": ({
        contentType: "text/plain";
        data: OpenIddictScopeDeleteStatus403Plain;
    } | {
        contentType: "application/json";
        data: OpenIddictScopeDeleteStatus403Json;
    } | {
        contentType: "text/json";
        data: OpenIddictScopeDeleteStatus403Json2;
    });
    "404": ({
        contentType: "text/plain";
        data: OpenIddictScopeDeleteStatus404Plain;
    } | {
        contentType: "application/json";
        data: OpenIddictScopeDeleteStatus404Json;
    } | {
        contentType: "text/json";
        data: OpenIddictScopeDeleteStatus404Json2;
    });
    "500": ({
        contentType: "text/plain";
        data: OpenIddictScopeDeleteStatus500Plain;
    } | {
        contentType: "application/json";
        data: OpenIddictScopeDeleteStatus500Json;
    } | {
        contentType: "text/json";
        data: OpenIddictScopeDeleteStatus500Json2;
    });
    "501": ({
        contentType: "text/plain";
        data: OpenIddictScopeDeleteStatus501Plain;
    } | {
        contentType: "application/json";
        data: OpenIddictScopeDeleteStatus501Json;
    } | {
        contentType: "text/json";
        data: OpenIddictScopeDeleteStatus501Json2;
    });
};

/**
 * @description Union of all possible responses
*/
export type OpenIddictScopeDeleteResponse = (OpenIddictScopeDeleteStatus200 | OpenIddictScopeDeleteStatus204 | OpenIddictScopeDeleteStatus400 | OpenIddictScopeDeleteStatus401 | OpenIddictScopeDeleteStatus403 | OpenIddictScopeDeleteStatus404 | OpenIddictScopeDeleteStatus500 | OpenIddictScopeDeleteStatus501);
