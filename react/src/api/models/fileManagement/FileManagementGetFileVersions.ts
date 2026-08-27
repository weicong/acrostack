/* oxlint-disable */

import type { ListResultDtoOfAcroStackFileManagementFileVersionDto } from "../listResultDtoOfAcroStack/fileManagement/FileVersionDto";

export type FileManagementGetFileVersionsPath = {
  /**
   * @description
   * Format: `uuid`
   * @type string
   */
  id: string;
};

export type FileManagementGetFileVersionsStatus200Plain =
  ListResultDtoOfAcroStackFileManagementFileVersionDto;

export type FileManagementGetFileVersionsStatus200Json =
  ListResultDtoOfAcroStackFileManagementFileVersionDto;

export type FileManagementGetFileVersionsStatus200Json2 =
  ListResultDtoOfAcroStackFileManagementFileVersionDto;

export type FileManagementGetFileVersionsStatus200 =
  | FileManagementGetFileVersionsStatus200Plain
  | FileManagementGetFileVersionsStatus200Json
  | FileManagementGetFileVersionsStatus200Json2;

export type FileManagementGetFileVersionsOptions = {
  body?: never;
  path: FileManagementGetFileVersionsPath;
  query?: never;
  headers?: never;
};

export type FileManagementGetFileVersionsResponses = {
  "200":
    | {
        contentType: "text/plain";
        data: FileManagementGetFileVersionsStatus200Plain;
      }
    | {
        contentType: "application/json";
        data: FileManagementGetFileVersionsStatus200Json;
      }
    | {
        contentType: "text/json";
        data: FileManagementGetFileVersionsStatus200Json2;
      };
};

/**
 * @description Union of all possible responses
 */
export type FileManagementGetFileVersionsResponse = FileManagementGetFileVersionsStatus200;
