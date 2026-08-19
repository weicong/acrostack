/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from '../volo/abp/http/RemoteServiceErrorResponse'
import type { VoloCmsKitAdminMenusMenuItemUpdateInput } from '../volo/cmsKit/admin/menus/MenuItemUpdateInput'
import type { VoloCmsKitMenusMenuItemDto } from '../volo/cmsKit/menus/MenuItemDto'

export type MenuItemAdminUpdatePath = {
    /**
     * @description
     * Format: `uuid`
     * @type string
    */
    id: string;
};

export type MenuItemAdminUpdateStatus200Plain = VoloCmsKitMenusMenuItemDto;

export type MenuItemAdminUpdateStatus200Json = VoloCmsKitMenusMenuItemDto;

export type MenuItemAdminUpdateStatus200Json2 = VoloCmsKitMenusMenuItemDto;

export type MenuItemAdminUpdateStatus200 = (MenuItemAdminUpdateStatus200Plain | MenuItemAdminUpdateStatus200Json | MenuItemAdminUpdateStatus200Json2);

export type MenuItemAdminUpdateStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuItemAdminUpdateStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuItemAdminUpdateStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuItemAdminUpdateStatus400 = (MenuItemAdminUpdateStatus400Plain | MenuItemAdminUpdateStatus400Json | MenuItemAdminUpdateStatus400Json2);

export type MenuItemAdminUpdateStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuItemAdminUpdateStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuItemAdminUpdateStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuItemAdminUpdateStatus401 = (MenuItemAdminUpdateStatus401Plain | MenuItemAdminUpdateStatus401Json | MenuItemAdminUpdateStatus401Json2);

export type MenuItemAdminUpdateStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuItemAdminUpdateStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuItemAdminUpdateStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuItemAdminUpdateStatus403 = (MenuItemAdminUpdateStatus403Plain | MenuItemAdminUpdateStatus403Json | MenuItemAdminUpdateStatus403Json2);

export type MenuItemAdminUpdateStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuItemAdminUpdateStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuItemAdminUpdateStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuItemAdminUpdateStatus404 = (MenuItemAdminUpdateStatus404Plain | MenuItemAdminUpdateStatus404Json | MenuItemAdminUpdateStatus404Json2);

export type MenuItemAdminUpdateStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuItemAdminUpdateStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuItemAdminUpdateStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuItemAdminUpdateStatus500 = (MenuItemAdminUpdateStatus500Plain | MenuItemAdminUpdateStatus500Json | MenuItemAdminUpdateStatus500Json2);

export type MenuItemAdminUpdateStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuItemAdminUpdateStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuItemAdminUpdateStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuItemAdminUpdateStatus501 = (MenuItemAdminUpdateStatus501Plain | MenuItemAdminUpdateStatus501Json | MenuItemAdminUpdateStatus501Json2);

export type MenuItemAdminUpdateBodyJson = Omit<NonNullable<VoloCmsKitAdminMenusMenuItemUpdateInput>, "extraProperties"> | undefined;

export type MenuItemAdminUpdateBodyJson2 = Omit<NonNullable<VoloCmsKitAdminMenusMenuItemUpdateInput>, "extraProperties"> | undefined;

export type MenuItemAdminUpdateBodyJson3 = Omit<NonNullable<VoloCmsKitAdminMenusMenuItemUpdateInput>, "extraProperties"> | undefined;

export type MenuItemAdminUpdateBody = (MenuItemAdminUpdateBodyJson | MenuItemAdminUpdateBodyJson2 | MenuItemAdminUpdateBodyJson3);

export type MenuItemAdminUpdateOptions = {
    body: MenuItemAdminUpdateBody;
    path: MenuItemAdminUpdatePath;
    query?: never;
    headers?: never;
};

export type MenuItemAdminUpdateResponses = {
    "200": ({
        contentType: "text/plain";
        data: MenuItemAdminUpdateStatus200Plain;
    } | {
        contentType: "application/json";
        data: MenuItemAdminUpdateStatus200Json;
    } | {
        contentType: "text/json";
        data: MenuItemAdminUpdateStatus200Json2;
    });
    "400": ({
        contentType: "text/plain";
        data: MenuItemAdminUpdateStatus400Plain;
    } | {
        contentType: "application/json";
        data: MenuItemAdminUpdateStatus400Json;
    } | {
        contentType: "text/json";
        data: MenuItemAdminUpdateStatus400Json2;
    });
    "401": ({
        contentType: "text/plain";
        data: MenuItemAdminUpdateStatus401Plain;
    } | {
        contentType: "application/json";
        data: MenuItemAdminUpdateStatus401Json;
    } | {
        contentType: "text/json";
        data: MenuItemAdminUpdateStatus401Json2;
    });
    "403": ({
        contentType: "text/plain";
        data: MenuItemAdminUpdateStatus403Plain;
    } | {
        contentType: "application/json";
        data: MenuItemAdminUpdateStatus403Json;
    } | {
        contentType: "text/json";
        data: MenuItemAdminUpdateStatus403Json2;
    });
    "404": ({
        contentType: "text/plain";
        data: MenuItemAdminUpdateStatus404Plain;
    } | {
        contentType: "application/json";
        data: MenuItemAdminUpdateStatus404Json;
    } | {
        contentType: "text/json";
        data: MenuItemAdminUpdateStatus404Json2;
    });
    "500": ({
        contentType: "text/plain";
        data: MenuItemAdminUpdateStatus500Plain;
    } | {
        contentType: "application/json";
        data: MenuItemAdminUpdateStatus500Json;
    } | {
        contentType: "text/json";
        data: MenuItemAdminUpdateStatus500Json2;
    });
    "501": ({
        contentType: "text/plain";
        data: MenuItemAdminUpdateStatus501Plain;
    } | {
        contentType: "application/json";
        data: MenuItemAdminUpdateStatus501Json;
    } | {
        contentType: "text/json";
        data: MenuItemAdminUpdateStatus501Json2;
    });
};

/**
 * @description Union of all possible responses
*/
export type MenuItemAdminUpdateResponse = (MenuItemAdminUpdateStatus200 | MenuItemAdminUpdateStatus400 | MenuItemAdminUpdateStatus401 | MenuItemAdminUpdateStatus403 | MenuItemAdminUpdateStatus404 | MenuItemAdminUpdateStatus500 | MenuItemAdminUpdateStatus501);
