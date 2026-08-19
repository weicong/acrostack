/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from '../volo/abp/http/RemoteServiceErrorResponse'
import type { VoloAbpPermissionManagementGetResourcePermissionDefinitionListResultDto } from '../volo/abp/permissionManagement/GetResourcePermissionDefinitionListResultDto'

export type PermissionsGetResourceDefinitionsQuery = {
    resourceName?: string;
};

export type PermissionsGetResourceDefinitionsStatus200Plain = VoloAbpPermissionManagementGetResourcePermissionDefinitionListResultDto;

export type PermissionsGetResourceDefinitionsStatus200Json = VoloAbpPermissionManagementGetResourcePermissionDefinitionListResultDto;

export type PermissionsGetResourceDefinitionsStatus200Json2 = VoloAbpPermissionManagementGetResourcePermissionDefinitionListResultDto;

export type PermissionsGetResourceDefinitionsStatus200 = (PermissionsGetResourceDefinitionsStatus200Plain | PermissionsGetResourceDefinitionsStatus200Json | PermissionsGetResourceDefinitionsStatus200Json2);

export type PermissionsGetResourceDefinitionsStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type PermissionsGetResourceDefinitionsStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

export type PermissionsGetResourceDefinitionsStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type PermissionsGetResourceDefinitionsStatus400 = (PermissionsGetResourceDefinitionsStatus400Plain | PermissionsGetResourceDefinitionsStatus400Json | PermissionsGetResourceDefinitionsStatus400Json2);

export type PermissionsGetResourceDefinitionsStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type PermissionsGetResourceDefinitionsStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

export type PermissionsGetResourceDefinitionsStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type PermissionsGetResourceDefinitionsStatus401 = (PermissionsGetResourceDefinitionsStatus401Plain | PermissionsGetResourceDefinitionsStatus401Json | PermissionsGetResourceDefinitionsStatus401Json2);

export type PermissionsGetResourceDefinitionsStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type PermissionsGetResourceDefinitionsStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

export type PermissionsGetResourceDefinitionsStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type PermissionsGetResourceDefinitionsStatus403 = (PermissionsGetResourceDefinitionsStatus403Plain | PermissionsGetResourceDefinitionsStatus403Json | PermissionsGetResourceDefinitionsStatus403Json2);

export type PermissionsGetResourceDefinitionsStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type PermissionsGetResourceDefinitionsStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

export type PermissionsGetResourceDefinitionsStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type PermissionsGetResourceDefinitionsStatus404 = (PermissionsGetResourceDefinitionsStatus404Plain | PermissionsGetResourceDefinitionsStatus404Json | PermissionsGetResourceDefinitionsStatus404Json2);

export type PermissionsGetResourceDefinitionsStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type PermissionsGetResourceDefinitionsStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

export type PermissionsGetResourceDefinitionsStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type PermissionsGetResourceDefinitionsStatus500 = (PermissionsGetResourceDefinitionsStatus500Plain | PermissionsGetResourceDefinitionsStatus500Json | PermissionsGetResourceDefinitionsStatus500Json2);

export type PermissionsGetResourceDefinitionsStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type PermissionsGetResourceDefinitionsStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

export type PermissionsGetResourceDefinitionsStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type PermissionsGetResourceDefinitionsStatus501 = (PermissionsGetResourceDefinitionsStatus501Plain | PermissionsGetResourceDefinitionsStatus501Json | PermissionsGetResourceDefinitionsStatus501Json2);

export type PermissionsGetResourceDefinitionsOptions = {
    body?: never;
    path?: never;
    query?: PermissionsGetResourceDefinitionsQuery;
    headers?: never;
};

export type PermissionsGetResourceDefinitionsResponses = {
    "200": ({
        contentType: "text/plain";
        data: PermissionsGetResourceDefinitionsStatus200Plain;
    } | {
        contentType: "application/json";
        data: PermissionsGetResourceDefinitionsStatus200Json;
    } | {
        contentType: "text/json";
        data: PermissionsGetResourceDefinitionsStatus200Json2;
    });
    "400": ({
        contentType: "text/plain";
        data: PermissionsGetResourceDefinitionsStatus400Plain;
    } | {
        contentType: "application/json";
        data: PermissionsGetResourceDefinitionsStatus400Json;
    } | {
        contentType: "text/json";
        data: PermissionsGetResourceDefinitionsStatus400Json2;
    });
    "401": ({
        contentType: "text/plain";
        data: PermissionsGetResourceDefinitionsStatus401Plain;
    } | {
        contentType: "application/json";
        data: PermissionsGetResourceDefinitionsStatus401Json;
    } | {
        contentType: "text/json";
        data: PermissionsGetResourceDefinitionsStatus401Json2;
    });
    "403": ({
        contentType: "text/plain";
        data: PermissionsGetResourceDefinitionsStatus403Plain;
    } | {
        contentType: "application/json";
        data: PermissionsGetResourceDefinitionsStatus403Json;
    } | {
        contentType: "text/json";
        data: PermissionsGetResourceDefinitionsStatus403Json2;
    });
    "404": ({
        contentType: "text/plain";
        data: PermissionsGetResourceDefinitionsStatus404Plain;
    } | {
        contentType: "application/json";
        data: PermissionsGetResourceDefinitionsStatus404Json;
    } | {
        contentType: "text/json";
        data: PermissionsGetResourceDefinitionsStatus404Json2;
    });
    "500": ({
        contentType: "text/plain";
        data: PermissionsGetResourceDefinitionsStatus500Plain;
    } | {
        contentType: "application/json";
        data: PermissionsGetResourceDefinitionsStatus500Json;
    } | {
        contentType: "text/json";
        data: PermissionsGetResourceDefinitionsStatus500Json2;
    });
    "501": ({
        contentType: "text/plain";
        data: PermissionsGetResourceDefinitionsStatus501Plain;
    } | {
        contentType: "application/json";
        data: PermissionsGetResourceDefinitionsStatus501Json;
    } | {
        contentType: "text/json";
        data: PermissionsGetResourceDefinitionsStatus501Json2;
    });
};

/**
 * @description Union of all possible responses
*/
export type PermissionsGetResourceDefinitionsResponse = (PermissionsGetResourceDefinitionsStatus200 | PermissionsGetResourceDefinitionsStatus400 | PermissionsGetResourceDefinitionsStatus401 | PermissionsGetResourceDefinitionsStatus403 | PermissionsGetResourceDefinitionsStatus404 | PermissionsGetResourceDefinitionsStatus500 | PermissionsGetResourceDefinitionsStatus501);
