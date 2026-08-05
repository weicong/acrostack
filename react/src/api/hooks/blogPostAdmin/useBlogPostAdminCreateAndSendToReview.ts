/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type { UseMutationOptions, UseMutationResult, QueryClient } from "@tanstack/react-query";
import type {
  BlogPostAdminCreateAndSendToReviewData,
  BlogPostAdminCreateAndSendToReviewStatus200,
  BlogPostAdminCreateAndSendToReviewStatus400,
  BlogPostAdminCreateAndSendToReviewStatus401,
  BlogPostAdminCreateAndSendToReviewStatus403,
  BlogPostAdminCreateAndSendToReviewStatus404,
  BlogPostAdminCreateAndSendToReviewStatus500,
  BlogPostAdminCreateAndSendToReviewStatus501,
} from "../../models/blogPostAdmin/BlogPostAdminCreateAndSendToReview.ts";
import { mutationOptions, useMutation } from "@tanstack/react-query";
import { blogPostAdminCreateAndSendToReview } from "../../clients/blogPostAdmin/blogPostAdminCreateAndSendToReview.ts";

export const blogPostAdminCreateAndSendToReviewMutationKey = () =>
  [{ url: "/api/cms-kit-admin/blogs/blog-posts/create-and-send-to-review" }] as const;

export function blogPostAdminCreateAndSendToReviewMutationOptions<TContext = unknown>(
  config: Partial<RequestConfig<BlogPostAdminCreateAndSendToReviewData>> & {
    client?: Client;
    contentType?: "application/json" | "text/json" | "application/*+json";
  } = {},
) {
  const mutationKey = blogPostAdminCreateAndSendToReviewMutationKey();
  return mutationOptions<
    BlogPostAdminCreateAndSendToReviewStatus200,
    ResponseErrorConfig<
      | BlogPostAdminCreateAndSendToReviewStatus400
      | BlogPostAdminCreateAndSendToReviewStatus401
      | BlogPostAdminCreateAndSendToReviewStatus403
      | BlogPostAdminCreateAndSendToReviewStatus404
      | BlogPostAdminCreateAndSendToReviewStatus500
      | BlogPostAdminCreateAndSendToReviewStatus501
    >,
    { data?: BlogPostAdminCreateAndSendToReviewData },
    TContext
  >({
    mutationKey,
    mutationFn: async ({ data }) => {
      return blogPostAdminCreateAndSendToReview(data, config);
    },
  });
}

/**
 * {@link /api/cms-kit-admin/blogs/blog-posts/create-and-send-to-review}
 */
export function useBlogPostAdminCreateAndSendToReview<TContext>(
  options: {
    mutation?: UseMutationOptions<
      BlogPostAdminCreateAndSendToReviewStatus200,
      ResponseErrorConfig<
        | BlogPostAdminCreateAndSendToReviewStatus400
        | BlogPostAdminCreateAndSendToReviewStatus401
        | BlogPostAdminCreateAndSendToReviewStatus403
        | BlogPostAdminCreateAndSendToReviewStatus404
        | BlogPostAdminCreateAndSendToReviewStatus500
        | BlogPostAdminCreateAndSendToReviewStatus501
      >,
      { data?: BlogPostAdminCreateAndSendToReviewData },
      TContext
    > & { client?: QueryClient };
    client?: Partial<RequestConfig<BlogPostAdminCreateAndSendToReviewData>> & {
      client?: Client;
      contentType?: "application/json" | "text/json" | "application/*+json";
    };
  } = {},
) {
  const { mutation = {}, client: config = {} } = options ?? {};
  const { client: queryClient, ...mutationOptions } = mutation;
  const mutationKey =
    mutationOptions.mutationKey ?? blogPostAdminCreateAndSendToReviewMutationKey();

  const baseOptions = blogPostAdminCreateAndSendToReviewMutationOptions(
    config,
  ) as UseMutationOptions<
    BlogPostAdminCreateAndSendToReviewStatus200,
    ResponseErrorConfig<
      | BlogPostAdminCreateAndSendToReviewStatus400
      | BlogPostAdminCreateAndSendToReviewStatus401
      | BlogPostAdminCreateAndSendToReviewStatus403
      | BlogPostAdminCreateAndSendToReviewStatus404
      | BlogPostAdminCreateAndSendToReviewStatus500
      | BlogPostAdminCreateAndSendToReviewStatus501
    >,
    { data?: BlogPostAdminCreateAndSendToReviewData },
    TContext
  >;

  return useMutation<
    BlogPostAdminCreateAndSendToReviewStatus200,
    ResponseErrorConfig<
      | BlogPostAdminCreateAndSendToReviewStatus400
      | BlogPostAdminCreateAndSendToReviewStatus401
      | BlogPostAdminCreateAndSendToReviewStatus403
      | BlogPostAdminCreateAndSendToReviewStatus404
      | BlogPostAdminCreateAndSendToReviewStatus500
      | BlogPostAdminCreateAndSendToReviewStatus501
    >,
    { data?: BlogPostAdminCreateAndSendToReviewData },
    TContext
  >(
    {
      ...baseOptions,
      mutationKey,
      ...mutationOptions,
    },
    queryClient,
  ) as UseMutationResult<
    BlogPostAdminCreateAndSendToReviewStatus200,
    ResponseErrorConfig<
      | BlogPostAdminCreateAndSendToReviewStatus400
      | BlogPostAdminCreateAndSendToReviewStatus401
      | BlogPostAdminCreateAndSendToReviewStatus403
      | BlogPostAdminCreateAndSendToReviewStatus404
      | BlogPostAdminCreateAndSendToReviewStatus500
      | BlogPostAdminCreateAndSendToReviewStatus501
    >,
    { data?: BlogPostAdminCreateAndSendToReviewData },
    TContext
  >;
}
