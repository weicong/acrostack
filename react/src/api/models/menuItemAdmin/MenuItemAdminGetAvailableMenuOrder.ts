/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from '../volo/abp/http/RemoteServiceErrorResponse'

export type MenuItemAdminGetAvailableMenuOrderQuery = {
    /**
     * @description
     * Format: `uuid`
     * @type string | undefined
    */
    parentId?: string;
};

/**
 * @description
 * Format: `int32`
 * @type integer
*/
export type MenuItemAdminGetAvailableMenuOrderStatus200Plain = number;

/**
 * @description
 * Format: `int32`
 * @type integer
*/
export type MenuItemAdminGetAvailableMenuOrderStatus200Json = number;

/**
 * @description
 * Format: `int32`
 * @type integer
*/
export type MenuItemAdminGetAvailableMenuOrderStatus200Json2 = number;

export type MenuItemAdminGetAvailableMenuOrderStatus200 = (MenuItemAdminGetAvailableMenuOrderStatus200Plain | MenuItemAdminGetAvailableMenuOrderStatus200Json | MenuItemAdminGetAvailableMenuOrderStatus200Json2);

export type MenuItemAdminGetAvailableMenuOrderStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuItemAdminGetAvailableMenuOrderStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuItemAdminGetAvailableMenuOrderStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuItemAdminGetAvailableMenuOrderStatus400 = (MenuItemAdminGetAvailableMenuOrderStatus400Plain | MenuItemAdminGetAvailableMenuOrderStatus400Json | MenuItemAdminGetAvailableMenuOrderStatus400Json2);

export type MenuItemAdminGetAvailableMenuOrderStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuItemAdminGetAvailableMenuOrderStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuItemAdminGetAvailableMenuOrderStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuItemAdminGetAvailableMenuOrderStatus401 = (MenuItemAdminGetAvailableMenuOrderStatus401Plain | MenuItemAdminGetAvailableMenuOrderStatus401Json | MenuItemAdminGetAvailableMenuOrderStatus401Json2);

export type MenuItemAdminGetAvailableMenuOrderStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuItemAdminGetAvailableMenuOrderStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuItemAdminGetAvailableMenuOrderStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuItemAdminGetAvailableMenuOrderStatus403 = (MenuItemAdminGetAvailableMenuOrderStatus403Plain | MenuItemAdminGetAvailableMenuOrderStatus403Json | MenuItemAdminGetAvailableMenuOrderStatus403Json2);

export type MenuItemAdminGetAvailableMenuOrderStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuItemAdminGetAvailableMenuOrderStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuItemAdminGetAvailableMenuOrderStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuItemAdminGetAvailableMenuOrderStatus404 = (MenuItemAdminGetAvailableMenuOrderStatus404Plain | MenuItemAdminGetAvailableMenuOrderStatus404Json | MenuItemAdminGetAvailableMenuOrderStatus404Json2);

export type MenuItemAdminGetAvailableMenuOrderStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuItemAdminGetAvailableMenuOrderStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuItemAdminGetAvailableMenuOrderStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuItemAdminGetAvailableMenuOrderStatus500 = (MenuItemAdminGetAvailableMenuOrderStatus500Plain | MenuItemAdminGetAvailableMenuOrderStatus500Json | MenuItemAdminGetAvailableMenuOrderStatus500Json2);

export type MenuItemAdminGetAvailableMenuOrderStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuItemAdminGetAvailableMenuOrderStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuItemAdminGetAvailableMenuOrderStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuItemAdminGetAvailableMenuOrderStatus501 = (MenuItemAdminGetAvailableMenuOrderStatus501Plain | MenuItemAdminGetAvailableMenuOrderStatus501Json | MenuItemAdminGetAvailableMenuOrderStatus501Json2);

export type MenuItemAdminGetAvailableMenuOrderOptions = {
    body?: never;
    path?: never;
    query?: MenuItemAdminGetAvailableMenuOrderQuery;
    headers?: never;
};

export type MenuItemAdminGetAvailableMenuOrderResponses = {
    "200": ({
        contentType: "text/plain";
        data: MenuItemAdminGetAvailableMenuOrderStatus200Plain;
    } | {
        contentType: "application/json";
        data: MenuItemAdminGetAvailableMenuOrderStatus200Json;
    } | {
        contentType: "text/json";
        data: MenuItemAdminGetAvailableMenuOrderStatus200Json2;
    });
    "400": ({
        contentType: "text/plain";
        data: MenuItemAdminGetAvailableMenuOrderStatus400Plain;
    } | {
        contentType: "application/json";
        data: MenuItemAdminGetAvailableMenuOrderStatus400Json;
    } | {
        contentType: "text/json";
        data: MenuItemAdminGetAvailableMenuOrderStatus400Json2;
    });
    "401": ({
        contentType: "text/plain";
        data: MenuItemAdminGetAvailableMenuOrderStatus401Plain;
    } | {
        contentType: "application/json";
        data: MenuItemAdminGetAvailableMenuOrderStatus401Json;
    } | {
        contentType: "text/json";
        data: MenuItemAdminGetAvailableMenuOrderStatus401Json2;
    });
    "403": ({
        contentType: "text/plain";
        data: MenuItemAdminGetAvailableMenuOrderStatus403Plain;
    } | {
        contentType: "application/json";
        data: MenuItemAdminGetAvailableMenuOrderStatus403Json;
    } | {
        contentType: "text/json";
        data: MenuItemAdminGetAvailableMenuOrderStatus403Json2;
    });
    "404": ({
        contentType: "text/plain";
        data: MenuItemAdminGetAvailableMenuOrderStatus404Plain;
    } | {
        contentType: "application/json";
        data: MenuItemAdminGetAvailableMenuOrderStatus404Json;
    } | {
        contentType: "text/json";
        data: MenuItemAdminGetAvailableMenuOrderStatus404Json2;
    });
    "500": ({
        contentType: "text/plain";
        data: MenuItemAdminGetAvailableMenuOrderStatus500Plain;
    } | {
        contentType: "application/json";
        data: MenuItemAdminGetAvailableMenuOrderStatus500Json;
    } | {
        contentType: "text/json";
        data: MenuItemAdminGetAvailableMenuOrderStatus500Json2;
    });
    "501": ({
        contentType: "text/plain";
        data: MenuItemAdminGetAvailableMenuOrderStatus501Plain;
    } | {
        contentType: "application/json";
        data: MenuItemAdminGetAvailableMenuOrderStatus501Json;
    } | {
        contentType: "text/json";
        data: MenuItemAdminGetAvailableMenuOrderStatus501Json2;
    });
};

/**
 * @description Union of all possible responses
*/
export type MenuItemAdminGetAvailableMenuOrderResponse = (MenuItemAdminGetAvailableMenuOrderStatus200 | MenuItemAdminGetAvailableMenuOrderStatus400 | MenuItemAdminGetAvailableMenuOrderStatus401 | MenuItemAdminGetAvailableMenuOrderStatus403 | MenuItemAdminGetAvailableMenuOrderStatus404 | MenuItemAdminGetAvailableMenuOrderStatus500 | MenuItemAdminGetAvailableMenuOrderStatus501);
