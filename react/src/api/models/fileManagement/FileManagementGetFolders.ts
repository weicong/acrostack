/* oxlint-disable */

import type { VoloAbpApplicationDtosListResultDto1AcroStackFileManagementFileFolderDtoAcroStackFileManagementVersion1000CultureneutralPublicKeyTokennull } from "../volo/abp/application/dtos/listResultDto1AcroStack/fileManagement/fileFolderDtoAcroStack/FileManagementVersion1000CultureneutralPublicKeyTokennull";

export type FileManagementGetFoldersQuery = {
  /**
   * @description
   * Format: `uuid`
   * @type string | undefined
   */
  parentId?: string;
};

export type FileManagementGetFoldersStatus200Plain =
  VoloAbpApplicationDtosListResultDto1AcroStackFileManagementFileFolderDtoAcroStackFileManagementVersion1000CultureneutralPublicKeyTokennull;

export type FileManagementGetFoldersStatus200Json =
  VoloAbpApplicationDtosListResultDto1AcroStackFileManagementFileFolderDtoAcroStackFileManagementVersion1000CultureneutralPublicKeyTokennull;

export type FileManagementGetFoldersStatus200Json2 =
  VoloAbpApplicationDtosListResultDto1AcroStackFileManagementFileFolderDtoAcroStackFileManagementVersion1000CultureneutralPublicKeyTokennull;

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
