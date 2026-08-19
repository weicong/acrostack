/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from '../volo/abp/http/RemoteServiceErrorResponse'
import type { VoloCmsKitAdminTagsTagDefinitionDto } from '../volo/cmsKit/admin/tags/TagDefinitionDto'

export type TagAdminGetTagDefinitionsStatus200Plain = VoloCmsKitAdminTagsTagDefinitionDto[];

export type TagAdminGetTagDefinitionsStatus200Json = VoloCmsKitAdminTagsTagDefinitionDto[];

export type TagAdminGetTagDefinitionsStatus200Json2 = VoloCmsKitAdminTagsTagDefinitionDto[];

export type TagAdminGetTagDefinitionsStatus200 = (TagAdminGetTagDefinitionsStatus200Plain | TagAdminGetTagDefinitionsStatus200Json | TagAdminGetTagDefinitionsStatus200Json2);

export type TagAdminGetTagDefinitionsStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type TagAdminGetTagDefinitionsStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

export type TagAdminGetTagDefinitionsStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type TagAdminGetTagDefinitionsStatus400 = (TagAdminGetTagDefinitionsStatus400Plain | TagAdminGetTagDefinitionsStatus400Json | TagAdminGetTagDefinitionsStatus400Json2);

export type TagAdminGetTagDefinitionsStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type TagAdminGetTagDefinitionsStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

export type TagAdminGetTagDefinitionsStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type TagAdminGetTagDefinitionsStatus401 = (TagAdminGetTagDefinitionsStatus401Plain | TagAdminGetTagDefinitionsStatus401Json | TagAdminGetTagDefinitionsStatus401Json2);

export type TagAdminGetTagDefinitionsStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type TagAdminGetTagDefinitionsStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

export type TagAdminGetTagDefinitionsStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type TagAdminGetTagDefinitionsStatus403 = (TagAdminGetTagDefinitionsStatus403Plain | TagAdminGetTagDefinitionsStatus403Json | TagAdminGetTagDefinitionsStatus403Json2);

export type TagAdminGetTagDefinitionsStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type TagAdminGetTagDefinitionsStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

export type TagAdminGetTagDefinitionsStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type TagAdminGetTagDefinitionsStatus404 = (TagAdminGetTagDefinitionsStatus404Plain | TagAdminGetTagDefinitionsStatus404Json | TagAdminGetTagDefinitionsStatus404Json2);

export type TagAdminGetTagDefinitionsStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type TagAdminGetTagDefinitionsStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

export type TagAdminGetTagDefinitionsStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type TagAdminGetTagDefinitionsStatus500 = (TagAdminGetTagDefinitionsStatus500Plain | TagAdminGetTagDefinitionsStatus500Json | TagAdminGetTagDefinitionsStatus500Json2);

export type TagAdminGetTagDefinitionsStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type TagAdminGetTagDefinitionsStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

export type TagAdminGetTagDefinitionsStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type TagAdminGetTagDefinitionsStatus501 = (TagAdminGetTagDefinitionsStatus501Plain | TagAdminGetTagDefinitionsStatus501Json | TagAdminGetTagDefinitionsStatus501Json2);

export type TagAdminGetTagDefinitionsOptions = {
    body?: never;
    path?: never;
    query?: never;
    headers?: never;
};

export type TagAdminGetTagDefinitionsResponses = {
    "200": ({
        contentType: "text/plain";
        data: TagAdminGetTagDefinitionsStatus200Plain;
    } | {
        contentType: "application/json";
        data: TagAdminGetTagDefinitionsStatus200Json;
    } | {
        contentType: "text/json";
        data: TagAdminGetTagDefinitionsStatus200Json2;
    });
    "400": ({
        contentType: "text/plain";
        data: TagAdminGetTagDefinitionsStatus400Plain;
    } | {
        contentType: "application/json";
        data: TagAdminGetTagDefinitionsStatus400Json;
    } | {
        contentType: "text/json";
        data: TagAdminGetTagDefinitionsStatus400Json2;
    });
    "401": ({
        contentType: "text/plain";
        data: TagAdminGetTagDefinitionsStatus401Plain;
    } | {
        contentType: "application/json";
        data: TagAdminGetTagDefinitionsStatus401Json;
    } | {
        contentType: "text/json";
        data: TagAdminGetTagDefinitionsStatus401Json2;
    });
    "403": ({
        contentType: "text/plain";
        data: TagAdminGetTagDefinitionsStatus403Plain;
    } | {
        contentType: "application/json";
        data: TagAdminGetTagDefinitionsStatus403Json;
    } | {
        contentType: "text/json";
        data: TagAdminGetTagDefinitionsStatus403Json2;
    });
    "404": ({
        contentType: "text/plain";
        data: TagAdminGetTagDefinitionsStatus404Plain;
    } | {
        contentType: "application/json";
        data: TagAdminGetTagDefinitionsStatus404Json;
    } | {
        contentType: "text/json";
        data: TagAdminGetTagDefinitionsStatus404Json2;
    });
    "500": ({
        contentType: "text/plain";
        data: TagAdminGetTagDefinitionsStatus500Plain;
    } | {
        contentType: "application/json";
        data: TagAdminGetTagDefinitionsStatus500Json;
    } | {
        contentType: "text/json";
        data: TagAdminGetTagDefinitionsStatus500Json2;
    });
    "501": ({
        contentType: "text/plain";
        data: TagAdminGetTagDefinitionsStatus501Plain;
    } | {
        contentType: "application/json";
        data: TagAdminGetTagDefinitionsStatus501Json;
    } | {
        contentType: "text/json";
        data: TagAdminGetTagDefinitionsStatus501Json2;
    });
};

/**
 * @description Union of all possible responses
*/
export type TagAdminGetTagDefinitionsResponse = (TagAdminGetTagDefinitionsStatus200 | TagAdminGetTagDefinitionsStatus400 | TagAdminGetTagDefinitionsStatus401 | TagAdminGetTagDefinitionsStatus403 | TagAdminGetTagDefinitionsStatus404 | TagAdminGetTagDefinitionsStatus500 | TagAdminGetTagDefinitionsStatus501);
