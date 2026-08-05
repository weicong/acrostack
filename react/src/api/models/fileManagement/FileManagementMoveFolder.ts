/* oxlint-disable */

import type { AcroStackServicesDtosFileManagementFileFolderDto } from "../acroStack/services/dtos/fileManagement/FileFolderDto.ts";
import type { AcroStackServicesDtosFileManagementMoveFileDto } from "../acroStack/services/dtos/fileManagement/MoveFileDto.ts";

/**
 * @description
 * Format: `uuid`
 * @type string
 */
export type FileManagementMoveFolderPathId = string;

/**
 * @type object
 */
export type FileManagementMoveFolderStatus200Plain =
  AcroStackServicesDtosFileManagementFileFolderDto;

/**
 * @type object
 */
export type FileManagementMoveFolderStatus200Json =
  AcroStackServicesDtosFileManagementFileFolderDto;

/**
 * @type object
 */
export type FileManagementMoveFolderStatus200Json2 =
  AcroStackServicesDtosFileManagementFileFolderDto;

export type FileManagementMoveFolderStatus200 =
  | FileManagementMoveFolderStatus200Plain
  | FileManagementMoveFolderStatus200Json
  | FileManagementMoveFolderStatus200Json2;

/**
 * @type object | undefined
 */
export type FileManagementMoveFolderJsonData =
  | AcroStackServicesDtosFileManagementMoveFileDto
  | undefined;

/**
 * @type object | undefined
 */
export type FileManagementMoveFolderJson2Data =
  | AcroStackServicesDtosFileManagementMoveFileDto
  | undefined;

/**
 * @type object | undefined
 */
export type FileManagementMoveFolderJson3Data =
  | AcroStackServicesDtosFileManagementMoveFileDto
  | undefined;

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
