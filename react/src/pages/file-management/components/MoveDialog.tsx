/**
 * 移动对话框：文件与文件夹共用。从根目录起逐级浏览文件夹树，
 * 选择目标位置（可为根目录）。当前项自身的移动约束由服务端校验。
 */
import { useCallback, useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogBody,
  DialogContent,
  DialogSurface,
  DialogTitle,
  DialogTrigger,
  Link as FluentLink,
  Spinner,
  Text,
  useId,
} from "@fluentui/react-components";
import { Folder20Regular } from "@fluentui/react-icons";
import { useFileManagementGetFolders } from "@/api/hooks/fileManagement/useFileManagementGetFolders";
import type { AcroStackFileManagementFileFolderDto as FileFolderDto } from "@/api/models/acroStack/fileManagement/FileFolderDto";
import type { BreadcrumbCrumb, MoveTarget } from "../types/fileManagement";
import { useFileManagementStyles } from "../styles/fileManagement";

interface MoveDialogProps {
  target: MoveTarget;
  onOpenChange: (open: boolean) => void;
  onConfirm: (targetFolderId: string | null) => void;
  isPending: boolean;
}

export function MoveDialog({ target, onOpenChange, onConfirm, isPending }: MoveDialogProps) {
  const styles = useFileManagementStyles();
  const dialogId = useId("move-");
  const [browseFolderId, setBrowseFolderId] = useState<string | null>(null);
  const [browseCrumbs, setBrowseCrumbs] = useState<BreadcrumbCrumb[]>([
    { id: null, name: "根目录" },
  ]);

  const foldersQuery = useFileManagementGetFolders(
    browseFolderId ? { query: { parentId: browseFolderId } } : undefined,
  );
  const folders = foldersQuery.data?.items ?? [];

  const openSubFolder = useCallback((folder: FileFolderDto) => {
    const id = folder.id ?? null;
    setBrowseFolderId(id);
    setBrowseCrumbs((prev) => [...prev, { id, name: folder.name ?? "文件夹" }]);
  }, []);

  const navigateCrumb = useCallback(
    (index: number) => {
      const c = browseCrumbs[index];
      if (!c) return;
      setBrowseFolderId(c.id);
      setBrowseCrumbs((prev) => prev.slice(0, index + 1));
    },
    [browseCrumbs],
  );

  const title = target.kind === "file" ? `移动文件 ${target.name}` : `移动文件夹 ${target.name}`;

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
                <Text size={200}>{"暂无子文件夹"}</Text>
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
                {"选择目标文件夹"} <strong>{browseCrumbs[browseCrumbs.length - 1]?.name}</strong>
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
                {"移至此处"}
              </Button>
            </DialogTrigger>
            <DialogTrigger disableButtonEnhancement>
              <Button appearance="secondary" disabled={isPending}>
                {"取消"}
              </Button>
            </DialogTrigger>
          </DialogActions>
        </DialogBody>
      </DialogSurface>
    </Dialog>
  );
}
