/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type { UseMutationOptions, UseMutationResult, QueryClient } from "@tanstack/react-query";
import type {
  ReactionDeleteQueryEntityType,
  ReactionDeleteQueryEntityId,
  ReactionDeleteQueryReactionType,
  ReactionDeleteStatus200,
  ReactionDeleteStatus204,
  ReactionDeleteStatus400,
  ReactionDeleteStatus401,
  ReactionDeleteStatus403,
  ReactionDeleteStatus404,
  ReactionDeleteStatus500,
  ReactionDeleteStatus501,
} from "../../models/reaction/ReactionDelete.ts";
import { mutationOptions, useMutation } from "@tanstack/react-query";
import { reactionDelete } from "../../clients/reaction/reactionDelete.ts";

export const reactionDeleteMutationKey = () => [{ url: "/api/app/reaction" }] as const;

export function reactionDeleteMutationOptions<TContext = unknown>(
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const mutationKey = reactionDeleteMutationKey();
  return mutationOptions<
    ReactionDeleteStatus200 | ReactionDeleteStatus204,
    ResponseErrorConfig<
      | ReactionDeleteStatus400
      | ReactionDeleteStatus401
      | ReactionDeleteStatus403
      | ReactionDeleteStatus404
      | ReactionDeleteStatus500
      | ReactionDeleteStatus501
    >,
    {
      params?: {
        entityType?: ReactionDeleteQueryEntityType;
        entityId?: ReactionDeleteQueryEntityId;
        reactionType?: ReactionDeleteQueryReactionType;
      };
    },
    TContext
  >({
    mutationKey,
    mutationFn: async ({ params }) => {
      return reactionDelete(params, config);
    },
  });
}

/**
 * {@link /api/app/reaction}
 */
export function useReactionDelete<TContext>(
  options: {
    mutation?: UseMutationOptions<
      ReactionDeleteStatus200 | ReactionDeleteStatus204,
      ResponseErrorConfig<
        | ReactionDeleteStatus400
        | ReactionDeleteStatus401
        | ReactionDeleteStatus403
        | ReactionDeleteStatus404
        | ReactionDeleteStatus500
        | ReactionDeleteStatus501
      >,
      {
        params?: {
          entityType?: ReactionDeleteQueryEntityType;
          entityId?: ReactionDeleteQueryEntityId;
          reactionType?: ReactionDeleteQueryReactionType;
        };
      },
      TContext
    > & { client?: QueryClient };
    client?: Partial<RequestConfig> & { client?: Client };
  } = {},
) {
  const { mutation = {}, client: config = {} } = options ?? {};
  const { client: queryClient, ...mutationOptions } = mutation;
  const mutationKey = mutationOptions.mutationKey ?? reactionDeleteMutationKey();

  const baseOptions = reactionDeleteMutationOptions(config) as UseMutationOptions<
    ReactionDeleteStatus200 | ReactionDeleteStatus204,
    ResponseErrorConfig<
      | ReactionDeleteStatus400
      | ReactionDeleteStatus401
      | ReactionDeleteStatus403
      | ReactionDeleteStatus404
      | ReactionDeleteStatus500
      | ReactionDeleteStatus501
    >,
    {
      params?: {
        entityType?: ReactionDeleteQueryEntityType;
        entityId?: ReactionDeleteQueryEntityId;
        reactionType?: ReactionDeleteQueryReactionType;
      };
    },
    TContext
  >;

  return useMutation<
    ReactionDeleteStatus200 | ReactionDeleteStatus204,
    ResponseErrorConfig<
      | ReactionDeleteStatus400
      | ReactionDeleteStatus401
      | ReactionDeleteStatus403
      | ReactionDeleteStatus404
      | ReactionDeleteStatus500
      | ReactionDeleteStatus501
    >,
    {
      params?: {
        entityType?: ReactionDeleteQueryEntityType;
        entityId?: ReactionDeleteQueryEntityId;
        reactionType?: ReactionDeleteQueryReactionType;
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
    ReactionDeleteStatus200 | ReactionDeleteStatus204,
    ResponseErrorConfig<
      | ReactionDeleteStatus400
      | ReactionDeleteStatus401
      | ReactionDeleteStatus403
      | ReactionDeleteStatus404
      | ReactionDeleteStatus500
      | ReactionDeleteStatus501
    >,
    {
      params?: {
        entityType?: ReactionDeleteQueryEntityType;
        entityId?: ReactionDeleteQueryEntityId;
        reactionType?: ReactionDeleteQueryReactionType;
      };
    },
    TContext
  >;
}
