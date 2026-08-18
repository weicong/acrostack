/* oxlint-disable */

import type { AcroStackFileManagementFileEntryDto } from "../acroStack/fileManagement/FileEntryDto.ts";
import type { AcroStackFileManagementMoveFileDto } from "../acroStack/fileManagement/MoveFileDto.ts";

/**
 * @description
 * Format: `uuid`
 * @type string
 */
export type FileManagementMoveFilePathId = string;

/**
 * @type object
 */
export type FileManagementMoveFileStatus200Plain = AcroStackFileManagementFileEntryDto;

/**
 * @type object
 */
export type FileManagementMoveFileStatus200Json = AcroStackFileManagementFileEntryDto;

/**
 * @type object
 */
export type FileManagementMoveFileStatus200Json2 = AcroStackFileManagementFileEntryDto;

export type FileManagementMoveFileStatus200 =
  | FileManagementMoveFileStatus200Plain
  | FileManagementMoveFileStatus200Json
  | FileManagementMoveFileStatus200Json2;

/**
 * @type object | undefined
 */
export type FileManagementMoveFileJsonData = AcroStackFileManagementMoveFileDto | undefined;

/**
 * @type object | undefined
 */
export type FileManagementMoveFileJson2Data = AcroStackFileManagementMoveFileDto | undefined;

/**
 * @type object | undefined
 */
export type FileManagementMoveFileJson3Data = AcroStackFileManagementMoveFileDto | undefined;

export type FileManagementMoveFileData =
  | FileManagementMoveFileJsonData
  | FileManagementMoveFileJson2Data
  | FileManagementMoveFileJson3Data;

/**
 * @type object
 */
export type FileManagementMoveFileRequestConfig = {
  data?: FileManagementMoveFileData;
  /**
   * @type object
   */
  pathParams: {
    id: FileManagementMoveFilePathId;
  };
  queryParams?: never;
  headerParams?: never;
  /**
   * @type string
   */
  url: `/api/app/file-management/files/${string}/move`;
};

/**
 * @type object
 */
export type FileManagementMoveFileResponses = {
  "200": FileManagementMoveFileStatus200;
};

/**
 * @description Union of all possible responses
 */
export type FileManagementMoveFileResponse = FileManagementMoveFileStatus200;
