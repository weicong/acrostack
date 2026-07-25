/* oxlint-disable */

import type { AcroStackServicesDtosFileManagementFileFolderDto } from "../acroStack/services/dtos/fileManagement/FileFolderDto.ts";
import type { AcroStackServicesDtosFileManagementRenameDto } from "../acroStack/services/dtos/fileManagement/RenameDto.ts";

/**
 * @description
 * Format: `uuid`
 * @type string
 */
export type FileManagementRenameFolderPathId = string;

/**
 * @type object
 */
export type FileManagementRenameFolderStatus200Plain =
  AcroStackServicesDtosFileManagementFileFolderDto;

/**
 * @type object
 */
export type FileManagementRenameFolderStatus200Json =
  AcroStackServicesDtosFileManagementFileFolderDto;

/**
 * @type object
 */
export type FileManagementRenameFolderStatus200Json2 =
  AcroStackServicesDtosFileManagementFileFolderDto;

export type FileManagementRenameFolderStatus200 =
  | FileManagementRenameFolderStatus200Plain
  | FileManagementRenameFolderStatus200Json
  | FileManagementRenameFolderStatus200Json2;

/**
 * @type object | undefined
 */
export type FileManagementRenameFolderJsonData =
  | AcroStackServicesDtosFileManagementRenameDto
  | undefined;

/**
 * @type object | undefined
 */
export type FileManagementRenameFolderJson2Data =
  | AcroStackServicesDtosFileManagementRenameDto
  | undefined;

/**
 * @type object | undefined
 */
export type FileManagementRenameFolderJson3Data =
  | AcroStackServicesDtosFileManagementRenameDto
  | undefined;

export type FileManagementRenameFolderData =
  | FileManagementRenameFolderJsonData
  | FileManagementRenameFolderJson2Data
  | FileManagementRenameFolderJson3Data;

/**
 * @type object
 */
export type FileManagementRenameFolderRequestConfig = {
  data?: FileManagementRenameFolderData;
  /**
   * @type object
   */
  pathParams: {
    id: FileManagementRenameFolderPathId;
  };
  queryParams?: never;
  headerParams?: never;
  /**
   * @type string
   */
  url: `/api/app/file-management/folders/${string}/rename`;
};

/**
 * @type object
 */
export type FileManagementRenameFolderResponses = {
  "200": FileManagementRenameFolderStatus200;
};

/**
 * @description Union of all possible responses
 */
export type FileManagementRenameFolderResponse = FileManagementRenameFolderStatus200;
