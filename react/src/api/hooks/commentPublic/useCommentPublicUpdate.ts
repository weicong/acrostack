/* oxlint-disable */

import type { UseMutationOptions, UseMutationResult, QueryClient } from "@tanstack/react-query";
import type { RequestConfig, ResponseErrorConfig } from "../../.kubb/client";
import type {
  CommentPublicUpdateOptions,
  CommentPublicUpdateStatus200,
  CommentPublicUpdateStatus400,
  CommentPublicUpdateStatus401,
  CommentPublicUpdateStatus403,
  CommentPublicUpdateStatus404,
  CommentPublicUpdateStatus500,
  CommentPublicUpdateStatus501,
} from "../../models/commentPublic/CommentPublicUpdate";
import { mutationOptions, useMutation } from "@tanstack/react-query";
import { commentPublicUpdate } from "../../clients/commentPublic/commentPublicUpdate";

export const commentPublicUpdateMutationKey = () =>
  [{ url: "/api/cms-kit-public/comments/:id" }] as const;

export function commentPublicUpdateMutationOptions<TContext = unknown>(
  config: Partial<Omit<RequestConfig, "path" | "query" | "body" | "headers" | "url">> & {
    contentType?: {
      request?: "application/json" | "text/json" | "application/*+json";
      response?: "text/plain" | "application/json" | "text/json";
    };
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
    CommentPublicUpdateOptions,
    TContext
  >({
    mutationKey,
    mutationFn: async ({ path, body }) => {
      const { data } = await commentPublicUpdate({ ...config, path, body, throwOnError: true });
      return data;
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
      CommentPublicUpdateOptions,
      TContext
    > & { client?: QueryClient };
    client?: Partial<Omit<RequestConfig, "path" | "query" | "body" | "headers" | "url">> & {
      contentType?: {
        request?: "application/json" | "text/json" | "application/*+json";
        response?: "text/plain" | "application/json" | "text/json";
      };
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
    CommentPublicUpdateOptions,
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
    CommentPublicUpdateOptions,
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
    CommentPublicUpdateOptions,
    TContext
  >;
}
