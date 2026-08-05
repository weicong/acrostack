/* oxlint-disable */

import type { AcroStackServicesDtosFileManagementFileEntryDto } from "../acroStack/services/dtos/fileManagement/FileEntryDto.ts";
import type { AcroStackServicesDtosFileManagementMoveFileDto } from "../acroStack/services/dtos/fileManagement/MoveFileDto.ts";

/**
 * @description
 * Format: `uuid`
 * @type string
 */
export type FileManagementMoveFilePathId = string;

/**
 * @type object
 */
export type FileManagementMoveFileStatus200Plain = AcroStackServicesDtosFileManagementFileEntryDto;

/**
 * @type object
 */
export type FileManagementMoveFileStatus200Json = AcroStackServicesDtosFileManagementFileEntryDto;

/**
 * @type object
 */
export type FileManagementMoveFileStatus200Json2 = AcroStackServicesDtosFileManagementFileEntryDto;

export type FileManagementMoveFileStatus200 =
  | FileManagementMoveFileStatus200Plain
  | FileManagementMoveFileStatus200Json
  | FileManagementMoveFileStatus200Json2;

/**
 * @type object | undefined
 */
export type FileManagementMoveFileJsonData =
  | AcroStackServicesDtosFileManagementMoveFileDto
  | undefined;

/**
 * @type object | undefined
 */
export type FileManagementMoveFileJson2Data =
  | AcroStackServicesDtosFileManagementMoveFileDto
  | undefined;

/**
 * @type object | undefined
 */
export type FileManagementMoveFileJson3Data =
  | AcroStackServicesDtosFileManagementMoveFileDto
  | undefined;

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
