/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type { UseMutationOptions, UseMutationResult, QueryClient } from "@tanstack/react-query";
import type {
  RoleDeletePathId,
  RoleDeleteStatus200,
  RoleDeleteStatus204,
  RoleDeleteStatus400,
  RoleDeleteStatus401,
  RoleDeleteStatus403,
  RoleDeleteStatus404,
  RoleDeleteStatus500,
  RoleDeleteStatus501,
} from "../../models/role/RoleDelete.ts";
import { mutationOptions, useMutation } from "@tanstack/react-query";
import { roleDelete } from "../../clients/role/roleDelete.ts";

export const roleDeleteMutationKey = () => [{ url: "/api/identity/roles/:id" }] as const;

export function roleDeleteMutationOptions<TContext = unknown>(
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const mutationKey = roleDeleteMutationKey();
  return mutationOptions<
    RoleDeleteStatus200 | RoleDeleteStatus204,
    ResponseErrorConfig<
      | RoleDeleteStatus400
      | RoleDeleteStatus401
      | RoleDeleteStatus403
      | RoleDeleteStatus404
      | RoleDeleteStatus500
      | RoleDeleteStatus501
    >,
    { id: RoleDeletePathId },
    TContext
  >({
    mutationKey,
    mutationFn: async ({ id }) => {
      return roleDelete(id, config);
    },
  });
}

/**
 * {@link /api/identity/roles/:id}
 */
export function useRoleDelete<TContext>(
  options: {
    mutation?: UseMutationOptions<
      RoleDeleteStatus200 | RoleDeleteStatus204,
      ResponseErrorConfig<
        | RoleDeleteStatus400
        | RoleDeleteStatus401
        | RoleDeleteStatus403
        | RoleDeleteStatus404
        | RoleDeleteStatus500
        | RoleDeleteStatus501
      >,
      { id: RoleDeletePathId },
      TContext
    > & { client?: QueryClient };
    client?: Partial<RequestConfig> & { client?: Client };
  } = {},
) {
  const { mutation = {}, client: config = {} } = options ?? {};
  const { client: queryClient, ...mutationOptions } = mutation;
  const mutationKey = mutationOptions.mutationKey ?? roleDeleteMutationKey();

  const baseOptions = roleDeleteMutationOptions(config) as UseMutationOptions<
    RoleDeleteStatus200 | RoleDeleteStatus204,
    ResponseErrorConfig<
      | RoleDeleteStatus400
      | RoleDeleteStatus401
      | RoleDeleteStatus403
      | RoleDeleteStatus404
      | RoleDeleteStatus500
      | RoleDeleteStatus501
    >,
    { id: RoleDeletePathId },
    TContext
  >;

  return useMutation<
    RoleDeleteStatus200 | RoleDeleteStatus204,
    ResponseErrorConfig<
      | RoleDeleteStatus400
      | RoleDeleteStatus401
      | RoleDeleteStatus403
      | RoleDeleteStatus404
      | RoleDeleteStatus500
      | RoleDeleteStatus501
    >,
    { id: RoleDeletePathId },
    TContext
  >(
    {
      ...baseOptions,
      mutationKey,
      ...mutationOptions,
    },
    queryClient,
  ) as UseMutationResult<
    RoleDeleteStatus200 | RoleDeleteStatus204,
    ResponseErrorConfig<
      | RoleDeleteStatus400
      | RoleDeleteStatus401
      | RoleDeleteStatus403
      | RoleDeleteStatus404
      | RoleDeleteStatus500
      | RoleDeleteStatus501
    >,
    { id: RoleDeletePathId },
    TContext
  >;
}
