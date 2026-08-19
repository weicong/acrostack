/* oxlint-disable */

import type { UseMutationOptions, UseMutationResult, QueryClient } from "@tanstack/react-query";
import type { RequestConfig, ResponseErrorConfig } from "../../.kubb/client";
import type {
  ReactionPublicDeleteOptions,
  ReactionPublicDeleteStatus200,
  ReactionPublicDeleteStatus204,
  ReactionPublicDeleteStatus400,
  ReactionPublicDeleteStatus401,
  ReactionPublicDeleteStatus403,
  ReactionPublicDeleteStatus404,
  ReactionPublicDeleteStatus500,
  ReactionPublicDeleteStatus501,
} from "../../models/reactionPublic/ReactionPublicDelete";
import { mutationOptions, useMutation } from "@tanstack/react-query";
import { reactionPublicDelete } from "../../clients/reactionPublic/reactionPublicDelete";

export const reactionPublicDeleteMutationKey = () =>
  [{ url: "/api/cms-kit-public/reactions/:entityType/:entityId/:reaction" }] as const;

export function reactionPublicDeleteMutationOptions<TContext = unknown>(
  config: Partial<Omit<RequestConfig, "path" | "query" | "body" | "headers" | "url">> = {},
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
    ReactionPublicDeleteOptions,
    TContext
  >({
    mutationKey,
    mutationFn: async ({ path }) => {
      const { data } = await reactionPublicDelete({ ...config, path, throwOnError: true });
      return data;
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
      ReactionPublicDeleteOptions,
      TContext
    > & { client?: QueryClient };
    client?: Partial<Omit<RequestConfig, "path" | "query" | "body" | "headers" | "url">>;
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
    ReactionPublicDeleteOptions,
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
    ReactionPublicDeleteOptions,
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
    ReactionPublicDeleteOptions,
    TContext
  >;
}
