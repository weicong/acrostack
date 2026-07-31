/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type { UseMutationOptions, UseMutationResult, QueryClient } from "@tanstack/react-query";
import type {
  BlogPostCreateData,
  BlogPostCreateStatus200,
  BlogPostCreateStatus400,
  BlogPostCreateStatus401,
  BlogPostCreateStatus403,
  BlogPostCreateStatus404,
  BlogPostCreateStatus500,
  BlogPostCreateStatus501,
} from "../../models/blogPost/BlogPostCreate.ts";
import { mutationOptions, useMutation } from "@tanstack/react-query";
import { blogPostCreate } from "../../clients/blogPost/blogPostCreate.ts";

export const blogPostCreateMutationKey = () => [{ url: "/api/app/blog-post" }] as const;

export function blogPostCreateMutationOptions<TContext = unknown>(
  config: Partial<RequestConfig<BlogPostCreateData>> & {
    client?: Client;
    contentType?: "application/json" | "text/json" | "application/*+json";
  } = {},
) {
  const mutationKey = blogPostCreateMutationKey();
  return mutationOptions<
    BlogPostCreateStatus200,
    ResponseErrorConfig<
      | BlogPostCreateStatus400
      | BlogPostCreateStatus401
      | BlogPostCreateStatus403
      | BlogPostCreateStatus404
      | BlogPostCreateStatus500
      | BlogPostCreateStatus501
    >,
    { data?: BlogPostCreateData },
    TContext
  >({
    mutationKey,
    mutationFn: async ({ data }) => {
      return blogPostCreate(data, config);
    },
  });
}

/**
 * {@link /api/app/blog-post}
 */
export function useBlogPostCreate<TContext>(
  options: {
    mutation?: UseMutationOptions<
      BlogPostCreateStatus200,
      ResponseErrorConfig<
        | BlogPostCreateStatus400
        | BlogPostCreateStatus401
        | BlogPostCreateStatus403
        | BlogPostCreateStatus404
        | BlogPostCreateStatus500
        | BlogPostCreateStatus501
      >,
      { data?: BlogPostCreateData },
      TContext
    > & { client?: QueryClient };
    client?: Partial<RequestConfig<BlogPostCreateData>> & {
      client?: Client;
      contentType?: "application/json" | "text/json" | "application/*+json";
    };
  } = {},
) {
  const { mutation = {}, client: config = {} } = options ?? {};
  const { client: queryClient, ...mutationOptions } = mutation;
  const mutationKey = mutationOptions.mutationKey ?? blogPostCreateMutationKey();

  const baseOptions = blogPostCreateMutationOptions(config) as UseMutationOptions<
    BlogPostCreateStatus200,
    ResponseErrorConfig<
      | BlogPostCreateStatus400
      | BlogPostCreateStatus401
      | BlogPostCreateStatus403
      | BlogPostCreateStatus404
      | BlogPostCreateStatus500
      | BlogPostCreateStatus501
    >,
    { data?: BlogPostCreateData },
    TContext
  >;

  return useMutation<
    BlogPostCreateStatus200,
    ResponseErrorConfig<
      | BlogPostCreateStatus400
      | BlogPostCreateStatus401
      | BlogPostCreateStatus403
      | BlogPostCreateStatus404
      | BlogPostCreateStatus500
      | BlogPostCreateStatus501
    >,
    { data?: BlogPostCreateData },
    TContext
  >(
    {
      ...baseOptions,
      mutationKey,
      ...mutationOptions,
    },
    queryClient,
  ) as UseMutationResult<
    BlogPostCreateStatus200,
    ResponseErrorConfig<
      | BlogPostCreateStatus400
      | BlogPostCreateStatus401
      | BlogPostCreateStatus403
      | BlogPostCreateStatus404
      | BlogPostCreateStatus500
      | BlogPostCreateStatus501
    >,
    { data?: BlogPostCreateData },
    TContext
  >;
}
