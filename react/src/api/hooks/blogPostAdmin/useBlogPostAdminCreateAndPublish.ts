/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type { UseMutationOptions, UseMutationResult, QueryClient } from "@tanstack/react-query";
import type {
  BlogPostAdminCreateAndPublishData,
  BlogPostAdminCreateAndPublishStatus200,
  BlogPostAdminCreateAndPublishStatus400,
  BlogPostAdminCreateAndPublishStatus401,
  BlogPostAdminCreateAndPublishStatus403,
  BlogPostAdminCreateAndPublishStatus404,
  BlogPostAdminCreateAndPublishStatus500,
  BlogPostAdminCreateAndPublishStatus501,
} from "../../models/blogPostAdmin/BlogPostAdminCreateAndPublish.ts";
import { mutationOptions, useMutation } from "@tanstack/react-query";
import { blogPostAdminCreateAndPublish } from "../../clients/blogPostAdmin/blogPostAdminCreateAndPublish.ts";

export const blogPostAdminCreateAndPublishMutationKey = () =>
  [{ url: "/api/cms-kit-admin/blogs/blog-posts/create-and-publish" }] as const;

export function blogPostAdminCreateAndPublishMutationOptions<TContext = unknown>(
  config: Partial<RequestConfig<BlogPostAdminCreateAndPublishData>> & {
    client?: Client;
    contentType?: "application/json" | "text/json" | "application/*+json";
  } = {},
) {
  const mutationKey = blogPostAdminCreateAndPublishMutationKey();
  return mutationOptions<
    BlogPostAdminCreateAndPublishStatus200,
    ResponseErrorConfig<
      | BlogPostAdminCreateAndPublishStatus400
      | BlogPostAdminCreateAndPublishStatus401
      | BlogPostAdminCreateAndPublishStatus403
      | BlogPostAdminCreateAndPublishStatus404
      | BlogPostAdminCreateAndPublishStatus500
      | BlogPostAdminCreateAndPublishStatus501
    >,
    { data?: BlogPostAdminCreateAndPublishData },
    TContext
  >({
    mutationKey,
    mutationFn: async ({ data }) => {
      return blogPostAdminCreateAndPublish(data, config);
    },
  });
}

/**
 * {@link /api/cms-kit-admin/blogs/blog-posts/create-and-publish}
 */
export function useBlogPostAdminCreateAndPublish<TContext>(
  options: {
    mutation?: UseMutationOptions<
      BlogPostAdminCreateAndPublishStatus200,
      ResponseErrorConfig<
        | BlogPostAdminCreateAndPublishStatus400
        | BlogPostAdminCreateAndPublishStatus401
        | BlogPostAdminCreateAndPublishStatus403
        | BlogPostAdminCreateAndPublishStatus404
        | BlogPostAdminCreateAndPublishStatus500
        | BlogPostAdminCreateAndPublishStatus501
      >,
      { data?: BlogPostAdminCreateAndPublishData },
      TContext
    > & { client?: QueryClient };
    client?: Partial<RequestConfig<BlogPostAdminCreateAndPublishData>> & {
      client?: Client;
      contentType?: "application/json" | "text/json" | "application/*+json";
    };
  } = {},
) {
  const { mutation = {}, client: config = {} } = options ?? {};
  const { client: queryClient, ...mutationOptions } = mutation;
  const mutationKey = mutationOptions.mutationKey ?? blogPostAdminCreateAndPublishMutationKey();

  const baseOptions = blogPostAdminCreateAndPublishMutationOptions(config) as UseMutationOptions<
    BlogPostAdminCreateAndPublishStatus200,
    ResponseErrorConfig<
      | BlogPostAdminCreateAndPublishStatus400
      | BlogPostAdminCreateAndPublishStatus401
      | BlogPostAdminCreateAndPublishStatus403
      | BlogPostAdminCreateAndPublishStatus404
      | BlogPostAdminCreateAndPublishStatus500
      | BlogPostAdminCreateAndPublishStatus501
    >,
    { data?: BlogPostAdminCreateAndPublishData },
    TContext
  >;

  return useMutation<
    BlogPostAdminCreateAndPublishStatus200,
    ResponseErrorConfig<
      | BlogPostAdminCreateAndPublishStatus400
      | BlogPostAdminCreateAndPublishStatus401
      | BlogPostAdminCreateAndPublishStatus403
      | BlogPostAdminCreateAndPublishStatus404
      | BlogPostAdminCreateAndPublishStatus500
      | BlogPostAdminCreateAndPublishStatus501
    >,
    { data?: BlogPostAdminCreateAndPublishData },
    TContext
  >(
    {
      ...baseOptions,
      mutationKey,
      ...mutationOptions,
    },
    queryClient,
  ) as UseMutationResult<
    BlogPostAdminCreateAndPublishStatus200,
    ResponseErrorConfig<
      | BlogPostAdminCreateAndPublishStatus400
      | BlogPostAdminCreateAndPublishStatus401
      | BlogPostAdminCreateAndPublishStatus403
      | BlogPostAdminCreateAndPublishStatus404
      | BlogPostAdminCreateAndPublishStatus500
      | BlogPostAdminCreateAndPublishStatus501
    >,
    { data?: BlogPostAdminCreateAndPublishData },
    TContext
  >;
}
