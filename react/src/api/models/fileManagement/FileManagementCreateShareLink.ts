/* oxlint-disable */

import type { AcroStackServicesDtosFileManagementCreateShareLinkDto } from "../acroStack/services/dtos/fileManagement/CreateShareLinkDto.ts";
import type { AcroStackServicesDtosFileManagementFileShareDto } from "../acroStack/services/dtos/fileManagement/FileShareDto.ts";

/**
 * @description
 * Format: `uuid`
 * @type string
 */
export type FileManagementCreateShareLinkPathId = string;

/**
 * @type object
 */
export type FileManagementCreateShareLinkStatus200Plain =
  AcroStackServicesDtosFileManagementFileShareDto;

/**
 * @type object
 */
export type FileManagementCreateShareLinkStatus200Json =
  AcroStackServicesDtosFileManagementFileShareDto;

/**
 * @type object
 */
export type FileManagementCreateShareLinkStatus200Json2 =
  AcroStackServicesDtosFileManagementFileShareDto;

export type FileManagementCreateShareLinkStatus200 =
  | FileManagementCreateShareLinkStatus200Plain
  | FileManagementCreateShareLinkStatus200Json
  | FileManagementCreateShareLinkStatus200Json2;

/**
 * @type object | undefined
 */
export type FileManagementCreateShareLinkJsonData =
  | AcroStackServicesDtosFileManagementCreateShareLinkDto
  | undefined;

/**
 * @type object | undefined
 */
export type FileManagementCreateShareLinkJson2Data =
  | AcroStackServicesDtosFileManagementCreateShareLinkDto
  | undefined;

/**
 * @type object | undefined
 */
export type FileManagementCreateShareLinkJson3Data =
  | AcroStackServicesDtosFileManagementCreateShareLinkDto
  | undefined;

export type FileManagementCreateShareLinkData =
  | FileManagementCreateShareLinkJsonData
  | FileManagementCreateShareLinkJson2Data
  | FileManagementCreateShareLinkJson3Data;

/**
 * @type object
 */
export type FileManagementCreateShareLinkRequestConfig = {
  data?: FileManagementCreateShareLinkData;
  /**
   * @type object
   */
  pathParams: {
    id: FileManagementCreateShareLinkPathId;
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
export type FileManagementCreateShareLinkResponses = {
  "200": FileManagementCreateShareLinkStatus200;
};

/**
 * @description Union of all possible responses
 */
export type FileManagementCreateShareLinkResponse = FileManagementCreateShareLinkStatus200;
