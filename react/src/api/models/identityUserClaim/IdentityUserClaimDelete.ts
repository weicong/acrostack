/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from '../volo/abp/http/RemoteServiceErrorResponse'

export type IdentityUserClaimDeletePath = {
    /**
     * @description
     * Format: `uuid`
     * @type string
    */
    id: string;
};

export type IdentityUserClaimDeleteStatus200 = unknown;

export type IdentityUserClaimDeleteStatus204 = unknown;

export type IdentityUserClaimDeleteStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityUserClaimDeleteStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityUserClaimDeleteStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityUserClaimDeleteStatus400 = (IdentityUserClaimDeleteStatus400Plain | IdentityUserClaimDeleteStatus400Json | IdentityUserClaimDeleteStatus400Json2);

export type IdentityUserClaimDeleteStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityUserClaimDeleteStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityUserClaimDeleteStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityUserClaimDeleteStatus401 = (IdentityUserClaimDeleteStatus401Plain | IdentityUserClaimDeleteStatus401Json | IdentityUserClaimDeleteStatus401Json2);

export type IdentityUserClaimDeleteStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityUserClaimDeleteStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityUserClaimDeleteStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityUserClaimDeleteStatus403 = (IdentityUserClaimDeleteStatus403Plain | IdentityUserClaimDeleteStatus403Json | IdentityUserClaimDeleteStatus403Json2);

export type IdentityUserClaimDeleteStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityUserClaimDeleteStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityUserClaimDeleteStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityUserClaimDeleteStatus404 = (IdentityUserClaimDeleteStatus404Plain | IdentityUserClaimDeleteStatus404Json | IdentityUserClaimDeleteStatus404Json2);

export type IdentityUserClaimDeleteStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityUserClaimDeleteStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityUserClaimDeleteStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityUserClaimDeleteStatus500 = (IdentityUserClaimDeleteStatus500Plain | IdentityUserClaimDeleteStatus500Json | IdentityUserClaimDeleteStatus500Json2);

export type IdentityUserClaimDeleteStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityUserClaimDeleteStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityUserClaimDeleteStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityUserClaimDeleteStatus501 = (IdentityUserClaimDeleteStatus501Plain | IdentityUserClaimDeleteStatus501Json | IdentityUserClaimDeleteStatus501Json2);

export type IdentityUserClaimDeleteOptions = {
    body?: never;
    path: IdentityUserClaimDeletePath;
    query?: never;
    headers?: never;
};

export type IdentityUserClaimDeleteResponses = {
    "200": IdentityUserClaimDeleteStatus200;
    "204": IdentityUserClaimDeleteStatus204;
    "400": ({
        contentType: "text/plain";
        data: IdentityUserClaimDeleteStatus400Plain;
    } | {
        contentType: "application/json";
        data: IdentityUserClaimDeleteStatus400Json;
    } | {
        contentType: "text/json";
        data: IdentityUserClaimDeleteStatus400Json2;
    });
    "401": ({
        contentType: "text/plain";
        data: IdentityUserClaimDeleteStatus401Plain;
    } | {
        contentType: "application/json";
        data: IdentityUserClaimDeleteStatus401Json;
    } | {
        contentType: "text/json";
        data: IdentityUserClaimDeleteStatus401Json2;
    });
    "403": ({
        contentType: "text/plain";
        data: IdentityUserClaimDeleteStatus403Plain;
    } | {
        contentType: "application/json";
        data: IdentityUserClaimDeleteStatus403Json;
    } | {
        contentType: "text/json";
        data: IdentityUserClaimDeleteStatus403Json2;
    });
    "404": ({
        contentType: "text/plain";
        data: IdentityUserClaimDeleteStatus404Plain;
    } | {
        contentType: "application/json";
        data: IdentityUserClaimDeleteStatus404Json;
    } | {
        contentType: "text/json";
        data: IdentityUserClaimDeleteStatus404Json2;
    });
    "500": ({
        contentType: "text/plain";
        data: IdentityUserClaimDeleteStatus500Plain;
    } | {
        contentType: "application/json";
        data: IdentityUserClaimDeleteStatus500Json;
    } | {
        contentType: "text/json";
        data: IdentityUserClaimDeleteStatus500Json2;
    });
    "501": ({
        contentType: "text/plain";
        data: IdentityUserClaimDeleteStatus501Plain;
    } | {
        contentType: "application/json";
        data: IdentityUserClaimDeleteStatus501Json;
    } | {
        contentType: "text/json";
        data: IdentityUserClaimDeleteStatus501Json2;
    });
};

/**
 * @description Union of all possible responses
*/
export type IdentityUserClaimDeleteResponse = (IdentityUserClaimDeleteStatus200 | IdentityUserClaimDeleteStatus204 | IdentityUserClaimDeleteStatus400 | IdentityUserClaimDeleteStatus401 | IdentityUserClaimDeleteStatus403 | IdentityUserClaimDeleteStatus404 | IdentityUserClaimDeleteStatus500 | IdentityUserClaimDeleteStatus501);
