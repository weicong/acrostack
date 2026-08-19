/* oxlint-disable */

import type { UseMutationOptions, UseMutationResult, QueryClient } from "@tanstack/react-query";
import type { RequestConfig, ResponseErrorConfig } from "../../.kubb/client";
import type {
  TenantCreateOptions,
  TenantCreateStatus200,
  TenantCreateStatus400,
  TenantCreateStatus401,
  TenantCreateStatus403,
  TenantCreateStatus404,
  TenantCreateStatus500,
  TenantCreateStatus501,
} from "../../models/tenant/TenantCreate";
import { mutationOptions, useMutation } from "@tanstack/react-query";
import { tenantCreate } from "../../clients/tenant/tenantCreate";

export const tenantCreateMutationKey = () => [{ url: "/api/multi-tenancy/tenants" }] as const;

export function tenantCreateMutationOptions<TContext = unknown>(
  config: Partial<Omit<RequestConfig, "path" | "query" | "body" | "headers" | "url">> & {
    contentType?: {
      request?: "application/json" | "text/json" | "application/*+json";
      response?: "text/plain" | "application/json" | "text/json";
    };
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
    TenantCreateOptions,
    TContext
  >({
    mutationKey,
    mutationFn: async ({ body }) => {
      const { data } = await tenantCreate({ ...config, body, throwOnError: true });
      return data;
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
      TenantCreateOptions,
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
    TenantCreateOptions,
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
    TenantCreateOptions,
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
    TenantCreateOptions,
    TContext
  >;
}
