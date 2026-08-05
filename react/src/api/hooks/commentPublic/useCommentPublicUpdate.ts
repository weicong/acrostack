/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type { UseMutationOptions, UseMutationResult, QueryClient } from "@tanstack/react-query";
import type {
  CommentPublicUpdateData,
  CommentPublicUpdatePathId,
  CommentPublicUpdateStatus200,
  CommentPublicUpdateStatus400,
  CommentPublicUpdateStatus401,
  CommentPublicUpdateStatus403,
  CommentPublicUpdateStatus404,
  CommentPublicUpdateStatus500,
  CommentPublicUpdateStatus501,
} from "../../models/commentPublic/CommentPublicUpdate.ts";
import { mutationOptions, useMutation } from "@tanstack/react-query";
import { commentPublicUpdate } from "../../clients/commentPublic/commentPublicUpdate.ts";

export const commentPublicUpdateMutationKey = () =>
  [{ url: "/api/cms-kit-public/comments/:id" }] as const;

export function commentPublicUpdateMutationOptions<TContext = unknown>(
  config: Partial<RequestConfig<CommentPublicUpdateData>> & {
    client?: Client;
    contentType?: "application/json" | "text/json" | "application/*+json";
  } = {},
) {
  const mutationKey = commentPublicUpdateMutationKey();
  return mutationOptions<
    CommentPublicUpdateStatus200,
    ResponseErrorConfig<
      | CommentPublicUpdateStatus400
      | CommentPublicUpdateStatus401
      | CommentPublicUpdateStatus403
      | CommentPublicUpdateStatus404
      | CommentPublicUpdateStatus500
      | CommentPublicUpdateStatus501
    >,
    { id: CommentPublicUpdatePathId; data?: CommentPublicUpdateData },
    TContext
  >({
    mutationKey,
    mutationFn: async ({ id, data }) => {
      return commentPublicUpdate(id, data, config);
    },
  });
}

/**
 * {@link /api/cms-kit-public/comments/:id}
 */
export function useCommentPublicUpdate<TContext>(
  options: {
    mutation?: UseMutationOptions<
      CommentPublicUpdateStatus200,
      ResponseErrorConfig<
        | CommentPublicUpdateStatus400
        | CommentPublicUpdateStatus401
        | CommentPublicUpdateStatus403
        | CommentPublicUpdateStatus404
        | CommentPublicUpdateStatus500
        | CommentPublicUpdateStatus501
      >,
      { id: CommentPublicUpdatePathId; data?: CommentPublicUpdateData },
      TContext
    > & { client?: QueryClient };
    client?: Partial<RequestConfig<CommentPublicUpdateData>> & {
      client?: Client;
      contentType?: "application/json" | "text/json" | "application/*+json";
    };
  } = {},
) {
  const { mutation = {}, client: config = {} } = options ?? {};
  const { client: queryClient, ...mutationOptions } = mutation;
  const mutationKey = mutationOptions.mutationKey ?? commentPublicUpdateMutationKey();

  const baseOptions = commentPublicUpdateMutationOptions(config) as UseMutationOptions<
    CommentPublicUpdateStatus200,
    ResponseErrorConfig<
      | CommentPublicUpdateStatus400
      | CommentPublicUpdateStatus401
      | CommentPublicUpdateStatus403
      | CommentPublicUpdateStatus404
      | CommentPublicUpdateStatus500
      | CommentPublicUpdateStatus501
    >,
    { id: CommentPublicUpdatePathId; data?: CommentPublicUpdateData },
    TContext
  >;

  return useMutation<
    CommentPublicUpdateStatus200,
    ResponseErrorConfig<
      | CommentPublicUpdateStatus400
      | CommentPublicUpdateStatus401
      | CommentPublicUpdateStatus403
      | CommentPublicUpdateStatus404
      | CommentPublicUpdateStatus500
      | CommentPublicUpdateStatus501
    >,
    { id: CommentPublicUpdatePathId; data?: CommentPublicUpdateData },
    TContext
  >(
    {
      ...baseOptions,
      mutationKey,
      ...mutationOptions,
    },
    queryClient,
  ) as UseMutationResult<
    CommentPublicUpdateStatus200,
    ResponseErrorConfig<
      | CommentPublicUpdateStatus400
      | CommentPublicUpdateStatus401
      | CommentPublicUpdateStatus403
      | CommentPublicUpdateStatus404
      | CommentPublicUpdateStatus500
      | CommentPublicUpdateStatus501
    >,
    { id: CommentPublicUpdatePathId; data?: CommentPublicUpdateData },
    TContext
  >;
}
