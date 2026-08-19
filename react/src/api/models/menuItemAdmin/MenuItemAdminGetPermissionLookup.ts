/* oxlint-disable */

import type { VoloAbpApplicationDtosListResultDto1VoloCmsKitAdminMenusPermissionLookupDtoVoloCmsKitAdminApplicationContractsVersion10600CultureneutralPublicKeyTokennull } from '../volo/abp/application/dtos/listResultDto1Volo/cmsKit/admin/menus/permissionLookupDtoVolo/cmsKit/admin/application/ContractsVersion10600CultureneutralPublicKeyTokennull'
import type { VoloAbpHttpRemoteServiceErrorResponse } from '../volo/abp/http/RemoteServiceErrorResponse'

export type MenuItemAdminGetPermissionLookupQuery = {
    Filter?: string;
};

export type MenuItemAdminGetPermissionLookupStatus200Plain = VoloAbpApplicationDtosListResultDto1VoloCmsKitAdminMenusPermissionLookupDtoVoloCmsKitAdminApplicationContractsVersion10600CultureneutralPublicKeyTokennull;

export type MenuItemAdminGetPermissionLookupStatus200Json = VoloAbpApplicationDtosListResultDto1VoloCmsKitAdminMenusPermissionLookupDtoVoloCmsKitAdminApplicationContractsVersion10600CultureneutralPublicKeyTokennull;

export type MenuItemAdminGetPermissionLookupStatus200Json2 = VoloAbpApplicationDtosListResultDto1VoloCmsKitAdminMenusPermissionLookupDtoVoloCmsKitAdminApplicationContractsVersion10600CultureneutralPublicKeyTokennull;

export type MenuItemAdminGetPermissionLookupStatus200 = (MenuItemAdminGetPermissionLookupStatus200Plain | MenuItemAdminGetPermissionLookupStatus200Json | MenuItemAdminGetPermissionLookupStatus200Json2);

export type MenuItemAdminGetPermissionLookupStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuItemAdminGetPermissionLookupStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuItemAdminGetPermissionLookupStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuItemAdminGetPermissionLookupStatus400 = (MenuItemAdminGetPermissionLookupStatus400Plain | MenuItemAdminGetPermissionLookupStatus400Json | MenuItemAdminGetPermissionLookupStatus400Json2);

export type MenuItemAdminGetPermissionLookupStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuItemAdminGetPermissionLookupStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuItemAdminGetPermissionLookupStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuItemAdminGetPermissionLookupStatus401 = (MenuItemAdminGetPermissionLookupStatus401Plain | MenuItemAdminGetPermissionLookupStatus401Json | MenuItemAdminGetPermissionLookupStatus401Json2);

export type MenuItemAdminGetPermissionLookupStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuItemAdminGetPermissionLookupStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuItemAdminGetPermissionLookupStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuItemAdminGetPermissionLookupStatus403 = (MenuItemAdminGetPermissionLookupStatus403Plain | MenuItemAdminGetPermissionLookupStatus403Json | MenuItemAdminGetPermissionLookupStatus403Json2);

export type MenuItemAdminGetPermissionLookupStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuItemAdminGetPermissionLookupStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuItemAdminGetPermissionLookupStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuItemAdminGetPermissionLookupStatus404 = (MenuItemAdminGetPermissionLookupStatus404Plain | MenuItemAdminGetPermissionLookupStatus404Json | MenuItemAdminGetPermissionLookupStatus404Json2);

export type MenuItemAdminGetPermissionLookupStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuItemAdminGetPermissionLookupStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuItemAdminGetPermissionLookupStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuItemAdminGetPermissionLookupStatus500 = (MenuItemAdminGetPermissionLookupStatus500Plain | MenuItemAdminGetPermissionLookupStatus500Json | MenuItemAdminGetPermissionLookupStatus500Json2);

export type MenuItemAdminGetPermissionLookupStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuItemAdminGetPermissionLookupStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuItemAdminGetPermissionLookupStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuItemAdminGetPermissionLookupStatus501 = (MenuItemAdminGetPermissionLookupStatus501Plain | MenuItemAdminGetPermissionLookupStatus501Json | MenuItemAdminGetPermissionLookupStatus501Json2);

export type MenuItemAdminGetPermissionLookupOptions = {
    body?: never;
    path?: never;
    query?: MenuItemAdminGetPermissionLookupQuery;
    headers?: never;
};

export type MenuItemAdminGetPermissionLookupResponses = {
    "200": ({
        contentType: "text/plain";
        data: MenuItemAdminGetPermissionLookupStatus200Plain;
    } | {
        contentType: "application/json";
        data: MenuItemAdminGetPermissionLookupStatus200Json;
    } | {
        contentType: "text/json";
        data: MenuItemAdminGetPermissionLookupStatus200Json2;
    });
    "400": ({
        contentType: "text/plain";
        data: MenuItemAdminGetPermissionLookupStatus400Plain;
    } | {
        contentType: "application/json";
        data: MenuItemAdminGetPermissionLookupStatus400Json;
    } | {
        contentType: "text/json";
        data: MenuItemAdminGetPermissionLookupStatus400Json2;
    });
    "401": ({
        contentType: "text/plain";
        data: MenuItemAdminGetPermissionLookupStatus401Plain;
    } | {
        contentType: "application/json";
        data: MenuItemAdminGetPermissionLookupStatus401Json;
    } | {
        contentType: "text/json";
        data: MenuItemAdminGetPermissionLookupStatus401Json2;
    });
    "403": ({
        contentType: "text/plain";
        data: MenuItemAdminGetPermissionLookupStatus403Plain;
    } | {
        contentType: "application/json";
        data: MenuItemAdminGetPermissionLookupStatus403Json;
    } | {
        contentType: "text/json";
        data: MenuItemAdminGetPermissionLookupStatus403Json2;
    });
    "404": ({
        contentType: "text/plain";
        data: MenuItemAdminGetPermissionLookupStatus404Plain;
    } | {
        contentType: "application/json";
        data: MenuItemAdminGetPermissionLookupStatus404Json;
    } | {
        contentType: "text/json";
        data: MenuItemAdminGetPermissionLookupStatus404Json2;
    });
    "500": ({
        contentType: "text/plain";
        data: MenuItemAdminGetPermissionLookupStatus500Plain;
    } | {
        contentType: "application/json";
        data: MenuItemAdminGetPermissionLookupStatus500Json;
    } | {
        contentType: "text/json";
        data: MenuItemAdminGetPermissionLookupStatus500Json2;
    });
    "501": ({
        contentType: "text/plain";
        data: MenuItemAdminGetPermissionLookupStatus501Plain;
    } | {
        contentType: "application/json";
        data: MenuItemAdminGetPermissionLookupStatus501Json;
    } | {
        contentType: "text/json";
        data: MenuItemAdminGetPermissionLookupStatus501Json2;
    });
};

/**
 * @description Union of all possible responses
*/
export type MenuItemAdminGetPermissionLookupResponse = (MenuItemAdminGetPermissionLookupStatus200 | MenuItemAdminGetPermissionLookupStatus400 | MenuItemAdminGetPermissionLookupStatus401 | MenuItemAdminGetPermissionLookupStatus403 | MenuItemAdminGetPermissionLookupStatus404 | MenuItemAdminGetPermissionLookupStatus500 | MenuItemAdminGetPermissionLookupStatus501);
