/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from '../volo/abp/http/RemoteServiceErrorResponse'

export type AuditLogDeletePath = {
    /**
     * @description
     * Format: `uuid`
     * @type string
    */
    id: string;
};

export type AuditLogDeleteStatus200 = unknown;

export type AuditLogDeleteStatus204 = unknown;

export type AuditLogDeleteStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type AuditLogDeleteStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

export type AuditLogDeleteStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type AuditLogDeleteStatus400 = (AuditLogDeleteStatus400Plain | AuditLogDeleteStatus400Json | AuditLogDeleteStatus400Json2);

export type AuditLogDeleteStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type AuditLogDeleteStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

export type AuditLogDeleteStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type AuditLogDeleteStatus401 = (AuditLogDeleteStatus401Plain | AuditLogDeleteStatus401Json | AuditLogDeleteStatus401Json2);

export type AuditLogDeleteStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type AuditLogDeleteStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

export type AuditLogDeleteStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type AuditLogDeleteStatus403 = (AuditLogDeleteStatus403Plain | AuditLogDeleteStatus403Json | AuditLogDeleteStatus403Json2);

export type AuditLogDeleteStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type AuditLogDeleteStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

export type AuditLogDeleteStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type AuditLogDeleteStatus404 = (AuditLogDeleteStatus404Plain | AuditLogDeleteStatus404Json | AuditLogDeleteStatus404Json2);

export type AuditLogDeleteStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type AuditLogDeleteStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

export type AuditLogDeleteStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type AuditLogDeleteStatus500 = (AuditLogDeleteStatus500Plain | AuditLogDeleteStatus500Json | AuditLogDeleteStatus500Json2);

export type AuditLogDeleteStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type AuditLogDeleteStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

export type AuditLogDeleteStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type AuditLogDeleteStatus501 = (AuditLogDeleteStatus501Plain | AuditLogDeleteStatus501Json | AuditLogDeleteStatus501Json2);

export type AuditLogDeleteOptions = {
    body?: never;
    path: AuditLogDeletePath;
    query?: never;
    headers?: never;
};

export type AuditLogDeleteResponses = {
    "200": AuditLogDeleteStatus200;
    "204": AuditLogDeleteStatus204;
    "400": ({
        contentType: "text/plain";
        data: AuditLogDeleteStatus400Plain;
    } | {
        contentType: "application/json";
        data: AuditLogDeleteStatus400Json;
    } | {
        contentType: "text/json";
        data: AuditLogDeleteStatus400Json2;
    });
    "401": ({
        contentType: "text/plain";
        data: AuditLogDeleteStatus401Plain;
    } | {
        contentType: "application/json";
        data: AuditLogDeleteStatus401Json;
    } | {
        contentType: "text/json";
        data: AuditLogDeleteStatus401Json2;
    });
    "403": ({
        contentType: "text/plain";
        data: AuditLogDeleteStatus403Plain;
    } | {
        contentType: "application/json";
        data: AuditLogDeleteStatus403Json;
    } | {
        contentType: "text/json";
        data: AuditLogDeleteStatus403Json2;
    });
    "404": ({
        contentType: "text/plain";
        data: AuditLogDeleteStatus404Plain;
    } | {
        contentType: "application/json";
        data: AuditLogDeleteStatus404Json;
    } | {
        contentType: "text/json";
        data: AuditLogDeleteStatus404Json2;
    });
    "500": ({
        contentType: "text/plain";
        data: AuditLogDeleteStatus500Plain;
    } | {
        contentType: "application/json";
        data: AuditLogDeleteStatus500Json;
    } | {
        contentType: "text/json";
        data: AuditLogDeleteStatus500Json2;
    });
    "501": ({
        contentType: "text/plain";
        data: AuditLogDeleteStatus501Plain;
    } | {
        contentType: "application/json";
        data: AuditLogDeleteStatus501Json;
    } | {
        contentType: "text/json";
        data: AuditLogDeleteStatus501Json2;
    });
};

/**
 * @description Union of all possible responses
*/
export type AuditLogDeleteResponse = (AuditLogDeleteStatus200 | AuditLogDeleteStatus204 | AuditLogDeleteStatus400 | AuditLogDeleteStatus401 | AuditLogDeleteStatus403 | AuditLogDeleteStatus404 | AuditLogDeleteStatus500 | AuditLogDeleteStatus501);
