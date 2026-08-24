/**
 * 单条聊天气泡：悬停操作（编辑/删除/反应）、行内编辑、反应 chips、
 * 附件下载链接与搜索关键词高亮。反应列表由 useConversationGetReactions 自取。
 */
import { useMemo } from "react";
import { Button, Input, Link, makeStyles } from "@fluentui/react-components";
import {
  Attach20Regular,
  Delete20Regular,
  Edit20Regular,
  MoreHorizontal20Regular,
} from "@fluentui/react-icons";
import { format } from "date-fns";
import { REACTIONS } from "../constants/chat";
import { highlightText } from "../utils/highlightText";
import { useChatStyles } from "../styles/chat";
import { useConversationGetReactions } from "@/api/hooks/conversation/useConversationGetReactions";
import type { AcroStackChatChatMessageDto as ChatMessageDto } from "@/api/models/acroStack/chat/ChatMessageDto";

/** 气泡内编辑输入框的局部样式（主样式表未覆盖的部分）。 */
const useEditStyles = makeStyles({
  editInput: { width: "100%" },
});

export interface MessageBubbleProps {
  message: ChatMessageDto;
  isSent: boolean;
  currentUserId?: string;
  searchKeyword: string;
  isEditing: boolean;
  editingText: string;
  isHovered: boolean;
  isPickerOpen: boolean;
  editPending: boolean;
  reactionPending: boolean;
  onHoverChange: (hovered: boolean) => void;
  onPickerToggle: () => void;
  onPickerClose: () => void;
  onEditStart: () => void;
  onEditCancel: () => void;
  onEditTextChange: (text: string) => void;
  onEditSave: () => void;
  onDeleteRequest: () => void;
  onToggleReaction: (reaction: string) => void;
  onDownloadAttachment: () => void;
}

export function MessageBubble({
  message,
  isSent,
  currentUserId,
  searchKeyword,
  isEditing,
  editingText,
  isHovered,
  isPickerOpen,
  editPending,
  reactionPending,
  onHoverChange,
  onPickerToggle,
  onPickerClose,
  onEditStart,
  onEditCancel,
  onEditTextChange,
  onEditSave,
  onDeleteRequest,
  onToggleReaction,
  onDownloadAttachment,
}: MessageBubbleProps) {
  const styles = useChatStyles();
  const editStyles = useEditStyles();
  const reactionsQuery = useConversationGetReactions(
    { path: { messageId: message.id ?? "" } },
    { query: { enabled: !!message.id } },
  );
  const reactions = reactionsQuery.data?.items ?? [];

  // 按表情分组统计，并标记当前用户是否已反应
  const groupedReactions = useMemo(() => {
    const map = new Map<string, { count: number; mine: boolean }>();
    for (const r of reactions) {
      if (!r.reaction) continue;
      const existing = map.get(r.reaction) ?? { count: 0, mine: false };
      existing.count += 1;
      if (r.userId === currentUserId) existing.mine = true;
      map.set(r.reaction, existing);
    }
    return Array.from(map.entries());
  }, [reactions, currentUserId]);

  const isDeleted = message.isDeleted === true;
  const isEdited = message.isEdited === true && !isDeleted;
  const hasAttachment = message.hasAttachment === true;

  return (
    <div
      className={`${styles.bubbleRow} ${isSent ? styles.bubbleRowSent : styles.bubbleRowReceived}`}
      onMouseEnter={() => onHoverChange(true)}
      onMouseLeave={() => {
        onHoverChange(false);
        if (isPickerOpen) onPickerClose();
      }}
    >
      <div className={styles.bubbleWrapper}>
        {/* 悬停操作条 */}
        {isHovered && !isDeleted && !isEditing && (
          <div className={`${styles.bubbleActions} ${styles.bubbleActionsVisible}`}>
            <Button
              size="small"
              appearance="subtle"
              className={styles.bubbleActionButton}
              icon={<MoreHorizontal20Regular />}
              onClick={onPickerToggle}
              title={"反应"}
              aria-label={"反应"}
            />
            {isSent && (
              <>
                <Button
                  size="small"
                  appearance="subtle"
                  className={styles.bubbleActionButton}
                  icon={<Edit20Regular />}
                  onClick={onEditStart}
                  title={"编辑"}
                  aria-label={"编辑"}
                />
                <Button
                  size="small"
                  appearance="subtle"
                  className={styles.bubbleActionButton}
                  icon={<Delete20Regular />}
                  onClick={onDeleteRequest}
                  title={"删除"}
                  aria-label={"删除"}
                />
              </>
            )}
          </div>
        )}

        {/* 反应选择器 */}
        {isPickerOpen && (
          <div className={styles.reactionPicker}>
            {REACTIONS.map((emoji) => {
              const entry = groupedReactions.find(([r]) => r === emoji);
              const mine = entry?.[1].mine ?? false;
              return (
                <Button
                  key={emoji}
                  size="small"
                  appearance={mine ? "primary" : "subtle"}
                  className={styles.reactionPickerButton}
                  onClick={() => onToggleReaction(emoji)}
                  disabled={reactionPending}
                  title={emoji}
                >
                  {emoji}
                </Button>
              );
            })}
          </div>
        )}

        {/* 气泡主体 */}
        {isEditing ? (
          <div className={`${styles.bubble} ${styles.bubbleReceived}`}>
            <Input
              className={editStyles.editInput}
              value={editingText}
              onChange={(_, data) => onEditTextChange(data.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  onEditSave();
                } else if (e.key === "Escape") {
                  onEditCancel();
                }
              }}
              autoFocus
            />
            <div className={styles.editActions}>
              <Button size="small" appearance="primary" onClick={onEditSave} disabled={editPending}>
                {"保存"}
              </Button>
              <Button size="small" onClick={onEditCancel} disabled={editPending}>
                {"取消"}
              </Button>
            </div>
          </div>
        ) : (
          <div
            className={`${styles.bubble} ${isSent ? styles.bubbleSent : styles.bubbleReceived} ${isDeleted ? styles.bubbleDeleted : ""}`}
          >
            {isDeleted
              ? "此消息已被删除"
              : highlightText(message.text ?? "", searchKeyword, styles.searchHighlight)}
            {hasAttachment && !isDeleted && (
              <Link
                as="button"
                className={styles.bubbleAttachment}
                onClick={(e) => {
                  e.preventDefault();
                  onDownloadAttachment();
                }}
              >
                <Attach20Regular />
                {message.attachmentName ?? "附件"}
              </Link>
            )}
          </div>
        )}

        {/* 已有反应 chips */}
        {groupedReactions.length > 0 && !isEditing && !isDeleted && (
          <div className={styles.reactionsList}>
            {groupedReactions.map(([emoji, info]) => (
              <button
                key={emoji}
                type="button"
                className={`${styles.reactionChip} ${info.mine ? styles.reactionChipMine : ""}`}
                onClick={() => onToggleReaction(emoji)}
                title={info.mine ? "移除反应" : "添加反应"}
              >
                <span>{emoji}</span>
                <span className={styles.reactionChipCount}>{info.count}</span>
              </button>
            ))}
          </div>
        )}

        {/* 元信息行 */}
        <div className={styles.bubbleMeta}>
          {message.sendTime ? format(new Date(message.sendTime), "yyyy-MM-dd HH:mm") : ""}
          {isEdited && <span className={styles.bubbleEdited}> · {"已编辑"}</span>}
          {isSent && message.isRead ? ` · ✓ ${"标记为已读"}` : ""}
        </div>
      </div>
    </div>
  );
}
