/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from '../volo/abp/http/RemoteServiceErrorResponse'

export type TenantDeletePath = {
    /**
     * @description
     * Format: `uuid`
     * @type string
    */
    id: string;
};

export type TenantDeleteStatus200 = unknown;

export type TenantDeleteStatus204 = unknown;

export type TenantDeleteStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type TenantDeleteStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

export type TenantDeleteStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type TenantDeleteStatus400 = (TenantDeleteStatus400Plain | TenantDeleteStatus400Json | TenantDeleteStatus400Json2);

export type TenantDeleteStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type TenantDeleteStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

export type TenantDeleteStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type TenantDeleteStatus401 = (TenantDeleteStatus401Plain | TenantDeleteStatus401Json | TenantDeleteStatus401Json2);

export type TenantDeleteStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type TenantDeleteStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

export type TenantDeleteStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type TenantDeleteStatus403 = (TenantDeleteStatus403Plain | TenantDeleteStatus403Json | TenantDeleteStatus403Json2);

export type TenantDeleteStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type TenantDeleteStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

export type TenantDeleteStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type TenantDeleteStatus404 = (TenantDeleteStatus404Plain | TenantDeleteStatus404Json | TenantDeleteStatus404Json2);

export type TenantDeleteStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type TenantDeleteStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

export type TenantDeleteStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type TenantDeleteStatus500 = (TenantDeleteStatus500Plain | TenantDeleteStatus500Json | TenantDeleteStatus500Json2);

export type TenantDeleteStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type TenantDeleteStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

export type TenantDeleteStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type TenantDeleteStatus501 = (TenantDeleteStatus501Plain | TenantDeleteStatus501Json | TenantDeleteStatus501Json2);

export type TenantDeleteOptions = {
    body?: never;
    path: TenantDeletePath;
    query?: never;
    headers?: never;
};

export type TenantDeleteResponses = {
    "200": TenantDeleteStatus200;
    "204": TenantDeleteStatus204;
    "400": ({
        contentType: "text/plain";
        data: TenantDeleteStatus400Plain;
    } | {
        contentType: "application/json";
        data: TenantDeleteStatus400Json;
    } | {
        contentType: "text/json";
        data: TenantDeleteStatus400Json2;
    });
    "401": ({
        contentType: "text/plain";
        data: TenantDeleteStatus401Plain;
    } | {
        contentType: "application/json";
        data: TenantDeleteStatus401Json;
    } | {
        contentType: "text/json";
        data: TenantDeleteStatus401Json2;
    });
    "403": ({
        contentType: "text/plain";
        data: TenantDeleteStatus403Plain;
    } | {
        contentType: "application/json";
        data: TenantDeleteStatus403Json;
    } | {
        contentType: "text/json";
        data: TenantDeleteStatus403Json2;
    });
    "404": ({
        contentType: "text/plain";
        data: TenantDeleteStatus404Plain;
    } | {
        contentType: "application/json";
        data: TenantDeleteStatus404Json;
    } | {
        contentType: "text/json";
        data: TenantDeleteStatus404Json2;
    });
    "500": ({
        contentType: "text/plain";
        data: TenantDeleteStatus500Plain;
    } | {
        contentType: "application/json";
        data: TenantDeleteStatus500Json;
    } | {
        contentType: "text/json";
        data: TenantDeleteStatus500Json2;
    });
    "501": ({
        contentType: "text/plain";
        data: TenantDeleteStatus501Plain;
    } | {
        contentType: "application/json";
        data: TenantDeleteStatus501Json;
    } | {
        contentType: "text/json";
        data: TenantDeleteStatus501Json2;
    });
};

/**
 * @description Union of all possible responses
*/
export type TenantDeleteResponse = (TenantDeleteStatus200 | TenantDeleteStatus204 | TenantDeleteStatus400 | TenantDeleteStatus401 | TenantDeleteStatus403 | TenantDeleteStatus404 | TenantDeleteStatus500 | TenantDeleteStatus501);
