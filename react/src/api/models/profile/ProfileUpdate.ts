/* oxlint-disable */

import type { VoloAbpAccountProfileDto } from '../volo/abp/account/ProfileDto'
import type { VoloAbpAccountUpdateProfileDto } from '../volo/abp/account/UpdateProfileDto'
import type { VoloAbpHttpRemoteServiceErrorResponse } from '../volo/abp/http/RemoteServiceErrorResponse'

export type ProfileUpdateStatus200Plain = VoloAbpAccountProfileDto;

export type ProfileUpdateStatus200Json = VoloAbpAccountProfileDto;

export type ProfileUpdateStatus200Json2 = VoloAbpAccountProfileDto;

export type ProfileUpdateStatus200 = (ProfileUpdateStatus200Plain | ProfileUpdateStatus200Json | ProfileUpdateStatus200Json2);

export type ProfileUpdateStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type ProfileUpdateStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

export type ProfileUpdateStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ProfileUpdateStatus400 = (ProfileUpdateStatus400Plain | ProfileUpdateStatus400Json | ProfileUpdateStatus400Json2);

export type ProfileUpdateStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type ProfileUpdateStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

export type ProfileUpdateStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ProfileUpdateStatus401 = (ProfileUpdateStatus401Plain | ProfileUpdateStatus401Json | ProfileUpdateStatus401Json2);

export type ProfileUpdateStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type ProfileUpdateStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

export type ProfileUpdateStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ProfileUpdateStatus403 = (ProfileUpdateStatus403Plain | ProfileUpdateStatus403Json | ProfileUpdateStatus403Json2);

export type ProfileUpdateStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type ProfileUpdateStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

export type ProfileUpdateStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ProfileUpdateStatus404 = (ProfileUpdateStatus404Plain | ProfileUpdateStatus404Json | ProfileUpdateStatus404Json2);

export type ProfileUpdateStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type ProfileUpdateStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

export type ProfileUpdateStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ProfileUpdateStatus500 = (ProfileUpdateStatus500Plain | ProfileUpdateStatus500Json | ProfileUpdateStatus500Json2);

export type ProfileUpdateStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type ProfileUpdateStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

export type ProfileUpdateStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type ProfileUpdateStatus501 = (ProfileUpdateStatus501Plain | ProfileUpdateStatus501Json | ProfileUpdateStatus501Json2);

export type ProfileUpdateBodyJson = Omit<NonNullable<VoloAbpAccountUpdateProfileDto>, "extraProperties"> | undefined;

export type ProfileUpdateBodyJson2 = Omit<NonNullable<VoloAbpAccountUpdateProfileDto>, "extraProperties"> | undefined;

export type ProfileUpdateBodyJson3 = Omit<NonNullable<VoloAbpAccountUpdateProfileDto>, "extraProperties"> | undefined;

export type ProfileUpdateBody = (ProfileUpdateBodyJson | ProfileUpdateBodyJson2 | ProfileUpdateBodyJson3);

export type ProfileUpdateOptions = {
    body: ProfileUpdateBody;
    path?: never;
    query?: never;
    headers?: never;
};

export type ProfileUpdateResponses = {
    "200": ({
        contentType: "text/plain";
        data: ProfileUpdateStatus200Plain;
    } | {
        contentType: "application/json";
        data: ProfileUpdateStatus200Json;
    } | {
        contentType: "text/json";
        data: ProfileUpdateStatus200Json2;
    });
    "400": ({
        contentType: "text/plain";
        data: ProfileUpdateStatus400Plain;
    } | {
        contentType: "application/json";
        data: ProfileUpdateStatus400Json;
    } | {
        contentType: "text/json";
        data: ProfileUpdateStatus400Json2;
    });
    "401": ({
        contentType: "text/plain";
        data: ProfileUpdateStatus401Plain;
    } | {
        contentType: "application/json";
        data: ProfileUpdateStatus401Json;
    } | {
        contentType: "text/json";
        data: ProfileUpdateStatus401Json2;
    });
    "403": ({
        contentType: "text/plain";
        data: ProfileUpdateStatus403Plain;
    } | {
        contentType: "application/json";
        data: ProfileUpdateStatus403Json;
    } | {
        contentType: "text/json";
        data: ProfileUpdateStatus403Json2;
    });
    "404": ({
        contentType: "text/plain";
        data: ProfileUpdateStatus404Plain;
    } | {
        contentType: "application/json";
        data: ProfileUpdateStatus404Json;
    } | {
        contentType: "text/json";
        data: ProfileUpdateStatus404Json2;
    });
    "500": ({
        contentType: "text/plain";
        data: ProfileUpdateStatus500Plain;
    } | {
        contentType: "application/json";
        data: ProfileUpdateStatus500Json;
    } | {
        contentType: "text/json";
        data: ProfileUpdateStatus500Json2;
    });
    "501": ({
        contentType: "text/plain";
        data: ProfileUpdateStatus501Plain;
    } | {
        contentType: "application/json";
        data: ProfileUpdateStatus501Json;
    } | {
        contentType: "text/json";
        data: ProfileUpdateStatus501Json2;
    });
};

/**
 * @description Union of all possible responses
*/
export type ProfileUpdateResponse = (ProfileUpdateStatus200 | ProfileUpdateStatus400 | ProfileUpdateStatus401 | ProfileUpdateStatus403 | ProfileUpdateStatus404 | ProfileUpdateStatus500 | ProfileUpdateStatus501);
