/**
 * 聊天屏蔽聚合 hook：屏蔽 / 取消屏蔽联系人并失效联系人缓存。
 */
import { useCallback } from "react";
import { useQueryClient } from "@tanstack/react-query";
import type { useToastController } from "@fluentui/react-components";
import { useChatBlockBlockUser } from "@/api/hooks/chatBlock/useChatBlockBlockUser";
import { useChatBlockUnblockUser } from "@/api/hooks/chatBlock/useChatBlockUnblockUser";
import { contactGetListQueryKey } from "@/api/hooks/contact/useContactGetList";
import { extractAbpErrorMessage } from "@/lib/http/error";

interface UseChatBlockOptions {
  queryClient: ReturnType<typeof useQueryClient>;
  dispatchToast: ReturnType<typeof useToastController>["dispatchToast"];
}

export function useChatBlock({ queryClient, dispatchToast }: UseChatBlockOptions) {
  const blockUserMutation = useChatBlockBlockUser();
  const unblockUserMutation = useChatBlockUnblockUser();

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

  return {
    blockPending: blockUserMutation.isPending,
    unblockPending: unblockUserMutation.isPending,
    handleBlockUser,
    handleUnblockUser,
  };
}
