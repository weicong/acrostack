/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type { UseMutationOptions, UseMutationResult, QueryClient } from "@tanstack/react-query";
import type {
  ChatBlockIsUserBlockedQueryUserId,
  ChatBlockIsUserBlockedQueryTargetUserId,
  ChatBlockIsUserBlockedStatus200,
  ChatBlockIsUserBlockedStatus400,
  ChatBlockIsUserBlockedStatus401,
  ChatBlockIsUserBlockedStatus403,
  ChatBlockIsUserBlockedStatus404,
  ChatBlockIsUserBlockedStatus500,
  ChatBlockIsUserBlockedStatus501,
} from "../../models/chatBlock/ChatBlockIsUserBlocked.ts";
import { mutationOptions, useMutation } from "@tanstack/react-query";
import { chatBlockIsUserBlocked } from "../../clients/chatBlock/chatBlockIsUserBlocked.ts";

export const chatBlockIsUserBlockedMutationKey = () =>
  [{ url: "/api/app/chat-block/is-user-blocked" }] as const;

export function chatBlockIsUserBlockedMutationOptions<TContext = unknown>(
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const mutationKey = chatBlockIsUserBlockedMutationKey();
  return mutationOptions<
    ChatBlockIsUserBlockedStatus200,
    ResponseErrorConfig<
      | ChatBlockIsUserBlockedStatus400
      | ChatBlockIsUserBlockedStatus401
      | ChatBlockIsUserBlockedStatus403
      | ChatBlockIsUserBlockedStatus404
      | ChatBlockIsUserBlockedStatus500
      | ChatBlockIsUserBlockedStatus501
    >,
    {
      params?: {
        userId?: ChatBlockIsUserBlockedQueryUserId;
        targetUserId?: ChatBlockIsUserBlockedQueryTargetUserId;
      };
    },
    TContext
  >({
    mutationKey,
    mutationFn: async ({ params }) => {
      return chatBlockIsUserBlocked(params, config);
    },
  });
}

/**
 * {@link /api/app/chat-block/is-user-blocked}
 */
export function useChatBlockIsUserBlocked<TContext>(
  options: {
    mutation?: UseMutationOptions<
      ChatBlockIsUserBlockedStatus200,
      ResponseErrorConfig<
        | ChatBlockIsUserBlockedStatus400
        | ChatBlockIsUserBlockedStatus401
        | ChatBlockIsUserBlockedStatus403
        | ChatBlockIsUserBlockedStatus404
        | ChatBlockIsUserBlockedStatus500
        | ChatBlockIsUserBlockedStatus501
      >,
      {
        params?: {
          userId?: ChatBlockIsUserBlockedQueryUserId;
          targetUserId?: ChatBlockIsUserBlockedQueryTargetUserId;
        };
      },
      TContext
    > & { client?: QueryClient };
    client?: Partial<RequestConfig> & { client?: Client };
  } = {},
) {
  const { mutation = {}, client: config = {} } = options ?? {};
  const { client: queryClient, ...mutationOptions } = mutation;
  const mutationKey = mutationOptions.mutationKey ?? chatBlockIsUserBlockedMutationKey();

  const baseOptions = chatBlockIsUserBlockedMutationOptions(config) as UseMutationOptions<
    ChatBlockIsUserBlockedStatus200,
    ResponseErrorConfig<
      | ChatBlockIsUserBlockedStatus400
      | ChatBlockIsUserBlockedStatus401
      | ChatBlockIsUserBlockedStatus403
      | ChatBlockIsUserBlockedStatus404
      | ChatBlockIsUserBlockedStatus500
      | ChatBlockIsUserBlockedStatus501
    >,
    {
      params?: {
        userId?: ChatBlockIsUserBlockedQueryUserId;
        targetUserId?: ChatBlockIsUserBlockedQueryTargetUserId;
      };
    },
    TContext
  >;

  return useMutation<
    ChatBlockIsUserBlockedStatus200,
    ResponseErrorConfig<
      | ChatBlockIsUserBlockedStatus400
      | ChatBlockIsUserBlockedStatus401
      | ChatBlockIsUserBlockedStatus403
      | ChatBlockIsUserBlockedStatus404
      | ChatBlockIsUserBlockedStatus500
      | ChatBlockIsUserBlockedStatus501
    >,
    {
      params?: {
        userId?: ChatBlockIsUserBlockedQueryUserId;
        targetUserId?: ChatBlockIsUserBlockedQueryTargetUserId;
      };
    },
    TContext
  >(
    {
      ...baseOptions,
      mutationKey,
      ...mutationOptions,
    },
    queryClient,
  ) as UseMutationResult<
    ChatBlockIsUserBlockedStatus200,
    ResponseErrorConfig<
      | ChatBlockIsUserBlockedStatus400
      | ChatBlockIsUserBlockedStatus401
      | ChatBlockIsUserBlockedStatus403
      | ChatBlockIsUserBlockedStatus404
      | ChatBlockIsUserBlockedStatus500
      | ChatBlockIsUserBlockedStatus501
    >,
    {
      params?: {
        userId?: ChatBlockIsUserBlockedQueryUserId;
        targetUserId?: ChatBlockIsUserBlockedQueryTargetUserId;
      };
    },
    TContext
  >;
}
