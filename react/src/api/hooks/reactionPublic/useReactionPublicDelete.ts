/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type { UseMutationOptions, UseMutationResult, QueryClient } from "@tanstack/react-query";
import type {
  ReactionPublicDeletePathEntityType,
  ReactionPublicDeletePathEntityId,
  ReactionPublicDeletePathReaction,
  ReactionPublicDeleteStatus200,
  ReactionPublicDeleteStatus204,
  ReactionPublicDeleteStatus400,
  ReactionPublicDeleteStatus401,
  ReactionPublicDeleteStatus403,
  ReactionPublicDeleteStatus404,
  ReactionPublicDeleteStatus500,
  ReactionPublicDeleteStatus501,
} from "../../models/reactionPublic/ReactionPublicDelete.ts";
import { mutationOptions, useMutation } from "@tanstack/react-query";
import { reactionPublicDelete } from "../../clients/reactionPublic/reactionPublicDelete.ts";

export const reactionPublicDeleteMutationKey = () =>
  [{ url: "/api/cms-kit-public/reactions/:entityType/:entityId/:reaction" }] as const;

export function reactionPublicDeleteMutationOptions<TContext = unknown>(
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const mutationKey = reactionPublicDeleteMutationKey();
  return mutationOptions<
    ReactionPublicDeleteStatus200 | ReactionPublicDeleteStatus204,
    ResponseErrorConfig<
      | ReactionPublicDeleteStatus400
      | ReactionPublicDeleteStatus401
      | ReactionPublicDeleteStatus403
      | ReactionPublicDeleteStatus404
      | ReactionPublicDeleteStatus500
      | ReactionPublicDeleteStatus501
    >,
    {
      entityType: ReactionPublicDeletePathEntityType;
      entityId: ReactionPublicDeletePathEntityId;
      reaction: ReactionPublicDeletePathReaction;
    },
    TContext
  >({
    mutationKey,
    mutationFn: async ({ entityType, entityId, reaction }) => {
      return reactionPublicDelete(entityType, entityId, reaction, config);
    },
  });
}

/**
 * {@link /api/cms-kit-public/reactions/:entityType/:entityId/:reaction}
 */
export function useReactionPublicDelete<TContext>(
  options: {
    mutation?: UseMutationOptions<
      ReactionPublicDeleteStatus200 | ReactionPublicDeleteStatus204,
      ResponseErrorConfig<
        | ReactionPublicDeleteStatus400
        | ReactionPublicDeleteStatus401
        | ReactionPublicDeleteStatus403
        | ReactionPublicDeleteStatus404
        | ReactionPublicDeleteStatus500
        | ReactionPublicDeleteStatus501
      >,
      {
        entityType: ReactionPublicDeletePathEntityType;
        entityId: ReactionPublicDeletePathEntityId;
        reaction: ReactionPublicDeletePathReaction;
      },
      TContext
    > & { client?: QueryClient };
    client?: Partial<RequestConfig> & { client?: Client };
  } = {},
) {
  const { mutation = {}, client: config = {} } = options ?? {};
  const { client: queryClient, ...mutationOptions } = mutation;
  const mutationKey = mutationOptions.mutationKey ?? reactionPublicDeleteMutationKey();

  const baseOptions = reactionPublicDeleteMutationOptions(config) as UseMutationOptions<
    ReactionPublicDeleteStatus200 | ReactionPublicDeleteStatus204,
    ResponseErrorConfig<
      | ReactionPublicDeleteStatus400
      | ReactionPublicDeleteStatus401
      | ReactionPublicDeleteStatus403
      | ReactionPublicDeleteStatus404
      | ReactionPublicDeleteStatus500
      | ReactionPublicDeleteStatus501
    >,
    {
      entityType: ReactionPublicDeletePathEntityType;
      entityId: ReactionPublicDeletePathEntityId;
      reaction: ReactionPublicDeletePathReaction;
    },
    TContext
  >;

  return useMutation<
    ReactionPublicDeleteStatus200 | ReactionPublicDeleteStatus204,
    ResponseErrorConfig<
      | ReactionPublicDeleteStatus400
      | ReactionPublicDeleteStatus401
      | ReactionPublicDeleteStatus403
      | ReactionPublicDeleteStatus404
      | ReactionPublicDeleteStatus500
      | ReactionPublicDeleteStatus501
    >,
    {
      entityType: ReactionPublicDeletePathEntityType;
      entityId: ReactionPublicDeletePathEntityId;
      reaction: ReactionPublicDeletePathReaction;
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
    ReactionPublicDeleteStatus200 | ReactionPublicDeleteStatus204,
    ResponseErrorConfig<
      | ReactionPublicDeleteStatus400
      | ReactionPublicDeleteStatus401
      | ReactionPublicDeleteStatus403
      | ReactionPublicDeleteStatus404
      | ReactionPublicDeleteStatus500
      | ReactionPublicDeleteStatus501
    >,
    {
      entityType: ReactionPublicDeletePathEntityType;
      entityId: ReactionPublicDeletePathEntityId;
      reaction: ReactionPublicDeletePathReaction;
    },
    TContext
  >;
}
