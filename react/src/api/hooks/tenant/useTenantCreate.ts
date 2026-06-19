/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type { UseMutationOptions, UseMutationResult, QueryClient } from "@tanstack/react-query";
import type {
  TenantCreateData,
  TenantCreateStatus200,
  TenantCreateStatus400,
  TenantCreateStatus401,
  TenantCreateStatus403,
  TenantCreateStatus404,
  TenantCreateStatus500,
  TenantCreateStatus501,
} from "../../models/tenant/TenantCreate.ts";
import { mutationOptions, useMutation } from "@tanstack/react-query";
import { tenantCreate } from "../../clients/tenant/tenantCreate.ts";

export const tenantCreateMutationKey = () => [{ url: "/api/multi-tenancy/tenants" }] as const;

export function tenantCreateMutationOptions<TContext = unknown>(
  config: Partial<RequestConfig<TenantCreateData>> & {
    client?: Client;
    contentType?: "application/json" | "text/json" | "application/*+json";
  } = {},
) {
  const mutationKey = tenantCreateMutationKey();
  return mutationOptions<
    TenantCreateStatus200,
    ResponseErrorConfig<
      | TenantCreateStatus400
      | TenantCreateStatus401
      | TenantCreateStatus403
      | TenantCreateStatus404
      | TenantCreateStatus500
      | TenantCreateStatus501
    >,
    { data?: TenantCreateData },
    TContext
  >({
    mutationKey,
    mutationFn: async ({ data }) => {
      return tenantCreate(data, config);
    },
  });
}

/**
 * {@link /api/multi-tenancy/tenants}
 */
export function useTenantCreate<TContext>(
  options: {
    mutation?: UseMutationOptions<
      TenantCreateStatus200,
      ResponseErrorConfig<
        | TenantCreateStatus400
        | TenantCreateStatus401
        | TenantCreateStatus403
        | TenantCreateStatus404
        | TenantCreateStatus500
        | TenantCreateStatus501
      >,
      { data?: TenantCreateData },
      TContext
    > & { client?: QueryClient };
    client?: Partial<RequestConfig<TenantCreateData>> & {
      client?: Client;
      contentType?: "application/json" | "text/json" | "application/*+json";
    };
  } = {},
) {
  const { mutation = {}, client: config = {} } = options ?? {};
  const { client: queryClient, ...mutationOptions } = mutation;
  const mutationKey = mutationOptions.mutationKey ?? tenantCreateMutationKey();

  const baseOptions = tenantCreateMutationOptions(config) as UseMutationOptions<
    TenantCreateStatus200,
    ResponseErrorConfig<
      | TenantCreateStatus400
      | TenantCreateStatus401
      | TenantCreateStatus403
      | TenantCreateStatus404
      | TenantCreateStatus500
      | TenantCreateStatus501
    >,
    { data?: TenantCreateData },
    TContext
  >;

  return useMutation<
    TenantCreateStatus200,
    ResponseErrorConfig<
      | TenantCreateStatus400
      | TenantCreateStatus401
      | TenantCreateStatus403
      | TenantCreateStatus404
      | TenantCreateStatus500
      | TenantCreateStatus501
    >,
    { data?: TenantCreateData },
    TContext
  >(
    {
      ...baseOptions,
      mutationKey,
      ...mutationOptions,
    },
    queryClient,
  ) as UseMutationResult<
    TenantCreateStatus200,
    ResponseErrorConfig<
      | TenantCreateStatus400
      | TenantCreateStatus401
      | TenantCreateStatus403
      | TenantCreateStatus404
      | TenantCreateStatus500
      | TenantCreateStatus501
    >,
    { data?: TenantCreateData },
    TContext
  >;
}
