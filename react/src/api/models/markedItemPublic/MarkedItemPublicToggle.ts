/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse.ts";

/**
 * @type string
 */
export type MarkedItemPublicTogglePathEntityType = string;

/**
 * @type string
 */
export type MarkedItemPublicTogglePathEntityId = string;

/**
 * @type boolean
 */
export type MarkedItemPublicToggleStatus200Plain = boolean;

/**
 * @type boolean
 */
export type MarkedItemPublicToggleStatus200Json = boolean;

/**
 * @type boolean
 */
export type MarkedItemPublicToggleStatus200Json2 = boolean;

export type MarkedItemPublicToggleStatus200 =
  | MarkedItemPublicToggleStatus200Plain
  | MarkedItemPublicToggleStatus200Json
  | MarkedItemPublicToggleStatus200Json2;

/**
 * @type object
 */
export type MarkedItemPublicToggleStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MarkedItemPublicToggleStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MarkedItemPublicToggleStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type MarkedItemPublicToggleStatus400 =
  | MarkedItemPublicToggleStatus400Plain
  | MarkedItemPublicToggleStatus400Json
  | MarkedItemPublicToggleStatus400Json2;

/**
 * @type object
 */
export type MarkedItemPublicToggleStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MarkedItemPublicToggleStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MarkedItemPublicToggleStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type MarkedItemPublicToggleStatus401 =
  | MarkedItemPublicToggleStatus401Plain
  | MarkedItemPublicToggleStatus401Json
  | MarkedItemPublicToggleStatus401Json2;

/**
 * @type object
 */
export type MarkedItemPublicToggleStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MarkedItemPublicToggleStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MarkedItemPublicToggleStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type MarkedItemPublicToggleStatus403 =
  | MarkedItemPublicToggleStatus403Plain
  | MarkedItemPublicToggleStatus403Json
  | MarkedItemPublicToggleStatus403Json2;

/**
 * @type object
 */
export type MarkedItemPublicToggleStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MarkedItemPublicToggleStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MarkedItemPublicToggleStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type MarkedItemPublicToggleStatus404 =
  | MarkedItemPublicToggleStatus404Plain
  | MarkedItemPublicToggleStatus404Json
  | MarkedItemPublicToggleStatus404Json2;

/**
 * @type object
 */
export type MarkedItemPublicToggleStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MarkedItemPublicToggleStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MarkedItemPublicToggleStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type MarkedItemPublicToggleStatus500 =
  | MarkedItemPublicToggleStatus500Plain
  | MarkedItemPublicToggleStatus500Json
  | MarkedItemPublicToggleStatus500Json2;

/**
 * @type object
 */
export type MarkedItemPublicToggleStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MarkedItemPublicToggleStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MarkedItemPublicToggleStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type MarkedItemPublicToggleStatus501 =
  | MarkedItemPublicToggleStatus501Plain
  | MarkedItemPublicToggleStatus501Json
  | MarkedItemPublicToggleStatus501Json2;

/**
 * @type object
 */
export type MarkedItemPublicToggleRequestConfig = {
  data?: never;
  /**
   * @type object
   */
  pathParams: {
    entityType: MarkedItemPublicTogglePathEntityType;
    entityId: MarkedItemPublicTogglePathEntityId;
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
export type MarkedItemPublicToggleResponses = {
  "200": MarkedItemPublicToggleStatus200;
  "400": MarkedItemPublicToggleStatus400;
  "401": MarkedItemPublicToggleStatus401;
  "403": MarkedItemPublicToggleStatus403;
  "404": MarkedItemPublicToggleStatus404;
  "500": MarkedItemPublicToggleStatus500;
  "501": MarkedItemPublicToggleStatus501;
};

/**
 * @description Union of all possible responses
 */
export type MarkedItemPublicToggleResponse =
  | MarkedItemPublicToggleStatus200
  | MarkedItemPublicToggleStatus400
  | MarkedItemPublicToggleStatus401
  | MarkedItemPublicToggleStatus403
  | MarkedItemPublicToggleStatus404
  | MarkedItemPublicToggleStatus500
  | MarkedItemPublicToggleStatus501;
