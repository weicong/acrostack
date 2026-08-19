/* oxlint-disable */

import type { UseMutationOptions, UseMutationResult, QueryClient } from "@tanstack/react-query";
import type { RequestConfig, ResponseErrorConfig } from "../../.kubb/client";
import type {
  CommentAdminDeleteOptions,
  CommentAdminDeleteStatus200,
  CommentAdminDeleteStatus204,
  CommentAdminDeleteStatus400,
  CommentAdminDeleteStatus401,
  CommentAdminDeleteStatus403,
  CommentAdminDeleteStatus404,
  CommentAdminDeleteStatus500,
  CommentAdminDeleteStatus501,
} from "../../models/commentAdmin/CommentAdminDelete";
import { mutationOptions, useMutation } from "@tanstack/react-query";
import { commentAdminDelete } from "../../clients/commentAdmin/commentAdminDelete";

export const commentAdminDeleteMutationKey = () =>
  [{ url: "/api/cms-kit-admin/comments/:id" }] as const;

export function commentAdminDeleteMutationOptions<TContext = unknown>(
  config: Partial<Omit<RequestConfig, "path" | "query" | "body" | "headers" | "url">> = {},
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
    CommentAdminDeleteOptions,
    TContext
  >({
    mutationKey,
    mutationFn: async ({ path }) => {
      const { data } = await commentAdminDelete({ ...config, path, throwOnError: true });
      return data;
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
      CommentAdminDeleteOptions,
      TContext
    > & { client?: QueryClient };
    client?: Partial<Omit<RequestConfig, "path" | "query" | "body" | "headers" | "url">>;
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
    CommentAdminDeleteOptions,
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
    CommentAdminDeleteOptions,
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
    CommentAdminDeleteOptions,
    TContext
  >;
}
