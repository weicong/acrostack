/* oxlint-disable */

import type { ListResultDtoOfAcroStackFileManagementFileEntryDto } from "../listResultDtoOfAcroStack/fileManagement/FileEntryDto";

export type FileManagementGetFilesQuery = {
  /**
   * @description
   * Format: `uuid`
   * @type string | undefined
   */
  folderId?: string;
};

export type FileManagementGetFilesStatus200Plain =
  ListResultDtoOfAcroStackFileManagementFileEntryDto;

export type FileManagementGetFilesStatus200Json =
  ListResultDtoOfAcroStackFileManagementFileEntryDto;

export type FileManagementGetFilesStatus200Json2 =
  ListResultDtoOfAcroStackFileManagementFileEntryDto;

export type FileManagementGetFilesStatus200 =
  | FileManagementGetFilesStatus200Plain
  | FileManagementGetFilesStatus200Json
  | FileManagementGetFilesStatus200Json2;

export type FileManagementGetFilesOptions = {
  body?: never;
  path?: never;
  query?: FileManagementGetFilesQuery;
  headers?: never;
};

export type FileManagementGetFilesResponses = {
  "200":
    | {
        contentType: "text/plain";
        data: FileManagementGetFilesStatus200Plain;
      }
    | {
        contentType: "application/json";
        data: FileManagementGetFilesStatus200Json;
      }
    | {
        contentType: "text/json";
        data: FileManagementGetFilesStatus200Json2;
      };
};

/**
 * @description Union of all possible responses
 */
export type FileManagementGetFilesResponse = FileManagementGetFilesStatus200;
