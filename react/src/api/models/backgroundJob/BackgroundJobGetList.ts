/* oxlint-disable */

import type { VoloAbpApplicationDtosPagedResultDto1AcroStackServicesDtosBackgroundJobsBackgroundJobDtoAcroStackVersion1000CultureneutralPublicKeyTokennull } from "../volo/abp/application/dtos/pagedResultDto1AcroStack/services/dtos/backgroundJobs/BackgroundJobDtoAcroStackVersion1000CultureneutralPublicKeyTokennull.ts";
import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse.ts";

/**
 * @type string | undefined
 */
export type BackgroundJobGetListQueryFilter = string | undefined;

/**
 * @type string | undefined
 */
export type BackgroundJobGetListQueryJobName = string | undefined;

/**
 * @type boolean | undefined
 */
export type BackgroundJobGetListQueryIsAbandoned = boolean | undefined;

/**
 * @description
 * Format: `date-time`
 * @type string | undefined
 */
export type BackgroundJobGetListQueryStartCreationTime = string | undefined;

/**
 * @description
 * Format: `date-time`
 * @type string | undefined
 */
export type BackgroundJobGetListQueryEndCreationTime = string | undefined;

/**
 * @type string | undefined
 */
export type BackgroundJobGetListQuerySorting = string | undefined;

/**
 * @description
 * Format: `int32`
 * @type integer | undefined
 */
export type BackgroundJobGetListQuerySkipCount = number | undefined;

/**
 * @description
 * Format: `int32`
 * @type integer | undefined
 */
export type BackgroundJobGetListQueryMaxResultCount = number | undefined;

/**
 * @type object
 */
export type BackgroundJobGetListStatus200Plain =
  VoloAbpApplicationDtosPagedResultDto1AcroStackServicesDtosBackgroundJobsBackgroundJobDtoAcroStackVersion1000CultureneutralPublicKeyTokennull;

/**
 * @type object
 */
export type BackgroundJobGetListStatus200Json =
  VoloAbpApplicationDtosPagedResultDto1AcroStackServicesDtosBackgroundJobsBackgroundJobDtoAcroStackVersion1000CultureneutralPublicKeyTokennull;

/**
 * @type object
 */
export type BackgroundJobGetListStatus200Json2 =
  VoloAbpApplicationDtosPagedResultDto1AcroStackServicesDtosBackgroundJobsBackgroundJobDtoAcroStackVersion1000CultureneutralPublicKeyTokennull;

export type BackgroundJobGetListStatus200 =
  | BackgroundJobGetListStatus200Plain
  | BackgroundJobGetListStatus200Json
  | BackgroundJobGetListStatus200Json2;

/**
 * @type object
 */
export type BackgroundJobGetListStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BackgroundJobGetListStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BackgroundJobGetListStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BackgroundJobGetListStatus400 =
  | BackgroundJobGetListStatus400Plain
  | BackgroundJobGetListStatus400Json
  | BackgroundJobGetListStatus400Json2;

/**
 * @type object
 */
export type BackgroundJobGetListStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BackgroundJobGetListStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BackgroundJobGetListStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BackgroundJobGetListStatus401 =
  | BackgroundJobGetListStatus401Plain
  | BackgroundJobGetListStatus401Json
  | BackgroundJobGetListStatus401Json2;

/**
 * @type object
 */
export type BackgroundJobGetListStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BackgroundJobGetListStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BackgroundJobGetListStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BackgroundJobGetListStatus403 =
  | BackgroundJobGetListStatus403Plain
  | BackgroundJobGetListStatus403Json
  | BackgroundJobGetListStatus403Json2;

/**
 * @type object
 */
export type BackgroundJobGetListStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BackgroundJobGetListStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BackgroundJobGetListStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BackgroundJobGetListStatus404 =
  | BackgroundJobGetListStatus404Plain
  | BackgroundJobGetListStatus404Json
  | BackgroundJobGetListStatus404Json2;

/**
 * @type object
 */
export type BackgroundJobGetListStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BackgroundJobGetListStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BackgroundJobGetListStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BackgroundJobGetListStatus500 =
  | BackgroundJobGetListStatus500Plain
  | BackgroundJobGetListStatus500Json
  | BackgroundJobGetListStatus500Json2;

/**
 * @type object
 */
export type BackgroundJobGetListStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BackgroundJobGetListStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BackgroundJobGetListStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BackgroundJobGetListStatus501 =
  | BackgroundJobGetListStatus501Plain
  | BackgroundJobGetListStatus501Json
  | BackgroundJobGetListStatus501Json2;

/**
 * @type object
 */
export type BackgroundJobGetListRequestConfig = {
  data?: never;
  pathParams?: never;
  /**
   * @type object | undefined
   */
  queryParams?: {
    Filter?: BackgroundJobGetListQueryFilter;
    JobName?: BackgroundJobGetListQueryJobName;
    IsAbandoned?: BackgroundJobGetListQueryIsAbandoned;
    StartCreationTime?: BackgroundJobGetListQueryStartCreationTime;
    EndCreationTime?: BackgroundJobGetListQueryEndCreationTime;
    Sorting?: BackgroundJobGetListQuerySorting;
    SkipCount?: BackgroundJobGetListQuerySkipCount;
    MaxResultCount?: BackgroundJobGetListQueryMaxResultCount;
  };
  headerParams?: never;
  /**
   * @type string
   */
  url: "/api/app/background-job";
};

/**
 * @type object
 */
export type BackgroundJobGetListResponses = {
  "200": BackgroundJobGetListStatus200;
  "400": BackgroundJobGetListStatus400;
  "401": BackgroundJobGetListStatus401;
  "403": BackgroundJobGetListStatus403;
  "404": BackgroundJobGetListStatus404;
  "500": BackgroundJobGetListStatus500;
  "501": BackgroundJobGetListStatus501;
};

/**
 * @description Union of all possible responses
 */
export type BackgroundJobGetListResponse =
  | BackgroundJobGetListStatus200
  | BackgroundJobGetListStatus400
  | BackgroundJobGetListStatus401
  | BackgroundJobGetListStatus403
  | BackgroundJobGetListStatus404
  | BackgroundJobGetListStatus500
  | BackgroundJobGetListStatus501;
