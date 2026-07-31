/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type { UseMutationOptions, UseMutationResult, QueryClient } from "@tanstack/react-query";
import type {
  BlogPostDeletePathId,
  BlogPostDeleteStatus200,
  BlogPostDeleteStatus204,
  BlogPostDeleteStatus400,
  BlogPostDeleteStatus401,
  BlogPostDeleteStatus403,
  BlogPostDeleteStatus404,
  BlogPostDeleteStatus500,
  BlogPostDeleteStatus501,
} from "../../models/blogPost/BlogPostDelete.ts";
import { mutationOptions, useMutation } from "@tanstack/react-query";
import { blogPostDelete } from "../../clients/blogPost/blogPostDelete.ts";

export const blogPostDeleteMutationKey = () => [{ url: "/api/app/blog-post/:id" }] as const;

export function blogPostDeleteMutationOptions<TContext = unknown>(
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const mutationKey = blogPostDeleteMutationKey();
  return mutationOptions<
    BlogPostDeleteStatus200 | BlogPostDeleteStatus204,
    ResponseErrorConfig<
      | BlogPostDeleteStatus400
      | BlogPostDeleteStatus401
      | BlogPostDeleteStatus403
      | BlogPostDeleteStatus404
      | BlogPostDeleteStatus500
      | BlogPostDeleteStatus501
    >,
    { id: BlogPostDeletePathId },
    TContext
  >({
    mutationKey,
    mutationFn: async ({ id }) => {
      return blogPostDelete(id, config);
    },
  });
}

/**
 * {@link /api/app/blog-post/:id}
 */
export function useBlogPostDelete<TContext>(
  options: {
    mutation?: UseMutationOptions<
      BlogPostDeleteStatus200 | BlogPostDeleteStatus204,
      ResponseErrorConfig<
        | BlogPostDeleteStatus400
        | BlogPostDeleteStatus401
        | BlogPostDeleteStatus403
        | BlogPostDeleteStatus404
        | BlogPostDeleteStatus500
        | BlogPostDeleteStatus501
      >,
      { id: BlogPostDeletePathId },
      TContext
    > & { client?: QueryClient };
    client?: Partial<RequestConfig> & { client?: Client };
  } = {},
) {
  const { mutation = {}, client: config = {} } = options ?? {};
  const { client: queryClient, ...mutationOptions } = mutation;
  const mutationKey = mutationOptions.mutationKey ?? blogPostDeleteMutationKey();

  const baseOptions = blogPostDeleteMutationOptions(config) as UseMutationOptions<
    BlogPostDeleteStatus200 | BlogPostDeleteStatus204,
    ResponseErrorConfig<
      | BlogPostDeleteStatus400
      | BlogPostDeleteStatus401
      | BlogPostDeleteStatus403
      | BlogPostDeleteStatus404
      | BlogPostDeleteStatus500
      | BlogPostDeleteStatus501
    >,
    { id: BlogPostDeletePathId },
    TContext
  >;

  return useMutation<
    BlogPostDeleteStatus200 | BlogPostDeleteStatus204,
    ResponseErrorConfig<
      | BlogPostDeleteStatus400
      | BlogPostDeleteStatus401
      | BlogPostDeleteStatus403
      | BlogPostDeleteStatus404
      | BlogPostDeleteStatus500
      | BlogPostDeleteStatus501
    >,
    { id: BlogPostDeletePathId },
    TContext
  >(
    {
      ...baseOptions,
      mutationKey,
      ...mutationOptions,
    },
    queryClient,
  ) as UseMutationResult<
    BlogPostDeleteStatus200 | BlogPostDeleteStatus204,
    ResponseErrorConfig<
      | BlogPostDeleteStatus400
      | BlogPostDeleteStatus401
      | BlogPostDeleteStatus403
      | BlogPostDeleteStatus404
      | BlogPostDeleteStatus500
      | BlogPostDeleteStatus501
    >,
    { id: BlogPostDeletePathId },
    TContext
  >;
}
