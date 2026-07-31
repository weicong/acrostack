/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type { UseMutationOptions, UseMutationResult, QueryClient } from "@tanstack/react-query";
import type {
  BlogPostUpdateData,
  BlogPostUpdatePathId,
  BlogPostUpdateStatus200,
  BlogPostUpdateStatus400,
  BlogPostUpdateStatus401,
  BlogPostUpdateStatus403,
  BlogPostUpdateStatus404,
  BlogPostUpdateStatus500,
  BlogPostUpdateStatus501,
} from "../../models/blogPost/BlogPostUpdate.ts";
import { mutationOptions, useMutation } from "@tanstack/react-query";
import { blogPostUpdate } from "../../clients/blogPost/blogPostUpdate.ts";

export const blogPostUpdateMutationKey = () => [{ url: "/api/app/blog-post/:id" }] as const;

export function blogPostUpdateMutationOptions<TContext = unknown>(
  config: Partial<RequestConfig<BlogPostUpdateData>> & {
    client?: Client;
    contentType?: "application/json" | "text/json" | "application/*+json";
  } = {},
) {
  const mutationKey = blogPostUpdateMutationKey();
  return mutationOptions<
    BlogPostUpdateStatus200,
    ResponseErrorConfig<
      | BlogPostUpdateStatus400
      | BlogPostUpdateStatus401
      | BlogPostUpdateStatus403
      | BlogPostUpdateStatus404
      | BlogPostUpdateStatus500
      | BlogPostUpdateStatus501
    >,
    { id: BlogPostUpdatePathId; data?: BlogPostUpdateData },
    TContext
  >({
    mutationKey,
    mutationFn: async ({ id, data }) => {
      return blogPostUpdate(id, data, config);
    },
  });
}

/**
 * {@link /api/app/blog-post/:id}
 */
export function useBlogPostUpdate<TContext>(
  options: {
    mutation?: UseMutationOptions<
      BlogPostUpdateStatus200,
      ResponseErrorConfig<
        | BlogPostUpdateStatus400
        | BlogPostUpdateStatus401
        | BlogPostUpdateStatus403
        | BlogPostUpdateStatus404
        | BlogPostUpdateStatus500
        | BlogPostUpdateStatus501
      >,
      { id: BlogPostUpdatePathId; data?: BlogPostUpdateData },
      TContext
    > & { client?: QueryClient };
    client?: Partial<RequestConfig<BlogPostUpdateData>> & {
      client?: Client;
      contentType?: "application/json" | "text/json" | "application/*+json";
    };
  } = {},
) {
  const { mutation = {}, client: config = {} } = options ?? {};
  const { client: queryClient, ...mutationOptions } = mutation;
  const mutationKey = mutationOptions.mutationKey ?? blogPostUpdateMutationKey();

  const baseOptions = blogPostUpdateMutationOptions(config) as UseMutationOptions<
    BlogPostUpdateStatus200,
    ResponseErrorConfig<
      | BlogPostUpdateStatus400
      | BlogPostUpdateStatus401
      | BlogPostUpdateStatus403
      | BlogPostUpdateStatus404
      | BlogPostUpdateStatus500
      | BlogPostUpdateStatus501
    >,
    { id: BlogPostUpdatePathId; data?: BlogPostUpdateData },
    TContext
  >;

  return useMutation<
    BlogPostUpdateStatus200,
    ResponseErrorConfig<
      | BlogPostUpdateStatus400
      | BlogPostUpdateStatus401
      | BlogPostUpdateStatus403
      | BlogPostUpdateStatus404
      | BlogPostUpdateStatus500
      | BlogPostUpdateStatus501
    >,
    { id: BlogPostUpdatePathId; data?: BlogPostUpdateData },
    TContext
  >(
    {
      ...baseOptions,
      mutationKey,
      ...mutationOptions,
    },
    queryClient,
  ) as UseMutationResult<
    BlogPostUpdateStatus200,
    ResponseErrorConfig<
      | BlogPostUpdateStatus400
      | BlogPostUpdateStatus401
      | BlogPostUpdateStatus403
      | BlogPostUpdateStatus404
      | BlogPostUpdateStatus500
      | BlogPostUpdateStatus501
    >,
    { id: BlogPostUpdatePathId; data?: BlogPostUpdateData },
    TContext
  >;
}
