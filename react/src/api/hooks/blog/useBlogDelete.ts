/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type { UseMutationOptions, UseMutationResult, QueryClient } from "@tanstack/react-query";
import type {
  BlogDeletePathId,
  BlogDeleteStatus200,
  BlogDeleteStatus204,
  BlogDeleteStatus400,
  BlogDeleteStatus401,
  BlogDeleteStatus403,
  BlogDeleteStatus404,
  BlogDeleteStatus500,
  BlogDeleteStatus501,
} from "../../models/blog/BlogDelete.ts";
import { mutationOptions, useMutation } from "@tanstack/react-query";
import { blogDelete } from "../../clients/blog/blogDelete.ts";

export const blogDeleteMutationKey = () => [{ url: "/api/app/blog/:id" }] as const;

export function blogDeleteMutationOptions<TContext = unknown>(
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const mutationKey = blogDeleteMutationKey();
  return mutationOptions<
    BlogDeleteStatus200 | BlogDeleteStatus204,
    ResponseErrorConfig<
      | BlogDeleteStatus400
      | BlogDeleteStatus401
      | BlogDeleteStatus403
      | BlogDeleteStatus404
      | BlogDeleteStatus500
      | BlogDeleteStatus501
    >,
    { id: BlogDeletePathId },
    TContext
  >({
    mutationKey,
    mutationFn: async ({ id }) => {
      return blogDelete(id, config);
    },
  });
}

/**
 * {@link /api/app/blog/:id}
 */
export function useBlogDelete<TContext>(
  options: {
    mutation?: UseMutationOptions<
      BlogDeleteStatus200 | BlogDeleteStatus204,
      ResponseErrorConfig<
        | BlogDeleteStatus400
        | BlogDeleteStatus401
        | BlogDeleteStatus403
        | BlogDeleteStatus404
        | BlogDeleteStatus500
        | BlogDeleteStatus501
      >,
      { id: BlogDeletePathId },
      TContext
    > & { client?: QueryClient };
    client?: Partial<RequestConfig> & { client?: Client };
  } = {},
) {
  const { mutation = {}, client: config = {} } = options ?? {};
  const { client: queryClient, ...mutationOptions } = mutation;
  const mutationKey = mutationOptions.mutationKey ?? blogDeleteMutationKey();

  const baseOptions = blogDeleteMutationOptions(config) as UseMutationOptions<
    BlogDeleteStatus200 | BlogDeleteStatus204,
    ResponseErrorConfig<
      | BlogDeleteStatus400
      | BlogDeleteStatus401
      | BlogDeleteStatus403
      | BlogDeleteStatus404
      | BlogDeleteStatus500
      | BlogDeleteStatus501
    >,
    { id: BlogDeletePathId },
    TContext
  >;

  return useMutation<
    BlogDeleteStatus200 | BlogDeleteStatus204,
    ResponseErrorConfig<
      | BlogDeleteStatus400
      | BlogDeleteStatus401
      | BlogDeleteStatus403
      | BlogDeleteStatus404
      | BlogDeleteStatus500
      | BlogDeleteStatus501
    >,
    { id: BlogDeletePathId },
    TContext
  >(
    {
      ...baseOptions,
      mutationKey,
      ...mutationOptions,
    },
    queryClient,
  ) as UseMutationResult<
    BlogDeleteStatus200 | BlogDeleteStatus204,
    ResponseErrorConfig<
      | BlogDeleteStatus400
      | BlogDeleteStatus401
      | BlogDeleteStatus403
      | BlogDeleteStatus404
      | BlogDeleteStatus500
      | BlogDeleteStatus501
    >,
    { id: BlogDeletePathId },
    TContext
  >;
}
