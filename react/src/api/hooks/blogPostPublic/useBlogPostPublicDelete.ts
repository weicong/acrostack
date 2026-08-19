/* oxlint-disable */

import type { UseMutationOptions, UseMutationResult, QueryClient } from "@tanstack/react-query";
import type { RequestConfig, ResponseErrorConfig } from "../../.kubb/client";
import type {
  BlogPostPublicDeleteOptions,
  BlogPostPublicDeleteStatus200,
  BlogPostPublicDeleteStatus204,
  BlogPostPublicDeleteStatus400,
  BlogPostPublicDeleteStatus401,
  BlogPostPublicDeleteStatus403,
  BlogPostPublicDeleteStatus404,
  BlogPostPublicDeleteStatus500,
  BlogPostPublicDeleteStatus501,
} from "../../models/blogPostPublic/BlogPostPublicDelete";
import { mutationOptions, useMutation } from "@tanstack/react-query";
import { blogPostPublicDelete } from "../../clients/blogPostPublic/blogPostPublicDelete";

export const blogPostPublicDeleteMutationKey = () =>
  [{ url: "/api/cms-kit-public/blog-posts/:id" }] as const;

export function blogPostPublicDeleteMutationOptions<TContext = unknown>(
  config: Partial<Omit<RequestConfig, "path" | "query" | "body" | "headers" | "url">> = {},
) {
  const mutationKey = blogPostPublicDeleteMutationKey();
  return mutationOptions<
    BlogPostPublicDeleteStatus200 | BlogPostPublicDeleteStatus204,
    ResponseErrorConfig<
      | BlogPostPublicDeleteStatus400
      | BlogPostPublicDeleteStatus401
      | BlogPostPublicDeleteStatus403
      | BlogPostPublicDeleteStatus404
      | BlogPostPublicDeleteStatus500
      | BlogPostPublicDeleteStatus501
    >,
    BlogPostPublicDeleteOptions,
    TContext
  >({
    mutationKey,
    mutationFn: async ({ path }) => {
      const { data } = await blogPostPublicDelete({ ...config, path, throwOnError: true });
      return data;
    },
  });
}

/**
 * {@link /api/cms-kit-public/blog-posts/:id}
 */
export function useBlogPostPublicDelete<TContext>(
  options: {
    mutation?: UseMutationOptions<
      BlogPostPublicDeleteStatus200 | BlogPostPublicDeleteStatus204,
      ResponseErrorConfig<
        | BlogPostPublicDeleteStatus400
        | BlogPostPublicDeleteStatus401
        | BlogPostPublicDeleteStatus403
        | BlogPostPublicDeleteStatus404
        | BlogPostPublicDeleteStatus500
        | BlogPostPublicDeleteStatus501
      >,
      BlogPostPublicDeleteOptions,
      TContext
    > & { client?: QueryClient };
    client?: Partial<Omit<RequestConfig, "path" | "query" | "body" | "headers" | "url">>;
  } = {},
) {
  const { mutation = {}, client: config = {} } = options ?? {};
  const { client: queryClient, ...mutationOptions } = mutation;
  const mutationKey = mutationOptions.mutationKey ?? blogPostPublicDeleteMutationKey();

  const baseOptions = blogPostPublicDeleteMutationOptions(config) as UseMutationOptions<
    BlogPostPublicDeleteStatus200 | BlogPostPublicDeleteStatus204,
    ResponseErrorConfig<
      | BlogPostPublicDeleteStatus400
      | BlogPostPublicDeleteStatus401
      | BlogPostPublicDeleteStatus403
      | BlogPostPublicDeleteStatus404
      | BlogPostPublicDeleteStatus500
      | BlogPostPublicDeleteStatus501
    >,
    BlogPostPublicDeleteOptions,
    TContext
  >;

  return useMutation<
    BlogPostPublicDeleteStatus200 | BlogPostPublicDeleteStatus204,
    ResponseErrorConfig<
      | BlogPostPublicDeleteStatus400
      | BlogPostPublicDeleteStatus401
      | BlogPostPublicDeleteStatus403
      | BlogPostPublicDeleteStatus404
      | BlogPostPublicDeleteStatus500
      | BlogPostPublicDeleteStatus501
    >,
    BlogPostPublicDeleteOptions,
    TContext
  >(
    {
      ...baseOptions,
      mutationKey,
      ...mutationOptions,
    },
    queryClient,
  ) as UseMutationResult<
    BlogPostPublicDeleteStatus200 | BlogPostPublicDeleteStatus204,
    ResponseErrorConfig<
      | BlogPostPublicDeleteStatus400
      | BlogPostPublicDeleteStatus401
      | BlogPostPublicDeleteStatus403
      | BlogPostPublicDeleteStatus404
      | BlogPostPublicDeleteStatus500
      | BlogPostPublicDeleteStatus501
    >,
    BlogPostPublicDeleteOptions,
    TContext
  >;
}
