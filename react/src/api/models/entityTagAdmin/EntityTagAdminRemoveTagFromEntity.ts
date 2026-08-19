/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from '../volo/abp/http/RemoteServiceErrorResponse'

export type EntityTagAdminRemoveTagFromEntityQuery = {
    /**
     * @description
     * Format: `uuid`
     * @type string
    */
    TagId: string;
    EntityType: string;
    EntityId: string;
};

export type EntityTagAdminRemoveTagFromEntityStatus200 = unknown;

export type EntityTagAdminRemoveTagFromEntityStatus204 = unknown;

export type EntityTagAdminRemoveTagFromEntityStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type EntityTagAdminRemoveTagFromEntityStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

export type EntityTagAdminRemoveTagFromEntityStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type EntityTagAdminRemoveTagFromEntityStatus400 = (EntityTagAdminRemoveTagFromEntityStatus400Plain | EntityTagAdminRemoveTagFromEntityStatus400Json | EntityTagAdminRemoveTagFromEntityStatus400Json2);

export type EntityTagAdminRemoveTagFromEntityStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type EntityTagAdminRemoveTagFromEntityStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

export type EntityTagAdminRemoveTagFromEntityStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type EntityTagAdminRemoveTagFromEntityStatus401 = (EntityTagAdminRemoveTagFromEntityStatus401Plain | EntityTagAdminRemoveTagFromEntityStatus401Json | EntityTagAdminRemoveTagFromEntityStatus401Json2);

export type EntityTagAdminRemoveTagFromEntityStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type EntityTagAdminRemoveTagFromEntityStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

export type EntityTagAdminRemoveTagFromEntityStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type EntityTagAdminRemoveTagFromEntityStatus403 = (EntityTagAdminRemoveTagFromEntityStatus403Plain | EntityTagAdminRemoveTagFromEntityStatus403Json | EntityTagAdminRemoveTagFromEntityStatus403Json2);

export type EntityTagAdminRemoveTagFromEntityStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type EntityTagAdminRemoveTagFromEntityStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

export type EntityTagAdminRemoveTagFromEntityStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type EntityTagAdminRemoveTagFromEntityStatus404 = (EntityTagAdminRemoveTagFromEntityStatus404Plain | EntityTagAdminRemoveTagFromEntityStatus404Json | EntityTagAdminRemoveTagFromEntityStatus404Json2);

export type EntityTagAdminRemoveTagFromEntityStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type EntityTagAdminRemoveTagFromEntityStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

export type EntityTagAdminRemoveTagFromEntityStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type EntityTagAdminRemoveTagFromEntityStatus500 = (EntityTagAdminRemoveTagFromEntityStatus500Plain | EntityTagAdminRemoveTagFromEntityStatus500Json | EntityTagAdminRemoveTagFromEntityStatus500Json2);

export type EntityTagAdminRemoveTagFromEntityStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type EntityTagAdminRemoveTagFromEntityStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

export type EntityTagAdminRemoveTagFromEntityStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type EntityTagAdminRemoveTagFromEntityStatus501 = (EntityTagAdminRemoveTagFromEntityStatus501Plain | EntityTagAdminRemoveTagFromEntityStatus501Json | EntityTagAdminRemoveTagFromEntityStatus501Json2);

export type EntityTagAdminRemoveTagFromEntityOptions = {
    body?: never;
    path?: never;
    query: EntityTagAdminRemoveTagFromEntityQuery;
    headers?: never;
};

export type EntityTagAdminRemoveTagFromEntityResponses = {
    "200": EntityTagAdminRemoveTagFromEntityStatus200;
    "204": EntityTagAdminRemoveTagFromEntityStatus204;
    "400": ({
        contentType: "text/plain";
        data: EntityTagAdminRemoveTagFromEntityStatus400Plain;
    } | {
        contentType: "application/json";
        data: EntityTagAdminRemoveTagFromEntityStatus400Json;
    } | {
        contentType: "text/json";
        data: EntityTagAdminRemoveTagFromEntityStatus400Json2;
    });
    "401": ({
        contentType: "text/plain";
        data: EntityTagAdminRemoveTagFromEntityStatus401Plain;
    } | {
        contentType: "application/json";
        data: EntityTagAdminRemoveTagFromEntityStatus401Json;
    } | {
        contentType: "text/json";
        data: EntityTagAdminRemoveTagFromEntityStatus401Json2;
    });
    "403": ({
        contentType: "text/plain";
        data: EntityTagAdminRemoveTagFromEntityStatus403Plain;
    } | {
        contentType: "application/json";
        data: EntityTagAdminRemoveTagFromEntityStatus403Json;
    } | {
        contentType: "text/json";
        data: EntityTagAdminRemoveTagFromEntityStatus403Json2;
    });
    "404": ({
        contentType: "text/plain";
        data: EntityTagAdminRemoveTagFromEntityStatus404Plain;
    } | {
        contentType: "application/json";
        data: EntityTagAdminRemoveTagFromEntityStatus404Json;
    } | {
        contentType: "text/json";
        data: EntityTagAdminRemoveTagFromEntityStatus404Json2;
    });
    "500": ({
        contentType: "text/plain";
        data: EntityTagAdminRemoveTagFromEntityStatus500Plain;
    } | {
        contentType: "application/json";
        data: EntityTagAdminRemoveTagFromEntityStatus500Json;
    } | {
        contentType: "text/json";
        data: EntityTagAdminRemoveTagFromEntityStatus500Json2;
    });
    "501": ({
        contentType: "text/plain";
        data: EntityTagAdminRemoveTagFromEntityStatus501Plain;
    } | {
        contentType: "application/json";
        data: EntityTagAdminRemoveTagFromEntityStatus501Json;
    } | {
        contentType: "text/json";
        data: EntityTagAdminRemoveTagFromEntityStatus501Json2;
    });
};

/**
 * @description Union of all possible responses
*/
export type EntityTagAdminRemoveTagFromEntityResponse = (EntityTagAdminRemoveTagFromEntityStatus200 | EntityTagAdminRemoveTagFromEntityStatus204 | EntityTagAdminRemoveTagFromEntityStatus400 | EntityTagAdminRemoveTagFromEntityStatus401 | EntityTagAdminRemoveTagFromEntityStatus403 | EntityTagAdminRemoveTagFromEntityStatus404 | EntityTagAdminRemoveTagFromEntityStatus500 | EntityTagAdminRemoveTagFromEntityStatus501);
