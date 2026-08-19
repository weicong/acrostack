/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from '../volo/abp/http/RemoteServiceErrorResponse'

export type LoginLogoutStatus200 = unknown;

export type LoginLogoutStatus204 = unknown;

export type LoginLogoutStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type LoginLogoutStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

export type LoginLogoutStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type LoginLogoutStatus400 = (LoginLogoutStatus400Plain | LoginLogoutStatus400Json | LoginLogoutStatus400Json2);

export type LoginLogoutStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type LoginLogoutStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

export type LoginLogoutStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type LoginLogoutStatus401 = (LoginLogoutStatus401Plain | LoginLogoutStatus401Json | LoginLogoutStatus401Json2);

export type LoginLogoutStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type LoginLogoutStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

export type LoginLogoutStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type LoginLogoutStatus403 = (LoginLogoutStatus403Plain | LoginLogoutStatus403Json | LoginLogoutStatus403Json2);

export type LoginLogoutStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type LoginLogoutStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

export type LoginLogoutStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type LoginLogoutStatus404 = (LoginLogoutStatus404Plain | LoginLogoutStatus404Json | LoginLogoutStatus404Json2);

export type LoginLogoutStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type LoginLogoutStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

export type LoginLogoutStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type LoginLogoutStatus500 = (LoginLogoutStatus500Plain | LoginLogoutStatus500Json | LoginLogoutStatus500Json2);

export type LoginLogoutStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type LoginLogoutStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

export type LoginLogoutStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type LoginLogoutStatus501 = (LoginLogoutStatus501Plain | LoginLogoutStatus501Json | LoginLogoutStatus501Json2);

export type LoginLogoutOptions = {
    body?: never;
    path?: never;
    query?: never;
    headers?: never;
};

export type LoginLogoutResponses = {
    "200": LoginLogoutStatus200;
    "204": LoginLogoutStatus204;
    "400": ({
        contentType: "text/plain";
        data: LoginLogoutStatus400Plain;
    } | {
        contentType: "application/json";
        data: LoginLogoutStatus400Json;
    } | {
        contentType: "text/json";
        data: LoginLogoutStatus400Json2;
    });
    "401": ({
        contentType: "text/plain";
        data: LoginLogoutStatus401Plain;
    } | {
        contentType: "application/json";
        data: LoginLogoutStatus401Json;
    } | {
        contentType: "text/json";
        data: LoginLogoutStatus401Json2;
    });
    "403": ({
        contentType: "text/plain";
        data: LoginLogoutStatus403Plain;
    } | {
        contentType: "application/json";
        data: LoginLogoutStatus403Json;
    } | {
        contentType: "text/json";
        data: LoginLogoutStatus403Json2;
    });
    "404": ({
        contentType: "text/plain";
        data: LoginLogoutStatus404Plain;
    } | {
        contentType: "application/json";
        data: LoginLogoutStatus404Json;
    } | {
        contentType: "text/json";
        data: LoginLogoutStatus404Json2;
    });
    "500": ({
        contentType: "text/plain";
        data: LoginLogoutStatus500Plain;
    } | {
        contentType: "application/json";
        data: LoginLogoutStatus500Json;
    } | {
        contentType: "text/json";
        data: LoginLogoutStatus500Json2;
    });
    "501": ({
        contentType: "text/plain";
        data: LoginLogoutStatus501Plain;
    } | {
        contentType: "application/json";
        data: LoginLogoutStatus501Json;
    } | {
        contentType: "text/json";
        data: LoginLogoutStatus501Json2;
    });
};

/**
 * @description Union of all possible responses
*/
export type LoginLogoutResponse = (LoginLogoutStatus200 | LoginLogoutStatus204 | LoginLogoutStatus400 | LoginLogoutStatus401 | LoginLogoutStatus403 | LoginLogoutStatus404 | LoginLogoutStatus500 | LoginLogoutStatus501);
