/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  QueryKey,
  QueryClient,
  QueryObserverOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import type {
  ChatDownloadAttachmentPathMessageId,
  ChatDownloadAttachmentStatus200,
} from "../../models/chat/ChatDownloadAttachment.ts";
import { queryOptions, useQuery } from "@tanstack/react-query";
import { chatDownloadAttachment } from "../../clients/chat/chatDownloadAttachment.ts";

export const chatDownloadAttachmentQueryKey = (messageId?: ChatDownloadAttachmentPathMessageId) =>
  [
    { url: "/api/app/chat/messages/:messageId/attachment", params: { messageId: messageId } },
  ] as const;

type ChatDownloadAttachmentQueryKey = ReturnType<typeof chatDownloadAttachmentQueryKey>;

export function chatDownloadAttachmentQueryOptions(
  messageId?: ChatDownloadAttachmentPathMessageId,
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const queryKey = chatDownloadAttachmentQueryKey(messageId);
  return queryOptions<
    ChatDownloadAttachmentStatus200,
    ResponseErrorConfig<Error>,
    ChatDownloadAttachmentStatus200,
    typeof queryKey
  >({
    enabled: !!messageId,
    queryKey,
    queryFn: async ({ signal }) => {
      return chatDownloadAttachment(messageId!, { ...config, signal: config.signal ?? signal });
    },
  });
}

/**
 * {@link /api/app/chat/messages/:messageId/attachment}
 */
export function useChatDownloadAttachment<
  TData = ChatDownloadAttachmentStatus200,
  TQueryData = ChatDownloadAttachmentStatus200,
  TQueryKey extends QueryKey = ChatDownloadAttachmentQueryKey,
>(
  messageId?: ChatDownloadAttachmentPathMessageId,
  options: {
    query?: Partial<
      QueryObserverOptions<
        ChatDownloadAttachmentStatus200,
        ResponseErrorConfig<Error>,
        TData,
        TQueryData,
        TQueryKey
      >
    > & { client?: QueryClient };
    client?: Partial<RequestConfig> & { client?: Client };
  } = {},
) {
  const { query: queryConfig = {}, client: config = {} } = options ?? {};
  const { client: queryClient, ...resolvedOptions } = queryConfig;
  const queryKey = resolvedOptions?.queryKey ?? chatDownloadAttachmentQueryKey(messageId);

  const query = useQuery(
    {
      ...chatDownloadAttachmentQueryOptions(messageId, config),
      ...resolvedOptions,
      queryKey,
    } as unknown as QueryObserverOptions,
    queryClient,
  ) as UseQueryResult<TData, ResponseErrorConfig<Error>> & { queryKey: TQueryKey };

  query.queryKey = queryKey as TQueryKey;

  return query;
}
