/* oxlint-disable */

import type { AcroStackFileManagementCreateFileFolderDto } from "../acroStack/fileManagement/CreateFileFolderDto.ts";
import type { AcroStackFileManagementFileFolderDto } from "../acroStack/fileManagement/FileFolderDto.ts";

/**
 * @type object
 */
export type FileManagementCreateFolderStatus200Plain = AcroStackFileManagementFileFolderDto;

/**
 * @type object
 */
export type FileManagementCreateFolderStatus200Json = AcroStackFileManagementFileFolderDto;

/**
 * @type object
 */
export type FileManagementCreateFolderStatus200Json2 = AcroStackFileManagementFileFolderDto;

export type FileManagementCreateFolderStatus200 =
  | FileManagementCreateFolderStatus200Plain
  | FileManagementCreateFolderStatus200Json
  | FileManagementCreateFolderStatus200Json2;

/**
 * @type object | undefined
 */
export type FileManagementCreateFolderJsonData =
  | AcroStackFileManagementCreateFileFolderDto
  | undefined;

/**
 * @type object | undefined
 */
export type FileManagementCreateFolderJson2Data =
  | AcroStackFileManagementCreateFileFolderDto
  | undefined;

/**
 * @type object | undefined
 */
export type FileManagementCreateFolderJson3Data =
  | AcroStackFileManagementCreateFileFolderDto
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
