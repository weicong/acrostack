/* oxlint-disable */

import type { AcroStackAuditLoggingAuditLogDto } from '../acroStack/auditLogging/AuditLogDto'
import type { VoloAbpHttpRemoteServiceErrorResponse } from '../volo/abp/http/RemoteServiceErrorResponse'

export type AuditLogGetPath = {
    /**
     * @description
     * Format: `uuid`
     * @type string
    */
    id: string;
};

export type AuditLogGetStatus200Plain = AcroStackAuditLoggingAuditLogDto;

export type AuditLogGetStatus200Json = AcroStackAuditLoggingAuditLogDto;

export type AuditLogGetStatus200Json2 = AcroStackAuditLoggingAuditLogDto;

export type AuditLogGetStatus200 = (AuditLogGetStatus200Plain | AuditLogGetStatus200Json | AuditLogGetStatus200Json2);

export type AuditLogGetStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type AuditLogGetStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

export type AuditLogGetStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type AuditLogGetStatus400 = (AuditLogGetStatus400Plain | AuditLogGetStatus400Json | AuditLogGetStatus400Json2);

export type AuditLogGetStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type AuditLogGetStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

export type AuditLogGetStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type AuditLogGetStatus401 = (AuditLogGetStatus401Plain | AuditLogGetStatus401Json | AuditLogGetStatus401Json2);

export type AuditLogGetStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type AuditLogGetStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

export type AuditLogGetStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type AuditLogGetStatus403 = (AuditLogGetStatus403Plain | AuditLogGetStatus403Json | AuditLogGetStatus403Json2);

export type AuditLogGetStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type AuditLogGetStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

export type AuditLogGetStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type AuditLogGetStatus404 = (AuditLogGetStatus404Plain | AuditLogGetStatus404Json | AuditLogGetStatus404Json2);

export type AuditLogGetStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type AuditLogGetStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

export type AuditLogGetStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type AuditLogGetStatus500 = (AuditLogGetStatus500Plain | AuditLogGetStatus500Json | AuditLogGetStatus500Json2);

export type AuditLogGetStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type AuditLogGetStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

export type AuditLogGetStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type AuditLogGetStatus501 = (AuditLogGetStatus501Plain | AuditLogGetStatus501Json | AuditLogGetStatus501Json2);

export type AuditLogGetOptions = {
    body?: never;
    path: AuditLogGetPath;
    query?: never;
    headers?: never;
};

export type AuditLogGetResponses = {
    "200": ({
        contentType: "text/plain";
        data: AuditLogGetStatus200Plain;
    } | {
        contentType: "application/json";
        data: AuditLogGetStatus200Json;
    } | {
        contentType: "text/json";
        data: AuditLogGetStatus200Json2;
    });
    "400": ({
        contentType: "text/plain";
        data: AuditLogGetStatus400Plain;
    } | {
        contentType: "application/json";
        data: AuditLogGetStatus400Json;
    } | {
        contentType: "text/json";
        data: AuditLogGetStatus400Json2;
    });
    "401": ({
        contentType: "text/plain";
        data: AuditLogGetStatus401Plain;
    } | {
        contentType: "application/json";
        data: AuditLogGetStatus401Json;
    } | {
        contentType: "text/json";
        data: AuditLogGetStatus401Json2;
    });
    "403": ({
        contentType: "text/plain";
        data: AuditLogGetStatus403Plain;
    } | {
        contentType: "application/json";
        data: AuditLogGetStatus403Json;
    } | {
        contentType: "text/json";
        data: AuditLogGetStatus403Json2;
    });
    "404": ({
        contentType: "text/plain";
        data: AuditLogGetStatus404Plain;
    } | {
        contentType: "application/json";
        data: AuditLogGetStatus404Json;
    } | {
        contentType: "text/json";
        data: AuditLogGetStatus404Json2;
    });
    "500": ({
        contentType: "text/plain";
        data: AuditLogGetStatus500Plain;
    } | {
        contentType: "application/json";
        data: AuditLogGetStatus500Json;
    } | {
        contentType: "text/json";
        data: AuditLogGetStatus500Json2;
    });
    "501": ({
        contentType: "text/plain";
        data: AuditLogGetStatus501Plain;
    } | {
        contentType: "application/json";
        data: AuditLogGetStatus501Json;
    } | {
        contentType: "text/json";
        data: AuditLogGetStatus501Json2;
    });
};

/**
 * @description Union of all possible responses
*/
export type AuditLogGetResponse = (AuditLogGetStatus200 | AuditLogGetStatus400 | AuditLogGetStatus401 | AuditLogGetStatus403 | AuditLogGetStatus404 | AuditLogGetStatus500 | AuditLogGetStatus501);
