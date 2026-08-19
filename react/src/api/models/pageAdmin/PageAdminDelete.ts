/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from '../volo/abp/http/RemoteServiceErrorResponse'

export type PageAdminDeletePath = {
    /**
     * @description
     * Format: `uuid`
     * @type string
    */
    id: string;
};

export type PageAdminDeleteStatus200 = unknown;

export type PageAdminDeleteStatus204 = unknown;

export type PageAdminDeleteStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type PageAdminDeleteStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

export type PageAdminDeleteStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type PageAdminDeleteStatus400 = (PageAdminDeleteStatus400Plain | PageAdminDeleteStatus400Json | PageAdminDeleteStatus400Json2);

export type PageAdminDeleteStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type PageAdminDeleteStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

export type PageAdminDeleteStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type PageAdminDeleteStatus401 = (PageAdminDeleteStatus401Plain | PageAdminDeleteStatus401Json | PageAdminDeleteStatus401Json2);

export type PageAdminDeleteStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type PageAdminDeleteStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

export type PageAdminDeleteStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type PageAdminDeleteStatus403 = (PageAdminDeleteStatus403Plain | PageAdminDeleteStatus403Json | PageAdminDeleteStatus403Json2);

export type PageAdminDeleteStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type PageAdminDeleteStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

export type PageAdminDeleteStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type PageAdminDeleteStatus404 = (PageAdminDeleteStatus404Plain | PageAdminDeleteStatus404Json | PageAdminDeleteStatus404Json2);

export type PageAdminDeleteStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type PageAdminDeleteStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

export type PageAdminDeleteStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type PageAdminDeleteStatus500 = (PageAdminDeleteStatus500Plain | PageAdminDeleteStatus500Json | PageAdminDeleteStatus500Json2);

export type PageAdminDeleteStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type PageAdminDeleteStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

export type PageAdminDeleteStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type PageAdminDeleteStatus501 = (PageAdminDeleteStatus501Plain | PageAdminDeleteStatus501Json | PageAdminDeleteStatus501Json2);

export type PageAdminDeleteOptions = {
    body?: never;
    path: PageAdminDeletePath;
    query?: never;
    headers?: never;
};

export type PageAdminDeleteResponses = {
    "200": PageAdminDeleteStatus200;
    "204": PageAdminDeleteStatus204;
    "400": ({
        contentType: "text/plain";
        data: PageAdminDeleteStatus400Plain;
    } | {
        contentType: "application/json";
        data: PageAdminDeleteStatus400Json;
    } | {
        contentType: "text/json";
        data: PageAdminDeleteStatus400Json2;
    });
    "401": ({
        contentType: "text/plain";
        data: PageAdminDeleteStatus401Plain;
    } | {
        contentType: "application/json";
        data: PageAdminDeleteStatus401Json;
    } | {
        contentType: "text/json";
        data: PageAdminDeleteStatus401Json2;
    });
    "403": ({
        contentType: "text/plain";
        data: PageAdminDeleteStatus403Plain;
    } | {
        contentType: "application/json";
        data: PageAdminDeleteStatus403Json;
    } | {
        contentType: "text/json";
        data: PageAdminDeleteStatus403Json2;
    });
    "404": ({
        contentType: "text/plain";
        data: PageAdminDeleteStatus404Plain;
    } | {
        contentType: "application/json";
        data: PageAdminDeleteStatus404Json;
    } | {
        contentType: "text/json";
        data: PageAdminDeleteStatus404Json2;
    });
    "500": ({
        contentType: "text/plain";
        data: PageAdminDeleteStatus500Plain;
    } | {
        contentType: "application/json";
        data: PageAdminDeleteStatus500Json;
    } | {
        contentType: "text/json";
        data: PageAdminDeleteStatus500Json2;
    });
    "501": ({
        contentType: "text/plain";
        data: PageAdminDeleteStatus501Plain;
    } | {
        contentType: "application/json";
        data: PageAdminDeleteStatus501Json;
    } | {
        contentType: "text/json";
        data: PageAdminDeleteStatus501Json2;
    });
};

/**
 * @description Union of all possible responses
*/
export type PageAdminDeleteResponse = (PageAdminDeleteStatus200 | PageAdminDeleteStatus204 | PageAdminDeleteStatus400 | PageAdminDeleteStatus401 | PageAdminDeleteStatus403 | PageAdminDeleteStatus404 | PageAdminDeleteStatus500 | PageAdminDeleteStatus501);
