/**
 * Chat page: a two-pane real-time chat UI mirroring the ABP Commercial Chat
 * module's conversation view.
 *
 * Layout:
 *   ┌─────────────┬──────────────────────────┐
 *   │ Sidebar:    │ Messages:                │
 *   │ Conversations│ - header (target user)   │
 *   │ (recent)    │ - message history scroll │
 *   │ + search    │ - composer + send button  │
 *   │             │                          │
 *   └─────────────┴──────────────────────────┘
 *
 * Data:
 *   - `useConversationGetList` for the recent conversations sidebar.
 *   - `useContactGetList` for the "Start a new conversation" picker.
 *   - `useConversationGetMessageList` for the active conversation history.
 *   - `useConversationSendMessage` / `useConversationMarkAsRead` mutations.
 *   - `useChatConnection` (SignalR) for live receive / read-receipt events.
 *
 * Enhancements:
 *   - Inline message editing + soft-delete with confirmation.
 *   - Per-message reactions (👍❤️😂😍🎉🔥) via `toggle-reaction`.
 *   - File attachments: attach on send + download links in bubbles.
 *   - Online status (PresenceBadge) driven by SignalR `UserOnlineStatusChanged`.
 *   - Typing notifications: invoke `SendTypingNotification` /
 *     `StopTypingNotification` while composing; show "typing..." hint.
 *   - Message search via `search-messages` mutation with highlighted results.
 *   - Block/unblock users via `chat-block` endpoints with a context menu.
 *
 * The chat hub connection is established once on mount and shared; events
 * from it invalidate the relevant TanStack Query cache so all panes update
 * reactively without bespoke local state sync.
 */
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { useQueryClient } from "@tanstack/react-query";
import {
  Avatar,
  Badge,
  type BadgeProps,
  Button,
  Input,
  type InputProps,
  Link,
  Menu,
  MenuTrigger,
  MenuPopover,
  MenuList,
  MenuItem,
  MenuDivider,
  Persona,
  PresenceBadge,
  type PresenceBadgeProps,
  SearchBox,
  Spinner,
  Text,
  makeStyles,
  tokens,
  useToastController,
} from "@fluentui/react-components";
import {
  Chat20Regular,
  ChatMultiple20Regular,
  Send20Regular,
  Search20Regular,
  PersonAdd20Regular,
  MoreHorizontal20Regular,
  Edit20Regular,
  Delete20Regular,
  Attach20Regular,
  Dismiss20Regular,
  Prohibited20Regular,
} from "@fluentui/react-icons";
import { formatDistanceToNow, format } from "date-fns";
import { PageLayout } from "@/components/layout/PageLayout";
import { ConfirmDialog } from "@/components/common/ConfirmDialog";
import { useChatConnection } from "@/lib/chat/useChatConnection";
import { ChatClientMethods, ChatHubMethods } from "@/lib/chat/chatHub";
import { useCurrentUser } from "@/lib/auth/permissions";
import {
  useConversationGetList,
  useConversationGetMessageList,
  useConversationSendMessage,
  useConversationMarkAsRead,
  useConversationEditMessage,
  useConversationDeleteMessage,
  useConversationGetReactions,
  useConversationToggleReaction,
  useConversationSearchMessages,
  conversationGetListQueryKey,
  conversationGetMessageListQueryKey,
  conversationGetReactionsQueryKey,
} from "@/api/hooks/conversation";
import {
  useContactGetList,
  useContactGetTotalUnreadMessageCount,
  contactGetListQueryKey,
  contactGetTotalUnreadMessageCountQueryKey,
} from "@/api/hooks/contact";
import {
  useChatBlockBlockUser,
  useChatBlockUnblockUser,
  useChatBlockGetBlockedUsers,
  chatBlockGetBlockedUsersQueryKey,
} from "@/api/hooks/chatBlock";
import { useChatSendMessageWithAttachment } from "@/api/hooks/chat";
import { chatDownloadAttachment } from "@/api/clients/chat/chatDownloadAttachment";
import type { AcroStackServicesDtosChatChatMessageDto as ChatMessageDto } from "@/api/models/acroStack/services/dtos/chat/ChatMessageDto";
import type { AcroStackServicesDtosChatChatMessageReactionDto as ChatMessageReactionDto } from "@/api/models/acroStack/services/dtos/chat/ChatMessageReactionDto";
import type { AcroStackServicesDtosChatChatMessageSideDto as ChatMessageSideDto } from "@/api/models/acroStack/services/dtos/chat/ChatMessageSideDto";

/** Reactions offered in the hover picker. Matches ABP Commercial Chat module. */
const REACTIONS = ["👍", "❤️", "😂", "😍", "🎉", "🔥"] as const;

/** How long a typing hint stays visible after the last `TypingNotification`. */
const TYPING_HINT_TTL_MS = 5000;

/** Debounce window for invoking `SendTypingNotification` while composing. */
const TYPING_NOTIFY_DEBOUNCE_MS = 2500;

const useStyles = makeStyles({
  root: {
    display: "flex",
    height: "calc(100vh - 220px)",
    minHeight: "480px",
    border: `1px solid ${tokens.colorNeutralStroke2}`,
    borderRadius: tokens.borderRadiusMedium,
    overflow: "hidden",
    backgroundColor: tokens.colorNeutralBackground1,
  },
  sidebar: {
    display: "flex",
    flexDirection: "column",
    width: "320px",
    minWidth: "260px",
    borderRight: `1px solid ${tokens.colorNeutralStroke2}`,
    backgroundColor: tokens.colorNeutralBackground2,
  },
  sidebarHeader: {
    display: "flex",
    flexDirection: "column",
    gap: tokens.spacingVerticalXS,
    padding: tokens.spacingHorizontalM,
  },
  sidebarTabs: {
    display: "flex",
    gap: tokens.spacingHorizontalXS,
  },
  sidebarList: {
    flex: 1,
    overflowY: "auto",
  },
  conversationItem: {
    display: "flex",
    alignItems: "center",
    gap: tokens.spacingHorizontalS,
    padding: `${tokens.spacingVerticalS} ${tokens.spacingHorizontalM}`,
    cursor: "pointer",
    width: "100%",
    border: "none",
    backgroundColor: "transparent",
    textAlign: "left" as const,
    "&:hover": {
      backgroundColor: tokens.colorNeutralBackground1Hover,
    },
  },
  conversationItemSelected: {
    backgroundColor: tokens.colorBrandBackground2,
    "&:hover": {
      backgroundColor: tokens.colorBrandBackground2Hover,
    },
  },
  conversationMeta: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    minWidth: 0,
  },
  conversationTop: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: tokens.spacingHorizontalS,
  },
  conversationName: {
    fontWeight: "semibold",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  conversationNameUnread: {
    color: tokens.colorBrandForeground1,
  },
  conversationTime: {
    color: tokens.colorNeutralForeground3,
    fontSize: tokens.fontSizeBase200,
    flexShrink: 0,
  },
  conversationPreview: {
    color: tokens.colorNeutralForeground2,
    fontSize: tokens.fontSizeBase200,
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  emptyPane: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: tokens.spacingVerticalM,
    color: tokens.colorNeutralForeground3,
    padding: tokens.spacingHorizontalXXL,
  },
  messagePane: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    minWidth: 0,
  },
  messageHeader: {
    display: "flex",
    alignItems: "center",
    gap: tokens.spacingHorizontalS,
    padding: `${tokens.spacingVerticalS} ${tokens.spacingHorizontalM}`,
    borderBottom: `1px solid ${tokens.colorNeutralStroke2}`,
    backgroundColor: tokens.colorNeutralBackground1,
  },
  messageList: {
    flex: 1,
    overflowY: "auto",
    padding: tokens.spacingHorizontalM,
    display: "flex",
    flexDirection: "column",
    gap: tokens.spacingVerticalS,
  },
  bubbleRow: {
    display: "flex",
    width: "100%",
  },
  bubbleRowSent: {
    justifyContent: "flex-end",
  },
  bubbleRowReceived: {
    justifyContent: "flex-start",
  },
  bubble: {
    maxWidth: "70%",
    padding: `${tokens.spacingVerticalXS} ${tokens.spacingHorizontalM}`,
    borderRadius: tokens.borderRadiusMedium,
    wordBreak: "break-word",
    whiteSpace: "pre-wrap",
  },
  bubbleSent: {
    backgroundColor: tokens.colorBrandBackground,
    color: tokens.colorNeutralForegroundOnBrand,
    borderBottomRightRadius: tokens.borderRadiusNone,
  },
  bubbleReceived: {
    backgroundColor: tokens.colorNeutralBackground3,
    color: tokens.colorNeutralForeground1,
    borderBottomLeftRadius: tokens.borderRadiusNone,
  },
  bubbleMeta: {
    fontSize: tokens.fontSizeBase200,
    color: tokens.colorNeutralForeground3,
    marginTop: tokens.spacingVerticalXXS,
  },
  composer: {
    display: "flex",
    gap: tokens.spacingHorizontalS,
    padding: tokens.spacingHorizontalM,
    borderTop: `1px solid ${tokens.colorNeutralStroke2}`,
    backgroundColor: tokens.colorNeutralBackground1,
  },
  composerInput: {
    flex: 1,
  },
  badgeCount: {
    minWidth: "20px",
    height: "20px",
  },
  contactPicker: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    padding: tokens.spacingHorizontalM,
    gap: tokens.spacingVerticalS,
  },
  // ---- Enhancements ----
  sidebarItemInner: {
    position: "relative" as const,
    display: "flex",
    alignItems: "center",
    gap: tokens.spacingHorizontalS,
    flex: 1,
    minWidth: 0,
  },
  presenceDot: {
    position: "absolute" as const,
    right: "-2px",
    bottom: "-2px",
    transform: "scale(0.85)",
    transformOrigin: "bottom right",
  },
  blockedTag: {
    fontSize: tokens.fontSizeBase100,
    color: tokens.colorNeutralForeground3,
    fontStyle: "italic",
  },
  messageHeaderRow: {
    display: "flex",
    alignItems: "center",
    gap: tokens.spacingHorizontalS,
    flex: 1,
    minWidth: 0,
  },
  headerSearchBox: {
    maxWidth: "260px",
    marginLeft: "auto",
  },
  searchResultsPanel: {
    position: "relative" as const,
    padding: `${tokens.spacingVerticalS} ${tokens.spacingHorizontalM}`,
    borderBottom: `1px solid ${tokens.colorNeutralStroke2}`,
    backgroundColor: tokens.colorNeutralBackground2,
    maxHeight: "200px",
    overflowY: "auto",
  },
  searchResultRow: {
    display: "flex",
    flexDirection: "column",
    gap: tokens.spacingVerticalXXS,
    padding: `${tokens.spacingVerticalXS} ${tokens.spacingHorizontalS}`,
    borderRadius: tokens.borderRadiusMedium,
    cursor: "pointer",
    border: "none",
    backgroundColor: "transparent",
    textAlign: "left" as const,
    width: "100%",
    "&:hover": {
      backgroundColor: tokens.colorNeutralBackground1Hover,
    },
  },
  searchResultText: {
    fontSize: tokens.fontSizeBase200,
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },
  searchResultMeta: {
    fontSize: tokens.fontSizeBase100,
    color: tokens.colorNeutralForeground3,
  },
  searchHighlight: {
    backgroundColor: tokens.colorPaletteGoldBackground2,
    color: tokens.colorNeutralForeground1,
    borderRadius: tokens.borderRadiusSmall,
    padding: "0 2px",
  },
  bubbleWrapper: {
    position: "relative" as const,
    display: "inline-flex",
    flexDirection: "column",
    maxWidth: "70%",
  },
  bubbleActions: {
    position: "absolute" as const,
    top: "-12px",
    right: "0",
    display: "flex",
    gap: tokens.spacingHorizontalXXS,
    backgroundColor: tokens.colorNeutralBackground1,
    borderRadius: tokens.borderRadiusCircular,
    boxShadow: tokens.shadow2,
    padding: "2px",
    opacity: 0,
    transition: "opacity 0.15s ease",
    zIndex: 1,
    pointerEvents: "none" as const,
  },
  bubbleActionsVisible: {
    opacity: 1,
    pointerEvents: "auto" as const,
  },
  bubbleActionButton: {
    minWidth: "24px",
    height: "24px",
    padding: "0",
    borderRadius: tokens.borderRadiusCircular,
  },
  reactionPicker: {
    display: "flex",
    gap: tokens.spacingHorizontalXXS,
    padding: `${tokens.spacingVerticalXXS} ${tokens.spacingHorizontalXS}`,
    backgroundColor: tokens.colorNeutralBackground1,
    borderRadius: tokens.borderRadiusCircular,
    boxShadow: tokens.shadow2,
    marginTop: tokens.spacingVerticalXXS,
  },
  reactionPickerButton: {
    minWidth: "28px",
    height: "28px",
    padding: "0",
    fontSize: "16px",
    lineHeight: 1,
    borderRadius: tokens.borderRadiusCircular,
  },
  reactionsList: {
    display: "flex",
    flexWrap: "wrap",
    gap: tokens.spacingHorizontalXXS,
    marginTop: tokens.spacingVerticalXXS,
  },
  reactionChip: {
    display: "inline-flex",
    alignItems: "center",
    gap: tokens.spacingHorizontalXXS,
    padding: "1px 6px",
    borderRadius: tokens.borderRadiusCircular,
    border: `1px solid ${tokens.colorNeutralStroke1}`,
    backgroundColor: tokens.colorNeutralBackground1,
    fontSize: tokens.fontSizeBase200,
    cursor: "pointer",
    "&:hover": {
      backgroundColor: tokens.colorNeutralBackground1Hover,
    },
  },
  reactionChipMine: {
    border: `1px solid ${tokens.colorBrandStroke1}`,
    backgroundColor: tokens.colorBrandBackground2,
  },
  reactionChipCount: {
    fontSize: tokens.fontSizeBase100,
    color: tokens.colorNeutralForeground2,
  },
  bubbleAttachment: {
    display: "flex",
    alignItems: "center",
    gap: tokens.spacingHorizontalXS,
    marginTop: tokens.spacingVerticalXXS,
    padding: `${tokens.spacingVerticalXXS} ${tokens.spacingHorizontalS}`,
    borderRadius: tokens.borderRadiusSmall,
    backgroundColor: "rgba(255,255,255,0.18)",
    color: "inherit",
    textDecoration: "none",
    fontSize: tokens.fontSizeBase200,
    "&:hover": {
      textDecoration: "underline",
    },
  },
  bubbleDeleted: {
    fontStyle: "italic",
    opacity: 0.7,
  },
  bubbleEdited: {
    fontSize: tokens.fontSizeBase100,
    opacity: 0.7,
    marginLeft: tokens.spacingHorizontalXS,
  },
  composerAttachmentRow: {
    display: "flex",
    alignItems: "center",
    gap: tokens.spacingHorizontalXS,
    padding: `${tokens.spacingVerticalXS} ${tokens.spacingHorizontalM}`,
    borderTop: `1px solid ${tokens.colorNeutralStroke2}`,
    backgroundColor: tokens.colorNeutralBackground2,
    fontSize: tokens.fontSizeBase200,
  },
  composerAttachmentChip: {
    display: "inline-flex",
    alignItems: "center",
    gap: tokens.spacingHorizontalXS,
    padding: `${tokens.spacingVerticalXXS} ${tokens.spacingHorizontalS}`,
    borderRadius: tokens.borderRadiusSmall,
    backgroundColor: tokens.colorNeutralBackground3,
  },
  composerAttachmentDismiss: {
    minWidth: "20px",
    height: "20px",
    padding: "0",
  },
  fileInput: {
    display: "none",
  },
  typingHint: {
    padding: `${tokens.spacingVerticalXXS} ${tokens.spacingHorizontalM}`,
    fontSize: tokens.fontSizeBase200,
    color: tokens.colorNeutralForeground3,
    fontStyle: "italic",
    minHeight: "20px",
  },
  editRow: {
    display: "flex",
    flexDirection: "column",
    gap: tokens.spacingVerticalXXS,
    minWidth: "240px",
  },
  editActions: {
    display: "flex",
    gap: tokens.spacingHorizontalXS,
    justifyContent: "flex-end",
  },
});

/** Escapes a string for safe inclusion in a RegExp. */
function escapeRegExp(s: string): string {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

/**
 * Renders `text` with case-insensitive `keyword` matches wrapped in a
 * `<mark>` using `highlightClassName`. Used by both the message bubbles
 * and the message-search result rows.
 */
function highlightText(text: string, keyword: string, highlightClassName: string) {
  if (!keyword.trim() || !text) return text;
  const parts = text.split(new RegExp(`(${escapeRegExp(keyword)})`, "gi"));
  return parts.map((part, i) =>
    part.toLowerCase() === keyword.toLowerCase() ? (
      <mark key={i} className={highlightClassName}>
        {part}
      </mark>
    ) : (
      <span key={i}>{part}</span>
    ),
  );
}

type SidebarTab = "conversations" | "contacts";

interface MessageBubbleProps {
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

/**
 * Renders a single chat bubble with hover actions (edit / delete / reactions),
 * inline editing, reaction chips, attachment download link, and search-term
 * highlighting. Fetches its own reactions via `useConversationGetReactions`.
 */
function MessageBubble({
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
  const { t } = useTranslation();
  const styles = useStyles();
  const reactionsQuery = useConversationGetReactions(message.id);
  const reactions: ChatMessageReactionDto[] = reactionsQuery.data?.items ?? [];

  // Group reactions by emoji, tracking whether the current user has reacted.
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
        {/* Hover action bar */}
        {isHovered && !isDeleted && !isEditing && (
          <div className={`${styles.bubbleActions} ${styles.bubbleActionsVisible}`}>
            <Button
              size="small"
              appearance="subtle"
              className={styles.bubbleActionButton}
              icon={<MoreHorizontal20Regular />}
              onClick={onPickerToggle}
              title={t("Chat:Reactions")}
              aria-label={t("Chat:Reactions")}
            />
            {isSent && (
              <>
                <Button
                  size="small"
                  appearance="subtle"
                  className={styles.bubbleActionButton}
                  icon={<Edit20Regular />}
                  onClick={onEditStart}
                  title={t("AbpUi::Edit")}
                  aria-label={t("AbpUi::Edit")}
                />
                <Button
                  size="small"
                  appearance="subtle"
                  className={styles.bubbleActionButton}
                  icon={<Delete20Regular />}
                  onClick={onDeleteRequest}
                  title={t("AbpUi::Delete")}
                  aria-label={t("AbpUi::Delete")}
                />
              </>
            )}
          </div>
        )}

        {/* Reaction picker (popover) */}
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

        {/* Bubble body */}
        {isEditing ? (
          <div className={`${styles.bubble} ${styles.bubbleReceived}`}>
            <Input
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
                {t("AbpUi::Save")}
              </Button>
              <Button size="small" onClick={onEditCancel} disabled={editPending}>
                {t("AbpUi::Cancel")}
              </Button>
            </div>
          </div>
        ) : (
          <div
            className={`${styles.bubble} ${isSent ? styles.bubbleSent : styles.bubbleReceived} ${isDeleted ? styles.bubbleDeleted : ""}`}
          >
            {isDeleted
              ? t("Chat:MessageDeleted")
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
                {message.attachmentName ?? t("Chat:Attachment")}
              </Link>
            )}
          </div>
        )}

        {/* Existing reaction chips */}
        {groupedReactions.length > 0 && !isEditing && !isDeleted && (
          <div className={styles.reactionsList}>
            {groupedReactions.map(([emoji, info]) => (
              <button
                key={emoji}
                type="button"
                className={`${styles.reactionChip} ${info.mine ? styles.reactionChipMine : ""}`}
                onClick={() => onToggleReaction(emoji)}
                title={info.mine ? t("Chat:RemoveReaction") : t("Chat:AddReaction")}
              >
                <span>{emoji}</span>
                <span className={styles.reactionChipCount}>{info.count}</span>
              </button>
            ))}
          </div>
        )}

        {/* Meta line */}
        <div className={styles.bubbleMeta}>
          {message.sendTime ? format(new Date(message.sendTime), "yyyy-MM-dd HH:mm") : ""}
          {isEdited && <span className={styles.bubbleEdited}> · {t("Chat:MessageEdited")}</span>}
          {isSent && message.isRead ? ` · ✓ ${t("Chat:MarkAsRead")}` : ""}
        </div>
      </div>
    </div>
  );
}

interface ChatPageState {
  selectedTargetUserId: string | null;
  sidebarTab: SidebarTab;
  search: string;
  composerValue: string;
}

/** Typing-sender entry: userId -> { userName, expiresAt } */
interface TypingSender {
  userName: string | null;
  expiresAt: number;
}

export function ChatPage() {
  const { t } = useTranslation();
  const styles = useStyles();
  const queryClient = useQueryClient();
  const { dispatchToast } = useToastController();
  const currentUser = useCurrentUser();

  const [state, setState] = useState<ChatPageState>({
    selectedTargetUserId: null,
    sidebarTab: "conversations",
    search: "",
    composerValue: "",
  });

  // Enhancement state
  const [editingMessageId, setEditingMessageId] = useState<string | null>(null);
  const [editingText, setEditingText] = useState("");
  const [deleteMessageId, setDeleteMessageId] = useState<string | null>(null);
  const [attachmentFile, setAttachmentFile] = useState<File | null>(null);
  const [messageSearchKeyword, setMessageSearchKeyword] = useState("");
  const [searchResults, setSearchResults] = useState<ChatMessageDto[] | null>(null);
  const [isSearchingMessages, setIsSearchingMessages] = useState(false);
  const [typingSenders, setTypingSenders] = useState<Record<string, TypingSender>>({});
  const [hoveredMessageId, setHoveredMessageId] = useState<string | null>(null);
  const [pickerOpenMessageId, setPickerOpenMessageId] = useState<string | null>(null);
  // Tracks which sidebar item's context menu is open (only one at a time).
  const [contextMenuUserId, setContextMenuUserId] = useState<string | null>(null);

  const conversationsQuery = useConversationGetList();
  const contactsQuery = useContactGetList();
  const totalUnreadQuery = useContactGetTotalUnreadMessageCount();
  const messagesQuery = useConversationGetMessageList(
    state.selectedTargetUserId
      ? {
          TargetUserId: state.selectedTargetUserId,
          SkipCount: 0,
          MaxResultCount: 100,
        }
      : undefined,
    {
      query: { enabled: !!state.selectedTargetUserId },
    },
  );
  const sendMessageMutation = useConversationSendMessage();
  const sendMessageWithAttachmentMutation = useChatSendMessageWithAttachment();
  const markAsReadMutation = useConversationMarkAsRead();
  const editMessageMutation = useConversationEditMessage();
  const deleteMessageMutation = useConversationDeleteMessage();
  const toggleReactionMutation = useConversationToggleReaction();
  const searchMessagesMutation = useConversationSearchMessages();
  const blockUserMutation = useChatBlockBlockUser();
  const unblockUserMutation = useChatBlockUnblockUser();
  useChatBlockGetBlockedUsers();

  const { connection, isConnecting, error: hubError } = useChatConnection();
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const messageListRef = useRef<HTMLDivElement | null>(null);
  const attachmentInputRef = useRef<HTMLInputElement | null>(null);
  // Debounce timer for typing-notification hub invocations.
  const typingTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const lastTypingNotifiedRef = useRef<boolean>(false);

  // ----- Derived data -------------------------------------------------------
  const conversations = conversationsQuery.data?.items ?? [];
  const contacts = contactsQuery.data?.items ?? [];
  const messages = messagesQuery.data?.items ?? [];
  const totalUnread = (totalUnreadQuery.data as number | undefined) ?? 0;

  const selectedConversation = useMemo(
    () => conversations.find((c) => c.targetUserId === state.selectedTargetUserId) ?? null,
    [conversations, state.selectedTargetUserId],
  );
  const selectedContact = useMemo(
    () => contacts.find((c) => c.userId === state.selectedTargetUserId) ?? null,
    [contacts, state.selectedTargetUserId],
  );

  const filteredConversations = useMemo(() => {
    const q = state.search.trim().toLowerCase();
    if (!q) return conversations;
    return conversations.filter(
      (c) =>
        c.targetUserName?.toLowerCase().includes(q) ||
        `${c.targetName ?? ""} ${c.targetSurname ?? ""}`.toLowerCase().includes(q),
    );
  }, [conversations, state.search]);

  const filteredContacts = useMemo(() => {
    const q = state.search.trim().toLowerCase();
    if (!q) return contacts;
    return contacts.filter(
      (c) =>
        c.userName?.toLowerCase().includes(q) ||
        `${c.name ?? ""} ${c.surname ?? ""}`.toLowerCase().includes(q),
    );
  }, [contacts, state.search]);

  // ----- SignalR event handlers ---------------------------------------------
  useEffect(() => {
    if (!connection) return;
    const onReceiveMessage = (message: ChatMessageDto) => {
      // Invalidate caches so all panes (sidebar, message list, unread count)
      // refresh from the server. This avoids re-implementing merge logic on
      // the client for edge cases (e.g. message ordering, conversation moves).
      void queryClient.invalidateQueries({ queryKey: conversationGetListQueryKey() });
      void queryClient.invalidateQueries({ queryKey: contactGetListQueryKey() });
      void queryClient.invalidateQueries({
        queryKey: contactGetTotalUnreadMessageCountQueryKey(),
      });

      // If the incoming message belongs to the active conversation, refresh
      // the message history so the new bubble appears.
      const activeTargetUserId = state.selectedTargetUserId;
      if (
        activeTargetUserId &&
        (message.senderUserId === activeTargetUserId ||
          message.receiverUserId === activeTargetUserId)
      ) {
        void queryClient.invalidateQueries({
          queryKey: conversationGetMessageListQueryKey({
            TargetUserId: activeTargetUserId,
            SkipCount: 0,
            MaxResultCount: 100,
          }),
        });
      }
    };
    const onMessagesRead = (readByUserId: string) => {
      // The other user just read my messages. Refresh the active conversation
      // (if it's with them) so the "read" indicator updates.
      if (readByUserId === state.selectedTargetUserId) {
        void queryClient.invalidateQueries({
          queryKey: conversationGetMessageListQueryKey({
            TargetUserId: readByUserId,
            SkipCount: 0,
            MaxResultCount: 100,
          }),
        });
      }
    };
    const onUnreadCountChanged = () => {
      void queryClient.invalidateQueries({
        queryKey: contactGetTotalUnreadMessageCountQueryKey(),
      });
      void queryClient.invalidateQueries({ queryKey: conversationGetListQueryKey() });
      void queryClient.invalidateQueries({ queryKey: contactGetListQueryKey() });
    };
    const onMessageEdited = (message: ChatMessageDto) => {
      const activeTargetUserId = state.selectedTargetUserId;
      if (
        activeTargetUserId &&
        (message.senderUserId === activeTargetUserId ||
          message.receiverUserId === activeTargetUserId)
      ) {
        void queryClient.invalidateQueries({
          queryKey: conversationGetMessageListQueryKey({
            TargetUserId: activeTargetUserId,
            SkipCount: 0,
            MaxResultCount: 100,
          }),
        });
      }
    };
    const onMessageDeleted = (messageId: string) => {
      const activeTargetUserId = state.selectedTargetUserId;
      if (activeTargetUserId) {
        void queryClient.invalidateQueries({
          queryKey: conversationGetMessageListQueryKey({
            TargetUserId: activeTargetUserId,
            SkipCount: 0,
            MaxResultCount: 100,
          }),
        });
      }
      void queryClient.invalidateQueries({
        queryKey: conversationGetReactionsQueryKey(messageId),
      });
    };
    const onReactionChanged = (messageId: string) => {
      void queryClient.invalidateQueries({
        queryKey: conversationGetReactionsQueryKey(messageId),
      });
    };
    const onUserOnlineStatusChanged = () => {
      // Contact list endpoint already returns `isOnline`; refetch it so the
      // sidebar dot stays accurate. Avoids keeping a separate online-state map.
      void queryClient.invalidateQueries({ queryKey: contactGetListQueryKey() });
    };
    const onTypingNotification = (senderUserId: string, senderUserName: string | null) => {
      if (!senderUserId) return;
      setTypingSenders((prev) => {
        // Self-typing echoes should not show a hint.
        if (senderUserId === currentUser?.id) return prev;
        // Only show typing hint when the sender is the active peer.
        if (senderUserId !== state.selectedTargetUserId) return prev;
        return {
          ...prev,
          [senderUserId]: {
            userName: senderUserName,
            expiresAt: Date.now() + TYPING_HINT_TTL_MS,
          },
        };
      });
    };
    const onStopTypingNotification = (senderUserId: string) => {
      if (!senderUserId) return;
      setTypingSenders((prev) => {
        if (!prev[senderUserId]) return prev;
        const next = { ...prev };
        delete next[senderUserId];
        return next;
      });
    };

    connection.on(ChatClientMethods.ReceiveMessage, onReceiveMessage);
    connection.on(ChatClientMethods.MessagesRead, onMessagesRead);
    connection.on(ChatClientMethods.UnreadCountChanged, onUnreadCountChanged);
    connection.on(ChatClientMethods.MessageEdited, onMessageEdited);
    connection.on(ChatClientMethods.MessageDeleted, onMessageDeleted);
    connection.on(ChatClientMethods.ReactionChanged, onReactionChanged);
    connection.on(ChatClientMethods.UserOnlineStatusChanged, onUserOnlineStatusChanged);
    connection.on(ChatClientMethods.TypingNotification, onTypingNotification);
    connection.on(ChatClientMethods.StopTypingNotification, onStopTypingNotification);

    return () => {
      connection.off(ChatClientMethods.ReceiveMessage, onReceiveMessage);
      connection.off(ChatClientMethods.MessagesRead, onMessagesRead);
      connection.off(ChatClientMethods.UnreadCountChanged, onUnreadCountChanged);
      connection.off(ChatClientMethods.MessageEdited, onMessageEdited);
      connection.off(ChatClientMethods.MessageDeleted, onMessageDeleted);
      connection.off(ChatClientMethods.ReactionChanged, onReactionChanged);
      connection.off(ChatClientMethods.UserOnlineStatusChanged, onUserOnlineStatusChanged);
      connection.off(ChatClientMethods.TypingNotification, onTypingNotification);
      connection.off(ChatClientMethods.StopTypingNotification, onStopTypingNotification);
    };
  }, [connection, queryClient, state.selectedTargetUserId, currentUser?.id]);

  // ----- Side effects -------------------------------------------------------
  // Auto-scroll to the latest message whenever the history changes.
  useEffect(() => {
    const list = messageListRef.current;
    if (!list) return;
    list.scrollTop = list.scrollHeight;
  }, [messages]);

  // Mark the active conversation as read whenever new messages arrive for it
  // (or when the user opens it).
  useEffect(() => {
    const targetUserId = state.selectedTargetUserId;
    if (!targetUserId) return;
    const unreadInActive = messages.some((m) => m.side === 1 && !m.isRead);
    if (!unreadInActive) return;
    markAsReadMutation.mutate(
      { targetUserId },
      {
        onSuccess: () => {
          void queryClient.invalidateQueries({
            queryKey: conversationGetMessageListQueryKey({
              TargetUserId: targetUserId,
              SkipCount: 0,
              MaxResultCount: 100,
            }),
          });
          void queryClient.invalidateQueries({
            queryKey: conversationGetListQueryKey(),
          });
          void queryClient.invalidateQueries({
            queryKey: contactGetTotalUnreadMessageCountQueryKey(),
          });
        },
      },
    );
  }, [state.selectedTargetUserId, messages, markAsReadMutation, queryClient]);

  // Garbage-collect expired typing-sender entries so the hint disappears even
  // if the peer never sends a `StopTypingNotification` (e.g. they close the tab).
  useEffect(() => {
    const interval = setInterval(() => {
      setTypingSenders((prev) => {
        const now = Date.now();
        let changed = false;
        const next: Record<string, TypingSender> = {};
        for (const [id, entry] of Object.entries(prev)) {
          if (entry.expiresAt > now) {
            next[id] = entry;
          } else {
            changed = true;
          }
        }
        return changed ? next : prev;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Stop typing notifications when switching conversations or unmounting.
  useEffect(() => {
    return () => {
      if (typingTimeoutRef.current) {
        clearTimeout(typingTimeoutRef.current);
        typingTimeoutRef.current = null;
      }
    };
  }, []);

  // ----- Event handlers -----------------------------------------------------
  const handleSelectConversation = useCallback((targetUserId: string) => {
    setState((s) => ({
      ...s,
      selectedTargetUserId: targetUserId,
      composerValue: "",
    }));
    // Reset transient per-conversation UI state.
    setEditingMessageId(null);
    setEditingText("");
    setDeleteMessageId(null);
    setAttachmentFile(null);
    setPickerOpenMessageId(null);
    setContextMenuUserId(null);
    setMessageSearchKeyword("");
    setSearchResults(null);
    setTypingSenders({});
    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
      typingTimeoutRef.current = null;
    }
    lastTypingNotifiedRef.current = false;
  }, []);

  // Forward typing notifications to the peer while the user composes.
  const notifyTyping = useCallback(() => {
    if (!connection || !state.selectedTargetUserId) return;
    void connection
      .invoke(ChatHubMethods.SendTypingNotification, state.selectedTargetUserId)
      .catch(() => {
        /* best-effort; ignore transient hub errors */
      });
  }, [connection, state.selectedTargetUserId]);

  const stopTypingNotification = useCallback(() => {
    if (!connection || !state.selectedTargetUserId) return;
    void connection
      .invoke(ChatHubMethods.StopTypingNotification, state.selectedTargetUserId)
      .catch(() => {
        /* best-effort */
      });
    lastTypingNotifiedRef.current = false;
  }, [connection, state.selectedTargetUserId]);

  const handleComposerChange: InputProps["onChange"] = useCallback(
    (_, data) => {
      setState((s) => ({ ...s, composerValue: data.value }));
      // Debounce `SendTypingNotification` so we don't spam the hub on every
      // keystroke. The first keystroke sends immediately; subsequent ones
      // reset the timer. After `TYPING_NOTIFY_DEBOUNCE_MS` of inactivity we
      // tell the peer we stopped typing.
      if (data.value && connection && state.selectedTargetUserId) {
        if (!lastTypingNotifiedRef.current) {
          lastTypingNotifiedRef.current = true;
          notifyTyping();
        }
        if (typingTimeoutRef.current) clearTimeout(typingTimeoutRef.current);
        typingTimeoutRef.current = setTimeout(() => {
          typingTimeoutRef.current = null;
          stopTypingNotification();
        }, TYPING_NOTIFY_DEBOUNCE_MS);
      } else if (!data.value) {
        // Composer cleared — immediately stop typing.
        if (typingTimeoutRef.current) {
          clearTimeout(typingTimeoutRef.current);
          typingTimeoutRef.current = null;
        }
        if (lastTypingNotifiedRef.current) {
          stopTypingNotification();
        }
      }
    },
    [connection, state.selectedTargetUserId, notifyTyping, stopTypingNotification],
  );

  const handleSend = useCallback(() => {
    const text = state.composerValue.trim();
    const targetUserId = state.selectedTargetUserId;
    if (!targetUserId) return;
    // Attachment path: use the multipart `/api/app/chat/messages/send-with-attachment`
    // endpoint (chat module) — the conversation counterpart lacks a `Blob` field.
    if (attachmentFile) {
      const file = attachmentFile;
      sendMessageWithAttachmentMutation.mutate(
        {
          data: {
            TargetUserId: targetUserId,
            Text: text || undefined,
            attachment: file,
          },
        },
        {
          onSuccess: () => {
            setState((s) => ({ ...s, composerValue: "" }));
            setAttachmentFile(null);
            if (attachmentInputRef.current) attachmentInputRef.current.value = "";
            void queryClient.invalidateQueries({
              queryKey: conversationGetMessageListQueryKey({
                TargetUserId: targetUserId,
                SkipCount: 0,
                MaxResultCount: 100,
              }),
            });
            void queryClient.invalidateQueries({
              queryKey: conversationGetListQueryKey(),
            });
            if (lastTypingNotifiedRef.current) stopTypingNotification();
          },
          onError: (err) => dispatchToast(String(err), { intent: "error" }),
        },
      );
      return;
    }
    if (!text) return;
    sendMessageMutation.mutate(
      {
        data: {
          targetUserId,
          text,
        },
      },
      {
        onSuccess: () => {
          setState((s) => ({ ...s, composerValue: "" }));
          void queryClient.invalidateQueries({
            queryKey: conversationGetMessageListQueryKey({
              TargetUserId: targetUserId,
              SkipCount: 0,
              MaxResultCount: 100,
            }),
          });
          void queryClient.invalidateQueries({
            queryKey: conversationGetListQueryKey(),
          });
          if (lastTypingNotifiedRef.current) stopTypingNotification();
        },
        onError: (err) => {
          dispatchToast(String(err), { intent: "error" });
        },
      },
    );
  }, [
    state.composerValue,
    state.selectedTargetUserId,
    attachmentFile,
    sendMessageMutation,
    sendMessageWithAttachmentMutation,
    queryClient,
    dispatchToast,
    stopTypingNotification,
  ]);

  const handleComposerKeyDown: InputProps["onKeyDown"] = useCallback(
    (e) => {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        handleSend();
      }
    },
    [handleSend],
  );

  const handleAttachmentSelected = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setAttachmentFile(file);
    // Reset the input so picking the same file twice still fires onChange.
    if (attachmentInputRef.current) attachmentInputRef.current.value = "";
  }, []);

  const handleClearAttachment = useCallback(() => {
    setAttachmentFile(null);
    if (attachmentInputRef.current) attachmentInputRef.current.value = "";
  }, []);

  // ----- Message editing / deletion ----------------------------------------
  const handleStartEdit = useCallback((message: ChatMessageDto) => {
    if (!message.id) return;
    setEditingMessageId(message.id);
    setEditingText(message.text ?? "");
    setPickerOpenMessageId(null);
  }, []);

  const handleCancelEdit = useCallback(() => {
    setEditingMessageId(null);
    setEditingText("");
  }, []);

  const handleSaveEdit = useCallback(() => {
    const messageId = editingMessageId;
    const text = editingText.trim();
    const targetUserId = state.selectedTargetUserId;
    if (!messageId || !text || !targetUserId) return;
    editMessageMutation.mutate(
      {
        messageId,
        data: { text },
      },
      {
        onSuccess: () => {
          setEditingMessageId(null);
          setEditingText("");
          void queryClient.invalidateQueries({
            queryKey: conversationGetMessageListQueryKey({
              TargetUserId: targetUserId,
              SkipCount: 0,
              MaxResultCount: 100,
            }),
          });
          dispatchToast(t("AbpUi::SavedSuccessfully"), { intent: "success" });
        },
        onError: (err) => dispatchToast(String(err), { intent: "error" }),
      },
    );
  }, [
    editingMessageId,
    editingText,
    state.selectedTargetUserId,
    editMessageMutation,
    queryClient,
    dispatchToast,
    t,
  ]);

  const handleConfirmDelete = useCallback(() => {
    const messageId = deleteMessageId;
    const targetUserId = state.selectedTargetUserId;
    if (!messageId || !targetUserId) return;
    deleteMessageMutation.mutate(
      { messageId },
      {
        onSuccess: () => {
          setDeleteMessageId(null);
          void queryClient.invalidateQueries({
            queryKey: conversationGetMessageListQueryKey({
              TargetUserId: targetUserId,
              SkipCount: 0,
              MaxResultCount: 100,
            }),
          });
          void queryClient.invalidateQueries({
            queryKey: conversationGetReactionsQueryKey(messageId),
          });
          dispatchToast(t("AbpUi::DeletedSuccessfully"), { intent: "success" });
        },
        onError: (err) => dispatchToast(String(err), { intent: "error" }),
      },
    );
  }, [
    deleteMessageId,
    state.selectedTargetUserId,
    deleteMessageMutation,
    queryClient,
    dispatchToast,
    t,
  ]);

  // ----- Reactions ----------------------------------------------------------
  const handleToggleReaction = useCallback(
    (messageId: string | undefined, reaction: string) => {
      if (!messageId) return;
      toggleReactionMutation.mutate(
        { messageId, params: { reaction } },
        {
          onSuccess: () => {
            void queryClient.invalidateQueries({
              queryKey: conversationGetReactionsQueryKey(messageId),
            });
          },
          onError: (err) => dispatchToast(String(err), { intent: "error" }),
        },
      );
    },
    [toggleReactionMutation, queryClient, dispatchToast],
  );

  // ----- Attachment download -------------------------------------------------
  const handleDownloadAttachment = useCallback(
    async (messageId: string | undefined, fallbackName?: string | null) => {
      if (!messageId) return;
      try {
        const blob = await chatDownloadAttachment(messageId, { responseType: "blob" });
        const url = window.URL.createObjectURL(blob as Blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = fallbackName || `attachment-${messageId}`;
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

  // ----- Message search -----------------------------------------------------
  const handleMessageSearch = useCallback(
    (keyword: string) => {
      setMessageSearchKeyword(keyword);
      const trimmed = keyword.trim();
      if (!trimmed) {
        setSearchResults(null);
        setIsSearchingMessages(false);
        return;
      }
      setIsSearchingMessages(true);
      searchMessagesMutation.mutate(
        {
          data: {
            keyword: trimmed,
            skipCount: 0,
            maxResultCount: 20,
          },
        },
        {
          onSuccess: (res) => {
            const items = (res as { items?: ChatMessageDto[] | null })?.items ?? [];
            setSearchResults(items);
            setIsSearchingMessages(false);
          },
          onError: (err) => {
            dispatchToast(String(err), { intent: "error" });
            setIsSearchingMessages(false);
          },
        },
      );
    },
    [searchMessagesMutation, dispatchToast],
  );

  // ----- Block / unblock user ----------------------------------------------
  const handleBlockUser = useCallback(
    (blockedUserId: string) => {
      blockUserMutation.mutate(
        { blockedUserId },
        {
          onSuccess: () => {
            void queryClient.invalidateQueries({ queryKey: contactGetListQueryKey() });
            void queryClient.invalidateQueries({
              queryKey: chatBlockGetBlockedUsersQueryKey(),
            });
            dispatchToast(t("Chat:UserBlocked"), { intent: "success" });
          },
          onError: (err) => dispatchToast(String(err), { intent: "error" }),
        },
      );
    },
    [blockUserMutation, queryClient, dispatchToast, t],
  );

  const handleUnblockUser = useCallback(
    (blockedUserId: string) => {
      unblockUserMutation.mutate(
        { blockedUserId },
        {
          onSuccess: () => {
            void queryClient.invalidateQueries({ queryKey: contactGetListQueryKey() });
            void queryClient.invalidateQueries({
              queryKey: chatBlockGetBlockedUsersQueryKey(),
            });
            dispatchToast(t("Chat:UserUnblocked"), { intent: "success" });
          },
          onError: (err) => dispatchToast(String(err), { intent: "error" }),
        },
      );
    },
    [unblockUserMutation, queryClient, dispatchToast, t],
  );

  // ----- Render helpers -----------------------------------------------------
  const renderSidebarItem = (
    targetUserId: string | undefined,
    name: string,
    surname: string,
    userName: string | null | undefined,
    email: string | null | undefined,
    preview: string | null | undefined,
    previewDate: string | null | undefined,
    unread: number,
    side: ChatMessageSideDto | undefined,
    isOnline?: boolean,
    isBlocked?: boolean,
  ) => {
    if (!targetUserId) return null;
    const isSelected = targetUserId === state.selectedTargetUserId;
    const fullName = [name, surname].filter(Boolean).join(" ").trim() || userName || email || "?";
    const initials = fullName.slice(0, 2).toUpperCase();
    const timeAgo = previewDate
      ? formatDistanceToNow(new Date(previewDate), { addSuffix: true })
      : "";
    const previewText = preview
      ? `${side === 0 ? t("Chat:SendMessage") + ": " : ""}${preview}`
      : "";

    const badge: BadgeProps | null =
      unread > 0 ? { appearance: "filled", color: "danger", size: "small" } : null;

    const presenceStatus: PresenceBadgeProps["status"] = isOnline ? "available" : "offline";

    return (
      <Menu
        key={targetUserId}
        positioning="below-start"
        open={contextMenuUserId === targetUserId}
        onOpenChange={(_, data) => {
          if (!data.open) setContextMenuUserId(null);
        }}
      >
        <MenuTrigger>
          <button
            type="button"
            className={`${styles.conversationItem} ${isSelected ? styles.conversationItemSelected : ""}`}
            onClick={() => handleSelectConversation(targetUserId)}
            onContextMenu={(e) => {
              e.preventDefault();
              setContextMenuUserId(targetUserId);
            }}
          >
            <div className={styles.sidebarItemInner}>
              <Avatar name={fullName} initials={initials} />
              <PresenceBadge status={presenceStatus} className={styles.presenceDot} />
            </div>
            <div className={styles.conversationMeta}>
              <div className={styles.conversationTop}>
                <span
                  className={`${styles.conversationName} ${unread > 0 ? styles.conversationNameUnread : ""}`}
                >
                  {fullName}
                  {isBlocked && <span className={styles.blockedTag}> · {t("Chat:Blocked")}</span>}
                </span>
                {timeAgo && <span className={styles.conversationTime}>{timeAgo}</span>}
              </div>
              <div className={styles.conversationTop}>
                <span className={styles.conversationPreview}>{previewText || email || ""}</span>
                {badge && (
                  <Badge {...badge} className={styles.badgeCount}>
                    {unread}
                  </Badge>
                )}
              </div>
            </div>
          </button>
        </MenuTrigger>
        <MenuPopover>
          <MenuList>
            <MenuItem
              icon={<Chat20Regular />}
              onClick={() => handleSelectConversation(targetUserId)}
            >
              {t("Chat:OpenConversation")}
            </MenuItem>
            <MenuDivider />
            {isBlocked ? (
              <MenuItem
                icon={<Prohibited20Regular />}
                onClick={() => handleUnblockUser(targetUserId)}
                disabled={unblockUserMutation.isPending}
              >
                {t("Chat:UnblockUser")}
              </MenuItem>
            ) : (
              <MenuItem
                icon={<Prohibited20Regular />}
                onClick={() => handleBlockUser(targetUserId)}
                disabled={blockUserMutation.isPending}
              >
                {t("Chat:BlockUser")}
              </MenuItem>
            )}
          </MenuList>
        </MenuPopover>
      </Menu>
    );
  };

  // ----- Render -------------------------------------------------------------
  return (
    <PageLayout title={totalUnread > 0 ? `${t("Chat:Title")} (${totalUnread})` : t("Chat:Title")}>
      <div className={styles.root}>
        {/* Sidebar: conversations / contacts */}
        <aside className={styles.sidebar}>
          <div className={styles.sidebarHeader}>
            <div className={styles.sidebarTabs}>
              <Button
                appearance={state.sidebarTab === "conversations" ? "primary" : "subtle"}
                icon={<Chat20Regular />}
                onClick={() => setState((s) => ({ ...s, sidebarTab: "conversations" }))}
              >
                {t("Chat:Conversations")}
              </Button>
              <Button
                appearance={state.sidebarTab === "contacts" ? "primary" : "subtle"}
                icon={<PersonAdd20Regular />}
                onClick={() => setState((s) => ({ ...s, sidebarTab: "contacts" }))}
              >
                {t("Chat:Contacts")}
              </Button>
            </div>
            <SearchBox
              placeholder={t("Chat:SearchContacts")}
              value={state.search}
              onChange={(_, data) => setState((s) => ({ ...s, search: data.value }))}
              contentBefore={<Search20Regular />}
            />
          </div>
          <div className={styles.sidebarList}>
            {state.sidebarTab === "conversations" &&
              (conversationsQuery.isLoading ? (
                <div className={styles.emptyPane}>
                  <Spinner size="tiny" />
                </div>
              ) : filteredConversations.length === 0 ? (
                <div className={styles.emptyPane}>
                  <Chat20Regular fontSize={28} />
                  <Text size={200}>{t("Chat:NoConversations")}</Text>
                </div>
              ) : (
                filteredConversations.map((c) => {
                  const contact = contacts.find((ct) => ct.userId === c.targetUserId);
                  return renderSidebarItem(
                    c.targetUserId,
                    c.targetName ?? "",
                    c.targetSurname ?? "",
                    c.targetUserName,
                    c.targetEmail,
                    c.lastMessage,
                    c.lastMessageDate,
                    c.unreadMessageCount ?? 0,
                    c.lastMessageSide,
                    contact?.isOnline,
                    contact?.isBlocked,
                  );
                })
              ))}
            {state.sidebarTab === "contacts" &&
              (contactsQuery.isLoading ? (
                <div className={styles.emptyPane}>
                  <Spinner size="tiny" />
                </div>
              ) : filteredContacts.length === 0 ? (
                <div className={styles.emptyPane}>
                  <PersonAdd20Regular fontSize={28} />
                  <Text size={200}>{t("Chat:NoContacts")}</Text>
                </div>
              ) : (
                filteredContacts.map((c) =>
                  renderSidebarItem(
                    c.userId,
                    c.name ?? "",
                    c.surname ?? "",
                    c.userName,
                    c.email,
                    null,
                    c.lastMessageDate,
                    c.unreadMessageCount ?? 0,
                    undefined,
                    c.isOnline,
                    c.isBlocked,
                  ),
                )
              ))}
          </div>
        </aside>

        {/* Message pane */}
        <section className={styles.messagePane}>
          {!state.selectedTargetUserId ? (
            <div className={styles.emptyPane}>
              <ChatMultiple20Regular fontSize={36} />
              <Text size={400}>{t("Chat:NoConversationSelected")}</Text>
              {hubError && (
                <Text size={200} style={{ color: tokens.colorPaletteRedForeground3 }}>
                  {String(hubError)}
                </Text>
              )}
              {isConnecting && <Spinner size="tiny" />}
            </div>
          ) : (
            <>
              <div className={styles.messageHeader}>
                <div className={styles.messageHeaderRow}>
                  <Persona
                    name={
                      [
                        selectedConversation?.targetName ?? selectedContact?.name,
                        selectedConversation?.targetSurname ?? selectedContact?.surname,
                      ]
                        .filter(Boolean)
                        .join(" ")
                        .trim() ||
                      selectedConversation?.targetUserName ||
                      selectedContact?.userName ||
                      ""
                    }
                    secondaryText={
                      selectedConversation?.targetEmail ?? selectedContact?.email ?? ""
                    }
                    avatar={{ color: "brand" }}
                  />
                  <SearchBox
                    className={styles.headerSearchBox}
                    placeholder={t("Chat:SearchMessages")}
                    value={messageSearchKeyword}
                    onChange={(_, data) => handleMessageSearch(data.value)}
                    contentBefore={<Search20Regular />}
                  />
                </div>
              </div>

              {searchResults && (
                <div className={styles.searchResultsPanel}>
                  {isSearchingMessages ? (
                    <Spinner size="tiny" />
                  ) : searchResults.length === 0 ? (
                    <Text size={200}>{t("Chat:NoSearchResults")}</Text>
                  ) : (
                    searchResults.map((m) => {
                      const peerId =
                        m.senderUserId && m.senderUserId !== currentUser?.id
                          ? m.senderUserId
                          : m.receiverUserId;
                      return (
                        <button
                          key={m.id ?? `${m.sendTime}-${m.text}`}
                          type="button"
                          className={styles.searchResultRow}
                          onClick={() => {
                            if (peerId) handleSelectConversation(peerId);
                          }}
                        >
                          <span className={styles.searchResultText}>
                            {highlightText(
                              m.text ?? "",
                              messageSearchKeyword,
                              styles.searchHighlight,
                            )}
                          </span>
                          <span className={styles.searchResultMeta}>
                            {m.sendTime ? format(new Date(m.sendTime), "yyyy-MM-dd HH:mm") : ""}
                          </span>
                        </button>
                      );
                    })
                  )}
                </div>
              )}

              <div ref={messageListRef} className={styles.messageList}>
                {messagesQuery.isLoading && <Spinner size="tiny" />}
                {messagesQuery.isError && (
                  <Text size={200} style={{ color: tokens.colorPaletteRedForeground3 }}>
                    {String(messagesQuery.error)}
                  </Text>
                )}
                {messages.map((m) => {
                  const isSent = m.side === 0;
                  const messageId = m.id;
                  const isEditing = editingMessageId === messageId;
                  const isHovered = hoveredMessageId === messageId;
                  const isPickerOpen = pickerOpenMessageId === messageId;
                  return (
                    <MessageBubble
                      key={messageId ?? `${m.sendTime}-${m.text}`}
                      message={m}
                      isSent={isSent}
                      currentUserId={currentUser?.id}
                      searchKeyword={messageSearchKeyword}
                      isEditing={isEditing}
                      editingText={editingText}
                      isHovered={isHovered}
                      isPickerOpen={isPickerOpen}
                      editPending={editMessageMutation.isPending}
                      reactionPending={toggleReactionMutation.isPending}
                      onHoverChange={(hovered) => {
                        if (hovered) {
                          setHoveredMessageId(messageId ?? null);
                        } else {
                          setHoveredMessageId((cur) => (cur === messageId ? null : cur));
                        }
                      }}
                      onPickerToggle={() =>
                        setPickerOpenMessageId((cur) =>
                          cur === messageId ? null : (messageId ?? null),
                        )
                      }
                      onPickerClose={() => setPickerOpenMessageId(null)}
                      onEditStart={() => handleStartEdit(m)}
                      onEditCancel={handleCancelEdit}
                      onEditTextChange={setEditingText}
                      onEditSave={handleSaveEdit}
                      onDeleteRequest={() => setDeleteMessageId(messageId ?? null)}
                      onToggleReaction={(reaction) => handleToggleReaction(messageId, reaction)}
                      onDownloadAttachment={() =>
                        handleDownloadAttachment(messageId, m.attachmentName)
                      }
                    />
                  );
                })}
                <div ref={messagesEndRef} />
              </div>

              {typingSenders[state.selectedTargetUserId] && (
                <div className={styles.typingHint}>
                  {t("Chat:TypingHint", {
                    "0": typingSenders[state.selectedTargetUserId].userName ?? "",
                  })}
                </div>
              )}

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
                      onClick={handleClearAttachment}
                      aria-label={t("Chat:RemoveAttachment")}
                    />
                  </div>
                </div>
              )}

              <div className={styles.composer}>
                <input
                  ref={attachmentInputRef}
                  type="file"
                  className={styles.fileInput}
                  onChange={handleAttachmentSelected}
                />
                <Button
                  appearance="subtle"
                  icon={<Attach20Regular />}
                  onClick={() => attachmentInputRef.current?.click()}
                  disabled={
                    sendMessageMutation.isPending || sendMessageWithAttachmentMutation.isPending
                  }
                  aria-label={t("Chat:AttachFile")}
                  title={t("Chat:AttachFile")}
                />
                <Input
                  className={styles.composerInput}
                  placeholder={t("Chat:TypeMessage")}
                  value={state.composerValue}
                  onChange={handleComposerChange}
                  onKeyDown={handleComposerKeyDown}
                  disabled={
                    sendMessageMutation.isPending || sendMessageWithAttachmentMutation.isPending
                  }
                />
                <Button
                  appearance="primary"
                  icon={<Send20Regular />}
                  onClick={handleSend}
                  disabled={
                    (!state.composerValue.trim() && !attachmentFile) ||
                    sendMessageMutation.isPending ||
                    sendMessageWithAttachmentMutation.isPending
                  }
                >
                  {t("Chat:SendMessage")}
                </Button>
              </div>

              <ConfirmDialog
                open={deleteMessageId !== null}
                onOpenChange={(open) => {
                  if (!open) setDeleteMessageId(null);
                }}
                title={t("Chat:DeleteMessage")}
                description={t("Chat:DeleteMessageConfirm")}
                confirmLabel={t("AbpUi::Delete")}
                cancelLabel={t("AbpUi::Cancel")}
                variant="destructive"
                onConfirm={handleConfirmDelete}
                isPending={deleteMessageMutation.isPending}
              />
            </>
          )}
        </section>
      </div>
    </PageLayout>
  );
}
