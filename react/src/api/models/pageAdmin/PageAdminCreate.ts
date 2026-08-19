/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from '../volo/abp/http/RemoteServiceErrorResponse'
import type { VoloCmsKitAdminPagesCreatePageInputDto } from '../volo/cmsKit/admin/pages/CreatePageInputDto'
import type { VoloCmsKitAdminPagesPageDto } from '../volo/cmsKit/admin/pages/PageDto'

export type PageAdminCreateStatus200Plain = VoloCmsKitAdminPagesPageDto;

export type PageAdminCreateStatus200Json = VoloCmsKitAdminPagesPageDto;

export type PageAdminCreateStatus200Json2 = VoloCmsKitAdminPagesPageDto;

export type PageAdminCreateStatus200 = (PageAdminCreateStatus200Plain | PageAdminCreateStatus200Json | PageAdminCreateStatus200Json2);

export type PageAdminCreateStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type PageAdminCreateStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

export type PageAdminCreateStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type PageAdminCreateStatus400 = (PageAdminCreateStatus400Plain | PageAdminCreateStatus400Json | PageAdminCreateStatus400Json2);

export type PageAdminCreateStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type PageAdminCreateStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

export type PageAdminCreateStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type PageAdminCreateStatus401 = (PageAdminCreateStatus401Plain | PageAdminCreateStatus401Json | PageAdminCreateStatus401Json2);

export type PageAdminCreateStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type PageAdminCreateStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

export type PageAdminCreateStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type PageAdminCreateStatus403 = (PageAdminCreateStatus403Plain | PageAdminCreateStatus403Json | PageAdminCreateStatus403Json2);

export type PageAdminCreateStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type PageAdminCreateStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

export type PageAdminCreateStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type PageAdminCreateStatus404 = (PageAdminCreateStatus404Plain | PageAdminCreateStatus404Json | PageAdminCreateStatus404Json2);

export type PageAdminCreateStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type PageAdminCreateStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

export type PageAdminCreateStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type PageAdminCreateStatus500 = (PageAdminCreateStatus500Plain | PageAdminCreateStatus500Json | PageAdminCreateStatus500Json2);

export type PageAdminCreateStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

export type PageAdminCreateStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

export type PageAdminCreateStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type PageAdminCreateStatus501 = (PageAdminCreateStatus501Plain | PageAdminCreateStatus501Json | PageAdminCreateStatus501Json2);

export type PageAdminCreateBodyJson = Omit<NonNullable<VoloCmsKitAdminPagesCreatePageInputDto>, "extraProperties"> | undefined;

export type PageAdminCreateBodyJson2 = Omit<NonNullable<VoloCmsKitAdminPagesCreatePageInputDto>, "extraProperties"> | undefined;

export type PageAdminCreateBodyJson3 = Omit<NonNullable<VoloCmsKitAdminPagesCreatePageInputDto>, "extraProperties"> | undefined;

export type PageAdminCreateBody = (PageAdminCreateBodyJson | PageAdminCreateBodyJson2 | PageAdminCreateBodyJson3);

export type PageAdminCreateOptions = {
    body: PageAdminCreateBody;
    path?: never;
    query?: never;
    headers?: never;
};

export type PageAdminCreateResponses = {
    "200": ({
        contentType: "text/plain";
        data: PageAdminCreateStatus200Plain;
    } | {
        contentType: "application/json";
        data: PageAdminCreateStatus200Json;
    } | {
        contentType: "text/json";
        data: PageAdminCreateStatus200Json2;
    });
    "400": ({
        contentType: "text/plain";
        data: PageAdminCreateStatus400Plain;
    } | {
        contentType: "application/json";
        data: PageAdminCreateStatus400Json;
    } | {
        contentType: "text/json";
        data: PageAdminCreateStatus400Json2;
    });
    "401": ({
        contentType: "text/plain";
        data: PageAdminCreateStatus401Plain;
    } | {
        contentType: "application/json";
        data: PageAdminCreateStatus401Json;
    } | {
        contentType: "text/json";
        data: PageAdminCreateStatus401Json2;
    });
    "403": ({
        contentType: "text/plain";
        data: PageAdminCreateStatus403Plain;
    } | {
        contentType: "application/json";
        data: PageAdminCreateStatus403Json;
    } | {
        contentType: "text/json";
        data: PageAdminCreateStatus403Json2;
    });
    "404": ({
        contentType: "text/plain";
        data: PageAdminCreateStatus404Plain;
    } | {
        contentType: "application/json";
        data: PageAdminCreateStatus404Json;
    } | {
        contentType: "text/json";
        data: PageAdminCreateStatus404Json2;
    });
    "500": ({
        contentType: "text/plain";
        data: PageAdminCreateStatus500Plain;
    } | {
        contentType: "application/json";
        data: PageAdminCreateStatus500Json;
    } | {
        contentType: "text/json";
        data: PageAdminCreateStatus500Json2;
    });
    "501": ({
        contentType: "text/plain";
        data: PageAdminCreateStatus501Plain;
    } | {
        contentType: "application/json";
        data: PageAdminCreateStatus501Json;
    } | {
        contentType: "text/json";
        data: PageAdminCreateStatus501Json2;
    });
};

/**
 * @description Union of all possible responses
*/
export type PageAdminCreateResponse = (PageAdminCreateStatus200 | PageAdminCreateStatus400 | PageAdminCreateStatus401 | PageAdminCreateStatus403 | PageAdminCreateStatus404 | PageAdminCreateStatus500 | PageAdminCreateStatus501);
