/* oxlint-disable */

import type { VoloAbpApplicationDtosListResultDto1AcroStackServicesDtosFileManagementFileVersionDtoAcroStackVersion1000CultureneutralPublicKeyTokennull } from "../volo/abp/application/dtos/listResultDto1AcroStack/services/dtos/fileManagement/FileVersionDtoAcroStackVersion1000CultureneutralPublicKeyTokennull.ts";

/**
 * @description
 * Format: `uuid`
 * @type string
 */
export type FileManagementGetFileVersionsPathId = string;

/**
 * @type object
 */
export type FileManagementGetFileVersionsStatus200Plain =
  VoloAbpApplicationDtosListResultDto1AcroStackServicesDtosFileManagementFileVersionDtoAcroStackVersion1000CultureneutralPublicKeyTokennull;

/**
 * @type object
 */
export type FileManagementGetFileVersionsStatus200Json =
  VoloAbpApplicationDtosListResultDto1AcroStackServicesDtosFileManagementFileVersionDtoAcroStackVersion1000CultureneutralPublicKeyTokennull;

/**
 * @type object
 */
export type FileManagementGetFileVersionsStatus200Json2 =
  VoloAbpApplicationDtosListResultDto1AcroStackServicesDtosFileManagementFileVersionDtoAcroStackVersion1000CultureneutralPublicKeyTokennull;

export type FileManagementGetFileVersionsStatus200 =
  | FileManagementGetFileVersionsStatus200Plain
  | FileManagementGetFileVersionsStatus200Json
  | FileManagementGetFileVersionsStatus200Json2;

/**
 * @type object
 */
export type FileManagementGetFileVersionsRequestConfig = {
  data?: never;
  /**
   * @type object
   */
  pathParams: {
    id: FileManagementGetFileVersionsPathId;
  };
  queryParams?: never;
  headerParams?: never;
  /**
   * @type string
   */
  url: `/api/app/file-management/files/${string}/versions`;
};

/**
 * @type object
 */
export type FileManagementGetFileVersionsResponses = {
  "200": FileManagementGetFileVersionsStatus200;
};

/**
 * @description Union of all possible responses
 */
export type FileManagementGetFileVersionsResponse = FileManagementGetFileVersionsStatus200;
