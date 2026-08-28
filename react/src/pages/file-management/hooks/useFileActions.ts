/**
 * 文件管理页动作聚合 hook：新建/删除文件夹、上传/下载/删除文件、
 * 移动文件或文件夹，内聚查询失效刷新与统一错误提示
 * （extractAbpErrorMessage）。
 *
 * 各动作返回是否成功（内部已捕获异常并 toast），供调用方决定
 * 关闭对话框或清空输入。
 */
import { useCallback } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { useToastController } from "@fluentui/react-components";
import { fileManagementGetFoldersQueryKey } from "@/api/hooks/fileManagement/useFileManagementGetFolders";
import { fileManagementGetFilesQueryKey } from "@/api/hooks/fileManagement/useFileManagementGetFiles";
import { fileManagementGetStorageInfoQueryKey } from "@/api/hooks/fileManagement/useFileManagementGetStorageInfo";
import { useFileManagementCreateFolder } from "@/api/hooks/fileManagement/useFileManagementCreateFolder";
import { useFileManagementDeleteFolder } from "@/api/hooks/fileManagement/useFileManagementDeleteFolder";
import { useFileManagementUploadFile } from "@/api/hooks/fileManagement/useFileManagementUploadFile";
import { useFileManagementDeleteFile } from "@/api/hooks/fileManagement/useFileManagementDeleteFile";
import { useFileManagementMoveFile } from "@/api/hooks/fileManagement/useFileManagementMoveFile";
import { useFileManagementMoveFolder } from "@/api/hooks/fileManagement/useFileManagementMoveFolder";
import { fileManagementDownloadFile } from "@/api/clients/fileManagement/fileManagementDownloadFile";
import { extractAbpErrorMessage } from "@/lib/http/error";
import type { AcroStackFileManagementFileEntryDto as FileEntryDto } from "@/api/models/acroStack/fileManagement/FileEntryDto";
import type { MoveTarget } from "../types/fileManagement";

export interface UseFileActionsOptions {
  /** 新建文件夹/上传文件归属的当前文件夹 id（null 表示根目录）。 */
  currentFolderId: string | null;
}

export function useFileActions({ currentFolderId }: UseFileActionsOptions) {
  const { dispatchToast } = useToastController();
  const queryClient = useQueryClient();

  const createFolderMutation = useFileManagementCreateFolder();
  const deleteFolderMutation = useFileManagementDeleteFolder();
  const deleteFileMutation = useFileManagementDeleteFile();
  const uploadFileMutation = useFileManagementUploadFile();
  const moveFileMutation = useFileManagementMoveFile();
  const moveFolderMutation = useFileManagementMoveFolder();

  const invalidateFolders = useCallback(() => {
    void queryClient.invalidateQueries({ queryKey: fileManagementGetFoldersQueryKey() });
  }, [queryClient]);

  const invalidateFiles = useCallback(() => {
    void queryClient.invalidateQueries({ queryKey: fileManagementGetFilesQueryKey() });
  }, [queryClient]);

  const invalidateStorage = useCallback(() => {
    void queryClient.invalidateQueries({
      queryKey: fileManagementGetStorageInfoQueryKey(),
    });
  }, [queryClient]);

  const fail = useCallback(
    (err: unknown) => {
      dispatchToast(extractAbpErrorMessage(err), { intent: "error" });
    },
    [dispatchToast],
  );

  /** 新建文件夹；成功后失效文件夹列表。 */
  const createFolder = useCallback(
    async (rawName: string): Promise<boolean> => {
      const name = rawName.trim();
      if (!name) return false;
      try {
        await createFolderMutation.mutateAsync({
          body: { name, parentId: currentFolderId },
        });
      } catch (err) {
        fail(err);
        return false;
      }
      invalidateFolders();
      dispatchToast("保存成功", { intent: "success" });
      return true;
    },
    [createFolderMutation, currentFolderId, invalidateFolders, dispatchToast, fail],
  );

  /** 上传文件到当前文件夹；成功后失效文件列表与存储信息。 */
  const upload = useCallback(
    async (file: File): Promise<boolean> => {
      try {
        await uploadFileMutation.mutateAsync({
          body: { file },
          query: currentFolderId ? { folderId: currentFolderId } : undefined,
        });
      } catch (err) {
        fail(err);
        return false;
      }
      invalidateFiles();
      invalidateStorage();
      dispatchToast("保存成功", { intent: "success" });
      return true;
    },
    [uploadFileMutation, currentFolderId, invalidateFiles, invalidateStorage, dispatchToast, fail],
  );

  /** 删除文件夹；成功后失效文件夹、文件列表与存储信息。 */
  const deleteFolder = useCallback(
    async (id: string | null): Promise<boolean> => {
      if (!id) return false;
      try {
        await deleteFolderMutation.mutateAsync({ path: { id } });
      } catch (err) {
        fail(err);
        return false;
      }
      invalidateFolders();
      invalidateFiles();
      invalidateStorage();
      dispatchToast("删除成功", { intent: "success" });
      return true;
    },
    [
      deleteFolderMutation,
      invalidateFolders,
      invalidateFiles,
      invalidateStorage,
      dispatchToast,
      fail,
    ],
  );

  /** 删除文件；成功后失效文件列表与存储信息。 */
  const deleteFile = useCallback(
    async (id: string | null): Promise<boolean> => {
      if (!id) return false;
      try {
        await deleteFileMutation.mutateAsync({ path: { id } });
      } catch (err) {
        fail(err);
        return false;
      }
      invalidateFiles();
      invalidateStorage();
      dispatchToast("删除成功", { intent: "success" });
      return true;
    },
    [deleteFileMutation, invalidateFiles, invalidateStorage, dispatchToast, fail],
  );

  /** 移动文件或文件夹到目标文件夹；成功后失效文件夹与文件列表。 */
  const move = useCallback(
    async (target: MoveTarget, targetFolderId: string | null): Promise<boolean> => {
      try {
        if (target.kind === "file") {
          await moveFileMutation.mutateAsync({
            path: { id: target.id },
            body: { targetFolderId },
          });
        } else {
          await moveFolderMutation.mutateAsync({
            path: { id: target.id },
            body: { targetFolderId },
          });
        }
      } catch (err) {
        fail(err);
        return false;
      }
      invalidateFolders();
      invalidateFiles();
      dispatchToast("保存成功", { intent: "success" });
      return true;
    },
    [moveFileMutation, moveFolderMutation, invalidateFolders, invalidateFiles, dispatchToast, fail],
  );

  /** 下载文件：二进制流走生成的 SDK client，成功后触发浏览器保存。 */
  const download = useCallback(
    async (file: FileEntryDto): Promise<void> => {
      if (!file.id) return;
      try {
        const { data: blob } = await fileManagementDownloadFile({
          path: { id: file.id },
          responseType: "blob",
        });
        const url = window.URL.createObjectURL(blob as Blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = file.name ?? "download";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
      } catch (err) {
        fail(err);
      }
    },
    [fail],
  );

  return {
    createFolder,
    createFolderPending: createFolderMutation.isPending,
    upload,
    uploadPending: uploadFileMutation.isPending,
    deleteFolder,
    deleteFolderPending: deleteFolderMutation.isPending,
    deleteFile,
    deleteFilePending: deleteFileMutation.isPending,
    move,
    movePending: moveFileMutation.isPending || moveFolderMutation.isPending,
    download,
  };
}
