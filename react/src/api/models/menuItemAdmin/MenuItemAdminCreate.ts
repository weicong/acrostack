/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from '../volo/abp/http/RemoteServiceErrorResponse'
import type { VoloCmsKitAdminMenusMenuItemCreateInput } from '../volo/cmsKit/admin/menus/MenuItemCreateInput'
import type { VoloCmsKitMenusMenuItemDto } from '../volo/cmsKit/menus/MenuItemDto'

export type MenuItemAdminCreateStatus200Plain = VoloCmsKitMenusMenuItemDto;

export type MenuItemAdminCreateStatus200Json = VoloCmsKitMenusMenuItemDto;

export type MenuItemAdminCreateStatus200Json2 = VoloCmsKitMenusMenuItemDto;

export type MenuItemAdminCreateStatus200 = (MenuItemAdminCreateStatus200Plain | MenuItemAdminCreateStatus200Json | MenuItemAdminCreateStatus200Json2);

export type MenuItemAdminCreateStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuItemAdminCreateStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuItemAdminCreateStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuItemAdminCreateStatus400 = (MenuItemAdminCreateStatus400Plain | MenuItemAdminCreateStatus400Json | MenuItemAdminCreateStatus400Json2);

export type MenuItemAdminCreateStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuItemAdminCreateStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuItemAdminCreateStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuItemAdminCreateStatus401 = (MenuItemAdminCreateStatus401Plain | MenuItemAdminCreateStatus401Json | MenuItemAdminCreateStatus401Json2);

export type MenuItemAdminCreateStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuItemAdminCreateStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuItemAdminCreateStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuItemAdminCreateStatus403 = (MenuItemAdminCreateStatus403Plain | MenuItemAdminCreateStatus403Json | MenuItemAdminCreateStatus403Json2);

export type MenuItemAdminCreateStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuItemAdminCreateStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuItemAdminCreateStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuItemAdminCreateStatus404 = (MenuItemAdminCreateStatus404Plain | MenuItemAdminCreateStatus404Json | MenuItemAdminCreateStatus404Json2);

export type MenuItemAdminCreateStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuItemAdminCreateStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuItemAdminCreateStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuItemAdminCreateStatus500 = (MenuItemAdminCreateStatus500Plain | MenuItemAdminCreateStatus500Json | MenuItemAdminCreateStatus500Json2);

export type MenuItemAdminCreateStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuItemAdminCreateStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuItemAdminCreateStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuItemAdminCreateStatus501 = (MenuItemAdminCreateStatus501Plain | MenuItemAdminCreateStatus501Json | MenuItemAdminCreateStatus501Json2);

export type MenuItemAdminCreateBodyJson = Omit<NonNullable<VoloCmsKitAdminMenusMenuItemCreateInput>, "extraProperties"> | undefined;

export type MenuItemAdminCreateBodyJson2 = Omit<NonNullable<VoloCmsKitAdminMenusMenuItemCreateInput>, "extraProperties"> | undefined;

export type MenuItemAdminCreateBodyJson3 = Omit<NonNullable<VoloCmsKitAdminMenusMenuItemCreateInput>, "extraProperties"> | undefined;

export type MenuItemAdminCreateBody = (MenuItemAdminCreateBodyJson | MenuItemAdminCreateBodyJson2 | MenuItemAdminCreateBodyJson3);

export type MenuItemAdminCreateOptions = {
    body: MenuItemAdminCreateBody;
    path?: never;
    query?: never;
    headers?: never;
};

export type MenuItemAdminCreateResponses = {
    "200": ({
        contentType: "text/plain";
        data: MenuItemAdminCreateStatus200Plain;
    } | {
        contentType: "application/json";
        data: MenuItemAdminCreateStatus200Json;
    } | {
        contentType: "text/json";
        data: MenuItemAdminCreateStatus200Json2;
    });
    "400": ({
        contentType: "text/plain";
        data: MenuItemAdminCreateStatus400Plain;
    } | {
        contentType: "application/json";
        data: MenuItemAdminCreateStatus400Json;
    } | {
        contentType: "text/json";
        data: MenuItemAdminCreateStatus400Json2;
    });
    "401": ({
        contentType: "text/plain";
        data: MenuItemAdminCreateStatus401Plain;
    } | {
        contentType: "application/json";
        data: MenuItemAdminCreateStatus401Json;
    } | {
        contentType: "text/json";
        data: MenuItemAdminCreateStatus401Json2;
    });
    "403": ({
        contentType: "text/plain";
        data: MenuItemAdminCreateStatus403Plain;
    } | {
        contentType: "application/json";
        data: MenuItemAdminCreateStatus403Json;
    } | {
        contentType: "text/json";
        data: MenuItemAdminCreateStatus403Json2;
    });
    "404": ({
        contentType: "text/plain";
        data: MenuItemAdminCreateStatus404Plain;
    } | {
        contentType: "application/json";
        data: MenuItemAdminCreateStatus404Json;
    } | {
        contentType: "text/json";
        data: MenuItemAdminCreateStatus404Json2;
    });
    "500": ({
        contentType: "text/plain";
        data: MenuItemAdminCreateStatus500Plain;
    } | {
        contentType: "application/json";
        data: MenuItemAdminCreateStatus500Json;
    } | {
        contentType: "text/json";
        data: MenuItemAdminCreateStatus500Json2;
    });
    "501": ({
        contentType: "text/plain";
        data: MenuItemAdminCreateStatus501Plain;
    } | {
        contentType: "application/json";
        data: MenuItemAdminCreateStatus501Json;
    } | {
        contentType: "text/json";
        data: MenuItemAdminCreateStatus501Json2;
    });
};

/**
 * @description Union of all possible responses
*/
export type MenuItemAdminCreateResponse = (MenuItemAdminCreateStatus200 | MenuItemAdminCreateStatus400 | MenuItemAdminCreateStatus401 | MenuItemAdminCreateStatus403 | MenuItemAdminCreateStatus404 | MenuItemAdminCreateStatus500 | MenuItemAdminCreateStatus501);
