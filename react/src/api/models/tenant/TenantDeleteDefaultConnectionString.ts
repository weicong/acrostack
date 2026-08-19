/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from '../volo/abp/http/RemoteServiceErrorResponse'

export type TenantDeleteDefaultConnectionStringPath = {
    /**
     * @description
     * Format: `uuid`
     * @type string
    */
    id: string;
};

export type TenantDeleteDefaultConnectionStringStatus200 = unknown;

export type TenantDeleteDefaultConnectionStringStatus204 = unknown;

export type TenantDeleteDefaultConnectionStringStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type TenantDeleteDefaultConnectionStringStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

export type TenantDeleteDefaultConnectionStringStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type TenantDeleteDefaultConnectionStringStatus400 = (TenantDeleteDefaultConnectionStringStatus400Plain | TenantDeleteDefaultConnectionStringStatus400Json | TenantDeleteDefaultConnectionStringStatus400Json2);

export type TenantDeleteDefaultConnectionStringStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type TenantDeleteDefaultConnectionStringStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

export type TenantDeleteDefaultConnectionStringStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type TenantDeleteDefaultConnectionStringStatus401 = (TenantDeleteDefaultConnectionStringStatus401Plain | TenantDeleteDefaultConnectionStringStatus401Json | TenantDeleteDefaultConnectionStringStatus401Json2);

export type TenantDeleteDefaultConnectionStringStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type TenantDeleteDefaultConnectionStringStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

export type TenantDeleteDefaultConnectionStringStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type TenantDeleteDefaultConnectionStringStatus403 = (TenantDeleteDefaultConnectionStringStatus403Plain | TenantDeleteDefaultConnectionStringStatus403Json | TenantDeleteDefaultConnectionStringStatus403Json2);

export type TenantDeleteDefaultConnectionStringStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type TenantDeleteDefaultConnectionStringStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

export type TenantDeleteDefaultConnectionStringStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type TenantDeleteDefaultConnectionStringStatus404 = (TenantDeleteDefaultConnectionStringStatus404Plain | TenantDeleteDefaultConnectionStringStatus404Json | TenantDeleteDefaultConnectionStringStatus404Json2);

export type TenantDeleteDefaultConnectionStringStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type TenantDeleteDefaultConnectionStringStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

export type TenantDeleteDefaultConnectionStringStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type TenantDeleteDefaultConnectionStringStatus500 = (TenantDeleteDefaultConnectionStringStatus500Plain | TenantDeleteDefaultConnectionStringStatus500Json | TenantDeleteDefaultConnectionStringStatus500Json2);

export type TenantDeleteDefaultConnectionStringStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type TenantDeleteDefaultConnectionStringStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

export type TenantDeleteDefaultConnectionStringStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type TenantDeleteDefaultConnectionStringStatus501 = (TenantDeleteDefaultConnectionStringStatus501Plain | TenantDeleteDefaultConnectionStringStatus501Json | TenantDeleteDefaultConnectionStringStatus501Json2);

export type TenantDeleteDefaultConnectionStringOptions = {
    body?: never;
    path: TenantDeleteDefaultConnectionStringPath;
    query?: never;
    headers?: never;
};

export type TenantDeleteDefaultConnectionStringResponses = {
    "200": TenantDeleteDefaultConnectionStringStatus200;
    "204": TenantDeleteDefaultConnectionStringStatus204;
    "400": ({
        contentType: "text/plain";
        data: TenantDeleteDefaultConnectionStringStatus400Plain;
    } | {
        contentType: "application/json";
        data: TenantDeleteDefaultConnectionStringStatus400Json;
    } | {
        contentType: "text/json";
        data: TenantDeleteDefaultConnectionStringStatus400Json2;
    });
    "401": ({
        contentType: "text/plain";
        data: TenantDeleteDefaultConnectionStringStatus401Plain;
    } | {
        contentType: "application/json";
        data: TenantDeleteDefaultConnectionStringStatus401Json;
    } | {
        contentType: "text/json";
        data: TenantDeleteDefaultConnectionStringStatus401Json2;
    });
    "403": ({
        contentType: "text/plain";
        data: TenantDeleteDefaultConnectionStringStatus403Plain;
    } | {
        contentType: "application/json";
        data: TenantDeleteDefaultConnectionStringStatus403Json;
    } | {
        contentType: "text/json";
        data: TenantDeleteDefaultConnectionStringStatus403Json2;
    });
    "404": ({
        contentType: "text/plain";
        data: TenantDeleteDefaultConnectionStringStatus404Plain;
    } | {
        contentType: "application/json";
        data: TenantDeleteDefaultConnectionStringStatus404Json;
    } | {
        contentType: "text/json";
        data: TenantDeleteDefaultConnectionStringStatus404Json2;
    });
    "500": ({
        contentType: "text/plain";
        data: TenantDeleteDefaultConnectionStringStatus500Plain;
    } | {
        contentType: "application/json";
        data: TenantDeleteDefaultConnectionStringStatus500Json;
    } | {
        contentType: "text/json";
        data: TenantDeleteDefaultConnectionStringStatus500Json2;
    });
    "501": ({
        contentType: "text/plain";
        data: TenantDeleteDefaultConnectionStringStatus501Plain;
    } | {
        contentType: "application/json";
        data: TenantDeleteDefaultConnectionStringStatus501Json;
    } | {
        contentType: "text/json";
        data: TenantDeleteDefaultConnectionStringStatus501Json2;
    });
};

/**
 * @description Union of all possible responses
*/
export type TenantDeleteDefaultConnectionStringResponse = (TenantDeleteDefaultConnectionStringStatus200 | TenantDeleteDefaultConnectionStringStatus204 | TenantDeleteDefaultConnectionStringStatus400 | TenantDeleteDefaultConnectionStringStatus401 | TenantDeleteDefaultConnectionStringStatus403 | TenantDeleteDefaultConnectionStringStatus404 | TenantDeleteDefaultConnectionStringStatus500 | TenantDeleteDefaultConnectionStringStatus501);
