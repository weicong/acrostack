/* oxlint-disable */

import type { AcroStackServicesDtosSaaSAssignEditionInput } from "../acroStack/services/dtos/saaS/AssignEditionInput.ts";
import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse.ts";

/**
 * @description
 * Format: `uuid`
 * @type string
 */
export type TenantEditionAssignEditionPathTenantId = string;

/**
 * @type any
 */
export type TenantEditionAssignEditionStatus200 = any;

/**
 * @type any
 */
export type TenantEditionAssignEditionStatus204 = any;

/**
 * @type object
 */
export type TenantEditionAssignEditionStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TenantEditionAssignEditionStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TenantEditionAssignEditionStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type TenantEditionAssignEditionStatus400 =
  | TenantEditionAssignEditionStatus400Plain
  | TenantEditionAssignEditionStatus400Json
  | TenantEditionAssignEditionStatus400Json2;

/**
 * @type object
 */
export type TenantEditionAssignEditionStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TenantEditionAssignEditionStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TenantEditionAssignEditionStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type TenantEditionAssignEditionStatus401 =
  | TenantEditionAssignEditionStatus401Plain
  | TenantEditionAssignEditionStatus401Json
  | TenantEditionAssignEditionStatus401Json2;

/**
 * @type object
 */
export type TenantEditionAssignEditionStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TenantEditionAssignEditionStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TenantEditionAssignEditionStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type TenantEditionAssignEditionStatus403 =
  | TenantEditionAssignEditionStatus403Plain
  | TenantEditionAssignEditionStatus403Json
  | TenantEditionAssignEditionStatus403Json2;

/**
 * @type object
 */
export type TenantEditionAssignEditionStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TenantEditionAssignEditionStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TenantEditionAssignEditionStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type TenantEditionAssignEditionStatus404 =
  | TenantEditionAssignEditionStatus404Plain
  | TenantEditionAssignEditionStatus404Json
  | TenantEditionAssignEditionStatus404Json2;

/**
 * @type object
 */
export type TenantEditionAssignEditionStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TenantEditionAssignEditionStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TenantEditionAssignEditionStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type TenantEditionAssignEditionStatus500 =
  | TenantEditionAssignEditionStatus500Plain
  | TenantEditionAssignEditionStatus500Json
  | TenantEditionAssignEditionStatus500Json2;

/**
 * @type object
 */
export type TenantEditionAssignEditionStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TenantEditionAssignEditionStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TenantEditionAssignEditionStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type TenantEditionAssignEditionStatus501 =
  | TenantEditionAssignEditionStatus501Plain
  | TenantEditionAssignEditionStatus501Json
  | TenantEditionAssignEditionStatus501Json2;

/**
 * @type object | undefined
 */
export type TenantEditionAssignEditionJsonData =
  | AcroStackServicesDtosSaaSAssignEditionInput
  | undefined;

/**
 * @type object | undefined
 */
export type TenantEditionAssignEditionJson2Data =
  | AcroStackServicesDtosSaaSAssignEditionInput
  | undefined;

/**
 * @type object | undefined
 */
export type TenantEditionAssignEditionJson3Data =
  | AcroStackServicesDtosSaaSAssignEditionInput
  | undefined;

export type TenantEditionAssignEditionData =
  | TenantEditionAssignEditionJsonData
  | TenantEditionAssignEditionJson2Data
  | TenantEditionAssignEditionJson3Data;

/**
 * @type object
 */
export type TenantEditionAssignEditionRequestConfig = {
  data?: TenantEditionAssignEditionData;
  /**
   * @type object
   */
  pathParams: {
    tenantId: TenantEditionAssignEditionPathTenantId;
  };
  queryParams?: never;
  headerParams?: never;
  /**
   * @type string
   */
  url: `/api/app/tenant-edition/assign-edition/${string}`;
};

/**
 * @type object
 */
export type TenantEditionAssignEditionResponses = {
  "200": TenantEditionAssignEditionStatus200;
  "204": TenantEditionAssignEditionStatus204;
  "400": TenantEditionAssignEditionStatus400;
  "401": TenantEditionAssignEditionStatus401;
  "403": TenantEditionAssignEditionStatus403;
  "404": TenantEditionAssignEditionStatus404;
  "500": TenantEditionAssignEditionStatus500;
  "501": TenantEditionAssignEditionStatus501;
};

/**
 * @description Union of all possible responses
 */
export type TenantEditionAssignEditionResponse =
  | TenantEditionAssignEditionStatus200
  | TenantEditionAssignEditionStatus204
  | TenantEditionAssignEditionStatus400
  | TenantEditionAssignEditionStatus401
  | TenantEditionAssignEditionStatus403
  | TenantEditionAssignEditionStatus404
  | TenantEditionAssignEditionStatus500
  | TenantEditionAssignEditionStatus501;
