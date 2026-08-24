/**
 * 版本记录对话框：列出文件的历史版本并支持恢复到指定版本
 * （恢复前经 ConfirmDialog 二次确认）。
 */
import { useCallback, useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import {
  Button,
  Dialog,
  DialogActions,
  DialogBody,
  DialogContent,
  DialogSurface,
  DialogTitle,
  DialogTrigger,
  Spinner,
  Text,
  tokens,
  useId,
  useToastController,
} from "@fluentui/react-components";
import { ArrowUpload24Regular } from "@fluentui/react-icons";
import { format } from "date-fns";
import { useFileManagementGetFileVersions } from "@/api/hooks/fileManagement/useFileManagementGetFileVersions";
import { fileManagementGetFileVersionsQueryKey } from "@/api/hooks/fileManagement/useFileManagementGetFileVersions";
import { fileManagementGetFilesQueryKey } from "@/api/hooks/fileManagement/useFileManagementGetFiles";
import { fileManagementGetStorageInfoQueryKey } from "@/api/hooks/fileManagement/useFileManagementGetStorageInfo";
import { useFileManagementRestoreVersion } from "@/api/hooks/fileManagement/useFileManagementRestoreVersion";
import { extractAbpErrorMessage } from "@/lib/api/error";
import { ConfirmDialog } from "@/components/common/ConfirmDialog";
import { useFileManagementStyles } from "../styles/fileManagement";
import { formatBytes } from "../utils/fileManagement";

interface VersionsDialogProps {
  fileId: string;
  fileName: string;
  onOpenChange: (open: boolean) => void;
}

export function VersionsDialog({ fileId, fileName, onOpenChange }: VersionsDialogProps) {
  const styles = useFileManagementStyles();
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
          dispatchToast("保存成功", { intent: "success" });
        },
        onError: (err) => dispatchToast(extractAbpErrorMessage(err), { intent: "error" }),
      },
    );
  }, [confirmVersionId, fileId, restoreVersionMutation, invalidateAll, dispatchToast]);

  return (
    <Dialog open onOpenChange={(_, data) => onOpenChange(data.open)}>
      <DialogSurface aria-labelledby={`${dialogId}-title`}>
        <DialogBody>
          <DialogTitle id={`${dialogId}-title`}>{`版本记录：${fileName}`}</DialogTitle>
          <DialogContent>
            <div className={styles.dialogBody}>
              {versionsQuery.isLoading ? (
                <Spinner size="tiny" />
              ) : versions.length === 0 ? (
                <Text size={200}>{"暂无版本"}</Text>
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
                            {"版本"} #{v.versionNumber ?? "?"}
                            {isCurrent && (
                              <span style={{ marginLeft: tokens.spacingHorizontalS }}>
                                ({"当前版本"})
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
                            {"恢复此版本"}
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
              <Button appearance="secondary">{"关闭"}</Button>
            </DialogTrigger>
          </DialogActions>
        </DialogBody>
      </DialogSurface>

      <ConfirmDialog
        open={confirmVersionId !== null}
        onOpenChange={(open) => !open && setConfirmVersionId(null)}
        title={"你确定吗?"}
        description={"确定要恢复到此版本吗？"}
        confirmLabel={"恢复此版本"}
        variant="destructive"
        onConfirm={handleRestoreConfirm}
        isPending={restoreVersionMutation.isPending}
      />
    </Dialog>
  );
}
