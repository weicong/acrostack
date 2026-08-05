/* oxlint-disable */

import { fileManagementCreateFolder } from "./fileManagementCreateFolder.ts";
import { fileManagementCreateShareLink } from "./fileManagementCreateShareLink.ts";
import { fileManagementDeleteFile } from "./fileManagementDeleteFile.ts";
import { fileManagementDeleteFolder } from "./fileManagementDeleteFolder.ts";
import { fileManagementDownloadFile } from "./fileManagementDownloadFile.ts";
import { fileManagementDownloadShared } from "./fileManagementDownloadShared.ts";
import { fileManagementGetFileVersions } from "./fileManagementGetFileVersions.ts";
import { fileManagementGetFiles } from "./fileManagementGetFiles.ts";
import { fileManagementGetFolders } from "./fileManagementGetFolders.ts";
import { fileManagementGetShareLinks } from "./fileManagementGetShareLinks.ts";
import { fileManagementGetStorageInfo } from "./fileManagementGetStorageInfo.ts";
import { fileManagementGetThumbnail } from "./fileManagementGetThumbnail.ts";
import { fileManagementMoveFile } from "./fileManagementMoveFile.ts";
import { fileManagementMoveFolder } from "./fileManagementMoveFolder.ts";
import { fileManagementRenameFolder } from "./fileManagementRenameFolder.ts";
import { fileManagementRestoreVersion } from "./fileManagementRestoreVersion.ts";
import { fileManagementRevokeShareLink } from "./fileManagementRevokeShareLink.ts";
import { fileManagementUploadFile } from "./fileManagementUploadFile.ts";

export function fileManagement() {
  return {
    fileManagementGetFolders,
    fileManagementCreateFolder,
    fileManagementRenameFolder,
    fileManagementMoveFolder,
    fileManagementDeleteFolder,
    fileManagementGetFiles,
    fileManagementUploadFile,
    fileManagementDownloadFile,
    fileManagementMoveFile,
    fileManagementDeleteFile,
    fileManagementCreateShareLink,
    fileManagementGetShareLinks,
    fileManagementRevokeShareLink,
    fileManagementDownloadShared,
    fileManagementGetFileVersions,
    fileManagementRestoreVersion,
    fileManagementGetThumbnail,
    fileManagementGetStorageInfo,
  };
}
