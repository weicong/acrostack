/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type { UseMutationOptions, UseMutationResult, QueryClient } from "@tanstack/react-query";
import type {
  TenantUpdateData,
  TenantUpdatePathId,
  TenantUpdateStatus200,
  TenantUpdateStatus400,
  TenantUpdateStatus401,
  TenantUpdateStatus403,
  TenantUpdateStatus404,
  TenantUpdateStatus500,
  TenantUpdateStatus501,
} from "../../models/tenant/TenantUpdate.ts";
import { mutationOptions, useMutation } from "@tanstack/react-query";
import { tenantUpdate } from "../../clients/tenant/tenantUpdate.ts";

export const tenantUpdateMutationKey = () => [{ url: "/api/multi-tenancy/tenants/:id" }] as const;

export function tenantUpdateMutationOptions<TContext = unknown>(
  config: Partial<RequestConfig<TenantUpdateData>> & {
    client?: Client;
    contentType?: "application/json" | "text/json" | "application/*+json";
  } = {},
) {
  const mutationKey = tenantUpdateMutationKey();
  return mutationOptions<
    TenantUpdateStatus200,
    ResponseErrorConfig<
      | TenantUpdateStatus400
      | TenantUpdateStatus401
      | TenantUpdateStatus403
      | TenantUpdateStatus404
      | TenantUpdateStatus500
      | TenantUpdateStatus501
    >,
    { id: TenantUpdatePathId; data?: TenantUpdateData },
    TContext
  >({
    mutationKey,
    mutationFn: async ({ id, data }) => {
      return tenantUpdate(id, data, config);
    },
  });
}

/**
 * {@link /api/multi-tenancy/tenants/:id}
 */
export function useTenantUpdate<TContext>(
  options: {
    mutation?: UseMutationOptions<
      TenantUpdateStatus200,
      ResponseErrorConfig<
        | TenantUpdateStatus400
        | TenantUpdateStatus401
        | TenantUpdateStatus403
        | TenantUpdateStatus404
        | TenantUpdateStatus500
        | TenantUpdateStatus501
      >,
      { id: TenantUpdatePathId; data?: TenantUpdateData },
      TContext
    > & { client?: QueryClient };
    client?: Partial<RequestConfig<TenantUpdateData>> & {
      client?: Client;
      contentType?: "application/json" | "text/json" | "application/*+json";
    };
  } = {},
) {
  const { mutation = {}, client: config = {} } = options ?? {};
  const { client: queryClient, ...mutationOptions } = mutation;
  const mutationKey = mutationOptions.mutationKey ?? tenantUpdateMutationKey();

  const baseOptions = tenantUpdateMutationOptions(config) as UseMutationOptions<
    TenantUpdateStatus200,
    ResponseErrorConfig<
      | TenantUpdateStatus400
      | TenantUpdateStatus401
      | TenantUpdateStatus403
      | TenantUpdateStatus404
      | TenantUpdateStatus500
      | TenantUpdateStatus501
    >,
    { id: TenantUpdatePathId; data?: TenantUpdateData },
    TContext
  >;

  return useMutation<
    TenantUpdateStatus200,
    ResponseErrorConfig<
      | TenantUpdateStatus400
      | TenantUpdateStatus401
      | TenantUpdateStatus403
      | TenantUpdateStatus404
      | TenantUpdateStatus500
      | TenantUpdateStatus501
    >,
    { id: TenantUpdatePathId; data?: TenantUpdateData },
    TContext
  >(
    {
      ...baseOptions,
      mutationKey,
      ...mutationOptions,
    },
    queryClient,
  ) as UseMutationResult<
    TenantUpdateStatus200,
    ResponseErrorConfig<
      | TenantUpdateStatus400
      | TenantUpdateStatus401
      | TenantUpdateStatus403
      | TenantUpdateStatus404
      | TenantUpdateStatus500
      | TenantUpdateStatus501
    >,
    { id: TenantUpdatePathId; data?: TenantUpdateData },
    TContext
  >;
}
