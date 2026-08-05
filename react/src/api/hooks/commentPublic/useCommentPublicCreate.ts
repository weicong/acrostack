/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type { UseMutationOptions, UseMutationResult, QueryClient } from "@tanstack/react-query";
import type {
  CommentPublicCreateData,
  CommentPublicCreatePathEntityType,
  CommentPublicCreatePathEntityId,
  CommentPublicCreateStatus200,
  CommentPublicCreateStatus400,
  CommentPublicCreateStatus401,
  CommentPublicCreateStatus403,
  CommentPublicCreateStatus404,
  CommentPublicCreateStatus500,
  CommentPublicCreateStatus501,
} from "../../models/commentPublic/CommentPublicCreate.ts";
import { mutationOptions, useMutation } from "@tanstack/react-query";
import { commentPublicCreate } from "../../clients/commentPublic/commentPublicCreate.ts";

export const commentPublicCreateMutationKey = () =>
  [{ url: "/api/cms-kit-public/comments/:entityType/:entityId" }] as const;

export function commentPublicCreateMutationOptions<TContext = unknown>(
  config: Partial<RequestConfig<CommentPublicCreateData>> & {
    client?: Client;
    contentType?: "application/json" | "text/json" | "application/*+json";
  } = {},
) {
  const mutationKey = commentPublicCreateMutationKey();
  return mutationOptions<
    CommentPublicCreateStatus200,
    ResponseErrorConfig<
      | CommentPublicCreateStatus400
      | CommentPublicCreateStatus401
      | CommentPublicCreateStatus403
      | CommentPublicCreateStatus404
      | CommentPublicCreateStatus500
      | CommentPublicCreateStatus501
    >,
    {
      entityType: CommentPublicCreatePathEntityType;
      entityId: CommentPublicCreatePathEntityId;
      data?: CommentPublicCreateData;
    },
    TContext
  >({
    mutationKey,
    mutationFn: async ({ entityType, entityId, data }) => {
      return commentPublicCreate(entityType, entityId, data, config);
    },
  });
}

/**
 * {@link /api/cms-kit-public/comments/:entityType/:entityId}
 */
export function useCommentPublicCreate<TContext>(
  options: {
    mutation?: UseMutationOptions<
      CommentPublicCreateStatus200,
      ResponseErrorConfig<
        | CommentPublicCreateStatus400
        | CommentPublicCreateStatus401
        | CommentPublicCreateStatus403
        | CommentPublicCreateStatus404
        | CommentPublicCreateStatus500
        | CommentPublicCreateStatus501
      >,
      {
        entityType: CommentPublicCreatePathEntityType;
        entityId: CommentPublicCreatePathEntityId;
        data?: CommentPublicCreateData;
      },
      TContext
    > & { client?: QueryClient };
    client?: Partial<RequestConfig<CommentPublicCreateData>> & {
      client?: Client;
      contentType?: "application/json" | "text/json" | "application/*+json";
    };
  } = {},
) {
  const { mutation = {}, client: config = {} } = options ?? {};
  const { client: queryClient, ...mutationOptions } = mutation;
  const mutationKey = mutationOptions.mutationKey ?? commentPublicCreateMutationKey();

  const baseOptions = commentPublicCreateMutationOptions(config) as UseMutationOptions<
    CommentPublicCreateStatus200,
    ResponseErrorConfig<
      | CommentPublicCreateStatus400
      | CommentPublicCreateStatus401
      | CommentPublicCreateStatus403
      | CommentPublicCreateStatus404
      | CommentPublicCreateStatus500
      | CommentPublicCreateStatus501
    >,
    {
      entityType: CommentPublicCreatePathEntityType;
      entityId: CommentPublicCreatePathEntityId;
      data?: CommentPublicCreateData;
    },
    TContext
  >;

  return useMutation<
    CommentPublicCreateStatus200,
    ResponseErrorConfig<
      | CommentPublicCreateStatus400
      | CommentPublicCreateStatus401
      | CommentPublicCreateStatus403
      | CommentPublicCreateStatus404
      | CommentPublicCreateStatus500
      | CommentPublicCreateStatus501
    >,
    {
      entityType: CommentPublicCreatePathEntityType;
      entityId: CommentPublicCreatePathEntityId;
      data?: CommentPublicCreateData;
    },
    TContext
  >(
    {
      ...baseOptions,
      mutationKey,
      ...mutationOptions,
    },
    queryClient,
  ) as UseMutationResult<
    CommentPublicCreateStatus200,
    ResponseErrorConfig<
      | CommentPublicCreateStatus400
      | CommentPublicCreateStatus401
      | CommentPublicCreateStatus403
      | CommentPublicCreateStatus404
      | CommentPublicCreateStatus500
      | CommentPublicCreateStatus501
    >,
    {
      entityType: CommentPublicCreatePathEntityType;
      entityId: CommentPublicCreatePathEntityId;
      data?: CommentPublicCreateData;
    },
    TContext
  >;
}
