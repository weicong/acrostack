/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type { UseMutationOptions, UseMutationResult, QueryClient } from "@tanstack/react-query";
import type {
  CommentCreateData,
  CommentCreateStatus200,
  CommentCreateStatus400,
  CommentCreateStatus401,
  CommentCreateStatus403,
  CommentCreateStatus404,
  CommentCreateStatus500,
  CommentCreateStatus501,
} from "../../models/comment/CommentCreate.ts";
import { mutationOptions, useMutation } from "@tanstack/react-query";
import { commentCreate } from "../../clients/comment/commentCreate.ts";

export const commentCreateMutationKey = () => [{ url: "/api/app/comment" }] as const;

export function commentCreateMutationOptions<TContext = unknown>(
  config: Partial<RequestConfig<CommentCreateData>> & {
    client?: Client;
    contentType?: "application/json" | "text/json" | "application/*+json";
  } = {},
) {
  const mutationKey = commentCreateMutationKey();
  return mutationOptions<
    CommentCreateStatus200,
    ResponseErrorConfig<
      | CommentCreateStatus400
      | CommentCreateStatus401
      | CommentCreateStatus403
      | CommentCreateStatus404
      | CommentCreateStatus500
      | CommentCreateStatus501
    >,
    { data?: CommentCreateData },
    TContext
  >({
    mutationKey,
    mutationFn: async ({ data }) => {
      return commentCreate(data, config);
    },
  });
}

/**
 * {@link /api/app/comment}
 */
export function useCommentCreate<TContext>(
  options: {
    mutation?: UseMutationOptions<
      CommentCreateStatus200,
      ResponseErrorConfig<
        | CommentCreateStatus400
        | CommentCreateStatus401
        | CommentCreateStatus403
        | CommentCreateStatus404
        | CommentCreateStatus500
        | CommentCreateStatus501
      >,
      { data?: CommentCreateData },
      TContext
    > & { client?: QueryClient };
    client?: Partial<RequestConfig<CommentCreateData>> & {
      client?: Client;
      contentType?: "application/json" | "text/json" | "application/*+json";
    };
  } = {},
) {
  const { mutation = {}, client: config = {} } = options ?? {};
  const { client: queryClient, ...mutationOptions } = mutation;
  const mutationKey = mutationOptions.mutationKey ?? commentCreateMutationKey();

  const baseOptions = commentCreateMutationOptions(config) as UseMutationOptions<
    CommentCreateStatus200,
    ResponseErrorConfig<
      | CommentCreateStatus400
      | CommentCreateStatus401
      | CommentCreateStatus403
      | CommentCreateStatus404
      | CommentCreateStatus500
      | CommentCreateStatus501
    >,
    { data?: CommentCreateData },
    TContext
  >;

  return useMutation<
    CommentCreateStatus200,
    ResponseErrorConfig<
      | CommentCreateStatus400
      | CommentCreateStatus401
      | CommentCreateStatus403
      | CommentCreateStatus404
      | CommentCreateStatus500
      | CommentCreateStatus501
    >,
    { data?: CommentCreateData },
    TContext
  >(
    {
      ...baseOptions,
      mutationKey,
      ...mutationOptions,
    },
    queryClient,
  ) as UseMutationResult<
    CommentCreateStatus200,
    ResponseErrorConfig<
      | CommentCreateStatus400
      | CommentCreateStatus401
      | CommentCreateStatus403
      | CommentCreateStatus404
      | CommentCreateStatus500
      | CommentCreateStatus501
    >,
    { data?: CommentCreateData },
    TContext
  >;
}
