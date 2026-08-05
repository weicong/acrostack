/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type { UseMutationOptions, UseMutationResult, QueryClient } from "@tanstack/react-query";
import type {
  CommentAdminUpdateApprovalStatusData,
  CommentAdminUpdateApprovalStatusPathId,
  CommentAdminUpdateApprovalStatusStatus200,
  CommentAdminUpdateApprovalStatusStatus204,
  CommentAdminUpdateApprovalStatusStatus400,
  CommentAdminUpdateApprovalStatusStatus401,
  CommentAdminUpdateApprovalStatusStatus403,
  CommentAdminUpdateApprovalStatusStatus404,
  CommentAdminUpdateApprovalStatusStatus500,
  CommentAdminUpdateApprovalStatusStatus501,
} from "../../models/commentAdmin/CommentAdminUpdateApprovalStatus.ts";
import { mutationOptions, useMutation } from "@tanstack/react-query";
import { commentAdminUpdateApprovalStatus } from "../../clients/commentAdmin/commentAdminUpdateApprovalStatus.ts";

export const commentAdminUpdateApprovalStatusMutationKey = () =>
  [{ url: "/api/cms-kit-admin/comments/:id/approval-status" }] as const;

export function commentAdminUpdateApprovalStatusMutationOptions<TContext = unknown>(
  config: Partial<RequestConfig<CommentAdminUpdateApprovalStatusData>> & {
    client?: Client;
    contentType?: "application/json" | "text/json" | "application/*+json";
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
    { id: CommentAdminUpdateApprovalStatusPathId; data?: CommentAdminUpdateApprovalStatusData },
    TContext
  >({
    mutationKey,
    mutationFn: async ({ id, data }) => {
      return commentAdminUpdateApprovalStatus(id, data, config);
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
      { id: CommentAdminUpdateApprovalStatusPathId; data?: CommentAdminUpdateApprovalStatusData },
      TContext
    > & { client?: QueryClient };
    client?: Partial<RequestConfig<CommentAdminUpdateApprovalStatusData>> & {
      client?: Client;
      contentType?: "application/json" | "text/json" | "application/*+json";
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
    { id: CommentAdminUpdateApprovalStatusPathId; data?: CommentAdminUpdateApprovalStatusData },
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
    { id: CommentAdminUpdateApprovalStatusPathId; data?: CommentAdminUpdateApprovalStatusData },
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
    { id: CommentAdminUpdateApprovalStatusPathId; data?: CommentAdminUpdateApprovalStatusData },
    TContext
  >;
}
