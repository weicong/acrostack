/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type { UseMutationOptions, UseMutationResult, QueryClient } from "@tanstack/react-query";
import type {
  TenantDeleteDefaultConnectionStringPathId,
  TenantDeleteDefaultConnectionStringStatus200,
  TenantDeleteDefaultConnectionStringStatus204,
  TenantDeleteDefaultConnectionStringStatus400,
  TenantDeleteDefaultConnectionStringStatus401,
  TenantDeleteDefaultConnectionStringStatus403,
  TenantDeleteDefaultConnectionStringStatus404,
  TenantDeleteDefaultConnectionStringStatus500,
  TenantDeleteDefaultConnectionStringStatus501,
} from "../../models/tenant/TenantDeleteDefaultConnectionString.ts";
import { mutationOptions, useMutation } from "@tanstack/react-query";
import { tenantDeleteDefaultConnectionString } from "../../clients/tenant/tenantDeleteDefaultConnectionString.ts";

export const tenantDeleteDefaultConnectionStringMutationKey = () =>
  [{ url: "/api/multi-tenancy/tenants/:id/default-connection-string" }] as const;

export function tenantDeleteDefaultConnectionStringMutationOptions<TContext = unknown>(
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const mutationKey = tenantDeleteDefaultConnectionStringMutationKey();
  return mutationOptions<
    TenantDeleteDefaultConnectionStringStatus200 | TenantDeleteDefaultConnectionStringStatus204,
    ResponseErrorConfig<
      | TenantDeleteDefaultConnectionStringStatus400
      | TenantDeleteDefaultConnectionStringStatus401
      | TenantDeleteDefaultConnectionStringStatus403
      | TenantDeleteDefaultConnectionStringStatus404
      | TenantDeleteDefaultConnectionStringStatus500
      | TenantDeleteDefaultConnectionStringStatus501
    >,
    { id: TenantDeleteDefaultConnectionStringPathId },
    TContext
  >({
    mutationKey,
    mutationFn: async ({ id }) => {
      return tenantDeleteDefaultConnectionString(id, config);
    },
  });
}

/**
 * {@link /api/multi-tenancy/tenants/:id/default-connection-string}
 */
export function useTenantDeleteDefaultConnectionString<TContext>(
  options: {
    mutation?: UseMutationOptions<
      TenantDeleteDefaultConnectionStringStatus200 | TenantDeleteDefaultConnectionStringStatus204,
      ResponseErrorConfig<
        | TenantDeleteDefaultConnectionStringStatus400
        | TenantDeleteDefaultConnectionStringStatus401
        | TenantDeleteDefaultConnectionStringStatus403
        | TenantDeleteDefaultConnectionStringStatus404
        | TenantDeleteDefaultConnectionStringStatus500
        | TenantDeleteDefaultConnectionStringStatus501
      >,
      { id: TenantDeleteDefaultConnectionStringPathId },
      TContext
    > & { client?: QueryClient };
    client?: Partial<RequestConfig> & { client?: Client };
  } = {},
) {
  const { mutation = {}, client: config = {} } = options ?? {};
  const { client: queryClient, ...mutationOptions } = mutation;
  const mutationKey =
    mutationOptions.mutationKey ?? tenantDeleteDefaultConnectionStringMutationKey();

  const baseOptions = tenantDeleteDefaultConnectionStringMutationOptions(
    config,
  ) as UseMutationOptions<
    TenantDeleteDefaultConnectionStringStatus200 | TenantDeleteDefaultConnectionStringStatus204,
    ResponseErrorConfig<
      | TenantDeleteDefaultConnectionStringStatus400
      | TenantDeleteDefaultConnectionStringStatus401
      | TenantDeleteDefaultConnectionStringStatus403
      | TenantDeleteDefaultConnectionStringStatus404
      | TenantDeleteDefaultConnectionStringStatus500
      | TenantDeleteDefaultConnectionStringStatus501
    >,
    { id: TenantDeleteDefaultConnectionStringPathId },
    TContext
  >;

  return useMutation<
    TenantDeleteDefaultConnectionStringStatus200 | TenantDeleteDefaultConnectionStringStatus204,
    ResponseErrorConfig<
      | TenantDeleteDefaultConnectionStringStatus400
      | TenantDeleteDefaultConnectionStringStatus401
      | TenantDeleteDefaultConnectionStringStatus403
      | TenantDeleteDefaultConnectionStringStatus404
      | TenantDeleteDefaultConnectionStringStatus500
      | TenantDeleteDefaultConnectionStringStatus501
    >,
    { id: TenantDeleteDefaultConnectionStringPathId },
    TContext
  >(
    {
      ...baseOptions,
      mutationKey,
      ...mutationOptions,
    },
    queryClient,
  ) as UseMutationResult<
    TenantDeleteDefaultConnectionStringStatus200 | TenantDeleteDefaultConnectionStringStatus204,
    ResponseErrorConfig<
      | TenantDeleteDefaultConnectionStringStatus400
      | TenantDeleteDefaultConnectionStringStatus401
      | TenantDeleteDefaultConnectionStringStatus403
      | TenantDeleteDefaultConnectionStringStatus404
      | TenantDeleteDefaultConnectionStringStatus500
      | TenantDeleteDefaultConnectionStringStatus501
    >,
    { id: TenantDeleteDefaultConnectionStringPathId },
    TContext
  >;
}
