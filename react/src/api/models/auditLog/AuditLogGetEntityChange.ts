/* oxlint-disable */

import type { AcroStackAuditLoggingEntityChangeDetailDto } from '../acroStack/auditLogging/EntityChangeDetailDto'
import type { VoloAbpHttpRemoteServiceErrorResponse } from '../volo/abp/http/RemoteServiceErrorResponse'

export type AuditLogGetEntityChangePath = {
    /**
     * @description
     * Format: `uuid`
     * @type string
    */
    entityChangeId: string;
};

export type AuditLogGetEntityChangeStatus200Plain = AcroStackAuditLoggingEntityChangeDetailDto;

export type AuditLogGetEntityChangeStatus200Json = AcroStackAuditLoggingEntityChangeDetailDto;

export type AuditLogGetEntityChangeStatus200Json2 = AcroStackAuditLoggingEntityChangeDetailDto;

export type AuditLogGetEntityChangeStatus200 = (AuditLogGetEntityChangeStatus200Plain | AuditLogGetEntityChangeStatus200Json | AuditLogGetEntityChangeStatus200Json2);

export type AuditLogGetEntityChangeStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type AuditLogGetEntityChangeStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

export type AuditLogGetEntityChangeStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type AuditLogGetEntityChangeStatus400 = (AuditLogGetEntityChangeStatus400Plain | AuditLogGetEntityChangeStatus400Json | AuditLogGetEntityChangeStatus400Json2);

export type AuditLogGetEntityChangeStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type AuditLogGetEntityChangeStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

export type AuditLogGetEntityChangeStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type AuditLogGetEntityChangeStatus401 = (AuditLogGetEntityChangeStatus401Plain | AuditLogGetEntityChangeStatus401Json | AuditLogGetEntityChangeStatus401Json2);

export type AuditLogGetEntityChangeStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type AuditLogGetEntityChangeStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

export type AuditLogGetEntityChangeStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type AuditLogGetEntityChangeStatus403 = (AuditLogGetEntityChangeStatus403Plain | AuditLogGetEntityChangeStatus403Json | AuditLogGetEntityChangeStatus403Json2);

export type AuditLogGetEntityChangeStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type AuditLogGetEntityChangeStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

export type AuditLogGetEntityChangeStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type AuditLogGetEntityChangeStatus404 = (AuditLogGetEntityChangeStatus404Plain | AuditLogGetEntityChangeStatus404Json | AuditLogGetEntityChangeStatus404Json2);

export type AuditLogGetEntityChangeStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type AuditLogGetEntityChangeStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

export type AuditLogGetEntityChangeStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type AuditLogGetEntityChangeStatus500 = (AuditLogGetEntityChangeStatus500Plain | AuditLogGetEntityChangeStatus500Json | AuditLogGetEntityChangeStatus500Json2);

export type AuditLogGetEntityChangeStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type AuditLogGetEntityChangeStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

export type AuditLogGetEntityChangeStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type AuditLogGetEntityChangeStatus501 = (AuditLogGetEntityChangeStatus501Plain | AuditLogGetEntityChangeStatus501Json | AuditLogGetEntityChangeStatus501Json2);

export type AuditLogGetEntityChangeOptions = {
    body?: never;
    path: AuditLogGetEntityChangePath;
    query?: never;
    headers?: never;
};

export type AuditLogGetEntityChangeResponses = {
    "200": ({
        contentType: "text/plain";
        data: AuditLogGetEntityChangeStatus200Plain;
    } | {
        contentType: "application/json";
        data: AuditLogGetEntityChangeStatus200Json;
    } | {
        contentType: "text/json";
        data: AuditLogGetEntityChangeStatus200Json2;
    });
    "400": ({
        contentType: "text/plain";
        data: AuditLogGetEntityChangeStatus400Plain;
    } | {
        contentType: "application/json";
        data: AuditLogGetEntityChangeStatus400Json;
    } | {
        contentType: "text/json";
        data: AuditLogGetEntityChangeStatus400Json2;
    });
    "401": ({
        contentType: "text/plain";
        data: AuditLogGetEntityChangeStatus401Plain;
    } | {
        contentType: "application/json";
        data: AuditLogGetEntityChangeStatus401Json;
    } | {
        contentType: "text/json";
        data: AuditLogGetEntityChangeStatus401Json2;
    });
    "403": ({
        contentType: "text/plain";
        data: AuditLogGetEntityChangeStatus403Plain;
    } | {
        contentType: "application/json";
        data: AuditLogGetEntityChangeStatus403Json;
    } | {
        contentType: "text/json";
        data: AuditLogGetEntityChangeStatus403Json2;
    });
    "404": ({
        contentType: "text/plain";
        data: AuditLogGetEntityChangeStatus404Plain;
    } | {
        contentType: "application/json";
        data: AuditLogGetEntityChangeStatus404Json;
    } | {
        contentType: "text/json";
        data: AuditLogGetEntityChangeStatus404Json2;
    });
    "500": ({
        contentType: "text/plain";
        data: AuditLogGetEntityChangeStatus500Plain;
    } | {
        contentType: "application/json";
        data: AuditLogGetEntityChangeStatus500Json;
    } | {
        contentType: "text/json";
        data: AuditLogGetEntityChangeStatus500Json2;
    });
    "501": ({
        contentType: "text/plain";
        data: AuditLogGetEntityChangeStatus501Plain;
    } | {
        contentType: "application/json";
        data: AuditLogGetEntityChangeStatus501Json;
    } | {
        contentType: "text/json";
        data: AuditLogGetEntityChangeStatus501Json2;
    });
};

/**
 * @description Union of all possible responses
*/
export type AuditLogGetEntityChangeResponse = (AuditLogGetEntityChangeStatus200 | AuditLogGetEntityChangeStatus400 | AuditLogGetEntityChangeStatus401 | AuditLogGetEntityChangeStatus403 | AuditLogGetEntityChangeStatus404 | AuditLogGetEntityChangeStatus500 | AuditLogGetEntityChangeStatus501);
