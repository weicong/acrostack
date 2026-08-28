/**
 * 聊天消息反应聚合 hook：切换表情反应并失效反应缓存。
 */
import { useCallback } from "react";
import { useQueryClient } from "@tanstack/react-query";
import type { useToastController } from "@fluentui/react-components";
import { useConversationToggleReaction } from "@/api/hooks/conversation/useConversationToggleReaction";
import { conversationGetReactionsQueryKey } from "@/api/hooks/conversation/useConversationGetReactions";
import { extractAbpErrorMessage } from "@/lib/http/error";

interface UseChatReactionsOptions {
  queryClient: ReturnType<typeof useQueryClient>;
  dispatchToast: ReturnType<typeof useToastController>["dispatchToast"];
}

export function useChatReactions({ queryClient, dispatchToast }: UseChatReactionsOptions) {
  const toggleReactionMutation = useConversationToggleReaction();

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

  return {
    reactionPending: toggleReactionMutation.isPending,
    handleToggleReaction,
  };
}
