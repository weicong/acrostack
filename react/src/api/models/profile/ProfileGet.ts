/* oxlint-disable */

import type { VoloAbpAccountProfileDto } from '../volo/abp/account/ProfileDto'
import type { VoloAbpHttpRemoteServiceErrorResponse } from '../volo/abp/http/RemoteServiceErrorResponse'

export type ProfileGetStatus200Plain = VoloAbpAccountProfileDto;

export type ProfileGetStatus200Json = VoloAbpAccountProfileDto;

export type ProfileGetStatus200Json2 = VoloAbpAccountProfileDto;

export type ProfileGetStatus200 = (ProfileGetStatus200Plain | ProfileGetStatus200Json | ProfileGetStatus200Json2);

export type ProfileGetStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type ProfileGetStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

export type ProfileGetStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ProfileGetStatus400 = (ProfileGetStatus400Plain | ProfileGetStatus400Json | ProfileGetStatus400Json2);

export type ProfileGetStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type ProfileGetStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

export type ProfileGetStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ProfileGetStatus401 = (ProfileGetStatus401Plain | ProfileGetStatus401Json | ProfileGetStatus401Json2);

export type ProfileGetStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type ProfileGetStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

export type ProfileGetStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ProfileGetStatus403 = (ProfileGetStatus403Plain | ProfileGetStatus403Json | ProfileGetStatus403Json2);

export type ProfileGetStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type ProfileGetStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

export type ProfileGetStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ProfileGetStatus404 = (ProfileGetStatus404Plain | ProfileGetStatus404Json | ProfileGetStatus404Json2);

export type ProfileGetStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type ProfileGetStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

export type ProfileGetStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ProfileGetStatus500 = (ProfileGetStatus500Plain | ProfileGetStatus500Json | ProfileGetStatus500Json2);

export type ProfileGetStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type ProfileGetStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

export type ProfileGetStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ProfileGetStatus501 = (ProfileGetStatus501Plain | ProfileGetStatus501Json | ProfileGetStatus501Json2);

export type ProfileGetOptions = {
    body?: never;
    path?: never;
    query?: never;
    headers?: never;
};

export type ProfileGetResponses = {
    "200": ({
        contentType: "text/plain";
        data: ProfileGetStatus200Plain;
    } | {
        contentType: "application/json";
        data: ProfileGetStatus200Json;
    } | {
        contentType: "text/json";
        data: ProfileGetStatus200Json2;
    });
    "400": ({
        contentType: "text/plain";
        data: ProfileGetStatus400Plain;
    } | {
        contentType: "application/json";
        data: ProfileGetStatus400Json;
    } | {
        contentType: "text/json";
        data: ProfileGetStatus400Json2;
    });
    "401": ({
        contentType: "text/plain";
        data: ProfileGetStatus401Plain;
    } | {
        contentType: "application/json";
        data: ProfileGetStatus401Json;
    } | {
        contentType: "text/json";
        data: ProfileGetStatus401Json2;
    });
    "403": ({
        contentType: "text/plain";
        data: ProfileGetStatus403Plain;
    } | {
        contentType: "application/json";
        data: ProfileGetStatus403Json;
    } | {
        contentType: "text/json";
        data: ProfileGetStatus403Json2;
    });
    "404": ({
        contentType: "text/plain";
        data: ProfileGetStatus404Plain;
    } | {
        contentType: "application/json";
        data: ProfileGetStatus404Json;
    } | {
        contentType: "text/json";
        data: ProfileGetStatus404Json2;
    });
    "500": ({
        contentType: "text/plain";
        data: ProfileGetStatus500Plain;
    } | {
        contentType: "application/json";
        data: ProfileGetStatus500Json;
    } | {
        contentType: "text/json";
        data: ProfileGetStatus500Json2;
    });
    "501": ({
        contentType: "text/plain";
        data: ProfileGetStatus501Plain;
    } | {
        contentType: "application/json";
        data: ProfileGetStatus501Json;
    } | {
        contentType: "text/json";
        data: ProfileGetStatus501Json2;
    });
};

/**
 * @description Union of all possible responses
*/
export type ProfileGetResponse = (ProfileGetStatus200 | ProfileGetStatus400 | ProfileGetStatus401 | ProfileGetStatus403 | ProfileGetStatus404 | ProfileGetStatus500 | ProfileGetStatus501);
