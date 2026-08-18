/* oxlint-disable */

import type { VoloAbpApplicationDtosListResultDto1AcroStackFileManagementFileShareDtoAcroStackFileManagementVersion1000CultureneutralPublicKeyTokennull } from "../volo/abp/application/dtos/listResultDto1AcroStack/fileManagement/fileShareDtoAcroStack/FileManagementVersion1000CultureneutralPublicKeyTokennull.ts";

/**
 * @description
 * Format: `uuid`
 * @type string
 */
export type FileManagementGetShareLinksPathId = string;

/**
 * @type object
 */
export type FileManagementGetShareLinksStatus200Plain =
  VoloAbpApplicationDtosListResultDto1AcroStackFileManagementFileShareDtoAcroStackFileManagementVersion1000CultureneutralPublicKeyTokennull;

/**
 * @type object
 */
export type FileManagementGetShareLinksStatus200Json =
  VoloAbpApplicationDtosListResultDto1AcroStackFileManagementFileShareDtoAcroStackFileManagementVersion1000CultureneutralPublicKeyTokennull;

/**
 * @type object
 */
export type FileManagementGetShareLinksStatus200Json2 =
  VoloAbpApplicationDtosListResultDto1AcroStackFileManagementFileShareDtoAcroStackFileManagementVersion1000CultureneutralPublicKeyTokennull;

export type FileManagementGetShareLinksStatus200 =
  | FileManagementGetShareLinksStatus200Plain
  | FileManagementGetShareLinksStatus200Json
  | FileManagementGetShareLinksStatus200Json2;

/**
 * @type object
 */
export type FileManagementGetShareLinksRequestConfig = {
  data?: never;
  /**
   * @type object
   */
  pathParams: {
    id: FileManagementGetShareLinksPathId;
  };
  queryParams?: never;
  headerParams?: never;
  /**
   * @type string
   */
  url: `/api/app/file-management/files/${string}/share-links`;
};

/**
 * @type object
 */
export type FileManagementGetShareLinksResponses = {
  "200": FileManagementGetShareLinksStatus200;
};

/**
 * @description Union of all possible responses
 */
export type FileManagementGetShareLinksResponse = FileManagementGetShareLinksStatus200;
