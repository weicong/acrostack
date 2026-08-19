/* oxlint-disable */

import type { VoloAbpAccountWebAreasAccountControllersModelsAbpLoginResult } from '../volo/abp/account/web/areas/account/controllers/models/AbpLoginResult'
import type { VoloAbpAccountWebAreasAccountControllersModelsUserLoginInfo } from '../volo/abp/account/web/areas/account/controllers/models/UserLoginInfo'
import type { VoloAbpHttpRemoteServiceErrorResponse } from '../volo/abp/http/RemoteServiceErrorResponse'

export type LoginCheckPasswordStatus200Plain = VoloAbpAccountWebAreasAccountControllersModelsAbpLoginResult;

export type LoginCheckPasswordStatus200Json = VoloAbpAccountWebAreasAccountControllersModelsAbpLoginResult;

export type LoginCheckPasswordStatus200Json2 = VoloAbpAccountWebAreasAccountControllersModelsAbpLoginResult;

export type LoginCheckPasswordStatus200 = (LoginCheckPasswordStatus200Plain | LoginCheckPasswordStatus200Json | LoginCheckPasswordStatus200Json2);

export type LoginCheckPasswordStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type LoginCheckPasswordStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

export type LoginCheckPasswordStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type LoginCheckPasswordStatus400 = (LoginCheckPasswordStatus400Plain | LoginCheckPasswordStatus400Json | LoginCheckPasswordStatus400Json2);

export type LoginCheckPasswordStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type LoginCheckPasswordStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

export type LoginCheckPasswordStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type LoginCheckPasswordStatus401 = (LoginCheckPasswordStatus401Plain | LoginCheckPasswordStatus401Json | LoginCheckPasswordStatus401Json2);

export type LoginCheckPasswordStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type LoginCheckPasswordStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

export type LoginCheckPasswordStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type LoginCheckPasswordStatus403 = (LoginCheckPasswordStatus403Plain | LoginCheckPasswordStatus403Json | LoginCheckPasswordStatus403Json2);

export type LoginCheckPasswordStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type LoginCheckPasswordStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

export type LoginCheckPasswordStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type LoginCheckPasswordStatus404 = (LoginCheckPasswordStatus404Plain | LoginCheckPasswordStatus404Json | LoginCheckPasswordStatus404Json2);

export type LoginCheckPasswordStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type LoginCheckPasswordStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

export type LoginCheckPasswordStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type LoginCheckPasswordStatus500 = (LoginCheckPasswordStatus500Plain | LoginCheckPasswordStatus500Json | LoginCheckPasswordStatus500Json2);

export type LoginCheckPasswordStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type LoginCheckPasswordStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

export type LoginCheckPasswordStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type LoginCheckPasswordStatus501 = (LoginCheckPasswordStatus501Plain | LoginCheckPasswordStatus501Json | LoginCheckPasswordStatus501Json2);

export type LoginCheckPasswordBodyJson = VoloAbpAccountWebAreasAccountControllersModelsUserLoginInfo | undefined;

export type LoginCheckPasswordBodyJson2 = VoloAbpAccountWebAreasAccountControllersModelsUserLoginInfo | undefined;

export type LoginCheckPasswordBodyJson3 = VoloAbpAccountWebAreasAccountControllersModelsUserLoginInfo | undefined;

export type LoginCheckPasswordBody = (LoginCheckPasswordBodyJson | LoginCheckPasswordBodyJson2 | LoginCheckPasswordBodyJson3);

export type LoginCheckPasswordOptions = {
    body: LoginCheckPasswordBody;
    path?: never;
    query?: never;
    headers?: never;
};

export type LoginCheckPasswordResponses = {
    "200": ({
        contentType: "text/plain";
        data: LoginCheckPasswordStatus200Plain;
    } | {
        contentType: "application/json";
        data: LoginCheckPasswordStatus200Json;
    } | {
        contentType: "text/json";
        data: LoginCheckPasswordStatus200Json2;
    });
    "400": ({
        contentType: "text/plain";
        data: LoginCheckPasswordStatus400Plain;
    } | {
        contentType: "application/json";
        data: LoginCheckPasswordStatus400Json;
    } | {
        contentType: "text/json";
        data: LoginCheckPasswordStatus400Json2;
    });
    "401": ({
        contentType: "text/plain";
        data: LoginCheckPasswordStatus401Plain;
    } | {
        contentType: "application/json";
        data: LoginCheckPasswordStatus401Json;
    } | {
        contentType: "text/json";
        data: LoginCheckPasswordStatus401Json2;
    });
    "403": ({
        contentType: "text/plain";
        data: LoginCheckPasswordStatus403Plain;
    } | {
        contentType: "application/json";
        data: LoginCheckPasswordStatus403Json;
    } | {
        contentType: "text/json";
        data: LoginCheckPasswordStatus403Json2;
    });
    "404": ({
        contentType: "text/plain";
        data: LoginCheckPasswordStatus404Plain;
    } | {
        contentType: "application/json";
        data: LoginCheckPasswordStatus404Json;
    } | {
        contentType: "text/json";
        data: LoginCheckPasswordStatus404Json2;
    });
    "500": ({
        contentType: "text/plain";
        data: LoginCheckPasswordStatus500Plain;
    } | {
        contentType: "application/json";
        data: LoginCheckPasswordStatus500Json;
    } | {
        contentType: "text/json";
        data: LoginCheckPasswordStatus500Json2;
    });
    "501": ({
        contentType: "text/plain";
        data: LoginCheckPasswordStatus501Plain;
    } | {
        contentType: "application/json";
        data: LoginCheckPasswordStatus501Json;
    } | {
        contentType: "text/json";
        data: LoginCheckPasswordStatus501Json2;
    });
};

/**
 * @description Union of all possible responses
*/
export type LoginCheckPasswordResponse = (LoginCheckPasswordStatus200 | LoginCheckPasswordStatus400 | LoginCheckPasswordStatus401 | LoginCheckPasswordStatus403 | LoginCheckPasswordStatus404 | LoginCheckPasswordStatus500 | LoginCheckPasswordStatus501);
