/* oxlint-disable */

import type { VoloAbpApplicationDtosListResultDto1AcroStackFileManagementFileFolderDtoAcroStackFileManagementVersion1000CultureneutralPublicKeyTokennull } from "../volo/abp/application/dtos/listResultDto1AcroStack/fileManagement/fileFolderDtoAcroStack/FileManagementVersion1000CultureneutralPublicKeyTokennull.ts";

/**
 * @description
 * Format: `uuid`
 * @type string | undefined
 */
export type FileManagementGetFoldersQueryParentId = string | undefined;

/**
 * @type object
 */
export type FileManagementGetFoldersStatus200Plain =
  VoloAbpApplicationDtosListResultDto1AcroStackFileManagementFileFolderDtoAcroStackFileManagementVersion1000CultureneutralPublicKeyTokennull;

/**
 * @type object
 */
export type FileManagementGetFoldersStatus200Json =
  VoloAbpApplicationDtosListResultDto1AcroStackFileManagementFileFolderDtoAcroStackFileManagementVersion1000CultureneutralPublicKeyTokennull;

/**
 * @type object
 */
export type FileManagementGetFoldersStatus200Json2 =
  VoloAbpApplicationDtosListResultDto1AcroStackFileManagementFileFolderDtoAcroStackFileManagementVersion1000CultureneutralPublicKeyTokennull;

export type FileManagementGetFoldersStatus200 =
  | FileManagementGetFoldersStatus200Plain
  | FileManagementGetFoldersStatus200Json
  | FileManagementGetFoldersStatus200Json2;

/**
 * @type object
 */
export type FileManagementGetFoldersRequestConfig = {
  data?: never;
  pathParams?: never;
  /**
   * @type object | undefined
   */
  queryParams?: {
    parentId?: FileManagementGetFoldersQueryParentId;
  };
  headerParams?: never;
  /**
   * @type string
   */
  url: "/api/app/file-management/folders";
};

/**
 * @type object
 */
export type FileManagementGetFoldersResponses = {
  "200": FileManagementGetFoldersStatus200;
};

/**
 * @description Union of all possible responses
 */
export type FileManagementGetFoldersResponse = FileManagementGetFoldersStatus200;
