/**
 * 页首存储用量条：展示已用/上限字节与文件总数。
 */
import type { AcroStackFileManagementStorageInfoDto as StorageInfoDto } from "@/api/models/acroStack/fileManagement/StorageInfoDto";
import { useFileManagementStyles } from "../styles/fileManagement";
import { formatBytes } from "../utils/fileManagement";

interface StorageInfoBarProps {
  data: StorageInfoDto;
}

export function StorageInfoBar({ data }: StorageInfoBarProps) {
  const styles = useFileManagementStyles();
  const used = data.usedBytes != null ? Number(data.usedBytes) : 0;
  const max = data.maxBytes != null ? Number(data.maxBytes) : 0;
  const fileCount = data.fileCount != null ? Number(data.fileCount) : 0;
  const ratio = max > 0 ? Math.min(1, used / max) : 0;
  return (
    <div className={styles.storageBar} role="status" aria-live="polite">
      <span className={styles.storageLabel}>{"存储"}</span>
      <span className={styles.storageValue}>
        {"已用"}: {formatBytes(used)} / {formatBytes(max)}
      </span>
      <div
        className={styles.storageProgress}
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={max > 0 ? max : 1}
        aria-valuenow={used}
        aria-label={"存储"}
      >
        <div className={styles.storageProgressFill} style={{ width: `${ratio * 100}%` }} />
      </div>
      <span className={styles.storageValue}>
        {"文件数"}: {fileCount}
      </span>
    </div>
  );
}
