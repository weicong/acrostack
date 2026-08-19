/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from '../volo/abp/http/RemoteServiceErrorResponse'

export type TenantGetDefaultConnectionStringPath = {
    /**
     * @description
     * Format: `uuid`
     * @type string
    */
    id: string;
};

export type TenantGetDefaultConnectionStringStatus200Plain = string;

export type TenantGetDefaultConnectionStringStatus200Json = string;

export type TenantGetDefaultConnectionStringStatus200Json2 = string;

export type TenantGetDefaultConnectionStringStatus200 = (TenantGetDefaultConnectionStringStatus200Plain | TenantGetDefaultConnectionStringStatus200Json | TenantGetDefaultConnectionStringStatus200Json2);

export type TenantGetDefaultConnectionStringStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type TenantGetDefaultConnectionStringStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

export type TenantGetDefaultConnectionStringStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type TenantGetDefaultConnectionStringStatus400 = (TenantGetDefaultConnectionStringStatus400Plain | TenantGetDefaultConnectionStringStatus400Json | TenantGetDefaultConnectionStringStatus400Json2);

export type TenantGetDefaultConnectionStringStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type TenantGetDefaultConnectionStringStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

export type TenantGetDefaultConnectionStringStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type TenantGetDefaultConnectionStringStatus401 = (TenantGetDefaultConnectionStringStatus401Plain | TenantGetDefaultConnectionStringStatus401Json | TenantGetDefaultConnectionStringStatus401Json2);

export type TenantGetDefaultConnectionStringStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type TenantGetDefaultConnectionStringStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

export type TenantGetDefaultConnectionStringStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type TenantGetDefaultConnectionStringStatus403 = (TenantGetDefaultConnectionStringStatus403Plain | TenantGetDefaultConnectionStringStatus403Json | TenantGetDefaultConnectionStringStatus403Json2);

export type TenantGetDefaultConnectionStringStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type TenantGetDefaultConnectionStringStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

export type TenantGetDefaultConnectionStringStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type TenantGetDefaultConnectionStringStatus404 = (TenantGetDefaultConnectionStringStatus404Plain | TenantGetDefaultConnectionStringStatus404Json | TenantGetDefaultConnectionStringStatus404Json2);

export type TenantGetDefaultConnectionStringStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type TenantGetDefaultConnectionStringStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

export type TenantGetDefaultConnectionStringStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type TenantGetDefaultConnectionStringStatus500 = (TenantGetDefaultConnectionStringStatus500Plain | TenantGetDefaultConnectionStringStatus500Json | TenantGetDefaultConnectionStringStatus500Json2);

export type TenantGetDefaultConnectionStringStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type TenantGetDefaultConnectionStringStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

export type TenantGetDefaultConnectionStringStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type TenantGetDefaultConnectionStringStatus501 = (TenantGetDefaultConnectionStringStatus501Plain | TenantGetDefaultConnectionStringStatus501Json | TenantGetDefaultConnectionStringStatus501Json2);

export type TenantGetDefaultConnectionStringOptions = {
    body?: never;
    path: TenantGetDefaultConnectionStringPath;
    query?: never;
    headers?: never;
};

export type TenantGetDefaultConnectionStringResponses = {
    "200": ({
        contentType: "text/plain";
        data: TenantGetDefaultConnectionStringStatus200Plain;
    } | {
        contentType: "application/json";
        data: TenantGetDefaultConnectionStringStatus200Json;
    } | {
        contentType: "text/json";
        data: TenantGetDefaultConnectionStringStatus200Json2;
    });
    "400": ({
        contentType: "text/plain";
        data: TenantGetDefaultConnectionStringStatus400Plain;
    } | {
        contentType: "application/json";
        data: TenantGetDefaultConnectionStringStatus400Json;
    } | {
        contentType: "text/json";
        data: TenantGetDefaultConnectionStringStatus400Json2;
    });
    "401": ({
        contentType: "text/plain";
        data: TenantGetDefaultConnectionStringStatus401Plain;
    } | {
        contentType: "application/json";
        data: TenantGetDefaultConnectionStringStatus401Json;
    } | {
        contentType: "text/json";
        data: TenantGetDefaultConnectionStringStatus401Json2;
    });
    "403": ({
        contentType: "text/plain";
        data: TenantGetDefaultConnectionStringStatus403Plain;
    } | {
        contentType: "application/json";
        data: TenantGetDefaultConnectionStringStatus403Json;
    } | {
        contentType: "text/json";
        data: TenantGetDefaultConnectionStringStatus403Json2;
    });
    "404": ({
        contentType: "text/plain";
        data: TenantGetDefaultConnectionStringStatus404Plain;
    } | {
        contentType: "application/json";
        data: TenantGetDefaultConnectionStringStatus404Json;
    } | {
        contentType: "text/json";
        data: TenantGetDefaultConnectionStringStatus404Json2;
    });
    "500": ({
        contentType: "text/plain";
        data: TenantGetDefaultConnectionStringStatus500Plain;
    } | {
        contentType: "application/json";
        data: TenantGetDefaultConnectionStringStatus500Json;
    } | {
        contentType: "text/json";
        data: TenantGetDefaultConnectionStringStatus500Json2;
    });
    "501": ({
        contentType: "text/plain";
        data: TenantGetDefaultConnectionStringStatus501Plain;
    } | {
        contentType: "application/json";
        data: TenantGetDefaultConnectionStringStatus501Json;
    } | {
        contentType: "text/json";
        data: TenantGetDefaultConnectionStringStatus501Json2;
    });
};

/**
 * @description Union of all possible responses
*/
export type TenantGetDefaultConnectionStringResponse = (TenantGetDefaultConnectionStringStatus200 | TenantGetDefaultConnectionStringStatus400 | TenantGetDefaultConnectionStringStatus401 | TenantGetDefaultConnectionStringStatus403 | TenantGetDefaultConnectionStringStatus404 | TenantGetDefaultConnectionStringStatus500 | TenantGetDefaultConnectionStringStatus501);
