/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type { UseMutationOptions, UseMutationResult, QueryClient } from "@tanstack/react-query";
import type {
  ReactionPublicCreatePathEntityType,
  ReactionPublicCreatePathEntityId,
  ReactionPublicCreatePathReaction,
  ReactionPublicCreateStatus200,
  ReactionPublicCreateStatus204,
  ReactionPublicCreateStatus400,
  ReactionPublicCreateStatus401,
  ReactionPublicCreateStatus403,
  ReactionPublicCreateStatus404,
  ReactionPublicCreateStatus500,
  ReactionPublicCreateStatus501,
} from "../../models/reactionPublic/ReactionPublicCreate.ts";
import { mutationOptions, useMutation } from "@tanstack/react-query";
import { reactionPublicCreate } from "../../clients/reactionPublic/reactionPublicCreate.ts";

export const reactionPublicCreateMutationKey = () =>
  [{ url: "/api/cms-kit-public/reactions/:entityType/:entityId/:reaction" }] as const;

export function reactionPublicCreateMutationOptions<TContext = unknown>(
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const mutationKey = reactionPublicCreateMutationKey();
  return mutationOptions<
    ReactionPublicCreateStatus200 | ReactionPublicCreateStatus204,
    ResponseErrorConfig<
      | ReactionPublicCreateStatus400
      | ReactionPublicCreateStatus401
      | ReactionPublicCreateStatus403
      | ReactionPublicCreateStatus404
      | ReactionPublicCreateStatus500
      | ReactionPublicCreateStatus501
    >,
    {
      entityType: ReactionPublicCreatePathEntityType;
      entityId: ReactionPublicCreatePathEntityId;
      reaction: ReactionPublicCreatePathReaction;
    },
    TContext
  >({
    mutationKey,
    mutationFn: async ({ entityType, entityId, reaction }) => {
      return reactionPublicCreate(entityType, entityId, reaction, config);
    },
  });
}

/**
 * {@link /api/cms-kit-public/reactions/:entityType/:entityId/:reaction}
 */
export function useReactionPublicCreate<TContext>(
  options: {
    mutation?: UseMutationOptions<
      ReactionPublicCreateStatus200 | ReactionPublicCreateStatus204,
      ResponseErrorConfig<
        | ReactionPublicCreateStatus400
        | ReactionPublicCreateStatus401
        | ReactionPublicCreateStatus403
        | ReactionPublicCreateStatus404
        | ReactionPublicCreateStatus500
        | ReactionPublicCreateStatus501
      >,
      {
        entityType: ReactionPublicCreatePathEntityType;
        entityId: ReactionPublicCreatePathEntityId;
        reaction: ReactionPublicCreatePathReaction;
      },
      TContext
    > & { client?: QueryClient };
    client?: Partial<RequestConfig> & { client?: Client };
  } = {},
) {
  const { mutation = {}, client: config = {} } = options ?? {};
  const { client: queryClient, ...mutationOptions } = mutation;
  const mutationKey = mutationOptions.mutationKey ?? reactionPublicCreateMutationKey();

  const baseOptions = reactionPublicCreateMutationOptions(config) as UseMutationOptions<
    ReactionPublicCreateStatus200 | ReactionPublicCreateStatus204,
    ResponseErrorConfig<
      | ReactionPublicCreateStatus400
      | ReactionPublicCreateStatus401
      | ReactionPublicCreateStatus403
      | ReactionPublicCreateStatus404
      | ReactionPublicCreateStatus500
      | ReactionPublicCreateStatus501
    >,
    {
      entityType: ReactionPublicCreatePathEntityType;
      entityId: ReactionPublicCreatePathEntityId;
      reaction: ReactionPublicCreatePathReaction;
    },
    TContext
  >;

  return useMutation<
    ReactionPublicCreateStatus200 | ReactionPublicCreateStatus204,
    ResponseErrorConfig<
      | ReactionPublicCreateStatus400
      | ReactionPublicCreateStatus401
      | ReactionPublicCreateStatus403
      | ReactionPublicCreateStatus404
      | ReactionPublicCreateStatus500
      | ReactionPublicCreateStatus501
    >,
    {
      entityType: ReactionPublicCreatePathEntityType;
      entityId: ReactionPublicCreatePathEntityId;
      reaction: ReactionPublicCreatePathReaction;
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
    ReactionPublicCreateStatus200 | ReactionPublicCreateStatus204,
    ResponseErrorConfig<
      | ReactionPublicCreateStatus400
      | ReactionPublicCreateStatus401
      | ReactionPublicCreateStatus403
      | ReactionPublicCreateStatus404
      | ReactionPublicCreateStatus500
      | ReactionPublicCreateStatus501
    >,
    {
      entityType: ReactionPublicCreatePathEntityType;
      entityId: ReactionPublicCreatePathEntityId;
      reaction: ReactionPublicCreatePathReaction;
    },
    TContext
  >;
}
