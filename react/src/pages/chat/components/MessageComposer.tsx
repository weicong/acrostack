/**
 * 聊天输入区：附件选择（隐藏 file input）、附件预览条、文本输入与发送按钮。
 * 发送 pending 时整体禁用。
 */
import { useRef } from "react";
import { Button, Input, type InputProps } from "@fluentui/react-components";
import { Attach20Regular, Dismiss20Regular, Send20Regular } from "@fluentui/react-icons";
import { useChatStyles } from "../styles/chat";

interface MessageComposerProps {
  value: string;
  onValueChange: (value: string) => void;
  onKeyDown: InputProps["onKeyDown"];
  onSend: () => void;
  pending: boolean;
  attachmentFile: File | null;
  onAttachmentSelected: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClearAttachment: () => void;
}

export function MessageComposer({
  value,
  onValueChange,
  onKeyDown,
  onSend,
  pending,
  attachmentFile,
  onAttachmentSelected,
  onClearAttachment,
}: MessageComposerProps) {
  const styles = useChatStyles();
  // 重置 input.value，保证重复选择同一文件仍触发 onChange。
  const attachmentInputRef = useRef<HTMLInputElement | null>(null);

  return (
    <>
      {attachmentFile && (
        <div className={styles.composerAttachmentRow}>
          <div className={styles.composerAttachmentChip}>
            <Attach20Regular />
            <span>{attachmentFile.name}</span>
            <Button
              size="small"
              appearance="subtle"
              className={styles.composerAttachmentDismiss}
              icon={<Dismiss20Regular />}
              onClick={() => {
                if (attachmentInputRef.current) attachmentInputRef.current.value = "";
                onClearAttachment();
              }}
              aria-label={"移除附件"}
            />
          </div>
        </div>
      )}

      <div className={styles.composer}>
        <input
          ref={attachmentInputRef}
          type="file"
          className={styles.fileInput}
          onChange={(e) => {
            attachmentInputRef.current?.form?.reset();
            if (attachmentInputRef.current) attachmentInputRef.current.value = "";
            onAttachmentSelected(e);
          }}
        />
        <Button
          appearance="subtle"
          icon={<Attach20Regular />}
          onClick={() => attachmentInputRef.current?.click()}
          disabled={pending}
          aria-label={"添加附件"}
          title={"添加附件"}
        />
        <Input
          className={styles.composerInput}
          placeholder={"输入消息..."}
          value={value}
          onChange={(_, data) => onValueChange(data.value)}
          onKeyDown={onKeyDown}
          disabled={pending}
        />
        <Button
          appearance="primary"
          icon={<Send20Regular />}
          onClick={onSend}
          disabled={(!value.trim() && !attachmentFile) || pending}
        >
          {"发送"}
        </Button>
      </div>
    </>
  );
}
