/* oxlint-disable */

import type { AcroStackServicesDtosFileManagementCreateFileFolderDto } from "../acroStack/services/dtos/fileManagement/CreateFileFolderDto.ts";
import type { AcroStackServicesDtosFileManagementFileFolderDto } from "../acroStack/services/dtos/fileManagement/FileFolderDto.ts";

/**
 * @type object
 */
export type FileManagementCreateFolderStatus200Plain =
  AcroStackServicesDtosFileManagementFileFolderDto;

/**
 * @type object
 */
export type FileManagementCreateFolderStatus200Json =
  AcroStackServicesDtosFileManagementFileFolderDto;

/**
 * @type object
 */
export type FileManagementCreateFolderStatus200Json2 =
  AcroStackServicesDtosFileManagementFileFolderDto;

export type FileManagementCreateFolderStatus200 =
  | FileManagementCreateFolderStatus200Plain
  | FileManagementCreateFolderStatus200Json
  | FileManagementCreateFolderStatus200Json2;

/**
 * @type object | undefined
 */
export type FileManagementCreateFolderJsonData =
  | AcroStackServicesDtosFileManagementCreateFileFolderDto
  | undefined;

/**
 * @type object | undefined
 */
export type FileManagementCreateFolderJson2Data =
  | AcroStackServicesDtosFileManagementCreateFileFolderDto
  | undefined;

/**
 * @type object | undefined
 */
export type FileManagementCreateFolderJson3Data =
  | AcroStackServicesDtosFileManagementCreateFileFolderDto
  | undefined;

export type FileManagementCreateFolderData =
  | FileManagementCreateFolderJsonData
  | FileManagementCreateFolderJson2Data
  | FileManagementCreateFolderJson3Data;

/**
 * @type object
 */
export type FileManagementCreateFolderRequestConfig = {
  data?: FileManagementCreateFolderData;
  pathParams?: never;
  queryParams?: never;
  headerParams?: never;
  /**
   * @type string
   */
  url: "/api/app/file-management/folders";
};

/**
 * @type object
 */
export type FileManagementCreateFolderResponses = {
  "200": FileManagementCreateFolderStatus200;
};

/**
 * @description Union of all possible responses
 */
export type FileManagementCreateFolderResponse = FileManagementCreateFolderStatus200;
