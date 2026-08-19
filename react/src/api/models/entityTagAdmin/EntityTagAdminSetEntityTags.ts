/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from '../volo/abp/http/RemoteServiceErrorResponse'
import type { VoloCmsKitAdminTagsEntityTagSetDto } from '../volo/cmsKit/admin/tags/EntityTagSetDto'

export type EntityTagAdminSetEntityTagsStatus200 = unknown;

export type EntityTagAdminSetEntityTagsStatus204 = unknown;

export type EntityTagAdminSetEntityTagsStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type EntityTagAdminSetEntityTagsStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

export type EntityTagAdminSetEntityTagsStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type EntityTagAdminSetEntityTagsStatus400 = (EntityTagAdminSetEntityTagsStatus400Plain | EntityTagAdminSetEntityTagsStatus400Json | EntityTagAdminSetEntityTagsStatus400Json2);

export type EntityTagAdminSetEntityTagsStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type EntityTagAdminSetEntityTagsStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

export type EntityTagAdminSetEntityTagsStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type EntityTagAdminSetEntityTagsStatus401 = (EntityTagAdminSetEntityTagsStatus401Plain | EntityTagAdminSetEntityTagsStatus401Json | EntityTagAdminSetEntityTagsStatus401Json2);

export type EntityTagAdminSetEntityTagsStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type EntityTagAdminSetEntityTagsStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

export type EntityTagAdminSetEntityTagsStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type EntityTagAdminSetEntityTagsStatus403 = (EntityTagAdminSetEntityTagsStatus403Plain | EntityTagAdminSetEntityTagsStatus403Json | EntityTagAdminSetEntityTagsStatus403Json2);

export type EntityTagAdminSetEntityTagsStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type EntityTagAdminSetEntityTagsStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

export type EntityTagAdminSetEntityTagsStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type EntityTagAdminSetEntityTagsStatus404 = (EntityTagAdminSetEntityTagsStatus404Plain | EntityTagAdminSetEntityTagsStatus404Json | EntityTagAdminSetEntityTagsStatus404Json2);

export type EntityTagAdminSetEntityTagsStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type EntityTagAdminSetEntityTagsStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

export type EntityTagAdminSetEntityTagsStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type EntityTagAdminSetEntityTagsStatus500 = (EntityTagAdminSetEntityTagsStatus500Plain | EntityTagAdminSetEntityTagsStatus500Json | EntityTagAdminSetEntityTagsStatus500Json2);

export type EntityTagAdminSetEntityTagsStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type EntityTagAdminSetEntityTagsStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

export type EntityTagAdminSetEntityTagsStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type EntityTagAdminSetEntityTagsStatus501 = (EntityTagAdminSetEntityTagsStatus501Plain | EntityTagAdminSetEntityTagsStatus501Json | EntityTagAdminSetEntityTagsStatus501Json2);

export type EntityTagAdminSetEntityTagsBodyJson = VoloCmsKitAdminTagsEntityTagSetDto | undefined;

export type EntityTagAdminSetEntityTagsBodyJson2 = VoloCmsKitAdminTagsEntityTagSetDto | undefined;

export type EntityTagAdminSetEntityTagsBodyJson3 = VoloCmsKitAdminTagsEntityTagSetDto | undefined;

export type EntityTagAdminSetEntityTagsBody = (EntityTagAdminSetEntityTagsBodyJson | EntityTagAdminSetEntityTagsBodyJson2 | EntityTagAdminSetEntityTagsBodyJson3);

export type EntityTagAdminSetEntityTagsOptions = {
    body: EntityTagAdminSetEntityTagsBody;
    path?: never;
    query?: never;
    headers?: never;
};

export type EntityTagAdminSetEntityTagsResponses = {
    "200": EntityTagAdminSetEntityTagsStatus200;
    "204": EntityTagAdminSetEntityTagsStatus204;
    "400": ({
        contentType: "text/plain";
        data: EntityTagAdminSetEntityTagsStatus400Plain;
    } | {
        contentType: "application/json";
        data: EntityTagAdminSetEntityTagsStatus400Json;
    } | {
        contentType: "text/json";
        data: EntityTagAdminSetEntityTagsStatus400Json2;
    });
    "401": ({
        contentType: "text/plain";
        data: EntityTagAdminSetEntityTagsStatus401Plain;
    } | {
        contentType: "application/json";
        data: EntityTagAdminSetEntityTagsStatus401Json;
    } | {
        contentType: "text/json";
        data: EntityTagAdminSetEntityTagsStatus401Json2;
    });
    "403": ({
        contentType: "text/plain";
        data: EntityTagAdminSetEntityTagsStatus403Plain;
    } | {
        contentType: "application/json";
        data: EntityTagAdminSetEntityTagsStatus403Json;
    } | {
        contentType: "text/json";
        data: EntityTagAdminSetEntityTagsStatus403Json2;
    });
    "404": ({
        contentType: "text/plain";
        data: EntityTagAdminSetEntityTagsStatus404Plain;
    } | {
        contentType: "application/json";
        data: EntityTagAdminSetEntityTagsStatus404Json;
    } | {
        contentType: "text/json";
        data: EntityTagAdminSetEntityTagsStatus404Json2;
    });
    "500": ({
        contentType: "text/plain";
        data: EntityTagAdminSetEntityTagsStatus500Plain;
    } | {
        contentType: "application/json";
        data: EntityTagAdminSetEntityTagsStatus500Json;
    } | {
        contentType: "text/json";
        data: EntityTagAdminSetEntityTagsStatus500Json2;
    });
    "501": ({
        contentType: "text/plain";
        data: EntityTagAdminSetEntityTagsStatus501Plain;
    } | {
        contentType: "application/json";
        data: EntityTagAdminSetEntityTagsStatus501Json;
    } | {
        contentType: "text/json";
        data: EntityTagAdminSetEntityTagsStatus501Json2;
    });
};

/**
 * @description Union of all possible responses
*/
export type EntityTagAdminSetEntityTagsResponse = (EntityTagAdminSetEntityTagsStatus200 | EntityTagAdminSetEntityTagsStatus204 | EntityTagAdminSetEntityTagsStatus400 | EntityTagAdminSetEntityTagsStatus401 | EntityTagAdminSetEntityTagsStatus403 | EntityTagAdminSetEntityTagsStatus404 | EntityTagAdminSetEntityTagsStatus500 | EntityTagAdminSetEntityTagsStatus501);
