/* oxlint-disable */

import type { UseMutationOptions, UseMutationResult, QueryClient } from "@tanstack/react-query";
import type { RequestConfig, ResponseErrorConfig } from "../../.kubb/client";
import type {
  TenantUpdateDefaultConnectionStringOptions,
  TenantUpdateDefaultConnectionStringStatus200,
  TenantUpdateDefaultConnectionStringStatus204,
  TenantUpdateDefaultConnectionStringStatus400,
  TenantUpdateDefaultConnectionStringStatus401,
  TenantUpdateDefaultConnectionStringStatus403,
  TenantUpdateDefaultConnectionStringStatus404,
  TenantUpdateDefaultConnectionStringStatus500,
  TenantUpdateDefaultConnectionStringStatus501,
} from "../../models/tenant/TenantUpdateDefaultConnectionString";
import { mutationOptions, useMutation } from "@tanstack/react-query";
import { tenantUpdateDefaultConnectionString } from "../../clients/tenant/tenantUpdateDefaultConnectionString";

export const tenantUpdateDefaultConnectionStringMutationKey = () =>
  [{ url: "/api/multi-tenancy/tenants/:id/default-connection-string" }] as const;

export function tenantUpdateDefaultConnectionStringMutationOptions<TContext = unknown>(
  config: Partial<Omit<RequestConfig, "path" | "query" | "body" | "headers" | "url">> = {},
) {
  const mutationKey = tenantUpdateDefaultConnectionStringMutationKey();
  return mutationOptions<
    TenantUpdateDefaultConnectionStringStatus200 | TenantUpdateDefaultConnectionStringStatus204,
    ResponseErrorConfig<
      | TenantUpdateDefaultConnectionStringStatus400
      | TenantUpdateDefaultConnectionStringStatus401
      | TenantUpdateDefaultConnectionStringStatus403
      | TenantUpdateDefaultConnectionStringStatus404
      | TenantUpdateDefaultConnectionStringStatus500
      | TenantUpdateDefaultConnectionStringStatus501
    >,
    TenantUpdateDefaultConnectionStringOptions,
    TContext
  >({
    mutationKey,
    mutationFn: async ({ path, query }) => {
      const { data } = await tenantUpdateDefaultConnectionString({
        ...config,
        path,
        query,
        throwOnError: true,
      });
      return data;
    },
  });
}

/**
 * {@link /api/multi-tenancy/tenants/:id/default-connection-string}
 */
export function useTenantUpdateDefaultConnectionString<TContext>(
  options: {
    mutation?: UseMutationOptions<
      TenantUpdateDefaultConnectionStringStatus200 | TenantUpdateDefaultConnectionStringStatus204,
      ResponseErrorConfig<
        | TenantUpdateDefaultConnectionStringStatus400
        | TenantUpdateDefaultConnectionStringStatus401
        | TenantUpdateDefaultConnectionStringStatus403
        | TenantUpdateDefaultConnectionStringStatus404
        | TenantUpdateDefaultConnectionStringStatus500
        | TenantUpdateDefaultConnectionStringStatus501
      >,
      TenantUpdateDefaultConnectionStringOptions,
      TContext
    > & { client?: QueryClient };
    client?: Partial<Omit<RequestConfig, "path" | "query" | "body" | "headers" | "url">>;
  } = {},
) {
  const { mutation = {}, client: config = {} } = options ?? {};
  const { client: queryClient, ...mutationOptions } = mutation;
  const mutationKey =
    mutationOptions.mutationKey ?? tenantUpdateDefaultConnectionStringMutationKey();

  const baseOptions = tenantUpdateDefaultConnectionStringMutationOptions(
    config,
  ) as UseMutationOptions<
    TenantUpdateDefaultConnectionStringStatus200 | TenantUpdateDefaultConnectionStringStatus204,
    ResponseErrorConfig<
      | TenantUpdateDefaultConnectionStringStatus400
      | TenantUpdateDefaultConnectionStringStatus401
      | TenantUpdateDefaultConnectionStringStatus403
      | TenantUpdateDefaultConnectionStringStatus404
      | TenantUpdateDefaultConnectionStringStatus500
      | TenantUpdateDefaultConnectionStringStatus501
    >,
    TenantUpdateDefaultConnectionStringOptions,
    TContext
  >;

  return useMutation<
    TenantUpdateDefaultConnectionStringStatus200 | TenantUpdateDefaultConnectionStringStatus204,
    ResponseErrorConfig<
      | TenantUpdateDefaultConnectionStringStatus400
      | TenantUpdateDefaultConnectionStringStatus401
      | TenantUpdateDefaultConnectionStringStatus403
      | TenantUpdateDefaultConnectionStringStatus404
      | TenantUpdateDefaultConnectionStringStatus500
      | TenantUpdateDefaultConnectionStringStatus501
    >,
    TenantUpdateDefaultConnectionStringOptions,
    TContext
  >(
    {
      ...baseOptions,
      mutationKey,
      ...mutationOptions,
    },
    queryClient,
  ) as UseMutationResult<
    TenantUpdateDefaultConnectionStringStatus200 | TenantUpdateDefaultConnectionStringStatus204,
    ResponseErrorConfig<
      | TenantUpdateDefaultConnectionStringStatus400
      | TenantUpdateDefaultConnectionStringStatus401
      | TenantUpdateDefaultConnectionStringStatus403
      | TenantUpdateDefaultConnectionStringStatus404
      | TenantUpdateDefaultConnectionStringStatus500
      | TenantUpdateDefaultConnectionStringStatus501
    >,
    TenantUpdateDefaultConnectionStringOptions,
    TContext
  >;
}
