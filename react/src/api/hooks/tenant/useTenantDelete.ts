/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type { UseMutationOptions, UseMutationResult, QueryClient } from "@tanstack/react-query";
import type {
  TenantDeletePathId,
  TenantDeleteStatus200,
  TenantDeleteStatus204,
  TenantDeleteStatus400,
  TenantDeleteStatus401,
  TenantDeleteStatus403,
  TenantDeleteStatus404,
  TenantDeleteStatus500,
  TenantDeleteStatus501,
} from "../../models/tenant/TenantDelete.ts";
import { mutationOptions, useMutation } from "@tanstack/react-query";
import { tenantDelete } from "../../clients/tenant/tenantDelete.ts";

export const tenantDeleteMutationKey = () => [{ url: "/api/multi-tenancy/tenants/:id" }] as const;

export function tenantDeleteMutationOptions<TContext = unknown>(
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const mutationKey = tenantDeleteMutationKey();
  return mutationOptions<
    TenantDeleteStatus200 | TenantDeleteStatus204,
    ResponseErrorConfig<
      | TenantDeleteStatus400
      | TenantDeleteStatus401
      | TenantDeleteStatus403
      | TenantDeleteStatus404
      | TenantDeleteStatus500
      | TenantDeleteStatus501
    >,
    { id: TenantDeletePathId },
    TContext
  >({
    mutationKey,
    mutationFn: async ({ id }) => {
      return tenantDelete(id, config);
    },
  });
}

/**
 * {@link /api/multi-tenancy/tenants/:id}
 */
export function useTenantDelete<TContext>(
  options: {
    mutation?: UseMutationOptions<
      TenantDeleteStatus200 | TenantDeleteStatus204,
      ResponseErrorConfig<
        | TenantDeleteStatus400
        | TenantDeleteStatus401
        | TenantDeleteStatus403
        | TenantDeleteStatus404
        | TenantDeleteStatus500
        | TenantDeleteStatus501
      >,
      { id: TenantDeletePathId },
      TContext
    > & { client?: QueryClient };
    client?: Partial<RequestConfig> & { client?: Client };
  } = {},
) {
  const { mutation = {}, client: config = {} } = options ?? {};
  const { client: queryClient, ...mutationOptions } = mutation;
  const mutationKey = mutationOptions.mutationKey ?? tenantDeleteMutationKey();

  const baseOptions = tenantDeleteMutationOptions(config) as UseMutationOptions<
    TenantDeleteStatus200 | TenantDeleteStatus204,
    ResponseErrorConfig<
      | TenantDeleteStatus400
      | TenantDeleteStatus401
      | TenantDeleteStatus403
      | TenantDeleteStatus404
      | TenantDeleteStatus500
      | TenantDeleteStatus501
    >,
    { id: TenantDeletePathId },
    TContext
  >;

  return useMutation<
    TenantDeleteStatus200 | TenantDeleteStatus204,
    ResponseErrorConfig<
      | TenantDeleteStatus400
      | TenantDeleteStatus401
      | TenantDeleteStatus403
      | TenantDeleteStatus404
      | TenantDeleteStatus500
      | TenantDeleteStatus501
    >,
    { id: TenantDeletePathId },
    TContext
  >(
    {
      ...baseOptions,
      mutationKey,
      ...mutationOptions,
    },
    queryClient,
  ) as UseMutationResult<
    TenantDeleteStatus200 | TenantDeleteStatus204,
    ResponseErrorConfig<
      | TenantDeleteStatus400
      | TenantDeleteStatus401
      | TenantDeleteStatus403
      | TenantDeleteStatus404
      | TenantDeleteStatus500
      | TenantDeleteStatus501
    >,
    { id: TenantDeletePathId },
    TContext
  >;
}
