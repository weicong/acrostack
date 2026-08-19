/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from '../volo/abp/http/RemoteServiceErrorResponse'

export type RoleDeletePath = {
    /**
     * @description
     * Format: `uuid`
     * @type string
    */
    id: string;
};

export type RoleDeleteStatus200 = unknown;

export type RoleDeleteStatus204 = unknown;

export type RoleDeleteStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type RoleDeleteStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

export type RoleDeleteStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type RoleDeleteStatus400 = (RoleDeleteStatus400Plain | RoleDeleteStatus400Json | RoleDeleteStatus400Json2);

export type RoleDeleteStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type RoleDeleteStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

export type RoleDeleteStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type RoleDeleteStatus401 = (RoleDeleteStatus401Plain | RoleDeleteStatus401Json | RoleDeleteStatus401Json2);

export type RoleDeleteStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type RoleDeleteStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

export type RoleDeleteStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type RoleDeleteStatus403 = (RoleDeleteStatus403Plain | RoleDeleteStatus403Json | RoleDeleteStatus403Json2);

export type RoleDeleteStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type RoleDeleteStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

export type RoleDeleteStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type RoleDeleteStatus404 = (RoleDeleteStatus404Plain | RoleDeleteStatus404Json | RoleDeleteStatus404Json2);

export type RoleDeleteStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type RoleDeleteStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

export type RoleDeleteStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type RoleDeleteStatus500 = (RoleDeleteStatus500Plain | RoleDeleteStatus500Json | RoleDeleteStatus500Json2);

export type RoleDeleteStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type RoleDeleteStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

export type RoleDeleteStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type RoleDeleteStatus501 = (RoleDeleteStatus501Plain | RoleDeleteStatus501Json | RoleDeleteStatus501Json2);

export type RoleDeleteOptions = {
    body?: never;
    path: RoleDeletePath;
    query?: never;
    headers?: never;
};

export type RoleDeleteResponses = {
    "200": RoleDeleteStatus200;
    "204": RoleDeleteStatus204;
    "400": ({
        contentType: "text/plain";
        data: RoleDeleteStatus400Plain;
    } | {
        contentType: "application/json";
        data: RoleDeleteStatus400Json;
    } | {
        contentType: "text/json";
        data: RoleDeleteStatus400Json2;
    });
    "401": ({
        contentType: "text/plain";
        data: RoleDeleteStatus401Plain;
    } | {
        contentType: "application/json";
        data: RoleDeleteStatus401Json;
    } | {
        contentType: "text/json";
        data: RoleDeleteStatus401Json2;
    });
    "403": ({
        contentType: "text/plain";
        data: RoleDeleteStatus403Plain;
    } | {
        contentType: "application/json";
        data: RoleDeleteStatus403Json;
    } | {
        contentType: "text/json";
        data: RoleDeleteStatus403Json2;
    });
    "404": ({
        contentType: "text/plain";
        data: RoleDeleteStatus404Plain;
    } | {
        contentType: "application/json";
        data: RoleDeleteStatus404Json;
    } | {
        contentType: "text/json";
        data: RoleDeleteStatus404Json2;
    });
    "500": ({
        contentType: "text/plain";
        data: RoleDeleteStatus500Plain;
    } | {
        contentType: "application/json";
        data: RoleDeleteStatus500Json;
    } | {
        contentType: "text/json";
        data: RoleDeleteStatus500Json2;
    });
    "501": ({
        contentType: "text/plain";
        data: RoleDeleteStatus501Plain;
    } | {
        contentType: "application/json";
        data: RoleDeleteStatus501Json;
    } | {
        contentType: "text/json";
        data: RoleDeleteStatus501Json2;
    });
};

/**
 * @description Union of all possible responses
*/
export type RoleDeleteResponse = (RoleDeleteStatus200 | RoleDeleteStatus204 | RoleDeleteStatus400 | RoleDeleteStatus401 | RoleDeleteStatus403 | RoleDeleteStatus404 | RoleDeleteStatus500 | RoleDeleteStatus501);
