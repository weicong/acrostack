/* oxlint-disable */

import type { AcroStackFileManagementStorageInfoDto } from "../acroStack/fileManagement/StorageInfoDto.ts";

/**
 * @type object
 */
export type FileManagementGetStorageInfoStatus200Plain = AcroStackFileManagementStorageInfoDto;

/**
 * @type object
 */
export type FileManagementGetStorageInfoStatus200Json = AcroStackFileManagementStorageInfoDto;

/**
 * @type object
 */
export type FileManagementGetStorageInfoStatus200Json2 = AcroStackFileManagementStorageInfoDto;

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
