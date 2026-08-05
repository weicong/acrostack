/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type { UseMutationOptions, UseMutationResult, QueryClient } from "@tanstack/react-query";
import type {
  BlogPostPublicDeletePathId,
  BlogPostPublicDeleteStatus200,
  BlogPostPublicDeleteStatus204,
  BlogPostPublicDeleteStatus400,
  BlogPostPublicDeleteStatus401,
  BlogPostPublicDeleteStatus403,
  BlogPostPublicDeleteStatus404,
  BlogPostPublicDeleteStatus500,
  BlogPostPublicDeleteStatus501,
} from "../../models/blogPostPublic/BlogPostPublicDelete.ts";
import { mutationOptions, useMutation } from "@tanstack/react-query";
import { blogPostPublicDelete } from "../../clients/blogPostPublic/blogPostPublicDelete.ts";

export const blogPostPublicDeleteMutationKey = () =>
  [{ url: "/api/cms-kit-public/blog-posts/:id" }] as const;

export function blogPostPublicDeleteMutationOptions<TContext = unknown>(
  config: Partial<RequestConfig> & { client?: Client } = {},
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
    { id: BlogPostPublicDeletePathId },
    TContext
  >({
    mutationKey,
    mutationFn: async ({ id }) => {
      return blogPostPublicDelete(id, config);
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
      { id: BlogPostPublicDeletePathId },
      TContext
    > & { client?: QueryClient };
    client?: Partial<RequestConfig> & { client?: Client };
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
    { id: BlogPostPublicDeletePathId },
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
    { id: BlogPostPublicDeletePathId },
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
    { id: BlogPostPublicDeletePathId },
    TContext
  >;
}
