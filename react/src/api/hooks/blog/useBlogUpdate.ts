/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type { UseMutationOptions, UseMutationResult, QueryClient } from "@tanstack/react-query";
import type {
  BlogUpdateData,
  BlogUpdatePathId,
  BlogUpdateStatus200,
  BlogUpdateStatus400,
  BlogUpdateStatus401,
  BlogUpdateStatus403,
  BlogUpdateStatus404,
  BlogUpdateStatus500,
  BlogUpdateStatus501,
} from "../../models/blog/BlogUpdate.ts";
import { mutationOptions, useMutation } from "@tanstack/react-query";
import { blogUpdate } from "../../clients/blog/blogUpdate.ts";

export const blogUpdateMutationKey = () => [{ url: "/api/app/blog/:id" }] as const;

export function blogUpdateMutationOptions<TContext = unknown>(
  config: Partial<RequestConfig<BlogUpdateData>> & {
    client?: Client;
    contentType?: "application/json" | "text/json" | "application/*+json";
  } = {},
) {
  const mutationKey = blogUpdateMutationKey();
  return mutationOptions<
    BlogUpdateStatus200,
    ResponseErrorConfig<
      | BlogUpdateStatus400
      | BlogUpdateStatus401
      | BlogUpdateStatus403
      | BlogUpdateStatus404
      | BlogUpdateStatus500
      | BlogUpdateStatus501
    >,
    { id: BlogUpdatePathId; data?: BlogUpdateData },
    TContext
  >({
    mutationKey,
    mutationFn: async ({ id, data }) => {
      return blogUpdate(id, data, config);
    },
  });
}

/**
 * {@link /api/app/blog/:id}
 */
export function useBlogUpdate<TContext>(
  options: {
    mutation?: UseMutationOptions<
      BlogUpdateStatus200,
      ResponseErrorConfig<
        | BlogUpdateStatus400
        | BlogUpdateStatus401
        | BlogUpdateStatus403
        | BlogUpdateStatus404
        | BlogUpdateStatus500
        | BlogUpdateStatus501
      >,
      { id: BlogUpdatePathId; data?: BlogUpdateData },
      TContext
    > & { client?: QueryClient };
    client?: Partial<RequestConfig<BlogUpdateData>> & {
      client?: Client;
      contentType?: "application/json" | "text/json" | "application/*+json";
    };
  } = {},
) {
  const { mutation = {}, client: config = {} } = options ?? {};
  const { client: queryClient, ...mutationOptions } = mutation;
  const mutationKey = mutationOptions.mutationKey ?? blogUpdateMutationKey();

  const baseOptions = blogUpdateMutationOptions(config) as UseMutationOptions<
    BlogUpdateStatus200,
    ResponseErrorConfig<
      | BlogUpdateStatus400
      | BlogUpdateStatus401
      | BlogUpdateStatus403
      | BlogUpdateStatus404
      | BlogUpdateStatus500
      | BlogUpdateStatus501
    >,
    { id: BlogUpdatePathId; data?: BlogUpdateData },
    TContext
  >;

  return useMutation<
    BlogUpdateStatus200,
    ResponseErrorConfig<
      | BlogUpdateStatus400
      | BlogUpdateStatus401
      | BlogUpdateStatus403
      | BlogUpdateStatus404
      | BlogUpdateStatus500
      | BlogUpdateStatus501
    >,
    { id: BlogUpdatePathId; data?: BlogUpdateData },
    TContext
  >(
    {
      ...baseOptions,
      mutationKey,
      ...mutationOptions,
    },
    queryClient,
  ) as UseMutationResult<
    BlogUpdateStatus200,
    ResponseErrorConfig<
      | BlogUpdateStatus400
      | BlogUpdateStatus401
      | BlogUpdateStatus403
      | BlogUpdateStatus404
      | BlogUpdateStatus500
      | BlogUpdateStatus501
    >,
    { id: BlogUpdatePathId; data?: BlogUpdateData },
    TContext
  >;
}
