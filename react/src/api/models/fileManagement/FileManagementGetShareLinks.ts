/* oxlint-disable */

import type { VoloAbpApplicationDtosListResultDto1AcroStackFileManagementFileShareDtoAcroStackFileManagementVersion1000CultureneutralPublicKeyTokennull } from "../volo/abp/application/dtos/listResultDto1AcroStack/fileManagement/fileShareDtoAcroStack/FileManagementVersion1000CultureneutralPublicKeyTokennull";

export type FileManagementGetShareLinksPath = {
  /**
   * @description
   * Format: `uuid`
   * @type string
   */
  id: string;
};

export type FileManagementGetShareLinksStatus200Plain =
  VoloAbpApplicationDtosListResultDto1AcroStackFileManagementFileShareDtoAcroStackFileManagementVersion1000CultureneutralPublicKeyTokennull;

export type FileManagementGetShareLinksStatus200Json =
  VoloAbpApplicationDtosListResultDto1AcroStackFileManagementFileShareDtoAcroStackFileManagementVersion1000CultureneutralPublicKeyTokennull;

export type FileManagementGetShareLinksStatus200Json2 =
  VoloAbpApplicationDtosListResultDto1AcroStackFileManagementFileShareDtoAcroStackFileManagementVersion1000CultureneutralPublicKeyTokennull;

export type FileManagementGetShareLinksStatus200 =
  | FileManagementGetShareLinksStatus200Plain
  | FileManagementGetShareLinksStatus200Json
  | FileManagementGetShareLinksStatus200Json2;

export type FileManagementGetShareLinksOptions = {
  body?: never;
  path: FileManagementGetShareLinksPath;
  query?: never;
  headers?: never;
};

export type FileManagementGetShareLinksResponses = {
  "200":
    | {
        contentType: "text/plain";
        data: FileManagementGetShareLinksStatus200Plain;
      }
    | {
        contentType: "application/json";
        data: FileManagementGetShareLinksStatus200Json;
      }
    | {
        contentType: "text/json";
        data: FileManagementGetShareLinksStatus200Json2;
      };
};

/**
 * @description Union of all possible responses
 */
export type FileManagementGetShareLinksResponse = FileManagementGetShareLinksStatus200;
