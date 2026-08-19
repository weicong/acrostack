/* oxlint-disable */

import type { UseMutationOptions, UseMutationResult, QueryClient } from "@tanstack/react-query";
import type { RequestConfig, ResponseErrorConfig } from "../../.kubb/client";
import type {
  OpenIddictScopeUpdateOptions,
  OpenIddictScopeUpdateStatus200,
  OpenIddictScopeUpdateStatus400,
  OpenIddictScopeUpdateStatus401,
  OpenIddictScopeUpdateStatus403,
  OpenIddictScopeUpdateStatus404,
  OpenIddictScopeUpdateStatus500,
  OpenIddictScopeUpdateStatus501,
} from "../../models/openIddictScope/OpenIddictScopeUpdate";
import { mutationOptions, useMutation } from "@tanstack/react-query";
import { openIddictScopeUpdate } from "../../clients/openIddictScope/openIddictScopeUpdate";

export const openIddictScopeUpdateMutationKey = () =>
  [{ url: "/api/app/open-iddict-scope/:id" }] as const;

export function openIddictScopeUpdateMutationOptions<TContext = unknown>(
  config: Partial<Omit<RequestConfig, "path" | "query" | "body" | "headers" | "url">> & {
    contentType?: {
      request?: "application/json" | "text/json" | "application/*+json";
      response?: "text/plain" | "application/json" | "text/json";
    };
  } = {},
) {
  const mutationKey = openIddictScopeUpdateMutationKey();
  return mutationOptions<
    OpenIddictScopeUpdateStatus200,
    ResponseErrorConfig<
      | OpenIddictScopeUpdateStatus400
      | OpenIddictScopeUpdateStatus401
      | OpenIddictScopeUpdateStatus403
      | OpenIddictScopeUpdateStatus404
      | OpenIddictScopeUpdateStatus500
      | OpenIddictScopeUpdateStatus501
    >,
    OpenIddictScopeUpdateOptions,
    TContext
  >({
    mutationKey,
    mutationFn: async ({ path, body }) => {
      const { data } = await openIddictScopeUpdate({ ...config, path, body, throwOnError: true });
      return data;
    },
  });
}

/**
 * {@link /api/app/open-iddict-scope/:id}
 */
export function useOpenIddictScopeUpdate<TContext>(
  options: {
    mutation?: UseMutationOptions<
      OpenIddictScopeUpdateStatus200,
      ResponseErrorConfig<
        | OpenIddictScopeUpdateStatus400
        | OpenIddictScopeUpdateStatus401
        | OpenIddictScopeUpdateStatus403
        | OpenIddictScopeUpdateStatus404
        | OpenIddictScopeUpdateStatus500
        | OpenIddictScopeUpdateStatus501
      >,
      OpenIddictScopeUpdateOptions,
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
  const mutationKey = mutationOptions.mutationKey ?? openIddictScopeUpdateMutationKey();

  const baseOptions = openIddictScopeUpdateMutationOptions(config) as UseMutationOptions<
    OpenIddictScopeUpdateStatus200,
    ResponseErrorConfig<
      | OpenIddictScopeUpdateStatus400
      | OpenIddictScopeUpdateStatus401
      | OpenIddictScopeUpdateStatus403
      | OpenIddictScopeUpdateStatus404
      | OpenIddictScopeUpdateStatus500
      | OpenIddictScopeUpdateStatus501
    >,
    OpenIddictScopeUpdateOptions,
    TContext
  >;

  return useMutation<
    OpenIddictScopeUpdateStatus200,
    ResponseErrorConfig<
      | OpenIddictScopeUpdateStatus400
      | OpenIddictScopeUpdateStatus401
      | OpenIddictScopeUpdateStatus403
      | OpenIddictScopeUpdateStatus404
      | OpenIddictScopeUpdateStatus500
      | OpenIddictScopeUpdateStatus501
    >,
    OpenIddictScopeUpdateOptions,
    TContext
  >(
    {
      ...baseOptions,
      mutationKey,
      ...mutationOptions,
    },
    queryClient,
  ) as UseMutationResult<
    OpenIddictScopeUpdateStatus200,
    ResponseErrorConfig<
      | OpenIddictScopeUpdateStatus400
      | OpenIddictScopeUpdateStatus401
      | OpenIddictScopeUpdateStatus403
      | OpenIddictScopeUpdateStatus404
      | OpenIddictScopeUpdateStatus500
      | OpenIddictScopeUpdateStatus501
    >,
    OpenIddictScopeUpdateOptions,
    TContext
  >;
}
