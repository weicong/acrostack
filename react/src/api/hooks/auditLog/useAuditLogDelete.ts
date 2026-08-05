/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type { UseMutationOptions, UseMutationResult, QueryClient } from "@tanstack/react-query";
import type {
  AuditLogDeletePathId,
  AuditLogDeleteStatus200,
  AuditLogDeleteStatus204,
  AuditLogDeleteStatus400,
  AuditLogDeleteStatus401,
  AuditLogDeleteStatus403,
  AuditLogDeleteStatus404,
  AuditLogDeleteStatus500,
  AuditLogDeleteStatus501,
} from "../../models/auditLog/AuditLogDelete.ts";
import { mutationOptions, useMutation } from "@tanstack/react-query";
import { auditLogDelete } from "../../clients/auditLog/auditLogDelete.ts";

export const auditLogDeleteMutationKey = () => [{ url: "/api/app/audit-log/:id" }] as const;

export function auditLogDeleteMutationOptions<TContext = unknown>(
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const mutationKey = auditLogDeleteMutationKey();
  return mutationOptions<
    AuditLogDeleteStatus200 | AuditLogDeleteStatus204,
    ResponseErrorConfig<
      | AuditLogDeleteStatus400
      | AuditLogDeleteStatus401
      | AuditLogDeleteStatus403
      | AuditLogDeleteStatus404
      | AuditLogDeleteStatus500
      | AuditLogDeleteStatus501
    >,
    { id: AuditLogDeletePathId },
    TContext
  >({
    mutationKey,
    mutationFn: async ({ id }) => {
      return auditLogDelete(id, config);
    },
  });
}

/**
 * {@link /api/app/audit-log/:id}
 */
export function useAuditLogDelete<TContext>(
  options: {
    mutation?: UseMutationOptions<
      AuditLogDeleteStatus200 | AuditLogDeleteStatus204,
      ResponseErrorConfig<
        | AuditLogDeleteStatus400
        | AuditLogDeleteStatus401
        | AuditLogDeleteStatus403
        | AuditLogDeleteStatus404
        | AuditLogDeleteStatus500
        | AuditLogDeleteStatus501
      >,
      { id: AuditLogDeletePathId },
      TContext
    > & { client?: QueryClient };
    client?: Partial<RequestConfig> & { client?: Client };
  } = {},
) {
  const { mutation = {}, client: config = {} } = options ?? {};
  const { client: queryClient, ...mutationOptions } = mutation;
  const mutationKey = mutationOptions.mutationKey ?? auditLogDeleteMutationKey();

  const baseOptions = auditLogDeleteMutationOptions(config) as UseMutationOptions<
    AuditLogDeleteStatus200 | AuditLogDeleteStatus204,
    ResponseErrorConfig<
      | AuditLogDeleteStatus400
      | AuditLogDeleteStatus401
      | AuditLogDeleteStatus403
      | AuditLogDeleteStatus404
      | AuditLogDeleteStatus500
      | AuditLogDeleteStatus501
    >,
    { id: AuditLogDeletePathId },
    TContext
  >;

  return useMutation<
    AuditLogDeleteStatus200 | AuditLogDeleteStatus204,
    ResponseErrorConfig<
      | AuditLogDeleteStatus400
      | AuditLogDeleteStatus401
      | AuditLogDeleteStatus403
      | AuditLogDeleteStatus404
      | AuditLogDeleteStatus500
      | AuditLogDeleteStatus501
    >,
    { id: AuditLogDeletePathId },
    TContext
  >(
    {
      ...baseOptions,
      mutationKey,
      ...mutationOptions,
    },
    queryClient,
  ) as UseMutationResult<
    AuditLogDeleteStatus200 | AuditLogDeleteStatus204,
    ResponseErrorConfig<
      | AuditLogDeleteStatus400
      | AuditLogDeleteStatus401
      | AuditLogDeleteStatus403
      | AuditLogDeleteStatus404
      | AuditLogDeleteStatus500
      | AuditLogDeleteStatus501
    >,
    { id: AuditLogDeletePathId },
    TContext
  >;
}
