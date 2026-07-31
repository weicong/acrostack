/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type { UseMutationOptions, UseMutationResult, QueryClient } from "@tanstack/react-query";
import type {
  ReactionToggleData,
  ReactionToggleStatus200,
  ReactionToggleStatus400,
  ReactionToggleStatus401,
  ReactionToggleStatus403,
  ReactionToggleStatus404,
  ReactionToggleStatus500,
  ReactionToggleStatus501,
} from "../../models/reaction/ReactionToggle.ts";
import { mutationOptions, useMutation } from "@tanstack/react-query";
import { reactionToggle } from "../../clients/reaction/reactionToggle.ts";

export const reactionToggleMutationKey = () => [{ url: "/api/app/reaction/toggle" }] as const;

export function reactionToggleMutationOptions<TContext = unknown>(
  config: Partial<RequestConfig<ReactionToggleData>> & {
    client?: Client;
    contentType?: "application/json" | "text/json" | "application/*+json";
  } = {},
) {
  const mutationKey = reactionToggleMutationKey();
  return mutationOptions<
    ReactionToggleStatus200,
    ResponseErrorConfig<
      | ReactionToggleStatus400
      | ReactionToggleStatus401
      | ReactionToggleStatus403
      | ReactionToggleStatus404
      | ReactionToggleStatus500
      | ReactionToggleStatus501
    >,
    { data?: ReactionToggleData },
    TContext
  >({
    mutationKey,
    mutationFn: async ({ data }) => {
      return reactionToggle(data, config);
    },
  });
}

/**
 * {@link /api/app/reaction/toggle}
 */
export function useReactionToggle<TContext>(
  options: {
    mutation?: UseMutationOptions<
      ReactionToggleStatus200,
      ResponseErrorConfig<
        | ReactionToggleStatus400
        | ReactionToggleStatus401
        | ReactionToggleStatus403
        | ReactionToggleStatus404
        | ReactionToggleStatus500
        | ReactionToggleStatus501
      >,
      { data?: ReactionToggleData },
      TContext
    > & { client?: QueryClient };
    client?: Partial<RequestConfig<ReactionToggleData>> & {
      client?: Client;
      contentType?: "application/json" | "text/json" | "application/*+json";
    };
  } = {},
) {
  const { mutation = {}, client: config = {} } = options ?? {};
  const { client: queryClient, ...mutationOptions } = mutation;
  const mutationKey = mutationOptions.mutationKey ?? reactionToggleMutationKey();

  const baseOptions = reactionToggleMutationOptions(config) as UseMutationOptions<
    ReactionToggleStatus200,
    ResponseErrorConfig<
      | ReactionToggleStatus400
      | ReactionToggleStatus401
      | ReactionToggleStatus403
      | ReactionToggleStatus404
      | ReactionToggleStatus500
      | ReactionToggleStatus501
    >,
    { data?: ReactionToggleData },
    TContext
  >;

  return useMutation<
    ReactionToggleStatus200,
    ResponseErrorConfig<
      | ReactionToggleStatus400
      | ReactionToggleStatus401
      | ReactionToggleStatus403
      | ReactionToggleStatus404
      | ReactionToggleStatus500
      | ReactionToggleStatus501
    >,
    { data?: ReactionToggleData },
    TContext
  >(
    {
      ...baseOptions,
      mutationKey,
      ...mutationOptions,
    },
    queryClient,
  ) as UseMutationResult<
    ReactionToggleStatus200,
    ResponseErrorConfig<
      | ReactionToggleStatus400
      | ReactionToggleStatus401
      | ReactionToggleStatus403
      | ReactionToggleStatus404
      | ReactionToggleStatus500
      | ReactionToggleStatus501
    >,
    { data?: ReactionToggleData },
    TContext
  >;
}
