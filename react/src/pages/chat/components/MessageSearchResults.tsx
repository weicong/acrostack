/**
 * 消息搜索结果面板：展示 search-messages 命中的消息，点击跳转到对应会话。
 */
import { Spinner, Text } from "@fluentui/react-components";
import { format } from "date-fns";
import { highlightText } from "../utils/highlightText";
import { useChatStyles } from "../styles/chat";
import type { AcroStackChatChatMessageDto as ChatMessageDto } from "@/api/models/acroStack/chat/ChatMessageDto";

interface MessageSearchResultsProps {
  results: ChatMessageDto[] | null;
  keyword: string;
  isSearching: boolean;
  currentUserId?: string;
  onSelectConversation: (peerId: string) => void;
}

export function MessageSearchResults({
  results,
  keyword,
  isSearching,
  currentUserId,
  onSelectConversation,
}: MessageSearchResultsProps) {
  const styles = useChatStyles();
  if (!results) return null;

  return (
    <div className={styles.searchResultsPanel}>
      {isSearching ? (
        <Spinner size="tiny" />
      ) : results.length === 0 ? (
        <Text size={200}>{"未找到相关消息"}</Text>
      ) : (
        results.map((m) => {
          const peerId =
            m.senderUserId && m.senderUserId !== currentUserId ? m.senderUserId : m.receiverUserId;
          return (
            <button
              key={m.id ?? `${m.sendTime}-${m.text}`}
              type="button"
              className={styles.searchResultRow}
              onClick={() => {
                if (peerId) onSelectConversation(peerId);
              }}
            >
              <span className={styles.searchResultText}>
                {highlightText(m.text ?? "", keyword, styles.searchHighlight)}
              </span>
              <span className={styles.searchResultMeta}>
                {m.sendTime ? format(new Date(m.sendTime), "yyyy-MM-dd HH:mm") : ""}
              </span>
            </button>
          );
        })
      )}
    </div>
  );
}
