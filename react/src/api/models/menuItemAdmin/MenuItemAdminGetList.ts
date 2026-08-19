/* oxlint-disable */

import type { VoloAbpApplicationDtosListResultDto1VoloCmsKitMenusMenuItemDtoVoloCmsKitCommonApplicationContractsVersion10600CultureneutralPublicKeyTokennull } from '../volo/abp/application/dtos/listResultDto1Volo/cmsKit/menus/menuItemDtoVolo/cmsKit/common/application/ContractsVersion10600CultureneutralPublicKeyTokennull'
import type { VoloAbpHttpRemoteServiceErrorResponse } from '../volo/abp/http/RemoteServiceErrorResponse'

export type MenuItemAdminGetListStatus200Plain = VoloAbpApplicationDtosListResultDto1VoloCmsKitMenusMenuItemDtoVoloCmsKitCommonApplicationContractsVersion10600CultureneutralPublicKeyTokennull;

export type MenuItemAdminGetListStatus200Json = VoloAbpApplicationDtosListResultDto1VoloCmsKitMenusMenuItemDtoVoloCmsKitCommonApplicationContractsVersion10600CultureneutralPublicKeyTokennull;

export type MenuItemAdminGetListStatus200Json2 = VoloAbpApplicationDtosListResultDto1VoloCmsKitMenusMenuItemDtoVoloCmsKitCommonApplicationContractsVersion10600CultureneutralPublicKeyTokennull;

export type MenuItemAdminGetListStatus200 = (MenuItemAdminGetListStatus200Plain | MenuItemAdminGetListStatus200Json | MenuItemAdminGetListStatus200Json2);

export type MenuItemAdminGetListStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuItemAdminGetListStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuItemAdminGetListStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuItemAdminGetListStatus400 = (MenuItemAdminGetListStatus400Plain | MenuItemAdminGetListStatus400Json | MenuItemAdminGetListStatus400Json2);

export type MenuItemAdminGetListStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuItemAdminGetListStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuItemAdminGetListStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuItemAdminGetListStatus401 = (MenuItemAdminGetListStatus401Plain | MenuItemAdminGetListStatus401Json | MenuItemAdminGetListStatus401Json2);

export type MenuItemAdminGetListStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuItemAdminGetListStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuItemAdminGetListStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuItemAdminGetListStatus403 = (MenuItemAdminGetListStatus403Plain | MenuItemAdminGetListStatus403Json | MenuItemAdminGetListStatus403Json2);

export type MenuItemAdminGetListStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuItemAdminGetListStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuItemAdminGetListStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuItemAdminGetListStatus404 = (MenuItemAdminGetListStatus404Plain | MenuItemAdminGetListStatus404Json | MenuItemAdminGetListStatus404Json2);

export type MenuItemAdminGetListStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuItemAdminGetListStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuItemAdminGetListStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuItemAdminGetListStatus500 = (MenuItemAdminGetListStatus500Plain | MenuItemAdminGetListStatus500Json | MenuItemAdminGetListStatus500Json2);

export type MenuItemAdminGetListStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuItemAdminGetListStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuItemAdminGetListStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuItemAdminGetListStatus501 = (MenuItemAdminGetListStatus501Plain | MenuItemAdminGetListStatus501Json | MenuItemAdminGetListStatus501Json2);

export type MenuItemAdminGetListOptions = {
    body?: never;
    path?: never;
    query?: never;
    headers?: never;
};

export type MenuItemAdminGetListResponses = {
    "200": ({
        contentType: "text/plain";
        data: MenuItemAdminGetListStatus200Plain;
    } | {
        contentType: "application/json";
        data: MenuItemAdminGetListStatus200Json;
    } | {
        contentType: "text/json";
        data: MenuItemAdminGetListStatus200Json2;
    });
    "400": ({
        contentType: "text/plain";
        data: MenuItemAdminGetListStatus400Plain;
    } | {
        contentType: "application/json";
        data: MenuItemAdminGetListStatus400Json;
    } | {
        contentType: "text/json";
        data: MenuItemAdminGetListStatus400Json2;
    });
    "401": ({
        contentType: "text/plain";
        data: MenuItemAdminGetListStatus401Plain;
    } | {
        contentType: "application/json";
        data: MenuItemAdminGetListStatus401Json;
    } | {
        contentType: "text/json";
        data: MenuItemAdminGetListStatus401Json2;
    });
    "403": ({
        contentType: "text/plain";
        data: MenuItemAdminGetListStatus403Plain;
    } | {
        contentType: "application/json";
        data: MenuItemAdminGetListStatus403Json;
    } | {
        contentType: "text/json";
        data: MenuItemAdminGetListStatus403Json2;
    });
    "404": ({
        contentType: "text/plain";
        data: MenuItemAdminGetListStatus404Plain;
    } | {
        contentType: "application/json";
        data: MenuItemAdminGetListStatus404Json;
    } | {
        contentType: "text/json";
        data: MenuItemAdminGetListStatus404Json2;
    });
    "500": ({
        contentType: "text/plain";
        data: MenuItemAdminGetListStatus500Plain;
    } | {
        contentType: "application/json";
        data: MenuItemAdminGetListStatus500Json;
    } | {
        contentType: "text/json";
        data: MenuItemAdminGetListStatus500Json2;
    });
    "501": ({
        contentType: "text/plain";
        data: MenuItemAdminGetListStatus501Plain;
    } | {
        contentType: "application/json";
        data: MenuItemAdminGetListStatus501Json;
    } | {
        contentType: "text/json";
        data: MenuItemAdminGetListStatus501Json2;
    });
};

/**
 * @description Union of all possible responses
*/
export type MenuItemAdminGetListResponse = (MenuItemAdminGetListStatus200 | MenuItemAdminGetListStatus400 | MenuItemAdminGetListStatus401 | MenuItemAdminGetListStatus403 | MenuItemAdminGetListStatus404 | MenuItemAdminGetListStatus500 | MenuItemAdminGetListStatus501);
