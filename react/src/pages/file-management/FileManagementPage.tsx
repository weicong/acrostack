import { useCallback, useMemo, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { useQueryClient } from "@tanstack/react-query";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbButton,
  BreadcrumbDivider,
  Button,
  Input,
  Label,
  Link as FluentLink,
  makeStyles,
  tokens,
  useToastController,
} from "@fluentui/react-components";
import {
  Add20Regular,
  ArrowUpload20Regular,
  Delete20Regular,
  Folder20Regular,
  Document20Regular,
  ArrowDownload20Regular,
} from "@fluentui/react-icons";
import { PageLayout } from "@/components/layout/PageLayout";
import { ConfirmDialog } from "@/components/common/ConfirmDialog";
import { usePermissions } from "@/lib/auth/permissions";
import {
  useFileManagementGetFolders,
  fileManagementGetFoldersQueryKey,
} from "@/api/hooks/fileManagement/useFileManagementGetFolders";
import {
  useFileManagementGetFiles,
  fileManagementGetFilesQueryKey,
} from "@/api/hooks/fileManagement/useFileManagementGetFiles";
import { useFileManagementCreateFolder } from "@/api/hooks/fileManagement/useFileManagementCreateFolder";
import { useFileManagementDeleteFolder } from "@/api/hooks/fileManagement/useFileManagementDeleteFolder";
import { useFileManagementUploadFile } from "@/api/hooks/fileManagement/useFileManagementUploadFile";
import { useFileManagementDeleteFile } from "@/api/hooks/fileManagement/useFileManagementDeleteFile";
import { fileManagementDownloadFile } from "@/api/clients/fileManagement/fileManagementDownloadFile";
import type { AcroStackServicesDtosFileManagementFileFolderDto as FileFolderDto } from "@/api/models/acroStack/services/dtos/fileManagement/FileFolderDto";
import type { AcroStackServicesDtosFileManagementFileEntryDto as FileEntryDto } from "@/api/models/acroStack/services/dtos/fileManagement/FileEntryDto";

const useStyles = makeStyles({
  toolbar: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    gap: tokens.spacingHorizontalM,
    marginBottom: tokens.spacingHorizontalM,
  },
  breadcrumb: {
    flex: 1,
    minWidth: 0,
  },
  actions: {
    display: "flex",
    gap: tokens.spacingHorizontalS,
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
    gap: tokens.spacingHorizontalM,
  },
  item: {
    display: "flex",
    alignItems: "center",
    gap: tokens.spacingHorizontalS,
    padding: `${tokens.spacingVerticalS} ${tokens.spacingHorizontalM}`,
    borderRadius: tokens.borderRadiusMedium,
    border: `1px solid ${tokens.colorNeutralStroke1}`,
  },
  itemIcon: {
    fontSize: "20px",
    color: tokens.colorBrandForeground1,
    flexShrink: 0,
  },
  itemName: {
    flex: 1,
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },
  itemMeta: {
    fontSize: tokens.fontSizeBase200,
    color: tokens.colorNeutralForeground3,
  },
  fileInput: {
    display: "none",
  },
  newFolderRow: {
    display: "flex",
    gap: tokens.spacingHorizontalS,
    alignItems: "flex-end",
    marginBottom: tokens.spacingHorizontalM,
  },
  empty: {
    padding: tokens.spacingVerticalXL,
    textAlign: "center",
    color: tokens.colorNeutralForeground3,
  },
});

function formatBytes(bytes?: number): string {
  if (!bytes) return "-";
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  if (bytes < 1024 * 1024 * 1024) return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  return `${(bytes / (1024 * 1024 * 1024)).toFixed(1)} GB`;
}

interface BreadcrumbCrumb {
  id: string | null;
  name: string;
}

export function FileManagementPage() {
  const { t } = useTranslation();
  const styles = useStyles();
  const { isGranted } = usePermissions();
  const { dispatchToast } = useToastController();
  const queryClient = useQueryClient();

  const canUpload = isGranted("AcroStack.FileManagement.Upload");
  const canDownload = isGranted("AcroStack.FileManagement.Download");
  const canDelete = isGranted("AcroStack.FileManagement.Delete");

  const [currentFolderId, setCurrentFolderId] = useState<string | null>(null);
  const [breadcrumbs, setBreadcrumbs] = useState<BreadcrumbCrumb[]>([
    { id: null, name: t("FileManagement:Root") },
  ]);
  const [newFolderName, setNewFolderName] = useState("");
  const [deleteFolderId, setDeleteFolderId] = useState<string | null>(null);
  const [deleteFileId, setDeleteFileId] = useState<string | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const foldersQuery = useFileManagementGetFolders(
    currentFolderId ? { parentId: currentFolderId } : undefined,
  );
  const filesQuery = useFileManagementGetFiles(
    currentFolderId ? { folderId: currentFolderId } : undefined,
  );

  const createFolderMutation = useFileManagementCreateFolder();
  const deleteFolderMutation = useFileManagementDeleteFolder();
  const deleteFileMutation = useFileManagementDeleteFile();
  const uploadFileMutation = useFileManagementUploadFile();

  const handleOpenFolder = useCallback(
    (folder: FileFolderDto) => {
      const folderId = folder.id ?? null;
      setCurrentFolderId(folderId);
      setBreadcrumbs((prev) => [
        ...prev,
        { id: folderId, name: folder.name ?? t("FileManagement:Folders") },
      ]);
    },
    [t],
  );

  const handleNavigateTo = useCallback(
    (index: number) => {
      const target = breadcrumbs[index];
      if (!target) return;
      setCurrentFolderId(target.id);
      setBreadcrumbs((prev) => prev.slice(0, index + 1));
    },
    [breadcrumbs],
  );

  const handleCreateFolder = useCallback(() => {
    const name = newFolderName.trim();
    if (!name) return;
    createFolderMutation.mutate(
      { data: { name, parentId: currentFolderId } },
      {
        onSuccess: () => {
          void queryClient.invalidateQueries({ queryKey: fileManagementGetFoldersQueryKey() });
          setNewFolderName("");
          dispatchToast(t("AbpUi::SavedSuccessfully"), { intent: "success" });
        },
        onError: (err) => dispatchToast(String(err), { intent: "error" }),
      },
    );
  }, [newFolderName, currentFolderId, createFolderMutation, queryClient, dispatchToast, t]);

  const handleFileSelected = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (!file) return;
      uploadFileMutation.mutate(
        {
          data: { file },
          params: currentFolderId ? { folderId: currentFolderId } : undefined,
        },
        {
          onSuccess: () => {
            void queryClient.invalidateQueries({ queryKey: fileManagementGetFilesQueryKey() });
            dispatchToast(t("AbpUi::SavedSuccessfully"), { intent: "success" });
          },
          onError: (err) => dispatchToast(String(err), { intent: "error" }),
          onSettled: () => {
            if (fileInputRef.current) fileInputRef.current.value = "";
          },
        },
      );
    },
    [currentFolderId, uploadFileMutation, queryClient, dispatchToast, t],
  );

  const handleDeleteFolderConfirm = useCallback(() => {
    if (!deleteFolderId) return;
    deleteFolderMutation.mutate(
      { id: deleteFolderId },
      {
        onSuccess: () => {
          void queryClient.invalidateQueries({ queryKey: fileManagementGetFoldersQueryKey() });
          void queryClient.invalidateQueries({ queryKey: fileManagementGetFilesQueryKey() });
          setDeleteFolderId(null);
          dispatchToast(t("AbpUi::DeletedSuccessfully"), { intent: "success" });
        },
        onError: (err) => dispatchToast(String(err), { intent: "error" }),
      },
    );
  }, [deleteFolderId, deleteFolderMutation, queryClient, dispatchToast, t]);

  const handleDeleteFileConfirm = useCallback(() => {
    if (!deleteFileId) return;
    deleteFileMutation.mutate(
      { id: deleteFileId },
      {
        onSuccess: () => {
          void queryClient.invalidateQueries({ queryKey: fileManagementGetFilesQueryKey() });
          setDeleteFileId(null);
          dispatchToast(t("AbpUi::DeletedSuccessfully"), { intent: "success" });
        },
        onError: (err) => dispatchToast(String(err), { intent: "error" }),
      },
    );
  }, [deleteFileId, deleteFileMutation, queryClient, dispatchToast, t]);

  const handleDownloadFile = useCallback(
    async (file: FileEntryDto) => {
      if (!file.id) return;
      try {
        const blob = await fileManagementDownloadFile(file.id, { responseType: "blob" });
        const url = window.URL.createObjectURL(blob as Blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = file.name ?? "download";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
      } catch (err) {
        dispatchToast(String(err), { intent: "error" });
      }
    },
    [dispatchToast],
  );

  const folders = foldersQuery.data?.items ?? [];
  const files = filesQuery.data?.items ?? [];
  const isEmpty = folders.length === 0 && files.length === 0;

  const folderItems = useMemo(
    () =>
      folders.map((f) => (
        <div key={f.id} className={styles.item} title={f.name ?? ""}>
          <Folder20Regular className={styles.itemIcon} />
          <span className={styles.itemName}>{f.name}</span>
          {canDelete && (
            <Button
              size="small"
              appearance="subtle"
              icon={<Delete20Regular />}
              onClick={() => f.id && setDeleteFolderId(f.id)}
              aria-label={t("AbpUi::Delete")}
            />
          )}
          <Button
            size="small"
            appearance="subtle"
            onClick={() => handleOpenFolder(f)}
            aria-label={t("AbpUi::Edit")}
          >
            {t("AbpUi::Edit")}
          </Button>
        </div>
      )),
    [folders, styles.item, styles.itemIcon, styles.itemName, canDelete, t, handleOpenFolder],
  );

  const fileItems = useMemo(
    () =>
      files.map((f) => (
        <div key={f.id} className={styles.item} title={f.name ?? ""}>
          <Document20Regular className={styles.itemIcon} />
          <span className={styles.itemName}>{f.name}</span>
          <span className={styles.itemMeta}>
            {formatBytes(f.byteSize != null ? Number(f.byteSize) : undefined)}
          </span>
          {canDownload && f.id && (
            <FluentLink
              onClick={() => void handleDownloadFile(f)}
              aria-label={t("FileManagement:Download")}
              title={t("FileManagement:Download")}
            >
              <ArrowDownload20Regular />
            </FluentLink>
          )}
          {canDelete && (
            <Button
              size="small"
              appearance="subtle"
              icon={<Delete20Regular />}
              onClick={() => f.id && setDeleteFileId(f.id)}
              aria-label={t("AbpUi::Delete")}
            />
          )}
        </div>
      )),
    [
      files,
      styles.item,
      styles.itemIcon,
      styles.itemName,
      styles.itemMeta,
      canDownload,
      canDelete,
      t,
      handleDownloadFile,
    ],
  );

  return (
    <PageLayout title={t("Menu:FileManagement")}>
      <div className={styles.toolbar}>
        <Breadcrumb className={styles.breadcrumb} size="medium">
          {breadcrumbs.map((crumb, idx) => (
            <span key={`${crumb.id ?? "root"}-${idx}`}>
              <BreadcrumbItem>
                <BreadcrumbButton
                  icon={idx === 0 ? <Folder20Regular /> : undefined}
                  onClick={() => handleNavigateTo(idx)}
                >
                  {crumb.name}
                </BreadcrumbButton>
              </BreadcrumbItem>
              {idx < breadcrumbs.length - 1 && <BreadcrumbDivider />}
            </span>
          ))}
        </Breadcrumb>
        <div className={styles.actions}>
          {canUpload && (
            <>
              <Button
                appearance="primary"
                icon={<ArrowUpload20Regular />}
                onClick={() => fileInputRef.current?.click()}
                disabled={uploadFileMutation.isPending}
              >
                {t("FileManagement:Upload")}
              </Button>
              <input
                ref={fileInputRef}
                type="file"
                className={styles.fileInput}
                onChange={handleFileSelected}
              />
            </>
          )}
        </div>
      </div>

      <div className={styles.newFolderRow}>
        <div>
          <Label htmlFor="new-folder-name">{t("FileManagement:NewFolder")}</Label>
          <Input
            id="new-folder-name"
            value={newFolderName}
            onChange={(_, data) => setNewFolderName(data.value)}
            placeholder={t("FileManagement:FolderName")}
            appearance="outline"
          />
        </div>
        <Button
          appearance="secondary"
          icon={<Add20Regular />}
          onClick={handleCreateFolder}
          disabled={!newFolderName.trim() || createFolderMutation.isPending}
        >
          {t("AbpUi::Create")}
        </Button>
      </div>

      {isEmpty && !foldersQuery.isLoading && !filesQuery.isLoading ? (
        <div className={styles.empty}>{t("FileManagement:Root")}</div>
      ) : (
        <div className={styles.grid}>
          {folderItems}
          {fileItems}
        </div>
      )}

      <ConfirmDialog
        open={deleteFolderId !== null}
        onOpenChange={(open) => !open && setDeleteFolderId(null)}
        title={t("AbpUi::AreYouSure")}
        description={t("FileManagement:FolderDeleteConfirmation")}
        confirmLabel={t("AbpUi::Delete")}
        variant="destructive"
        onConfirm={handleDeleteFolderConfirm}
        isPending={deleteFolderMutation.isPending}
      />

      <ConfirmDialog
        open={deleteFileId !== null}
        onOpenChange={(open) => !open && setDeleteFileId(null)}
        title={t("AbpUi::AreYouSure")}
        description={t("FileManagement:FileDeleteConfirmation")}
        confirmLabel={t("AbpUi::Delete")}
        variant="destructive"
        onConfirm={handleDeleteFileConfirm}
        isPending={deleteFileMutation.isPending}
      />
    </PageLayout>
  );
}
