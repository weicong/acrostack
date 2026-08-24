/**
 * 聊天 SignalR 实时事件接线：把 hub 推送映射为 TanStack Query 缓存失效，
 * 使侧栏 / 消息列表 / 未读数自动刷新，并维护"正在输入"提示状态。
 *
 * 说明：不在客户端做消息合并（排序/移动等边界情况复杂），
 * 统一以服务端为准重新拉取。
 */
import { useEffect } from "react";
import type { HubConnection } from "@microsoft/signalr";
import { useQueryClient } from "@tanstack/react-query";
import { ChatClientMethods } from "../constants/chatHub";
import { conversationGetListQueryKey } from "@/api/hooks/conversation/useConversationGetList";
import { conversationGetMessageListQueryKey } from "@/api/hooks/conversation/useConversationGetMessageList";
import { conversationGetReactionsQueryKey } from "@/api/hooks/conversation/useConversationGetReactions";
import { contactGetListQueryKey } from "@/api/hooks/contact/useContactGetList";
import { contactGetTotalUnreadMessageCountQueryKey } from "@/api/hooks/contact/useContactGetTotalUnreadMessageCount";
import type { AcroStackChatChatMessageDto as ChatMessageDto } from "@/api/models/acroStack/chat/ChatMessageDto";
import { useTypingSenders } from "./useTypingSenders";

/** 消息列表分页参数（与页面查询保持一致）。 */
const MESSAGE_PAGE = { SkipCount: 0, MaxResultCount: 100 };

interface UseChatRealtimeOptions {
  connection: HubConnection | null;
  /** 当前会话对端 userId；null 表示未选择联系人。 */
  selectedTargetUserId: string | null;
  currentUserId?: string;
}

export function useChatRealtime({
  connection,
  selectedTargetUserId,
  currentUserId,
}: UseChatRealtimeOptions) {
  const queryClient = useQueryClient();
  const { typingSenders, addSender, removeSender, clearSenders } = useTypingSenders();

  useEffect(() => {
    if (!connection) return;

    const invalidateMessages = (targetUserId: string) => {
      void queryClient.invalidateQueries({
        queryKey: conversationGetMessageListQueryKey({
          query: { TargetUserId: targetUserId, ...MESSAGE_PAGE },
        }),
      });
    };
    const invalidateAllLists = () => {
      void queryClient.invalidateQueries({ queryKey: conversationGetListQueryKey() });
      void queryClient.invalidateQueries({ queryKey: contactGetListQueryKey() });
      void queryClient.invalidateQueries({
        queryKey: contactGetTotalUnreadMessageCountQueryKey(),
      });
    };

    const onReceiveMessage = (message: ChatMessageDto) => {
      invalidateAllLists();
      // 收到的消息属于当前会话时，刷新历史让新气泡出现
      if (
        selectedTargetUserId &&
        (message.senderUserId === selectedTargetUserId ||
          message.receiverUserId === selectedTargetUserId)
      ) {
        invalidateMessages(selectedTargetUserId);
      }
    };
    const onMessagesRead = (readByUserId: string) => {
      // 对方刚读了我的消息：若正是当前会话则刷新已读标记
      if (readByUserId === selectedTargetUserId) {
        invalidateMessages(readByUserId);
      }
    };
    const onUnreadCountChanged = () => {
      invalidateAllLists();
    };
    const onMessageEdited = (message: ChatMessageDto) => {
      if (
        selectedTargetUserId &&
        (message.senderUserId === selectedTargetUserId ||
          message.receiverUserId === selectedTargetUserId)
      ) {
        invalidateMessages(selectedTargetUserId);
      }
    };
    const onMessageDeleted = (messageId: string) => {
      if (selectedTargetUserId) {
        invalidateMessages(selectedTargetUserId);
      }
      void queryClient.invalidateQueries({
        queryKey: conversationGetReactionsQueryKey({ path: { messageId } }),
      });
    };
    const onReactionChanged = (messageId: string) => {
      void queryClient.invalidateQueries({
        queryKey: conversationGetReactionsQueryKey({ path: { messageId } }),
      });
    };
    const onUserOnlineStatusChanged = () => {
      // 联系人接口本身返回 isOnline，重拉即可，无需维护在线状态表
      void queryClient.invalidateQueries({ queryKey: contactGetListQueryKey() });
    };
    const onTypingNotification = (senderUserId: string, senderUserName: string | null) => {
      if (!senderUserId) return;
      // 自己的回显不显示；仅当前会话对端显示提示
      if (senderUserId === currentUserId) return;
      if (senderUserId !== selectedTargetUserId) return;
      addSender(senderUserId, senderUserName);
    };
    const onStopTypingNotification = (senderUserId: string) => {
      if (!senderUserId) return;
      removeSender(senderUserId);
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
  }, [connection, queryClient, selectedTargetUserId, currentUserId, addSender, removeSender]);

  return { typingSenders, clearTyping: clearSenders };
}
