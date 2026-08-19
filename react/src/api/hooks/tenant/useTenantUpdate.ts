/* oxlint-disable */

import type { UseMutationOptions, UseMutationResult, QueryClient } from "@tanstack/react-query";
import type { RequestConfig, ResponseErrorConfig } from "../../.kubb/client";
import type {
  TenantUpdateOptions,
  TenantUpdateStatus200,
  TenantUpdateStatus400,
  TenantUpdateStatus401,
  TenantUpdateStatus403,
  TenantUpdateStatus404,
  TenantUpdateStatus500,
  TenantUpdateStatus501,
} from "../../models/tenant/TenantUpdate";
import { mutationOptions, useMutation } from "@tanstack/react-query";
import { tenantUpdate } from "../../clients/tenant/tenantUpdate";

export const tenantUpdateMutationKey = () => [{ url: "/api/multi-tenancy/tenants/:id" }] as const;

export function tenantUpdateMutationOptions<TContext = unknown>(
  config: Partial<Omit<RequestConfig, "path" | "query" | "body" | "headers" | "url">> & {
    contentType?: {
      request?: "application/json" | "text/json" | "application/*+json";
      response?: "text/plain" | "application/json" | "text/json";
    };
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
    TenantUpdateOptions,
    TContext
  >({
    mutationKey,
    mutationFn: async ({ path, body }) => {
      const { data } = await tenantUpdate({ ...config, path, body, throwOnError: true });
      return data;
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
      TenantUpdateOptions,
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
    TenantUpdateOptions,
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
    TenantUpdateOptions,
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
    TenantUpdateOptions,
    TContext
  >;
}
