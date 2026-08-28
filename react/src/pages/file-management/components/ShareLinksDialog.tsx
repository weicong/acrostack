/**
 * 分享对话框：列出文件的分享链接，支持创建（可设过期时间/最大下载次数）
 * 与撤销分享链接。数据获取与操作内聚在本组件。
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
  Field,
  Input,
  SpinButton,
  Spinner,
  Text,
  tokens,
  useId,
  useToastController,
} from "@fluentui/react-components";
import { Add20Regular, Delete20Regular, Link20Regular } from "@fluentui/react-icons";
import { format } from "date-fns";
import { useFileManagementGetShareLinks } from "@/api/hooks/fileManagement/useFileManagementGetShareLinks";
import { fileManagementGetShareLinksQueryKey } from "@/api/hooks/fileManagement/useFileManagementGetShareLinks";
import { useFileManagementCreateShareLink } from "@/api/hooks/fileManagement/useFileManagementCreateShareLink";
import { useFileManagementRevokeShareLink } from "@/api/hooks/fileManagement/useFileManagementRevokeShareLink";
import { extractAbpErrorMessage } from "@/lib/http/error";
import { useFileManagementStyles } from "../styles/fileManagement";

interface ShareLinksDialogProps {
  fileId: string;
  fileName: string;
  onOpenChange: (open: boolean) => void;
}

export function ShareLinksDialog({ fileId, fileName, onOpenChange }: ShareLinksDialogProps) {
  const styles = useFileManagementStyles();
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
      // 将 datetime-local 转换为 ISO 8601。
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
          dispatchToast("保存成功", { intent: "success" });
        },
        onError: (err) => dispatchToast(extractAbpErrorMessage(err), { intent: "error" }),
      },
    );
  }, [
    expirationTime,
    maxDownloadCount,
    createShareLinkMutation,
    fileId,
    invalidate,
    dispatchToast,
  ]);

  const handleRevoke = useCallback(
    (shareId: string) => {
      revokeShareLinkMutation.mutate(
        { path: { id: shareId } },
        {
          onSuccess: () => {
            invalidate();
            dispatchToast("删除成功", { intent: "success" });
          },
          onError: (err) => dispatchToast(extractAbpErrorMessage(err), { intent: "error" }),
        },
      );
    },
    [revokeShareLinkMutation, invalidate, dispatchToast],
  );

  return (
    <Dialog open onOpenChange={(_, data) => onOpenChange(data.open)}>
      <DialogSurface aria-labelledby={`${dialogId}-title`}>
        <DialogBody>
          <DialogTitle id={`${dialogId}-title`}>{`分享文件 ${fileName}`}</DialogTitle>
          <DialogContent>
            <div className={styles.dialogBody}>
              <Field label={"过期时间"}>
                <Input
                  type="datetime-local"
                  value={expirationTime}
                  onChange={(_, d) => setExpirationTime(d.value)}
                  contentBefore={null}
                />
              </Field>
              <Field label={"最大下载次数"} hint={"留空表示不限制"}>
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
                {"创建分享链接"}
              </Button>

              <div>
                <Text weight="semibold">{"分享链接"}</Text>
              </div>
              {shareLinksQuery.isLoading ? (
                <Spinner size="tiny" />
              ) : shareLinks.length === 0 ? (
                <Text size={200}>{"暂无分享链接"}</Text>
              ) : (
                shareLinks.map((link) => (
                  <div key={link.id} className={styles.shareLinkRow}>
                    <div className={styles.shareLinkToken}>
                      <Link20Regular /> {link.token ?? ""}
                    </div>
                    <div className={styles.shareLinkMeta}>
                      {link.expirationTime && (
                        <span>
                          {"过期时间"}: {format(new Date(link.expirationTime), "yyyy-MM-dd HH:mm")}
                        </span>
                      )}
                      {link.maxDownloadCount != null && (
                        <span>
                          {"最大下载次数"}: {link.maxDownloadCount}
                        </span>
                      )}
                      <span>
                        {"下载次数"}: {link.downloadCount ?? 0}
                      </span>
                      {link.isRevoked && (
                        <span style={{ color: tokens.colorPaletteRedForeground3 }}>{"已撤销"}</span>
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
                        {"撤销分享链接"}
                      </Button>
                    )}
                  </div>
                ))
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
    </Dialog>
  );
}
