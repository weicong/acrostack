/* oxlint-disable */

import type { UseMutationOptions, UseMutationResult, QueryClient } from "@tanstack/react-query";
import type { RequestConfig, ResponseErrorConfig } from "../../.kubb/client";
import type {
  AuditLogDeleteManyOptions,
  AuditLogDeleteManyStatus200,
  AuditLogDeleteManyStatus204,
  AuditLogDeleteManyStatus400,
  AuditLogDeleteManyStatus401,
  AuditLogDeleteManyStatus403,
  AuditLogDeleteManyStatus404,
  AuditLogDeleteManyStatus500,
  AuditLogDeleteManyStatus501,
} from "../../models/auditLog/AuditLogDeleteMany";
import { mutationOptions, useMutation } from "@tanstack/react-query";
import { auditLogDeleteMany } from "../../clients/auditLog/auditLogDeleteMany";

export const auditLogDeleteManyMutationKey = () => [{ url: "/api/app/audit-log/many" }] as const;

export function auditLogDeleteManyMutationOptions<TContext = unknown>(
  config: Partial<Omit<RequestConfig, "path" | "query" | "body" | "headers" | "url">> = {},
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
    AuditLogDeleteManyOptions,
    TContext
  >({
    mutationKey,
    mutationFn: async ({ query }) => {
      const { data } = await auditLogDeleteMany({ ...config, query, throwOnError: true });
      return data;
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
      AuditLogDeleteManyOptions,
      TContext
    > & { client?: QueryClient };
    client?: Partial<Omit<RequestConfig, "path" | "query" | "body" | "headers" | "url">>;
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
    AuditLogDeleteManyOptions,
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
    AuditLogDeleteManyOptions,
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
    AuditLogDeleteManyOptions,
    TContext
  >;
}
