/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from '../volo/abp/http/RemoteServiceErrorResponse'
import type { VoloCmsKitMenusMenuItemDto } from '../volo/cmsKit/menus/MenuItemDto'

export type MenuItemPublicGetListStatus200Plain = VoloCmsKitMenusMenuItemDto[];

export type MenuItemPublicGetListStatus200Json = VoloCmsKitMenusMenuItemDto[];

export type MenuItemPublicGetListStatus200Json2 = VoloCmsKitMenusMenuItemDto[];

export type MenuItemPublicGetListStatus200 = (MenuItemPublicGetListStatus200Plain | MenuItemPublicGetListStatus200Json | MenuItemPublicGetListStatus200Json2);

export type MenuItemPublicGetListStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuItemPublicGetListStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuItemPublicGetListStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuItemPublicGetListStatus400 = (MenuItemPublicGetListStatus400Plain | MenuItemPublicGetListStatus400Json | MenuItemPublicGetListStatus400Json2);

export type MenuItemPublicGetListStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuItemPublicGetListStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuItemPublicGetListStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuItemPublicGetListStatus401 = (MenuItemPublicGetListStatus401Plain | MenuItemPublicGetListStatus401Json | MenuItemPublicGetListStatus401Json2);

export type MenuItemPublicGetListStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuItemPublicGetListStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuItemPublicGetListStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuItemPublicGetListStatus403 = (MenuItemPublicGetListStatus403Plain | MenuItemPublicGetListStatus403Json | MenuItemPublicGetListStatus403Json2);

export type MenuItemPublicGetListStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuItemPublicGetListStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuItemPublicGetListStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuItemPublicGetListStatus404 = (MenuItemPublicGetListStatus404Plain | MenuItemPublicGetListStatus404Json | MenuItemPublicGetListStatus404Json2);

export type MenuItemPublicGetListStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuItemPublicGetListStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuItemPublicGetListStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuItemPublicGetListStatus500 = (MenuItemPublicGetListStatus500Plain | MenuItemPublicGetListStatus500Json | MenuItemPublicGetListStatus500Json2);

export type MenuItemPublicGetListStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuItemPublicGetListStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuItemPublicGetListStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuItemPublicGetListStatus501 = (MenuItemPublicGetListStatus501Plain | MenuItemPublicGetListStatus501Json | MenuItemPublicGetListStatus501Json2);

export type MenuItemPublicGetListOptions = {
    body?: never;
    path?: never;
    query?: never;
    headers?: never;
};

export type MenuItemPublicGetListResponses = {
    "200": ({
        contentType: "text/plain";
        data: MenuItemPublicGetListStatus200Plain;
    } | {
        contentType: "application/json";
        data: MenuItemPublicGetListStatus200Json;
    } | {
        contentType: "text/json";
        data: MenuItemPublicGetListStatus200Json2;
    });
    "400": ({
        contentType: "text/plain";
        data: MenuItemPublicGetListStatus400Plain;
    } | {
        contentType: "application/json";
        data: MenuItemPublicGetListStatus400Json;
    } | {
        contentType: "text/json";
        data: MenuItemPublicGetListStatus400Json2;
    });
    "401": ({
        contentType: "text/plain";
        data: MenuItemPublicGetListStatus401Plain;
    } | {
        contentType: "application/json";
        data: MenuItemPublicGetListStatus401Json;
    } | {
        contentType: "text/json";
        data: MenuItemPublicGetListStatus401Json2;
    });
    "403": ({
        contentType: "text/plain";
        data: MenuItemPublicGetListStatus403Plain;
    } | {
        contentType: "application/json";
        data: MenuItemPublicGetListStatus403Json;
    } | {
        contentType: "text/json";
        data: MenuItemPublicGetListStatus403Json2;
    });
    "404": ({
        contentType: "text/plain";
        data: MenuItemPublicGetListStatus404Plain;
    } | {
        contentType: "application/json";
        data: MenuItemPublicGetListStatus404Json;
    } | {
        contentType: "text/json";
        data: MenuItemPublicGetListStatus404Json2;
    });
    "500": ({
        contentType: "text/plain";
        data: MenuItemPublicGetListStatus500Plain;
    } | {
        contentType: "application/json";
        data: MenuItemPublicGetListStatus500Json;
    } | {
        contentType: "text/json";
        data: MenuItemPublicGetListStatus500Json2;
    });
    "501": ({
        contentType: "text/plain";
        data: MenuItemPublicGetListStatus501Plain;
    } | {
        contentType: "application/json";
        data: MenuItemPublicGetListStatus501Json;
    } | {
        contentType: "text/json";
        data: MenuItemPublicGetListStatus501Json2;
    });
};

/**
 * @description Union of all possible responses
*/
export type MenuItemPublicGetListResponse = (MenuItemPublicGetListStatus200 | MenuItemPublicGetListStatus400 | MenuItemPublicGetListStatus401 | MenuItemPublicGetListStatus403 | MenuItemPublicGetListStatus404 | MenuItemPublicGetListStatus500 | MenuItemPublicGetListStatus501);
