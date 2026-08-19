/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from '../volo/abp/http/RemoteServiceErrorResponse'

export type MediaDescriptorAdminDeletePath = {
    /**
     * @description
     * Format: `uuid`
     * @type string
    */
    id: string;
};

export type MediaDescriptorAdminDeleteStatus200 = unknown;

export type MediaDescriptorAdminDeleteStatus204 = unknown;

export type MediaDescriptorAdminDeleteStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type MediaDescriptorAdminDeleteStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

export type MediaDescriptorAdminDeleteStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type MediaDescriptorAdminDeleteStatus400 = (MediaDescriptorAdminDeleteStatus400Plain | MediaDescriptorAdminDeleteStatus400Json | MediaDescriptorAdminDeleteStatus400Json2);

export type MediaDescriptorAdminDeleteStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type MediaDescriptorAdminDeleteStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

export type MediaDescriptorAdminDeleteStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type MediaDescriptorAdminDeleteStatus401 = (MediaDescriptorAdminDeleteStatus401Plain | MediaDescriptorAdminDeleteStatus401Json | MediaDescriptorAdminDeleteStatus401Json2);

export type MediaDescriptorAdminDeleteStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type MediaDescriptorAdminDeleteStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

export type MediaDescriptorAdminDeleteStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type MediaDescriptorAdminDeleteStatus403 = (MediaDescriptorAdminDeleteStatus403Plain | MediaDescriptorAdminDeleteStatus403Json | MediaDescriptorAdminDeleteStatus403Json2);

export type MediaDescriptorAdminDeleteStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type MediaDescriptorAdminDeleteStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

export type MediaDescriptorAdminDeleteStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type MediaDescriptorAdminDeleteStatus404 = (MediaDescriptorAdminDeleteStatus404Plain | MediaDescriptorAdminDeleteStatus404Json | MediaDescriptorAdminDeleteStatus404Json2);

export type MediaDescriptorAdminDeleteStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type MediaDescriptorAdminDeleteStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

export type MediaDescriptorAdminDeleteStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type MediaDescriptorAdminDeleteStatus500 = (MediaDescriptorAdminDeleteStatus500Plain | MediaDescriptorAdminDeleteStatus500Json | MediaDescriptorAdminDeleteStatus500Json2);

export type MediaDescriptorAdminDeleteStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type MediaDescriptorAdminDeleteStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

export type MediaDescriptorAdminDeleteStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type MediaDescriptorAdminDeleteStatus501 = (MediaDescriptorAdminDeleteStatus501Plain | MediaDescriptorAdminDeleteStatus501Json | MediaDescriptorAdminDeleteStatus501Json2);

export type MediaDescriptorAdminDeleteOptions = {
    body?: never;
    path: MediaDescriptorAdminDeletePath;
    query?: never;
    headers?: never;
};

export type MediaDescriptorAdminDeleteResponses = {
    "200": MediaDescriptorAdminDeleteStatus200;
    "204": MediaDescriptorAdminDeleteStatus204;
    "400": ({
        contentType: "text/plain";
        data: MediaDescriptorAdminDeleteStatus400Plain;
    } | {
        contentType: "application/json";
        data: MediaDescriptorAdminDeleteStatus400Json;
    } | {
        contentType: "text/json";
        data: MediaDescriptorAdminDeleteStatus400Json2;
    });
    "401": ({
        contentType: "text/plain";
        data: MediaDescriptorAdminDeleteStatus401Plain;
    } | {
        contentType: "application/json";
        data: MediaDescriptorAdminDeleteStatus401Json;
    } | {
        contentType: "text/json";
        data: MediaDescriptorAdminDeleteStatus401Json2;
    });
    "403": ({
        contentType: "text/plain";
        data: MediaDescriptorAdminDeleteStatus403Plain;
    } | {
        contentType: "application/json";
        data: MediaDescriptorAdminDeleteStatus403Json;
    } | {
        contentType: "text/json";
        data: MediaDescriptorAdminDeleteStatus403Json2;
    });
    "404": ({
        contentType: "text/plain";
        data: MediaDescriptorAdminDeleteStatus404Plain;
    } | {
        contentType: "application/json";
        data: MediaDescriptorAdminDeleteStatus404Json;
    } | {
        contentType: "text/json";
        data: MediaDescriptorAdminDeleteStatus404Json2;
    });
    "500": ({
        contentType: "text/plain";
        data: MediaDescriptorAdminDeleteStatus500Plain;
    } | {
        contentType: "application/json";
        data: MediaDescriptorAdminDeleteStatus500Json;
    } | {
        contentType: "text/json";
        data: MediaDescriptorAdminDeleteStatus500Json2;
    });
    "501": ({
        contentType: "text/plain";
        data: MediaDescriptorAdminDeleteStatus501Plain;
    } | {
        contentType: "application/json";
        data: MediaDescriptorAdminDeleteStatus501Json;
    } | {
        contentType: "text/json";
        data: MediaDescriptorAdminDeleteStatus501Json2;
    });
};

/**
 * @description Union of all possible responses
*/
export type MediaDescriptorAdminDeleteResponse = (MediaDescriptorAdminDeleteStatus200 | MediaDescriptorAdminDeleteStatus204 | MediaDescriptorAdminDeleteStatus400 | MediaDescriptorAdminDeleteStatus401 | MediaDescriptorAdminDeleteStatus403 | MediaDescriptorAdminDeleteStatus404 | MediaDescriptorAdminDeleteStatus500 | MediaDescriptorAdminDeleteStatus501);
