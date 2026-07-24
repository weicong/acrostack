/* oxlint-disable */

import type { AcroStackServicesDtosBackgroundJobsBackgroundJobDto } from "../acroStack/services/dtos/backgroundJobs/BackgroundJobDto.ts";
import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse.ts";

/**
 * @description
 * Format: `uuid`
 * @type string
 */
export type BackgroundJobGetPathId = string;

/**
 * @type object
 */
export type BackgroundJobGetStatus200Plain = AcroStackServicesDtosBackgroundJobsBackgroundJobDto;

/**
 * @type object
 */
export type BackgroundJobGetStatus200Json = AcroStackServicesDtosBackgroundJobsBackgroundJobDto;

/**
 * @type object
 */
export type BackgroundJobGetStatus200Json2 = AcroStackServicesDtosBackgroundJobsBackgroundJobDto;

export type BackgroundJobGetStatus200 =
  | BackgroundJobGetStatus200Plain
  | BackgroundJobGetStatus200Json
  | BackgroundJobGetStatus200Json2;

/**
 * @type object
 */
export type BackgroundJobGetStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BackgroundJobGetStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BackgroundJobGetStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BackgroundJobGetStatus400 =
  | BackgroundJobGetStatus400Plain
  | BackgroundJobGetStatus400Json
  | BackgroundJobGetStatus400Json2;

/**
 * @type object
 */
export type BackgroundJobGetStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BackgroundJobGetStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BackgroundJobGetStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BackgroundJobGetStatus401 =
  | BackgroundJobGetStatus401Plain
  | BackgroundJobGetStatus401Json
  | BackgroundJobGetStatus401Json2;

/**
 * @type object
 */
export type BackgroundJobGetStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BackgroundJobGetStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BackgroundJobGetStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BackgroundJobGetStatus403 =
  | BackgroundJobGetStatus403Plain
  | BackgroundJobGetStatus403Json
  | BackgroundJobGetStatus403Json2;

/**
 * @type object
 */
export type BackgroundJobGetStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BackgroundJobGetStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BackgroundJobGetStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BackgroundJobGetStatus404 =
  | BackgroundJobGetStatus404Plain
  | BackgroundJobGetStatus404Json
  | BackgroundJobGetStatus404Json2;

/**
 * @type object
 */
export type BackgroundJobGetStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BackgroundJobGetStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BackgroundJobGetStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BackgroundJobGetStatus500 =
  | BackgroundJobGetStatus500Plain
  | BackgroundJobGetStatus500Json
  | BackgroundJobGetStatus500Json2;

/**
 * @type object
 */
export type BackgroundJobGetStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BackgroundJobGetStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BackgroundJobGetStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BackgroundJobGetStatus501 =
  | BackgroundJobGetStatus501Plain
  | BackgroundJobGetStatus501Json
  | BackgroundJobGetStatus501Json2;

/**
 * @type object
 */
export type BackgroundJobGetRequestConfig = {
  data?: never;
  /**
   * @type object
   */
  pathParams: {
    id: BackgroundJobGetPathId;
  };
  queryParams?: never;
  headerParams?: never;
  /**
   * @type string
   */
  url: `/api/app/background-job/${string}`;
};

/**
 * @type object
 */
export type BackgroundJobGetResponses = {
  "200": BackgroundJobGetStatus200;
  "400": BackgroundJobGetStatus400;
  "401": BackgroundJobGetStatus401;
  "403": BackgroundJobGetStatus403;
  "404": BackgroundJobGetStatus404;
  "500": BackgroundJobGetStatus500;
  "501": BackgroundJobGetStatus501;
};

/**
 * @description Union of all possible responses
 */
export type BackgroundJobGetResponse =
  | BackgroundJobGetStatus200
  | BackgroundJobGetStatus400
  | BackgroundJobGetStatus401
  | BackgroundJobGetStatus403
  | BackgroundJobGetStatus404
  | BackgroundJobGetStatus500
  | BackgroundJobGetStatus501;
