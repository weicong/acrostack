/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from '../volo/abp/http/RemoteServiceErrorResponse'
import type { VoloAbpPermissionManagementGetResourcePermissionWithProviderListResultDto } from '../volo/abp/permissionManagement/GetResourcePermissionWithProviderListResultDto'

export type PermissionsGetResourceByProviderQuery = {
    resourceName?: string;
    resourceKey?: string;
    providerName?: string;
    providerKey?: string;
};

export type PermissionsGetResourceByProviderStatus200Plain = VoloAbpPermissionManagementGetResourcePermissionWithProviderListResultDto;

export type PermissionsGetResourceByProviderStatus200Json = VoloAbpPermissionManagementGetResourcePermissionWithProviderListResultDto;

export type PermissionsGetResourceByProviderStatus200Json2 = VoloAbpPermissionManagementGetResourcePermissionWithProviderListResultDto;

export type PermissionsGetResourceByProviderStatus200 = (PermissionsGetResourceByProviderStatus200Plain | PermissionsGetResourceByProviderStatus200Json | PermissionsGetResourceByProviderStatus200Json2);

export type PermissionsGetResourceByProviderStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type PermissionsGetResourceByProviderStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

export type PermissionsGetResourceByProviderStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type PermissionsGetResourceByProviderStatus400 = (PermissionsGetResourceByProviderStatus400Plain | PermissionsGetResourceByProviderStatus400Json | PermissionsGetResourceByProviderStatus400Json2);

export type PermissionsGetResourceByProviderStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type PermissionsGetResourceByProviderStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

export type PermissionsGetResourceByProviderStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type PermissionsGetResourceByProviderStatus401 = (PermissionsGetResourceByProviderStatus401Plain | PermissionsGetResourceByProviderStatus401Json | PermissionsGetResourceByProviderStatus401Json2);

export type PermissionsGetResourceByProviderStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type PermissionsGetResourceByProviderStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

export type PermissionsGetResourceByProviderStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type PermissionsGetResourceByProviderStatus403 = (PermissionsGetResourceByProviderStatus403Plain | PermissionsGetResourceByProviderStatus403Json | PermissionsGetResourceByProviderStatus403Json2);

export type PermissionsGetResourceByProviderStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type PermissionsGetResourceByProviderStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

export type PermissionsGetResourceByProviderStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type PermissionsGetResourceByProviderStatus404 = (PermissionsGetResourceByProviderStatus404Plain | PermissionsGetResourceByProviderStatus404Json | PermissionsGetResourceByProviderStatus404Json2);

export type PermissionsGetResourceByProviderStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type PermissionsGetResourceByProviderStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

export type PermissionsGetResourceByProviderStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type PermissionsGetResourceByProviderStatus500 = (PermissionsGetResourceByProviderStatus500Plain | PermissionsGetResourceByProviderStatus500Json | PermissionsGetResourceByProviderStatus500Json2);

export type PermissionsGetResourceByProviderStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type PermissionsGetResourceByProviderStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

export type PermissionsGetResourceByProviderStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type PermissionsGetResourceByProviderStatus501 = (PermissionsGetResourceByProviderStatus501Plain | PermissionsGetResourceByProviderStatus501Json | PermissionsGetResourceByProviderStatus501Json2);

export type PermissionsGetResourceByProviderOptions = {
    body?: never;
    path?: never;
    query?: PermissionsGetResourceByProviderQuery;
    headers?: never;
};

export type PermissionsGetResourceByProviderResponses = {
    "200": ({
        contentType: "text/plain";
        data: PermissionsGetResourceByProviderStatus200Plain;
    } | {
        contentType: "application/json";
        data: PermissionsGetResourceByProviderStatus200Json;
    } | {
        contentType: "text/json";
        data: PermissionsGetResourceByProviderStatus200Json2;
    });
    "400": ({
        contentType: "text/plain";
        data: PermissionsGetResourceByProviderStatus400Plain;
    } | {
        contentType: "application/json";
        data: PermissionsGetResourceByProviderStatus400Json;
    } | {
        contentType: "text/json";
        data: PermissionsGetResourceByProviderStatus400Json2;
    });
    "401": ({
        contentType: "text/plain";
        data: PermissionsGetResourceByProviderStatus401Plain;
    } | {
        contentType: "application/json";
        data: PermissionsGetResourceByProviderStatus401Json;
    } | {
        contentType: "text/json";
        data: PermissionsGetResourceByProviderStatus401Json2;
    });
    "403": ({
        contentType: "text/plain";
        data: PermissionsGetResourceByProviderStatus403Plain;
    } | {
        contentType: "application/json";
        data: PermissionsGetResourceByProviderStatus403Json;
    } | {
        contentType: "text/json";
        data: PermissionsGetResourceByProviderStatus403Json2;
    });
    "404": ({
        contentType: "text/plain";
        data: PermissionsGetResourceByProviderStatus404Plain;
    } | {
        contentType: "application/json";
        data: PermissionsGetResourceByProviderStatus404Json;
    } | {
        contentType: "text/json";
        data: PermissionsGetResourceByProviderStatus404Json2;
    });
    "500": ({
        contentType: "text/plain";
        data: PermissionsGetResourceByProviderStatus500Plain;
    } | {
        contentType: "application/json";
        data: PermissionsGetResourceByProviderStatus500Json;
    } | {
        contentType: "text/json";
        data: PermissionsGetResourceByProviderStatus500Json2;
    });
    "501": ({
        contentType: "text/plain";
        data: PermissionsGetResourceByProviderStatus501Plain;
    } | {
        contentType: "application/json";
        data: PermissionsGetResourceByProviderStatus501Json;
    } | {
        contentType: "text/json";
        data: PermissionsGetResourceByProviderStatus501Json2;
    });
};

/**
 * @description Union of all possible responses
*/
export type PermissionsGetResourceByProviderResponse = (PermissionsGetResourceByProviderStatus200 | PermissionsGetResourceByProviderStatus400 | PermissionsGetResourceByProviderStatus401 | PermissionsGetResourceByProviderStatus403 | PermissionsGetResourceByProviderStatus404 | PermissionsGetResourceByProviderStatus500 | PermissionsGetResourceByProviderStatus501);
