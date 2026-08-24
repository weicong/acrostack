/**
 * 聊天页主组件：双栏实时聊天（会话侧栏 + 消息区）。
 *
 * 数据全部来自 Kubb 生成的 hooks（conversation/contact/chatBlock/chat 四组）；
 * SignalR 实时事件由 useChatRealtime 统一映射为 TanStack Query 缓存失效；
 * "正在输入"通知由 useTypingNotifier 防抖处理。
 *
 * UI 拆分：
 *   - ChatSidebar：会话/联系人页签、搜索、屏蔽菜单（内部状态）
 *   - MessageBubble：单条气泡（悬停操作/行内编辑/反应/附件下载）
 *   - MessageSearchResults：消息搜索结果面板
 *   - MessageComposer：输入区（附件选择已内部化）
 */
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useQueryClient } from "@tanstack/react-query";

import {
  Persona,
  SearchBox,
  Spinner,
  Text,
  tokens,
  useToastController,
} from "@fluentui/react-components";
import { ChatMultiple20Regular, Search20Regular } from "@fluentui/react-icons";
import { PageLayout } from "@/components/layout/PageLayout";
import { ConfirmDialog } from "@/components/common/ConfirmDialog";
import { ChatSidebar } from "./components/ChatSidebar";
import { MessageBubble } from "./components/MessageBubble";
import { MessageComposer } from "./components/MessageComposer";
import { MessageSearchResults } from "./components/MessageSearchResults";
import { useChatConnection } from "./hooks/useChatConnection";
import { useChatRealtime } from "./hooks/useChatRealtime";
import { useTypingNotifier } from "./hooks/useTypingNotifier";
import { useChatStyles } from "./styles/chat";
import { useCurrentUser } from "@/lib/auth/permissions";
import { extractAbpErrorMessage } from "@/lib/api/error";
import {
  useConversationGetList,
  conversationGetListQueryKey,
} from "@/api/hooks/conversation/useConversationGetList";
import {
  useConversationGetMessageList,
  conversationGetMessageListQueryKey,
} from "@/api/hooks/conversation/useConversationGetMessageList";
import { useConversationSendMessage } from "@/api/hooks/conversation/useConversationSendMessage";
import { useConversationMarkAsRead } from "@/api/hooks/conversation/useConversationMarkAsRead";
import { useConversationEditMessage } from "@/api/hooks/conversation/useConversationEditMessage";
import { useConversationDeleteMessage } from "@/api/hooks/conversation/useConversationDeleteMessage";
import { conversationGetReactionsQueryKey } from "@/api/hooks/conversation/useConversationGetReactions";
import { useConversationToggleReaction } from "@/api/hooks/conversation/useConversationToggleReaction";
import { useConversationSearchMessages } from "@/api/hooks/conversation/useConversationSearchMessages";
import { contactGetListQueryKey, useContactGetList } from "@/api/hooks/contact/useContactGetList";
import { useContactGetTotalUnreadMessageCount } from "@/api/hooks/contact/useContactGetTotalUnreadMessageCount";
import { useChatBlockBlockUser } from "@/api/hooks/chatBlock/useChatBlockBlockUser";
import { useChatBlockUnblockUser } from "@/api/hooks/chatBlock/useChatBlockUnblockUser";
import { useChatSendMessageWithAttachment } from "@/api/hooks/chat/useChatSendMessageWithAttachment";
import { chatDownloadAttachment } from "@/api/clients/chat/chatDownloadAttachment";
import type { AcroStackChatChatMessageDto as ChatMessageDto } from "@/api/models/acroStack/chat/ChatMessageDto";

/** 消息列表分页参数（页面查询与缓存失效保持一致）。 */
const MESSAGE_PAGE = { SkipCount: 0, MaxResultCount: 100 };

export function ChatPage() {
  const styles = useChatStyles();
  const queryClient = useQueryClient();
  const { dispatchToast } = useToastController();
  const currentUser = useCurrentUser();

  // ----- 页面状态 -----
  const [selectedTargetUserId, setSelectedTargetUserId] = useState<string | null>(null);
  const [composerValue, setComposerValue] = useState("");

  // 增强状态
  const [editingMessageId, setEditingMessageId] = useState<string | null>(null);
  const [editingText, setEditingText] = useState("");
  const [deleteMessageId, setDeleteMessageId] = useState<string | null>(null);
  const [attachmentFile, setAttachmentFile] = useState<File | null>(null);
  const [messageSearchKeyword, setMessageSearchKeyword] = useState("");
  const [searchResults, setSearchResults] = useState<ChatMessageDto[] | null>(null);
  const [isSearchingMessages, setIsSearchingMessages] = useState(false);
  const [hoveredMessageId, setHoveredMessageId] = useState<string | null>(null);
  const [pickerOpenMessageId, setPickerOpenMessageId] = useState<string | null>(null);

  // ----- Kubb 数据 hooks -----
  const conversationsQuery = useConversationGetList();
  const contactsQuery = useContactGetList();
  const totalUnreadQuery = useContactGetTotalUnreadMessageCount();
  const messagesQuery = useConversationGetMessageList(
    selectedTargetUserId
      ? {
          query: {
            TargetUserId: selectedTargetUserId,
            ...MESSAGE_PAGE,
          },
        }
      : undefined,
    {
      query: { enabled: !!selectedTargetUserId },
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

  // ----- 实时层 -----
  const { connection, isConnecting, error: hubError } = useChatConnection();
  const { typingSenders, clearTyping } = useChatRealtime({
    connection,
    selectedTargetUserId,
    currentUserId: currentUser?.id,
  });
  const notifier = useTypingNotifier(connection, selectedTargetUserId);

  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const messageListRef = useRef<HTMLDivElement | null>(null);

  // ----- 派生数据 -----------------------------------------------------------
  const conversations = conversationsQuery.data?.items ?? [];
  const contacts = contactsQuery.data?.items ?? [];
  const messages = messagesQuery.data?.items ?? [];
  const totalUnread = (totalUnreadQuery.data as number | undefined) ?? 0;

  const selectedConversation = useMemo(
    () => conversations.find((c) => c.targetUserId === selectedTargetUserId) ?? null,
    [conversations, selectedTargetUserId],
  );
  const selectedContact = useMemo(
    () => contacts.find((c) => c.userId === selectedTargetUserId) ?? null,
    [contacts, selectedTargetUserId],
  );

  const sendPending = sendMessageMutation.isPending || sendMessageWithAttachmentMutation.isPending;

  // ----- 副作用 -------------------------------------------------------------
  // 历史变化时自动滚动到最新消息。
  useEffect(() => {
    const list = messageListRef.current;
    if (!list) return;
    list.scrollTop = list.scrollHeight;
  }, [messages]);

  // 当前会话出现未读消息（或刚打开）时自动标记已读。
  useEffect(() => {
    const targetUserId = selectedTargetUserId;
    if (!targetUserId) return;
    const unreadInActive = messages.some((m) => m.side === 1 && !m.isRead);
    if (!unreadInActive) return;
    markAsReadMutation.mutate(
      { path: { targetUserId } },
      {
        onSuccess: () => {
          void queryClient.invalidateQueries({
            queryKey: conversationGetMessageListQueryKey({
              query: { TargetUserId: targetUserId, ...MESSAGE_PAGE },
            }),
          });
          void queryClient.invalidateQueries({ queryKey: conversationGetListQueryKey() });
          void queryClient.invalidateQueries({ queryKey: contactGetListQueryKey() });
        },
      },
    );
  }, [selectedTargetUserId, messages, markAsReadMutation, queryClient]);

  // ----- 事件处理 -----------------------------------------------------------
  const handleSelectConversation = useCallback(
    (targetUserId: string) => {
      setSelectedTargetUserId(targetUserId);
      setComposerValue("");
      // 重置会话级临时 UI 状态。
      setEditingMessageId(null);
      setEditingText("");
      setDeleteMessageId(null);
      setAttachmentFile(null);
      setPickerOpenMessageId(null);
      setMessageSearchKeyword("");
      setSearchResults(null);
      setIsSearchingMessages(false);
      clearTyping();
      notifier.reset();
    },
    [clearTyping, notifier],
  );

  const handleComposerChange = useCallback(
    (value: string) => {
      setComposerValue(value);
      notifier.onCompose(value);
    },
    [notifier],
  );

  const handleSend = useCallback(() => {
    const text = composerValue.trim();
    const targetUserId = selectedTargetUserId;
    if (!targetUserId) return;
    // 附件路径走 chat 模块的 multipart 接口
    // （conversation 对应接口缺少 Blob 字段）。
    if (attachmentFile) {
      const file = attachmentFile;
      sendMessageWithAttachmentMutation.mutate(
        {
          body: {
            TargetUserId: targetUserId,
            Text: text || undefined,
            attachment: file,
          },
        },
        {
          onSuccess: () => {
            setComposerValue("");
            setAttachmentFile(null);
            void queryClient.invalidateQueries({
              queryKey: conversationGetMessageListQueryKey({
                query: { TargetUserId: targetUserId, ...MESSAGE_PAGE },
              }),
            });
            void queryClient.invalidateQueries({ queryKey: conversationGetListQueryKey() });
            notifier.stop();
          },
          onError: (err) => dispatchToast(extractAbpErrorMessage(err), { intent: "error" }),
        },
      );
      return;
    }
    if (!text) return;
    sendMessageMutation.mutate(
      {
        body: {
          targetUserId,
          text,
        },
      },
      {
        onSuccess: () => {
          setComposerValue("");
          void queryClient.invalidateQueries({
            queryKey: conversationGetMessageListQueryKey({
              query: { TargetUserId: targetUserId, ...MESSAGE_PAGE },
            }),
          });
          void queryClient.invalidateQueries({ queryKey: conversationGetListQueryKey() });
          notifier.stop();
        },
        onError: (err) => dispatchToast(extractAbpErrorMessage(err), { intent: "error" }),
      },
    );
  }, [
    composerValue,
    selectedTargetUserId,
    attachmentFile,
    sendMessageMutation,
    sendMessageWithAttachmentMutation,
    queryClient,
    dispatchToast,
    notifier,
  ]);

  const handleComposerKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
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
  }, []);

  const handleClearAttachment = useCallback(() => {
    setAttachmentFile(null);
  }, []);

  // ----- 消息编辑 / 删除 -----------------------------------------------------
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
    const targetUserId = selectedTargetUserId;
    if (!messageId || !text || !targetUserId) return;
    editMessageMutation.mutate(
      {
        path: { messageId },
        body: { text },
      },
      {
        onSuccess: () => {
          setEditingMessageId(null);
          setEditingText("");
          void queryClient.invalidateQueries({
            queryKey: conversationGetMessageListQueryKey({
              query: { TargetUserId: targetUserId, ...MESSAGE_PAGE },
            }),
          });
          dispatchToast("保存成功", { intent: "success" });
        },
        onError: (err) => dispatchToast(extractAbpErrorMessage(err), { intent: "error" }),
      },
    );
  }, [
    editingMessageId,
    editingText,
    selectedTargetUserId,
    editMessageMutation,
    queryClient,
    dispatchToast,
  ]);

  const handleConfirmDelete = useCallback(() => {
    const messageId = deleteMessageId;
    const targetUserId = selectedTargetUserId;
    if (!messageId || !targetUserId) return;
    deleteMessageMutation.mutate(
      { path: { messageId } },
      {
        onSuccess: () => {
          setDeleteMessageId(null);
          void queryClient.invalidateQueries({
            queryKey: conversationGetMessageListQueryKey({
              query: { TargetUserId: targetUserId, ...MESSAGE_PAGE },
            }),
          });
          void queryClient.invalidateQueries({
            queryKey: conversationGetReactionsQueryKey({ path: { messageId } }),
          });
          dispatchToast("删除成功", { intent: "success" });
        },
        onError: (err) => dispatchToast(extractAbpErrorMessage(err), { intent: "error" }),
      },
    );
  }, [deleteMessageId, selectedTargetUserId, deleteMessageMutation, queryClient, dispatchToast]);

  // ----- 反应 ----------------------------------------------------------------
  const handleToggleReaction = useCallback(
    (messageId: string | undefined, reaction: string) => {
      if (!messageId) return;
      toggleReactionMutation.mutate(
        { path: { messageId }, query: { reaction } },
        {
          onSuccess: () => {
            void queryClient.invalidateQueries({
              queryKey: conversationGetReactionsQueryKey({ path: { messageId } }),
            });
          },
          onError: (err) => dispatchToast(extractAbpErrorMessage(err), { intent: "error" }),
        },
      );
    },
    [toggleReactionMutation, queryClient, dispatchToast],
  );

  // ----- 附件下载 ------------------------------------------------------------
  const handleDownloadAttachment = useCallback(
    async (messageId: string | undefined, fallbackName?: string | null) => {
      if (!messageId) return;
      try {
        const { data: blob } = await chatDownloadAttachment({
          path: { messageId },
          responseType: "blob",
        });
        const url = window.URL.createObjectURL(blob as Blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = fallbackName || `attachment-${messageId}`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
      } catch (err) {
        dispatchToast(extractAbpErrorMessage(err), { intent: "error" });
      }
    },
    [dispatchToast],
  );

  // ----- 消息搜索 ------------------------------------------------------------
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
          body: {
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
            dispatchToast(extractAbpErrorMessage(err), { intent: "error" });
            setIsSearchingMessages(false);
          },
        },
      );
    },
    [searchMessagesMutation, dispatchToast],
  );

  // ----- 屏蔽 / 取消屏蔽 ------------------------------------------------------
  const handleBlockUser = useCallback(
    (blockedUserId: string) => {
      blockUserMutation.mutate(
        { path: { blockedUserId } },
        {
          onSuccess: () => {
            void queryClient.invalidateQueries({ queryKey: contactGetListQueryKey() });
            dispatchToast("您已屏蔽此用户", { intent: "success" });
          },
          onError: (err) => dispatchToast(extractAbpErrorMessage(err), { intent: "error" }),
        },
      );
    },
    [blockUserMutation, queryClient, dispatchToast],
  );

  const handleUnblockUser = useCallback(
    (blockedUserId: string) => {
      unblockUserMutation.mutate(
        { path: { blockedUserId } },
        {
          onSuccess: () => {
            void queryClient.invalidateQueries({ queryKey: contactGetListQueryKey() });
            dispatchToast("您已取消屏蔽此用户", { intent: "success" });
          },
          onError: (err) => dispatchToast(extractAbpErrorMessage(err), { intent: "error" }),
        },
      );
    },
    [unblockUserMutation, queryClient, dispatchToast],
  );

  // ----- 渲染 ----------------------------------------------------------------
  return (
    <PageLayout title={totalUnread > 0 ? `${"聊天"} (${totalUnread})` : "聊天"}>
      <div className={styles.root}>
        <ChatSidebar
          conversations={conversations}
          conversationsLoading={conversationsQuery.isLoading}
          contacts={contacts}
          contactsLoading={contactsQuery.isLoading}
          selectedTargetUserId={selectedTargetUserId}
          onSelectConversation={handleSelectConversation}
          onBlockUser={handleBlockUser}
          onUnblockUser={handleUnblockUser}
          blockPending={blockUserMutation.isPending}
          unblockPending={unblockUserMutation.isPending}
        />

        <section className={styles.messagePane}>
          {!selectedTargetUserId ? (
            <div className={styles.emptyPane}>
              <ChatMultiple20Regular fontSize={36} />
              <Text size={400}>{"选择一个联系人开始聊天"}</Text>
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
                    placeholder={"搜索消息"}
                    value={messageSearchKeyword}
                    onChange={(_, data) => handleMessageSearch(data.value)}
                    contentBefore={<Search20Regular />}
                  />
                </div>
              </div>

              <MessageSearchResults
                results={searchResults}
                keyword={messageSearchKeyword}
                isSearching={isSearchingMessages}
                currentUserId={currentUser?.id}
                onSelectConversation={handleSelectConversation}
              />

              <div ref={messageListRef} className={styles.messageList}>
                {messagesQuery.isLoading && <Spinner size="tiny" />}
                {messagesQuery.isError && (
                  <Text size={200} style={{ color: tokens.colorPaletteRedForeground3 }}>
                    {String(messagesQuery.error)}
                  </Text>
                )}
                {messages.map((m) => {
                  const messageId = m.id;
                  return (
                    <MessageBubble
                      key={messageId ?? `${m.sendTime}-${m.text}`}
                      message={m}
                      isSent={m.side === 0}
                      currentUserId={currentUser?.id}
                      searchKeyword={messageSearchKeyword}
                      isEditing={editingMessageId === messageId}
                      editingText={editingText}
                      isHovered={hoveredMessageId === messageId}
                      isPickerOpen={pickerOpenMessageId === messageId}
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

              {typingSenders[selectedTargetUserId] && (
                <div className={styles.typingHint}>
                  {`${typingSenders[selectedTargetUserId].userName ?? ""} 正在输入...`}
                </div>
              )}

              <MessageComposer
                value={composerValue}
                onValueChange={handleComposerChange}
                onKeyDown={handleComposerKeyDown}
                onSend={handleSend}
                pending={sendPending}
                attachmentFile={attachmentFile}
                onAttachmentSelected={handleAttachmentSelected}
                onClearAttachment={handleClearAttachment}
              />

              <ConfirmDialog
                open={deleteMessageId !== null}
                onOpenChange={(open) => {
                  if (!open) setDeleteMessageId(null);
                }}
                title={"删除"}
                description={"确定要删除此消息吗？"}
                confirmLabel={"删除"}
                cancelLabel={"取消"}
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
