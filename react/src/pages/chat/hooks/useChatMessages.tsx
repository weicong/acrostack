/**
 * 聊天消息聚合 hook：消息列表查询、行内编辑、删除、已读标记与自动滚动。
 */
import { useCallback, useEffect, useRef, useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import type { useToastController } from "@fluentui/react-components";
import {
  useConversationGetMessageList,
  conversationGetMessageListQueryKey,
} from "@/api/hooks/conversation/useConversationGetMessageList";
import { conversationGetListQueryKey } from "@/api/hooks/conversation/useConversationGetList";
import { contactGetListQueryKey } from "@/api/hooks/contact/useContactGetList";
import { useConversationMarkAsRead } from "@/api/hooks/conversation/useConversationMarkAsRead";
import { useConversationEditMessage } from "@/api/hooks/conversation/useConversationEditMessage";
import { useConversationDeleteMessage } from "@/api/hooks/conversation/useConversationDeleteMessage";
import { conversationGetReactionsQueryKey } from "@/api/hooks/conversation/useConversationGetReactions";
import { extractAbpErrorMessage } from "@/lib/http/error";
import { MESSAGE_PAGE } from "../constants/chat";
import type { AcroStackChatChatMessageDto as ChatMessageDto } from "@/api/models/acroStack/chat/ChatMessageDto";

interface UseChatMessagesOptions {
  selectedTargetUserId: string | null;
  queryClient: ReturnType<typeof useQueryClient>;
  dispatchToast: ReturnType<typeof useToastController>["dispatchToast"];
}

export function useChatMessages({
  selectedTargetUserId,
  queryClient,
  dispatchToast,
}: UseChatMessagesOptions) {
  const [editingMessageId, setEditingMessageId] = useState<string | null>(null);
  const [editingText, setEditingText] = useState("");
  const [deleteMessageId, setDeleteMessageId] = useState<string | null>(null);

  const messageListRef = useRef<HTMLDivElement | null>(null);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

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
  const markAsReadMutation = useConversationMarkAsRead();
  const editMessageMutation = useConversationEditMessage();
  const deleteMessageMutation = useConversationDeleteMessage();

  const messages = messagesQuery.data?.items ?? [];

  useEffect(() => {
    const list = messageListRef.current;
    if (!list) return;
    list.scrollTop = list.scrollHeight;
  }, [messages]);

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

  const handleStartEdit = useCallback((message: ChatMessageDto) => {
    if (!message.id) return;
    setEditingMessageId(message.id);
    setEditingText(message.text ?? "");
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

  const resetMessageState = useCallback(() => {
    setEditingMessageId(null);
    setEditingText("");
    setDeleteMessageId(null);
  }, []);

  return {
    messages,
    messagesQuery,
    editingMessageId,
    editingText,
    deleteMessageId,
    editPending: editMessageMutation.isPending,
    deletePending: deleteMessageMutation.isPending,
    messageListRef,
    messagesEndRef,
    handleStartEdit,
    handleCancelEdit,
    handleSaveEdit,
    handleConfirmDelete,
    setEditingText,
    setDeleteMessageId,
    resetMessageState,
  };
}
