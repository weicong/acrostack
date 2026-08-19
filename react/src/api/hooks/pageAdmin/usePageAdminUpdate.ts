/* oxlint-disable */

import type { UseMutationOptions, UseMutationResult, QueryClient } from "@tanstack/react-query";
import type { RequestConfig, ResponseErrorConfig } from "../../.kubb/client";
import type {
  PageAdminUpdateOptions,
  PageAdminUpdateStatus200,
  PageAdminUpdateStatus400,
  PageAdminUpdateStatus401,
  PageAdminUpdateStatus403,
  PageAdminUpdateStatus404,
  PageAdminUpdateStatus500,
  PageAdminUpdateStatus501,
} from "../../models/pageAdmin/PageAdminUpdate";
import { mutationOptions, useMutation } from "@tanstack/react-query";
import { pageAdminUpdate } from "../../clients/pageAdmin/pageAdminUpdate";

export const pageAdminUpdateMutationKey = () => [{ url: "/api/cms-kit-admin/pages/:id" }] as const;

export function pageAdminUpdateMutationOptions<TContext = unknown>(
  config: Partial<Omit<RequestConfig, "path" | "query" | "body" | "headers" | "url">> & {
    contentType?: {
      request?: "application/json" | "text/json" | "application/*+json";
      response?: "text/plain" | "application/json" | "text/json";
    };
  } = {},
) {
  const mutationKey = pageAdminUpdateMutationKey();
  return mutationOptions<
    PageAdminUpdateStatus200,
    ResponseErrorConfig<
      | PageAdminUpdateStatus400
      | PageAdminUpdateStatus401
      | PageAdminUpdateStatus403
      | PageAdminUpdateStatus404
      | PageAdminUpdateStatus500
      | PageAdminUpdateStatus501
    >,
    PageAdminUpdateOptions,
    TContext
  >({
    mutationKey,
    mutationFn: async ({ path, body }) => {
      const { data } = await pageAdminUpdate({ ...config, path, body, throwOnError: true });
      return data;
    },
  });
}

/**
 * {@link /api/cms-kit-admin/pages/:id}
 */
export function usePageAdminUpdate<TContext>(
  options: {
    mutation?: UseMutationOptions<
      PageAdminUpdateStatus200,
      ResponseErrorConfig<
        | PageAdminUpdateStatus400
        | PageAdminUpdateStatus401
        | PageAdminUpdateStatus403
        | PageAdminUpdateStatus404
        | PageAdminUpdateStatus500
        | PageAdminUpdateStatus501
      >,
      PageAdminUpdateOptions,
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
  const mutationKey = mutationOptions.mutationKey ?? pageAdminUpdateMutationKey();

  const baseOptions = pageAdminUpdateMutationOptions(config) as UseMutationOptions<
    PageAdminUpdateStatus200,
    ResponseErrorConfig<
      | PageAdminUpdateStatus400
      | PageAdminUpdateStatus401
      | PageAdminUpdateStatus403
      | PageAdminUpdateStatus404
      | PageAdminUpdateStatus500
      | PageAdminUpdateStatus501
    >,
    PageAdminUpdateOptions,
    TContext
  >;

  return useMutation<
    PageAdminUpdateStatus200,
    ResponseErrorConfig<
      | PageAdminUpdateStatus400
      | PageAdminUpdateStatus401
      | PageAdminUpdateStatus403
      | PageAdminUpdateStatus404
      | PageAdminUpdateStatus500
      | PageAdminUpdateStatus501
    >,
    PageAdminUpdateOptions,
    TContext
  >(
    {
      ...baseOptions,
      mutationKey,
      ...mutationOptions,
    },
    queryClient,
  ) as UseMutationResult<
    PageAdminUpdateStatus200,
    ResponseErrorConfig<
      | PageAdminUpdateStatus400
      | PageAdminUpdateStatus401
      | PageAdminUpdateStatus403
      | PageAdminUpdateStatus404
      | PageAdminUpdateStatus500
      | PageAdminUpdateStatus501
    >,
    PageAdminUpdateOptions,
    TContext
  >;
}
