/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse.ts";
import type { VoloCmsKitPublicMarkedItemsMarkedItemWithToggleDto } from "../volo/cmsKit/public/markedItems/MarkedItemWithToggleDto.ts";

/**
 * @type string
 */
export type MarkedItemPublicGetForUserPathEntityType = string;

/**
 * @type string
 */
export type MarkedItemPublicGetForUserPathEntityId = string;

/**
 * @type object
 */
export type MarkedItemPublicGetForUserStatus200Plain =
  VoloCmsKitPublicMarkedItemsMarkedItemWithToggleDto;

/**
 * @type object
 */
export type MarkedItemPublicGetForUserStatus200Json =
  VoloCmsKitPublicMarkedItemsMarkedItemWithToggleDto;

/**
 * @type object
 */
export type MarkedItemPublicGetForUserStatus200Json2 =
  VoloCmsKitPublicMarkedItemsMarkedItemWithToggleDto;

export type MarkedItemPublicGetForUserStatus200 =
  | MarkedItemPublicGetForUserStatus200Plain
  | MarkedItemPublicGetForUserStatus200Json
  | MarkedItemPublicGetForUserStatus200Json2;

/**
 * @type object
 */
export type MarkedItemPublicGetForUserStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MarkedItemPublicGetForUserStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MarkedItemPublicGetForUserStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type MarkedItemPublicGetForUserStatus400 =
  | MarkedItemPublicGetForUserStatus400Plain
  | MarkedItemPublicGetForUserStatus400Json
  | MarkedItemPublicGetForUserStatus400Json2;

/**
 * @type object
 */
export type MarkedItemPublicGetForUserStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MarkedItemPublicGetForUserStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MarkedItemPublicGetForUserStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type MarkedItemPublicGetForUserStatus401 =
  | MarkedItemPublicGetForUserStatus401Plain
  | MarkedItemPublicGetForUserStatus401Json
  | MarkedItemPublicGetForUserStatus401Json2;

/**
 * @type object
 */
export type MarkedItemPublicGetForUserStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MarkedItemPublicGetForUserStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MarkedItemPublicGetForUserStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type MarkedItemPublicGetForUserStatus403 =
  | MarkedItemPublicGetForUserStatus403Plain
  | MarkedItemPublicGetForUserStatus403Json
  | MarkedItemPublicGetForUserStatus403Json2;

/**
 * @type object
 */
export type MarkedItemPublicGetForUserStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MarkedItemPublicGetForUserStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MarkedItemPublicGetForUserStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type MarkedItemPublicGetForUserStatus404 =
  | MarkedItemPublicGetForUserStatus404Plain
  | MarkedItemPublicGetForUserStatus404Json
  | MarkedItemPublicGetForUserStatus404Json2;

/**
 * @type object
 */
export type MarkedItemPublicGetForUserStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MarkedItemPublicGetForUserStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MarkedItemPublicGetForUserStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type MarkedItemPublicGetForUserStatus500 =
  | MarkedItemPublicGetForUserStatus500Plain
  | MarkedItemPublicGetForUserStatus500Json
  | MarkedItemPublicGetForUserStatus500Json2;

/**
 * @type object
 */
export type MarkedItemPublicGetForUserStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MarkedItemPublicGetForUserStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MarkedItemPublicGetForUserStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type MarkedItemPublicGetForUserStatus501 =
  | MarkedItemPublicGetForUserStatus501Plain
  | MarkedItemPublicGetForUserStatus501Json
  | MarkedItemPublicGetForUserStatus501Json2;

/**
 * @type object
 */
export type MarkedItemPublicGetForUserRequestConfig = {
  data?: never;
  /**
   * @type object
   */
  pathParams: {
    entityType: MarkedItemPublicGetForUserPathEntityType;
    entityId: MarkedItemPublicGetForUserPathEntityId;
  };
  queryParams?: never;
  headerParams?: never;
  /**
   * @type string
   */
  url: `/api/cms-kit-public/marked-items/${string}/${string}`;
};

/**
 * @type object
 */
export type MarkedItemPublicGetForUserResponses = {
  "200": MarkedItemPublicGetForUserStatus200;
  "400": MarkedItemPublicGetForUserStatus400;
  "401": MarkedItemPublicGetForUserStatus401;
  "403": MarkedItemPublicGetForUserStatus403;
  "404": MarkedItemPublicGetForUserStatus404;
  "500": MarkedItemPublicGetForUserStatus500;
  "501": MarkedItemPublicGetForUserStatus501;
};

/**
 * @description Union of all possible responses
 */
export type MarkedItemPublicGetForUserResponse =
  | MarkedItemPublicGetForUserStatus200
  | MarkedItemPublicGetForUserStatus400
  | MarkedItemPublicGetForUserStatus401
  | MarkedItemPublicGetForUserStatus403
  | MarkedItemPublicGetForUserStatus404
  | MarkedItemPublicGetForUserStatus500
  | MarkedItemPublicGetForUserStatus501;
