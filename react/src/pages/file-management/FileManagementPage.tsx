import { useCallback, useEffect, useMemo, useRef, useState } from "react";
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
  Spinner,
  Text,
  Dialog,
  DialogActions,
  DialogBody,
  DialogContent,
  DialogSurface,
  DialogTitle,
  DialogTrigger,
  useId,
  Field,
  SpinButton,
} from "@fluentui/react-components";
import {
  Add20Regular,
  ArrowUpload20Regular,
  Delete20Regular,
  Folder20Regular,
  Document20Regular,
  ArrowDownload20Regular,
  Share20Regular,
  History20Regular,
  ArrowMove20Regular,
  Link20Regular,
  ArrowUpload24Regular,
} from "@fluentui/react-icons";
import { format } from "date-fns";
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
import {
  useFileManagementGetStorageInfo,
  fileManagementGetStorageInfoQueryKey,
} from "@/api/hooks/fileManagement/useFileManagementGetStorageInfo";
import { useFileManagementMoveFile } from "@/api/hooks/fileManagement/useFileManagementMoveFile";
import { useFileManagementMoveFolder } from "@/api/hooks/fileManagement/useFileManagementMoveFolder";
import {
  useFileManagementGetShareLinks,
  fileManagementGetShareLinksQueryKey,
} from "@/api/hooks/fileManagement/useFileManagementGetShareLinks";
import { useFileManagementCreateShareLink } from "@/api/hooks/fileManagement/useFileManagementCreateShareLink";
import { useFileManagementRevokeShareLink } from "@/api/hooks/fileManagement/useFileManagementRevokeShareLink";
import {
  useFileManagementGetFileVersions,
  fileManagementGetFileVersionsQueryKey,
} from "@/api/hooks/fileManagement/useFileManagementGetFileVersions";
import { useFileManagementRestoreVersion } from "@/api/hooks/fileManagement/useFileManagementRestoreVersion";
import { fileManagementDownloadFile } from "@/api/clients/fileManagement/fileManagementDownloadFile";
import { fileManagementGetThumbnail } from "@/api/clients/fileManagement/fileManagementGetThumbnail";
import type { AcroStackFileManagementFileFolderDto as FileFolderDto } from "@/api/models/acroStack/fileManagement/FileFolderDto";
import type { AcroStackFileManagementFileEntryDto as FileEntryDto } from "@/api/models/acroStack/fileManagement/FileEntryDto";
import type { AcroStackFileManagementStorageInfoDto as StorageInfoDto } from "@/api/models/acroStack/fileManagement/StorageInfoDto";

const IMAGE_CONTENT_TYPES = ["image/png", "image/jpeg", "image/gif", "image/webp", "image/bmp"];

function isImageContentType(contentType?: string | null): boolean {
  if (!contentType) return false;
  return IMAGE_CONTENT_TYPES.includes(contentType.toLowerCase());
}

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
  itemActions: {
    display: "flex",
    gap: tokens.spacingHorizontalXXS,
    flexShrink: 0,
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
  storageBar: {
    display: "flex",
    alignItems: "center",
    gap: tokens.spacingHorizontalM,
    padding: `${tokens.spacingVerticalS} ${tokens.spacingHorizontalM}`,
    marginBottom: tokens.spacingHorizontalM,
    backgroundColor: tokens.colorNeutralBackground2,
    borderRadius: tokens.borderRadiusMedium,
    flexWrap: "wrap",
  },
  storageLabel: {
    fontWeight: "semibold",
  },
  storageValue: {
    color: tokens.colorNeutralForeground2,
  },
  storageProgress: {
    flex: 1,
    minWidth: "160px",
    height: "8px",
    backgroundColor: tokens.colorNeutralStroke1,
    borderRadius: tokens.borderRadiusCircular,
    overflow: "hidden",
  },
  storageProgressFill: {
    height: "100%",
    backgroundColor: tokens.colorBrandBackground,
    transition: "width 0.3s ease",
  },
  thumbnail: {
    width: "32px",
    height: "32px",
    objectFit: "cover",
    borderRadius: tokens.borderRadiusSmall,
    flexShrink: 0,
  },
  dialogBody: {
    display: "flex",
    flexDirection: "column",
    gap: tokens.spacingVerticalS,
    minWidth: "420px",
  },
  folderList: {
    maxHeight: "320px",
    overflowY: "auto",
    display: "flex",
    flexDirection: "column",
    gap: tokens.spacingVerticalXS,
    padding: `${tokens.spacingVerticalS} 0`,
  },
  folderRow: {
    display: "flex",
    alignItems: "center",
    gap: tokens.spacingHorizontalS,
    padding: `${tokens.spacingVerticalXS} ${tokens.spacingHorizontalS}`,
    borderRadius: tokens.borderRadiusMedium,
    cursor: "pointer",
    border: `1px solid ${tokens.colorNeutralStroke1}`,
    backgroundColor: tokens.colorNeutralBackground1,
    "&:hover": {
      backgroundColor: tokens.colorNeutralBackground1Hover,
    },
  },
  folderRowSelected: {
    backgroundColor: tokens.colorBrandBackground2,
    border: `1px solid ${tokens.colorBrandStroke1}`,
  },
  folderCrumbs: {
    display: "flex",
    alignItems: "center",
    gap: tokens.spacingHorizontalXS,
    flexWrap: "wrap",
    color: tokens.colorNeutralForeground3,
    fontSize: tokens.fontSizeBase200,
  },
  shareLinkRow: {
    display: "flex",
    flexDirection: "column",
    gap: tokens.spacingVerticalXXS,
    padding: `${tokens.spacingVerticalS} ${tokens.spacingHorizontalM}`,
    borderRadius: tokens.borderRadiusMedium,
    border: `1px solid ${tokens.colorNeutralStroke1}`,
  },
  shareLinkToken: {
    fontFamily: tokens.fontFamilyMonospace,
    fontSize: tokens.fontSizeBase200,
    wordBreak: "break-all",
  },
  shareLinkMeta: {
    display: "flex",
    gap: tokens.spacingHorizontalM,
    color: tokens.colorNeutralForeground3,
    fontSize: tokens.fontSizeBase200,
  },
  versionRow: {
    display: "flex",
    alignItems: "center",
    gap: tokens.spacingHorizontalS,
    padding: `${tokens.spacingVerticalS} ${tokens.spacingHorizontalM}`,
    borderRadius: tokens.borderRadiusMedium,
    border: `1px solid ${tokens.colorNeutralStroke1}`,
  },
  versionCurrent: {
    border: `1px solid ${tokens.colorBrandStroke1}`,
    backgroundColor: tokens.colorBrandBackground2,
  },
});

function formatBytes(bytes?: number | bigint): string {
  if (bytes == null) return "-";
  const n = typeof bytes === "bigint" ? Number(bytes) : bytes;
  if (!Number.isFinite(n) || n <= 0) return "-";
  if (n < 1024) return `${n} B`;
  if (n < 1024 * 1024) return `${(n / 1024).toFixed(1)} KB`;
  if (n < 1024 * 1024 * 1024) return `${(n / (1024 * 1024)).toFixed(1)} MB`;
  return `${(n / (1024 * 1024 * 1024)).toFixed(1)} GB`;
}

interface BreadcrumbCrumb {
  id: string | null;
  name: string;
}

type MoveTarget =
  | { kind: "file"; id: string; name: string }
  | { kind: "folder"; id: string; name: string };

export function FileManagementPage() {
  const { t } = useTranslation();
  const styles = useStyles();
  const { isGranted } = usePermissions();
  const { dispatchToast } = useToastController();
  const queryClient = useQueryClient();

  const canUpload = isGranted("AcroStack.FileManagement.Upload");
  const canDownload = isGranted("AcroStack.FileManagement.Download");
  const canDelete = isGranted("AcroStack.FileManagement.Delete");
  const canMove = isGranted("AcroStack.FileManagement.Move");
  const canShare = isGranted("AcroStack.FileManagement.Share");

  const [currentFolderId, setCurrentFolderId] = useState<string | null>(null);
  const [breadcrumbs, setBreadcrumbs] = useState<BreadcrumbCrumb[]>([
    { id: null, name: t("FileManagement:Root") },
  ]);
  const [newFolderName, setNewFolderName] = useState("");
  const [deleteFolderId, setDeleteFolderId] = useState<string | null>(null);
  const [deleteFileId, setDeleteFileId] = useState<string | null>(null);
  const [moveTarget, setMoveTarget] = useState<MoveTarget | null>(null);
  const [shareFileId, setShareFileId] = useState<string | null>(null);
  const [shareFileName, setShareFileName] = useState<string>("");
  const [versionsFileId, setVersionsFileId] = useState<string | null>(null);
  const [versionsFileName, setVersionsFileName] = useState<string>("");

  const fileInputRef = useRef<HTMLInputElement>(null);

  const foldersQuery = useFileManagementGetFolders(
    currentFolderId ? { query: { parentId: currentFolderId } } : undefined,
  );
  const filesQuery = useFileManagementGetFiles(
    currentFolderId ? { query: { folderId: currentFolderId } } : undefined,
  );
  const storageInfoQuery = useFileManagementGetStorageInfo();

  const createFolderMutation = useFileManagementCreateFolder();
  const deleteFolderMutation = useFileManagementDeleteFolder();
  const deleteFileMutation = useFileManagementDeleteFile();
  const uploadFileMutation = useFileManagementUploadFile();
  const moveFileMutation = useFileManagementMoveFile();
  const moveFolderMutation = useFileManagementMoveFolder();

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
      { body: { name, parentId: currentFolderId } },
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
          body: { file },
          query: currentFolderId ? { folderId: currentFolderId } : undefined,
        },
        {
          onSuccess: () => {
            void queryClient.invalidateQueries({ queryKey: fileManagementGetFilesQueryKey() });
            void queryClient.invalidateQueries({
              queryKey: fileManagementGetStorageInfoQueryKey(),
            });
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
      { path: { id: deleteFolderId } },
      {
        onSuccess: () => {
          void queryClient.invalidateQueries({ queryKey: fileManagementGetFoldersQueryKey() });
          void queryClient.invalidateQueries({ queryKey: fileManagementGetFilesQueryKey() });
          void queryClient.invalidateQueries({
            queryKey: fileManagementGetStorageInfoQueryKey(),
          });
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
      { path: { id: deleteFileId } },
      {
        onSuccess: () => {
          void queryClient.invalidateQueries({ queryKey: fileManagementGetFilesQueryKey() });
          void queryClient.invalidateQueries({
            queryKey: fileManagementGetStorageInfoQueryKey(),
          });
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
        dispatchToast(String(err), { intent: "error" });
      }
    },
    [dispatchToast],
  );

  const handleMove = useCallback(
    (target: MoveTarget, targetFolderId: string | null) => {
      const onMoveSuccess = () => {
        void queryClient.invalidateQueries({ queryKey: fileManagementGetFoldersQueryKey() });
        void queryClient.invalidateQueries({ queryKey: fileManagementGetFilesQueryKey() });
        setMoveTarget(null);
        dispatchToast(t("AbpUi::SavedSuccessfully"), { intent: "success" });
      };
      const onMoveError = (err: unknown) => dispatchToast(String(err), { intent: "error" });

      if (target.kind === "file") {
        moveFileMutation.mutate(
          { path: { id: target.id }, body: { targetFolderId } },
          { onSuccess: onMoveSuccess, onError: onMoveError },
        );
      } else {
        moveFolderMutation.mutate(
          { path: { id: target.id }, body: { targetFolderId } },
          { onSuccess: onMoveSuccess, onError: onMoveError },
        );
      }
    },
    [moveFileMutation, moveFolderMutation, queryClient, dispatchToast, t],
  );

  const openShareDialog = useCallback((file: FileEntryDto) => {
    if (!file.id) return;
    setShareFileId(file.id);
    setShareFileName(file.name ?? "");
  }, []);

  const openVersionsDialog = useCallback((file: FileEntryDto) => {
    if (!file.id) return;
    setVersionsFileId(file.id);
    setVersionsFileName(file.name ?? "");
  }, []);

  const folders = foldersQuery.data?.items ?? [];
  const files = filesQuery.data?.items ?? [];
  const isEmpty = folders.length === 0 && files.length === 0;

  const folderItems = useMemo(
    () =>
      folders.map((f) => (
        <div key={f.id} className={styles.item} title={f.name ?? ""}>
          <Folder20Regular className={styles.itemIcon} />
          <span className={styles.itemName}>{f.name}</span>
          {canMove && f.id && (
            <Button
              size="small"
              appearance="subtle"
              icon={<ArrowMove20Regular />}
              onClick={() => setMoveTarget({ kind: "folder", id: f.id!, name: f.name ?? "" })}
              aria-label={t("FileManagement:Move")}
              title={t("FileManagement:Move")}
            />
          )}
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
    [
      folders,
      styles.item,
      styles.itemIcon,
      styles.itemName,
      canDelete,
      canMove,
      t,
      handleOpenFolder,
    ],
  );

  const fileItems = useMemo(
    () =>
      files.map((f) => {
        const isImage = isImageContentType(f.contentType ?? undefined);
        return (
          <div key={f.id} className={styles.item} title={f.name ?? ""}>
            {isImage && f.id ? (
              <FileThumbnail fileId={f.id} />
            ) : (
              <Document20Regular className={styles.itemIcon} />
            )}
            <span className={styles.itemName}>{f.name}</span>
            <span className={styles.itemMeta}>
              {formatBytes(f.byteSize != null ? Number(f.byteSize) : undefined)}
            </span>
            <div className={styles.itemActions}>
              {canShare && f.id && (
                <Button
                  size="small"
                  appearance="subtle"
                  icon={<Share20Regular />}
                  onClick={() => openShareDialog(f)}
                  aria-label={t("FileManagement:Share")}
                  title={t("FileManagement:Share")}
                />
              )}
              {f.id && (
                <Button
                  size="small"
                  appearance="subtle"
                  icon={<History20Regular />}
                  onClick={() => openVersionsDialog(f)}
                  aria-label={t("FileManagement:Versions")}
                  title={t("FileManagement:Versions")}
                />
              )}
              {canMove && f.id && (
                <Button
                  size="small"
                  appearance="subtle"
                  icon={<ArrowMove20Regular />}
                  onClick={() => setMoveTarget({ kind: "file", id: f.id!, name: f.name ?? "" })}
                  aria-label={t("FileManagement:Move")}
                  title={t("FileManagement:Move")}
                />
              )}
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
          </div>
        );
      }),
    [
      files,
      styles.item,
      styles.itemIcon,
      styles.itemName,
      styles.itemMeta,
      styles.itemActions,
      styles.thumbnail,
      canDownload,
      canDelete,
      canMove,
      canShare,
      t,
      handleDownloadFile,
      openShareDialog,
      openVersionsDialog,
    ],
  );

  return (
    <PageLayout title={t("Menu:FileManagement")}>
      {storageInfoQuery.data && <StorageInfoBar data={storageInfoQuery.data as StorageInfoDto} />}

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

      {moveTarget && (
        <MoveDialog
          target={moveTarget}
          onOpenChange={(open) => !open && setMoveTarget(null)}
          onConfirm={(targetFolderId) => handleMove(moveTarget, targetFolderId)}
          isPending={moveFileMutation.isPending || moveFolderMutation.isPending}
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

/** Top-of-page storage usage bar (used/max/file count). */
function StorageInfoBar({ data }: { data: StorageInfoDto }) {
  const { t } = useTranslation();
  const styles = useStyles();
  const used = data.usedBytes != null ? Number(data.usedBytes) : 0;
  const max = data.maxBytes != null ? Number(data.maxBytes) : 0;
  const fileCount = data.fileCount != null ? Number(data.fileCount) : 0;
  const ratio = max > 0 ? Math.min(1, used / max) : 0;
  return (
    <div className={styles.storageBar} role="status" aria-live="polite">
      <span className={styles.storageLabel}>{t("FileManagement:Storage")}</span>
      <span className={styles.storageValue}>
        {t("FileManagement:Used")}: {formatBytes(used)} / {formatBytes(max)}
      </span>
      <div
        className={styles.storageProgress}
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={max > 0 ? max : 1}
        aria-valuenow={used}
        aria-label={t("FileManagement:Storage")}
      >
        <div className={styles.storageProgressFill} style={{ width: `${ratio * 100}%` }} />
      </div>
      <span className={styles.storageValue}>
        {t("FileManagement:FileCount")}: {fileCount}
      </span>
    </div>
  );
}

/** Renders a small thumbnail for an image file (lazily fetched). */
function FileThumbnail({ fileId }: { fileId: string }) {
  const styles = useStyles();
  const [url, setUrl] = useState<string | null>(null);

  useEffect(() => {
    let revoked = false;
    let objectUrl: string | null = null;
    setUrl(null);
    fileManagementGetThumbnail({ path: { id: fileId }, responseType: "blob" })
      .then(({ data: blob }) => {
        if (revoked || !blob) return;
        objectUrl = window.URL.createObjectURL(blob as Blob);
        setUrl(objectUrl);
      })
      .catch(() => {
        // Non-image or unavailable — leave placeholder empty.
      });
    return () => {
      revoked = true;
      if (objectUrl) window.URL.revokeObjectURL(objectUrl);
    };
  }, [fileId]);

  if (!url) {
    return <Document20Regular className={styles.itemIcon} />;
  }
  return <img src={url} alt="" className={styles.thumbnail} />;
}

interface MoveDialogProps {
  target: MoveTarget;
  onOpenChange: (open: boolean) => void;
  onConfirm: (targetFolderId: string | null) => void;
  isPending: boolean;
}

/**
 * Folder picker dialog used by both file and folder move. Lets the user
 * navigate the folder tree starting from root and pick a destination
 * (or "Root"). The current item is excluded by the caller via invalidation
 * after the API call — the server enforces the actual move constraints.
 */
function MoveDialog({ target, onOpenChange, onConfirm, isPending }: MoveDialogProps) {
  const { t } = useTranslation();
  const styles = useStyles();
  const dialogId = useId("move-");
  const [browseFolderId, setBrowseFolderId] = useState<string | null>(null);
  const [browseCrumbs, setBrowseCrumbs] = useState<BreadcrumbCrumb[]>([
    { id: null, name: t("FileManagement:Root") },
  ]);

  const foldersQuery = useFileManagementGetFolders(
    browseFolderId ? { query: { parentId: browseFolderId } } : undefined,
  );
  const folders = foldersQuery.data?.items ?? [];

  const openSubFolder = useCallback(
    (folder: FileFolderDto) => {
      const id = folder.id ?? null;
      setBrowseFolderId(id);
      setBrowseCrumbs((prev) => [
        ...prev,
        { id, name: folder.name ?? t("FileManagement:Folders") },
      ]);
    },
    [t],
  );

  const navigateCrumb = useCallback(
    (index: number) => {
      const c = browseCrumbs[index];
      if (!c) return;
      setBrowseFolderId(c.id);
      setBrowseCrumbs((prev) => prev.slice(0, index + 1));
    },
    [browseCrumbs],
  );

  const title =
    target.kind === "file"
      ? t("FileManagement:MoveFile", { name: target.name })
      : t("FileManagement:MoveFolder", { name: target.name });

  return (
    <Dialog open onOpenChange={(_, data) => onOpenChange(data.open)}>
      <DialogSurface aria-labelledby={`${dialogId}-title`}>
        <DialogBody>
          <DialogTitle id={`${dialogId}-title`}>{title}</DialogTitle>
          <DialogContent>
            <div className={styles.dialogBody}>
              <div className={styles.folderCrumbs}>
                {browseCrumbs.map((c, idx) => (
                  <span key={`${c.id ?? "root"}-${idx}`}>
                    <FluentLink onClick={() => navigateCrumb(idx)}>{c.name}</FluentLink>
                    {idx < browseCrumbs.length - 1 && <span> / </span>}
                  </span>
                ))}
              </div>
              {foldersQuery.isLoading ? (
                <Spinner size="tiny" />
              ) : folders.length === 0 ? (
                <Text size={200}>{t("FileManagement:NoSubfolders")}</Text>
              ) : (
                <div className={styles.folderList}>
                  {folders.map((f) => (
                    <button
                      key={f.id}
                      type="button"
                      className={styles.folderRow}
                      onClick={() => openSubFolder(f)}
                      onDoubleClick={() => openSubFolder(f)}
                    >
                      <Folder20Regular />
                      <span>{f.name}</span>
                    </button>
                  ))}
                </div>
              )}
              <Text size={200}>
                {t("FileManagement:MoveTargetHint")}{" "}
                <strong>{browseCrumbs[browseCrumbs.length - 1]?.name}</strong>
              </Text>
            </div>
          </DialogContent>
          <DialogActions>
            <DialogTrigger disableButtonEnhancement>
              <Button
                appearance="primary"
                disabled={isPending}
                onClick={() => onConfirm(browseFolderId)}
              >
                {t("FileManagement:MoveHere")}
              </Button>
            </DialogTrigger>
            <DialogTrigger disableButtonEnhancement>
              <Button appearance="secondary" disabled={isPending}>
                {t("AbpUi::Cancel")}
              </Button>
            </DialogTrigger>
          </DialogActions>
        </DialogBody>
      </DialogSurface>
    </Dialog>
  );
}

interface ShareLinksDialogProps {
  fileId: string;
  fileName: string;
  onOpenChange: (open: boolean) => void;
}

/** Lists existing share links for a file and lets the user create new ones. */
function ShareLinksDialog({ fileId, fileName, onOpenChange }: ShareLinksDialogProps) {
  const { t } = useTranslation();
  const styles = useStyles();
  const dialogId = useId("share-");
  const queryClient = useQueryClient();
  const { dispatchToast } = useToastController();

  const shareLinksQuery = useFileManagementGetShareLinks({ path: { id: fileId } });
  const createShareLinkMutation = useFileManagementCreateShareLink();
  const revokeShareLinkMutation = useFileManagementRevokeShareLink();

  const [expirationTime, setExpirationTime] = useState<string>("");
  const [maxDownloadCount, setMaxDownloadCount] = useState<number | null>(null);

  const shareLinks = shareLinksQuery.data?.items ?? [];

  const invalidate = useCallback(() => {
    void queryClient.invalidateQueries({
      queryKey: fileManagementGetShareLinksQueryKey({ path: { id: fileId } }),
    });
  }, [queryClient, fileId]);

  const handleCreate = useCallback(() => {
    const data: {
      expirationTime?: string | null;
      maxDownloadCount?: number | null;
    } = {};
    if (expirationTime.trim()) {
      // Convert datetime-local to ISO 8601.
      const dt = new Date(expirationTime);
      if (!Number.isNaN(dt.getTime())) {
        data.expirationTime = dt.toISOString();
      }
    }
    if (maxDownloadCount != null && maxDownloadCount > 0) {
      data.maxDownloadCount = maxDownloadCount;
    }
    createShareLinkMutation.mutate(
      { path: { id: fileId }, body: data },
      {
        onSuccess: () => {
          invalidate();
          setExpirationTime("");
          setMaxDownloadCount(null);
          dispatchToast(t("AbpUi::SavedSuccessfully"), { intent: "success" });
        },
        onError: (err) => dispatchToast(String(err), { intent: "error" }),
      },
    );
  }, [
    expirationTime,
    maxDownloadCount,
    createShareLinkMutation,
    fileId,
    invalidate,
    dispatchToast,
    t,
  ]);

  const handleRevoke = useCallback(
    (shareId: string) => {
      revokeShareLinkMutation.mutate(
        { path: { id: shareId } },
        {
          onSuccess: () => {
            invalidate();
            dispatchToast(t("AbpUi::DeletedSuccessfully"), { intent: "success" });
          },
          onError: (err) => dispatchToast(String(err), { intent: "error" }),
        },
      );
    },
    [revokeShareLinkMutation, invalidate, dispatchToast, t],
  );

  return (
    <Dialog open onOpenChange={(_, data) => onOpenChange(data.open)}>
      <DialogSurface aria-labelledby={`${dialogId}-title`}>
        <DialogBody>
          <DialogTitle id={`${dialogId}-title`}>
            {t("FileManagement:ShareFile", { name: fileName })}
          </DialogTitle>
          <DialogContent>
            <div className={styles.dialogBody}>
              <Field label={t("FileManagement:ExpirationTime")}>
                <Input
                  type="datetime-local"
                  value={expirationTime}
                  onChange={(_, d) => setExpirationTime(d.value)}
                  contentBefore={null}
                />
              </Field>
              <Field
                label={t("FileManagement:MaxDownloadCount")}
                hint={t("FileManagement:MaxDownloadCountHint")}
              >
                <SpinButton
                  value={maxDownloadCount ?? 0}
                  min={0}
                  onChange={(_, d) =>
                    setMaxDownloadCount(d.value != null && d.value > 0 ? d.value : null)
                  }
                />
              </Field>
              <Button
                appearance="primary"
                icon={<Add20Regular />}
                onClick={handleCreate}
                disabled={createShareLinkMutation.isPending}
              >
                {t("FileManagement:CreateShareLink")}
              </Button>

              <div>
                <Text weight="semibold">{t("FileManagement:ShareLinks")}</Text>
              </div>
              {shareLinksQuery.isLoading ? (
                <Spinner size="tiny" />
              ) : shareLinks.length === 0 ? (
                <Text size={200}>{t("FileManagement:NoShareLinks")}</Text>
              ) : (
                shareLinks.map((link) => (
                  <div key={link.id} className={styles.shareLinkRow}>
                    <div className={styles.shareLinkToken}>
                      <Link20Regular /> {link.token ?? ""}
                    </div>
                    <div className={styles.shareLinkMeta}>
                      {link.expirationTime && (
                        <span>
                          {t("FileManagement:ExpirationTime")}:{" "}
                          {format(new Date(link.expirationTime), "yyyy-MM-dd HH:mm")}
                        </span>
                      )}
                      {link.maxDownloadCount != null && (
                        <span>
                          {t("FileManagement:MaxDownloadCount")}: {link.maxDownloadCount}
                        </span>
                      )}
                      <span>
                        {t("FileManagement:DownloadCount")}: {link.downloadCount ?? 0}
                      </span>
                      {link.isRevoked && (
                        <span style={{ color: tokens.colorPaletteRedForeground3 }}>
                          {t("FileManagement:Revoked")}
                        </span>
                      )}
                    </div>
                    {!link.isRevoked && link.id && (
                      <Button
                        size="small"
                        appearance="subtle"
                        icon={<Delete20Regular />}
                        onClick={() => handleRevoke(link.id!)}
                        disabled={revokeShareLinkMutation.isPending}
                      >
                        {t("FileManagement:RevokeShareLink")}
                      </Button>
                    )}
                  </div>
                ))
              )}
            </div>
          </DialogContent>
          <DialogActions>
            <DialogTrigger disableButtonEnhancement>
              <Button appearance="secondary">{t("AbpUi::Close")}</Button>
            </DialogTrigger>
          </DialogActions>
        </DialogBody>
      </DialogSurface>
    </Dialog>
  );
}

interface VersionsDialogProps {
  fileId: string;
  fileName: string;
  onOpenChange: (open: boolean) => void;
}

/** Lists file versions and lets the user restore a previous one. */
function VersionsDialog({ fileId, fileName, onOpenChange }: VersionsDialogProps) {
  const { t } = useTranslation();
  const styles = useStyles();
  const dialogId = useId("versions-");
  const queryClient = useQueryClient();
  const { dispatchToast } = useToastController();

  const versionsQuery = useFileManagementGetFileVersions({ path: { id: fileId } });
  const restoreVersionMutation = useFileManagementRestoreVersion();
  const [confirmVersionId, setConfirmVersionId] = useState<string | null>(null);

  const versions = versionsQuery.data?.items ?? [];
  const currentVersionNumber = versionsQuery.data?.items?.find(
    (v) => v.id === fileId,
  )?.versionNumber;

  const invalidateAll = useCallback(() => {
    void queryClient.invalidateQueries({
      queryKey: fileManagementGetFileVersionsQueryKey({ path: { id: fileId } }),
    });
    void queryClient.invalidateQueries({ queryKey: fileManagementGetFilesQueryKey() });
    void queryClient.invalidateQueries({
      queryKey: fileManagementGetStorageInfoQueryKey(),
    });
  }, [queryClient, fileId]);

  const handleRestoreConfirm = useCallback(() => {
    if (!confirmVersionId) return;
    restoreVersionMutation.mutate(
      { path: { id: fileId, versionId: confirmVersionId } },
      {
        onSuccess: () => {
          invalidateAll();
          setConfirmVersionId(null);
          dispatchToast(t("AbpUi::SavedSuccessfully"), { intent: "success" });
        },
        onError: (err) => dispatchToast(String(err), { intent: "error" }),
      },
    );
  }, [confirmVersionId, fileId, restoreVersionMutation, invalidateAll, dispatchToast, t]);

  return (
    <Dialog open onOpenChange={(_, data) => onOpenChange(data.open)}>
      <DialogSurface aria-labelledby={`${dialogId}-title`}>
        <DialogBody>
          <DialogTitle id={`${dialogId}-title`}>
            {t("FileManagement:VersionsFor", { name: fileName })}
          </DialogTitle>
          <DialogContent>
            <div className={styles.dialogBody}>
              {versionsQuery.isLoading ? (
                <Spinner size="tiny" />
              ) : versions.length === 0 ? (
                <Text size={200}>{t("FileManagement:NoVersions")}</Text>
              ) : (
                <div className={styles.folderList}>
                  {versions.map((v) => {
                    const isCurrent =
                      v.versionNumber != null &&
                      currentVersionNumber != null &&
                      v.versionNumber === currentVersionNumber;
                    return (
                      <div
                        key={v.id}
                        className={`${styles.versionRow} ${isCurrent ? styles.versionCurrent : ""}`}
                      >
                        <ArrowUpload24Regular />
                        <div style={{ flex: 1 }}>
                          <div>
                            {t("FileManagement:Version")} #{v.versionNumber ?? "?"}
                            {isCurrent && (
                              <span style={{ marginLeft: tokens.spacingHorizontalS }}>
                                ({t("FileManagement:CurrentVersion")})
                              </span>
                            )}
                          </div>
                          <div className={styles.shareLinkMeta}>
                            <span>{formatBytes(v.byteSize ?? undefined)}</span>
                            {v.contentType && <span>{v.contentType}</span>}
                            {v.creationTime && (
                              <span>{format(new Date(v.creationTime), "yyyy-MM-dd HH:mm")}</span>
                            )}
                          </div>
                        </div>
                        {!isCurrent && v.id && (
                          <Button
                            size="small"
                            appearance="subtle"
                            onClick={() => setConfirmVersionId(v.id!)}
                            disabled={restoreVersionMutation.isPending}
                          >
                            {t("FileManagement:RestoreVersion")}
                          </Button>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </DialogContent>
          <DialogActions>
            <DialogTrigger disableButtonEnhancement>
              <Button appearance="secondary">{t("AbpUi::Close")}</Button>
            </DialogTrigger>
          </DialogActions>
        </DialogBody>
      </DialogSurface>

      <ConfirmDialog
        open={confirmVersionId !== null}
        onOpenChange={(open) => !open && setConfirmVersionId(null)}
        title={t("AbpUi::AreYouSure")}
        description={t("FileManagement:RestoreVersionConfirmation")}
        confirmLabel={t("FileManagement:RestoreVersion")}
        variant="destructive"
        onConfirm={handleRestoreConfirm}
        isPending={restoreVersionMutation.isPending}
      />
    </Dialog>
  );
}
