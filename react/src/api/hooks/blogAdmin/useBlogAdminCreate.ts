/* oxlint-disable */

import type { UseMutationOptions, UseMutationResult, QueryClient } from "@tanstack/react-query";
import type { RequestConfig, ResponseErrorConfig } from "../../.kubb/client";
import type {
  BlogAdminCreateOptions,
  BlogAdminCreateStatus200,
  BlogAdminCreateStatus400,
  BlogAdminCreateStatus401,
  BlogAdminCreateStatus403,
  BlogAdminCreateStatus404,
  BlogAdminCreateStatus500,
  BlogAdminCreateStatus501,
} from "../../models/blogAdmin/BlogAdminCreate";
import { mutationOptions, useMutation } from "@tanstack/react-query";
import { blogAdminCreate } from "../../clients/blogAdmin/blogAdminCreate";

export const blogAdminCreateMutationKey = () => [{ url: "/api/cms-kit-admin/blogs" }] as const;

export function blogAdminCreateMutationOptions<TContext = unknown>(
  config: Partial<Omit<RequestConfig, "path" | "query" | "body" | "headers" | "url">> & {
    contentType?: {
      request?: "application/json" | "text/json" | "application/*+json";
      response?: "text/plain" | "application/json" | "text/json";
    };
  } = {},
) {
  const mutationKey = blogAdminCreateMutationKey();
  return mutationOptions<
    BlogAdminCreateStatus200,
    ResponseErrorConfig<
      | BlogAdminCreateStatus400
      | BlogAdminCreateStatus401
      | BlogAdminCreateStatus403
      | BlogAdminCreateStatus404
      | BlogAdminCreateStatus500
      | BlogAdminCreateStatus501
    >,
    BlogAdminCreateOptions,
    TContext
  >({
    mutationKey,
    mutationFn: async ({ body }) => {
      const { data } = await blogAdminCreate({ ...config, body, throwOnError: true });
      return data;
    },
  });
}

/**
 * {@link /api/cms-kit-admin/blogs}
 */
export function useBlogAdminCreate<TContext>(
  options: {
    mutation?: UseMutationOptions<
      BlogAdminCreateStatus200,
      ResponseErrorConfig<
        | BlogAdminCreateStatus400
        | BlogAdminCreateStatus401
        | BlogAdminCreateStatus403
        | BlogAdminCreateStatus404
        | BlogAdminCreateStatus500
        | BlogAdminCreateStatus501
      >,
      BlogAdminCreateOptions,
      TContext
    > & { client?: QueryClient };
    client?: Partial<Omit<RequestConfig, "path" | "query" | "body" | "headers" | "url">> & {
      contentType?: {
        request?: "application/json" | "text/json" | "application/*+json";
        response?: "text/plain" | "application/json" | "text/json";
      };
    };
  } = {},
) {
  const { mutation = {}, client: config = {} } = options ?? {};
  const { client: queryClient, ...mutationOptions } = mutation;
  const mutationKey = mutationOptions.mutationKey ?? blogAdminCreateMutationKey();

  const baseOptions = blogAdminCreateMutationOptions(config) as UseMutationOptions<
    BlogAdminCreateStatus200,
    ResponseErrorConfig<
      | BlogAdminCreateStatus400
      | BlogAdminCreateStatus401
      | BlogAdminCreateStatus403
      | BlogAdminCreateStatus404
      | BlogAdminCreateStatus500
      | BlogAdminCreateStatus501
    >,
    BlogAdminCreateOptions,
    TContext
  >;

  return useMutation<
    BlogAdminCreateStatus200,
    ResponseErrorConfig<
      | BlogAdminCreateStatus400
      | BlogAdminCreateStatus401
      | BlogAdminCreateStatus403
      | BlogAdminCreateStatus404
      | BlogAdminCreateStatus500
      | BlogAdminCreateStatus501
    >,
    BlogAdminCreateOptions,
    TContext
  >(
    {
      ...baseOptions,
      mutationKey,
      ...mutationOptions,
    },
    queryClient,
  ) as UseMutationResult<
    BlogAdminCreateStatus200,
    ResponseErrorConfig<
      | BlogAdminCreateStatus400
      | BlogAdminCreateStatus401
      | BlogAdminCreateStatus403
      | BlogAdminCreateStatus404
      | BlogAdminCreateStatus500
      | BlogAdminCreateStatus501
    >,
    BlogAdminCreateOptions,
    TContext
  >;
}
