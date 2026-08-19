/* oxlint-disable */

import type { VoloAbpAccountChangePasswordInput } from '../volo/abp/account/ChangePasswordInput'
import type { VoloAbpHttpRemoteServiceErrorResponse } from '../volo/abp/http/RemoteServiceErrorResponse'

export type ProfileChangePasswordStatus200 = unknown;

export type ProfileChangePasswordStatus204 = unknown;

export type ProfileChangePasswordStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type ProfileChangePasswordStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

export type ProfileChangePasswordStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ProfileChangePasswordStatus400 = (ProfileChangePasswordStatus400Plain | ProfileChangePasswordStatus400Json | ProfileChangePasswordStatus400Json2);

export type ProfileChangePasswordStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type ProfileChangePasswordStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

export type ProfileChangePasswordStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ProfileChangePasswordStatus401 = (ProfileChangePasswordStatus401Plain | ProfileChangePasswordStatus401Json | ProfileChangePasswordStatus401Json2);

export type ProfileChangePasswordStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type ProfileChangePasswordStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

export type ProfileChangePasswordStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ProfileChangePasswordStatus403 = (ProfileChangePasswordStatus403Plain | ProfileChangePasswordStatus403Json | ProfileChangePasswordStatus403Json2);

export type ProfileChangePasswordStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type ProfileChangePasswordStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

export type ProfileChangePasswordStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ProfileChangePasswordStatus404 = (ProfileChangePasswordStatus404Plain | ProfileChangePasswordStatus404Json | ProfileChangePasswordStatus404Json2);

export type ProfileChangePasswordStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type ProfileChangePasswordStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

export type ProfileChangePasswordStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ProfileChangePasswordStatus500 = (ProfileChangePasswordStatus500Plain | ProfileChangePasswordStatus500Json | ProfileChangePasswordStatus500Json2);

export type ProfileChangePasswordStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type ProfileChangePasswordStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

export type ProfileChangePasswordStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ProfileChangePasswordStatus501 = (ProfileChangePasswordStatus501Plain | ProfileChangePasswordStatus501Json | ProfileChangePasswordStatus501Json2);

export type ProfileChangePasswordBodyJson = VoloAbpAccountChangePasswordInput | undefined;

export type ProfileChangePasswordBodyJson2 = VoloAbpAccountChangePasswordInput | undefined;

export type ProfileChangePasswordBodyJson3 = VoloAbpAccountChangePasswordInput | undefined;

export type ProfileChangePasswordBody = (ProfileChangePasswordBodyJson | ProfileChangePasswordBodyJson2 | ProfileChangePasswordBodyJson3);

export type ProfileChangePasswordOptions = {
    body: ProfileChangePasswordBody;
    path?: never;
    query?: never;
    headers?: never;
};

export type ProfileChangePasswordResponses = {
    "200": ProfileChangePasswordStatus200;
    "204": ProfileChangePasswordStatus204;
    "400": ({
        contentType: "text/plain";
        data: ProfileChangePasswordStatus400Plain;
    } | {
        contentType: "application/json";
        data: ProfileChangePasswordStatus400Json;
    } | {
        contentType: "text/json";
        data: ProfileChangePasswordStatus400Json2;
    });
    "401": ({
        contentType: "text/plain";
        data: ProfileChangePasswordStatus401Plain;
    } | {
        contentType: "application/json";
        data: ProfileChangePasswordStatus401Json;
    } | {
        contentType: "text/json";
        data: ProfileChangePasswordStatus401Json2;
    });
    "403": ({
        contentType: "text/plain";
        data: ProfileChangePasswordStatus403Plain;
    } | {
        contentType: "application/json";
        data: ProfileChangePasswordStatus403Json;
    } | {
        contentType: "text/json";
        data: ProfileChangePasswordStatus403Json2;
    });
    "404": ({
        contentType: "text/plain";
        data: ProfileChangePasswordStatus404Plain;
    } | {
        contentType: "application/json";
        data: ProfileChangePasswordStatus404Json;
    } | {
        contentType: "text/json";
        data: ProfileChangePasswordStatus404Json2;
    });
    "500": ({
        contentType: "text/plain";
        data: ProfileChangePasswordStatus500Plain;
    } | {
        contentType: "application/json";
        data: ProfileChangePasswordStatus500Json;
    } | {
        contentType: "text/json";
        data: ProfileChangePasswordStatus500Json2;
    });
    "501": ({
        contentType: "text/plain";
        data: ProfileChangePasswordStatus501Plain;
    } | {
        contentType: "application/json";
        data: ProfileChangePasswordStatus501Json;
    } | {
        contentType: "text/json";
        data: ProfileChangePasswordStatus501Json2;
    });
};

/**
 * @description Union of all possible responses
*/
export type ProfileChangePasswordResponse = (ProfileChangePasswordStatus200 | ProfileChangePasswordStatus204 | ProfileChangePasswordStatus400 | ProfileChangePasswordStatus401 | ProfileChangePasswordStatus403 | ProfileChangePasswordStatus404 | ProfileChangePasswordStatus500 | ProfileChangePasswordStatus501);
