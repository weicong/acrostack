/* oxlint-disable */

import type { UseMutationOptions, UseMutationResult, QueryClient } from "@tanstack/react-query";
import type { RequestConfig, ResponseErrorConfig } from "../../.kubb/client";
import type {
  CommentPublicDeleteOptions,
  CommentPublicDeleteStatus200,
  CommentPublicDeleteStatus204,
  CommentPublicDeleteStatus400,
  CommentPublicDeleteStatus401,
  CommentPublicDeleteStatus403,
  CommentPublicDeleteStatus404,
  CommentPublicDeleteStatus500,
  CommentPublicDeleteStatus501,
} from "../../models/commentPublic/CommentPublicDelete";
import { mutationOptions, useMutation } from "@tanstack/react-query";
import { commentPublicDelete } from "../../clients/commentPublic/commentPublicDelete";

export const commentPublicDeleteMutationKey = () =>
  [{ url: "/api/cms-kit-public/comments/:id" }] as const;

export function commentPublicDeleteMutationOptions<TContext = unknown>(
  config: Partial<Omit<RequestConfig, "path" | "query" | "body" | "headers" | "url">> = {},
) {
  const mutationKey = commentPublicDeleteMutationKey();
  return mutationOptions<
    CommentPublicDeleteStatus200 | CommentPublicDeleteStatus204,
    ResponseErrorConfig<
      | CommentPublicDeleteStatus400
      | CommentPublicDeleteStatus401
      | CommentPublicDeleteStatus403
      | CommentPublicDeleteStatus404
      | CommentPublicDeleteStatus500
      | CommentPublicDeleteStatus501
    >,
    CommentPublicDeleteOptions,
    TContext
  >({
    mutationKey,
    mutationFn: async ({ path }) => {
      const { data } = await commentPublicDelete({ ...config, path, throwOnError: true });
      return data;
    },
  });
}

/**
 * {@link /api/cms-kit-public/comments/:id}
 */
export function useCommentPublicDelete<TContext>(
  options: {
    mutation?: UseMutationOptions<
      CommentPublicDeleteStatus200 | CommentPublicDeleteStatus204,
      ResponseErrorConfig<
        | CommentPublicDeleteStatus400
        | CommentPublicDeleteStatus401
        | CommentPublicDeleteStatus403
        | CommentPublicDeleteStatus404
        | CommentPublicDeleteStatus500
        | CommentPublicDeleteStatus501
      >,
      CommentPublicDeleteOptions,
      TContext
    > & { client?: QueryClient };
    client?: Partial<Omit<RequestConfig, "path" | "query" | "body" | "headers" | "url">>;
  } = {},
) {
  const { mutation = {}, client: config = {} } = options ?? {};
  const { client: queryClient, ...mutationOptions } = mutation;
  const mutationKey = mutationOptions.mutationKey ?? commentPublicDeleteMutationKey();

  const baseOptions = commentPublicDeleteMutationOptions(config) as UseMutationOptions<
    CommentPublicDeleteStatus200 | CommentPublicDeleteStatus204,
    ResponseErrorConfig<
      | CommentPublicDeleteStatus400
      | CommentPublicDeleteStatus401
      | CommentPublicDeleteStatus403
      | CommentPublicDeleteStatus404
      | CommentPublicDeleteStatus500
      | CommentPublicDeleteStatus501
    >,
    CommentPublicDeleteOptions,
    TContext
  >;

  return useMutation<
    CommentPublicDeleteStatus200 | CommentPublicDeleteStatus204,
    ResponseErrorConfig<
      | CommentPublicDeleteStatus400
      | CommentPublicDeleteStatus401
      | CommentPublicDeleteStatus403
      | CommentPublicDeleteStatus404
      | CommentPublicDeleteStatus500
      | CommentPublicDeleteStatus501
    >,
    CommentPublicDeleteOptions,
    TContext
  >(
    {
      ...baseOptions,
      mutationKey,
      ...mutationOptions,
    },
    queryClient,
  ) as UseMutationResult<
    CommentPublicDeleteStatus200 | CommentPublicDeleteStatus204,
    ResponseErrorConfig<
      | CommentPublicDeleteStatus400
      | CommentPublicDeleteStatus401
      | CommentPublicDeleteStatus403
      | CommentPublicDeleteStatus404
      | CommentPublicDeleteStatus500
      | CommentPublicDeleteStatus501
    >,
    CommentPublicDeleteOptions,
    TContext
  >;
}
