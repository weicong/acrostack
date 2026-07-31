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
  Persona,
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
} from "@fluentui/react-icons";
import { formatDistanceToNow, format } from "date-fns";
import { PageLayout } from "@/components/layout/PageLayout";
import { useChatConnection } from "@/lib/chat/useChatConnection";
import { ChatClientMethods } from "@/lib/chat/chatHub";
import {
  useConversationGetList,
  useConversationGetMessageList,
  useConversationSendMessage,
  useConversationMarkAsRead,
  conversationGetListQueryKey,
  conversationGetMessageListQueryKey,
} from "@/api/hooks/conversation";
import {
  useContactGetList,
  useContactGetTotalUnreadMessageCount,
  contactGetListQueryKey,
  contactGetTotalUnreadMessageCountQueryKey,
} from "@/api/hooks/contact";
import type { AcroStackServicesDtosChatChatMessageDto as ChatMessageDto } from "@/api/models/acroStack/services/dtos/chat/ChatMessageDto";
import type { AcroStackServicesDtosChatChatMessageSideDto as ChatMessageSideDto } from "@/api/models/acroStack/services/dtos/chat/ChatMessageSideDto";

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
});

type SidebarTab = "conversations" | "contacts";

interface ChatPageState {
  selectedTargetUserId: string | null;
  sidebarTab: SidebarTab;
  search: string;
  composerValue: string;
}

export function ChatPage() {
  const { t } = useTranslation();
  const styles = useStyles();
  const queryClient = useQueryClient();
  const { dispatchToast } = useToastController();

  const [state, setState] = useState<ChatPageState>({
    selectedTargetUserId: null,
    sidebarTab: "conversations",
    search: "",
    composerValue: "",
  });

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
  const markAsReadMutation = useConversationMarkAsRead();

  const { connection, isConnecting, error: hubError } = useChatConnection();
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const messageListRef = useRef<HTMLDivElement | null>(null);

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

    connection.on(ChatClientMethods.ReceiveMessage, onReceiveMessage);
    connection.on(ChatClientMethods.MessagesRead, onMessagesRead);
    connection.on(ChatClientMethods.UnreadCountChanged, onUnreadCountChanged);

    return () => {
      connection.off(ChatClientMethods.ReceiveMessage, onReceiveMessage);
      connection.off(ChatClientMethods.MessagesRead, onMessagesRead);
      connection.off(ChatClientMethods.UnreadCountChanged, onUnreadCountChanged);
    };
  }, [connection, queryClient, state.selectedTargetUserId]);

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

  // ----- Event handlers -----------------------------------------------------
  const handleSelectConversation = useCallback((targetUserId: string) => {
    setState((s) => ({
      ...s,
      selectedTargetUserId: targetUserId,
      composerValue: "",
    }));
  }, []);

  const handleComposerChange: InputProps["onChange"] = useCallback((_, data) => {
    setState((s) => ({ ...s, composerValue: data.value }));
  }, []);

  const handleSend = useCallback(() => {
    const text = state.composerValue.trim();
    const targetUserId = state.selectedTargetUserId;
    if (!text || !targetUserId) return;
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
        },
        onError: (err) => {
          dispatchToast(String(err), { intent: "error" });
        },
      },
    );
  }, [
    state.composerValue,
    state.selectedTargetUserId,
    sendMessageMutation,
    queryClient,
    dispatchToast,
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

    return (
      <button
        type="button"
        key={targetUserId}
        className={`${styles.conversationItem} ${isSelected ? styles.conversationItemSelected : ""}`}
        onClick={() => handleSelectConversation(targetUserId)}
      >
        <Avatar name={fullName} initials={initials} />
        <div className={styles.conversationMeta}>
          <div className={styles.conversationTop}>
            <span
              className={`${styles.conversationName} ${unread > 0 ? styles.conversationNameUnread : ""}`}
            >
              {fullName}
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
                filteredConversations.map((c) =>
                  renderSidebarItem(
                    c.targetUserId,
                    c.targetName ?? "",
                    c.targetSurname ?? "",
                    c.targetUserName,
                    c.targetEmail,
                    c.lastMessage,
                    c.lastMessageDate,
                    c.unreadMessageCount ?? 0,
                    c.lastMessageSide,
                  ),
                )
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
                  secondaryText={selectedConversation?.targetEmail ?? selectedContact?.email ?? ""}
                  avatar={{ color: "brand" }}
                />
              </div>

              <div ref={messageListRef} className={styles.messageList}>
                {messagesQuery.isLoading && <Spinner size="tiny" />}
                {messagesQuery.isError && (
                  <Text size={200} style={{ color: tokens.colorPaletteRedForeground3 }}>
                    {String(messagesQuery.error)}
                  </Text>
                )}
                {messages.map((m) => {
                  const isSent = m.side === 0;
                  return (
                    <div
                      key={m.id ?? `${m.sendTime}-${m.text}`}
                      className={`${styles.bubbleRow} ${isSent ? styles.bubbleRowSent : styles.bubbleRowReceived}`}
                    >
                      <div>
                        <div
                          className={`${styles.bubble} ${isSent ? styles.bubbleSent : styles.bubbleReceived}`}
                        >
                          {m.text}
                        </div>
                        <div className={styles.bubbleMeta}>
                          {m.sendTime ? format(new Date(m.sendTime), "yyyy-MM-dd HH:mm") : ""}
                          {isSent && m.isRead ? ` · ✓ ${t("Chat:MarkAsRead")}` : ""}
                        </div>
                      </div>
                    </div>
                  );
                })}
                <div ref={messagesEndRef} />
              </div>

              <div className={styles.composer}>
                <Input
                  className={styles.composerInput}
                  placeholder={t("Chat:TypeMessage")}
                  value={state.composerValue}
                  onChange={handleComposerChange}
                  onKeyDown={handleComposerKeyDown}
                  disabled={sendMessageMutation.isPending}
                />
                <Button
                  appearance="primary"
                  icon={<Send20Regular />}
                  onClick={handleSend}
                  disabled={!state.composerValue.trim() || sendMessageMutation.isPending}
                >
                  {t("Chat:SendMessage")}
                </Button>
              </div>
            </>
          )}
        </section>
      </div>
    </PageLayout>
  );
}
