/**
 * 聊天消息搜索聚合 hook：关键词状态与搜索 mutation。
 */
import { useCallback, useState } from "react";
import type { useToastController } from "@fluentui/react-components";
import { useConversationSearchMessages } from "@/api/hooks/conversation/useConversationSearchMessages";
import { extractAbpErrorMessage } from "@/lib/api/error";
import type { AcroStackChatChatMessageDto as ChatMessageDto } from "@/api/models/acroStack/chat/ChatMessageDto";

interface UseChatSearchOptions {
  dispatchToast: ReturnType<typeof useToastController>["dispatchToast"];
}

export function useChatSearch({ dispatchToast }: UseChatSearchOptions) {
  const [messageSearchKeyword, setMessageSearchKeyword] = useState("");
  const [searchResults, setSearchResults] = useState<ChatMessageDto[] | null>(null);
  const [isSearchingMessages, setIsSearchingMessages] = useState(false);

  const searchMessagesMutation = useConversationSearchMessages();

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

  const resetSearch = useCallback(() => {
    setMessageSearchKeyword("");
    setSearchResults(null);
    setIsSearchingMessages(false);
  }, []);

  return {
    messageSearchKeyword,
    searchResults,
    isSearchingMessages,
    handleMessageSearch,
    resetSearch,
  };
}
