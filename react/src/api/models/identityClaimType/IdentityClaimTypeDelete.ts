/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from '../volo/abp/http/RemoteServiceErrorResponse'

export type IdentityClaimTypeDeletePath = {
    /**
     * @description
     * Format: `uuid`
     * @type string
    */
    id: string;
};

export type IdentityClaimTypeDeleteStatus200 = unknown;

export type IdentityClaimTypeDeleteStatus204 = unknown;

export type IdentityClaimTypeDeleteStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityClaimTypeDeleteStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityClaimTypeDeleteStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityClaimTypeDeleteStatus400 = (IdentityClaimTypeDeleteStatus400Plain | IdentityClaimTypeDeleteStatus400Json | IdentityClaimTypeDeleteStatus400Json2);

export type IdentityClaimTypeDeleteStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityClaimTypeDeleteStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityClaimTypeDeleteStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityClaimTypeDeleteStatus401 = (IdentityClaimTypeDeleteStatus401Plain | IdentityClaimTypeDeleteStatus401Json | IdentityClaimTypeDeleteStatus401Json2);

export type IdentityClaimTypeDeleteStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityClaimTypeDeleteStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityClaimTypeDeleteStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityClaimTypeDeleteStatus403 = (IdentityClaimTypeDeleteStatus403Plain | IdentityClaimTypeDeleteStatus403Json | IdentityClaimTypeDeleteStatus403Json2);

export type IdentityClaimTypeDeleteStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityClaimTypeDeleteStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityClaimTypeDeleteStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityClaimTypeDeleteStatus404 = (IdentityClaimTypeDeleteStatus404Plain | IdentityClaimTypeDeleteStatus404Json | IdentityClaimTypeDeleteStatus404Json2);

export type IdentityClaimTypeDeleteStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityClaimTypeDeleteStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityClaimTypeDeleteStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityClaimTypeDeleteStatus500 = (IdentityClaimTypeDeleteStatus500Plain | IdentityClaimTypeDeleteStatus500Json | IdentityClaimTypeDeleteStatus500Json2);

export type IdentityClaimTypeDeleteStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityClaimTypeDeleteStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityClaimTypeDeleteStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type IdentityClaimTypeDeleteStatus501 = (IdentityClaimTypeDeleteStatus501Plain | IdentityClaimTypeDeleteStatus501Json | IdentityClaimTypeDeleteStatus501Json2);

export type IdentityClaimTypeDeleteOptions = {
    body?: never;
    path: IdentityClaimTypeDeletePath;
    query?: never;
    headers?: never;
};

export type IdentityClaimTypeDeleteResponses = {
    "200": IdentityClaimTypeDeleteStatus200;
    "204": IdentityClaimTypeDeleteStatus204;
    "400": ({
        contentType: "text/plain";
        data: IdentityClaimTypeDeleteStatus400Plain;
    } | {
        contentType: "application/json";
        data: IdentityClaimTypeDeleteStatus400Json;
    } | {
        contentType: "text/json";
        data: IdentityClaimTypeDeleteStatus400Json2;
    });
    "401": ({
        contentType: "text/plain";
        data: IdentityClaimTypeDeleteStatus401Plain;
    } | {
        contentType: "application/json";
        data: IdentityClaimTypeDeleteStatus401Json;
    } | {
        contentType: "text/json";
        data: IdentityClaimTypeDeleteStatus401Json2;
    });
    "403": ({
        contentType: "text/plain";
        data: IdentityClaimTypeDeleteStatus403Plain;
    } | {
        contentType: "application/json";
        data: IdentityClaimTypeDeleteStatus403Json;
    } | {
        contentType: "text/json";
        data: IdentityClaimTypeDeleteStatus403Json2;
    });
    "404": ({
        contentType: "text/plain";
        data: IdentityClaimTypeDeleteStatus404Plain;
    } | {
        contentType: "application/json";
        data: IdentityClaimTypeDeleteStatus404Json;
    } | {
        contentType: "text/json";
        data: IdentityClaimTypeDeleteStatus404Json2;
    });
    "500": ({
        contentType: "text/plain";
        data: IdentityClaimTypeDeleteStatus500Plain;
    } | {
        contentType: "application/json";
        data: IdentityClaimTypeDeleteStatus500Json;
    } | {
        contentType: "text/json";
        data: IdentityClaimTypeDeleteStatus500Json2;
    });
    "501": ({
        contentType: "text/plain";
        data: IdentityClaimTypeDeleteStatus501Plain;
    } | {
        contentType: "application/json";
        data: IdentityClaimTypeDeleteStatus501Json;
    } | {
        contentType: "text/json";
        data: IdentityClaimTypeDeleteStatus501Json2;
    });
};

/**
 * @description Union of all possible responses
*/
export type IdentityClaimTypeDeleteResponse = (IdentityClaimTypeDeleteStatus200 | IdentityClaimTypeDeleteStatus204 | IdentityClaimTypeDeleteStatus400 | IdentityClaimTypeDeleteStatus401 | IdentityClaimTypeDeleteStatus403 | IdentityClaimTypeDeleteStatus404 | IdentityClaimTypeDeleteStatus500 | IdentityClaimTypeDeleteStatus501);
