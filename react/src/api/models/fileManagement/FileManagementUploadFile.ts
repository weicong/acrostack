/* oxlint-disable */

import type { AcroStackFileManagementFileEntryDto } from "../acroStack/fileManagement/FileEntryDto.ts";

/**
 * @description
 * Format: `uuid`
 * @type string | undefined
 */
export type FileManagementUploadFileQueryFolderId = string | undefined;

/**
 * @type object
 */
export type FileManagementUploadFileStatus200Plain = AcroStackFileManagementFileEntryDto;

/**
 * @type object
 */
export type FileManagementUploadFileStatus200Json = AcroStackFileManagementFileEntryDto;

/**
 * @type object
 */
export type FileManagementUploadFileStatus200Json2 = AcroStackFileManagementFileEntryDto;

export type FileManagementUploadFileStatus200 =
  | FileManagementUploadFileStatus200Plain
  | FileManagementUploadFileStatus200Json
  | FileManagementUploadFileStatus200Json2;

/**
 * @type object | undefined
 */
export type FileManagementUploadFileData =
  | {
      /**
       * @description
       * Format: `binary`
       * @type string | undefined
       */
      file?: Blob;
    }
  | undefined;

/**
 * @type object
 */
export type FileManagementUploadFileRequestConfig = {
  data?: FileManagementUploadFileData;
  pathParams?: never;
  /**
   * @type object | undefined
   */
  queryParams?: {
    folderId?: FileManagementUploadFileQueryFolderId;
  };
  headerParams?: never;
  /**
   * @type string
   */
  url: "/api/app/file-management/files/upload";
};

/**
 * @type object
 */
export type FileManagementUploadFileResponses = {
  "200": FileManagementUploadFileStatus200;
};

/**
 * @description Union of all possible responses
 */
export type FileManagementUploadFileResponse = FileManagementUploadFileStatus200;
