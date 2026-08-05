/* oxlint-disable */

import type { VoloAbpApplicationDtosPagedResultDto1AcroStackServicesDtosSaaSTenantEditionDtoAcroStackVersion1000CultureneutralPublicKeyTokennull } from "../volo/abp/application/dtos/pagedResultDto1AcroStack/services/dtos/saaS/TenantEditionDtoAcroStackVersion1000CultureneutralPublicKeyTokennull.ts";
import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse.ts";

/**
 * @type string | undefined
 */
export type TenantEditionGetTenantListQueryFilter = string | undefined;

/**
 * @description
 * Format: `uuid`
 * @type string | undefined
 */
export type TenantEditionGetTenantListQueryEditionId = string | undefined;

/**
 * @type string | undefined
 */
export type TenantEditionGetTenantListQuerySorting = string | undefined;

/**
 * @description
 * Format: `int32`
 * @type integer | undefined
 */
export type TenantEditionGetTenantListQuerySkipCount = number | undefined;

/**
 * @description
 * Format: `int32`
 * @type integer | undefined
 */
export type TenantEditionGetTenantListQueryMaxResultCount = number | undefined;

/**
 * @type object
 */
export type TenantEditionGetTenantListStatus200Plain =
  VoloAbpApplicationDtosPagedResultDto1AcroStackServicesDtosSaaSTenantEditionDtoAcroStackVersion1000CultureneutralPublicKeyTokennull;

/**
 * @type object
 */
export type TenantEditionGetTenantListStatus200Json =
  VoloAbpApplicationDtosPagedResultDto1AcroStackServicesDtosSaaSTenantEditionDtoAcroStackVersion1000CultureneutralPublicKeyTokennull;

/**
 * @type object
 */
export type TenantEditionGetTenantListStatus200Json2 =
  VoloAbpApplicationDtosPagedResultDto1AcroStackServicesDtosSaaSTenantEditionDtoAcroStackVersion1000CultureneutralPublicKeyTokennull;

export type TenantEditionGetTenantListStatus200 =
  | TenantEditionGetTenantListStatus200Plain
  | TenantEditionGetTenantListStatus200Json
  | TenantEditionGetTenantListStatus200Json2;

/**
 * @type object
 */
export type TenantEditionGetTenantListStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TenantEditionGetTenantListStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TenantEditionGetTenantListStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type TenantEditionGetTenantListStatus400 =
  | TenantEditionGetTenantListStatus400Plain
  | TenantEditionGetTenantListStatus400Json
  | TenantEditionGetTenantListStatus400Json2;

/**
 * @type object
 */
export type TenantEditionGetTenantListStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TenantEditionGetTenantListStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TenantEditionGetTenantListStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type TenantEditionGetTenantListStatus401 =
  | TenantEditionGetTenantListStatus401Plain
  | TenantEditionGetTenantListStatus401Json
  | TenantEditionGetTenantListStatus401Json2;

/**
 * @type object
 */
export type TenantEditionGetTenantListStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TenantEditionGetTenantListStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TenantEditionGetTenantListStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type TenantEditionGetTenantListStatus403 =
  | TenantEditionGetTenantListStatus403Plain
  | TenantEditionGetTenantListStatus403Json
  | TenantEditionGetTenantListStatus403Json2;

/**
 * @type object
 */
export type TenantEditionGetTenantListStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TenantEditionGetTenantListStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TenantEditionGetTenantListStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type TenantEditionGetTenantListStatus404 =
  | TenantEditionGetTenantListStatus404Plain
  | TenantEditionGetTenantListStatus404Json
  | TenantEditionGetTenantListStatus404Json2;

/**
 * @type object
 */
export type TenantEditionGetTenantListStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TenantEditionGetTenantListStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TenantEditionGetTenantListStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type TenantEditionGetTenantListStatus500 =
  | TenantEditionGetTenantListStatus500Plain
  | TenantEditionGetTenantListStatus500Json
  | TenantEditionGetTenantListStatus500Json2;

/**
 * @type object
 */
export type TenantEditionGetTenantListStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TenantEditionGetTenantListStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TenantEditionGetTenantListStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type TenantEditionGetTenantListStatus501 =
  | TenantEditionGetTenantListStatus501Plain
  | TenantEditionGetTenantListStatus501Json
  | TenantEditionGetTenantListStatus501Json2;

/**
 * @type object
 */
export type TenantEditionGetTenantListRequestConfig = {
  data?: never;
  pathParams?: never;
  /**
   * @type object | undefined
   */
  queryParams?: {
    Filter?: TenantEditionGetTenantListQueryFilter;
    EditionId?: TenantEditionGetTenantListQueryEditionId;
    Sorting?: TenantEditionGetTenantListQuerySorting;
    SkipCount?: TenantEditionGetTenantListQuerySkipCount;
    MaxResultCount?: TenantEditionGetTenantListQueryMaxResultCount;
  };
  headerParams?: never;
  /**
   * @type string
   */
  url: "/api/app/tenant-edition/tenant-list";
};

/**
 * @type object
 */
export type TenantEditionGetTenantListResponses = {
  "200": TenantEditionGetTenantListStatus200;
  "400": TenantEditionGetTenantListStatus400;
  "401": TenantEditionGetTenantListStatus401;
  "403": TenantEditionGetTenantListStatus403;
  "404": TenantEditionGetTenantListStatus404;
  "500": TenantEditionGetTenantListStatus500;
  "501": TenantEditionGetTenantListStatus501;
};

/**
 * @description Union of all possible responses
 */
export type TenantEditionGetTenantListResponse =
  | TenantEditionGetTenantListStatus200
  | TenantEditionGetTenantListStatus400
  | TenantEditionGetTenantListStatus401
  | TenantEditionGetTenantListStatus403
  | TenantEditionGetTenantListStatus404
  | TenantEditionGetTenantListStatus500
  | TenantEditionGetTenantListStatus501;
