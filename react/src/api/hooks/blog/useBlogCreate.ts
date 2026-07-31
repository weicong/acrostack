/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type { UseMutationOptions, UseMutationResult, QueryClient } from "@tanstack/react-query";
import type {
  BlogCreateData,
  BlogCreateStatus200,
  BlogCreateStatus400,
  BlogCreateStatus401,
  BlogCreateStatus403,
  BlogCreateStatus404,
  BlogCreateStatus500,
  BlogCreateStatus501,
} from "../../models/blog/BlogCreate.ts";
import { mutationOptions, useMutation } from "@tanstack/react-query";
import { blogCreate } from "../../clients/blog/blogCreate.ts";

export const blogCreateMutationKey = () => [{ url: "/api/app/blog" }] as const;

export function blogCreateMutationOptions<TContext = unknown>(
  config: Partial<RequestConfig<BlogCreateData>> & {
    client?: Client;
    contentType?: "application/json" | "text/json" | "application/*+json";
  } = {},
) {
  const mutationKey = blogCreateMutationKey();
  return mutationOptions<
    BlogCreateStatus200,
    ResponseErrorConfig<
      | BlogCreateStatus400
      | BlogCreateStatus401
      | BlogCreateStatus403
      | BlogCreateStatus404
      | BlogCreateStatus500
      | BlogCreateStatus501
    >,
    { data?: BlogCreateData },
    TContext
  >({
    mutationKey,
    mutationFn: async ({ data }) => {
      return blogCreate(data, config);
    },
  });
}

/**
 * {@link /api/app/blog}
 */
export function useBlogCreate<TContext>(
  options: {
    mutation?: UseMutationOptions<
      BlogCreateStatus200,
      ResponseErrorConfig<
        | BlogCreateStatus400
        | BlogCreateStatus401
        | BlogCreateStatus403
        | BlogCreateStatus404
        | BlogCreateStatus500
        | BlogCreateStatus501
      >,
      { data?: BlogCreateData },
      TContext
    > & { client?: QueryClient };
    client?: Partial<RequestConfig<BlogCreateData>> & {
      client?: Client;
      contentType?: "application/json" | "text/json" | "application/*+json";
    };
  } = {},
) {
  const { mutation = {}, client: config = {} } = options ?? {};
  const { client: queryClient, ...mutationOptions } = mutation;
  const mutationKey = mutationOptions.mutationKey ?? blogCreateMutationKey();

  const baseOptions = blogCreateMutationOptions(config) as UseMutationOptions<
    BlogCreateStatus200,
    ResponseErrorConfig<
      | BlogCreateStatus400
      | BlogCreateStatus401
      | BlogCreateStatus403
      | BlogCreateStatus404
      | BlogCreateStatus500
      | BlogCreateStatus501
    >,
    { data?: BlogCreateData },
    TContext
  >;

  return useMutation<
    BlogCreateStatus200,
    ResponseErrorConfig<
      | BlogCreateStatus400
      | BlogCreateStatus401
      | BlogCreateStatus403
      | BlogCreateStatus404
      | BlogCreateStatus500
      | BlogCreateStatus501
    >,
    { data?: BlogCreateData },
    TContext
  >(
    {
      ...baseOptions,
      mutationKey,
      ...mutationOptions,
    },
    queryClient,
  ) as UseMutationResult<
    BlogCreateStatus200,
    ResponseErrorConfig<
      | BlogCreateStatus400
      | BlogCreateStatus401
      | BlogCreateStatus403
      | BlogCreateStatus404
      | BlogCreateStatus500
      | BlogCreateStatus501
    >,
    { data?: BlogCreateData },
    TContext
  >;
}
