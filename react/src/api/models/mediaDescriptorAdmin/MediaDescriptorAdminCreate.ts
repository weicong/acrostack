/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse.ts";
import type { VoloCmsKitAdminMediaDescriptorsMediaDescriptorDto } from "../volo/cmsKit/admin/mediaDescriptors/MediaDescriptorDto.ts";

/**
 * @type string
 */
export type MediaDescriptorAdminCreatePathEntityType = string;

/**
 * @minLength 0
 * @maxLength 255
 * @type string
 */
export type MediaDescriptorAdminCreateQueryName = string;

/**
 * @type object
 */
export type MediaDescriptorAdminCreateStatus200Plain =
  VoloCmsKitAdminMediaDescriptorsMediaDescriptorDto;

/**
 * @type object
 */
export type MediaDescriptorAdminCreateStatus200Json =
  VoloCmsKitAdminMediaDescriptorsMediaDescriptorDto;

/**
 * @type object
 */
export type MediaDescriptorAdminCreateStatus200Json2 =
  VoloCmsKitAdminMediaDescriptorsMediaDescriptorDto;

export type MediaDescriptorAdminCreateStatus200 =
  | MediaDescriptorAdminCreateStatus200Plain
  | MediaDescriptorAdminCreateStatus200Json
  | MediaDescriptorAdminCreateStatus200Json2;

/**
 * @type object
 */
export type MediaDescriptorAdminCreateStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MediaDescriptorAdminCreateStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MediaDescriptorAdminCreateStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type MediaDescriptorAdminCreateStatus400 =
  | MediaDescriptorAdminCreateStatus400Plain
  | MediaDescriptorAdminCreateStatus400Json
  | MediaDescriptorAdminCreateStatus400Json2;

/**
 * @type object
 */
export type MediaDescriptorAdminCreateStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MediaDescriptorAdminCreateStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MediaDescriptorAdminCreateStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type MediaDescriptorAdminCreateStatus401 =
  | MediaDescriptorAdminCreateStatus401Plain
  | MediaDescriptorAdminCreateStatus401Json
  | MediaDescriptorAdminCreateStatus401Json2;

/**
 * @type object
 */
export type MediaDescriptorAdminCreateStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MediaDescriptorAdminCreateStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MediaDescriptorAdminCreateStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type MediaDescriptorAdminCreateStatus403 =
  | MediaDescriptorAdminCreateStatus403Plain
  | MediaDescriptorAdminCreateStatus403Json
  | MediaDescriptorAdminCreateStatus403Json2;

/**
 * @type object
 */
export type MediaDescriptorAdminCreateStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MediaDescriptorAdminCreateStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MediaDescriptorAdminCreateStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type MediaDescriptorAdminCreateStatus404 =
  | MediaDescriptorAdminCreateStatus404Plain
  | MediaDescriptorAdminCreateStatus404Json
  | MediaDescriptorAdminCreateStatus404Json2;

/**
 * @type object
 */
export type MediaDescriptorAdminCreateStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MediaDescriptorAdminCreateStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MediaDescriptorAdminCreateStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type MediaDescriptorAdminCreateStatus500 =
  | MediaDescriptorAdminCreateStatus500Plain
  | MediaDescriptorAdminCreateStatus500Json
  | MediaDescriptorAdminCreateStatus500Json2;

/**
 * @type object
 */
export type MediaDescriptorAdminCreateStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MediaDescriptorAdminCreateStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MediaDescriptorAdminCreateStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type MediaDescriptorAdminCreateStatus501 =
  | MediaDescriptorAdminCreateStatus501Plain
  | MediaDescriptorAdminCreateStatus501Json
  | MediaDescriptorAdminCreateStatus501Json2;

/**
 * @type object | undefined
 */
export type MediaDescriptorAdminCreateData =
  | {
      /**
       * @description
       * Format: `binary`
       * @type string | undefined
       */
      File?: Blob;
    }
  | undefined;

/**
 * @type object
 */
export type MediaDescriptorAdminCreateRequestConfig = {
  data?: MediaDescriptorAdminCreateData;
  /**
   * @type object
   */
  pathParams: {
    entityType: MediaDescriptorAdminCreatePathEntityType;
  };
  /**
   * @type object | undefined
   */
  queryParams?: {
    Name: MediaDescriptorAdminCreateQueryName;
  };
  headerParams?: never;
  /**
   * @type string
   */
  url: `/api/cms-kit-admin/media/${string}`;
};

/**
 * @type object
 */
export type MediaDescriptorAdminCreateResponses = {
  "200": MediaDescriptorAdminCreateStatus200;
  "400": MediaDescriptorAdminCreateStatus400;
  "401": MediaDescriptorAdminCreateStatus401;
  "403": MediaDescriptorAdminCreateStatus403;
  "404": MediaDescriptorAdminCreateStatus404;
  "500": MediaDescriptorAdminCreateStatus500;
  "501": MediaDescriptorAdminCreateStatus501;
};

/**
 * @description Union of all possible responses
 */
export type MediaDescriptorAdminCreateResponse =
  | MediaDescriptorAdminCreateStatus200
  | MediaDescriptorAdminCreateStatus400
  | MediaDescriptorAdminCreateStatus401
  | MediaDescriptorAdminCreateStatus403
  | MediaDescriptorAdminCreateStatus404
  | MediaDescriptorAdminCreateStatus500
  | MediaDescriptorAdminCreateStatus501;
