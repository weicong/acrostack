/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type { UseMutationOptions, UseMutationResult, QueryClient } from "@tanstack/react-query";
import type {
  CommentAdminDeletePathId,
  CommentAdminDeleteStatus200,
  CommentAdminDeleteStatus204,
  CommentAdminDeleteStatus400,
  CommentAdminDeleteStatus401,
  CommentAdminDeleteStatus403,
  CommentAdminDeleteStatus404,
  CommentAdminDeleteStatus500,
  CommentAdminDeleteStatus501,
} from "../../models/commentAdmin/CommentAdminDelete.ts";
import { mutationOptions, useMutation } from "@tanstack/react-query";
import { commentAdminDelete } from "../../clients/commentAdmin/commentAdminDelete.ts";

export const commentAdminDeleteMutationKey = () =>
  [{ url: "/api/cms-kit-admin/comments/:id" }] as const;

export function commentAdminDeleteMutationOptions<TContext = unknown>(
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const mutationKey = commentAdminDeleteMutationKey();
  return mutationOptions<
    CommentAdminDeleteStatus200 | CommentAdminDeleteStatus204,
    ResponseErrorConfig<
      | CommentAdminDeleteStatus400
      | CommentAdminDeleteStatus401
      | CommentAdminDeleteStatus403
      | CommentAdminDeleteStatus404
      | CommentAdminDeleteStatus500
      | CommentAdminDeleteStatus501
    >,
    { id: CommentAdminDeletePathId },
    TContext
  >({
    mutationKey,
    mutationFn: async ({ id }) => {
      return commentAdminDelete(id, config);
    },
  });
}

/**
 * {@link /api/cms-kit-admin/comments/:id}
 */
export function useCommentAdminDelete<TContext>(
  options: {
    mutation?: UseMutationOptions<
      CommentAdminDeleteStatus200 | CommentAdminDeleteStatus204,
      ResponseErrorConfig<
        | CommentAdminDeleteStatus400
        | CommentAdminDeleteStatus401
        | CommentAdminDeleteStatus403
        | CommentAdminDeleteStatus404
        | CommentAdminDeleteStatus500
        | CommentAdminDeleteStatus501
      >,
      { id: CommentAdminDeletePathId },
      TContext
    > & { client?: QueryClient };
    client?: Partial<RequestConfig> & { client?: Client };
  } = {},
) {
  const { mutation = {}, client: config = {} } = options ?? {};
  const { client: queryClient, ...mutationOptions } = mutation;
  const mutationKey = mutationOptions.mutationKey ?? commentAdminDeleteMutationKey();

  const baseOptions = commentAdminDeleteMutationOptions(config) as UseMutationOptions<
    CommentAdminDeleteStatus200 | CommentAdminDeleteStatus204,
    ResponseErrorConfig<
      | CommentAdminDeleteStatus400
      | CommentAdminDeleteStatus401
      | CommentAdminDeleteStatus403
      | CommentAdminDeleteStatus404
      | CommentAdminDeleteStatus500
      | CommentAdminDeleteStatus501
    >,
    { id: CommentAdminDeletePathId },
    TContext
  >;

  return useMutation<
    CommentAdminDeleteStatus200 | CommentAdminDeleteStatus204,
    ResponseErrorConfig<
      | CommentAdminDeleteStatus400
      | CommentAdminDeleteStatus401
      | CommentAdminDeleteStatus403
      | CommentAdminDeleteStatus404
      | CommentAdminDeleteStatus500
      | CommentAdminDeleteStatus501
    >,
    { id: CommentAdminDeletePathId },
    TContext
  >(
    {
      ...baseOptions,
      mutationKey,
      ...mutationOptions,
    },
    queryClient,
  ) as UseMutationResult<
    CommentAdminDeleteStatus200 | CommentAdminDeleteStatus204,
    ResponseErrorConfig<
      | CommentAdminDeleteStatus400
      | CommentAdminDeleteStatus401
      | CommentAdminDeleteStatus403
      | CommentAdminDeleteStatus404
      | CommentAdminDeleteStatus500
      | CommentAdminDeleteStatus501
    >,
    { id: CommentAdminDeletePathId },
    TContext
  >;
}
