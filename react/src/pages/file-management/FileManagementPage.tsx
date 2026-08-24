/**
 * 文件管理页（FileManagementPage）。
 *
 * 本文件只负责编排：权限判定、目录导航、数据查询与各对话框开关状态；
 * 样式见 styles/fileManagement，导航栈见 hooks/useFolderNavigation，
 * 动作聚合见 hooks/useFileActions，展示块见 components/。
 */
import { useState } from "react";
import { PageLayout } from "@/components/layout/PageLayout";
import { ConfirmDialog } from "@/components/common/ConfirmDialog";
import { usePermissions } from "@/lib/auth/permissions";
import { useFileManagementGetFolders } from "@/api/hooks/fileManagement/useFileManagementGetFolders";
import { useFileManagementGetFiles } from "@/api/hooks/fileManagement/useFileManagementGetFiles";
import { useFileManagementGetStorageInfo } from "@/api/hooks/fileManagement/useFileManagementGetStorageInfo";
import type { AcroStackFileManagementFileEntryDto as FileEntryDto } from "@/api/models/acroStack/fileManagement/FileEntryDto";
import type { AcroStackFileManagementStorageInfoDto as StorageInfoDto } from "@/api/models/acroStack/fileManagement/StorageInfoDto";
import type { MoveTarget } from "./types/fileManagement";
import { useFileManagementStyles } from "./styles/fileManagement";
import { useFolderNavigation } from "./hooks/useFolderNavigation";
import { useFileActions } from "./hooks/useFileActions";
import { StorageInfoBar } from "./components/StorageInfoBar";
import { FolderBreadcrumbs } from "./components/FolderBreadcrumbs";
import { UploadButton } from "./components/UploadButton";
import { NewFolderForm } from "./components/NewFolderForm";
import { FileList } from "./components/FileList";
import { MoveDialog } from "./components/MoveDialog";
import { ShareLinksDialog } from "./components/ShareLinksDialog";
import { VersionsDialog } from "./components/VersionsDialog";

export function FileManagementPage() {
  const styles = useFileManagementStyles();
  const { isGranted } = usePermissions();

  const canUpload = isGranted("AcroStack.FileManagement.Upload");
  const canDownload = isGranted("AcroStack.FileManagement.Download");
  const canDelete = isGranted("AcroStack.FileManagement.Delete");
  const canMove = isGranted("AcroStack.FileManagement.Move");
  const canShare = isGranted("AcroStack.FileManagement.Share");

  // 对话框开关状态
  const [deleteFolderId, setDeleteFolderId] = useState<string | null>(null);
  const [deleteFileId, setDeleteFileId] = useState<string | null>(null);
  const [moveTarget, setMoveTarget] = useState<MoveTarget | null>(null);
  const [shareFileId, setShareFileId] = useState<string | null>(null);
  const [shareFileName, setShareFileName] = useState<string>("");
  const [versionsFileId, setVersionsFileId] = useState<string | null>(null);
  const [versionsFileName, setVersionsFileName] = useState<string>("");

  // 目录导航栈（当前文件夹 + 面包屑）
  const navigation = useFolderNavigation();

  const foldersQuery = useFileManagementGetFolders(
    navigation.currentFolderId ? { query: { parentId: navigation.currentFolderId } } : undefined,
  );
  const filesQuery = useFileManagementGetFiles(
    navigation.currentFolderId ? { query: { folderId: navigation.currentFolderId } } : undefined,
  );
  const storageInfoQuery = useFileManagementGetStorageInfo();

  // 动作聚合：新建/删除/上传/下载/移动（内含失效刷新与错误提示）
  const actions = useFileActions({ currentFolderId: navigation.currentFolderId });

  const folders = foldersQuery.data?.items ?? [];
  const files = filesQuery.data?.items ?? [];

  function openShareDialog(file: FileEntryDto) {
    if (!file.id) return;
    setShareFileId(file.id);
    setShareFileName(file.name ?? "");
  }

  function openVersionsDialog(file: FileEntryDto) {
    if (!file.id) return;
    setVersionsFileId(file.id);
    setVersionsFileName(file.name ?? "");
  }

  return (
    <PageLayout title={"文件管理"}>
      {storageInfoQuery.data && <StorageInfoBar data={storageInfoQuery.data as StorageInfoDto} />}

      <div className={styles.toolbar}>
        <FolderBreadcrumbs crumbs={navigation.breadcrumbs} onNavigate={navigation.navigateTo} />
        <div className={styles.actions}>
          {canUpload && <UploadButton pending={actions.uploadPending} onUpload={actions.upload} />}
        </div>
      </div>

      <NewFolderForm pending={actions.createFolderPending} onCreate={actions.createFolder} />

      <FileList
        folders={folders}
        files={files}
        isLoading={foldersQuery.isLoading || filesQuery.isLoading}
        canDownload={canDownload}
        canDelete={canDelete}
        canMove={canMove}
        canShare={canShare}
        onOpenFolder={navigation.openFolder}
        onDownloadFile={(file) => void actions.download(file)}
        onShareFile={openShareDialog}
        onVersionsFile={openVersionsDialog}
        onMove={(target) => setMoveTarget(target)}
        onDeleteFolder={(folderId) => setDeleteFolderId(folderId)}
        onDeleteFile={(fileId) => setDeleteFileId(fileId)}
      />

      <ConfirmDialog
        open={deleteFolderId !== null}
        onOpenChange={(open) => !open && setDeleteFolderId(null)}
        title={"你确定吗?"}
        description={"确定要删除此文件夹及其所有内容吗？"}
        confirmLabel={"删除"}
        variant="destructive"
        onConfirm={() =>
          void actions.deleteFolder(deleteFolderId).then((ok) => ok && setDeleteFolderId(null))
        }
        isPending={actions.deleteFolderPending}
      />

      <ConfirmDialog
        open={deleteFileId !== null}
        onOpenChange={(open) => !open && setDeleteFileId(null)}
        title={"你确定吗?"}
        description={"确定要删除此文件吗？"}
        confirmLabel={"删除"}
        variant="destructive"
        onConfirm={() =>
          void actions.deleteFile(deleteFileId).then((ok) => ok && setDeleteFileId(null))
        }
        isPending={actions.deleteFilePending}
      />

      {moveTarget && (
        <MoveDialog
          target={moveTarget}
          onOpenChange={(open) => !open && setMoveTarget(null)}
          onConfirm={(targetFolderId) =>
            void actions.move(moveTarget, targetFolderId).then((ok) => ok && setMoveTarget(null))
          }
          isPending={actions.movePending}
        />
      )}

      {shareFileId && (
        <ShareLinksDialog
          fileId={shareFileId}
          fileName={shareFileName}
          onOpenChange={(open) => !open && setShareFileId(null)}
        />
      )}

      {versionsFileId && (
        <VersionsDialog
          fileId={versionsFileId}
          fileName={versionsFileName}
          onOpenChange={(open) => !open && setVersionsFileId(null)}
        />
      )}
    </PageLayout>
  );
}
