/* oxlint-disable */

import type { ListResultDtoOfAcroStackFileManagementFileShareDto } from "../listResultDtoOfAcroStack/fileManagement/FileShareDto";

export type FileManagementGetShareLinksPath = {
  /**
   * @description
   * Format: `uuid`
   * @type string
   */
  id: string;
};

export type FileManagementGetShareLinksStatus200Plain =
  ListResultDtoOfAcroStackFileManagementFileShareDto;

export type FileManagementGetShareLinksStatus200Json =
  ListResultDtoOfAcroStackFileManagementFileShareDto;

export type FileManagementGetShareLinksStatus200Json2 =
  ListResultDtoOfAcroStackFileManagementFileShareDto;

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
