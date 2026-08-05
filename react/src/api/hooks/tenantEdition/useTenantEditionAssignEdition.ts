/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type { UseMutationOptions, UseMutationResult, QueryClient } from "@tanstack/react-query";
import type {
  TenantEditionAssignEditionData,
  TenantEditionAssignEditionPathTenantId,
  TenantEditionAssignEditionStatus200,
  TenantEditionAssignEditionStatus204,
  TenantEditionAssignEditionStatus400,
  TenantEditionAssignEditionStatus401,
  TenantEditionAssignEditionStatus403,
  TenantEditionAssignEditionStatus404,
  TenantEditionAssignEditionStatus500,
  TenantEditionAssignEditionStatus501,
} from "../../models/tenantEdition/TenantEditionAssignEdition.ts";
import { mutationOptions, useMutation } from "@tanstack/react-query";
import { tenantEditionAssignEdition } from "../../clients/tenantEdition/tenantEditionAssignEdition.ts";

export const tenantEditionAssignEditionMutationKey = () =>
  [{ url: "/api/app/tenant-edition/assign-edition/:tenantId" }] as const;

export function tenantEditionAssignEditionMutationOptions<TContext = unknown>(
  config: Partial<RequestConfig<TenantEditionAssignEditionData>> & {
    client?: Client;
    contentType?: "application/json" | "text/json" | "application/*+json";
  } = {},
) {
  const mutationKey = tenantEditionAssignEditionMutationKey();
  return mutationOptions<
    TenantEditionAssignEditionStatus200 | TenantEditionAssignEditionStatus204,
    ResponseErrorConfig<
      | TenantEditionAssignEditionStatus400
      | TenantEditionAssignEditionStatus401
      | TenantEditionAssignEditionStatus403
      | TenantEditionAssignEditionStatus404
      | TenantEditionAssignEditionStatus500
      | TenantEditionAssignEditionStatus501
    >,
    { tenantId: TenantEditionAssignEditionPathTenantId; data?: TenantEditionAssignEditionData },
    TContext
  >({
    mutationKey,
    mutationFn: async ({ tenantId, data }) => {
      return tenantEditionAssignEdition(tenantId, data, config);
    },
  });
}

/**
 * {@link /api/app/tenant-edition/assign-edition/:tenantId}
 */
export function useTenantEditionAssignEdition<TContext>(
  options: {
    mutation?: UseMutationOptions<
      TenantEditionAssignEditionStatus200 | TenantEditionAssignEditionStatus204,
      ResponseErrorConfig<
        | TenantEditionAssignEditionStatus400
        | TenantEditionAssignEditionStatus401
        | TenantEditionAssignEditionStatus403
        | TenantEditionAssignEditionStatus404
        | TenantEditionAssignEditionStatus500
        | TenantEditionAssignEditionStatus501
      >,
      { tenantId: TenantEditionAssignEditionPathTenantId; data?: TenantEditionAssignEditionData },
      TContext
    > & { client?: QueryClient };
    client?: Partial<RequestConfig<TenantEditionAssignEditionData>> & {
      client?: Client;
      contentType?: "application/json" | "text/json" | "application/*+json";
    };
  } = {},
) {
  const { mutation = {}, client: config = {} } = options ?? {};
  const { client: queryClient, ...mutationOptions } = mutation;
  const mutationKey = mutationOptions.mutationKey ?? tenantEditionAssignEditionMutationKey();

  const baseOptions = tenantEditionAssignEditionMutationOptions(config) as UseMutationOptions<
    TenantEditionAssignEditionStatus200 | TenantEditionAssignEditionStatus204,
    ResponseErrorConfig<
      | TenantEditionAssignEditionStatus400
      | TenantEditionAssignEditionStatus401
      | TenantEditionAssignEditionStatus403
      | TenantEditionAssignEditionStatus404
      | TenantEditionAssignEditionStatus500
      | TenantEditionAssignEditionStatus501
    >,
    { tenantId: TenantEditionAssignEditionPathTenantId; data?: TenantEditionAssignEditionData },
    TContext
  >;

  return useMutation<
    TenantEditionAssignEditionStatus200 | TenantEditionAssignEditionStatus204,
    ResponseErrorConfig<
      | TenantEditionAssignEditionStatus400
      | TenantEditionAssignEditionStatus401
      | TenantEditionAssignEditionStatus403
      | TenantEditionAssignEditionStatus404
      | TenantEditionAssignEditionStatus500
      | TenantEditionAssignEditionStatus501
    >,
    { tenantId: TenantEditionAssignEditionPathTenantId; data?: TenantEditionAssignEditionData },
    TContext
  >(
    {
      ...baseOptions,
      mutationKey,
      ...mutationOptions,
    },
    queryClient,
  ) as UseMutationResult<
    TenantEditionAssignEditionStatus200 | TenantEditionAssignEditionStatus204,
    ResponseErrorConfig<
      | TenantEditionAssignEditionStatus400
      | TenantEditionAssignEditionStatus401
      | TenantEditionAssignEditionStatus403
      | TenantEditionAssignEditionStatus404
      | TenantEditionAssignEditionStatus500
      | TenantEditionAssignEditionStatus501
    >,
    { tenantId: TenantEditionAssignEditionPathTenantId; data?: TenantEditionAssignEditionData },
    TContext
  >;
}
