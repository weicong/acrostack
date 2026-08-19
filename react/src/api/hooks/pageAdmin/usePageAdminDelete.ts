/* oxlint-disable */

import type { UseMutationOptions, UseMutationResult, QueryClient } from "@tanstack/react-query";
import type { RequestConfig, ResponseErrorConfig } from "../../.kubb/client";
import type {
  PageAdminDeleteOptions,
  PageAdminDeleteStatus200,
  PageAdminDeleteStatus204,
  PageAdminDeleteStatus400,
  PageAdminDeleteStatus401,
  PageAdminDeleteStatus403,
  PageAdminDeleteStatus404,
  PageAdminDeleteStatus500,
  PageAdminDeleteStatus501,
} from "../../models/pageAdmin/PageAdminDelete";
import { mutationOptions, useMutation } from "@tanstack/react-query";
import { pageAdminDelete } from "../../clients/pageAdmin/pageAdminDelete";

export const pageAdminDeleteMutationKey = () => [{ url: "/api/cms-kit-admin/pages/:id" }] as const;

export function pageAdminDeleteMutationOptions<TContext = unknown>(
  config: Partial<Omit<RequestConfig, "path" | "query" | "body" | "headers" | "url">> = {},
) {
  const mutationKey = pageAdminDeleteMutationKey();
  return mutationOptions<
    PageAdminDeleteStatus200 | PageAdminDeleteStatus204,
    ResponseErrorConfig<
      | PageAdminDeleteStatus400
      | PageAdminDeleteStatus401
      | PageAdminDeleteStatus403
      | PageAdminDeleteStatus404
      | PageAdminDeleteStatus500
      | PageAdminDeleteStatus501
    >,
    PageAdminDeleteOptions,
    TContext
  >({
    mutationKey,
    mutationFn: async ({ path }) => {
      const { data } = await pageAdminDelete({ ...config, path, throwOnError: true });
      return data;
    },
  });
}

/**
 * {@link /api/cms-kit-admin/pages/:id}
 */
export function usePageAdminDelete<TContext>(
  options: {
    mutation?: UseMutationOptions<
      PageAdminDeleteStatus200 | PageAdminDeleteStatus204,
      ResponseErrorConfig<
        | PageAdminDeleteStatus400
        | PageAdminDeleteStatus401
        | PageAdminDeleteStatus403
        | PageAdminDeleteStatus404
        | PageAdminDeleteStatus500
        | PageAdminDeleteStatus501
      >,
      PageAdminDeleteOptions,
      TContext
    > & { client?: QueryClient };
    client?: Partial<Omit<RequestConfig, "path" | "query" | "body" | "headers" | "url">>;
  } = {},
) {
  const { mutation = {}, client: config = {} } = options ?? {};
  const { client: queryClient, ...mutationOptions } = mutation;
  const mutationKey = mutationOptions.mutationKey ?? pageAdminDeleteMutationKey();

  const baseOptions = pageAdminDeleteMutationOptions(config) as UseMutationOptions<
    PageAdminDeleteStatus200 | PageAdminDeleteStatus204,
    ResponseErrorConfig<
      | PageAdminDeleteStatus400
      | PageAdminDeleteStatus401
      | PageAdminDeleteStatus403
      | PageAdminDeleteStatus404
      | PageAdminDeleteStatus500
      | PageAdminDeleteStatus501
    >,
    PageAdminDeleteOptions,
    TContext
  >;

  return useMutation<
    PageAdminDeleteStatus200 | PageAdminDeleteStatus204,
    ResponseErrorConfig<
      | PageAdminDeleteStatus400
      | PageAdminDeleteStatus401
      | PageAdminDeleteStatus403
      | PageAdminDeleteStatus404
      | PageAdminDeleteStatus500
      | PageAdminDeleteStatus501
    >,
    PageAdminDeleteOptions,
    TContext
  >(
    {
      ...baseOptions,
      mutationKey,
      ...mutationOptions,
    },
    queryClient,
  ) as UseMutationResult<
    PageAdminDeleteStatus200 | PageAdminDeleteStatus204,
    ResponseErrorConfig<
      | PageAdminDeleteStatus400
      | PageAdminDeleteStatus401
      | PageAdminDeleteStatus403
      | PageAdminDeleteStatus404
      | PageAdminDeleteStatus500
      | PageAdminDeleteStatus501
    >,
    PageAdminDeleteOptions,
    TContext
  >;
}
