/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type { UseMutationOptions, UseMutationResult, QueryClient } from "@tanstack/react-query";
import type {
  TenantUpdateDefaultConnectionStringPathId,
  TenantUpdateDefaultConnectionStringQueryDefaultConnectionString,
  TenantUpdateDefaultConnectionStringStatus200,
  TenantUpdateDefaultConnectionStringStatus204,
  TenantUpdateDefaultConnectionStringStatus400,
  TenantUpdateDefaultConnectionStringStatus401,
  TenantUpdateDefaultConnectionStringStatus403,
  TenantUpdateDefaultConnectionStringStatus404,
  TenantUpdateDefaultConnectionStringStatus500,
  TenantUpdateDefaultConnectionStringStatus501,
} from "../../models/tenant/TenantUpdateDefaultConnectionString.ts";
import { mutationOptions, useMutation } from "@tanstack/react-query";
import { tenantUpdateDefaultConnectionString } from "../../clients/tenant/tenantUpdateDefaultConnectionString.ts";

export const tenantUpdateDefaultConnectionStringMutationKey = () =>
  [{ url: "/api/multi-tenancy/tenants/:id/default-connection-string" }] as const;

export function tenantUpdateDefaultConnectionStringMutationOptions<TContext = unknown>(
  config: Partial<RequestConfig> & { client?: Client } = {},
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
    {
      id: TenantUpdateDefaultConnectionStringPathId;
      params?: {
        defaultConnectionString?: TenantUpdateDefaultConnectionStringQueryDefaultConnectionString;
      };
    },
    TContext
  >({
    mutationKey,
    mutationFn: async ({ id, params }) => {
      return tenantUpdateDefaultConnectionString(id, params, config);
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
      {
        id: TenantUpdateDefaultConnectionStringPathId;
        params?: {
          defaultConnectionString?: TenantUpdateDefaultConnectionStringQueryDefaultConnectionString;
        };
      },
      TContext
    > & { client?: QueryClient };
    client?: Partial<RequestConfig> & { client?: Client };
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
    {
      id: TenantUpdateDefaultConnectionStringPathId;
      params?: {
        defaultConnectionString?: TenantUpdateDefaultConnectionStringQueryDefaultConnectionString;
      };
    },
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
    {
      id: TenantUpdateDefaultConnectionStringPathId;
      params?: {
        defaultConnectionString?: TenantUpdateDefaultConnectionStringQueryDefaultConnectionString;
      };
    },
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
    {
      id: TenantUpdateDefaultConnectionStringPathId;
      params?: {
        defaultConnectionString?: TenantUpdateDefaultConnectionStringQueryDefaultConnectionString;
      };
    },
    TContext
  >;
}
