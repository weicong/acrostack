/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type { UseMutationOptions, UseMutationResult, QueryClient } from "@tanstack/react-query";
import type {
  RoleCreateData,
  RoleCreateStatus200,
  RoleCreateStatus400,
  RoleCreateStatus401,
  RoleCreateStatus403,
  RoleCreateStatus404,
  RoleCreateStatus500,
  RoleCreateStatus501,
} from "../../models/role/RoleCreate.ts";
import { mutationOptions, useMutation } from "@tanstack/react-query";
import { roleCreate } from "../../clients/role/roleCreate.ts";

export const roleCreateMutationKey = () => [{ url: "/api/identity/roles" }] as const;

export function roleCreateMutationOptions<TContext = unknown>(
  config: Partial<RequestConfig<RoleCreateData>> & {
    client?: Client;
    contentType?: "application/json" | "text/json" | "application/*+json";
  } = {},
) {
  const mutationKey = roleCreateMutationKey();
  return mutationOptions<
    RoleCreateStatus200,
    ResponseErrorConfig<
      | RoleCreateStatus400
      | RoleCreateStatus401
      | RoleCreateStatus403
      | RoleCreateStatus404
      | RoleCreateStatus500
      | RoleCreateStatus501
    >,
    { data?: RoleCreateData },
    TContext
  >({
    mutationKey,
    mutationFn: async ({ data }) => {
      return roleCreate(data, config);
    },
  });
}

/**
 * {@link /api/identity/roles}
 */
export function useRoleCreate<TContext>(
  options: {
    mutation?: UseMutationOptions<
      RoleCreateStatus200,
      ResponseErrorConfig<
        | RoleCreateStatus400
        | RoleCreateStatus401
        | RoleCreateStatus403
        | RoleCreateStatus404
        | RoleCreateStatus500
        | RoleCreateStatus501
      >,
      { data?: RoleCreateData },
      TContext
    > & { client?: QueryClient };
    client?: Partial<RequestConfig<RoleCreateData>> & {
      client?: Client;
      contentType?: "application/json" | "text/json" | "application/*+json";
    };
  } = {},
) {
  const { mutation = {}, client: config = {} } = options ?? {};
  const { client: queryClient, ...mutationOptions } = mutation;
  const mutationKey = mutationOptions.mutationKey ?? roleCreateMutationKey();

  const baseOptions = roleCreateMutationOptions(config) as UseMutationOptions<
    RoleCreateStatus200,
    ResponseErrorConfig<
      | RoleCreateStatus400
      | RoleCreateStatus401
      | RoleCreateStatus403
      | RoleCreateStatus404
      | RoleCreateStatus500
      | RoleCreateStatus501
    >,
    { data?: RoleCreateData },
    TContext
  >;

  return useMutation<
    RoleCreateStatus200,
    ResponseErrorConfig<
      | RoleCreateStatus400
      | RoleCreateStatus401
      | RoleCreateStatus403
      | RoleCreateStatus404
      | RoleCreateStatus500
      | RoleCreateStatus501
    >,
    { data?: RoleCreateData },
    TContext
  >(
    {
      ...baseOptions,
      mutationKey,
      ...mutationOptions,
    },
    queryClient,
  ) as UseMutationResult<
    RoleCreateStatus200,
    ResponseErrorConfig<
      | RoleCreateStatus400
      | RoleCreateStatus401
      | RoleCreateStatus403
      | RoleCreateStatus404
      | RoleCreateStatus500
      | RoleCreateStatus501
    >,
    { data?: RoleCreateData },
    TContext
  >;
}
