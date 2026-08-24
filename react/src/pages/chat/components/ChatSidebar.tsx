/**
 * 聊天侧栏：会话 / 联系人两个页签 + 搜索过滤 + 右键菜单（屏蔽/取消屏蔽）。
 * 页签、搜索词、上下文菜单均为组件内部状态。
 */
import { useMemo, useState } from "react";
import {
  Avatar,
  Badge,
  type BadgeProps,
  Button,
  PresenceBadge,
  type PresenceBadgeProps,
  SearchBox,
  Spinner,
  Text,
  Menu,
  MenuTrigger,
  MenuPopover,
  MenuList,
  MenuItem,
  MenuDivider,
} from "@fluentui/react-components";
import {
  Chat20Regular,
  PersonAdd20Regular,
  Prohibited20Regular,
  Search20Regular,
} from "@fluentui/react-icons";
import { formatDistanceToNow } from "date-fns";
import { zhCN } from "date-fns/locale";
import { useChatStyles } from "../styles/chat";
import type { AcroStackChatChatMessageSideDto as ChatMessageSideDto } from "@/api/models/acroStack/chat/ChatMessageSideDto";
import type { AcroStackChatContactDto as ContactDto } from "@/api/models/acroStack/chat/ContactDto";
import type { AcroStackChatConversationDto as ConversationDto } from "@/api/models/acroStack/chat/ConversationDto";

export type SidebarTab = "conversations" | "contacts";

interface ChatSidebarProps {
  conversations: ConversationDto[];
  conversationsLoading: boolean;
  contacts: ContactDto[];
  contactsLoading: boolean;
  selectedTargetUserId: string | null;
  onSelectConversation: (targetUserId: string) => void;
  onBlockUser: (userId: string) => void;
  onUnblockUser: (userId: string) => void;
  blockPending: boolean;
  unblockPending: boolean;
}

interface SidebarItemArgs {
  targetUserId: string | undefined;
  name: string;
  surname: string;
  userName: string | null | undefined;
  email: string | null | undefined;
  preview: string | null | undefined;
  previewDate: string | null | undefined;
  unread: number;
  side: ChatMessageSideDto | undefined;
  isOnline?: boolean;
  isBlocked?: boolean;
}

export function ChatSidebar({
  conversations,
  conversationsLoading,
  contacts,
  contactsLoading,
  selectedTargetUserId,
  onSelectConversation,
  onBlockUser,
  onUnblockUser,
  blockPending,
  unblockPending,
}: ChatSidebarProps) {
  const styles = useChatStyles();
  const [tab, setTab] = useState<SidebarTab>("conversations");
  const [search, setSearch] = useState("");
  // 当前打开右键菜单的侧栏项（同一时间最多一个）。
  const [contextMenuUserId, setContextMenuUserId] = useState<string | null>(null);

  const filteredConversations = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return conversations;
    return conversations.filter(
      (c) =>
        c.targetUserName?.toLowerCase().includes(q) ||
        `${c.targetName ?? ""} ${c.targetSurname ?? ""}`.toLowerCase().includes(q),
    );
  }, [conversations, search]);

  const filteredContacts = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return contacts;
    return contacts.filter(
      (c) =>
        c.userName?.toLowerCase().includes(q) ||
        `${c.name ?? ""} ${c.surname ?? ""}`.toLowerCase().includes(q),
    );
  }, [contacts, search]);

  function handleSelect(targetUserId: string) {
    setContextMenuUserId(null);
    onSelectConversation(targetUserId);
  }

  function renderSidebarItem(args: SidebarItemArgs) {
    const {
      targetUserId,
      name,
      surname,
      userName,
      email,
      preview,
      previewDate,
      unread,
      side,
      isOnline,
      isBlocked,
    } = args;
    if (!targetUserId) return null;
    const isSelected = targetUserId === selectedTargetUserId;
    const fullName = [name, surname].filter(Boolean).join(" ").trim() || userName || email || "?";
    const initials = fullName.slice(0, 2).toUpperCase();
    const timeAgo = previewDate
      ? formatDistanceToNow(new Date(previewDate), { addSuffix: true, locale: zhCN })
      : "";
    const previewText = preview ? `${side === 0 ? "发送" + ": " : ""}${preview}` : "";

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
            onClick={() => handleSelect(targetUserId)}
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
                  {isBlocked && <span className={styles.blockedTag}> · {"已屏蔽"}</span>}
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
            <MenuItem icon={<Chat20Regular />} onClick={() => handleSelect(targetUserId)}>
              {"打开会话"}
            </MenuItem>
            <MenuDivider />
            {isBlocked ? (
              <MenuItem
                icon={<Prohibited20Regular />}
                onClick={() => {
                  setContextMenuUserId(null);
                  onUnblockUser(targetUserId);
                }}
                disabled={unblockPending}
              >
                {"取消屏蔽"}
              </MenuItem>
            ) : (
              <MenuItem
                icon={<Prohibited20Regular />}
                onClick={() => {
                  setContextMenuUserId(null);
                  onBlockUser(targetUserId);
                }}
                disabled={blockPending}
              >
                {"屏蔽用户"}
              </MenuItem>
            )}
          </MenuList>
        </MenuPopover>
      </Menu>
    );
  }

  return (
    <aside className={styles.sidebar}>
      <div className={styles.sidebarHeader}>
        <div className={styles.sidebarTabs}>
          <Button
            appearance={tab === "conversations" ? "primary" : "subtle"}
            icon={<Chat20Regular />}
            onClick={() => setTab("conversations")}
          >
            {"会话"}
          </Button>
          <Button
            appearance={tab === "contacts" ? "primary" : "subtle"}
            icon={<PersonAdd20Regular />}
            onClick={() => setTab("contacts")}
          >
            {"联系人"}
          </Button>
        </div>
        <SearchBox
          placeholder={"搜索联系人..."}
          value={search}
          onChange={(_, data) => setSearch(data.value)}
          contentBefore={<Search20Regular />}
        />
      </div>
      <div className={styles.sidebarList}>
        {tab === "conversations" &&
          (conversationsLoading ? (
            <div className={styles.emptyPane}>
              <Spinner size="tiny" />
            </div>
          ) : filteredConversations.length === 0 ? (
            <div className={styles.emptyPane}>
              <Chat20Regular fontSize={28} />
              <Text size={200}>{"暂无会话"}</Text>
            </div>
          ) : (
            filteredConversations.map((c) => {
              const contact = contacts.find((ct) => ct.userId === c.targetUserId);
              return renderSidebarItem({
                targetUserId: c.targetUserId,
                name: c.targetName ?? "",
                surname: c.targetSurname ?? "",
                userName: c.targetUserName,
                email: c.targetEmail,
                preview: c.lastMessage,
                previewDate: c.lastMessageDate,
                unread: c.unreadMessageCount ?? 0,
                side: c.lastMessageSide,
                isOnline: contact?.isOnline,
                isBlocked: contact?.isBlocked,
              });
            })
          ))}
        {tab === "contacts" &&
          (contactsLoading ? (
            <div className={styles.emptyPane}>
              <Spinner size="tiny" />
            </div>
          ) : filteredContacts.length === 0 ? (
            <div className={styles.emptyPane}>
              <PersonAdd20Regular fontSize={28} />
              <Text size={200}>{"暂无联系人"}</Text>
            </div>
          ) : (
            filteredContacts.map((c) =>
              renderSidebarItem({
                targetUserId: c.userId,
                name: c.name ?? "",
                surname: c.surname ?? "",
                userName: c.userName,
                email: c.email,
                preview: null,
                previewDate: c.lastMessageDate,
                unread: c.unreadMessageCount ?? 0,
                side: undefined,
                isOnline: c.isOnline,
                isBlocked: c.isBlocked,
              }),
            )
          ))}
      </div>
    </aside>
  );
}
