/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from '../volo/abp/http/RemoteServiceErrorResponse'
import type { VoloCmsKitContentsPageDto } from '../volo/cmsKit/contents/PageDto'

export type PagesPublicFindDefaultHomePageStatus200Plain = VoloCmsKitContentsPageDto;

export type PagesPublicFindDefaultHomePageStatus200Json = VoloCmsKitContentsPageDto;

export type PagesPublicFindDefaultHomePageStatus200Json2 = VoloCmsKitContentsPageDto;

export type PagesPublicFindDefaultHomePageStatus200 = (PagesPublicFindDefaultHomePageStatus200Plain | PagesPublicFindDefaultHomePageStatus200Json | PagesPublicFindDefaultHomePageStatus200Json2);

export type PagesPublicFindDefaultHomePageStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type PagesPublicFindDefaultHomePageStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

export type PagesPublicFindDefaultHomePageStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type PagesPublicFindDefaultHomePageStatus400 = (PagesPublicFindDefaultHomePageStatus400Plain | PagesPublicFindDefaultHomePageStatus400Json | PagesPublicFindDefaultHomePageStatus400Json2);

export type PagesPublicFindDefaultHomePageStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type PagesPublicFindDefaultHomePageStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

export type PagesPublicFindDefaultHomePageStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type PagesPublicFindDefaultHomePageStatus401 = (PagesPublicFindDefaultHomePageStatus401Plain | PagesPublicFindDefaultHomePageStatus401Json | PagesPublicFindDefaultHomePageStatus401Json2);

export type PagesPublicFindDefaultHomePageStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type PagesPublicFindDefaultHomePageStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

export type PagesPublicFindDefaultHomePageStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type PagesPublicFindDefaultHomePageStatus403 = (PagesPublicFindDefaultHomePageStatus403Plain | PagesPublicFindDefaultHomePageStatus403Json | PagesPublicFindDefaultHomePageStatus403Json2);

export type PagesPublicFindDefaultHomePageStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type PagesPublicFindDefaultHomePageStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

export type PagesPublicFindDefaultHomePageStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type PagesPublicFindDefaultHomePageStatus404 = (PagesPublicFindDefaultHomePageStatus404Plain | PagesPublicFindDefaultHomePageStatus404Json | PagesPublicFindDefaultHomePageStatus404Json2);

export type PagesPublicFindDefaultHomePageStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type PagesPublicFindDefaultHomePageStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

export type PagesPublicFindDefaultHomePageStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type PagesPublicFindDefaultHomePageStatus500 = (PagesPublicFindDefaultHomePageStatus500Plain | PagesPublicFindDefaultHomePageStatus500Json | PagesPublicFindDefaultHomePageStatus500Json2);

export type PagesPublicFindDefaultHomePageStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type PagesPublicFindDefaultHomePageStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

export type PagesPublicFindDefaultHomePageStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type PagesPublicFindDefaultHomePageStatus501 = (PagesPublicFindDefaultHomePageStatus501Plain | PagesPublicFindDefaultHomePageStatus501Json | PagesPublicFindDefaultHomePageStatus501Json2);

export type PagesPublicFindDefaultHomePageOptions = {
    body?: never;
    path?: never;
    query?: never;
    headers?: never;
};

export type PagesPublicFindDefaultHomePageResponses = {
    "200": ({
        contentType: "text/plain";
        data: PagesPublicFindDefaultHomePageStatus200Plain;
    } | {
        contentType: "application/json";
        data: PagesPublicFindDefaultHomePageStatus200Json;
    } | {
        contentType: "text/json";
        data: PagesPublicFindDefaultHomePageStatus200Json2;
    });
    "400": ({
        contentType: "text/plain";
        data: PagesPublicFindDefaultHomePageStatus400Plain;
    } | {
        contentType: "application/json";
        data: PagesPublicFindDefaultHomePageStatus400Json;
    } | {
        contentType: "text/json";
        data: PagesPublicFindDefaultHomePageStatus400Json2;
    });
    "401": ({
        contentType: "text/plain";
        data: PagesPublicFindDefaultHomePageStatus401Plain;
    } | {
        contentType: "application/json";
        data: PagesPublicFindDefaultHomePageStatus401Json;
    } | {
        contentType: "text/json";
        data: PagesPublicFindDefaultHomePageStatus401Json2;
    });
    "403": ({
        contentType: "text/plain";
        data: PagesPublicFindDefaultHomePageStatus403Plain;
    } | {
        contentType: "application/json";
        data: PagesPublicFindDefaultHomePageStatus403Json;
    } | {
        contentType: "text/json";
        data: PagesPublicFindDefaultHomePageStatus403Json2;
    });
    "404": ({
        contentType: "text/plain";
        data: PagesPublicFindDefaultHomePageStatus404Plain;
    } | {
        contentType: "application/json";
        data: PagesPublicFindDefaultHomePageStatus404Json;
    } | {
        contentType: "text/json";
        data: PagesPublicFindDefaultHomePageStatus404Json2;
    });
    "500": ({
        contentType: "text/plain";
        data: PagesPublicFindDefaultHomePageStatus500Plain;
    } | {
        contentType: "application/json";
        data: PagesPublicFindDefaultHomePageStatus500Json;
    } | {
        contentType: "text/json";
        data: PagesPublicFindDefaultHomePageStatus500Json2;
    });
    "501": ({
        contentType: "text/plain";
        data: PagesPublicFindDefaultHomePageStatus501Plain;
    } | {
        contentType: "application/json";
        data: PagesPublicFindDefaultHomePageStatus501Json;
    } | {
        contentType: "text/json";
        data: PagesPublicFindDefaultHomePageStatus501Json2;
    });
};

/**
 * @description Union of all possible responses
*/
export type PagesPublicFindDefaultHomePageResponse = (PagesPublicFindDefaultHomePageStatus200 | PagesPublicFindDefaultHomePageStatus400 | PagesPublicFindDefaultHomePageStatus401 | PagesPublicFindDefaultHomePageStatus403 | PagesPublicFindDefaultHomePageStatus404 | PagesPublicFindDefaultHomePageStatus500 | PagesPublicFindDefaultHomePageStatus501);
