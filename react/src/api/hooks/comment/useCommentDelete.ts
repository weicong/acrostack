/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type { UseMutationOptions, UseMutationResult, QueryClient } from "@tanstack/react-query";
import type {
  CommentDeletePathId,
  CommentDeleteStatus200,
  CommentDeleteStatus204,
  CommentDeleteStatus400,
  CommentDeleteStatus401,
  CommentDeleteStatus403,
  CommentDeleteStatus404,
  CommentDeleteStatus500,
  CommentDeleteStatus501,
} from "../../models/comment/CommentDelete.ts";
import { mutationOptions, useMutation } from "@tanstack/react-query";
import { commentDelete } from "../../clients/comment/commentDelete.ts";

export const commentDeleteMutationKey = () => [{ url: "/api/app/comment/:id" }] as const;

export function commentDeleteMutationOptions<TContext = unknown>(
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const mutationKey = commentDeleteMutationKey();
  return mutationOptions<
    CommentDeleteStatus200 | CommentDeleteStatus204,
    ResponseErrorConfig<
      | CommentDeleteStatus400
      | CommentDeleteStatus401
      | CommentDeleteStatus403
      | CommentDeleteStatus404
      | CommentDeleteStatus500
      | CommentDeleteStatus501
    >,
    { id: CommentDeletePathId },
    TContext
  >({
    mutationKey,
    mutationFn: async ({ id }) => {
      return commentDelete(id, config);
    },
  });
}

/**
 * {@link /api/app/comment/:id}
 */
export function useCommentDelete<TContext>(
  options: {
    mutation?: UseMutationOptions<
      CommentDeleteStatus200 | CommentDeleteStatus204,
      ResponseErrorConfig<
        | CommentDeleteStatus400
        | CommentDeleteStatus401
        | CommentDeleteStatus403
        | CommentDeleteStatus404
        | CommentDeleteStatus500
        | CommentDeleteStatus501
      >,
      { id: CommentDeletePathId },
      TContext
    > & { client?: QueryClient };
    client?: Partial<RequestConfig> & { client?: Client };
  } = {},
) {
  const { mutation = {}, client: config = {} } = options ?? {};
  const { client: queryClient, ...mutationOptions } = mutation;
  const mutationKey = mutationOptions.mutationKey ?? commentDeleteMutationKey();

  const baseOptions = commentDeleteMutationOptions(config) as UseMutationOptions<
    CommentDeleteStatus200 | CommentDeleteStatus204,
    ResponseErrorConfig<
      | CommentDeleteStatus400
      | CommentDeleteStatus401
      | CommentDeleteStatus403
      | CommentDeleteStatus404
      | CommentDeleteStatus500
      | CommentDeleteStatus501
    >,
    { id: CommentDeletePathId },
    TContext
  >;

  return useMutation<
    CommentDeleteStatus200 | CommentDeleteStatus204,
    ResponseErrorConfig<
      | CommentDeleteStatus400
      | CommentDeleteStatus401
      | CommentDeleteStatus403
      | CommentDeleteStatus404
      | CommentDeleteStatus500
      | CommentDeleteStatus501
    >,
    { id: CommentDeletePathId },
    TContext
  >(
    {
      ...baseOptions,
      mutationKey,
      ...mutationOptions,
    },
    queryClient,
  ) as UseMutationResult<
    CommentDeleteStatus200 | CommentDeleteStatus204,
    ResponseErrorConfig<
      | CommentDeleteStatus400
      | CommentDeleteStatus401
      | CommentDeleteStatus403
      | CommentDeleteStatus404
      | CommentDeleteStatus500
      | CommentDeleteStatus501
    >,
    { id: CommentDeletePathId },
    TContext
  >;
}
