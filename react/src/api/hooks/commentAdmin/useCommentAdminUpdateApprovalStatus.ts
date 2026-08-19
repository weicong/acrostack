/* oxlint-disable */

import type { UseMutationOptions, UseMutationResult, QueryClient } from "@tanstack/react-query";
import type { RequestConfig, ResponseErrorConfig } from "../../.kubb/client";
import type {
  CommentAdminUpdateApprovalStatusOptions,
  CommentAdminUpdateApprovalStatusStatus200,
  CommentAdminUpdateApprovalStatusStatus204,
  CommentAdminUpdateApprovalStatusStatus400,
  CommentAdminUpdateApprovalStatusStatus401,
  CommentAdminUpdateApprovalStatusStatus403,
  CommentAdminUpdateApprovalStatusStatus404,
  CommentAdminUpdateApprovalStatusStatus500,
  CommentAdminUpdateApprovalStatusStatus501,
} from "../../models/commentAdmin/CommentAdminUpdateApprovalStatus";
import { mutationOptions, useMutation } from "@tanstack/react-query";
import { commentAdminUpdateApprovalStatus } from "../../clients/commentAdmin/commentAdminUpdateApprovalStatus";

export const commentAdminUpdateApprovalStatusMutationKey = () =>
  [{ url: "/api/cms-kit-admin/comments/:id/approval-status" }] as const;

export function commentAdminUpdateApprovalStatusMutationOptions<TContext = unknown>(
  config: Partial<Omit<RequestConfig, "path" | "query" | "body" | "headers" | "url">> & {
    contentType?: { request?: "application/json" | "text/json" | "application/*+json" };
  } = {},
) {
  const mutationKey = commentAdminUpdateApprovalStatusMutationKey();
  return mutationOptions<
    CommentAdminUpdateApprovalStatusStatus200 | CommentAdminUpdateApprovalStatusStatus204,
    ResponseErrorConfig<
      | CommentAdminUpdateApprovalStatusStatus400
      | CommentAdminUpdateApprovalStatusStatus401
      | CommentAdminUpdateApprovalStatusStatus403
      | CommentAdminUpdateApprovalStatusStatus404
      | CommentAdminUpdateApprovalStatusStatus500
      | CommentAdminUpdateApprovalStatusStatus501
    >,
    CommentAdminUpdateApprovalStatusOptions,
    TContext
  >({
    mutationKey,
    mutationFn: async ({ path, body }) => {
      const { data } = await commentAdminUpdateApprovalStatus({
        ...config,
        path,
        body,
        throwOnError: true,
      });
      return data;
    },
  });
}

/**
 * {@link /api/cms-kit-admin/comments/:id/approval-status}
 */
export function useCommentAdminUpdateApprovalStatus<TContext>(
  options: {
    mutation?: UseMutationOptions<
      CommentAdminUpdateApprovalStatusStatus200 | CommentAdminUpdateApprovalStatusStatus204,
      ResponseErrorConfig<
        | CommentAdminUpdateApprovalStatusStatus400
        | CommentAdminUpdateApprovalStatusStatus401
        | CommentAdminUpdateApprovalStatusStatus403
        | CommentAdminUpdateApprovalStatusStatus404
        | CommentAdminUpdateApprovalStatusStatus500
        | CommentAdminUpdateApprovalStatusStatus501
      >,
      CommentAdminUpdateApprovalStatusOptions,
      TContext
    > & { client?: QueryClient };
    client?: Partial<Omit<RequestConfig, "path" | "query" | "body" | "headers" | "url">> & {
      contentType?: { request?: "application/json" | "text/json" | "application/*+json" };
    };
  } = {},
) {
  const { mutation = {}, client: config = {} } = options ?? {};
  const { client: queryClient, ...mutationOptions } = mutation;
  const mutationKey = mutationOptions.mutationKey ?? commentAdminUpdateApprovalStatusMutationKey();

  const baseOptions = commentAdminUpdateApprovalStatusMutationOptions(config) as UseMutationOptions<
    CommentAdminUpdateApprovalStatusStatus200 | CommentAdminUpdateApprovalStatusStatus204,
    ResponseErrorConfig<
      | CommentAdminUpdateApprovalStatusStatus400
      | CommentAdminUpdateApprovalStatusStatus401
      | CommentAdminUpdateApprovalStatusStatus403
      | CommentAdminUpdateApprovalStatusStatus404
      | CommentAdminUpdateApprovalStatusStatus500
      | CommentAdminUpdateApprovalStatusStatus501
    >,
    CommentAdminUpdateApprovalStatusOptions,
    TContext
  >;

  return useMutation<
    CommentAdminUpdateApprovalStatusStatus200 | CommentAdminUpdateApprovalStatusStatus204,
    ResponseErrorConfig<
      | CommentAdminUpdateApprovalStatusStatus400
      | CommentAdminUpdateApprovalStatusStatus401
      | CommentAdminUpdateApprovalStatusStatus403
      | CommentAdminUpdateApprovalStatusStatus404
      | CommentAdminUpdateApprovalStatusStatus500
      | CommentAdminUpdateApprovalStatusStatus501
    >,
    CommentAdminUpdateApprovalStatusOptions,
    TContext
  >(
    {
      ...baseOptions,
      mutationKey,
      ...mutationOptions,
    },
    queryClient,
  ) as UseMutationResult<
    CommentAdminUpdateApprovalStatusStatus200 | CommentAdminUpdateApprovalStatusStatus204,
    ResponseErrorConfig<
      | CommentAdminUpdateApprovalStatusStatus400
      | CommentAdminUpdateApprovalStatusStatus401
      | CommentAdminUpdateApprovalStatusStatus403
      | CommentAdminUpdateApprovalStatusStatus404
      | CommentAdminUpdateApprovalStatusStatus500
      | CommentAdminUpdateApprovalStatusStatus501
    >,
    CommentAdminUpdateApprovalStatusOptions,
    TContext
  >;
}
