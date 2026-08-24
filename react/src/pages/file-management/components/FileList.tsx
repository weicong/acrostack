/**
 * 文件浏览网格：文件夹与文件条目列表（含各权限对应的操作按钮）
 * 及目录为空时的空态展示。
 */
import { Button, Link as FluentLink } from "@fluentui/react-components";
import {
  ArrowDownload20Regular,
  ArrowMove20Regular,
  Delete20Regular,
  Document20Regular,
  Folder20Regular,
  History20Regular,
  Share20Regular,
} from "@fluentui/react-icons";
import type { AcroStackFileManagementFileEntryDto as FileEntryDto } from "@/api/models/acroStack/fileManagement/FileEntryDto";
import type { AcroStackFileManagementFileFolderDto as FileFolderDto } from "@/api/models/acroStack/fileManagement/FileFolderDto";
import { useFileManagementStyles } from "../styles/fileManagement";
import { formatBytes, isImageContentType } from "../utils/fileManagement";
import type { MoveTarget } from "../types/fileManagement";
import { FileThumbnail } from "./FileThumbnail";

interface FileListProps {
  folders: FileFolderDto[];
  files: FileEntryDto[];
  /** 目录内容是否正在加载（用于空态判断）。 */
  isLoading: boolean;
  canDownload: boolean;
  canDelete: boolean;
  canMove: boolean;
  canShare: boolean;
  onOpenFolder: (folder: FileFolderDto) => void;
  onDownloadFile: (file: FileEntryDto) => void;
  onShareFile: (file: FileEntryDto) => void;
  onVersionsFile: (file: FileEntryDto) => void;
  /** 发起移动（记录移动目标并打开对话框）。 */
  onMove: (target: MoveTarget) => void;
  onDeleteFolder: (folderId: string) => void;
  onDeleteFile: (fileId: string) => void;
}

export function FileList({
  folders,
  files,
  isLoading,
  canDownload,
  canDelete,
  canMove,
  canShare,
  onOpenFolder,
  onDownloadFile,
  onShareFile,
  onVersionsFile,
  onMove,
  onDeleteFolder,
  onDeleteFile,
}: FileListProps) {
  const styles = useFileManagementStyles();

  if (folders.length === 0 && files.length === 0 && !isLoading) {
    return <div className={styles.empty}>{"根目录"}</div>;
  }

  return (
    <div className={styles.grid}>
      {folders.map((f) => (
        <div key={f.id} className={styles.item} title={f.name ?? ""}>
          <Folder20Regular className={styles.itemIcon} />
          <span className={styles.itemName}>{f.name}</span>
          {canMove && f.id && (
            <Button
              size="small"
              appearance="subtle"
              icon={<ArrowMove20Regular />}
              onClick={() => onMove({ kind: "folder", id: f.id!, name: f.name ?? "" })}
              aria-label={"移动"}
              title={"移动"}
            />
          )}
          {canDelete && (
            <Button
              size="small"
              appearance="subtle"
              icon={<Delete20Regular />}
              onClick={() => f.id && onDeleteFolder(f.id)}
              aria-label={"删除"}
            />
          )}
          <Button
            size="small"
            appearance="subtle"
            onClick={() => onOpenFolder(f)}
            aria-label={"编辑"}
          >
            {"编辑"}
          </Button>
        </div>
      ))}
      {files.map((f) => {
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
                  onClick={() => onShareFile(f)}
                  aria-label={"分享"}
                  title={"分享"}
                />
              )}
              {f.id && (
                <Button
                  size="small"
                  appearance="subtle"
                  icon={<History20Regular />}
                  onClick={() => onVersionsFile(f)}
                  aria-label={"版本"}
                  title={"版本"}
                />
              )}
              {canMove && f.id && (
                <Button
                  size="small"
                  appearance="subtle"
                  icon={<ArrowMove20Regular />}
                  onClick={() => onMove({ kind: "file", id: f.id!, name: f.name ?? "" })}
                  aria-label={"移动"}
                  title={"移动"}
                />
              )}
              {canDownload && f.id && (
                <FluentLink onClick={() => onDownloadFile(f)} aria-label={"下载"} title={"下载"}>
                  <ArrowDownload20Regular />
                </FluentLink>
              )}
              {canDelete && (
                <Button
                  size="small"
                  appearance="subtle"
                  icon={<Delete20Regular />}
                  onClick={() => f.id && onDeleteFile(f.id)}
                  aria-label={"删除"}
                />
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
