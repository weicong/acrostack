/* oxlint-disable */

import type { VoloAbpApplicationDtosListResultDto1AcroStackFileManagementFileEntryDtoAcroStackFileManagementVersion1000CultureneutralPublicKeyTokennull } from "../volo/abp/application/dtos/listResultDto1AcroStack/fileManagement/fileEntryDtoAcroStack/FileManagementVersion1000CultureneutralPublicKeyTokennull.ts";

/**
 * @description
 * Format: `uuid`
 * @type string | undefined
 */
export type FileManagementGetFilesQueryFolderId = string | undefined;

/**
 * @type object
 */
export type FileManagementGetFilesStatus200Plain =
  VoloAbpApplicationDtosListResultDto1AcroStackFileManagementFileEntryDtoAcroStackFileManagementVersion1000CultureneutralPublicKeyTokennull;

/**
 * @type object
 */
export type FileManagementGetFilesStatus200Json =
  VoloAbpApplicationDtosListResultDto1AcroStackFileManagementFileEntryDtoAcroStackFileManagementVersion1000CultureneutralPublicKeyTokennull;

/**
 * @type object
 */
export type FileManagementGetFilesStatus200Json2 =
  VoloAbpApplicationDtosListResultDto1AcroStackFileManagementFileEntryDtoAcroStackFileManagementVersion1000CultureneutralPublicKeyTokennull;

export type FileManagementGetFilesStatus200 =
  | FileManagementGetFilesStatus200Plain
  | FileManagementGetFilesStatus200Json
  | FileManagementGetFilesStatus200Json2;

/**
 * @type object
 */
export type FileManagementGetFilesRequestConfig = {
  data?: never;
  pathParams?: never;
  /**
   * @type object | undefined
   */
  queryParams?: {
    folderId?: FileManagementGetFilesQueryFolderId;
  };
  headerParams?: never;
  /**
   * @type string
   */
  url: "/api/app/file-management/files";
};

/**
 * @type object
 */
export type FileManagementGetFilesResponses = {
  "200": FileManagementGetFilesStatus200;
};

/**
 * @description Union of all possible responses
 */
export type FileManagementGetFilesResponse = FileManagementGetFilesStatus200;
