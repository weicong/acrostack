/**
 * 聊天页主组件：双栏实时聊天（会话侧栏 + 消息区）。
 *
 * 数据全部来自 Kubb 生成的 hooks（conversation/contact/chatBlock/chat 四组）；
 * SignalR 实时事件由 useChatRealtime 统一映射为 TanStack Query 缓存失效；
 * "正在输入"通知由 useTypingNotifier 防抖处理。
 *
 * 业务逻辑拆分到 hooks/：
 *   - useChatMessages：消息列表查询 / 编辑 / 删除 / 已读标记 / 自动滚动
 *   - useChatSend：发送（纯文本 + 附件）/ 输入态
 *   - useChatReactions：表情反应 toggle
 *   - useChatSearch：消息搜索
 *   - useChatBlock：屏蔽 / 取消屏蔽
 *   - useChatAttachments：附件下载
 *
 * UI 拆分到 components/：
 *   - ChatSidebar：会话/联系人页签、搜索、屏蔽菜单（内部状态）
 *   - MessageBubble：单条气泡（悬停操作/行内编辑/反应/附件下载）
 *   - MessageSearchResults：消息搜索结果面板
 *   - MessageComposer：输入区（附件选择已内部化）
 */
import { useCallback, useMemo, useState } from "react";
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
import { useChatMessages } from "./hooks/useChatMessages";
import { useChatSend } from "./hooks/useChatSend";
import { useChatReactions } from "./hooks/useChatReactions";
import { useChatSearch } from "./hooks/useChatSearch";
import { useChatBlock } from "./hooks/useChatBlock";
import { useChatAttachments } from "./hooks/useChatAttachments";
import { useChatStyles } from "./styles/chat";
import { useCurrentUser } from "@/lib/auth/permissions";
import { useConversationGetList } from "@/api/hooks/conversation/useConversationGetList";
import { useContactGetList } from "@/api/hooks/contact/useContactGetList";
import { useContactGetTotalUnreadMessageCount } from "@/api/hooks/contact/useContactGetTotalUnreadMessageCount";

export function ChatPage() {
  const styles = useChatStyles();
  const queryClient = useQueryClient();
  const { dispatchToast } = useToastController();
  const currentUser = useCurrentUser();

  const [selectedTargetUserId, setSelectedTargetUserId] = useState<string | null>(null);
  const [hoveredMessageId, setHoveredMessageId] = useState<string | null>(null);
  const [pickerOpenMessageId, setPickerOpenMessageId] = useState<string | null>(null);

  const conversationsQuery = useConversationGetList();
  const contactsQuery = useContactGetList();
  const totalUnreadQuery = useContactGetTotalUnreadMessageCount();

  const { connection, isConnecting, error: hubError } = useChatConnection();
  const { typingSenders, clearTyping } = useChatRealtime({
    connection,
    selectedTargetUserId,
    currentUserId: currentUser?.id,
  });
  const notifier = useTypingNotifier(connection, selectedTargetUserId);

  const messages = useChatMessages({ selectedTargetUserId, queryClient, dispatchToast });
  const send = useChatSend({ selectedTargetUserId, notifier, queryClient, dispatchToast });
  const reactions = useChatReactions({ queryClient, dispatchToast });
  const search = useChatSearch({ dispatchToast });
  const block = useChatBlock({ queryClient, dispatchToast });
  const attachments = useChatAttachments({ dispatchToast });

  const conversations = conversationsQuery.data?.items ?? [];
  const contacts = contactsQuery.data?.items ?? [];
  const totalUnread = (totalUnreadQuery.data as number | undefined) ?? 0;

  const selectedConversation = useMemo(
    () => conversations.find((c) => c.targetUserId === selectedTargetUserId) ?? null,
    [conversations, selectedTargetUserId],
  );
  const selectedContact = useMemo(
    () => contacts.find((c) => c.userId === selectedTargetUserId) ?? null,
    [contacts, selectedTargetUserId],
  );

  const handleSelectConversation = useCallback(
    (targetUserId: string) => {
      setSelectedTargetUserId(targetUserId);
      messages.resetMessageState();
      send.resetSendState();
      search.resetSearch();
      setPickerOpenMessageId(null);
      clearTyping();
      notifier.reset();
    },
    [clearTyping, notifier, messages, send, search],
  );

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
          onBlockUser={block.handleBlockUser}
          onUnblockUser={block.handleUnblockUser}
          blockPending={block.blockPending}
          unblockPending={block.unblockPending}
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
                    value={search.messageSearchKeyword}
                    onChange={(_, data) => search.handleMessageSearch(data.value)}
                    contentBefore={<Search20Regular />}
                  />
                </div>
              </div>

              <MessageSearchResults
                results={search.searchResults}
                keyword={search.messageSearchKeyword}
                isSearching={search.isSearchingMessages}
                currentUserId={currentUser?.id}
                onSelectConversation={handleSelectConversation}
              />

              <div ref={messages.messageListRef} className={styles.messageList}>
                {messages.messagesQuery.isLoading && <Spinner size="tiny" />}
                {messages.messagesQuery.isError && (
                  <Text size={200} style={{ color: tokens.colorPaletteRedForeground3 }}>
                    {String(messages.messagesQuery.error)}
                  </Text>
                )}
                {messages.messages.map((m) => {
                  const messageId = m.id;
                  return (
                    <MessageBubble
                      key={messageId ?? `${m.sendTime}-${m.text}`}
                      message={m}
                      isSent={m.side === 0}
                      currentUserId={currentUser?.id}
                      searchKeyword={search.messageSearchKeyword}
                      isEditing={messages.editingMessageId === messageId}
                      editingText={messages.editingText}
                      isHovered={hoveredMessageId === messageId}
                      isPickerOpen={pickerOpenMessageId === messageId}
                      editPending={messages.editPending}
                      reactionPending={reactions.reactionPending}
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
                      onEditStart={() => messages.handleStartEdit(m)}
                      onEditCancel={messages.handleCancelEdit}
                      onEditTextChange={messages.setEditingText}
                      onEditSave={messages.handleSaveEdit}
                      onDeleteRequest={() => messages.setDeleteMessageId(messageId ?? null)}
                      onToggleReaction={(reaction) =>
                        reactions.handleToggleReaction(messageId, reaction)
                      }
                      onDownloadAttachment={() =>
                        attachments.handleDownloadAttachment(messageId, m.attachmentName)
                      }
                    />
                  );
                })}
                <div ref={messages.messagesEndRef} />
              </div>

              {typingSenders[selectedTargetUserId] && (
                <div className={styles.typingHint}>
                  {`${typingSenders[selectedTargetUserId].userName ?? ""} 正在输入...`}
                </div>
              )}

              <MessageComposer
                value={send.composerValue}
                onValueChange={send.handleComposerChange}
                onKeyDown={send.handleComposerKeyDown}
                onSend={send.handleSend}
                pending={send.sendPending}
                attachmentFile={send.attachmentFile}
                onAttachmentSelected={send.handleAttachmentSelected}
                onClearAttachment={send.handleClearAttachment}
              />

              <ConfirmDialog
                open={messages.deleteMessageId !== null}
                onOpenChange={(open) => {
                  if (!open) messages.setDeleteMessageId(null);
                }}
                title={"删除"}
                description={"确定要删除此消息吗？"}
                confirmLabel={"删除"}
                cancelLabel={"取消"}
                variant="destructive"
                onConfirm={messages.handleConfirmDelete}
                isPending={messages.deletePending}
              />
            </>
          )}
        </section>
      </div>
    </PageLayout>
  );
}
