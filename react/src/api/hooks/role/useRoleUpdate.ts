/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type { UseMutationOptions, UseMutationResult, QueryClient } from "@tanstack/react-query";
import type {
  RoleUpdateData,
  RoleUpdatePathId,
  RoleUpdateStatus200,
  RoleUpdateStatus400,
  RoleUpdateStatus401,
  RoleUpdateStatus403,
  RoleUpdateStatus404,
  RoleUpdateStatus500,
  RoleUpdateStatus501,
} from "../../models/role/RoleUpdate.ts";
import { mutationOptions, useMutation } from "@tanstack/react-query";
import { roleUpdate } from "../../clients/role/roleUpdate.ts";

export const roleUpdateMutationKey = () => [{ url: "/api/identity/roles/:id" }] as const;

export function roleUpdateMutationOptions<TContext = unknown>(
  config: Partial<RequestConfig<RoleUpdateData>> & {
    client?: Client;
    contentType?: "application/json" | "text/json" | "application/*+json";
  } = {},
) {
  const mutationKey = roleUpdateMutationKey();
  return mutationOptions<
    RoleUpdateStatus200,
    ResponseErrorConfig<
      | RoleUpdateStatus400
      | RoleUpdateStatus401
      | RoleUpdateStatus403
      | RoleUpdateStatus404
      | RoleUpdateStatus500
      | RoleUpdateStatus501
    >,
    { id: RoleUpdatePathId; data?: RoleUpdateData },
    TContext
  >({
    mutationKey,
    mutationFn: async ({ id, data }) => {
      return roleUpdate(id, data, config);
    },
  });
}

/**
 * {@link /api/identity/roles/:id}
 */
export function useRoleUpdate<TContext>(
  options: {
    mutation?: UseMutationOptions<
      RoleUpdateStatus200,
      ResponseErrorConfig<
        | RoleUpdateStatus400
        | RoleUpdateStatus401
        | RoleUpdateStatus403
        | RoleUpdateStatus404
        | RoleUpdateStatus500
        | RoleUpdateStatus501
      >,
      { id: RoleUpdatePathId; data?: RoleUpdateData },
      TContext
    > & { client?: QueryClient };
    client?: Partial<RequestConfig<RoleUpdateData>> & {
      client?: Client;
      contentType?: "application/json" | "text/json" | "application/*+json";
    };
  } = {},
) {
  const { mutation = {}, client: config = {} } = options ?? {};
  const { client: queryClient, ...mutationOptions } = mutation;
  const mutationKey = mutationOptions.mutationKey ?? roleUpdateMutationKey();

  const baseOptions = roleUpdateMutationOptions(config) as UseMutationOptions<
    RoleUpdateStatus200,
    ResponseErrorConfig<
      | RoleUpdateStatus400
      | RoleUpdateStatus401
      | RoleUpdateStatus403
      | RoleUpdateStatus404
      | RoleUpdateStatus500
      | RoleUpdateStatus501
    >,
    { id: RoleUpdatePathId; data?: RoleUpdateData },
    TContext
  >;

  return useMutation<
    RoleUpdateStatus200,
    ResponseErrorConfig<
      | RoleUpdateStatus400
      | RoleUpdateStatus401
      | RoleUpdateStatus403
      | RoleUpdateStatus404
      | RoleUpdateStatus500
      | RoleUpdateStatus501
    >,
    { id: RoleUpdatePathId; data?: RoleUpdateData },
    TContext
  >(
    {
      ...baseOptions,
      mutationKey,
      ...mutationOptions,
    },
    queryClient,
  ) as UseMutationResult<
    RoleUpdateStatus200,
    ResponseErrorConfig<
      | RoleUpdateStatus400
      | RoleUpdateStatus401
      | RoleUpdateStatus403
      | RoleUpdateStatus404
      | RoleUpdateStatus500
      | RoleUpdateStatus501
    >,
    { id: RoleUpdatePathId; data?: RoleUpdateData },
    TContext
  >;
}
