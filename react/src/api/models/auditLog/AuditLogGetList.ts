/* oxlint-disable */

import type { VoloAbpApplicationDtosPagedResultDto1AcroStackAuditLoggingAuditLogDtoAcroStackAuditLoggingVersion1000CultureneutralPublicKeyTokennull } from '../volo/abp/application/dtos/pagedResultDto1AcroStack/auditLogging/auditLogDtoAcroStack/AuditLoggingVersion1000CultureneutralPublicKeyTokennull'
import type { VoloAbpHttpRemoteServiceErrorResponse } from '../volo/abp/http/RemoteServiceErrorResponse'

export type AuditLogGetListQuery = {
    Filter?: string;
    /**
     * @description
     * Format: `uuid`
     * @type string | undefined
    */
    UserId?: string;
    HttpMethod?: string;
    Url?: string;
    /**
     * @description
     * Format: `date-time`
     * @type string | undefined
    */
    StartTime?: string;
    /**
     * @description
     * Format: `date-time`
     * @type string | undefined
    */
    EndTime?: string;
    /**
     * @description
     * Format: `int32`
     * @type integer | undefined
    */
    HttpStatusCode?: number;
    HasException?: boolean;
    Sorting?: string;
    /**
     * @description
     * Format: `int32`
     * @type integer | undefined
    */
    SkipCount?: number;
    /**
     * @description
     * Format: `int32`
     * @type integer | undefined
    */
    MaxResultCount?: number;
};

export type AuditLogGetListStatus200Plain = VoloAbpApplicationDtosPagedResultDto1AcroStackAuditLoggingAuditLogDtoAcroStackAuditLoggingVersion1000CultureneutralPublicKeyTokennull;

export type AuditLogGetListStatus200Json = VoloAbpApplicationDtosPagedResultDto1AcroStackAuditLoggingAuditLogDtoAcroStackAuditLoggingVersion1000CultureneutralPublicKeyTokennull;

export type AuditLogGetListStatus200Json2 = VoloAbpApplicationDtosPagedResultDto1AcroStackAuditLoggingAuditLogDtoAcroStackAuditLoggingVersion1000CultureneutralPublicKeyTokennull;

export type AuditLogGetListStatus200 = (AuditLogGetListStatus200Plain | AuditLogGetListStatus200Json | AuditLogGetListStatus200Json2);

export type AuditLogGetListStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type AuditLogGetListStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

export type AuditLogGetListStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type AuditLogGetListStatus400 = (AuditLogGetListStatus400Plain | AuditLogGetListStatus400Json | AuditLogGetListStatus400Json2);

export type AuditLogGetListStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type AuditLogGetListStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

export type AuditLogGetListStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type AuditLogGetListStatus401 = (AuditLogGetListStatus401Plain | AuditLogGetListStatus401Json | AuditLogGetListStatus401Json2);

export type AuditLogGetListStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type AuditLogGetListStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

export type AuditLogGetListStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type AuditLogGetListStatus403 = (AuditLogGetListStatus403Plain | AuditLogGetListStatus403Json | AuditLogGetListStatus403Json2);

export type AuditLogGetListStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type AuditLogGetListStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

export type AuditLogGetListStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type AuditLogGetListStatus404 = (AuditLogGetListStatus404Plain | AuditLogGetListStatus404Json | AuditLogGetListStatus404Json2);

export type AuditLogGetListStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type AuditLogGetListStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

export type AuditLogGetListStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type AuditLogGetListStatus500 = (AuditLogGetListStatus500Plain | AuditLogGetListStatus500Json | AuditLogGetListStatus500Json2);

export type AuditLogGetListStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type AuditLogGetListStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

export type AuditLogGetListStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type AuditLogGetListStatus501 = (AuditLogGetListStatus501Plain | AuditLogGetListStatus501Json | AuditLogGetListStatus501Json2);

export type AuditLogGetListOptions = {
    body?: never;
    path?: never;
    query?: AuditLogGetListQuery;
    headers?: never;
};

export type AuditLogGetListResponses = {
    "200": ({
        contentType: "text/plain";
        data: AuditLogGetListStatus200Plain;
    } | {
        contentType: "application/json";
        data: AuditLogGetListStatus200Json;
    } | {
        contentType: "text/json";
        data: AuditLogGetListStatus200Json2;
    });
    "400": ({
        contentType: "text/plain";
        data: AuditLogGetListStatus400Plain;
    } | {
        contentType: "application/json";
        data: AuditLogGetListStatus400Json;
    } | {
        contentType: "text/json";
        data: AuditLogGetListStatus400Json2;
    });
    "401": ({
        contentType: "text/plain";
        data: AuditLogGetListStatus401Plain;
    } | {
        contentType: "application/json";
        data: AuditLogGetListStatus401Json;
    } | {
        contentType: "text/json";
        data: AuditLogGetListStatus401Json2;
    });
    "403": ({
        contentType: "text/plain";
        data: AuditLogGetListStatus403Plain;
    } | {
        contentType: "application/json";
        data: AuditLogGetListStatus403Json;
    } | {
        contentType: "text/json";
        data: AuditLogGetListStatus403Json2;
    });
    "404": ({
        contentType: "text/plain";
        data: AuditLogGetListStatus404Plain;
    } | {
        contentType: "application/json";
        data: AuditLogGetListStatus404Json;
    } | {
        contentType: "text/json";
        data: AuditLogGetListStatus404Json2;
    });
    "500": ({
        contentType: "text/plain";
        data: AuditLogGetListStatus500Plain;
    } | {
        contentType: "application/json";
        data: AuditLogGetListStatus500Json;
    } | {
        contentType: "text/json";
        data: AuditLogGetListStatus500Json2;
    });
    "501": ({
        contentType: "text/plain";
        data: AuditLogGetListStatus501Plain;
    } | {
        contentType: "application/json";
        data: AuditLogGetListStatus501Json;
    } | {
        contentType: "text/json";
        data: AuditLogGetListStatus501Json2;
    });
};

/**
 * @description Union of all possible responses
*/
export type AuditLogGetListResponse = (AuditLogGetListStatus200 | AuditLogGetListStatus400 | AuditLogGetListStatus401 | AuditLogGetListStatus403 | AuditLogGetListStatus404 | AuditLogGetListStatus500 | AuditLogGetListStatus501);
