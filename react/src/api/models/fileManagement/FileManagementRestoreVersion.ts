/* oxlint-disable */

import type { AcroStackFileManagementFileEntryDto } from "../acroStack/fileManagement/FileEntryDto.ts";

/**
 * @description
 * Format: `uuid`
 * @type string
 */
export type FileManagementRestoreVersionPathId = string;

/**
 * @description
 * Format: `uuid`
 * @type string
 */
export type FileManagementRestoreVersionPathVersionId = string;

/**
 * @type object
 */
export type FileManagementRestoreVersionStatus200Plain = AcroStackFileManagementFileEntryDto;

/**
 * @type object
 */
export type FileManagementRestoreVersionStatus200Json = AcroStackFileManagementFileEntryDto;

/**
 * @type object
 */
export type FileManagementRestoreVersionStatus200Json2 = AcroStackFileManagementFileEntryDto;

export type FileManagementRestoreVersionStatus200 =
  | FileManagementRestoreVersionStatus200Plain
  | FileManagementRestoreVersionStatus200Json
  | FileManagementRestoreVersionStatus200Json2;

/**
 * @type object
 */
export type FileManagementRestoreVersionRequestConfig = {
  data?: never;
  /**
   * @type object
   */
  pathParams: {
    id: FileManagementRestoreVersionPathId;
    versionId: FileManagementRestoreVersionPathVersionId;
  };
  queryParams?: never;
  headerParams?: never;
  /**
   * @type string
   */
  url: `/api/app/file-management/files/${string}/versions/${string}/restore`;
};

/**
 * @type object
 */
export type FileManagementRestoreVersionResponses = {
  "200": FileManagementRestoreVersionStatus200;
};

/**
 * @description Union of all possible responses
 */
export type FileManagementRestoreVersionResponse = FileManagementRestoreVersionStatus200;
