/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type { UseMutationOptions, UseMutationResult, QueryClient } from "@tanstack/react-query";
import type {
  CommentPublicDeletePathId,
  CommentPublicDeleteStatus200,
  CommentPublicDeleteStatus204,
  CommentPublicDeleteStatus400,
  CommentPublicDeleteStatus401,
  CommentPublicDeleteStatus403,
  CommentPublicDeleteStatus404,
  CommentPublicDeleteStatus500,
  CommentPublicDeleteStatus501,
} from "../../models/commentPublic/CommentPublicDelete.ts";
import { mutationOptions, useMutation } from "@tanstack/react-query";
import { commentPublicDelete } from "../../clients/commentPublic/commentPublicDelete.ts";

export const commentPublicDeleteMutationKey = () =>
  [{ url: "/api/cms-kit-public/comments/:id" }] as const;

export function commentPublicDeleteMutationOptions<TContext = unknown>(
  config: Partial<RequestConfig> & { client?: Client } = {},
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
    { id: CommentPublicDeletePathId },
    TContext
  >({
    mutationKey,
    mutationFn: async ({ id }) => {
      return commentPublicDelete(id, config);
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
      { id: CommentPublicDeletePathId },
      TContext
    > & { client?: QueryClient };
    client?: Partial<RequestConfig> & { client?: Client };
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
    { id: CommentPublicDeletePathId },
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
    { id: CommentPublicDeletePathId },
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
    { id: CommentPublicDeletePathId },
    TContext
  >;
}
