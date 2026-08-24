/**
 * 上传按钮：内聚隐藏的文件选择输入框，选中文件后回调上传，
 * 并在请求落定后重置输入以便重复选择同一文件。
 */
import { useRef } from "react";
import type { ChangeEvent } from "react";
import { Button } from "@fluentui/react-components";
import { ArrowUpload20Regular } from "@fluentui/react-icons";
import { useFileManagementStyles } from "../styles/fileManagement";

interface UploadButtonProps {
  /** 上传中禁用按钮。 */
  pending: boolean;
  /** 上传动作（内部已处理失效刷新与错误提示），返回是否成功。 */
  onUpload: (file: File) => Promise<boolean>;
}

export function UploadButton({ pending, onUpload }: UploadButtonProps) {
  const styles = useFileManagementStyles();
  const fileInputRef = useRef<HTMLInputElement>(null);

  async function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    try {
      await onUpload(file);
    } finally {
      if (fileInputRef.current) fileInputRef.current.value = "";
    }
  }

  return (
    <>
      <Button
        appearance="primary"
        icon={<ArrowUpload20Regular />}
        onClick={() => fileInputRef.current?.click()}
        disabled={pending}
      >
        {"上传"}
      </Button>
      <input
        ref={fileInputRef}
        type="file"
        className={styles.fileInput}
        onChange={(e) => void handleChange(e)}
      />
    </>
  );
}
