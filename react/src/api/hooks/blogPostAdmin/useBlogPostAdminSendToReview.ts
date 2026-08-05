/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type { UseMutationOptions, UseMutationResult, QueryClient } from "@tanstack/react-query";
import type {
  BlogPostAdminSendToReviewPathId,
  BlogPostAdminSendToReviewStatus200,
  BlogPostAdminSendToReviewStatus204,
  BlogPostAdminSendToReviewStatus400,
  BlogPostAdminSendToReviewStatus401,
  BlogPostAdminSendToReviewStatus403,
  BlogPostAdminSendToReviewStatus404,
  BlogPostAdminSendToReviewStatus500,
  BlogPostAdminSendToReviewStatus501,
} from "../../models/blogPostAdmin/BlogPostAdminSendToReview.ts";
import { mutationOptions, useMutation } from "@tanstack/react-query";
import { blogPostAdminSendToReview } from "../../clients/blogPostAdmin/blogPostAdminSendToReview.ts";

export const blogPostAdminSendToReviewMutationKey = () =>
  [{ url: "/api/cms-kit-admin/blogs/blog-posts/:id/send-to-review" }] as const;

export function blogPostAdminSendToReviewMutationOptions<TContext = unknown>(
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const mutationKey = blogPostAdminSendToReviewMutationKey();
  return mutationOptions<
    BlogPostAdminSendToReviewStatus200 | BlogPostAdminSendToReviewStatus204,
    ResponseErrorConfig<
      | BlogPostAdminSendToReviewStatus400
      | BlogPostAdminSendToReviewStatus401
      | BlogPostAdminSendToReviewStatus403
      | BlogPostAdminSendToReviewStatus404
      | BlogPostAdminSendToReviewStatus500
      | BlogPostAdminSendToReviewStatus501
    >,
    { id: BlogPostAdminSendToReviewPathId },
    TContext
  >({
    mutationKey,
    mutationFn: async ({ id }) => {
      return blogPostAdminSendToReview(id, config);
    },
  });
}

/**
 * {@link /api/cms-kit-admin/blogs/blog-posts/:id/send-to-review}
 */
export function useBlogPostAdminSendToReview<TContext>(
  options: {
    mutation?: UseMutationOptions<
      BlogPostAdminSendToReviewStatus200 | BlogPostAdminSendToReviewStatus204,
      ResponseErrorConfig<
        | BlogPostAdminSendToReviewStatus400
        | BlogPostAdminSendToReviewStatus401
        | BlogPostAdminSendToReviewStatus403
        | BlogPostAdminSendToReviewStatus404
        | BlogPostAdminSendToReviewStatus500
        | BlogPostAdminSendToReviewStatus501
      >,
      { id: BlogPostAdminSendToReviewPathId },
      TContext
    > & { client?: QueryClient };
    client?: Partial<RequestConfig> & { client?: Client };
  } = {},
) {
  const { mutation = {}, client: config = {} } = options ?? {};
  const { client: queryClient, ...mutationOptions } = mutation;
  const mutationKey = mutationOptions.mutationKey ?? blogPostAdminSendToReviewMutationKey();

  const baseOptions = blogPostAdminSendToReviewMutationOptions(config) as UseMutationOptions<
    BlogPostAdminSendToReviewStatus200 | BlogPostAdminSendToReviewStatus204,
    ResponseErrorConfig<
      | BlogPostAdminSendToReviewStatus400
      | BlogPostAdminSendToReviewStatus401
      | BlogPostAdminSendToReviewStatus403
      | BlogPostAdminSendToReviewStatus404
      | BlogPostAdminSendToReviewStatus500
      | BlogPostAdminSendToReviewStatus501
    >,
    { id: BlogPostAdminSendToReviewPathId },
    TContext
  >;

  return useMutation<
    BlogPostAdminSendToReviewStatus200 | BlogPostAdminSendToReviewStatus204,
    ResponseErrorConfig<
      | BlogPostAdminSendToReviewStatus400
      | BlogPostAdminSendToReviewStatus401
      | BlogPostAdminSendToReviewStatus403
      | BlogPostAdminSendToReviewStatus404
      | BlogPostAdminSendToReviewStatus500
      | BlogPostAdminSendToReviewStatus501
    >,
    { id: BlogPostAdminSendToReviewPathId },
    TContext
  >(
    {
      ...baseOptions,
      mutationKey,
      ...mutationOptions,
    },
    queryClient,
  ) as UseMutationResult<
    BlogPostAdminSendToReviewStatus200 | BlogPostAdminSendToReviewStatus204,
    ResponseErrorConfig<
      | BlogPostAdminSendToReviewStatus400
      | BlogPostAdminSendToReviewStatus401
      | BlogPostAdminSendToReviewStatus403
      | BlogPostAdminSendToReviewStatus404
      | BlogPostAdminSendToReviewStatus500
      | BlogPostAdminSendToReviewStatus501
    >,
    { id: BlogPostAdminSendToReviewPathId },
    TContext
  >;
}
