/* oxlint-disable */

import { fileManagementCreateFolder } from "./fileManagementCreateFolder.ts";
import { fileManagementDeleteFile } from "./fileManagementDeleteFile.ts";
import { fileManagementDeleteFolder } from "./fileManagementDeleteFolder.ts";
import { fileManagementDownloadFile } from "./fileManagementDownloadFile.ts";
import { fileManagementGetFiles } from "./fileManagementGetFiles.ts";
import { fileManagementGetFolders } from "./fileManagementGetFolders.ts";
import { fileManagementRenameFolder } from "./fileManagementRenameFolder.ts";
import { fileManagementUploadFile } from "./fileManagementUploadFile.ts";

export function fileManagement() {
  return {
    fileManagementGetFolders,
    fileManagementCreateFolder,
    fileManagementRenameFolder,
    fileManagementDeleteFolder,
    fileManagementGetFiles,
    fileManagementUploadFile,
    fileManagementDownloadFile,
    fileManagementDeleteFile,
  };
}
