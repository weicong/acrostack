/**
 * 图片文件缩略图：懒加载缩略图二进制并生成对象 URL，
 * 失败（非图片或不可用）时回退为文档图标占位。
 */
import { useEffect, useState } from "react";
import { Document20Regular } from "@fluentui/react-icons";
import { fileManagementGetThumbnail } from "@/api/clients/fileManagement/fileManagementGetThumbnail";
import { useFileManagementStyles } from "../styles/fileManagement";

interface FileThumbnailProps {
  fileId: string;
}

export function FileThumbnail({ fileId }: FileThumbnailProps) {
  const styles = useFileManagementStyles();
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
        // 非图片或不可用 —— 保持占位为空。
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
