/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from '../volo/abp/http/RemoteServiceErrorResponse'

export type PagesPublicDoesSlugExistQuery = {
    slug?: string;
};

export type PagesPublicDoesSlugExistStatus200Plain = boolean;

export type PagesPublicDoesSlugExistStatus200Json = boolean;

export type PagesPublicDoesSlugExistStatus200Json2 = boolean;

export type PagesPublicDoesSlugExistStatus200 = (PagesPublicDoesSlugExistStatus200Plain | PagesPublicDoesSlugExistStatus200Json | PagesPublicDoesSlugExistStatus200Json2);

export type PagesPublicDoesSlugExistStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type PagesPublicDoesSlugExistStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

export type PagesPublicDoesSlugExistStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type PagesPublicDoesSlugExistStatus400 = (PagesPublicDoesSlugExistStatus400Plain | PagesPublicDoesSlugExistStatus400Json | PagesPublicDoesSlugExistStatus400Json2);

export type PagesPublicDoesSlugExistStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type PagesPublicDoesSlugExistStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

export type PagesPublicDoesSlugExistStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type PagesPublicDoesSlugExistStatus401 = (PagesPublicDoesSlugExistStatus401Plain | PagesPublicDoesSlugExistStatus401Json | PagesPublicDoesSlugExistStatus401Json2);

export type PagesPublicDoesSlugExistStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type PagesPublicDoesSlugExistStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

export type PagesPublicDoesSlugExistStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type PagesPublicDoesSlugExistStatus403 = (PagesPublicDoesSlugExistStatus403Plain | PagesPublicDoesSlugExistStatus403Json | PagesPublicDoesSlugExistStatus403Json2);

export type PagesPublicDoesSlugExistStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type PagesPublicDoesSlugExistStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

export type PagesPublicDoesSlugExistStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type PagesPublicDoesSlugExistStatus404 = (PagesPublicDoesSlugExistStatus404Plain | PagesPublicDoesSlugExistStatus404Json | PagesPublicDoesSlugExistStatus404Json2);

export type PagesPublicDoesSlugExistStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type PagesPublicDoesSlugExistStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

export type PagesPublicDoesSlugExistStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type PagesPublicDoesSlugExistStatus500 = (PagesPublicDoesSlugExistStatus500Plain | PagesPublicDoesSlugExistStatus500Json | PagesPublicDoesSlugExistStatus500Json2);

export type PagesPublicDoesSlugExistStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type PagesPublicDoesSlugExistStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

export type PagesPublicDoesSlugExistStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type PagesPublicDoesSlugExistStatus501 = (PagesPublicDoesSlugExistStatus501Plain | PagesPublicDoesSlugExistStatus501Json | PagesPublicDoesSlugExistStatus501Json2);

export type PagesPublicDoesSlugExistOptions = {
    body?: never;
    path?: never;
    query?: PagesPublicDoesSlugExistQuery;
    headers?: never;
};

export type PagesPublicDoesSlugExistResponses = {
    "200": ({
        contentType: "text/plain";
        data: PagesPublicDoesSlugExistStatus200Plain;
    } | {
        contentType: "application/json";
        data: PagesPublicDoesSlugExistStatus200Json;
    } | {
        contentType: "text/json";
        data: PagesPublicDoesSlugExistStatus200Json2;
    });
    "400": ({
        contentType: "text/plain";
        data: PagesPublicDoesSlugExistStatus400Plain;
    } | {
        contentType: "application/json";
        data: PagesPublicDoesSlugExistStatus400Json;
    } | {
        contentType: "text/json";
        data: PagesPublicDoesSlugExistStatus400Json2;
    });
    "401": ({
        contentType: "text/plain";
        data: PagesPublicDoesSlugExistStatus401Plain;
    } | {
        contentType: "application/json";
        data: PagesPublicDoesSlugExistStatus401Json;
    } | {
        contentType: "text/json";
        data: PagesPublicDoesSlugExistStatus401Json2;
    });
    "403": ({
        contentType: "text/plain";
        data: PagesPublicDoesSlugExistStatus403Plain;
    } | {
        contentType: "application/json";
        data: PagesPublicDoesSlugExistStatus403Json;
    } | {
        contentType: "text/json";
        data: PagesPublicDoesSlugExistStatus403Json2;
    });
    "404": ({
        contentType: "text/plain";
        data: PagesPublicDoesSlugExistStatus404Plain;
    } | {
        contentType: "application/json";
        data: PagesPublicDoesSlugExistStatus404Json;
    } | {
        contentType: "text/json";
        data: PagesPublicDoesSlugExistStatus404Json2;
    });
    "500": ({
        contentType: "text/plain";
        data: PagesPublicDoesSlugExistStatus500Plain;
    } | {
        contentType: "application/json";
        data: PagesPublicDoesSlugExistStatus500Json;
    } | {
        contentType: "text/json";
        data: PagesPublicDoesSlugExistStatus500Json2;
    });
    "501": ({
        contentType: "text/plain";
        data: PagesPublicDoesSlugExistStatus501Plain;
    } | {
        contentType: "application/json";
        data: PagesPublicDoesSlugExistStatus501Json;
    } | {
        contentType: "text/json";
        data: PagesPublicDoesSlugExistStatus501Json2;
    });
};

/**
 * @description Union of all possible responses
*/
export type PagesPublicDoesSlugExistResponse = (PagesPublicDoesSlugExistStatus200 | PagesPublicDoesSlugExistStatus400 | PagesPublicDoesSlugExistStatus401 | PagesPublicDoesSlugExistStatus403 | PagesPublicDoesSlugExistStatus404 | PagesPublicDoesSlugExistStatus500 | PagesPublicDoesSlugExistStatus501);
