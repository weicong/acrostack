/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse.ts";

/**
 * @description
 * Format: `uuid`
 * @type string
 */
export type MediaDescriptorDownloadPathId = string;

/**
 * @description
 * Format: `binary`
 * @type string
 */
export type MediaDescriptorDownloadStatus200Plain = Blob;

/**
 * @description
 * Format: `binary`
 * @type string
 */
export type MediaDescriptorDownloadStatus200Json = Blob;

/**
 * @description
 * Format: `binary`
 * @type string
 */
export type MediaDescriptorDownloadStatus200Json2 = Blob;

export type MediaDescriptorDownloadStatus200 =
  | MediaDescriptorDownloadStatus200Plain
  | MediaDescriptorDownloadStatus200Json
  | MediaDescriptorDownloadStatus200Json2;

/**
 * @type object
 */
export type MediaDescriptorDownloadStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MediaDescriptorDownloadStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MediaDescriptorDownloadStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type MediaDescriptorDownloadStatus400 =
  | MediaDescriptorDownloadStatus400Plain
  | MediaDescriptorDownloadStatus400Json
  | MediaDescriptorDownloadStatus400Json2;

/**
 * @type object
 */
export type MediaDescriptorDownloadStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MediaDescriptorDownloadStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MediaDescriptorDownloadStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type MediaDescriptorDownloadStatus401 =
  | MediaDescriptorDownloadStatus401Plain
  | MediaDescriptorDownloadStatus401Json
  | MediaDescriptorDownloadStatus401Json2;

/**
 * @type object
 */
export type MediaDescriptorDownloadStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MediaDescriptorDownloadStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MediaDescriptorDownloadStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type MediaDescriptorDownloadStatus403 =
  | MediaDescriptorDownloadStatus403Plain
  | MediaDescriptorDownloadStatus403Json
  | MediaDescriptorDownloadStatus403Json2;

/**
 * @type object
 */
export type MediaDescriptorDownloadStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MediaDescriptorDownloadStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MediaDescriptorDownloadStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type MediaDescriptorDownloadStatus404 =
  | MediaDescriptorDownloadStatus404Plain
  | MediaDescriptorDownloadStatus404Json
  | MediaDescriptorDownloadStatus404Json2;

/**
 * @type object
 */
export type MediaDescriptorDownloadStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MediaDescriptorDownloadStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MediaDescriptorDownloadStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type MediaDescriptorDownloadStatus500 =
  | MediaDescriptorDownloadStatus500Plain
  | MediaDescriptorDownloadStatus500Json
  | MediaDescriptorDownloadStatus500Json2;

/**
 * @type object
 */
export type MediaDescriptorDownloadStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MediaDescriptorDownloadStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MediaDescriptorDownloadStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type MediaDescriptorDownloadStatus501 =
  | MediaDescriptorDownloadStatus501Plain
  | MediaDescriptorDownloadStatus501Json
  | MediaDescriptorDownloadStatus501Json2;

/**
 * @type object
 */
export type MediaDescriptorDownloadRequestConfig = {
  data?: never;
  /**
   * @type object
   */
  pathParams: {
    id: MediaDescriptorDownloadPathId;
  };
  queryParams?: never;
  headerParams?: never;
  /**
   * @type string
   */
  url: `/api/cms-kit/media/${string}`;
};

/**
 * @type object
 */
export type MediaDescriptorDownloadResponses = {
  "200": MediaDescriptorDownloadStatus200;
  "400": MediaDescriptorDownloadStatus400;
  "401": MediaDescriptorDownloadStatus401;
  "403": MediaDescriptorDownloadStatus403;
  "404": MediaDescriptorDownloadStatus404;
  "500": MediaDescriptorDownloadStatus500;
  "501": MediaDescriptorDownloadStatus501;
};

/**
 * @description Union of all possible responses
 */
export type MediaDescriptorDownloadResponse =
  | MediaDescriptorDownloadStatus200
  | MediaDescriptorDownloadStatus400
  | MediaDescriptorDownloadStatus401
  | MediaDescriptorDownloadStatus403
  | MediaDescriptorDownloadStatus404
  | MediaDescriptorDownloadStatus500
  | MediaDescriptorDownloadStatus501;
