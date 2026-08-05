/* oxlint-disable */

import type { AcroStackServicesDtosFileManagementStorageInfoDto } from "../acroStack/services/dtos/fileManagement/StorageInfoDto.ts";

/**
 * @type object
 */
export type FileManagementGetStorageInfoStatus200Plain =
  AcroStackServicesDtosFileManagementStorageInfoDto;

/**
 * @type object
 */
export type FileManagementGetStorageInfoStatus200Json =
  AcroStackServicesDtosFileManagementStorageInfoDto;

/**
 * @type object
 */
export type FileManagementGetStorageInfoStatus200Json2 =
  AcroStackServicesDtosFileManagementStorageInfoDto;

export type FileManagementGetStorageInfoStatus200 =
  | FileManagementGetStorageInfoStatus200Plain
  | FileManagementGetStorageInfoStatus200Json
  | FileManagementGetStorageInfoStatus200Json2;

/**
 * @type object
 */
export type FileManagementGetStorageInfoRequestConfig = {
  data?: never;
  pathParams?: never;
  queryParams?: never;
  headerParams?: never;
  /**
   * @type string
   */
  url: "/api/app/file-management/storage-info";
};

/**
 * @type object
 */
export type FileManagementGetStorageInfoResponses = {
  "200": FileManagementGetStorageInfoStatus200;
};

/**
 * @description Union of all possible responses
 */
export type FileManagementGetStorageInfoResponse = FileManagementGetStorageInfoStatus200;
