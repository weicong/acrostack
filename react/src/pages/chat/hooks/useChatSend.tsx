/**
 * 聊天发送聚合 hook：输入态、附件选择与发送（纯文本 / 带附件）。
 */
import { useCallback, useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import type { useToastController } from "@fluentui/react-components";
import { useConversationSendMessage } from "@/api/hooks/conversation/useConversationSendMessage";
import { useChatSendMessageWithAttachment } from "@/api/hooks/chat/useChatSendMessageWithAttachment";
import { conversationGetMessageListQueryKey } from "@/api/hooks/conversation/useConversationGetMessageList";
import { conversationGetListQueryKey } from "@/api/hooks/conversation/useConversationGetList";
import { extractAbpErrorMessage } from "@/lib/http/error";
import { MESSAGE_PAGE } from "../constants/chat";
import type { useTypingNotifier } from "./useTypingNotifier";

interface UseChatSendOptions {
  selectedTargetUserId: string | null;
  notifier: ReturnType<typeof useTypingNotifier>;
  queryClient: ReturnType<typeof useQueryClient>;
  dispatchToast: ReturnType<typeof useToastController>["dispatchToast"];
}

export function useChatSend({
  selectedTargetUserId,
  notifier,
  queryClient,
  dispatchToast,
}: UseChatSendOptions) {
  const [composerValue, setComposerValue] = useState("");
  const [attachmentFile, setAttachmentFile] = useState<File | null>(null);

  const sendMessageMutation = useConversationSendMessage();
  const sendMessageWithAttachmentMutation = useChatSendMessageWithAttachment();

  const sendPending = sendMessageMutation.isPending || sendMessageWithAttachmentMutation.isPending;

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

  const resetSendState = useCallback(() => {
    setComposerValue("");
    setAttachmentFile(null);
  }, []);

  return {
    composerValue,
    attachmentFile,
    sendPending,
    handleSend,
    handleComposerChange,
    handleComposerKeyDown,
    handleAttachmentSelected,
    handleClearAttachment,
    resetSendState,
  };
}
