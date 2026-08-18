/* oxlint-disable */

import type { AcroStackFileManagementCreateShareLinkDto } from "../acroStack/fileManagement/CreateShareLinkDto.ts";
import type { AcroStackFileManagementFileShareDto } from "../acroStack/fileManagement/FileShareDto.ts";

/**
 * @description
 * Format: `uuid`
 * @type string
 */
export type FileManagementCreateShareLinkPathId = string;

/**
 * @type object
 */
export type FileManagementCreateShareLinkStatus200Plain = AcroStackFileManagementFileShareDto;

/**
 * @type object
 */
export type FileManagementCreateShareLinkStatus200Json = AcroStackFileManagementFileShareDto;

/**
 * @type object
 */
export type FileManagementCreateShareLinkStatus200Json2 = AcroStackFileManagementFileShareDto;

export type FileManagementCreateShareLinkStatus200 =
  | FileManagementCreateShareLinkStatus200Plain
  | FileManagementCreateShareLinkStatus200Json
  | FileManagementCreateShareLinkStatus200Json2;

/**
 * @type object | undefined
 */
export type FileManagementCreateShareLinkJsonData =
  | AcroStackFileManagementCreateShareLinkDto
  | undefined;

/**
 * @type object | undefined
 */
export type FileManagementCreateShareLinkJson2Data =
  | AcroStackFileManagementCreateShareLinkDto
  | undefined;

/**
 * @type object | undefined
 */
export type FileManagementCreateShareLinkJson3Data =
  | AcroStackFileManagementCreateShareLinkDto
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
