/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type { UseMutationOptions, UseMutationResult, QueryClient } from "@tanstack/react-query";
import type {
  AuditLogDeleteManyQueryIds,
  AuditLogDeleteManyStatus200,
  AuditLogDeleteManyStatus204,
  AuditLogDeleteManyStatus400,
  AuditLogDeleteManyStatus401,
  AuditLogDeleteManyStatus403,
  AuditLogDeleteManyStatus404,
  AuditLogDeleteManyStatus500,
  AuditLogDeleteManyStatus501,
} from "../../models/auditLog/AuditLogDeleteMany.ts";
import { mutationOptions, useMutation } from "@tanstack/react-query";
import { auditLogDeleteMany } from "../../clients/auditLog/auditLogDeleteMany.ts";

export const auditLogDeleteManyMutationKey = () => [{ url: "/api/app/audit-log/many" }] as const;

export function auditLogDeleteManyMutationOptions<TContext = unknown>(
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const mutationKey = auditLogDeleteManyMutationKey();
  return mutationOptions<
    AuditLogDeleteManyStatus200 | AuditLogDeleteManyStatus204,
    ResponseErrorConfig<
      | AuditLogDeleteManyStatus400
      | AuditLogDeleteManyStatus401
      | AuditLogDeleteManyStatus403
      | AuditLogDeleteManyStatus404
      | AuditLogDeleteManyStatus500
      | AuditLogDeleteManyStatus501
    >,
    { params?: { ids?: AuditLogDeleteManyQueryIds } },
    TContext
  >({
    mutationKey,
    mutationFn: async ({ params }) => {
      return auditLogDeleteMany(params, config);
    },
  });
}

/**
 * {@link /api/app/audit-log/many}
 */
export function useAuditLogDeleteMany<TContext>(
  options: {
    mutation?: UseMutationOptions<
      AuditLogDeleteManyStatus200 | AuditLogDeleteManyStatus204,
      ResponseErrorConfig<
        | AuditLogDeleteManyStatus400
        | AuditLogDeleteManyStatus401
        | AuditLogDeleteManyStatus403
        | AuditLogDeleteManyStatus404
        | AuditLogDeleteManyStatus500
        | AuditLogDeleteManyStatus501
      >,
      { params?: { ids?: AuditLogDeleteManyQueryIds } },
      TContext
    > & { client?: QueryClient };
    client?: Partial<RequestConfig> & { client?: Client };
  } = {},
) {
  const { mutation = {}, client: config = {} } = options ?? {};
  const { client: queryClient, ...mutationOptions } = mutation;
  const mutationKey = mutationOptions.mutationKey ?? auditLogDeleteManyMutationKey();

  const baseOptions = auditLogDeleteManyMutationOptions(config) as UseMutationOptions<
    AuditLogDeleteManyStatus200 | AuditLogDeleteManyStatus204,
    ResponseErrorConfig<
      | AuditLogDeleteManyStatus400
      | AuditLogDeleteManyStatus401
      | AuditLogDeleteManyStatus403
      | AuditLogDeleteManyStatus404
      | AuditLogDeleteManyStatus500
      | AuditLogDeleteManyStatus501
    >,
    { params?: { ids?: AuditLogDeleteManyQueryIds } },
    TContext
  >;

  return useMutation<
    AuditLogDeleteManyStatus200 | AuditLogDeleteManyStatus204,
    ResponseErrorConfig<
      | AuditLogDeleteManyStatus400
      | AuditLogDeleteManyStatus401
      | AuditLogDeleteManyStatus403
      | AuditLogDeleteManyStatus404
      | AuditLogDeleteManyStatus500
      | AuditLogDeleteManyStatus501
    >,
    { params?: { ids?: AuditLogDeleteManyQueryIds } },
    TContext
  >(
    {
      ...baseOptions,
      mutationKey,
      ...mutationOptions,
    },
    queryClient,
  ) as UseMutationResult<
    AuditLogDeleteManyStatus200 | AuditLogDeleteManyStatus204,
    ResponseErrorConfig<
      | AuditLogDeleteManyStatus400
      | AuditLogDeleteManyStatus401
      | AuditLogDeleteManyStatus403
      | AuditLogDeleteManyStatus404
      | AuditLogDeleteManyStatus500
      | AuditLogDeleteManyStatus501
    >,
    { params?: { ids?: AuditLogDeleteManyQueryIds } },
    TContext
  >;
}
