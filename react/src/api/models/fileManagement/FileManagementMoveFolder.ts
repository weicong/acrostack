/* oxlint-disable */

import type { AcroStackFileManagementFileFolderDto } from "../acroStack/fileManagement/FileFolderDto.ts";
import type { AcroStackFileManagementMoveFileDto } from "../acroStack/fileManagement/MoveFileDto.ts";

/**
 * @description
 * Format: `uuid`
 * @type string
 */
export type FileManagementMoveFolderPathId = string;

/**
 * @type object
 */
export type FileManagementMoveFolderStatus200Plain = AcroStackFileManagementFileFolderDto;

/**
 * @type object
 */
export type FileManagementMoveFolderStatus200Json = AcroStackFileManagementFileFolderDto;

/**
 * @type object
 */
export type FileManagementMoveFolderStatus200Json2 = AcroStackFileManagementFileFolderDto;

export type FileManagementMoveFolderStatus200 =
  | FileManagementMoveFolderStatus200Plain
  | FileManagementMoveFolderStatus200Json
  | FileManagementMoveFolderStatus200Json2;

/**
 * @type object | undefined
 */
export type FileManagementMoveFolderJsonData = AcroStackFileManagementMoveFileDto | undefined;

/**
 * @type object | undefined
 */
export type FileManagementMoveFolderJson2Data = AcroStackFileManagementMoveFileDto | undefined;

/**
 * @type object | undefined
 */
export type FileManagementMoveFolderJson3Data = AcroStackFileManagementMoveFileDto | undefined;

export type FileManagementMoveFolderData =
  | FileManagementMoveFolderJsonData
  | FileManagementMoveFolderJson2Data
  | FileManagementMoveFolderJson3Data;

/**
 * @type object
 */
export type FileManagementMoveFolderRequestConfig = {
  data?: FileManagementMoveFolderData;
  /**
   * @type object
   */
  pathParams: {
    id: FileManagementMoveFolderPathId;
  };
  queryParams?: never;
  headerParams?: never;
  /**
   * @type string
   */
  url: `/api/app/file-management/folders/${string}/move`;
};

/**
 * @type object
 */
export type FileManagementMoveFolderResponses = {
  "200": FileManagementMoveFolderStatus200;
};

/**
 * @description Union of all possible responses
 */
export type FileManagementMoveFolderResponse = FileManagementMoveFolderStatus200;
