/* oxlint-disable */

import type { ListResultDtoOfAcroStackFileManagementFileFolderDto } from "../listResultDtoOfAcroStack/fileManagement/FileFolderDto";

export type FileManagementGetFoldersQuery = {
  /**
   * @description
   * Format: `uuid`
   * @type string | undefined
   */
  parentId?: string;
};

export type FileManagementGetFoldersStatus200Plain =
  ListResultDtoOfAcroStackFileManagementFileFolderDto;

export type FileManagementGetFoldersStatus200Json =
  ListResultDtoOfAcroStackFileManagementFileFolderDto;

export type FileManagementGetFoldersStatus200Json2 =
  ListResultDtoOfAcroStackFileManagementFileFolderDto;

export type FileManagementGetFoldersStatus200 =
  | FileManagementGetFoldersStatus200Plain
  | FileManagementGetFoldersStatus200Json
  | FileManagementGetFoldersStatus200Json2;

export type FileManagementGetFoldersOptions = {
  body?: never;
  path?: never;
  query?: FileManagementGetFoldersQuery;
  headers?: never;
};

export type FileManagementGetFoldersResponses = {
  "200":
    | {
        contentType: "text/plain";
        data: FileManagementGetFoldersStatus200Plain;
      }
    | {
        contentType: "application/json";
        data: FileManagementGetFoldersStatus200Json;
      }
    | {
        contentType: "text/json";
        data: FileManagementGetFoldersStatus200Json2;
      };
};

/**
 * @description Union of all possible responses
 */
export type FileManagementGetFoldersResponse = FileManagementGetFoldersStatus200;
