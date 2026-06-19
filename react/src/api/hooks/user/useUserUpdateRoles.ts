/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type { UseMutationOptions, UseMutationResult, QueryClient } from "@tanstack/react-query";
import type {
  UserUpdateRolesData,
  UserUpdateRolesPathId,
  UserUpdateRolesStatus200,
  UserUpdateRolesStatus204,
  UserUpdateRolesStatus400,
  UserUpdateRolesStatus401,
  UserUpdateRolesStatus403,
  UserUpdateRolesStatus404,
  UserUpdateRolesStatus500,
  UserUpdateRolesStatus501,
} from "../../models/user/UserUpdateRoles.ts";
import { mutationOptions, useMutation } from "@tanstack/react-query";
import { userUpdateRoles } from "../../clients/user/userUpdateRoles.ts";

export const userUpdateRolesMutationKey = () => [{ url: "/api/identity/users/:id/roles" }] as const;

export function userUpdateRolesMutationOptions<TContext = unknown>(
  config: Partial<RequestConfig<UserUpdateRolesData>> & {
    client?: Client;
    contentType?: "application/json" | "text/json" | "application/*+json";
  } = {},
) {
  const mutationKey = userUpdateRolesMutationKey();
  return mutationOptions<
    UserUpdateRolesStatus200 | UserUpdateRolesStatus204,
    ResponseErrorConfig<
      | UserUpdateRolesStatus400
      | UserUpdateRolesStatus401
      | UserUpdateRolesStatus403
      | UserUpdateRolesStatus404
      | UserUpdateRolesStatus500
      | UserUpdateRolesStatus501
    >,
    { id: UserUpdateRolesPathId; data?: UserUpdateRolesData },
    TContext
  >({
    mutationKey,
    mutationFn: async ({ id, data }) => {
      return userUpdateRoles(id, data, config);
    },
  });
}

/**
 * {@link /api/identity/users/:id/roles}
 */
export function useUserUpdateRoles<TContext>(
  options: {
    mutation?: UseMutationOptions<
      UserUpdateRolesStatus200 | UserUpdateRolesStatus204,
      ResponseErrorConfig<
        | UserUpdateRolesStatus400
        | UserUpdateRolesStatus401
        | UserUpdateRolesStatus403
        | UserUpdateRolesStatus404
        | UserUpdateRolesStatus500
        | UserUpdateRolesStatus501
      >,
      { id: UserUpdateRolesPathId; data?: UserUpdateRolesData },
      TContext
    > & { client?: QueryClient };
    client?: Partial<RequestConfig<UserUpdateRolesData>> & {
      client?: Client;
      contentType?: "application/json" | "text/json" | "application/*+json";
    };
  } = {},
) {
  const { mutation = {}, client: config = {} } = options ?? {};
  const { client: queryClient, ...mutationOptions } = mutation;
  const mutationKey = mutationOptions.mutationKey ?? userUpdateRolesMutationKey();

  const baseOptions = userUpdateRolesMutationOptions(config) as UseMutationOptions<
    UserUpdateRolesStatus200 | UserUpdateRolesStatus204,
    ResponseErrorConfig<
      | UserUpdateRolesStatus400
      | UserUpdateRolesStatus401
      | UserUpdateRolesStatus403
      | UserUpdateRolesStatus404
      | UserUpdateRolesStatus500
      | UserUpdateRolesStatus501
    >,
    { id: UserUpdateRolesPathId; data?: UserUpdateRolesData },
    TContext
  >;

  return useMutation<
    UserUpdateRolesStatus200 | UserUpdateRolesStatus204,
    ResponseErrorConfig<
      | UserUpdateRolesStatus400
      | UserUpdateRolesStatus401
      | UserUpdateRolesStatus403
      | UserUpdateRolesStatus404
      | UserUpdateRolesStatus500
      | UserUpdateRolesStatus501
    >,
    { id: UserUpdateRolesPathId; data?: UserUpdateRolesData },
    TContext
  >(
    {
      ...baseOptions,
      mutationKey,
      ...mutationOptions,
    },
    queryClient,
  ) as UseMutationResult<
    UserUpdateRolesStatus200 | UserUpdateRolesStatus204,
    ResponseErrorConfig<
      | UserUpdateRolesStatus400
      | UserUpdateRolesStatus401
      | UserUpdateRolesStatus403
      | UserUpdateRolesStatus404
      | UserUpdateRolesStatus500
      | UserUpdateRolesStatus501
    >,
    { id: UserUpdateRolesPathId; data?: UserUpdateRolesData },
    TContext
  >;
}
